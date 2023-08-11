(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{356:function(e,t,a){"use strict";a.r(t);var n=a(2),s=Object(n.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("使用网络编程就必定会遇到半包粘包问题，"),t("code",[e._v("Netty")]),e._v("的"),t("code",[e._v("LengthFieldBasedFrameDecoder")]),e._v(" 是个很好的解决方案。\n"),t("code",[e._v("LengthFieldBasedFrameDecoder")]),e._v(" 遵循"),t("code",[e._v("LTC")]),e._v("解码方式，可以根据不同的构造方式解析不同的数据包。\n")]),e._v(" "),t("h2",{attrs:{id:"常用构造属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常用构造属性"}},[e._v("#")]),e._v(" 常用构造属性")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("参数")]),e._v(" "),t("th",[e._v("描述")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("maxFrameLength")]),e._v(" "),t("td",[e._v("帧最大长度")])]),e._v(" "),t("tr",[t("td",[e._v("lengthFieldOffset")]),e._v(" "),t("td",[e._v("长度偏移量 "),t("br"),e._v(" 偏移多少位后开始表示长度")])]),e._v(" "),t("tr",[t("td",[e._v("lengthFieldLength")]),e._v(" "),t("td",[e._v("长度域字段所占的字节数")])]),e._v(" "),t("tr",[t("td",[e._v("lengthAdjustment")]),e._v(" "),t("td",[e._v("数据长度修正"),t("br"),e._v("因为长度域可以表示数据包长度，也可以只表示数据内容长度，如果表示的是整个数据包长度，那么我们需要修正数据长度。 "),t("br"),e._v("如果为正：代表长度和内容之前有2位额外信息，需要长度需要修正:"),t("code",[e._v("+2")]),t("br"),e._v("如果为负：代表 lengthFieldLength 表示整个数据包长度，假如lengthFieldLength占用4个字节值为15，那么实际数据长度="),t("code",[e._v("15-4")]),e._v("  需要修正："),t("code",[e._v("-4")])])]),e._v(" "),t("tr",[t("td",[e._v("initialBytesToStrip")]),e._v(" "),t("td",[e._v("当一个数据包我们不需要数据包的部分信息的时候，可以这部分信息进行剥离， "),t("br"),e._v(" 这个值表示从数据包起始位置截取的位数")])])])]),e._v(" "),t("h2",{attrs:{id:"构造函数解析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#构造函数解析"}},[e._v("#")]),e._v(" 构造函数解析")]),e._v(" "),t("p",[e._v("通常我们使用的构造函数如下：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("new LengthFieldBasedFrameDecoder(maxFrameLength,lengthFieldOffset,lengthFieldLength,lengthAdjustment,initialBytesToStrip)\n")])])]),t("p",[e._v("首先提供一段测试代码：")]),e._v(" "),t("details",{staticClass:"custom-block details"},[t("summary",[e._v("点击查看")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('@Slf4j\npublic class LengthFieldBasedFrameTest extends MessageToMessageCodec<ByteBuf,ByteBuf> {\n\n    /**\n     *帧最大长度\n     */\n    private final static int MAX_FRAME_LENGTH = 64;\n    /**\n     * 长度偏移量\n     * 偏移多少位后开始表示长度\n     */\n    private final static int LENGTH_FIELD_OFFSET = 0;\n    /**\n     * 长度字段所占的字节数\n     */\n    private final static int LENGTH_FIELD_LENGTH = 2;\n    /**\n     * 长度调整\n     * 如果为正：表示长度后面n个字节才是内容\n     * 如果为负：表示内容部分需要往前取n个字节\n     */\n    private final static int LENGTH_ADJUSTMENT = 0;\n    /**\n     * 需要剥离字符 \n     * 需要截取数据包位数，从数据包起始部分截取\n     */\n    private final static int INITIAL_BYTES_TO_STRIP = 0;\n    /**\n     * 是否有额外头\n     */\n    private final static boolean HAS_HEARD = false;\n\n    @Override\n    protected void encode(ChannelHandlerContext ctx, ByteBuf msg, List<Object> out) throws Exception {\n        log.info("开始编码:{}",msg);\n        ByteBuf buffer = ctx.alloc().buffer();\n        buffer.writeBytes(msg);\n        out.add(buffer);\n    }\n\n    @Override\n    protected void decode(ChannelHandlerContext ctx, ByteBuf in, List<Object> out) throws Exception {\n        log.info("开始解码:{}",in.toString(StandardCharsets.UTF_8));\n        ByteBuf buffer = in.alloc().buffer();\n        buffer.writeBytes(in);\n        out.add(buffer);\n    }\n\n    public static void main(String[] args) throws Exception {\n        EmbeddedChannel channel = new EmbeddedChannel(\n                new LoggingHandler(LogLevel.DEBUG),\n                new LengthFieldBasedFrameDecoder(MAX_FRAME_LENGTH, LENGTH_FIELD_OFFSET, LENGTH_FIELD_LENGTH, LENGTH_ADJUSTMENT, INITIAL_BYTES_TO_STRIP),\n                new LoggingHandler(LogLevel.DEBUG),\n                new LengthFieldBasedFrameTest(),\n                new SimpleChannelInboundHandler<ByteBuf>(){\n                    @Override\n                    protected void channelRead0(ChannelHandlerContext channelHandlerContext, ByteBuf pushMessage) throws Exception {\n                        log.info("接受到消息 pushMessage :{}",pushMessage.toString(StandardCharsets.UTF_8));\n                    }\n                }\n        );\n\n        byte[] bytes = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".getBytes(StandardCharsets.UTF_8);\n\n        //长度偏移填充\n        ByteBuf buffer = ByteBufAllocator.DEFAULT.buffer();\n        if(LENGTH_FIELD_OFFSET > 0){\n            for (int i = 0; i < LENGTH_FIELD_OFFSET; i++) {\n                buffer.writeByte(bytes[0]);\n            }\n        }\n        //长度\n        int size = 15;\n        buffer.writeInt(size);\n        \n\n        //长度调整填充\n        if(HAS_HEARD){\n            for (int i = 0; i < Math.abs(LENGTH_ADJUSTMENT); i++) {\n                buffer.writeByte(bytes[1]);\n            }\n        }\n\n        //内容填充\n        for (int i = 0; i < size; i++) {\n            buffer.writeByte(bytes[i%bytes.length]);\n        }\n\n        channel.writeInbound(buffer);\n        \n        channel.writeInbound(buffer);\n    }\n')])])])]),e._v(" "),t("h3",{attrs:{id:"以下是不同构造参数达到的效果"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#以下是不同构造参数达到的效果"}},[e._v("#")]),e._v(" 以下是不同构造参数达到的效果")]),e._v(" "),t("h4",{attrs:{id:"只定义数据长度"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#只定义数据长度"}},[e._v("#")]),e._v(" 只定义数据长度")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("private final static int LENGTH_FIELD_OFFSET = 0;\nprivate final static int LENGTH_FIELD_LENGTH = 4;\nprivate final static int LENGTH_ADJUSTMENT = 0;\nprivate final static int INITIAL_BYTES_TO_STRIP = 0;\n")])])]),t("p",[e._v("只定义数据长度占4位")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("LengthFieldBasedFrameTest 处理前:\n         +-------------------------------------------------+\n         |  0  1  2  3  4  5  6  7  8  9  a  b  c  d  e  f |\n+--------+-------------------------------------------------+----------------+\n|00000000| 00 00 00 0f 41 42 43 44 45 46 47 48 49 4a 4b 4c |....ABCDEFGHIJKL|\n|00000010| 4d 4e 4f                                        |MNO             |\n+--------+-------------------------------------------------+----------------+\n\nLengthFieldBasedFrameTest 处理后:\n         +-------------------------------------------------+\n         |  0  1  2  3  4  5  6  7  8  9  a  b  c  d  e  f |\n+--------+-------------------------------------------------+----------------+\n|00000000| 00 00 00 0f 41 42 43 44 45 46 47 48 49 4a 4b 4c |....ABCDEFGHIJKL|\n|00000010| 4d 4e 4f                                        |MNO             |\n+--------+-------------------------------------------------+----------------+\n")])])]),t("p",[e._v("可以看到因为"),t("code",[e._v("LENGTH_FIELD_OFFSET")]),e._v("为0,所以开始位置即为长度，一共占4位分别对应"),t("code",[e._v("00 00 00 0f")]),e._v("，也就是15。")]),e._v(" "),t("p",[e._v("然后取了15位字符："),t("code",[e._v("ABCDEFGHIJKLMNO")]),e._v("  数据包读取完毕。")]),e._v(" "),t("h4",{attrs:{id:"截取数据-只获取内容"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#截取数据-只获取内容"}},[e._v("#")]),e._v(" 截取数据，只获取内容")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("private final static int LENGTH_FIELD_OFFSET = 0;\nprivate final static int LENGTH_FIELD_LENGTH = 4;\nprivate final static int LENGTH_ADJUSTMENT = 0;\nprivate final static int INITIAL_BYTES_TO_STRIP = 4;\n")])])]),t("p",[e._v("对于部分数据包，我们只需要内容，并不想知道它的数据长度，时候可以用"),t("code",[e._v("INITIAL_BYTES_TO_STRIP")]),e._v("剥离数据包的长度。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("LengthFieldBasedFrameTest 处理前:\n         +-------------------------------------------------+\n         |  0  1  2  3  4  5  6  7  8  9  a  b  c  d  e  f |\n+--------+-------------------------------------------------+----------------+\n|00000000| 00 00 00 0f 41 42 43 44 45 46 47 48 49 4a 4b 4c |....ABCDEFGHIJKL|\n|00000010| 4d 4e 4f                                        |MNO             |\n+--------+-------------------------------------------------+----------------+\n\nLengthFieldBasedFrameTest 处理后:\n         +-------------------------------------------------+\n         |  0  1  2  3  4  5  6  7  8  9  a  b  c  d  e  f |\n+--------+-------------------------------------------------+----------------+\n|00000000| 41 42 43 44 45 46 47 48 49 4a 4b 4c 4d 4e 4f    |ABCDEFGHIJKLMNO |\n+--------+-------------------------------------------------+----------------+\n\n")])])]),t("p",[e._v("此示例在上面的基础上新增了"),t("code",[e._v("INITIAL_BYTES_TO_STRIP")]),e._v(",也就是说剥离4个字节，所以长度所占用的4个字节被剥离，只剩下了"),t("code",[e._v("ABCDEFGHIJKLMNO")])]),e._v(" "),t("h4",{attrs:{id:"数据长度位整个数据包长度"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据长度位整个数据包长度"}},[e._v("#")]),e._v(" 数据长度位整个数据包长度")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("private final static int LENGTH_FIELD_OFFSET = 0;\nprivate final static int LENGTH_FIELD_LENGTH = 4;\nprivate final static int LENGTH_ADJUSTMENT = -4;\nprivate final static int INITIAL_BYTES_TO_STRIP = 0;\n")])])]),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("注意")]),e._v(" "),t("p",[e._v("在上面数据包定义中，长度表示的是数据内容长度")]),e._v(" "),t("p",[e._v("但是在某一些数据包中，长度表示的是数据包总长度，上面的示例中：")]),e._v(" "),t("p",[e._v("数据包长度15，所以读取到了数据："),t("code",[e._v("ABCDEFGHIJKLMNO")]),e._v(",其中长度自身占了4位，需要修正所以-4，那么实际的数据包长度应该为："),t("code",[e._v("15-4=11")]),e._v("，即数据："),t("code",[e._v("ABCDEFGHIJK")])]),e._v(" "),t("p",[t("strong",[e._v("其中："),t("code",[e._v("LENGTH_FIELD_OFFSET")]),e._v("不计入总长度")])])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("LengthFieldBasedFrameTest 处理前:\n         +-------------------------------------------------+\n         |  0  1  2  3  4  5  6  7  8  9  a  b  c  d  e  f |\n+--------+-------------------------------------------------+----------------+\n|00000000| 00 00 00 0f 41 42 43 44 45 46 47 48 49 4a 4b 4c |....ABCDEFGHIJKL|\n|00000010| 4d 4e 4f                                        |MNO             |\n+--------+-------------------------------------------------+----------------+\n\nLengthFieldBasedFrameTest 处理后:\n         +-------------------------------------------------+\n         |  0  1  2  3  4  5  6  7  8  9  a  b  c  d  e  f |\n+--------+-------------------------------------------------+----------------+\n|00000000| 00 00 00 0f 41 42 43 44 45 46 47 48 49 4a 4b    |....ABCDEFGHIJK |\n+--------+-------------------------------------------------+----------------+\n")])])]),t("h4",{attrs:{id:"定义一个协议标识"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#定义一个协议标识"}},[e._v("#")]),e._v(" 定义一个协议标识")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("private final static int LENGTH_FIELD_OFFSET = 2;\nprivate final static int LENGTH_FIELD_LENGTH = 4;\nprivate final static int LENGTH_ADJUSTMENT = 0;\nprivate final static int INITIAL_BYTES_TO_STRIP = 0;\n")])])]),t("p",[e._v("修改程序，定义"),t("code",[e._v("LENGTH_FIELD_OFFSET")]),e._v("为2，即在头部写入"),t("code",[e._v("AA")]),e._v("表示协议标识。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("LengthFieldBasedFrameTest 处理前:\n         +-------------------------------------------------+\n         |  0  1  2  3  4  5  6  7  8  9  a  b  c  d  e  f |\n+--------+-------------------------------------------------+----------------+\n|00000000| 41 41 00 00 00 0f 41 42 43 44 45 46 47 48 49 4a |AA....ABCDEFGHIJ|\n|00000010| 4b 4c 4d 4e 4f                                  |KLMNO           |\n+--------+-------------------------------------------------+----------------+\n\nLengthFieldBasedFrameTest 处理后:\n+-------------------------------------------------+\n|  0  1  2  3  4  5  6  7  8  9  a  b  c  d  e  f |\n+--------+-------------------------------------------------+----------------+\n|00000000| 41 41 00 00 00 0f 41 42 43 44 45 46 47 48 49 4a |AA....ABCDEFGHIJ|\n|00000010| 4b 4c 4d 4e 4f                                  |KLMNO           |\n+--------+-------------------------------------------------+----------------+\n")])])]),t("h4",{attrs:{id:"长度和内容之间添加头信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#长度和内容之间添加头信息"}},[e._v("#")]),e._v(" 长度和内容之间添加头信息")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("private final static int LENGTH_FIELD_OFFSET = 2;\nprivate final static int LENGTH_FIELD_LENGTH = 4;\nprivate final static int LENGTH_ADJUSTMENT = 2;\nprivate final static int INITIAL_BYTES_TO_STRIP = 0;\nprivate final static boolean HAS_HEARD = true;\n")])])]),t("p",[e._v("有的时候长度和内容之间我们可能需要增加头信息定义一些基础信息，还记得上面的"),t("code",[e._v("LENGTH_ADJUSTMENT")]),e._v("嘛？通过它对数据包长度进行补偿，")]),e._v(" "),t("p",[e._v("在上面的情况中：长度15为一整个数据包长度，数据包长度本身占了4位，所以进行-4补偿，剩余的11为实际数据内容长度。")]),e._v(" "),t("p",[e._v("因此，如果我们有额外的信息，那么这部分数据就不在数据包长度内。需要进行正向补偿。在测试程序里打开"),t("code",[e._v("HAS_HEARD")]),e._v("表示需要添加额外头（其实就是普通的写入操作，实际使用时可能需要按照你的需求场景进行修改）。")]),e._v(" "),t("p",[t("code",[e._v("LENGTH_ADJUSTMENT=2")]),e._v("，表示长度后面后接两个字节（"),t("code",[e._v("LENGTH_ADJUSTMENT 值")]),e._v("）。对照我们的程序也就是在长度和内容之间插入"),t("code",[e._v("BB")]),e._v("。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("LengthFieldBasedFrameTest 处理前:\n         +-------------------------------------------------+\n         |  0  1  2  3  4  5  6  7  8  9  a  b  c  d  e  f |\n+--------+-------------------------------------------------+----------------+\n|00000000| 41 41 00 00 00 0f 42 42 41 42 43 44 45 46 47 48 |AA....BBABCDEFGH|\n|00000010| 49 4a 4b 4c 4d 4e 4f                            |IJKLMNO         |\n+--------+-------------------------------------------------+----------------+\n\nLengthFieldBasedFrameTest 处理后:\n         +-------------------------------------------------+\n         |  0  1  2  3  4  5  6  7  8  9  a  b  c  d  e  f |\n+--------+-------------------------------------------------+----------------+\n|00000000| 41 41 00 00 00 0f 42 42 41 42 43 44 45 46 47 48 |AA....BBABCDEFGH|\n|00000010| 49 4a 4b 4c 4d 4e 4f                            |IJKLMNO         |\n+--------+-------------------------------------------------+----------------+\n")])])]),t("h4",{attrs:{id:"长度为数据包长度且和内容之间添加头信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#长度为数据包长度且和内容之间添加头信息"}},[e._v("#")]),e._v(" 长度为数据包长度且和内容之间添加头信息")]),e._v(" "),t("p",[e._v("问题来了在"),t("code",[e._v("LENGTH_ADJUSTMENT")]),e._v("为正时，表示额外信息长度，那么"),t("code",[e._v("LENGTH_FIELD_LENGTH")]),e._v("为数据内容长度。 如果你的协议里面还是需要将"),t("code",[e._v("LENGTH_FIELD_LENGTH")]),e._v("作为整个数据包长度该怎么办呢？")]),e._v(" "),t("p",[e._v("其实你依旧可以进行如下设置")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("private final static int LENGTH_FIELD_OFFSET = 2;\nprivate final static int LENGTH_FIELD_LENGTH = 4;\nprivate final static int LENGTH_ADJUSTMENT = -4;\nprivate final static int INITIAL_BYTES_TO_STRIP = 0;\nprivate final static boolean HAS_HEARD = true;\n")])])]),t("p",[t("code",[e._v("HAS_HEARD")]),e._v("同上表示程序会写入一个额外头，因为此时"),t("code",[e._v("LENGTH_ADJUSTMENT")]),e._v("为负数，所以"),t("code",[e._v("LENGTH_FIELD_LENGTH")]),e._v("所代表的长度就是数据包总长度。")]),e._v(" "),t("p",[e._v("我们对这个长度15的数据包进行拆分：")]),e._v(" "),t("ul",[t("li",[e._v("LENGTH_FIELD_OFFSET ->2位，但不计入长度计算")]),e._v(" "),t("li",[e._v("长度占 -> 4位")]),e._v(" "),t("li",[e._v("LENGTH_ADJUSTMENT修正 -4")])]),e._v(" "),t("p",[e._v("剩余数据位："),t("code",[e._v("15-4 = 11")]),e._v("， 其中"),t("code",[e._v("HAS_HEARD")]),e._v("会写入4个额外字符"),t("code",[e._v("BBBB")]),e._v("（这里的4位是因为我程序指定写入长度为："),t("code",[e._v("LENGTH_ADJUSTMENT的绝对值")]),e._v("，具体情况需要按自己程序分析），所以留给内容的长度只有7，将会得到数据："),t("code",[e._v("ABCDEFG")]),e._v("。")]),e._v(" "),t("p",[e._v("那么我们推测最终数据包:"),t("code",[e._v("AA....BBABCDEFG")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("LengthFieldBasedFrameTest 处理前:\n         +-------------------------------------------------+\n         |  0  1  2  3  4  5  6  7  8  9  a  b  c  d  e  f |\n+--------+-------------------------------------------------+----------------+\n|00000000| 41 41 00 00 00 0f 42 42 42 42 41 42 43 44 45 46 |AA....BBBBABCDEF|\n|00000010| 47 48 49 4a 4b 4c 4d 4e 4f                      |GHIJKLMNO       |\n+--------+-------------------------------------------------+----------------+\n\nLengthFieldBasedFrameTest 处理后:\n         +-------------------------------------------------+\n         |  0  1  2  3  4  5  6  7  8  9  a  b  c  d  e  f |\n+--------+-------------------------------------------------+----------------+\n|00000000| 41 41 00 00 00 0f 42 42 42 42 41 42 43 44 45 46 |AA....BBBBABCDEF|\n|00000010| 47                                              |G               |\n+--------+-------------------------------------------------+----------------+\n")])])]),t("h4",{attrs:{id:"长度为数据包长度且和内容之间添加头信息并修正"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#长度为数据包长度且和内容之间添加头信息并修正"}},[e._v("#")]),e._v(" 长度为数据包长度且和内容之间添加头信息并修正")]),e._v(" "),t("p",[e._v("其实你依旧可以进行如下设置")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("private final static int LENGTH_FIELD_OFFSET = 2;\nprivate final static int LENGTH_FIELD_LENGTH = 4;\nprivate final static int LENGTH_ADJUSTMENT = -4;\nprivate final static int INITIAL_BYTES_TO_STRIP = 6;\nprivate final static boolean HAS_HEARD = true;\n")])])]),t("p",[e._v("对于上述程序最终数据包:"),t("code",[e._v("AA....BBABCDEFG")]),e._v("，我们只保留真正的内容部分，所以需要进行数据剥离,剥离长度为:"),t("code",[e._v("LENGTH_FIELD_OFFSET + LENGTH_FIELD_LENGTH")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("LengthFieldBasedFrameTest 处理前:\n         +-------------------------------------------------+\n         |  0  1  2  3  4  5  6  7  8  9  a  b  c  d  e  f |\n+--------+-------------------------------------------------+----------------+\n|00000000| 41 41 00 00 00 0f 42 42 42 42 41 42 43 44 45 46 |AA....BBBBABCDEF|\n|00000010| 47 48 49 4a 4b 4c 4d 4e 4f                      |GHIJKLMNO       |\n+--------+-------------------------------------------------+----------------+\n\nLengthFieldBasedFrameTest 处理后:\n         +-------------------------------------------------+\n         |  0  1  2  3  4  5  6  7  8  9  a  b  c  d  e  f |\n+--------+-------------------------------------------------+----------------+\n|00000000| 42 42 42 42 41 42 43 44 45 46 47                |BBBBABCDEFG     |\n+--------+-------------------------------------------------+----------------+\n")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);