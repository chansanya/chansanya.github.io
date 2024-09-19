(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{418:function(t,a,s){"use strict";s.r(a);var e=s(8),r=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("很多时候，我们的服务不是在本地，而是在远程服务器上。这时候出了问题，大多数是通过日志判断。")]),t._v(" "),a("p",[t._v("下面记录一种能远程连接服务器进行debug的方式")]),t._v(" "),a("h2",{attrs:{id:"启动命令格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动命令格式"}},[t._v("#")]),t._v(" 启动命令格式")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("java")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-jar")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${OPT}")]),t._v(" demo.jar\n")])])]),a("h2",{attrs:{id:"opt内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#opt内容"}},[t._v("#")]),t._v(" OPT内容")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("JDK 9↑")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-agentlib:jdwp")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("transport"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("dt_socket,server"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("y,suspend"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("n,address"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("*:5005\n")])])])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("JDK 5-8")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-agentlib:jdwp")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("transport"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("dt_socket,server"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("y,suspend"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("n,address"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5005")]),t._v("\n")])])])]),t._v(" "),a("h2",{attrs:{id:"idea-使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#idea-使用"}},[t._v("#")]),t._v(" IDEA 使用")]),t._v(" "),a("p",[a("strong",[t._v("编辑")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/chansanya/file_store/images/blog/doc/007003/img.png",alt:"编辑"}})]),t._v(" "),a("p",[a("strong",[t._v("设置")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/chansanya/file_store/images/blog/doc/007003/img_1.png",alt:"设置"}})]),t._v(" "),a("h2",{attrs:{id:"参数详情"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数详情"}},[t._v("#")]),t._v(" 参数详情：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("参数")]),t._v(" "),a("th",[t._v("示例值")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("transport")]),t._v(" "),a("td",[t._v("dt_socket")]),t._v(" "),a("td",[t._v("指定运行的被调试应用和调试者之间的通信协议")])]),t._v(" "),a("tr",[a("td",[t._v("address")]),t._v(" "),a("td",[t._v("5000")]),t._v(" "),a("td",[t._v("远程被调试应用开通的端口")])]),t._v(" "),a("tr",[a("td",[t._v("server")]),t._v(" "),a("td",[t._v("y")]),t._v(" "),a("td",[t._v("开启调试server端 "),a("br"),t._v(" y（Attach 模式）等待有调试器Attach过来，"),a("br"),t._v("n （Listen 模式）等待服务调用")])]),t._v(" "),a("tr",[a("td",[t._v("suspend")]),t._v(" "),a("td",[t._v("n")]),t._v(" "),a("td",[t._v("用来告知 JVM 立即执行，不要等待未来将要附着上/连上（attached）的调试者。"),a("br"),t._v("如果设成 y, 则应用将暂停不运行，直到有调试者连接上")])])])]),t._v(" "),a("h2",{attrs:{id:"google出来的原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#google出来的原理"}},[t._v("#")]),t._v(" Google出来的原理：")]),t._v(" "),a("h3",{attrs:{id:"agents"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#agents"}},[t._v("#")]),t._v(" Agents")]),t._v(" "),a("ul",[a("li",[t._v("JVM运行时允许外部注入的库（Java或C++写的libraries）它们有能力修改运行中 .class 文件的内容。")]),t._v(" "),a("li",[t._v("传递一个 Agent Lib 给 JVM, 添加启动参数 agentlib:libname[=options] 。例如:远程调试:-agentlib:jdwp=...")]),t._v(" "),a("li",[t._v("jdwp agent 会建立运行应用的 JVM 和调试者（本地或者远程）之间的桥梁,能拦截运行的代码。")])])])}),[],!1,null,null,null);a.default=r.exports}}]);