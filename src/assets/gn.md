## 2.1 Win版基本功能  <!-- {docsify-ignore-all} -->

一、**常用组合键、直通码**<br>

| 功    能        | 功能键   | □   | 功    能           | 组合键            | 直通码  |
|:-------------:|:-----:|:---:|:----------------:|:--------------:|:----:|
| 中/英           | Shift | □   | 全/半角             | Shift + 空格     | oqb  |
| 次选上屏          | ;     | □   | 中/英标点            | Ctrl + .       | ovy  |
| 翻页            | [ ]   | □   | 简/繁              | Ctrl + Alt + j | ojf  |
| [快符](fh.md)引导 | ;     | □   | [全码字](wt.md#qm)  | Ctrl + Alt + q | oqm  |
| 便捷引导          | '     | □   | [二重简码](wt.md#qm) | Ctrl + Alt + i | oei  |
| 编码清屏          | Tab   | □   | 在线加词             | Ctrl + Alt + = | ojc  |
| 编码上屏          | Enter | □   | 在线调频             | Ctrl + 序号      | -    |
| －             | －     | -   | 小鹤入门             | 打开手册           | xhrm |

二、**其他常用功能**
<span id="lxck"></span>

1. <span  style="color: #FF6600;">离线词库：</span>  
   
   自建一个“词库.txt”文件（名称、位置随意），词条直接在此文件内添加  
   输入 `omb` 打开码表项，右键点击对应分类，导入此文件生效
* 编码格式：<br>
  ①常规：词条+Tab符+编码　　　&nbsp;&nbsp;例：  事件　uijm　（重码默认居后）<br>
  ②居首：词条+Tab符+编码#固　　例：依次　yici#固　（系统已有词条无效）<br>
  ③删词：词条+Tab符+编码#删　　例：五笔　wb#删  <br>
* 直通词库：<br>
  可建一个直通词条用于直接打开离线词库<br>
  例：\$ddcmd\(run\(D\:\\OneDrive\\词库\.txt\)\,\[我的词库\])　ock　注意[替代值](vt.md#tdv)冲突<br>
  即输入 `ock` 打开位于D盘“OneDrive”文件夹内的“词库.txt”文件
  
  <br />

> 注意例词条和编码中间是Tab符，但你直接复制出来可能变成空格，所以自己敲 `Tab` 键吧 <br>
> 有一定词库量且词库内分类或分段排列，建议采用此方式管理用户词库，词库内可用\/\/引导进行分段备注

----

2. <span  style="color: #FF6600;">在线词库</span>  
   
   通过在线加词方式积累的词库，立即生效  
   输入 `omb` 打开码表项，右键点击＜用户＞分类，导出文件备份
* 在线加词<br>
  输入要加词，之后使用组合键<kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>=</kbd>或输入 `ojc` ，可用 <kbd>↑↓</kbd> 调整词长<br>
  或复制要加字词后使用上述组合键或直通码，之后在弹出窗口勾选剪贴板造词<br>
  此方式所加词，存放于 `omb` 打开的码表项中的＜用户＞分类中

* 在线删词<br>
  <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>序号</kbd>从词库中删除候选栏中序号对应的词条<br>
  <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>-</kbd>从词库中删除刚上屏的词条

* 在线调频<br>
  <kbd>Ctrl</kbd> + <kbd>序号</kbd>置顶候选栏中序号对应的词条<p>
  
  以上方式所删所调系统词并无记录，下次更新软件需要重新手动处理<br>

> 零星造词删词可用此方式，如增删修改较多建议采用“离线词库”方式

----

3. <span  style="color: #FF6600;">反查编码</span>  
   <span id="wnj"></span>
   不知道编码时的查询方法
* 知形查音：
  不知道读音可先输入两位查询字符 <B>\`\`</B> 分别替代声韵后继续输入双形，
  从候选字中查看双拼编码
* 知音查形：
  不知道双形可在双拼后输入两位查询字符 <B>\`\`</B> 分别替代首末形，
  从候选字中查看双形编码
  
  > 查询字符（又称万能键）， <B>\`</B> 此符号键位于 `Tab` 键上方，替代任一编码
* 复制反查：
  将要查的字复制后，输入 `ofi` 查询编码

----

4. <span  style="color: #FF6600;">便捷输入</span>  
   
   可快速输入英文、日期、数字、金额或临时启用未开启分类、英文输入等<br>
   **单引号**：引导便捷输入，双击上屏本身
* 任意日期<br>
  输入`'2007.1.8`　候选：  a. 二〇〇七年一月八日　b. 2008年1月8日<br>
  输入`'2008.2.`　候选：  a. 二〇〇八年二月　b. 2008年2月<br>
  当前日期、时间可使用直通码方式： `ouj` `orq`
* 任意金额<br>
  输入 `'2019.12`　　候选：  a\. 二千零一十九点一二　b\. 贰仟零壹拾玖元壹角贰分<br>
  输入 `'2019`　　候选：  a\. 二千零一十九　b\. 贰仟零壹拾玖元整
* 临时生僻<br>
  临时显示＜简字补全＞（含生僻字）分类，如： `'bulw`　瓿<br>
  也可用组合键<kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>q</kbd>或输入 `oqm` 显示分类直接输入
* 临时二重<br>
  临时启用＜二重简码＞分类，如： `'a`　按<br>
  也可用组合键<kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>i</kbd>或直通车 `oei` 启用分类后直接输入
* 临时英文<br>
  临时启用英文模式，完成后用引导键结束，并上屏英文

----

5. <span  style="color: #FF6600;">智能标点</span>  
   
   可快速把中文标点转换为英文标点<br>
   
   如点击逗号后半秒内再次点击逗号，逗号就会变成英文逗号，超时则继续打出中文逗号  
   高级设置→“智能标点表”，等号后所列标点（英文）即为可转换标点

----

> 注：<br>
> 
> 1. 候选项中<span style="color: #FF6600;">提示符号</span>包含意义<br>①<span style="color: #FF6600;">［</span>\.\.\.<span style="color: #FF6600;">］</span>表示此为直通命令，选中则执行命令　　　　如：orm　1\. <span style="color: #FF6600;">\[</span>使用入门<span style="color: #FF6600;">\]</span><br>
>    ②<span style="color: #FF6600;">（</span>\.\.\.<span style="color: #FF6600;">）</span>表示此为转向命令，选中则转向另一条编码　如：of　　1\. bd<span style="color: #FF6600;">（</span>标点<span style="color: #FF6600;">）</span><br>
>    ③<span style="color: #FF6600;"> \<</span>\.\.\.<span style="color: #FF6600;">\> </span> 表示此为一个码表分类，选中则启用此分类　如：oei　　1\. <span style="color: #FF6600;">＜</span>二重简码<span style="color: #FF6600;">＞</span><br>
>    ④<span style="color: #FF6600;"> \* </span>\.\.\.　表示此词条处于＜全码字＞分类中　　　　　如：qut`　5\. <span style="color: #FF6600;">\*</span>去s<br>
> 2. 在线字典中字编码后的符号包含意义 <br>
>    ① <span style="color: #FF6600;">\-</span> 表示此字已有简码让出全码首选位　　　　　　　　如：去　quts<span style="color: #FF6600;">\-</span> <br>
>    ② <span style="color: #FF6600;">\*</span> 表示此字属于生僻字　　　　　　　　　　　　　如：燚　yihh<span style="color: #FF6600;">\*</span><br>
>    ③<span style="color: #FF6600;">＋</span>表示此字属于通用规范字表外增补的字　　　　　如：冇　mcuk<span style="color: #FF6600;">\+</span><br>
>    ①②两项在隐藏＜全码字＞分类时可用<span style="color: #FF6600;">单引号</span>引导临时显示

---

<div style="width:100%"><span style="float:left">上一篇：<a href=#/yy.md>2 应用</a></span><span style="float:right">下一篇：<a href=#/jm.md>2.2 简码</a></span></div>

<br>

<br>
