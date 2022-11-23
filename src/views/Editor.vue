<template>
    <div v-loading.fullscreen.lock="fullscreenLoading" element-loading-spinner element-loading-text="保存中...">
        <el-header  height="60px" class="fixed w-full bg-white shadow-md flex justify-between items-center w-100">
            <div class="collpase_tag flex justify-between items-center w-20" > 
                <el-button @click="goBack" type="primary" icon="el-icon-arrow-left">上一页</el-button>
            </div>
            <div class="collpase_tag flex justify-between items-center w-24" > 
                <img class="login_png" src="@/assets/logo.png" alt="">
            </div>
        </el-header>
      <div id="markdown-eara">

        <el-row>
  

            <mavon-editor   class="z-1" @save="saveMd" 
            :editable="editable" previewBackground="#fff"  
             :defaultOpen="defaultOpen"  
            :subfield="subfield"  v-model="mkdata.contents"/>
          

        </el-row>
      </div>
    </div>
  </template>
  
  <script>


  export default {
    name: 'Editor',
    components: {
      },
    props: {

    },
    mounted() {
      const that = this
      this.$http.get('/article/getArticle?id=1001').then(res=>{
        console.log(res);
        that.mkdata= res.data.mkdate
        
      })
    },
    methods:{
        goPage(e) {
        this.$router.push({path: e})
        },
        goBack() {
            this.$router.back()
        },
        saveMd() {
            console.log('正在保存');
            this.fullscreenLoading = true;
            const that = this
            setTimeout(() => {
              let _contents = this.mkdata.contents
                let _author = this.author
                let _authorName = this.authorName
                let _id = this.id
                let _title = this.title
                this.$http.post('/article/edit', {
                  contents: _contents,
                  author: _author,
                  authorName: _authorName,
                  id: _id,
                  title: _title
                }).then(res=>{
                  console.log(res);
                  that.fullscreenLoading = false;
                  this.$message('保存成功 ');

                })
            }, 1000);

        }
    },
    data() {
      return {
        // markdownOption: {
        //   navigation: true,
        //   readmodel: true
        // },
        editable: true,
        contents: '# 虎码简明教程\n in nuxt.js',
        subfield: true,
        title: '虎码简明教程',
        author: '18111002318',
        authorName: '头秃酱',
        id: 1001,
        defaultOpen: 'preview',
        fullscreenLoading: false,
        mkdata: {
          contents: ""
        }
      }
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
    @media (min-width: 1060px) {
      #markdown-eara {
      margin-top: 80px;
    }   
    }

    .el-header {
        top:0;
      padding-left: 50px;
      padding-right: 50px;
    }
    .el-row {
        padding-left: 100px;
        padding-right: 100px;

    }
    .el-loading-spinner svg{
      display: inline !important;
    }
  </style>
  