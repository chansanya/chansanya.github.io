(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{370:function(a,n,t){"use strict";t.r(n);var e=t(8),s=Object(e.a)({},(function(){var a=this,n=a._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[n("p",[a._v("GB28181 简单理解")]),a._v(" "),n("details",{staticClass:"custom-block details"},[n("summary",[a._v("示例数据")]),a._v(" "),n("blockquote",[n("p",[a._v("SIP服务信息")]),a._v(" "),n("p",[a._v("SIP服务编码： 41010500002000000001")]),a._v(" "),n("p",[a._v("SIP服务域： 4101050000")]),a._v(" "),n("p",[a._v("SIP服务IP：192.168.31.186")]),a._v(" "),n("p",[a._v("SIP服务端口：5060")])]),a._v(" "),n("blockquote",[n("p",[a._v("SIP设备信息")]),a._v(" "),n("p",[a._v("设备SIP编码: 34020000001320000001")]),a._v(" "),n("p",[a._v("设备SIP域: 3402000000")]),a._v(" "),n("p",[a._v("设备IP: 192.168.31.68")]),a._v(" "),n("p",[a._v("设备SIP端口: 5060")]),a._v(" "),n("p",[a._v("设备SIP密码：123")])])]),a._v(" "),n("h2",{attrs:{id:"信令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#信令"}},[a._v("#")]),a._v(" 信令")]),a._v(" "),n("h3",{attrs:{id:"基本注册"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#基本注册"}},[a._v("#")]),a._v(" 基本注册")]),a._v(" "),n("h4",{attrs:{id:"流程图"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#流程图"}},[a._v("#")]),a._v(" 流程图")]),a._v(" "),n("p",[n("img",{attrs:{src:"/doc/sip/img.png",alt:"img.png"}})]),a._v(" "),n("details",{staticClass:"custom-block details"},[n("summary",[a._v("信令格式")]),a._v(" "),n("p",[n("strong",[a._v("设备向SIP服务器发送注册请求")])]),a._v(" "),n("p",[a._v("信令格式")]),a._v(" "),n("div",{staticClass:"language-sip extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("REGISTER sip:SIP服务编码@目的域名或者IP地址端口 SIP/2.0\nVia: SIP/2.0/UDP SIP服务域名或IP端口;rport=SIP服务端口;branch=z9hG4bK1555480323;received=SIP服务IP\nFrom: <sip:设备SIP编码@SIP源服务域名>;tag=224638776\nTo: <sip:设备SIP编码@SIP源服务域名>\nCall-ID: 78046639\nCSeq: 1 REGISTER\nContact: <sip:设备SIP编码@SIP源服务域名或IP端口>\nMax-Forwards: 70\nUser-Agent: IP Camera\nExpires: 3600\nContent-Length: 0\n")])])]),n("p",[a._v("示例")]),a._v(" "),n("div",{staticClass:"language-sip extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("REGISTER sip:41010500002000000001@4101050000 SIP/2.0\nVia: SIP/2.0/UDP 192.168.31.68:5060;rport=5060;branch=z9hG4bK1555480323;received=192.168.31.186\nFrom: <sip:34020000001320000001@4101050000>;tag=224638776\nTo: <sip:34020000001320000001@4101050000>\nCall-ID: 78046639\nCSeq: 1 REGISTER\nContact: <sip:34020000001320000001@192.168.31.68:5060>\nMax-Forwards: 70\nUser-Agent: IP Camera\nExpires: 3600\nContent-Length: 0\n")])])]),n("p",[n("strong",[a._v("服务器回复设备未授权")])]),a._v(" "),n("p",[a._v("信令格式")]),a._v(" "),n("div",{staticClass:"language-sip extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v('SIP/2.0 401 Unauthorized\nCSeq: 1 REGISTER\nCall-ID: 78046639\nFrom: <sip:设备SIP编码@SIP服务域>;tag=224638776\nTo: <sip:设备SIP编码@SIP服务域>\nVia: SIP/2.0/UDP SIP服务域或IP端口;rport=SIP服务端口;branch=z9hG4bK1555480323;received=SIP服务IP\nWWW-Authenticate: Digest realm="SIP服务域名",qop="auth",nonce="SIP服务生成的随机数",algorithm=MD5\nUser-Agent: LHY-SIP \nContent-Length: 0\n')])])]),n("p",[a._v("示例")]),a._v(" "),n("div",{staticClass:"language-sip extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v('SIP/2.0 401 Unauthorized\nCSeq: 1 REGISTER\nCall-ID: 78046639\nFrom: <sip:34020000001320000001@4101050000>;tag=224638776\nTo: <sip:34020000001320000001@4101050000>\nVia: SIP/2.0/UDP 192.168.31.68:5060;rport=5060;branch=z9hG4bK1555480323;received=192.168.31.168\nWWW-Authenticate: Digest realm="4101050000",qop="auth",nonce="9f1482a8a132395030bee31d6f9838c4",algorithm=MD5\nUser-Agent: LHY-SIP \nContent-Length: 0\n')])])]),n("p",[n("strong",[a._v("设备再次提交注册请求")])]),a._v(" "),n("p",[n("strong",[a._v("信令格式")])]),a._v(" "),n("div",{staticClass:"language-sip extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v('REGISTER sip:SIP服务编码@SIP服务域 SIP/2.0\nVia: SIP/2.0/UDP SIP服务源域名或者IP端口;rport=SIP服务端口;branch=z9hG4bK614477408;received=SIP服务IP端口\nFrom: <sip:设备SIP编码@SIP服务域>;tag=224638776\nTo: <sip:设备SIP编码@SIP服务域>\nCall-ID: 78046639\nCSeq: 2 REGISTER\nContact: <sip:设备SIP编码@SIP服务源域名或者IP端口>\nAuthorization: Digest username="设备SIP编码",realm="SIP服务域",nonce="SIP服务生成的随机数",uri="sip:SIP服务编码@SIP服务域",response="最终响应",algorithm=MD5,cnonce="客户端随机数",qop=auth,nc=00000001\nMax-Forwards: 70\nUser-Agent: IP Camera\nExpires: 3600\nContent-Length: 0\n')])])]),n("p",[n("strong",[a._v("response生成算法")])]),a._v(" "),n("div",{staticClass:"language-text extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v('A1 = {username}:{realm}:{pwd}\n\nA2 = {Method(当前为:REGISTER)}:{uri}\n\nresponse = MD5(MD5(A1) + ":" + nonce + ":" + nc + ":" + cnonce + ":" + qop + ":" + MD5(A2))\n')])])]),n("p",[n("strong",[a._v("示例")])]),a._v(" "),n("div",{staticClass:"language-sip extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v('REGISTER sip:41010500002000000001@4101050000 SIP/2.0\nVia: SIP/2.0/UDP 192.168.31.68:5060;rport=5060;branch=z9hG4bK614477408;received=192.168.31.186\nFrom: <sip:34020000001320000001@4101050000>;tag=224638776\nTo: <sip:34020000001320000001@4101050000>\nCall-ID: 78046639\nCSeq: 2 REGISTER\nContact: <sip:34020000001320000001@192.168.31.68:5060>\nAuthorization: Digest username="34020000001320000001",realm="4101050000",nonce="9f1482a8a132395030bee31d6f9838c4",uri="sip:41010500002000000001@4101050000",response="cb4b905751fc22fc17f0d9e4720c4c0a",algorithm=MD5,cnonce="0a4f113b",qop=auth,nc=00000001\nMax-Forwards: 70\nUser-Agent: IP Camera\nExpires: 3600\nContent-Length: 0\n')])])]),n("p",[n("strong",[a._v("服务器响应200")])]),a._v(" "),n("p",[a._v("信令格式")]),a._v(" "),n("div",{staticClass:"language-sip extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("SIP/2.0 200 OK\nCSeq: 2 REGISTER\nCall-ID: 78046639\nFrom: <sip:设备SIP编码@SIP服务域>;tag=224638776\nTo: <sip:设备SIP编码@SIP服务域>\nVia: SIP/2.0/UDP SIP服务源域名或者IP端口;rport=SIP服务端口;branch=z9hG4bK614477408;received=SIP服务IP\nDate: 当前时间\nContact: <sip:设备SIP编码@SIP服务源域名或者IP端口>\nExpires: 3600\nUser-Agent: LHY-SIP \nContent-Length: 0\n")])])]),n("p",[a._v("示例")]),a._v(" "),n("div",{staticClass:"language-sip extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("SIP/2.0 200 OK\nCSeq: 2 REGISTER\nCall-ID: 78046639\nFrom: <sip:34020000001320000001@4101050000>;tag=224638776\nTo: <sip:34020000001320000001@4101050000>\nVia: SIP/2.0/UDP 192.168.31.68:5060;rport=5060;branch=z9hG4bK614477408;received=192.168.31.186\nDate: Mon, 08 Jan 2024 05:39:52 GMT\nContact: <sip:34020000001320000001@192.168.31.68:5060>\nExpires: 3600\nUser-Agent: LHY-SIP \nContent-Length: 0\n")])])])]),a._v(" "),n("h3",{attrs:{id:"无应答消息-心跳"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#无应答消息-心跳"}},[a._v("#")]),a._v(" 无应答消息（心跳）")]),a._v(" "),n("h4",{attrs:{id:"流程图-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#流程图-2"}},[a._v("#")]),a._v(" 流程图")]),a._v(" "),n("p",[n("img",{attrs:{src:"/doc/sip/img_1.png",alt:"img.png"}})]),a._v(" "),n("details",{staticClass:"custom-block details"},[n("summary",[a._v("点击查看")]),a._v(" "),n("p",[a._v("设备向服务发送 MESSAGE")]),a._v(" "),n("div",{staticClass:"language-sip extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v('MESSAGE sip:41010500002000000001@4101050000 SIP/2.0\nVia: SIP/2.0/UDP 192.168.31.68:5060;rport=5060;branch=z9hG4bK837898845;received=192.168.31.168\nFrom: <sip:34020000001320000001@3402000000>;tag=915180001\nTo: <sip:41010500002000000001@4101050000>\nCall-ID: 319359727\nCSeq: 20 MESSAGE\nContent-Type: Application/MANSCDP+xml\nMax-Forwards: 70\nUser-Agent: IP Camera\nContent-Length: 179\n\n<?xml version="1.0" encoding="GB2312"?>\n<Notify>\n<CmdType>Keepalive</CmdType>\n<SN>1111</SN>\n<DeviceID>34020000001320000001</DeviceID>\n<Status>OK</Status>\n<Info>\n</Info>\n</Notify>\n')])])]),n("p",[a._v("服务器响应设备200")]),a._v(" "),n("div",{staticClass:"language-sip extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("SIP/2.0 200 OK\nCSeq: 20 MESSAGE\nCall-ID: 319359727\nFrom: <sip:34020000001320000001@3402000000>;tag=915180001\nTo: <sip:41010500002000000001@4101050000>\nVia: SIP/2.0/UDP 192.168.31.68:5060;rport=5060;branch=z9hG4bK837898845;received=192.168.31.68\nUser-Agent: LHY-SIP \nContent-Length: 0\n")])])])]),a._v(" "),n("h3",{attrs:{id:"流媒体播放"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#流媒体播放"}},[a._v("#")]),a._v(" 流媒体播放")]),a._v(" "),n("h4",{attrs:{id:"流程图-3"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#流程图-3"}},[a._v("#")]),a._v(" 流程图")]),a._v(" "),n("p",[n("img",{attrs:{src:"/doc/sip/img_2.png",alt:"img.png"}})]),a._v(" "),n("details",{staticClass:"custom-block details"},[n("summary",[a._v("点击查看")]),a._v(" "),n("p",[n("strong",[a._v("服务端下发设备 INVITE")])]),a._v(" "),n("p",[n("strong",[a._v("信令格式")])]),a._v(" "),n("div",{staticClass:"language-sip extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("INVITE sip:流媒体发送者（设备SIP）编码@SIP服务域或IP地址 SIP/2.0\nCall-ID: 3f6f91a8447b6a3290ecba4d8e00bd0f@192.168.31.186\nCSeq: 800 INVITE\nFrom: <sip:SIP服务编码@SIP服务域>;tag=720a55fa75174f118475bc787efdc962\nTo: <sip:SIP设备编码@SIP服务域或IP地址>\nVia: SIP/2.0/UDP SIP服务域或IP地址;branch=z9hG4bK1704725836355;rport\nMax-Forwards: 70\nContent-Type: APPLICATION/SDP\nUser-Agent: LHY-SIP \nContact: <sip:SIP服务编码@SIP服务IP地址>\nSubject: 流媒体发送者（设备SIP）编码:媒体序列号,流媒体接受者编码（SIP服务编码）:接受流媒体序列号\nContent-Length: 251\n\nv=0\no=流媒体发送者（设备SIP）编码 0 0 IN IP4 流媒体服务器IP\ns=Play\nc=IN IP4 流媒体服务器IP\nt=0 0\nm=video 流媒体服务器端口 RTP/AVP 96 97 98 99\na=recvonly\na=rtpmap:96 PS/90000\na=rtpmap:98 H264/90000\na=rtpmap:97 MPEG4/90000\na=rtpmap:99 H265/90000\ny=媒体序列号\n")])])]),n("p",[n("strong",[a._v("示例")])]),a._v(" "),n("div",{staticClass:"language-sip extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("INVITE sip:34020000001320000001@192.168.31.68:5060 SIP/2.0\nCall-ID: 3f6f91a8447b6a3290ecba4d8e00bd0f@192.168.31.186\nCSeq: 800 INVITE\nFrom: <sip:41010500002000000001@4101050000>;tag=720a55fa75174f118475bc787efdc962\nTo: <sip:34020000001320000001@192.168.31.68:5060>\nVia: SIP/2.0/UDP 192.168.31.186:5060;branch=z9hG4bK1704725836355;rport\nMax-Forwards: 70\nContent-Type: APPLICATION/SDP\nUser-Agent: LHY-SIP \nContact: <sip:41010500002000000001@192.168.31.186:5060>\nSubject: 34020000001320000001:0105000179,41010500002000000001:0\nContent-Length: 251\n\nv=0\no=34020000001320000001 0 0 IN IP4 192.168.31.107\ns=Play\nc=IN IP4 192.168.31.107\nt=0 0\nm=video 35057 RTP/AVP 96 97 98 99\na=recvonly\na=rtpmap:96 PS/90000\na=rtpmap:98 H264/90000\na=rtpmap:97 MPEG4/90000\na=rtpmap:99 H265/90000\ny=0105000179\n")])])]),n("p",[n("strong",[a._v("设备回复服务端 OK")])]),a._v(" "),n("p",[a._v("信令格式")]),a._v(" "),n("div",{staticClass:"language-sip extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("SIP/2.0 200 OK\nVia: SIP/2.0/UDP SIP服务域或IP端口;branch=z9hG4bK1704725836355;rport=SIP服务端口\nFrom: <sip:SIP服务编码@SIP服务域>;tag=720a55fa75174f118475bc787efdc962\nTo: <sip:SIP设备编码@SIP服务域或IP端口>;tag=1894430947\nCall-ID: 3f6f91a8447b6a3290ecba4d8e00bd0f@192.168.31.186\nCSeq: 800 INVITE\nContact: <sip:SIP设备编码@SIP服务域或IP端口>\nContent-Type: application/sdp\nUser-Agent: IP Camera\nContent-Length: 187\n\nv=0\no=流媒体发送者（设备SIP）编码 3016 3016 IN IP4 流媒体服务器IP\ns=Play\nc=IN IP4 流媒体服务器IP\nt=0 0\nm=video 15060 RTP/AVP 96\na=sendonly\na=rtpmap:96 PS/90000\na=filesize:0\ny=媒体序列号\n")])])]),n("p",[a._v("示例")]),a._v(" "),n("div",{staticClass:"language-sip extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("SIP/2.0 200 OK\nVia: SIP/2.0/UDP 192.168.31.186:5060;branch=z9hG4bK1704725836355;rport=5060\nFrom: <sip:41010500002000000001@4101050000>;tag=720a55fa75174f118475bc787efdc962\nTo: <sip:34020000001320000001@192.168.31.68:5060>;tag=1894430947\nCall-ID: 3f6f91a8447b6a3290ecba4d8e00bd0f@192.168.31.186\nCSeq: 800 INVITE\nContact: <sip:34020000001320000001@192.168.31.68:5060>\nContent-Type: application/sdp\nUser-Agent: IP Camera\nContent-Length: 187\n\nv=0\no=34020000001320000001 3016 3016 IN IP4 192.168.31.68\ns=Play\nc=IN IP4 192.168.31.68\nt=0 0\nm=video 15060 RTP/AVP 96\na=sendonly\na=rtpmap:96 PS/90000\na=filesize:0\ny=0105000179\n")])])]),n("p",[n("strong",[a._v("服务端回复设备 ACK")])]),a._v(" "),n("p",[a._v("信令格式")]),a._v(" "),n("div",{staticClass:"language-sip extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("ACK sip:SIP设备编码@SIP服务域或IP端口 SIP/2.0\nCall-ID: 3f6f91a8447b6a3290ecba4d8e00bd0f@192.168.31.186\nCSeq: 800 ACK\nFrom: <sip:SIP服务编码@SIP服务域>;tag=720a55fa75174f118475bc787efdc962\nTo: <sip:SIP设备编码@SIP服务域或IP端口>;tag=1894430947\nVia: SIP/2.0/UDP SIP服务域或IP端口;branch=z9hG4bK1704725836377;rport\nMax-Forwards: 70\nUser-Agent: LHY-SIP\nContact: <sip:SIP服务编码@SIP服务域或IP端口>\nContent-Length: 0\n")])])]),n("p",[a._v("示例")]),a._v(" "),n("div",{staticClass:"language-sip extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("ACK sip:34020000001320000001@192.168.31.68:5060 SIP/2.0\nCall-ID: 3f6f91a8447b6a3290ecba4d8e00bd0f@192.168.31.186\nCSeq: 800 ACK\nFrom: <sip:41010500002000000001@4101050000>;tag=720a55fa75174f118475bc787efdc962\nTo: <sip:34020000001320000001@192.168.31.68:5060>;tag=1894430947\nVia: SIP/2.0/UDP 192.168.31.186:5060;branch=z9hG4bK1704725836377;rport\nMax-Forwards: 70\nUser-Agent: LHY-SIP\nContact: <sip:41010500002000000001@192.168.31.186:5060>\nContent-Length: 0\n")])])])])])}),[],!1,null,null,null);n.default=s.exports}}]);