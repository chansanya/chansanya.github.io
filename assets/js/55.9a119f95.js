(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{389:function(t,a,s){"use strict";s.r(a);var e=s(2),r=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("跨域，这可太常见了。")]),t._v(" "),a("p",[t._v("这里记录下为什么会发生跨域，以及处理跨域的一些办法。\n")]),t._v(" "),a("h3",{attrs:{id:"为什么会跨域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么会跨域"}},[t._v("#")]),t._v(" 为什么会跨域？")]),t._v(" "),a("p",[t._v("跨域的产生来源于现代浏览器所通用的‘同源策略’，所谓同源策略，是指只有在地址的：协议名，地址名，端口一样的时候，才允许访问相同的cookie、localStorage或是发送Ajax请求等等。若在不同源的情况下访问，就称为跨域。")]),t._v(" "),a("h3",{attrs:{id:"为什么浏览器会禁止跨域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么浏览器会禁止跨域"}},[t._v("#")]),t._v(" 为什么浏览器会禁止跨域")]),t._v(" "),a("p",[t._v("跨域的访问会带来许多安全性的问题，比如，cookie一般用于状态控制，常用于存储登录的信息，如果允许跨域访问，那么别的网站只需要一段脚本就可以获取你的cookie，从而冒充你的身份去登录网站，造成非常大的安全问题，因此，现代浏览器均推行同源策略。")]),t._v(" "),a("h3",{attrs:{id:"简单描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简单描述"}},[t._v("#")]),t._v(" 简单描述")]),t._v(" "),a("ol",[a("li",[t._v("浏览器限制")]),t._v(" "),a("li",[t._v("域名，端口不一样")]),t._v(" "),a("li",[t._v("XHR（XMLHttpRequest请求）\n同时满足以上三个条件及会跨域")])]),t._v(" "),a("h3",{attrs:{id:"简单请求和非简单请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简单请求和非简单请求"}},[t._v("#")]),t._v(" 简单请求和非简单请求：")]),t._v(" "),a("h4",{attrs:{id:"常见简单请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见简单请求"}},[t._v("#")]),t._v(" 常见简单请求")]),t._v(" "),a("ul",[a("li",[t._v("方法为get，head，post,  请求header里面没有自定义头，")]),t._v(" "),a("li",[t._v("Content-Type的值为以下几种 text/plain,multipart/form-data,application/x-www-form-urlencoded。")])]),t._v(" "),a("h4",{attrs:{id:"常见非简单请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见非简单请求"}},[t._v("#")]),t._v(" 常见非简单请求")]),t._v(" "),a("ul",[a("li",[t._v("put,delect 方法的ajax请求")]),t._v(" "),a("li",[t._v("发送json格式的ajax请求")]),t._v(" "),a("li",[t._v("带自定义头的ajax请求。")])]),t._v(" "),a("h3",{attrs:{id:"解决跨域方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决跨域方案"}},[t._v("#")]),t._v(" 解决跨域方案：")]),t._v(" "),a("ol",[a("li",[t._v("从浏览器出发，允许浏览器跨域")]),t._v(" "),a("li",[t._v("从XHR（XMLHttpRequest）出发\n"),a("ul",[a("li",[t._v("避免发生跨域：")]),t._v(" "),a("li",[t._v("使用jsonp")]),t._v(" "),a("li",[t._v("产生跨域后解决。")]),t._v(" "),a("li",[t._v("服务器实现")]),t._v(" "),a("li",[t._v("ngin配置")])])])]),t._v(" "),a("h3",{attrs:{id:"解决跨域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决跨域"}},[t._v("#")]),t._v(" 解决跨域")]),t._v(" "),a("h4",{attrs:{id:"使用jsonp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用jsonp"}},[t._v("#")]),t._v(" 使用jsonp")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("原因是:jsonp请求是通过script的方式发送，且只有xhr的请求方式才有可能产生跨域问题。")])]),t._v(" "),a("li",[a("p",[t._v("服务端允许跨域，响应头中添加：")]),t._v(" "),a("ul",[a("li",[t._v("Access-Control-Allow-Origin=“允许跨域的url”，即跨省域时，请求头Origin的值，所以一般是获取Origin的值。")]),t._v(" "),a("li",[t._v("Access-Control-Allow-Method=“*”，允许的方法。非简单请求处理方案：在相应头中添加")]),t._v(" "),a("li",[t._v("Access-Control-Request-Headers=“Content-Type,自定义的header的key”。")]),t._v(" "),a("li",[t._v('Access-Control-Allow-Credentials,="true"，带cookies的跨域解决 允许使用cookies')])])])]),t._v(" "),a("h4",{attrs:{id:"nginx配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx配置"}},[t._v("#")]),t._v(" nginx配置")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/pages/ed70e6/"}},[t._v("nginx 跨域配置")])],1)])}),[],!1,null,null,null);a.default=r.exports}}]);