(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{380:function(a,s,e){"use strict";e.r(s);var t=e(2),r=Object(t.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("p",[s("a",{attrs:{href:"https://github.com/xinntao/Real-ESRGAN/blob/master/README_CN.md",target:"_blank",rel:"noopener noreferrer"}},[a._v("RealESRGAN"),s("OutboundLink")],1),a._v("腾讯 ARC 实验室发布的一个盲图像超分辨率模型")]),a._v(" "),s("p",[a._v("通过模拟高分辨率图像变低分辩率过程中的各种退化，然后再通过低清图倒推出它的高清图。")]),a._v(" "),s("p",[a._v("支持Intel/AMD/Nvidia显卡")]),a._v(" "),s("p",[a._v("绿色版exe文件含: Windows/Linux/MacOS")]),a._v(" "),s("p",[a._v("使用起来简直是不要太简单")]),a._v(" "),s("h3",{attrs:{id:"模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模型"}},[a._v("#")]),a._v(" 模型")]),a._v(" "),s("ul",[s("li",[a._v("realesrgan-x4plus（默认）")]),a._v(" "),s("li",[a._v("reaesrnet-x4plus")]),a._v(" "),s("li",[a._v("realesrgan-x4plus-anime（针对动漫插画图像优化，有更小的体积）")]),a._v(" "),s("li",[a._v("realesr-animevideov3 (针对动漫视频)")])]),a._v(" "),s("table",[s("thead",[s("tr",[s("th",[a._v("参数")]),a._v(" "),s("th",[a._v("描述")])])]),a._v(" "),s("tbody",[s("tr",[s("td",[a._v("-h")]),a._v(" "),s("td",[a._v("帮助")])]),a._v(" "),s("tr",[s("td",[a._v("-i input-path")]),a._v(" "),s("td",[a._v("源图片路径/目录 (jpg/png/webp)")])]),a._v(" "),s("tr",[s("td",[a._v("-o output-path")]),a._v(" "),s("td",[a._v("输出路径/目录 (jpg/png/webp)")])]),a._v(" "),s("tr",[s("td",[a._v("-s scale")]),a._v(" "),s("td",[a._v("放大比例 (2, 3, 4  default=4)")])]),a._v(" "),s("tr",[s("td",[a._v("-t tile-size")]),a._v(" "),s("td",[a._v("对于多gpu, Tile大小(>=320=auto, default=0)可以是0,0,0")])]),a._v(" "),s("tr",[s("td",[a._v("-m model-path")]),a._v(" "),s("td",[a._v("预训练模型的文件夹路径。 默认路径:models")])]),a._v(" "),s("tr",[s("td",[a._v("-n model-name")]),a._v(" "),s("td",[a._v("模型名,默认: realesr-animevideov3 "),s("br"),a._v(" 可选："),s("br"),a._v("realesr-animevideov3 "),s("br"),a._v(" realesrgan-x4plus"),s("br"),a._v(" realesrgan-x4plus-anime"),s("br"),a._v(" realesrnet-x4plus")])]),a._v(" "),s("tr",[s("td",[a._v("-g gpu-id")]),a._v(" "),s("td",[a._v("Gpu设备使用(默认=auto)可以为0,1,2多Gpu")])]),a._v(" "),s("tr",[s("td",[a._v("-j load:proc:save")]),a._v(" "),s("td",[a._v("load proc save 的线程数(默认为1:2:2)对于多gpu可以是1:2,2,2:2")])]),a._v(" "),s("tr",[s("td",[a._v("-x")]),a._v(" "),s("td",[a._v("开启tta模式")])]),a._v(" "),s("tr",[s("td",[a._v("-f format")]),a._v(" "),s("td",[a._v("输出图像格式  (jpg/png/webp, 默认=ext/png)")])]),a._v(" "),s("tr",[s("td",[a._v("-v")]),a._v(" "),s("td",[a._v("详细输出")])])])]),a._v(" "),s("h3",{attrs:{id:"命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#命令"}},[a._v("#")]),a._v(" 命令")]),a._v(" "),s("h4",{attrs:{id:"快速执行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#快速执行"}},[a._v("#")]),a._v(" 快速执行")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("realesrgan-ncnn-vulkan.exe "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-i")]),a._v(" input.jpg "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" output.png\n")])])]),s("h4",{attrs:{id:"指定模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#指定模型"}},[a._v("#")]),a._v(" 指定模型")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("realesrgan-ncnn-vulkan "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-i")]),a._v(" input.jpg "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" output.png "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-n")]),a._v(" realesr-animevideov3\nrealesrgan-ncnn-vulkan "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-i")]),a._v(" input.jpg "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" output2.png "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-n")]),a._v(" realesrgan-x4plus-anime\n")])])]),s("h4",{attrs:{id:"指定模型及图片比例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#指定模型及图片比例"}},[a._v("#")]),a._v(" 指定模型及图片比例")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("realesrgan-ncnn-vulkan "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-i")]),a._v(" input_folder "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" outputfolder "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-n")]),a._v(" realesr-animevideov3 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-s")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("4")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" jpg\n")])])]),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("realesrgan-ncnn-vulkan.exe "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-i")]),a._v(" demo.mp4 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" output.mp4 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-n")]),a._v(" realesr-animevideov3\n")])])]),s("p",[a._v("创建一个名为 "),s("code",[a._v("tmp_frames")]),a._v(" 的目录")]),a._v(" "),s("h4",{attrs:{id:"拆解帧"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#拆解帧"}},[a._v("#")]),a._v(" 拆解帧")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("ffmpeg "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-i")]),a._v(" onepiece_demo.mp4 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-qscale:v")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-qmin")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-qmax")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-vsync")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(" tmp_frames/frame%08d.jpg\n")])])]),s("p",[a._v("创建一个名为 "),s("code",[a._v("out_frames")]),a._v(" 的目录")]),a._v(" "),s("h4",{attrs:{id:"修复帧"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修复帧"}},[a._v("#")]),a._v(" 修复帧")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("realesrgan-ncnn-vulkan.exe "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-i")]),a._v(" tmp_frames "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" out_frames "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-n")]),a._v(" realesr-animevideov3 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-s")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" jpg\n")])])]),s("h4",{attrs:{id:"得到视频帧数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#得到视频帧数"}},[a._v("#")]),a._v(" 得到视频帧数")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("ffmpeg "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-i")]),a._v(" onepiece_demo.mp4\n")])])]),s("h4",{attrs:{id:"合并视频"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#合并视频"}},[a._v("#")]),a._v(" 合并视频")]),a._v(" "),s("p",[a._v("上面命令得到的帧数填充到 -r 后，以下用"),s("strong",[a._v("23.98")]),a._v("举例")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("ffmpeg "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-i")]),a._v(" out_frames/frame%08d.jpg "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-i")]),a._v(" onepiece_demo.mp4 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-map")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(":v:0 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-map")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(":a:0 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-c:a")]),a._v(" copy "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-c:v")]),a._v(" libx264 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-r")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("23.98")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-pix_fmt")]),a._v(" yuv420p output_w_audio.mp4\n")])])]),s("h4",{attrs:{id:"合并音频"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#合并音频"}},[a._v("#")]),a._v(" 合并音频")]),a._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[a._v("ffmpeg -r 23.98 -i out_frames/frame%08d.jpg -i onepiece_demo.mp4 -map 0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token property"}},[a._v("v")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("0 -map 1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token property"}},[a._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("0 "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v("-c")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("a copy "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v("-c")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("v libx264 -r 23.98 -pix_fmt yuv420p output_w_audio.mp4\n")])])]),s("h3",{attrs:{id:"图片修复简单bat脚本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#图片修复简单bat脚本"}},[a._v("#")]),a._v(" 图片修复简单Bat脚本")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("@echo off\nchcp "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("65001")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" 即将开始文件修复"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" 默认修复前后格式为png\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" 执行前请保证修复文件名为input\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" 如文件是其他格式，请手动修改脚本\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" 修复完成默认文件名real\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" 以下是修复模型"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" realesr-animevideov3 ^"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("针对动漫视频^"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v(" realesrgan-x4plus^"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("默认^"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v(" realesrgan-x4plus-anime^"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("针对动漫插画图像优化，有更小的体积^"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("4")]),a._v(" reaesrnet-x4plus\n\n\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" /p "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("model")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("请选择模型:\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"%model%"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"1"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("model_name")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("realesr-animevideov3\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("else")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"%model%"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"2"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("model_name")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("realesrgan-x4plus\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("else")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"%model%"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"3"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("model_name")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("realesrgan-x4plus-anime\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("else")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"%model%"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"4"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("model_name")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("realesrnet-x4plus\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("else")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" 没有此模型！\n    pause\n    "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exit")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" 使用%model_name%模型执行修复:\n\n::: realesrgan-ncnn-vulkan "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-i")]),a._v(" input.jpg "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" real.png "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-n")]),a._v(" %model_name%\n\nrealesrgan-ncnn-vulkan "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-i")]),a._v(" input.png "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" real.png "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-n")]),a._v(" %model_name%\n\npause\n\n\nrem 以下是修复代码\nrem 修复完成后请将结果保存为real.png\n\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);