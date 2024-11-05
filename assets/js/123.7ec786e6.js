(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{434:function(t,a,s){"use strict";s.r(a);var e=s(14),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("之前一直好奇，为什么有些网页能够随着窗口（视口）的大小改变，而变更样式,后面学习到了"),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/Media_Queries/Using_media_queries",target:"_blank",rel:"noopener noreferrer"}},[t._v("媒体查询"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("它能够在你重置浏览器大小的过程中，使页面根据浏览器的宽度和高度重新渲染页面。")]),t._v(" "),a("h2",{attrs:{id:"语法详情"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#语法详情"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/Media_Queries/Using_media_queries",target:"_blank",rel:"noopener noreferrer"}},[t._v("语法详情"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("@media not|only mediatype and (mediafeature and|or|not mediafeature) {\n  CSS-Code;\n}\n")])])]),a("p",[a("strong",[t._v("not:")])]),t._v(" "),a("p",[t._v("not关键字不能用于否定单个功能查询，只能用于否定整个媒体查询，如果使用 not 运算符，则还必须指定媒体类型，且只会否定要应用的特定媒体查询,所以它不会应用于以逗号分隔的媒体查询列表。")]),t._v(" "),a("p",[a("strong",[t._v("only:")])]),t._v(" "),a("p",[t._v("only关键字可防止不支持带有媒体功能的媒体查询的旧版浏览器应用给定的样式。它对现代浏览器没有影响。 如果使用 only 运算符，则还必须指定媒体类型。")]),t._v(" "),a("p",[a("strong",[t._v(", (逗号)")])]),t._v(" "),a("p",[t._v("逗号用于将多个媒体查询合并为一个规则。 逗号分隔列表中的每个查询都与其他查询分开处理。 因此，如果列表中的任何查询为 true，则整个 media 语句均返回 true。 换句话说，列表的行为类似于逻辑或 or 运算符。")]),t._v(" "),a("p",[a("strong",[t._v("and:")])]),t._v(" "),a("p",[t._v("and 操作符用于将多个媒体查询规则组合成单条媒体查询，当每个查询规则都为真时则该条媒体查询为真，它还用于将媒体功能与媒体类型结合在一起。")]),t._v(" "),a("h3",{attrs:{id:"css-引入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-引入"}},[t._v("#")]),t._v(" css 引入")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("stylesheet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("styles.css"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("media")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("screen and (30em <= width <= 50em )"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("stylesheet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("styles.css"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("media")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("screen and (50em < width)"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);