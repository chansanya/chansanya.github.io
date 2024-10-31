(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{444:function(a,t,s){"use strict";s.r(t);var e=s(14),r=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("p",[a._v("卸载旧版本")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" yum remove "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  docker-client "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  docker-client-latest "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  docker-common "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  docker-latest "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  docker-latest-logrotate "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  docker-logrotate "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  docker-engine\n")])])]),t("h2",{attrs:{id:"开始安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开始安装"}},[a._v("#")]),a._v(" 开始安装")]),a._v(" "),t("h3",{attrs:{id:"存储库安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#存储库安装"}},[a._v("#")]),a._v(" 存储库安装")]),a._v(" "),t("h4",{attrs:{id:"安装yum-utils包-提供yum-config-manager-实用程序-并设置稳定存储库。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装yum-utils包-提供yum-config-manager-实用程序-并设置稳定存储库。"}},[a._v("#")]),a._v(" 安装yum-utils包（提供yum-config-manager 实用程序）并设置稳定存储库。")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" yum "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-y")]),a._v(" yum-utils\n")])])]),t("h4",{attrs:{id:"换源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#换源"}},[a._v("#")]),a._v(" 换源")]),a._v(" "),t("h4",{attrs:{id:"标准源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#标准源"}},[a._v("#")]),a._v(" 标准源")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("sudo yum-config-manager  --add-repo https://download.docker.com/linux/centos/docker-ce.repo\n")])])]),t("h4",{attrs:{id:"阿里源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#阿里源"}},[a._v("#")]),a._v(" 阿里源")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("sudo yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo\n")])])]),t("h4",{attrs:{id:"安装docker引擎"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装docker引擎"}},[a._v("#")]),a._v(" 安装docker引擎")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" yum "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" docker-ce docker-ce-cli containerd.io\n")])])]),t("p",[t("strong",[a._v("或者是特定版本安装 列出版本")])]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("yum list docker-ce "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--showduplicates")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sort")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-r")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" yum "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" docker-ce-"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("VERSION_STRING"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" docker-ce-cli-"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("VERSION_STRING"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" containerd.io\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" systemctl start "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v("\n")])])]),t("h3",{attrs:{id:"rpm包安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rpm包安装"}},[a._v("#")]),a._v(" RPM包安装")]),a._v(" "),t("p",[a._v("前往https://download.docker.com/linux/centos/\n并选择您的 CentOS 版本。然后浏览x86_64/stable/Packages/ 并下载.rpm要安装的 Docker 版本的文件。")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" yum "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" /path/to/package.rpm\n")])])]),t("h3",{attrs:{id:"脚本安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#脚本安装"}},[a._v("#")]),a._v(" 脚本安装")]),a._v(" "),t("blockquote",[t("p",[a._v("参考：https://github.com/docker/docker-install.git")])]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-fsSL")]),a._v(" https://get.docker.com "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" get-docker.sh\n")])])]),t("h3",{attrs:{id:"离线安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#离线安装"}},[a._v("#")]),a._v(" 离线安装")]),a._v(" "),t("p",[t("a",{attrs:{href:"https://download.docker.com/linux/static/stable/x86_64/",target:"_blank",rel:"noopener noreferrer"}},[a._v("下载离线包"),t("OutboundLink")],1),a._v(" 并自行上传到服务器解压")]),a._v(" "),t("blockquote",[t("p",[a._v("以下示例版本: docker-20.10.18")])]),a._v(" "),t("h4",{attrs:{id:"解压包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解压包"}},[a._v("#")]),a._v(" 解压包")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-zxvf")]),a._v(" docker-20.10.18.tgz\n")])])]),t("h4",{attrs:{id:"授权"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#授权"}},[a._v("#")]),a._v(" 授权")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("chmod")]),a._v(" +x docker/*\n")])])]),t("h4",{attrs:{id:"复制到bin目录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#复制到bin目录"}},[a._v("#")]),a._v(" 复制到bin目录")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" docker/* /usr/bin/\n")])])]),t("h4",{attrs:{id:"创建包路径"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建包路径"}},[a._v("#")]),a._v(" 创建包路径")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" /data/docker/lib \n")])])]),t("blockquote",[t("p",[a._v("默认路径 "),t("code",[a._v("/var/lib/docker")])])]),a._v(" "),t("h4",{attrs:{id:"编辑docker-service"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编辑docker-service"}},[a._v("#")]),a._v(" 编辑docker.service")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("vim")]),a._v(" /usr/lib/systemd/system/docker.service\n")])])]),t("p",[t("strong",[a._v("加入以下内容，并保存")])]),a._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("[Unit]\nDescription=Docker Application Container Engine\nDocumentation=https://docs.docker.com\nAfter=network-online.target firewalld.service\nWants=network-online.target\n  \n[Service]\nType=notify\n#指定docker存储目录: /data/docker/lib\nExecStart=/usr/bin/dockerd --graph /data/docker/lib \nExecReload=/bin/kill -s HUP $MAINPID\nLimitNOFILE=infinity\nLimitNPROC=infinity\nLimitCORE=infinity\nasksMax=infinity\nTimeoutStartSec=0\nDelegate=yes\nKillMode=process\nRestart=on-failure\nStartLimitBurst=3\nStartLimitInterval=60s\n  \n[Install]\nWantedBy=multi-user.target\n")])])]),t("h4",{attrs:{id:"重载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重载"}},[a._v("#")]),a._v(" 重载")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("systemctl daemon-reload\n")])])]),t("h4",{attrs:{id:"启动服务并加入"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动服务并加入"}},[a._v("#")]),a._v(" 启动服务并加入")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("systemctl start "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" \n")])])]),t("h4",{attrs:{id:"开机启动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开机启动"}},[a._v("#")]),a._v(" 开机启动")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("systemctl "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("enable")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v("\n")])])]),t("h4",{attrs:{id:"查看状态"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看状态"}},[a._v("#")]),a._v(" 查看状态")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("systemctl status "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v("\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);