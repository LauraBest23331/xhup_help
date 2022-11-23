<template>
    <div id="register_main">
    
    
    
        <el-header height="60px" class="fixed w-full bg-white shadow-md flex justify-between items-center w-100">
            <div class="collpase_tag flex justify-between items-center">
                <span class="hello text-gray-500 text-xl subpixel-antialiased antialiased font-semibold">欢迎加入虎码大家庭！</span>
            </div>
            <div class="collpase_tag flex justify-between items-center w-16">
                <img class="login_png" src="@/assets/logo.png" alt="">
            </div>
        </el-header>
        <el-row>

            <el-col :xs="0" :sm="6" :md="4" :lg="6" :xl="8">

                <div class="h-1"></div>
    
    
    
            </el-col>
    
    
    
            <el-col :xs="24" :sm="6" :md="8" :lg="12" :xl="8">
    
    
    
                <div class="register_container">
    
                    <div class="register_box" v-loading="checking">
    
                        <el-form ref="form" :rules="rules" :model="form" label-width="80px">
    
                            <el-form-item label="账号" prop="userid">
    
    
    
                                <el-input placeholder="请输入邮箱号" v-model="form.userid" :disabled="isCheck"></el-input>
    
    
    
                            </el-form-item>
 
                            <el-form-item label="昵称" prop="tag">

                                <el-input placeholder="请输入昵称" v-model="form.tag" :disabled="isCheck"></el-input>

                            </el-form-item>
                            <el-form-item label="密码" prop="passwd">
                                <el-input placeholder="创建你的密码" v-model="form.passwd" :disabled="isCheck"></el-input>
                            </el-form-item>
                            <el-row>
                                
                                <el-button :type="isCheck?'success':'warning'" plain @click="makeChecking" :disabled="isCheck">立即注册</el-button>
                                <el-button type="info" @click="goBack">返回</el-button>
                            </el-row>
                    </el-form>
                    </div>

                </div>

            </el-col>

            <el-col :xs="0" :sm="6" :md="4" :lg="6" :xl="8">
                <div class="h-1"></div>
    
            </el-col>

        </el-row>
    
    
    
    </div>
</template>

<script>
export default {
    name: 'register',
    beforeCreate() {

    },
    //销毁前清除
    mounted() {

    },

    created() {},
    data() {
        var validatePass = (rule, value, callback) => {
            let reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            if (value === '') {
                callback(new Error('请输入邮箱号'));
            }
            if (!reg.test(value)) {
                callback(new Error('请输入正确邮箱号'));

            } else {
                if (this.form.checkPass !== '') {
                    this.$refs.form.validateField('checkPass');
                }
                callback();
            }
        }
        return {
            form: {
                userid: '',
                tag: '',
                passwd: '',
                role: '',
                clan: '',
                name: '未知',
                token: '',
                checkPass: '',
            },
            checking: false,
            isCheck: false,
            clanName: ['九龙', '恶城', '异族', '凉城'],
            clan: -1,
            rules: {
                userid: [
                    { validator: validatePass, trigger: 'blur' }

                ],
                passwd: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { min: 5, max: 16, message: '请输入5到16位的密码', trigger: 'blur' }


                ],
                token: [
                    { required: true, message: '请输入API令牌', trigger: 'blur' }

                ],
                tag: [
                    { required: true, message: '请输入标签', trigger: 'blur' },


                ]
            },
        }
    },
    methods: {
        goBack() {
            this.$router.back()
        },
        makeRegister() {
            const that = this
            that.checking = true
            this.$http.post('/user/register', {
                account: that.form.userid,
                passwd: that.form.passwd,
                uname: that.form.tag,
            }).then(res => {
                console.log(res);
                if (res.data.code === 200) {
                    setTimeout(() => {

                        that.checking = false;
                        that.$message.success('注册成功！')
                        that.$router.push('/Login')

                    }, 1000)
                    return
                } else {

                    setTimeout(() => {
                        that.$message.error('注册失败！未知的错误')
                        that.checking = false;

                    }, 1000)
                    return

                }
            })
        },
        makeChecking() {
            const that = this
            this.$refs.form.validate(async valid => {
                if (!valid) return
                this.checking = true


                const { data: result } = await this.$http.post('/user/isExist', {
                    account: that.form.userid
                })
                console.log(result.code);

                if (result.code != 200) {
                    console.log(result.code);
                    that.$message.error('此邮箱号已被注册！请联系管理员')
                    this.checking = false
                    return
                }
                const { data: result2 } = await this.$http.post('/user/isUnameExist', {
                    uname: that.form.tag
                })
                if (result2.code != 200) {
                    console.log(result.code);
                    that.$message.error('此昵称已被注册！')
                    that.checking = false
                    return
                }
                const { data: result3 } = await this.$http.post('/user/register', {
                    account: that.form.userid,
                    passwd: that.form.passwd,
                    uname: that.form.tag,

                })
                if (result3.code === 200) {
                    setTimeout(()=>{
                        that.checking = false;
                    that.$message.success('注册成功！')
                    that.$router.push('/Login')

                    }, 1000)

                    return
                }else {
                    that.$message.error('网络错误！注册失败')

                }

            })
        }
    }

}
</script>

<style lang="less" scoped>
#register_main {
    background-size: auto 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url(https://coc.gameark.cn/images/index_03.jpg) !important;
    padding-top: 50px;
}

.el-header {
    top: 0;
    z-index: 10;
}

@media (min-width: 1060px) {
    .hello {
        margin-left: 40px;
    }
}

.register_container {
    width: 100%;
    height: 100%;
    .register_box {
        width: 100%;
        background-color: #fff;
        padding: 0 15px;
        box-sizing: border-box;
        height: 100vh;
        opacity: 0.9;
        .el-form {
            padding-top: 100px;
            width: 100%;
        }
        .el-row {
            display: flex;
            justify-content: center;
        }
        .el-button {
            margin-bottom: 10px;
        }
    }
}

.sub-title {
    color: #8492A6;
    display: flex;
    justify-content: center;
    font-size: 14px;
    box-sizing: border-box;
    text-indent: 10px;
    margin-bottom: 5px;
}
</style>