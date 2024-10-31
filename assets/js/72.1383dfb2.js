(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{470:function(e,n,t){"use strict";t.r(n);var a=t(14),s=Object(a.a)({},(function(){var e=this,n=e._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"mybatis使用自定义枚举"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mybatis使用自定义枚举"}},[e._v("#")]),e._v(" MyBatis使用自定义枚举")]),e._v(" "),n("h2",{attrs:{id:"背景"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[e._v("#")]),e._v(" 背景")]),e._v(" "),n("p",[e._v("通常我们会使用类似 1==男,2==女的数据类型在mysql中进行存储。\n但是这种数据类型不不易于维护的，在类型过多的情况下经常会忘记int值的含义。所以大多情况下会使用枚举类，示例如下：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('\n@AllArgsConstructor\n@Getter\npublic enum SexType  {\n    /***/\n    BOY(1,"男"),\n    GIRL(2,"女");\n\n    private final Integer code;\n\n    private final String val;\n\n}\n\n')])])]),n("h2",{attrs:{id:"实现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#实现"}},[e._v("#")]),e._v(" 实现")]),e._v(" "),n("p",[e._v("mybatis 默认的类型转换类为 BaseTypeHandler\n"),n("img",{attrs:{src:"http://blog.yunmell.vip/zb_users/upload/2022/05/202205051156499314239.png",alt:""}})]),e._v(" "),n("p",[e._v("通过观察BaseTypeHandler 子类，我们发现了EnumTypeHandler\n"),n("img",{attrs:{src:"http://blog.yunmell.vip/zb_users/upload/2022/05/202205051157595374827.png",alt:""}}),e._v("\n再观察实现，发现他使用的是 parameter.name() 和Enum.valueOf() 看这里到能清楚的知道默认使用的是Enum.name()值,对应我们的枚举SexType也就是BOY/GIRL，显然不符合我们需要存储Enum.code值的需求。 所有我们需要自定义一个枚举转换器")]),e._v(" "),n("h3",{attrs:{id:"_1-首先定义一个公共接口-basebizenum"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-首先定义一个公共接口-basebizenum"}},[e._v("#")]),e._v(" 1. 首先定义一个公共接口 BaseBizEnum")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("public interface BaseBizEnum {\n\n    /**\n     * 得到枚举code，对应数据库int值\n     * @return int\n     */\n    Integer getCode();\n    /**\n     * 得到枚举值 ,对应前端显示值\n     * @return str\n     */\n    String getVal();\n\n}\n\n")])])]),n("h3",{attrs:{id:"_2-改造下之前的枚举类"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-改造下之前的枚举类"}},[e._v("#")]),e._v(" 2. 改造下之前的枚举类")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('@AllArgsConstructor\n@Getter\npublic enum SexType implements BaseBizEnum {\n    /***/\n    BOY(1,"男"),\n    GIRL(2,"女");\n\n\n    private final Integer code;\n\n\n    private final String val;\n\n}\n')])])]),n("h3",{attrs:{id:"_3-自定义枚举处理器基类"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-自定义枚举处理器基类"}},[e._v("#")]),e._v(" 3.自定义枚举处理器基类")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('@Slf4j\npublic class BizEnumTypeHandler<E extends BaseBizEnum>  extends BaseTypeHandler<BaseBizEnum> {\n\n    private Class<E> type;\n\n    //初始化时定义枚举和code的映射关系\n    private final Map<Integer,E> enumsMap = new HashMap<>();\n\n    public BizEnumTypeHandler() {\n\n    }\n\n    public BizEnumTypeHandler(Class<E> type) {\n        if (type == null) {\n            throw new IllegalArgumentException("Type argument cannot be null");\n        }\n        this.type = type;\n        for (E enumConstant : type.getEnumConstants()) {\n            enumsMap.put(enumConstant.getCode(),enumConstant);\n        }\n        if (this.enumsMap.size() == 0) {\n            throw new IllegalArgumentException(type.getSimpleName() + " does not represent an enum type.");\n        }\n    }\n\n    @Override\n    public void setNonNullParameter(PreparedStatement preparedStatement, int i, BaseBizEnum baseBizEnum, JdbcType jdbcType) throws SQLException {\n        preparedStatement.setInt(i,baseBizEnum.getCode());\n    }\n\n    @Override\n    public BaseBizEnum getNullableResult(ResultSet resultSet, String columnName) throws SQLException {\n        if (resultSet.wasNull()) {\n            return null;\n        }\n        int code = resultSet.getInt(columnName);\n        return getEnum(code);\n    }\n\n    @Override\n    public BaseBizEnum getNullableResult(ResultSet resultSet, int columnIndex) throws SQLException {\n\n        if (resultSet.wasNull()) {\n            return null;\n        }\n        int code = resultSet.getInt(columnIndex);\n        return getEnum(code);\n    }\n\n    @Override\n    public BaseBizEnum getNullableResult(CallableStatement callableStatement, int columnIndex) throws SQLException {\n\n        if (callableStatement.wasNull()) {\n            return null;\n        }\n        int code = callableStatement.getInt(columnIndex);\n        return getEnum(code);\n    }\n\n\n    private E getEnum(Integer code) {\n        try {\n            return getEnumByValue(code);\n        } catch (Exception ex) {\n            throw new IllegalArgumentException(\n                    "Cannot convert " + code + " to " + type.getSimpleName() + " by ordinal value.", ex);\n        }\n    }\n\n    protected E getEnumByValue(Integer code) {\n        return enumsMap.get(code);\n    }\n\n}\n')])])]),n("p",[e._v("到了这一步，相信懂行的同学都已经明白啥意思了。很简单就是在构造器里简历 code-enum 的对应关系，存储时直接存储枚举的code值，取出时通过code值得到枚举值。那么问题来了，构造器啥时候调用呢。继续往下看。。。")]),e._v(" "),n("h3",{attrs:{id:"_4-指定枚举处理器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-指定枚举处理器"}},[e._v("#")]),e._v(" 4.指定枚举处理器")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("@MappedTypes(value = {SexType.class})\n@MappedJdbcTypes(value = {JdbcType.INTEGER,JdbcType.TINYINT,JdbcType.SMALLINT})\npublic class SexTypeEnumTypeHandler extends BizEnumTypeHandler<SexType> {\n\n    /**\n     * 实例化时使用父类构造器\n     */\n    public SexTypeEnumTypeHandler() {\n        super(SexType.class);\n    }\n\n}\n")])])]),n("h3",{attrs:{id:"_5-加入配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-加入配置"}},[e._v("#")]),e._v(" 5.加入配置")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("mybatis:\n  type-handlers-package: com.xxx\n")])])]),n("p",[e._v("到这里一切就结束了。此时如果有对象属性SexType==SexType.BOY 数据库将会存储1，SexType.GIRL 同理存储2。\n获取时1,2将自动转换为SexType.BOY，SexType.GIRL。下面附上测试类有兴趣的同学可自行测试")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('@RestController\n@RequestMapping(value = "/sex")\npublic class SexController {\n    @Resource\n    private TestSexMapper testSexMapper;\n\n    @GetMapping(value = "insertTest")\n    public Object insertTest(String name, SexType sexType) {\n        MdcUtil.put("开始");\n        System.out.println("name="+name+",agreementType="+sexType.name());\n        return testSexMapper.insert(name,sexType);\n    }\n    @GetMapping(value = "getTest")\n    public Object getTest( ) {\n        MdcUtil.put("开始");\n        return testSexMapper.selectByName();\n    }\n}\n\n')])])]),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('public interface TestSexMapper {\n\n    @Insert("insert into test_agreement_info(name,agreement_type) value(#{name},#{sexType})")\n    boolean insert(@Param("name") String name, @Param("agreementType") SexType sexType);\n\n    @Select("select  *  from test_agreement_info")\n    List<TestSexModel> selectByName();\n\n}\n\n')])])]),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("@Data\npublic class TestSexModel implements Serializable {\n\n    private static final long serialVersionUID = 3285353798809906968L;\n\n    private String name;\n\n    private SexType sexType;\n\n}\n\n")])])])])}),[],!1,null,null,null);n.default=s.exports}}]);