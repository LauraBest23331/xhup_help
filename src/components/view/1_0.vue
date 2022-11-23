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
      contents: `## 1 入门概述  <!-- {docsify-ignore-all} -->  

**小鹤音形：**  <p>
是单字以“双拼＋双形”组合的标准四码音形类输入方案<p>
<span style="color: #00A4EF;">[双拼](#/1_1)</span>：声母、韵母各用一个字母表示，一个汉字的音用两个字母表达<br/>
<span style="color: #00A4EF;">[双形](#/1_2)</span>：根据拆分规则把一个汉字按字根拆分出两个部分，以区分同音字<br/>

* 双拼初学者请先阅读[《学习指引》](#/4_0) 

----

**单字全码：**  双拼&nbsp;+&nbsp;双形  

单字|全拼|双拼|双形|<span style="color: #00A4EF;">全码</span>
 :-: | :-: | :-: | :-: | :-: 
 小 | xiao | xn|ld丨丶 | xnld 
 鹤 | he | he | dn丶鸟 | hedn 
 音 | yin | yb | lo立日 | yblo 
 形 | xing | xk | kp开丿 | xkkp 

<span style="color: #00A4EF;"><B>简码</B></span>：未满四码即显的字为简码字<br>
　　　例：x小、hed河，称一简字、三简字 <br>
　　　实际使用有简打简，一二简字列表见“[简码篇](#/2_3)”  

----

**构词规则：**  

字数 | 规则 | 例词 | <span style="color: #00A4EF;">全码</span>
 :-:  | :-: | :-: | :-: 
二字词 | 首字前两码＋末字前两码 | 双拼 | ulpb
三字词 | 前两字首码＋末字前两码 | 输入法 | urfa 
四以上 | 前三字首码＋末字首码 | 他乡遇故知 | txyv 

<span style="color: #00A4EF;"><B>简码</B></span>：取各字声母未满四码即显的词为简码词<br>
　　　例：vd知道、yly越来越，称二简词、三简词<br>
　　　二简词在记忆情况下使用，列表见“[二简词](jm.md#ejc)”  

----
 * 小鹤官方 flypy.com 发布『小鹤音形』输入法  

 * 采用《通用规范汉字表》国发〔2013〕23号文规定用字，本表收字8105个  

---

<div style="width:100%"><span style="float:left">上一篇：<a href="#/Welcome">导读</a></span><span style="float:right">下一篇：<a href="#/1_1">1.1 双拼</a></span></div>

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
