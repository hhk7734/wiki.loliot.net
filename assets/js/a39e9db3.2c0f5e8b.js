"use strict";(self.webpackChunkwiki_loliot_net=self.webpackChunkwiki_loliot_net||[]).push([[50151],{48500:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>r});const i=JSON.parse('{"id":"linux/linux-kernel/module/build-external-module","title":"Build external module","description":"Build external Linux module","source":"@site/docs/linux/linux-kernel/module/build-external-module.mdx","sourceDirName":"linux/linux-kernel/module","slug":"/linux/linux-kernel/module/build-external-module","permalink":"/docs/linux/linux-kernel/module/build-external-module","draft":false,"unlisted":false,"editUrl":"https://github.com/hhk7734/wiki/tree/main/docs/linux/linux-kernel/module/build-external-module.mdx","tags":[],"version":"current","lastUpdatedAt":1733674338000,"frontMatter":{"id":"build-external-module","title":"Build external module","description":"Build external Linux module","keywords":["kernel","module","build"]},"sidebar":"linux-kernel","previous":{"title":"Linux udev","permalink":"/docs/linux/kernel/udev"},"next":{"title":"DKMS","permalink":"/docs/linux/linux-kernel/module/dkms"}}');var t=l(74848),o=l(28453);const s={id:"build-external-module",title:"Build external module",description:"Build external Linux module",keywords:["kernel","module","build"]},a=void 0,d={},r=[];function u(e){const n={a:"a",code:"code",li:"li",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.kernel.org/doc/Documentation/kbuild/modules.txt",children:"https://www.kernel.org/doc/Documentation/kbuild/modules.txt"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'#include <linux/init.h>\n#include <linux/kernel.h>\n#include <linux/module.h>\n\nstatic int __init hello_init(void) {\n    printk(KERN_INFO "hello_init\\n");\n    return 0;\n}\n\nstatic void __exit hello_exit(void) { printk(KERN_INFO "hello_exit\\n"); }\n\nmodule_init(hello_init);\nmodule_exit(hello_exit);\n\nMODULE_LICENSE("GPL");\nMODULE_AUTHOR("Hyeonki Hong <hhk7734@gmail.com>");\nMODULE_DESCRIPTION("Print init and exit");\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-makefile",children:"ifneq ($(KERNELRELEASE),)\n\nobj-m := hello.o\n\nelse\n\nKERNELDIR ?= /lib/modules/$(shell uname -r)/build\nPWD       := $(shell pwd)\n\nmodules:\n    $(MAKE) -C $(KERNELDIR) M=$(PWD) modules\n\nmodules_install:\n    $(MAKE) -C $(KERNELDIR) M=$(PWD) modules_install\n\nclean:\n    $(MAKE) -C $(KERNELDIR) M=$(PWD) clean\n\nendif\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"ls /lib/modules/$(uname -r)/kernel/drivers\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"sudo depmod\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"sudo modprobe hello\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"sudo modprobe -r hello\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"dmesg\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:'Building External Modules\n\nThis document describes how to build an out-of-tree kernel module.\n\n=== Table of Contents\n\n === 1 Introduction\n === 2 How to Build External Modules\n    --- 2.1 Command Syntax\n    --- 2.2 Options\n    --- 2.3 Targets\n    --- 2.4 Building Separate Files\n === 3. Creating a Kbuild File for an External Module\n    --- 3.1 Shared Makefile\n    --- 3.2 Separate Kbuild file and Makefile\n    --- 3.3 Binary Blobs\n    --- 3.4 Building Multiple Modules\n === 4. Include Files\n    --- 4.1 Kernel Includes\n    --- 4.2 Single Subdirectory\n    --- 4.3 Several Subdirectories\n === 5. Module Installation\n    --- 5.1 INSTALL_MOD_PATH\n    --- 5.2 INSTALL_MOD_DIR\n === 6. Module Versioning\n    --- 6.1 Symbols From the Kernel (vmlinux + modules)\n    --- 6.2 Symbols and External Modules\n    --- 6.3 Symbols From Another External Module\n === 7. Tips & Tricks\n    --- 7.1 Testing for CONFIG_FOO_BAR\n\n\n\n=== 1. Introduction\n\n"kbuild" is the build system used by the Linux kernel. Modules must use\nkbuild to stay compatible with changes in the build infrastructure and\nto pick up the right flags to "gcc." Functionality for building modules\nboth in-tree and out-of-tree is provided. The method for building\neither is similar, and all modules are initially developed and built\nout-of-tree.\n\nCovered in this document is information aimed at developers interested\nin building out-of-tree (or "external") modules. The author of an\nexternal module should supply a makefile that hides most of the\ncomplexity, so one only has to type "make" to build the module. This is\neasily accomplished, and a complete example will be presented in\nsection 3.\n\n\n=== 2. How to Build External Modules\n\nTo build external modules, you must have a prebuilt kernel available\nthat contains the configuration and header files used in the build.\nAlso, the kernel must have been built with modules enabled. If you are\nusing a distribution kernel, there will be a package for the kernel you\nare running provided by your distribution.\n\nAn alternative is to use the "make" target "modules_prepare." This will\nmake sure the kernel contains the information required. The target\nexists solely as a simple way to prepare a kernel source tree for\nbuilding external modules.\n\nNOTE: "modules_prepare" will not build Module.symvers even if\nCONFIG_MODVERSIONS is set; therefore, a full kernel build needs to be\nexecuted to make module versioning work.\n\n--- 2.1 Command Syntax\n\n The command to build an external module is:\n\n  $ make -C <path_to_kernel_src> M=$PWD\n\n The kbuild system knows that an external module is being built\n due to the "M=<dir>" option given in the command.\n\n To build against the running kernel use:\n\n  $ make -C /lib/modules/`uname -r`/build M=$PWD\n\n Then to install the module(s) just built, add the target\n "modules_install" to the command:\n\n  $ make -C /lib/modules/`uname -r`/build M=$PWD modules_install\n\n--- 2.2 Options\n\n ($KDIR refers to the path of the kernel source directory.)\n\n make -C $KDIR M=$PWD\n\n -C $KDIR\n  The directory where the kernel source is located.\n  "make" will actually change to the specified directory\n  when executing and will change back when finished.\n\n M=$PWD\n  Informs kbuild that an external module is being built.\n  The value given to "M" is the absolute path of the\n  directory where the external module (kbuild file) is\n  located.\n\n--- 2.3 Targets\n\n When building an external module, only a subset of the "make"\n targets are available.\n\n make -C $KDIR M=$PWD [target]\n\n The default will build the module(s) located in the current\n directory, so a target does not need to be specified. All\n output files will also be generated in this directory. No\n attempts are made to update the kernel source, and it is a\n precondition that a successful "make" has been executed for the\n kernel.\n\n modules\n  The default target for external modules. It has the\n  same functionality as if no target was specified. See\n  description above.\n\n modules_install\n  Install the external module(s). The default location is\n  /lib/modules/<kernel_release>/extra/, but a prefix may\n  be added with INSTALL_MOD_PATH (discussed in section 5).\n\n clean\n  Remove all generated files in the module directory only.\n\n help\n  List the available targets for external modules.\n\n--- 2.4 Building Separate Files\n\n It is possible to build single files that are part of a module.\n This works equally well for the kernel, a module, and even for\n external modules.\n\n Example (The module foo.ko, consist of bar.o and baz.o):\n  make -C $KDIR M=$PWD bar.lst\n  make -C $KDIR M=$PWD baz.o\n  make -C $KDIR M=$PWD foo.ko\n  make -C $KDIR M=$PWD ./\n\n\n=== 3. Creating a Kbuild File for an External Module\n\nIn the last section we saw the command to build a module for the\nrunning kernel. The module is not actually built, however, because a\nbuild file is required. Contained in this file will be the name of\nthe module(s) being built, along with the list of requisite source\nfiles. The file may be as simple as a single line:\n\n obj-m := <module_name>.o\n\nThe kbuild system will build <module_name>.o from <module_name>.c,\nand, after linking, will result in the kernel module <module_name>.ko.\nThe above line can be put in either a "Kbuild" file or a "Makefile."\nWhen the module is built from multiple sources, an additional line is\nneeded listing the files:\n\n <module_name>-y := <src1>.o <src2>.o ...\n\nNOTE: Further documentation describing the syntax used by kbuild is\nlocated in Documentation/kbuild/makefiles.txt.\n\nThe examples below demonstrate how to create a build file for the\nmodule 8123.ko, which is built from the following files:\n\n 8123_if.c\n 8123_if.h\n 8123_pci.c\n 8123_bin.o_shipped <= Binary blob\n\n--- 3.1 Shared Makefile\n\n An external module always includes a wrapper makefile that\n supports building the module using "make" with no arguments.\n This target is not used by kbuild; it is only for convenience.\n Additional functionality, such as test targets, can be included\n but should be filtered out from kbuild due to possible name\n clashes.\n\n Example 1:\n  --\x3e filename: Makefile\n  ifneq ($(KERNELRELEASE),)\n  # kbuild part of makefile\n  obj-m  := 8123.o\n  8123-y := 8123_if.o 8123_pci.o 8123_bin.o\n\n  else\n  # normal makefile\n  KDIR ?= /lib/modules/`uname -r`/build\n\n  default:\n   $(MAKE) -C $(KDIR) M=$$PWD\n\n  # Module specific targets\n  genbin:\n   echo "X" > 8123_bin.o_shipped\n\n  endif\n\n The check for KERNELRELEASE is used to separate the two parts\n of the makefile. In the example, kbuild will only see the two\n assignments, whereas "make" will see everything except these\n two assignments. This is due to two passes made on the file:\n the first pass is by the "make" instance run on the command\n line; the second pass is by the kbuild system, which is\n initiated by the parameterized "make" in the default target.\n\n--- 3.2 Separate Kbuild File and Makefile\n\n In newer versions of the kernel, kbuild will first look for a\n file named "Kbuild," and only if that is not found, will it\n then look for a makefile. Utilizing a "Kbuild" file allows us\n to split up the makefile from example 1 into two files:\n\n Example 2:\n  --\x3e filename: Kbuild\n  obj-m  := 8123.o\n  8123-y := 8123_if.o 8123_pci.o 8123_bin.o\n\n  --\x3e filename: Makefile\n  KDIR ?= /lib/modules/`uname -r`/build\n\n  default:\n   $(MAKE) -C $(KDIR) M=$$PWD\n\n  # Module specific targets\n  genbin:\n   echo "X" > 8123_bin.o_shipped\n\n The split in example 2 is questionable due to the simplicity of\n each file; however, some external modules use makefiles\n consisting of several hundred lines, and here it really pays\n off to separate the kbuild part from the rest.\n\n The next example shows a backward compatible version.\n\n Example 3:\n  --\x3e filename: Kbuild\n  obj-m  := 8123.o\n  8123-y := 8123_if.o 8123_pci.o 8123_bin.o\n\n  --\x3e filename: Makefile\n  ifneq ($(KERNELRELEASE),)\n  # kbuild part of makefile\n  include Kbuild\n\n  else\n  # normal makefile\n  KDIR ?= /lib/modules/`uname -r`/build\n\n  default:\n   $(MAKE) -C $(KDIR) M=$$PWD\n\n  # Module specific targets\n  genbin:\n   echo "X" > 8123_bin.o_shipped\n\n  endif\n\n Here the "Kbuild" file is included from the makefile. This\n allows an older version of kbuild, which only knows of\n makefiles, to be used when the "make" and kbuild parts are\n split into separate files.\n\n--- 3.3 Binary Blobs\n\n Some external modules need to include an object file as a blob.\n kbuild has support for this, but requires the blob file to be\n named <filename>_shipped. When the kbuild rules kick in, a copy\n of <filename>_shipped is created with _shipped stripped off,\n giving us <filename>. This shortened filename can be used in\n the assignment to the module.\n\n Throughout this section, 8123_bin.o_shipped has been used to\n build the kernel module 8123.ko; it has been included as\n 8123_bin.o.\n\n  8123-y := 8123_if.o 8123_pci.o 8123_bin.o\n\n Although there is no distinction between the ordinary source\n files and the binary file, kbuild will pick up different rules\n when creating the object file for the module.\n\n--- 3.4 Building Multiple Modules\n\n kbuild supports building multiple modules with a single build\n file. For example, if you wanted to build two modules, foo.ko\n and bar.ko, the kbuild lines would be:\n\n  obj-m := foo.o bar.o\n  foo-y := <foo_srcs>\n  bar-y := <bar_srcs>\n\n It is that simple!\n\n\n=== 4. Include Files\n\nWithin the kernel, header files are kept in standard locations\naccording to the following rule:\n\n * If the header file only describes the internal interface of a\n   module, then the file is placed in the same directory as the\n   source files.\n * If the header file describes an interface used by other parts\n   of the kernel that are located in different directories, then\n   the file is placed in include/linux/.\n\n   NOTE: There are two notable exceptions to this rule: larger\n   subsystems have their own directory under include/, such as\n   include/scsi; and architecture specific headers are located\n   under arch/$(ARCH)/include/.\n\n--- 4.1 Kernel Includes\n\n To include a header file located under include/linux/, simply\n use:\n\n  #include <linux/module.h>\n\n kbuild will add options to "gcc" so the relevant directories\n are searched.\n\n--- 4.2 Single Subdirectory\n\n External modules tend to place header files in a separate\n include/ directory where their source is located, although this\n is not the usual kernel style. To inform kbuild of the\n directory, use either ccflags-y or CFLAGS_<filename>.o.\n\n Using the example from section 3, if we moved 8123_if.h to a\n subdirectory named include, the resulting kbuild file would\n look like:\n\n  --\x3e filename: Kbuild\n  obj-m := 8123.o\n\n  ccflags-y := -Iinclude\n  8123-y := 8123_if.o 8123_pci.o 8123_bin.o\n\n Note that in the assignment there is no space between -I and\n the path. This is a limitation of kbuild: there must be no\n space present.\n\n--- 4.3 Several Subdirectories\n\n kbuild can handle files that are spread over several directories.\n Consider the following example:\n\n .\n |__ src\n |   |__ complex_main.c\n |   |__ hal\n | |__ hardwareif.c\n | |__ include\n |     |__ hardwareif.h\n |__ include\n     |__ complex.h\n\n To build the module complex.ko, we then need the following\n kbuild file:\n\n  --\x3e filename: Kbuild\n  obj-m := complex.o\n  complex-y := src/complex_main.o\n  complex-y += src/hal/hardwareif.o\n\n  ccflags-y := -I$(src)/include\n  ccflags-y += -I$(src)/src/hal/include\n\n As you can see, kbuild knows how to handle object files located\n in other directories. The trick is to specify the directory\n relative to the kbuild file\'s location. That being said, this\n is NOT recommended practice.\n\n For the header files, kbuild must be explicitly told where to\n look. When kbuild executes, the current directory is always the\n root of the kernel tree (the argument to "-C") and therefore an\n absolute path is needed. $(src) provides the absolute path by\n pointing to the directory where the currently executing kbuild\n file is located.\n\n\n=== 5. Module Installation\n\nModules which are included in the kernel are installed in the\ndirectory:\n\n /lib/modules/$(KERNELRELEASE)/kernel/\n\nAnd external modules are installed in:\n\n /lib/modules/$(KERNELRELEASE)/extra/\n\n--- 5.1 INSTALL_MOD_PATH\n\n Above are the default directories but as always some level of\n customization is possible. A prefix can be added to the\n installation path using the variable INSTALL_MOD_PATH:\n\n  $ make INSTALL_MOD_PATH=/frodo modules_install\n  => Install dir: /frodo/lib/modules/$(KERNELRELEASE)/kernel/\n\n INSTALL_MOD_PATH may be set as an ordinary shell variable or,\n as shown above, can be specified on the command line when\n calling "make." This has effect when installing both in-tree\n and out-of-tree modules.\n\n--- 5.2 INSTALL_MOD_DIR\n\n External modules are by default installed to a directory under\n /lib/modules/$(KERNELRELEASE)/extra/, but you may wish to\n locate modules for a specific functionality in a separate\n directory. For this purpose, use INSTALL_MOD_DIR to specify an\n alternative name to "extra."\n\n  $ make INSTALL_MOD_DIR=gandalf -C $KDIR \\\n         M=$PWD modules_install\n  => Install dir: /lib/modules/$(KERNELRELEASE)/gandalf/\n\n\n=== 6. Module Versioning\n\nModule versioning is enabled by the CONFIG_MODVERSIONS tag, and is used\nas a simple ABI consistency check. A CRC value of the full prototype\nfor an exported symbol is created. When a module is loaded/used, the\nCRC values contained in the kernel are compared with similar values in\nthe module; if they are not equal, the kernel refuses to load the\nmodule.\n\nModule.symvers contains a list of all exported symbols from a kernel\nbuild.\n\n--- 6.1 Symbols From the Kernel (vmlinux + modules)\n\n During a kernel build, a file named Module.symvers will be\n generated. Module.symvers contains all exported symbols from\n the kernel and compiled modules. For each symbol, the\n corresponding CRC value is also stored.\n\n The syntax of the Module.symvers file is:\n  <CRC>     <Symbol>        <module>\n\n  0x2d036834  scsi_remove_host   drivers/scsi/scsi_mod\n\n For a kernel build without CONFIG_MODVERSIONS enabled, the CRC\n would read 0x00000000.\n\n Module.symvers serves two purposes:\n 1) It lists all exported symbols from vmlinux and all modules.\n 2) It lists the CRC if CONFIG_MODVERSIONS is enabled.\n\n--- 6.2 Symbols and External Modules\n\n When building an external module, the build system needs access\n to the symbols from the kernel to check if all external symbols\n are defined. This is done in the MODPOST step. modpost obtains\n the symbols by reading Module.symvers from the kernel source\n tree. If a Module.symvers file is present in the directory\n where the external module is being built, this file will be\n read too. During the MODPOST step, a new Module.symvers file\n will be written containing all exported symbols that were not\n defined in the kernel.\n\n--- 6.3 Symbols From Another External Module\n\n Sometimes, an external module uses exported symbols from\n another external module. kbuild needs to have full knowledge of\n all symbols to avoid spitting out warnings about undefined\n symbols. Three solutions exist for this situation.\n\n NOTE: The method with a top-level kbuild file is recommended\n but may be impractical in certain situations.\n\n Use a top-level kbuild file\n  If you have two modules, foo.ko and bar.ko, where\n  foo.ko needs symbols from bar.ko, you can use a\n  common top-level kbuild file so both modules are\n  compiled in the same build. Consider the following\n  directory layout:\n\n  ./foo/ <= contains foo.ko\n  ./bar/ <= contains bar.ko\n\n  The top-level kbuild file would then look like:\n\n  #./Kbuild (or ./Makefile):\n   obj-y := foo/ bar/\n\n  And executing\n\n   $ make -C $KDIR M=$PWD\n\n  will then do the expected and compile both modules with\n  full knowledge of symbols from either module.\n\n Use an extra Module.symvers file\n  When an external module is built, a Module.symvers file\n  is generated containing all exported symbols which are\n  not defined in the kernel. To get access to symbols\n  from bar.ko, copy the Module.symvers file from the\n  compilation of bar.ko to the directory where foo.ko is\n  built. During the module build, kbuild will read the\n  Module.symvers file in the directory of the external\n  module, and when the build is finished, a new\n  Module.symvers file is created containing the sum of\n  all symbols defined and not part of the kernel.\n\n Use "make" variable KBUILD_EXTRA_SYMBOLS\n  If it is impractical to copy Module.symvers from\n  another module, you can assign a space separated list\n  of files to KBUILD_EXTRA_SYMBOLS in your build file.\n  These files will be loaded by modpost during the\n  initialization of its symbol tables.\n\n\n=== 7. Tips & Tricks\n\n--- 7.1 Testing for CONFIG_FOO_BAR\n\n Modules often need to check for certain CONFIG_ options to\n decide if a specific feature is included in the module. In\n kbuild this is done by referencing the CONFIG_ variable\n directly.\n\n  #fs/ext2/Makefile\n  obj-$(CONFIG_EXT2_FS) += ext2.o\n\n  ext2-y := balloc.o bitmap.o dir.o\n  ext2-$(CONFIG_EXT2_FS_XATTR) += xattr.o\n\n External modules have traditionally used "grep" to check for\n specific CONFIG_ settings directly in .config. This usage is\n broken. As introduced before, external modules should use\n kbuild for building and can therefore use the same methods as\n in-tree modules when testing for CONFIG_ definitions.\n'})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},28453:(e,n,l)=>{l.d(n,{R:()=>s,x:()=>a});var i=l(96540);const t={},o=i.createContext(t);function s(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);