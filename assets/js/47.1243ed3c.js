(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{375:function(e,n,t){"use strict";t.r(n);var s=t(2),a=Object(s.a)({},(function(){var e=this,n=e._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"redis过期事件监听"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#redis过期事件监听"}},[e._v("#")]),e._v(" Redis过期事件监听")]),e._v(" "),n("h2",{attrs:{id:"定义redis-消息类型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#定义redis-消息类型"}},[e._v("#")]),e._v(" 定义RedIs 消息类型")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('/**\n * 发布类型\n */\n@Getter\n@AllArgsConstructor\npublic enum PubType {\n\n    /**\n     * 发布计划\n     * 此次测试使用 需要新增通知类型需要自行添加\n     */\n    PLAN("pub:plan"),\n    /**\n     * 到期通知\n     * 此次测试使用 需要新增通知类型需要自行添加\n     */\n    EXPIRED_NOTICE("expired:notice"),\n\n    //.....\n    ;\n    private final String prefix;\n\n    /**\n     * 通过数据唯一标识生成 发布key\n     * @param unique 数据唯一标识\n     * @return 发布key\n     */\n    public  String getKey(String unique){\n        return String.format("%s:%s",this.prefix,unique);\n    }\n\n    /**\n     * 得到发布key唯一标识\n     * @param key 发布key\n     * @return 通过发布key 解析出来的标识\n     */\n    public static String getUnique(String key){\n        return key.substring(key.lastIndexOf(":")+1);\n    }\n    /**\n     * 得到发布类型 使用结果需要判空\n     * @param key 发布key\n     * @return 通过发布key 解析出来的类型\n     */\n    public static PubType getPubType(String key){\n        String prefix = key.substring(0, key.lastIndexOf(":"));\n\n        for (PubType value : PubType.values()) {\n\n            if(!value.getPrefix().equals(prefix)){\n                continue;\n            }\n            return value;\n        }\n        return null;\n    }\n\n    /**\n     * 发布\n     * @param unique 发布唯一标识\n     * @param timeout timeout 秒后过期\n     */\n    public void pub(final String unique,Integer timeout) {\n        new IRedisMessage() {}.pub(this,unique,timeout);\n    }\n\n}\n')])])]),n("h2",{attrs:{id:"定义消息处理接口"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#定义消息处理接口"}},[e._v("#")]),e._v(" 定义消息处理接口")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('public interface IRedisMessage {\n\n    /**\n     * 发布\n     * @param pubType 发布类型\n     * @param unique 发布唯一标识\n     * @param timeout timeout 秒后过期\n     */\n    default  void pub(PubType pubType, String unique,Integer timeout){\n        RedisCache redisCache = SpringUtils.getBean(RedisCache.class);\n        if(ObjectUtils.isEmpty(redisCache)){\n            throw new ServiceException("redisCache not found");\n        }\n        redisCache.setCacheObject(pubType.getKey(unique),unique,timeout,TimeUnit.SECONDS);\n    }\n\n    /**\n     * 接受到通知开始执行\n     * @param key 数据唯一标识\n     */\n    default void exec(String key){}\n}\n\n')])])]),n("h2",{attrs:{id:"定义消息处理注解-处理对应类型消息"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#定义消息处理注解-处理对应类型消息"}},[e._v("#")]),e._v(" 定义消息处理注解 处理对应类型消息")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("@Target({ElementType.TYPE})\n@Retention(RetentionPolicy.RUNTIME)\n@Documented\npublic @interface RedisMessage {\n\n    /**\n     *  标准发布类型\n     * @return 发布类型\n     */\n    PubType value();\n}\n\n\n")])])]),n("h2",{attrs:{id:"实现处理接口"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#实现处理接口"}},[e._v("#")]),e._v(" 实现处理接口")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('@Slf4j\n@RedisMessage(PubType.PLAN)\n@Component\npublic class PlanRedisHandler implements IRedisMessage {\n\n    @Override\n    public void exec(String key) {\n        log.info("类型:{},唯一标识：{} 执行过期操作",PubType.PLAN,key);\n    }\n\n}\n\n')])])]),n("h2",{attrs:{id:"配置监听类"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置监听类"}},[e._v("#")]),e._v(" 配置监听类")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('@Slf4j\n@Configuration\npublic class RedisPushSubConfig {\n    @Bean\n    RedisMessageListenerContainer container(RedisConnectionFactory connectionFactory) {\n        RedisMessageListenerContainer container = new RedisMessageListenerContainer();\n        container.setConnectionFactory(connectionFactory);\n        return container;\n    }\n\n\n    @Component\n    public static class RedisKeyExpirationListener extends KeyExpirationEventMessageListener {\n\n\n        @Override\n        public void onMessage(Message message, byte[] pattern) {\n            // 过期key\n            String expiredKey = message.toString();\n\n            PubType pubType = PubType.getPubType(expiredKey);\n\n            log.warn("key:{} 过期了！！！ 类型:{},数据标识:{}",expiredKey,PubType.getUnique(expiredKey),PubType.getPubType(expiredKey));\n            // 下面可以通过redis工具获取值或者执行业务逻辑\n\n            if(null == pubType){\n                return;\n            }\n\n            Map<String, IRedisMessage> redisMessageBeanMap = SpringUtils.getBeansOfType(IRedisMessage.class);\n\n            for (Map.Entry<String, IRedisMessage> entry : redisMessageBeanMap.entrySet()) {\n                RedisMessage annotation = entry.getValue().getClass().getAnnotation(RedisMessage.class);\n                if(null == annotation ){\n                    continue;\n                }\n\n                if( !annotation.value().equals(pubType)){\n                    continue;\n                }\n\n                entry.getValue().exec(expiredKey);\n            }\n        }\n\n        public RedisKeyExpirationListener(RedisMessageListenerContainer redisMessageListenerContainer ){\n            super(redisMessageListenerContainer);\n        }\n    }\n\n}\n\nimport java.util.Map;\n\n@Slf4j\n@Configuration\npublic class RedisPushSubConfig {\n    @Bean\n    RedisMessageListenerContainer container(RedisConnectionFactory connectionFactory) {\n        RedisMessageListenerContainer container = new RedisMessageListenerContainer();\n        container.setConnectionFactory(connectionFactory);\n        return container;\n    }\n\n\n    @Component\n    public static class RedisKeyExpirationListener extends KeyExpirationEventMessageListener {\n\n\n        @Override\n        public void onMessage(Message message, byte[] pattern) {\n            // 过期key\n            String expiredKey = message.toString();\n\n            PubType pubType = PubType.getPubType(expiredKey);\n\n            log.warn("key:{} 过期了！！！ 类型:{},数据标识:{}",expiredKey,PubType.getUnique(expiredKey),PubType.getPubType(expiredKey));\n            // 下面可以通过redis工具获取值或者执行业务逻辑\n\n            if(null == pubType){\n                return;\n            }\n\n            Map<String, IRedisMessage> redisMessageBeanMap = SpringUtils.getBeansOfType(IRedisMessage.class);\n\n            for (Map.Entry<String, IRedisMessage> entry : redisMessageBeanMap.entrySet()) {\n                RedisMessage annotation = entry.getValue().getClass().getAnnotation(RedisMessage.class);\n                if(null == annotation ){\n                    continue;\n                }\n\n                if( !annotation.value().equals(pubType)){\n                    continue;\n                }\n\n                entry.getValue().exec(expiredKey);\n            }\n        }\n\n        public RedisKeyExpirationListener(RedisMessageListenerContainer redisMessageListenerContainer ){\n            super(redisMessageListenerContainer);\n        }\n    }\n\n}\n\n')])])]),n("h2",{attrs:{id:"模拟发布消息"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#模拟发布消息"}},[e._v("#")]),e._v(" 模拟发布消息")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('    @PostMapping("/pub")\n    public void pub(@RequestParam("key")String key) {\n        PubType.PLAN.pub(key,10);\n    }\n\n')])])]),n("h2",{attrs:{id:"结果打印日志"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#结果打印日志"}},[e._v("#")]),e._v(" 结果打印日志")]),e._v(" "),n("p",[n("strong",[e._v("push后10秒触发过期通知")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("18:08:36.175 [http-nio-8080-exec-1] INFO  c.y.f.f.PageRequestFilter - [doFilterInternal,21]   - 当前请求方式:[POST]>>路径:/app/test/pub\n18:08:46.660 [container-2] WARN  c.y.c.c.r.c.RedisPushSubConfig - [onMessage,41]   - key:pub:plan:111111 过期了！！！ 类型:111111,数据标识:PLAN\n18:08:46.670 [container-2] INFO  c.y.s.h.r.PlanRedisHandler - [exec,16]   - 类型:PLAN,唯一标识：pub:plan:111111 执行过期操作\n")])])])])}),[],!1,null,null,null);n.default=a.exports}}]);