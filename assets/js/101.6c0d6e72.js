(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{424:function(v,t,s){"use strict";s.r(t);var _=s(7),a=Object(_.a)({},(function(){var v=this,t=v._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("p",[v._v("一些CSS计算单位\n")]),v._v(" "),t("h2",{attrs:{id:"px"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#px"}},[v._v("#")]),v._v(" PX")]),v._v(" "),t("div",{staticClass:"custom-block note"},[t("p",{staticClass:"custom-block-title"},[v._v("px")]),v._v(" "),t("p",[v._v("CSS像素的单位也叫做px。它是图像显示的基本单元，既不是一个确定的物理量，也不是一个点或者小方块，而是一个抽象概念。")]),v._v(" "),t("p",[v._v("默认情况下一个CSS像素等于一个物理像素的宽度")]),v._v(" "),t("p",[v._v("但是在高PPI的设备上，CSS像素甚至在默认状态下就相当于多个物理像素的尺寸。 对应的屏幕也就是所谓的2倍,3倍屏。")])]),v._v(" "),t("h2",{attrs:{id:"em"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#em"}},[v._v("#")]),v._v(" EM")]),v._v(" "),t("div",{staticClass:"custom-block note"},[t("p",{staticClass:"custom-block-title"},[v._v("em")]),v._v(" "),t("p",[v._v("相对于"),t("strong",[v._v("父元素")]),v._v("大小")])]),v._v(" "),t("h2",{attrs:{id:"rem"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rem"}},[v._v("#")]),v._v(" REM")]),v._v(" "),t("div",{staticClass:"custom-block note"},[t("p",{staticClass:"custom-block-title"},[v._v("rem")]),v._v(" "),t("p",[v._v("类似于em,不同的是：rem是相对于"),t("strong",[v._v("html元素")]),v._v("的大小。")]),v._v(" "),t("p",[v._v("例如:")]),v._v(" "),t("p",[t("strong",[v._v("根元素(html)")]),v._v(" 设置"),t("code",[v._v("font-size=12px;")]),t("strong",[v._v("非根元素")]),v._v("设置"),t("code",[v._v("width:2rem;")]),v._v("则换成"),t("strong",[v._v("px")]),v._v("表示就是"),t("strong",[v._v("24px")])])]),v._v(" "),t("h2",{attrs:{id:"vw-vh"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vw-vh"}},[v._v("#")]),v._v(" VW / VH")]),v._v(" "),t("div",{staticClass:"custom-block note"},[t("p",{staticClass:"custom-block-title"},[v._v("相对视口尺寸 100:1 计算")]),v._v(" "),t("p",[t("strong",[v._v("vw: viewport width")])]),v._v(" "),t("p",[v._v("1vw =1/100视口宽度")]),v._v(" "),t("p",[t("strong",[v._v("vh: viewport height")])]),v._v(" "),t("p",[v._v("1vh =1/100视口高度")])]),v._v(" "),t("h2",{attrs:{id:"vmin-vmax"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vmin-vmax"}},[v._v("#")]),v._v(" VMIN   /VMAX")]),v._v(" "),t("div",{staticClass:"custom-block note"},[t("p",{staticClass:"custom-block-title"},[v._v("vmin")]),v._v(" "),t("p",[t("strong",[v._v("使用可视窗口小那一边用作单位比例")])]),v._v(" "),t("p",[v._v("可视窗口：宽 < 高时 ,宽用作比例, 所以:1vm =1vw")]),v._v(" "),t("p",[v._v("可视窗口：宽 > 高时 ,高用作比例, 所以1vm =1vh")])]),v._v(" "),t("div",{staticClass:"custom-block note"},[t("p",{staticClass:"custom-block-title"},[v._v("vmax")]),v._v(" "),t("p",[t("strong",[v._v("使用可视窗口大的那一边用作单位比例")])]),v._v(" "),t("p",[v._v("可视窗口：宽 < 高时 ,高用作比例, 所以1vm =1vh")]),v._v(" "),t("p",[v._v("可视窗口：宽 > 高时 ,宽用作比例, 所以1vm =1vw")])]),v._v(" "),t("div",{staticClass:"custom-block theorem"},[t("p",{staticClass:"title"},[v._v("示例说明")]),t("p",[t("strong",[v._v("手机竖屏")]),v._v("情况下，"),t("strong",[v._v("可视窗口:宽 < 高")])]),v._v(" "),t("p",[v._v("宽度设置"),t("code",[v._v("vmin")]),v._v("  : 1vm =  1vw = 物理屏幕宽度/100")]),v._v(" "),t("p",[v._v("高度设置"),t("code",[v._v("vmax")]),v._v("  : 1vm = 1vh = 物理屏幕高度/100")]),v._v(" "),t("p",[t("strong",[v._v("手机横屏")]),v._v("情况下，"),t("strong",[v._v("可视窗口:宽 > 高")])]),v._v(" "),t("p",[v._v("宽度设置"),t("code",[v._v("vmin")]),v._v("  : 1vm = 1vh = 物理屏幕高度/100")]),v._v(" "),t("p",[v._v("高度设置"),t("code",[v._v("vmax")]),v._v("  : 1vm = 1vw = 物理屏幕宽度/100")]),v._v(" "),t("p",[t("strong",[v._v("由此得出结果")])]),v._v(" "),t("p",[t("strong",[v._v("用 "),t("code",[v._v("vmin")]),v._v(" 指定宽度，用 "),t("code",[v._v("vmax")]),v._v(" 指定高度，能适配 宽高互换的情况")])])]),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[v._v("注意")]),v._v(" "),t("p",[v._v("vm ,vh 不会随着可视区域的旋转而改变取值,vm永远是取屏幕标准上宽度，,vh永远是取屏幕标准上的高度。")]),v._v(" "),t("p",[v._v("旋转只是概念上的互换宽高，或者说旋转并不改变宽高，而是改变视角")])])])}),[],!1,null,null,null);t.default=a.exports}}]);