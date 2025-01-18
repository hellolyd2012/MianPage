# NullPotOS

![Logo](https://github.com/LuoYuDian/NullPotOS/blob/main/docs/img/logo/logo.bmp)

###### 一个免费开源的类UNIX操作系统

## 简介
NullPotOS 是一个基于UNIX设计理念的操作系统，旨在提供一个轻量级、高效且易于学习的系统环境。

--------------------------------

## 特性

###### 引导

- [X] Bootloader(UEFI)

###### 内核

- [X] GDT(全局描述符表)
- [X] printk(格式化输出)
- [X] 内存管理 (开发了一半)
- [X] BMP图像绘制

###### 驱动

- [X] FIFO(先进先出)
- [X] Deep(板载蜂鸣器)
- [X] CMOS(实时时钟)
- [X] ISA(总线)
- [X] 串口输出
- [X] UEFI Gop(图形输出)

###### 硬件抽象层

- [X] IO

## 编译与构建

### 必需工具

- Linux环境 (Windows用户请使用WSL2)
- GCC 编译器
- GNU Make
- GDB 调试器
- QEMU 模拟器
- MinGW 交叉编译器

### 推荐系统配置

- 任意Linux发行版或Windows 10/11 + WSL2
- 4GB及以上内存
- 10GB可用磁盘空间

## 快速开始

### 获取源码

``` Shell
git clone https://github.com/LuoYuDian/NullPotOS.git
cd NullPotOS
```

### 编译系统

``` Shell
make all -j $(nproc)
```

### 运行系统

``` Shell
make run
```

## 文档

["Intel® 64 and IA-32 Architectures Software Developers' Manual-volumes-1-2abcd-3abcd-4"]("docs/Intel® 64 and IA-32 Architectures Software Developers' Manual-volumes-1-2abcd-3abcd-4")

## 贡献

欢迎提交Issue和Pull Request！

## 许可证

本项目采用 [MIT LICENSE](https://github.com/LuoYuDian/NullPotOS/blob/main/LICENSE) 开源许可证。

## 开发者

[LuoYuDian](https://github.com/LuoYuDian)

[MaxSinoh](https://github.com/MaxSinoh)
