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
      contents: `## 1.1 双拼\_\_\_\_小鹤双拼  <!-- {docsify-ignore-all} -->  

一、**双拼方案**：  
使用两个字母对汉字进行编码的方案，第一个字母表示声母，第二字母表示韵母，没有声母时用零声母代替
单字母声母韵母键位不变，双字母声母和多字母韵母位置见“双拼键位图”  

二、**零声母方案**：  
指全拼中无声母的韵母音节在双拼中的处理方案，用来充当其声母的字母即零声母   

1. 本方案以韵母首字母为零声母，即把韵母的首字母当作声母   
单字母韵母，零声母 + 韵母所在键，如： 啊＝aa 哦=oo 额=ee   
双字母韵母，零声母 + 韵母末字母，如： 爱＝ai 恩=en 欧=ou   
三字母韵母，零声母 + 韵母所在键，如： 昂＝ah  

2. 简单说：<span style="color: #00A4EF;">双字母音节保持全拼方式，一三字母音节为首字母加韵母所在键</span>   

三、**双拼键位图**  
![](https://pic.imgdb.cn/item/637e235516f2c2beb16ed945.png)

* 学习过程：一小时记忆键位，一周习惯双拼节奏，一月恢复全拼时速度<p/>
* <p align="left" style="color: #FF6600;">请在各拼音输入法的设置中选择本方案使用<p/>  

*****
* 记忆口诀①（官方版）：</br>

Qiu | Wei | Ruan | T\_ue\_ve | Yun | U\_shu | I\_chi | Song\_iong | Dai | Fen | Geng | Hang | J\_an 
:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: 
秋 |闱 |软 |月 |云 |梳 |翅 |松　拥 |黛 |粉 |更 |航 |安

Kuai\_ing  |Liang\_uang  |Zou |Xia\_ua |Pie |Cao |V\_zhui\_v  |Bin |Niao |Mian
:---: |  :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: 
快　莺  |两　望  |奏 |夏　蛙 |撇  |草  |追　鱼 |滨  |鸟  |眠

<p><br>

* 记忆口诀②（智信恒版）： </br>

Kuai\_ing| Liang\_uang| Ruan| Cao| Zou| T\_ue\_ve| Qiu| Yun| Wei| J\_an| Mian
 :---: |  :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: 
快　迎| 两　王 | 软| 草| 走 | 特　约 | 秋| 云| 为| 见| 面

Xia\_ua| Song\_iong| U\_shu| I\_chi| V\_zhui\_v| Geng| Dai| Bin| Niao| Fen| Pie| Hang
 :---: |  :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: 
夏　娃| 怂　恿 | 书| 痴| 追| 更| 待| 滨| 鸟| 分| 撇| 航

---

<div style="width:100%"><span style="float:left">上一篇：<a href="#/1_0">1 入门</a></span><span style="float:right">下一篇：<a href="#/1_2_0">1.2 双形</a></span></div>

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
