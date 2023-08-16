(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{385:function(t,e,a){"use strict";a.r(e);var s=a(7),r=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("《roop》只需要一张人脸的就能把一个视频中的人脸进行替换，不需要进行任何训练。")]),t._v(" "),e("p",[t._v("使用前先看项目声明哦！！！")]),t._v(" "),e("div",{staticClass:"custom-block theorem"},[e("p",{staticClass:"title"},[t._v("Disclaimer")]),e("p",[t._v("This software is meant to be a productive contribution to the rapidly growing AI-generated media industry. It will help artists with tasks such as animating a custom character or using the character as a model for clothing etc.")]),t._v(" "),e("p",[t._v("The developers of this software are aware of its possible unethical applications and are committed to take preventative measures against them. It has a built-in check which prevents the program from working on inappropriate media including but not limited to nudity, graphic content, sensitive material such as war footage etc. We will continue to develop this project in the positive direction while adhering to law and ethics. This project may be shut down or include watermarks on the output if requested by law.")]),t._v(" "),e("p",[t._v("Users of this software are expected to use this software responsibly while abiding the local law. If face of a real person is being used, users are suggested to get consent from the concerned person and clearly mention that it is a deepfake when posting content online. Developers of this software will not be responsible for actions of end-users.")]),t._v(" "),e("div",{staticClass:"custom-block right"},[e("p",[t._v("来自 "),e("a",{attrs:{href:"https://roop-ai.gitbook.io/roop/",target:"_blank",rel:"noopener noreferrer"}},[t._v("roop"),e("OutboundLink")],1)])])]),e("p",[t._v("知道了吧， 不能搞涩涩了。老老实实学技术。")]),t._v(" "),e("h3",{attrs:{id:"准备环境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#准备环境"}},[t._v("#")]),t._v(" 准备环境")]),t._v(" "),e("p",[t._v("roop支持在 "),e("code",[t._v("Linux")]),t._v(","),e("code",[t._v("MacOS")]),t._v(","),e("code",[t._v("Winodows")]),t._v(" 系统上运行。")]),t._v(" "),e("p",[t._v("下面只介绍windows环境下使用，其他系统自行"),e("a",{attrs:{href:"https://roop-ai.gitbook.io/roop/installation/basic",target:"_blank",rel:"noopener noreferrer"}},[t._v("查看文档"),e("OutboundLink")],1),t._v("。")]),t._v(" "),e("p",[t._v("在使用roop之前，你需要先安装如下软件")]),t._v(" "),e("ul",[e("li",[t._v("python")]),t._v(" "),e("li",[t._v("git")]),t._v(" "),e("li",[t._v("FFmpeg")]),t._v(" "),e("li",[t._v("VisualStudio2020")])]),t._v(" "),e("p",[t._v("如果没有的话使用如下命令：")]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),e("p",[t._v("下面命令使用到了"),e("code",[t._v("winget")]),t._v(",如果你没有安装，"),e("a",{attrs:{href:""}},[t._v("可参考此文安装")]),t._v("。")])]),t._v(" "),e("h4",{attrs:{id:"安装python"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装python"}},[t._v("#")]),t._v(" 安装python")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("winget "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-e")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--id")]),t._v(" Python.Python.3.10\n")])])]),e("h4",{attrs:{id:"安装pip"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装pip"}},[t._v("#")]),t._v(" 安装PIP")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("python "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-m")]),t._v(" ensurepip\n")])])]),e("h4",{attrs:{id:"安装git"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装git"}},[t._v("#")]),t._v(" 安装git")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("winget "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-e")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--id")]),t._v(" Git.Git\n")])])]),e("h4",{attrs:{id:"安装ffmpeg"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装ffmpeg"}},[t._v("#")]),t._v(" 安装FFmpeg")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("winget "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-e")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--id")]),t._v(" Gyan.FFmpeg\n")])])]),e("h4",{attrs:{id:"安装visualstudio及相关开发包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装visualstudio及相关开发包"}},[t._v("#")]),t._v(" 安装VisualStudio及相关开发包")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("winget "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-e")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--id")]),t._v(" Microsoft.VCRedist.2015+.x64\n")])])]),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("winget "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-e")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--id")]),t._v(" Microsoft.VisualStudio.2022.BuildTools "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--override")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"--wait --add Microsoft.VisualStudio.Workload.NativeDesktop --includeRecommended"')]),t._v("\n")])])]),e("h3",{attrs:{id:"开始"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#开始"}},[t._v("#")]),t._v(" 开始")]),t._v(" "),e("h4",{attrs:{id:"下载项目"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#下载项目"}},[t._v("#")]),t._v(" 下载项目")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/s0md3v/roop\n")])])]),e("h4",{attrs:{id:"安装依赖"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装依赖"}},[t._v("#")]),t._v(" 安装依赖")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("pip "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-r")]),t._v(" requirements.txt\n")])])]),e("p",[t._v("这一步需要等待一会，等待完成后执行")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("python run.py\n")])])]),e("p",[t._v("等待界面出现就可以愉快的玩耍了。")]),t._v(" "),e("h3",{attrs:{id:"命令参数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#命令参数"}},[t._v("#")]),t._v(" 命令参数")]),t._v(" "),e("p",[t._v("当然你也可以用命令行运行roop，毕竟这样显得更帅。 命令行的运行格式为：")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("python run.py [options]\n")])])]),e("p",[t._v("以下为当前版本所支持的参数:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("命令")]),t._v(" "),e("th",[t._v("描述")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("-h, --help")]),t._v(" "),e("td",[t._v("显示帮助并退出")])]),t._v(" "),e("tr",[e("td",[t._v("-s SOURCE_PATH, --source SOURCE_PATH")]),t._v(" "),e("td",[t._v("要替换的人脸路径")])]),t._v(" "),e("tr",[e("td",[t._v("-t TARGET_PATH, --target TARGET_PATH")]),t._v(" "),e("td",[t._v("需要替换人脸的视频路径")])]),t._v(" "),e("tr",[e("td",[t._v("-o OUTPUT_PATH, --output OUTPUT_PATH")]),t._v(" "),e("td",[t._v("替换人脸后的视频保存路径")])]),t._v(" "),e("tr",[e("td",[t._v("--frame-processor FRAME_PROCESSOR [FRAME_PROCESSOR ...]")]),t._v(" "),e("td",[t._v("帧处理器,默认：face_swapper (可多选: face_swapper, face_enhancer)")])]),t._v(" "),e("tr",[e("td",[t._v("--keep-fps")]),t._v(" "),e("td",[t._v("保持原视频帧率")])]),t._v(" "),e("tr",[e("td",[t._v("--keep-frames")]),t._v(" "),e("td",[t._v("保持原视频帧文件目录")])]),t._v(" "),e("tr",[e("td",[t._v("--skip-audio")]),t._v(" "),e("td",[t._v("跳过视频音频")])]),t._v(" "),e("tr",[e("td",[t._v("--many-faces")]),t._v(" "),e("td",[t._v("处理多张脸")])]),t._v(" "),e("tr",[e("td",[t._v("--reference-face-position REFERENCE_FACE_POSITION")]),t._v(" "),e("td",[t._v("人脸位置参考：用于定位人脸")])]),t._v(" "),e("tr",[e("td",[t._v("--reference-frame-number REFERENCE_FRAME_NUMBER")]),t._v(" "),e("td",[t._v("人脸帧数参考：用于定位人脸")])]),t._v(" "),e("tr",[e("td",[t._v("--similar-face-distance SIMILAR_FACE_DISTANCE")]),t._v(" "),e("td",[t._v("人脸识别阈值，默认值：0.85。对比人脸的相识度，遇到跳脸现象，可加大阈值")])]),t._v(" "),e("tr",[e("td",[t._v("--temp-frame-format {jpg,png}")]),t._v(" "),e("td",[t._v("帧文件图片格式")])]),t._v(" "),e("tr",[e("td",[t._v("--temp-frame-quality [0-100]")]),t._v(" "),e("td",[t._v("帧文件质量")])]),t._v(" "),e("tr",[e("td",[t._v("--output-video-encoder {libx264,libx265,libvpx-vp9,h264_nvenc,hevc_nvenc}")]),t._v(" "),e("td",[t._v("输出视频编码")])]),t._v(" "),e("tr",[e("td",[t._v("--output-video-quality [0-100]")]),t._v(" "),e("td",[t._v("输出视频质量")])]),t._v(" "),e("tr",[e("td",[t._v("--max-memory MAX_MEMORY")]),t._v(" "),e("td",[t._v("最大内存(以GB为单位)")])]),t._v(" "),e("tr",[e("td",[t._v("--execution-provider {cpu} [{cpu} ...]")]),t._v(" "),e("td",[t._v("可用的执行提供程序,默认:cpu ,通常使用cpu和cuda (需要安装相关环境)")])]),t._v(" "),e("tr",[e("td",[t._v("--execution-threads EXECUTION_THREADS")]),t._v(" "),e("td",[t._v("执行线程数")])]),t._v(" "),e("tr",[e("td",[t._v("-v, --version")]),t._v(" "),e("td",[t._v("显示程序的版本号并退出")])]),t._v(" "),e("tr",[e("td"),t._v(" "),e("td")])])]),t._v(" "),e("p",[t._v("到这里已经可以正常的使用roop了，不过当前使用的是cpu。如果你对执行速度有更高的要求，可以指定"),e("code",[t._v("execution-provider")]),t._v("加速图像生成")]),t._v(" "),e("h3",{attrs:{id:"加速"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#加速"}},[t._v("#")]),t._v(" 加速")]),t._v(" "),e("p",[t._v("roop支持的加速方式有：")]),t._v(" "),e("ul",[e("li",[t._v("CUDA (Nvidia)")]),t._v(" "),e("li",[t._v("CoreML (Apple)")]),t._v(" "),e("li",[t._v("DirectML (Windows)")]),t._v(" "),e("li",[t._v("OpenVINO (Intel)")])]),t._v(" "),e("p",[t._v("我的桌面机使用的是N卡，所以我选择的是Nvidia CUDA加速，如果是其他方式可以"),e("a",{attrs:{href:"https://roop-ai.gitbook.io/roop/installation/acceleration",target:"_blank",rel:"noopener noreferrer"}},[t._v("查看文档"),e("OutboundLink")],1),t._v("。")]),t._v(" "),e("p",[t._v("使用CUDA加速需要安装："),e("code",[t._v("CUDA Toolkit")]),t._v("和"),e("code",[t._v("cuDNN for Cuda")]),t._v("，其中下载"),e("code",[t._v("cuDNN")]),t._v("需要Nvidia账号。")]),t._v(" "),e("p",[t._v("安装时请注意版本，确保和roop兼容。")]),t._v(" "),e("p",[t._v("我的版本信息：")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/s0md3v/roop/tree/1.3.2",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("roop 1.3.2")]),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://developer.nvidia.com/cuda-11-8-0-download-archive",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("CUDA Toolkit 11.8")]),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://developer.nvidia.com/rdp/cudnn-archive",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("cuDNN for Cuda 11.x")]),e("OutboundLink")],1)])]),t._v(" "),e("p",[t._v("安装完上述软件后执行下载依赖：")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("pip uninstall onnxruntime onnxruntime-gpu\npip "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" onnxruntime-gpu"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.15")]),t._v(".1\n")])])]),e("p",[t._v("然后就可以使用加速命令了")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("python run.py --execution-provider cuda\n")])])]),e("p",[t._v("到此roop的安装过程就结束了，快去愉快的玩耍吧。")])])}),[],!1,null,null,null);e.default=r.exports}}]);