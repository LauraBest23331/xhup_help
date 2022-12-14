## 2.5 挂接第三方  <!-- {docsify-ignore-all} -->  

 1.  **什么叫挂接 ？** <br>
小鹤官方发布的安装版（win版、安卓版），你安装成功后就能直接使用小鹤音形  <br>
而安装后并不直接就是小鹤音形，还需要进一步操作才能完成的就是挂接版，这个操作过程就叫挂接，这一步需要你来完成
* 挂接两种方式：<br>
①音形码挂接，即把音形编码字词库挂接到支持四码定长方案的软件平台上的挂接方式  <br>
②辅助码挂接，即把音形编码字词库通过自定义短语或其他方式挂接到拼音输入法里，形起辅助作用的挂接方式
<br>

2. **音形码挂接**  <br>
音形码挂接有各种软件平台  
* **rime**  <br>
  rime是一个输入法软件的基础框架，官网：https://rime.im <br>
  基于此框架的各系统端软件代表有：win端的小狼毫、安卓端的同文、MAC端的鼠须管、iOS端的irime<br>
  `小鹤音形安卓版`即基于同文生成，其他系统端小鹤官方提供了挂接包，按照包内的挂接说明完成即可<br>
  rime各系统版本的文件异同：<br>
  码表文件.bin是通用的；.txt文件基本相同，QQ&微信表情编码各系统有差别；default.yaml和flypy.schema.yaml基本相同，其他文件各有不同

* **DDimegen**  <br>
  DDimegen是一个输入法生成器，中文名：多多输入法生成器，官网：https://duo.ink<br>
  `小鹤音形win版`基于此生成器生成，你也可以自己生成

* **搜狗输入法**  <br>
  搜狗五笔的win版、安卓版、iOS版均支持：自定义方案

* **百度输入法**  <br>
  安卓版、iOS版均支持：自定义方案

3. **辅助码挂接**<br>
拼音输入法，支持批量导入自定义短语，且短语容量最好不低于十万条，则基本可实行<br>
win版：各大厂拼音输入法基本都支持<br>
安卓版：百度输入法个性短语<br>
小鹤官方提供了“百度安卓版个性短语.ini”文件，供挂接使用。这是一个文本文件，使用者可根据自己想挂接的各拼音输入法的短语格式要求转成匹配的格式。转格式很简单，在这举个例：  
* 安卓版百度拼音输入法个性短语格式如下：
```
a=1,啊
aa=1,阿
aab=1,阿爸
aaba=1,阿爸
aadb=1,嗷嗷待哺
```
* win版搜狗拼音输入法的自定义短语格式如下：  
```
a,1=啊
aa,1=阿
aab,1=阿爸
aaba,1=阿爸
aadb,1=嗷嗷待哺
```
* 即=和,做了一个交换，转换方法有：<br>
①最简单一般人都能想到的转换方法就是替换，即先把=替换成一个特别符号，再把,替换成=，再把特殊符号替换成,就完成了，注意是英文标点，记事本就行<br>
②懂正则的就更简单，查找`=(\d+),`替换`,$1=`一次就完成，推荐Notepad3<br>
③不懂正则，又出现比这个更复杂的短语格式，不方便简单替换，可以利用excel来完成更复杂的转换<br>
④找工具完成转换<br />

4. **两种挂接的优劣**  <br>
音形码挂接，因为小鹤官方win端安装版是基于多多输入法生成器生成，若对此软件的功能不满或Bug不能解决，就可换成基于小狼毫或其他适用的平台挂接，或非win端使用<br>
辅助码挂接，如不适应四码字词输入方式，可回到拼音输入方式，让音形码成为一种辅助输入方式
* 总结  <br>
音形码`键长`短、确定性高，因此利于盲打，效率高<br>
辅助码`键长`相对长、确定性相对低，因此不太利于盲打，效率相对低<br>
纯拼音`键长`更长、确定性更低，因此基本无法盲打，效率低<br />

* 各输入方式用键情况参考（现代文）：<br>
全拼：4`击键`× 15＝60 字/分钟，`键长`：4  <br>
双拼：4`击键`× 20＝80 字/分钟，`键长`：3  <br>
音形：4`击键`× 25＝100 字/分钟，`键长`：2.4<br>
通常觉得自己打字速度还可以的，`击键`都会高于 4<br>
辅助码要看各人情况：<br>
如果熟悉音形码再用辅助码，速度应该介于双拼和音形之间<br>
如果一开始就用辅助码，速度应该更接近双拼，会延长熟悉码表的时间<br>
如果是那种最初级的只挂单字形，没有简码概念，没有整体码表设计的挂接，不如不挂<br />

5. **挂接文件下载**  <br>
小鹤网盘：http://flypy.ysepan.com  
>码表：字词编码表，俗称“词库”<br>
键长：字均用键数，误称“码长”<br>
击键：每秒按键数

---

<div style="width:100%"><span style="float:left">上一篇：<a href=#/vt.md>2.4 直通</a></span><span style="float:right">下一篇：<a href=#/av.md>2.6 安卓版</a></span></div>

<br>
    

<br>
