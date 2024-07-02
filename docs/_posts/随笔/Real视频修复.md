---
title: 视频修复
date: 2023-03-07 15:52:14
permalink: /pages/d8b281/
author: 
  name: Yan
  link: https://github.com/chansanya
sidebar: auto
categories: 
  - 随笔
tags: 
  - 
---
[RealESRGAN](https://github.com/xinntao/Real-ESRGAN/blob/master/README_CN.md)腾讯 ARC 实验室发布的一个盲图像超分辨率模型

通过模拟高分辨率图像变低分辩率过程中的各种退化，然后再通过低清图倒推出它的高清图。

支持Intel/AMD/Nvidia显卡

绿色版exe文件含: Windows/Linux/MacOS

使用起来简直是不要太简单

<!-- more -->


### 模型
- realesrgan-x4plus（默认）
- reaesrnet-x4plus
- realesrgan-x4plus-anime（针对动漫插画图像优化，有更小的体积）
- realesr-animevideov3 (针对动漫视频)


| 参数                | 描述                                                                                                                                          |
|-------------------|---------------------------------------------------------------------------------------------------------------------------------------------|
| -h                | 帮助                                                                                                                                          |
| -i input-path     | 源图片路径/目录 (jpg/png/webp)                                                                                                                     |
| -o output-path    | 输出路径/目录 (jpg/png/webp)                                                                                                                      |
| -s scale          | 放大比例 (2, 3, 4  default=4)                                                                                                                   |
| -t tile-size      | 对于多gpu, Tile大小(>=320=auto, default=0)可以是0,0,0                                                                                               |
| -m model-path     | 预训练模型的文件夹路径。 默认路径:models                                                                                                                    |
| -n model-name     | 模型名,默认: realesr-animevideov3 <br/> 可选：<br/>realesr-animevideov3 <br/> realesrgan-x4plus<br/> realesrgan-x4plus-anime<br/> realesrnet-x4plus |
| -g gpu-id         | Gpu设备使用(默认=auto)可以为0,1,2多Gpu                                                                                                                |
| -j load:proc:save | load proc save 的线程数(默认为1:2:2)对于多gpu可以是1:2,2,2:2                                                                                             |
| -x                | 开启tta模式                                                                                                                                     |
| -f format         | 输出图像格式  (jpg/png/webp, 默认=ext/png)                                                                                                          |
| -v                | 详细输出                                                                                                                                        |

### 命令

#### 快速执行
```shell
realesrgan-ncnn-vulkan.exe -i input.jpg -o output.png
```

#### 指定模型
```shell 
realesrgan-ncnn-vulkan -i input.jpg -o output.png -n realesr-animevideov3
realesrgan-ncnn-vulkan -i input.jpg -o output2.png -n realesrgan-x4plus-anime
```

#### 指定模型及图片比例
```shell 
realesrgan-ncnn-vulkan -i input_folder -o outputfolder -n realesr-animevideov3 -s 4 -f jpg
```

```shell  
realesrgan-ncnn-vulkan.exe -i demo.mp4 -o output.mp4 -n realesr-animevideov3
```


创建一个名为 `tmp_frames` 的目录

#### 拆解帧
```shell
ffmpeg -i onepiece_demo.mp4 -qscale:v 1 -qmin 1 -qmax 1 -vsync 0 tmp_frames/frame%08d.jpg
```


创建一个名为 `out_frames` 的目录
#### 修复帧
```shell
realesrgan-ncnn-vulkan.exe -i tmp_frames -o out_frames -n realesr-animevideov3 -s 2 -f jpg
```

#### 得到视频帧数
```shell
ffmpeg -i onepiece_demo.mp4
```

#### 合并音频视频
上面命令得到的帧数填充到 -r 后，以下用**23.98**举例
```shell
ffmpeg -i out_frames/frame%08d.jpg -i onepiece_demo.mp4 -map 0:v:0 -map 1:a:0 -c:a copy -c:v libx264 -r 23.98 -pix_fmt yuv420p output_w_audio.mp4
```



### 图片修复简单Bat脚本
```shell
@echo off
chcp 65001

echo 即将开始文件修复...
echo 默认修复前后格式为png
echo 执行前请保证修复文件名为input
echo 如文件是其他格式，请手动修改脚本
echo 修复完成默认文件名real
echo 以下是修复模型...
echo 1 realesr-animevideov3 ^(针对动漫视频^)
echo 2 realesrgan-x4plus^(默认^)
echo 3 realesrgan-x4plus-anime^(针对动漫插画图像优化，有更小的体积^)
echo 4 reaesrnet-x4plus


set /p model=请选择模型:

if "%model%" == "1" (
    set model_name=realesr-animevideov3
) else if "%model%" == "2" (
    set model_name=realesrgan-x4plus
) else if "%model%" == "3" (
    set model_name=realesrgan-x4plus-anime
) else if "%model%" == "4" (
    set model_name=realesrnet-x4plus
) else (
    echo 没有此模型！
    pause
    exit
)
echo 使用%model_name%模型执行修复:

::: realesrgan-ncnn-vulkan -i input.jpg -o real.png -n %model_name%

realesrgan-ncnn-vulkan -i input.png -o real.png -n %model_name%

pause


rem 以下是修复代码
rem 修复完成后请将结果保存为real.png

```
