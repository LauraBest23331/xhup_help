<template>
  <div>
    <div id="markdown-eara">

      <el-row>

        <el-col :xs="0" :sm="6" :md="4" :lg="6" :xl="8">
          <div class="h-1"></div>
        </el-col>
        <el-col :xs="24" :sm="6" :md="8" :lg="12" :xl="8">
          <mavon-editor  class="z-1" :editable="editable" previewBackground="#fff" 
           :toolbars="markdownOption" :defaultOpen="defaultOpen"  :subfield="subfield"  v-model="contents"/>
        
        </el-col>
        <el-col :xs="0" :sm="6" :md="4" :lg="6" :xl="8">
          <div class="h-1"></div>
        
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Course',
  components: {
    },
  props: {

  },
  methods:{
    
  },
  mounted() {
 
 
  },
  data() {
    return {
      markdownOption: {
        readmodel: true
      },
      editable: false,
      contents: `## 导读 

**小鹤音形**  

>一个简单易学高效的输入方案  

**指引**  

这里是一些基础知识，指引你做好学前准备。  
查看[学习指引](vy.md)，了解详情。  

**入门**  

当你准备好，就可进入[入门](xh.md)学习了，[小鹤双拼](up.md)方案内置各大拼音输入法，在其设置中选中即可，在使用中记忆键位，通常一周就能适应。  
如果你想进阶[小鹤音形](ux.md)，可以在使用小鹤双拼一周后开始，小鹤音形的音部即双拼，循序渐进能让学习曲线更加平滑。  

**应用**  

小鹤音形的学习就要接触到小鹤音形[输入法](yy.md)，这是一个独立的输入法，需要在小鹤官网下载安装使用。同时你需要对输入法的一些功能有所了解，那就是这部分的内容。  

**捐赠**  

如果你觉得小鹤双拼&小鹤音形对你打字速度的提高有所帮助，或者想对小鹤的持续发展提供一点支持，欢迎给我们[捐赠](gy.md) 🤟  

**交流**  

可到[论坛](https://bbs.flypy.com)或Q群<span><a target="_blank" href="https://qm.qq.com/cgi-bin/qm/qr?k=XC2HOCVX8H1cWAaVLNjclwXSE1V1s_AD&jump_from=webapi">182883808</a></span>交流和反馈问题。

---

<div style="width:100%"><span style="float:right">下一篇：<a href="#/1_0">1 入门</a></span></div>

<br>
    

<br>
`,
      subfield: false,
      defaultOpen: 'preview',
      mkdata: {}
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
  .v-note-wrapper{
    z-index: 10 !important;
  }
</style>
