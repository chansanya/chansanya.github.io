(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{500:function(a,s,t){"use strict";t.r(s);var e=t(14),r=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"centos"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#centos"}},[a._v("#")]),a._v(" Centos")]),a._v(" "),s("p",[a._v("卸载旧版本")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" yum remove "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  docker-client "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  docker-client-latest "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  docker-common "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  docker-latest "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  docker-latest-logrotate "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  docker-logrotate "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  docker-engine\n")])])]),s("h3",{attrs:{id:"存储库安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#存储库安装"}},[a._v("#")]),a._v(" 存储库安装")]),a._v(" "),s("h4",{attrs:{id:"安装yum-utils包-提供yum-config-manager-实用程序-并设置稳定存储库。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装yum-utils包-提供yum-config-manager-实用程序-并设置稳定存储库。"}},[a._v("#")]),a._v(" 安装yum-utils包（提供yum-config-manager 实用程序）并设置稳定存储库。")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" yum "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-y")]),a._v(" yum-utils\n")])])]),s("h4",{attrs:{id:"换源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#换源"}},[a._v("#")]),a._v(" 换源")]),a._v(" "),s("h4",{attrs:{id:"标准源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#标准源"}},[a._v("#")]),a._v(" 标准源")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("sudo yum-config-manager  --add-repo https://download.docker.com/linux/centos/docker-ce.repo\n")])])]),s("h4",{attrs:{id:"阿里源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#阿里源"}},[a._v("#")]),a._v(" 阿里源")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("sudo yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo\n")])])]),s("h4",{attrs:{id:"安装docker引擎"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装docker引擎"}},[a._v("#")]),a._v(" 安装docker引擎")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" yum "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" docker-ce docker-ce-cli containerd.io\n")])])]),s("p",[s("strong",[a._v("或者是特定版本安装 列出版本")])]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("yum list docker-ce "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--showduplicates")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sort")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-r")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" yum "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" docker-ce-"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("VERSION_STRING"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" docker-ce-cli-"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("VERSION_STRING"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" containerd.io\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" systemctl start "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v("\n")])])]),s("h3",{attrs:{id:"rpm包安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rpm包安装"}},[a._v("#")]),a._v(" RPM包安装")]),a._v(" "),s("p",[a._v("前往https://download.docker.com/linux/centos/\n并选择您的 CentOS 版本。然后浏览x86_64/stable/Packages/ 并下载.rpm要安装的 Docker 版本的文件。")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" yum "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" /path/to/package.rpm\n")])])]),s("h3",{attrs:{id:"脚本安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#脚本安装"}},[a._v("#")]),a._v(" 脚本安装")]),a._v(" "),s("blockquote",[s("p",[a._v("参考：https://github.com/docker/docker-install.git")])]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-fsSL")]),a._v(" https://get.docker.com "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" get-docker.sh\n")])])]),s("h3",{attrs:{id:"离线安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#离线安装"}},[a._v("#")]),a._v(" 离线安装")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://download.docker.com/linux/static/stable/x86_64/",target:"_blank",rel:"noopener noreferrer"}},[a._v("下载离线包"),s("OutboundLink")],1),a._v(" 并自行上传到服务器解压")]),a._v(" "),s("blockquote",[s("p",[a._v("以下示例版本: docker-20.10.18")])]),a._v(" "),s("h4",{attrs:{id:"解压包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解压包"}},[a._v("#")]),a._v(" 解压包")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-zxvf")]),a._v(" docker-20.10.18.tgz\n")])])]),s("h4",{attrs:{id:"授权"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#授权"}},[a._v("#")]),a._v(" 授权")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("chmod")]),a._v(" +x docker/*\n")])])]),s("h4",{attrs:{id:"复制到bin目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#复制到bin目录"}},[a._v("#")]),a._v(" 复制到bin目录")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" docker/* /usr/bin/\n")])])]),s("h4",{attrs:{id:"创建包路径"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建包路径"}},[a._v("#")]),a._v(" 创建包路径")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" /data/docker/lib \n")])])]),s("blockquote",[s("p",[a._v("默认路径 "),s("code",[a._v("/var/lib/docker")])])]),a._v(" "),s("h4",{attrs:{id:"编辑docker-service"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编辑docker-service"}},[a._v("#")]),a._v(" 编辑docker.service")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("vim")]),a._v(" /usr/lib/systemd/system/docker.service\n")])])]),s("p",[s("strong",[a._v("加入以下内容，并保存")])]),a._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("[Unit]\nDescription=Docker Application Container Engine\nDocumentation=https://docs.docker.com\nAfter=network-online.target firewalld.service\nWants=network-online.target\n  \n[Service]\nType=notify\n#指定docker存储目录: /data/docker/lib\nExecStart=/usr/bin/dockerd --graph /data/docker/lib \nExecReload=/bin/kill -s HUP $MAINPID\nLimitNOFILE=infinity\nLimitNPROC=infinity\nLimitCORE=infinity\nasksMax=infinity\nTimeoutStartSec=0\nDelegate=yes\nKillMode=process\nRestart=on-failure\nStartLimitBurst=3\nStartLimitInterval=60s\n  \n[Install]\nWantedBy=multi-user.target\n")])])]),s("h4",{attrs:{id:"重载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#重载"}},[a._v("#")]),a._v(" 重载")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("systemctl daemon-reload\n")])])]),s("h4",{attrs:{id:"启动服务并加入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启动服务并加入"}},[a._v("#")]),a._v(" 启动服务并加入")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("systemctl start "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" \n")])])]),s("h4",{attrs:{id:"开机启动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开机启动"}},[a._v("#")]),a._v(" 开机启动")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("systemctl "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("enable")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v("\n")])])]),s("h4",{attrs:{id:"查看状态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看状态"}},[a._v("#")]),a._v(" 查看状态")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("systemctl status "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v("\n")])])]),s("h2",{attrs:{id:"ubuntu"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu"}},[a._v("#")]),a._v(" Ubuntu")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt-get")]),a._v(" update\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt-get")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" ca-certificates "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v("\n")])])]),s("h3",{attrs:{id:"使用阿里源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用阿里源"}},[a._v("#")]),a._v(" 使用阿里源")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#  创建 keyrings 目录并设置权限")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-m")]),a._v(" 0755 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" /etc/apt/keyrings\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 下载 Docker GPG 公钥（ASCII 格式）到指定位置")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-fsSL")]),a._v(" https://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" /etc/apt/keyrings/docker.asc\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 设置 GPG 公钥文件权限为可读")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("chmod")]),a._v(" a+r /etc/apt/keyrings/docker.asc\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 添加阿里云 Docker 源")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"deb [arch='),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("dpkg --print-architecture"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v(" signed-by=/etc/apt/keyrings/docker.asc]  https://mirrors.aliyun.com/docker-ce/linux/ubuntu "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("lsb_release "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-cs")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v(' stable"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tee")]),a._v(" /etc/apt/sources.list.d/docker.list "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" /dev/null\n")])])]),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-fsSL")]),a._v(" https://download.docker.com/linux/ubuntu/gpg "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" /etc/apt/keyrings/docker.asc\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("chmod")]),a._v(" a+r /etc/apt/keyrings/docker.asc\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 添加 阿里 Docker GPG 密钥")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-fsSL")]),a._v(" https://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" gpg "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--dearmor")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" /usr/share/keyrings/docker-archive-keyring.gpg\n")])])]),s("h3",{attrs:{id:"使用官方源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用官方源"}},[a._v("#")]),a._v(" 使用官方源")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-m")]),a._v(" 0755 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" /etc/apt/keyrings\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-fsSL")]),a._v(" https://download.docker.com/linux/ubuntu/gpg "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" /etc/apt/keyrings/docker.asc\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("chmod")]),a._v(" a+r /etc/apt/keyrings/docker.asc\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"deb [arch='),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("dpkg --print-architecture"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v(" signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v(" /etc/os-release "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${UBUNTU_CODENAME"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":-")]),a._v("$VERSION_CODENAME}")]),a._v('"')]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v(' stable"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tee")]),a._v(" /etc/apt/sources.list.d/docker.list "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" /dev/null\n")])])]),s("h3",{attrs:{id:"安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[a._v("#")]),a._v(" 安装")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt-get")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin\n")])])]),s("h3",{attrs:{id:"查看版本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看版本"}},[a._v("#")]),a._v(" 查看版本")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt-cache")]),a._v(" madison docker-ce "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("awk")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'{ print $3 }'")]),a._v("\n")])])]),s("h3",{attrs:{id:"指定版本安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#指定版本安装"}},[a._v("#")]),a._v(" 指定版本安装")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#VERSION_STRING=5:28.0.4-1~ubuntu.24.04~noble")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("VERSION_STRING")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),a._v(":26.0.1-1~ubuntu.20.04~focal\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt-get")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" docker-ce"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$VERSION_STRING")]),a._v(" docker-ce-cli"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$VERSION_STRING")]),a._v(" containerd.io docker-buildx-plugin docker-compose-plugin\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);