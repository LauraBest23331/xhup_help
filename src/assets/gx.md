## 5.1 更新日志  <!-- {docsify-ignore-all} -->  

win系统9.x版和10.x的不同见“<span style="color: #00A4EF;"> [差别](#ib) </span>”，选择自己能容忍Bug的版本安装即可

<br>

下载地址：<http://flypy.ysepan.com>

<br>
<br>
<div style="width:100%"><span style="color: #FF6600;"><span style="float:left">win  10.9d&9.9x —— 安卓 10.9.3</span><span style="float:right">2022年11月20日</span></span></div>

----

本次更新：  

1. 二简词调整：直到vd，“指定”放全码首选
2. “梳理”放全码首选
3. 安卓悬浮窗调回之前的模式，如适应前版模式，请参考入门相关文档自行修改——安卓
4. shift和回删键的上划功能互换，shift上划开关候选窗，回删键上划删行。算是为了以后回删上划做撤销上屏键，提前适应吧——安卓
5. 快符的 ;p 调整为 〔〕，;m 调整为 Home——win


<br>
<div style="width:100%"><span style="color: #FF6600;"><span style="float:left">win  10.9c&9.9w —— 安卓 10.9.2</span><span style="float:right">2022年10月23日</span></span></div>

----

本次更新：  

1. 荆蝥漪，调回三简；增加二简词：举例，全码首选：距离
2. 增加两个特符：otw ‱、oty ü
3. 增加一组配色参数“dark_scheme”、“light_scheme”，分别放在“浅浅”、“深深”这两个配色中——安卓
4. 适配更高同文版本简繁转换——安卓
5. 悬浮窗的显示方式恢复原来的方式（显示候选字词）——安卓
6. 优化码表


<br>

<div style="width:100%"><span style="color: #FF6600;"><span style="float:left">win  10.9b&9.9v —— 安卓 10.9.1</span><span style="float:right">2022年9月9日</span></span></div>

----

本次更新：  

1. 二简字：“率”换成“绿”
2. 二简词：增加“即使、正在、一边、按键、周围、不懂、最终、整句、即可、确认、推导”，减少“安装、推倒”
3. 二重简码：减少“战、隐、居、备”，增加“背、涩”
4. 简繁转换文件TW改HK——安卓
5. 取消“丘”的容错码qqj
6. 比翼主题各键盘等高修正——安卓
7. 快符： p恢复“～”，n恢复“end”——win
8. 优化码表

<br>

<div style="width:100%"><span style="color: #FF6600;"><span style="float:left">win  10.9a&9.9u —— 安卓 10.9.0</span><span style="float:right">2022年8月4日</span></span></div>

----

本次更新：  

1. “轰”字调整到三简
2. 优化码表

<br>

<div style="width:100%"><span style="color: #FF6600;"><span style="float:left">win  10.9&9.9t —— 安卓 10.8.9</span><span style="float:right">2022年7月1日</span></span></div>

----

本次更新：  

1. “什”字两个音都调到三简次选
2. 优化码表
3. 三码填空码移到sys文件内，便于修改——安卓

<br>

<div style="width:100%"><span style="color: #FF6600;"><span style="float:left">win  10.8&9.9s —— 安卓 10.8.8</span><span style="float:right">2022年5月28日</span></span></div>

----

本次更新：  

1. 简字补全、简词补全，分类名称调整为：全码字、全码词
2. ;n模拟end键调整为右方向键，;p调整为成对单引号‘’。end的数值为35，可调回——win
3. 上下结构的字其中上部为左中右结构，个别字在字典中先写中间，现在统一为左先，比如“兜”，取消dzbe
4. 统一“哥”的编码为gedk，取消geak；“呼之欲出”放三简次选，全码给“回忆”
5. 去掉两个二简词：无关、类似
6. 简繁转换部分字修正
7. 语音功能无作用，从主题中取消此按键，菜单项暂定调整为“分享”功能，选中一段文字可分享到其他app中——安卓
8. 主题版本升级为5.4，同时适配同文3.2.6，如需剪贴板功能，可自行安装同文3.2.6  
 迁移办法如下：——安卓  
* 清空rime目录下所有文件，复制所有flypy目录下所有文件到rime目录内  
* 打开文件flypy.schema.yaml，找到：  
```
   - options: [ _liquid_keyboard ]
    #states: [ ⏍ ]
```

   > 删除#号，启用状态栏剪贴板图标

* 再找到：
```
   - options: [ _keyboard_default, _keyboard_defaultVJ]
    states: [ "　　　　　　  ", "　　　　　　  "]
```
   > 删除上面两个引号内的部分空格，以调整状态栏上隐藏键的显示位置  

* 打开s2hk.json文件，替换所有ocd为ocd2
* 部署输入法即可  

<br>

<div style="width:100%"><span style="color: #FF6600;"><span style="float:left">win  10.7&9.9r —— 安卓 10.8.7</span><span style="float:right">2022年3月20日</span></span></div>

----

本次更新：  

1. 三简字“绅”调整为唯一候选；增加二简词：“两边”
2. 智能标点默认去掉句点，加上!^    可自行调整——win
3. 优化码表 

<br>

<div style="width:100%"><span style="color: #FF6600;"><span style="float:left">win  10.6 —— 安卓 10.8.6</span><span style="float:right">2022年1月21日</span></span></div>

----

本次更新：  

1. 此版的变化主要是让码表更趋正规化，基本补全简词的全码，比如“vidc知道”，让新人问题更少，老人可直接清空“简词补全”分类
2. 修正和补全个别字的读音
3. 修正上个版“二重简码”分类导出问题——win
4. 快符中的;p改成了/——安卓

<br>

<span id="ib"></span>  

<br>

<div style="width:100%"><span style="float:left"><span style="color: #00A4EF;">9.x和10.x版本的差别：</span>（同时发布说明同步码表，其他无变化）</span><span style="float:right">注</span></div>

----

win系统 9.x版对应多多378版程序，10.x版对应多多423版程序，见ogy

10.x版  
解决问题：

1. 编辑词条过程中如果使用了回车键，可能造成的码表丢失问题
2. word中偶尔不能使用问题
3. 可能解决win10重启丢失输入法问题

新增问题：
1. 英文状态非系统英文状态，由此引起一系列英文状态的问题

新增功能：
1. 输入法激活热键，默认设置为：ctrl+;
2. 单个词条字符数扩容

---

<div style="width:100%"><span style="float:left">上一篇：<a href=#/gy.md>5 关于</a></span></div>

<br>
    

<br>