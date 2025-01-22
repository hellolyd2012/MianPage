# NullPotOS Project

![NullPotOSLogo](./Docs/img/logo/logo.bmp)

## Project brief introduction

NullPotOS is a UNIX like operating system, it is UEFI and X86_64 architecture.

--------------------------------

## Project status

##### Bootloader

- [X] UEFI
- [X] UEFI Memory Map
- [X] UEFI File System Protocol
- [X] UEFI Graphics Output Protocol

##### Kernel

- [X] Uefi Init
- [X] Uefi Graphics Output Protocol
- [X] Format output
- [X] Bmp output
- [X] A20
- [X] GDT
- [ ] TSS
- [ ] IDT

## Build and run NullPotOS Project

#### Get ready

- Windows 10+ (Because use Windows development environment)
- Git (Because use Git to clone the project)
- Python 3.10+ (Because use Python to build the project)
- SignTool (Because use SignTool to sign the project)
- GCC (Because use GCC to build the Kernel)
- MinGW (Because use MinGW to build the Bootloader)
- QEMU (Because use QEMU to run the project)
- GDB (Because use GDB to debug the project)

#### My build configuration

- Intel(R) Xeon(R) CPU E5-2676 v3 @ 2.40GHz   2.40 GHz(12 cores and 24 threads)
- 4 * 16GB DDR3
- 1 * 1TB SSD

- Windows 11 24H2 Pro
- Python 3.12.7
- GCC 13.2.0
- MinGW 14.2.0
- QEMU 9.1.0
- GDB 14.2

#### Start

``` Shell
git clone https://github.com/LuoYuDian/NullPotOS.git
cd NullPotOS
```

Open your Git Bash

#### Build

``` Shell
mingw32-make all
or
make all
```

If you want to clean the project, you can use the following command

``` Shell
mingw32-make Clean
or
make Clean
```

#### Run

``` Shell
mingw32-make Run
or
make Run
```

Of course, you can also boot it on a real machine.

###### Tip:

The premise is that you have a USB flash drive with a Fat32 file system and a computer with Uefi firmware

## Project License

NullPotOS is licensed under the [MIT LISENSE](LICENSE.md) -You should see the LICENSE file for more details

## Project Developer

[LuoYuDian](https://github.com/LuoYuDian) - Project Founder

[MaxSinoh](https://github.com/MaxSinoh) - Project Developer and Contributor
