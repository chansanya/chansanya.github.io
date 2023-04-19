
<h1 style="text-align: center">Yan's Blog</h1>

基于 vuepress-theme-vdoing 主题的博客




<h2 style="text-align: center" >博客美化技巧</h2>



[**参考**](https://doc.xugaoyi.com/pages/52d5c3/#markdown)


### 标记
| 属性       | 类型     | 值                            | 
|----------|--------|------------------------------|
| text     | string | 描述文字                         |
| type     | string | ` 默认:tip`  `warning` `error` |
| vertical | string | ` 默认:top`  `middle`          |

#### 示例
```text
 V1.0.0<Badge text="Latest"/>
```

###  文本高亮
```markdown
闪光吧<mark>迪迦</mark>
```

### emoji
[此处查找](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json)

### 信息容器
``` text
::: tip
这是一条提示
:::

::: warning
这是一条注意
:::

::: danger
这是一条警告
:::

::: note
这是笔记容器，在 <Badge text="v1.5.0 +" /> 版本才支持哦~
:::
```

### 布局容器
``` text
::: center
  ### 我是居中的内容
  （可用于标题、图片等的居中）
:::

::: right
  [我是右浮动的内容](https://zh.wikipedia.org/wiki/%E7%89%9B%E9%A1%BF%E8%BF%90%E5%8A%A8%E5%AE%9A%E5%BE%8B)
:::

::: details
这是一个详情块
:::

::: theorem 牛顿第一定律
假若施加于某物体的外力为零，则该物体的运动速度不变。
::: right
来自 [维基百科](https://zh.wikipedia.org/wiki/%E7%89%9B%E9%A1%BF%E8%BF%90%E5%8A%A8%E5%AE%9A%E5%BE%8B)
:::

```

### 普通卡片列表

#### 配置
```yaml
config:
  #链接的打开方式，默认：_blank
  #_self 当前页面
  #_blank 新窗口打开
    target: _blank
```

    :::  cardList <每行显示数量>
        ```
        config:
            target: _blank

        data:
        - name: 名字
          desc: 描述
          avatar: 头像
          link: 超链接
          bgColor: 背景，默认var(--bodyBg)。颜色值有#号时请添加单引号
          textColor: 文字颜色 ，默认var(--textColor)
        ```
    :::


### 图片卡片列表
#### 配置
```yaml
config:
      #链接的打开方式，默认：_blank
      #_self 当前页面
      #_blank 新窗口打开
    target: _blank
    # 图片高度，默认:auto ,支持带单位设置，例:100px
    imgHeight: auto
    #设置图片的填充方式(object-fit)，默认 cover
    #fill 拉伸 (会改变宽高比)
    #contain 缩放 (保持宽高比，会留空)
    #cover 填充 (会裁剪)
    #none 保持原有尺寸 (会留空或裁剪)
    #scale-down 保证显示完整图片 (保持宽高比，会留空)
    objectFit: cover
    #描述文本超出多少行显示省略号，默认1
    lineClamp: 
```

    :::  cardImgList  <每行显示数量>
        ```
        config:
            target: _blank
            imgHeight: auto
            objectFit: cover
            lineClamp: 1
        
        data:
        - img: https://xxx.jpg # 图片地址
          link: https://xxx.com # 链接地址
          name: 标题
          desc: 描述 # 可选
          author: 作者名称 # 可选
          avatar: https://xxx.jpg # 作者头像，可选
        ```
    :::


