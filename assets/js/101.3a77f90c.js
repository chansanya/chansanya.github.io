(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{401:function(s,t,a){"use strict";a.r(t);var n=a(8),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[t("strong",[s._v("ES默认裸奔模式,还是设置个密码吧")])]),s._v(" "),t("h2",{attrs:{id:"设置vm空间"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置vm空间"}},[s._v("#")]),s._v(" 设置VM空间")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/sysctl.conf\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加如下命令")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("vm.max_map_count")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("262144")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sysctl")]),s._v(" - p\n")])])]),t("p",[s._v("或者")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sysctl")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-w")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("vm.max_map_count")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("262144")]),s._v("\n")])])]),t("h2",{attrs:{id:"docker配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker配置"}},[s._v("#")]),s._v(" docker配置")]),s._v(" "),t("details",{staticClass:"custom-block details"},[t("summary",[s._v("docker-compose.yml")]),s._v(" "),t("div",{staticClass:"language-yaml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("version")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2.2'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("services")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("es01")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" docker.elastic.co/elasticsearch/elasticsearch"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("$"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("ELASTIC_STACK_VERSION"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("container_name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" es01\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("environment")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" node.name=es01\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" discovery.seed_hosts=es02\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" cluster.initial_master_nodes=es01"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("es02\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" cluster.name=docker"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("cluster\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" bootstrap.memory_lock=true\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ES_JAVA_OPTS=-Xms512m -Xmx512m"')]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" http.max_content_length=200mb \n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ulimits")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("memlock")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("soft")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("-1")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("hard")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("-1")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumes")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ./data/es01"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/usr/share/elasticsearch/data\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ./config/es01"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/usr/share/elasticsearch/config\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" 9200"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9200")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("networks")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" esnet\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("es02")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" docker.elastic.co/elasticsearch/elasticsearch"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("$"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("ELASTIC_STACK_VERSION"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("container_name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" es02\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("environment")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" node.name=es02\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" discovery.seed_hosts=es01\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" cluster.initial_master_nodes=es01"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("es02\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" cluster.name=docker"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("cluster\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" bootstrap.memory_lock=true\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ES_JAVA_OPTS=-Xms512m -Xmx512m"')]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" http.max_content_length=200mb \n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ulimits")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("memlock")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("soft")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("-1")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("hard")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("-1")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumes")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ./data/es02"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/usr/share/elasticsearch/data\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ./config/es02"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/usr/share/elasticsearch/config\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("networks")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" esnet\n \n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kibana")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" docker.elastic.co/kibana/kibana"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("$"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("ELASTIC_STACK_VERSION"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("container_name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" kibana\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'5601:5601'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("    \n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("networks")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'esnet'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("environment")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" SERVER_NAME=kibana.localhost\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ELASTICSEARCH_HOSTS=http"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("//es01"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9200")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" I18N_LOCALE=zh"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("CN\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ELASTICSEARCH_USERNAME=elastic\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ELASTICSEARCH_PASSWORD=qazWSXQwe\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("depends_on")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'es01'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" \n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# volumes:")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#   - ./kibana.yml:/usr/share/kibana/config/kibana.yml ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#volumes:")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  esdata01:")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    driver: local")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  esdata02:")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    driver: local")]),s._v("\n \n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("networks")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("esnet")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n\n")])])])]),s._v(" "),t("h2",{attrs:{id:"容器设置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#容器设置"}},[s._v("#")]),s._v(" 容器设置")]),s._v(" "),t("p",[s._v("进入容器")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker-compose")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" es01 "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v("\n")])])]),t("h3",{attrs:{id:"修改-elasticsearch-yml"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改-elasticsearch-yml"}},[s._v("#")]),s._v(" 修改 elasticsearch.yml")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" config\n")])])]),t("p",[s._v("新增如下配置")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("xpack.security.enabled: "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\nxpack.license.self_generated.type: basic\nxpack.security.transport.ssl.enabled: "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n\n")])])]),t("h3",{attrs:{id:"构建秘钥"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#构建秘钥"}},[s._v("#")]),s._v(" 构建秘钥")]),s._v(" "),t("p",[s._v("进入"),t("code",[s._v("bin")]),s._v("路径")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ./bin\n")])])]),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("./elasticsearch-certutil ca "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-out")]),s._v(" config/elastic-certificates.p12\n")])])]),t("p",[s._v("复制到其他节点,建议先复制配置到宿主机，然后挂载")]),s._v(" "),t("details",{staticClass:"custom-block details"},[t("summary",[s._v("相关命令")]),s._v(" "),t("p",[s._v("宿主机下执行,需要和"),t("code",[s._v("docker-compose.yml")]),s._v("同级别")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" 容器1ID:/usr/share/elasticsearch/config .config/es01/\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" 容器2ID:/usr/share/elasticsearch/config .config/es02/\n\n或者\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker-compose")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" 容器1ID:/usr/share/elasticsearch/config .config/es01/\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker-compose")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" 容器2ID:/usr/share/elasticsearch/config .config/es02/\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker-compose")]),s._v(" stop \n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker-compose")]),s._v(" up "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v("\n")])])])]),s._v(" "),t("h2",{attrs:{id:"设置密码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置密码"}},[s._v("#")]),s._v(" 设置密码")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("./elasticsearch-setup-passwords interactive\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 依次输入密码")]),s._v("\n")])])]),t("h2",{attrs:{id:"重启验证"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重启验证"}},[s._v("#")]),s._v(" 重启验证")]),s._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),t("p",[s._v("修改 "),t("code",[s._v("docker-compose.yml")]),s._v("里kibana环境变量的用户名密码为上面设置的密码,否则无法启动")])]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#停止")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker-compose")]),s._v(" stop \n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#重新加载启动")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker-compose")]),s._v(" up "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v("\n")])])]),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 修改密码")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-XPOST")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-u")]),s._v(" elastic "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"127.0.0.1:9200/_security/user/elastic/_password"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-H")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Content-Type: application/json'")]),s._v(" -d"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'{"password" : "elastic123456"}\'')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 验证登录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-u")]),s._v("  elastic  http://localhost:9200/_security/_authenticat\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看ES信息")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-u")]),s._v("  elastic  http://localhost:9200/\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);