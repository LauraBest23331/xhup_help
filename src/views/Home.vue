<template>
    <div>
    
        <div class="fullScreen flex" @touchmove.prevent v-if="!folded">
            <div class=" side_left relative">
    
    
            </div>
            <div class="side_right bg-red" @touchmove.prevent @click="makeFold"></div>
    
        </div>
        <div @touchmove.prevent class="aside z-10 bg-white h-full transition-all fixed side_left duration-500 ease-out " :class="{'transm':!folded}">
            
            <el-menu router unique-opened :default-active="$router.currentRoute.path" class="h-full " background-color="#fff" text-color="#333" @select="handleSelect" >
                <div class="h-12 flex justify-center items-center w-full"><img class="login_png1" src="@/assets/img/logo1.png" alt="" @click="goPage('/Welcome')"></div>
    
                <el-submenu index="1">
                    <template slot="title"><span class="el-submenu-title">1 入门</span>
                    </template>
                <el-menu-item index="/1_0" @click="makeFold">概述</el-menu-item>
                <el-menu-item index="/1_1" @click="makeFold">1.1 双拼（音）</el-menu-item>

                <el-submenu index="1-2">
                    <template slot="title"><span class="el-submenu-title">1.2 双形（形）</span>
                </template>
                <el-menu-item index="/1_2_0" @click="makeFold">概述</el-menu-item>

                <el-menu-item index="/1_2_1" @click="makeFold">1.2.1 规则</el-menu-item>

                <el-menu-item index="/1_2_2" @click="makeFold">1.2.2 部件</el-menu-item>
                <el-menu-item index="/1_2_3" @click="makeFold">1.2.3 小字</el-menu-item>
                <el-menu-item index="/1_2_4" @click="makeFold">1.2.4 例字</el-menu-item>
                <el-menu-item index="/ulxk" @click="makeFold">1.2.5 合图</el-menu-item>

            
              </el-submenu>
            </el-submenu> 
            <el-submenu index="3">
                    <template slot="title"><span class="el-submenu-title">2 应用</span>
                </template>
                <el-menu-item index="/1_2_0" @click="makeFold">概述</el-menu-item>

                <el-menu-item index="/Practice/Intro" @click="makeFold">2.1 功能</el-menu-item>

                <el-menu-item index="/Practice/Ad" @click="makeFold">2.2 简码</el-menu-item>
                <el-menu-item index="/2_3" @click="makeFold">2.3 符号</el-menu-item>
                <el-menu-item index="/Practice/Ad" @click="makeFold">2.4 直通</el-menu-item>
                <el-menu-item index="/Practice/Ad" @click="makeFold">2.5 挂接</el-menu-item>
                <el-submenu index="3-6">
                    
                    <template slot="title"><span class="el-submenu-title">2.6 安卓版</span>
                        
                    </template>
                    <el-menu-item index="/3_6_0" @click="makeFold">概述</el-menu-item>
                        <el-menu-item index="/3_6_1" @click="makeFold">2.6.1 皮肤效果</el-menu-item>
           
              
                  </el-submenu>
            </el-submenu>
             <el-submenu index="4">
                    <template slot="title"><span class="el-submenu-title">3 FAQ</span>
                </template>
                <el-menu-item index="/1_2_0" @click="makeFold">概述</el-menu-item>

              <el-menu-item index="/Practice/Intro" @click="makeFold">3.1 致初学者</el-menu-item>
              <el-menu-item index="/Practice/Intro" @click="makeFold">3.2 双拼零声母方案</el-menu-item>
              <el-menu-item index="/Practice/Intro" @click="makeFold">3.3 小字设计目的</el-menu-item>
              <el-menu-item index="/Practice/Intro" @click="makeFold">3.4 关于字符集</el-menu-item>
              <el-menu-item index="/Practice/Intro" @click="makeFold">3.5 出简让全</el-menu-item>
              <el-menu-item index="/Practice/Intro" @click="makeFold">3.6 “记”与“不记”</el-menu-item>
              <el-menu-item index="/Practice/Intro" @click="makeFold">3.7 常见问题解答</el-menu-item>              
            </el-submenu>
            <el-submenu index="5">
                <template slot="title"><span class="el-submenu-title">4 指引</span>
            </template>
            <el-menu-item index="/4_0" @click="makeFold">概述</el-menu-item>

            <el-menu-item index="/Practice/Intro" @click="makeFold">4.1 双拼学习</el-menu-item>

            <el-menu-item index="/Practice/Ad" @click="makeFold">4.2 音形学习</el-menu-item>
            <el-menu-item index="/Practice/Ad" @click="makeFold">4.3 练习</el-menu-item>
            
            </el-submenu>
            <el-submenu index="6">
                    <template slot="title"><span class="el-submenu-title">5 关于</span>
                </template>
                <el-menu-item index="/1_2_0" @click="makeFold">概述</el-menu-item>

                <el-menu-item index="/Practice/Intro" @click="makeFold">5.1 更新日志</el-menu-item>

                
            </el-submenu>


          </el-menu>
        </div>
    <el-container  class="cp">
    <el-header  height="60px" class="fixed  bg-white shadow-md flex justify-between items-center ">
      <div class="collpase_tag flex justify-between items-center " >
          <div @click="foldStateChange()" class="h-12 w-12 flex justify-center items-center"><img class="login_png" src="@/assets/openx.png" alt=""></div>
        </div>


    </el-header>
    <el-main>
            <router-view></router-view>
      </el-main>
    </el-container>
   
  </div>
 
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
    name: 'Home',
    components: {

    },
    data() {
        return {
            activeIndex: '/Welcome',
            cWidth: 0,
            cheight: -1,
            folded: true,
            loginUser: {},
            isLogin: false
        }
    },
    created() {
        let _loginUser = JSON.parse(localStorage.getItem('loginUser'))
        if (_loginUser) {
            this.isLogin = true
            this.loginUser = _loginUser

        }

    },
    mounted() {


    },
    computed: {
        getTimeString() {
            let now = new Date(),
            hour = now.getHours()
            if (hour < 6) { return("凌晨好！") } else if (hour < 9) {
                return("早上好！")
            } else if (hour < 12) { return("上午好！") } else if (hour < 14) { return("中午好！") } else if (hour < 17) { return("下午好！") } else if (hour < 19) { return("傍晚好！") } else if (hour < 22) { return("晚上好！") } else { return("夜里好！") }
        }
    },
    methods: {
        handleCommand(command) {
            if (command === '/Logout') {
                this.logout()

                return
            }
            this.goPage(command)
        },
        logout() {
            this.isLogin = false
            this.loginUser = null
            this.$message.warning('登出成功')
            localStorage.removeItem('loginUser')

        },
        foldStateChange() {
            this.folded = !this.folded
            console.log(this.folded);
        },
        makeFold() {
            this.folded = true
        },
        handleSelect(key, keyPath) {
            console.info(key, keyPath);
        },
        goPage(e) {
            this.$router.push({ path: e })
        }
    }
}
</script>

<style scoped>
@media(min-width: 980px) {

    .el-menu {
        display: block;
        border: none !important;
    }
    .el-main {
        padding-top: 0px !important;
    }
    .el-header {
        padding-left: 50px;
        padding-right: 50px;
        z-index: 10;
    }
    .search:hover {
        cursor: pointer;
    }
    .side_left {
        width: 25%;
        
    }
    .side_right {
        width: 75%;
    }
    .el-header {
        z-index: 99;
    }
    .el-menu-item {
        width: 100% !important;
        font-weight: 600;
        font-size: 16px;
    }
}

@media (max-width: 550px) {
    .m_login_box {
        position: absolute;
        bottom: 0;
        height: 120px;
        /* background-color: #ffc34b; */
        width: 100%;
    }
    .m_logout_btn {
        font-size: 16px;
        display: inline-block;
        border-radius: 8px;
        position: relative;
        font-weight: 600;
        background-color: #ec6668;
        color: #fff;
        margin-right: 18px;
        padding: 8px 1em;
        width: 80%;
    }
    .m_login_btn {
        font-size: 16px;
        display: inline-block;
        border-radius: 8px;
        position: relative;
        font-weight: 600;
        background-color: #ffc34b;
        color: #fff;
        margin-right: 18px;
        padding: 8px 1em;
        width: 80%;
    }
    .m_reg_btn {
        font-size: 16px;
        display: inline-block;
        border-radius: 8px;
        position: relative;
        font-weight: 600;
        background-color: #fb9092;
        color: #fff;
        margin-right: 18px;
        width: 80%;
        padding: 8px 1em;
    }
    .header-right {
        width: 20px;
    }
    .hidden-md {
        display: none;
    }

    .el-submenu__title {
        font-weight: 600 !important;
        font-size: 16px !important;
    }
    .is-active {
        background-color: #ffc34b !important;
        border-top-right-radius: 27px;
        border-bottom-right-radius: 27px;
    }
    .title {
        font-weight: 600;
        font-size: 16px;
    }
    /* .el-main {
        padding-top: 60px !important;
    } */
    .side_left{
        width: 75%;
    }
    .side_right {
        width: 25%;
    }
    .el-header {
        z-index: 11;
    }
    .el-menu-item {
        width: 80% !important;
        font-weight: 600;
        font-size: 16px;
    }
}
.el-submenu-title {
        font-weight: 600 !important;
        font-size: 16px !important;
    }
.login_png1{
    width: 100px;
    height: auto;
}
.fullScreen {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 9000;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.4);
}

.el-main {
    padding: 0;
}

.aside {
    left: -100%;
    z-index: 9999;
}

.transm {
    left: -0%;
}
</style>
