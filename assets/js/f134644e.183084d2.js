"use strict";(self.webpackChunkwiki_loliot_net=self.webpackChunkwiki_loliot_net||[]).push([[61566],{92335:(n,o,e)=>{e.r(o),e.d(o,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>c,metadata:()=>u,toc:()=>d});var t=e(74848),l=e(28453);const c={id:"uboot-custom-command",title:"u-boot custom command",sidebar_label:"Custom command",description:"u-boot custom command",keywords:["u-boot","custom command"]},i=void 0,u={id:"linux/linux-uboot/uboot-custom-command",title:"u-boot custom command",description:"u-boot custom command",source:"@site/docs/linux/linux-uboot/uboot-custom-command.mdx",sourceDirName:"linux/linux-uboot",slug:"/linux/linux-uboot/uboot-custom-command",permalink:"/docs/linux/linux-uboot/uboot-custom-command",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1729871992e3,frontMatter:{id:"uboot-custom-command",title:"u-boot custom command",sidebar_label:"Custom command",description:"u-boot custom command",keywords:["u-boot","custom command"]},sidebar:"linux-uboot",previous:{title:"Build",permalink:"/docs/linux/linux-uboot/build-uboot"},next:{title:"Configuration",permalink:"/docs/linux/linux-uboot/uboot-configuration"}},s={},d=[{value:"Example",id:"example",level:2},{value:"Reference",id:"reference",level:2}];function r(n){const o={a:"a",code:"code",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,l.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-c",metastring:'title="u-boot/cmd/hello.c"',children:'// SPDX-License-Identifier: GPL-2.0+\n/*\n * Copyright (c) 2019 Hyeonki Hong <hhk7734@gmail.com>\n */\n\n#include <common.h>\n#include <command.h>\n\nstatic int do_print_hello(cmd_tbl_t * cmdtp, int flag, int argc,\n                          char * const argv[]) {\n        printf("Hello world!\\n");\n        return 0;\n}\n\n/* -------------------------------------------------------------------- */\n\nU_BOOT_CMD(\n        hello,  1,      0,      do_print_hello,\n        "print \\"Hello world!\\"",\n        "\\n    - print \\"Hello world!\\""\n)\n\n/* vim: set ts=8 sw=8 tw=80: */\n'})}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-Kconfig",metastring:'title="u-boot/cmd/Kconfig"',children:'...\n\nmenu "Misc commands"\n\nconfig CMD_HELLO\n        bool "Enable \'hello\' command for test"\n        depends on CMDLINE\n        default n\n        help\n          print "Hello world!"\n\n...\n'})}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-makefile",metastring:'title="u-boot/cmd/Makefile"',children:"...\n\nobj-$(CONFIG_CMD_HELLO) += hello.o\n\n...\n"})}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-makefile",metastring:'title="u-boot/configs/<board>-defconfig"',children:"...\n\nCONFIG_CMD_HELLO=y\n\n...\n"})}),"\n",(0,t.jsx)(o.h2,{id:"reference",children:"Reference"}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"https://gitlab.denx.de/u-boot/u-boot/-/blob/master/doc/README.commands",children:"https://gitlab.denx.de/u-boot/u-boot/-/blob/master/doc/README.commands"})}),"\n"]})]})}function m(n={}){const{wrapper:o}={...(0,l.R)(),...n.components};return o?(0,t.jsx)(o,{...n,children:(0,t.jsx)(r,{...n})}):r(n)}},28453:(n,o,e)=>{e.d(o,{R:()=>i,x:()=>u});var t=e(96540);const l={},c=t.createContext(l);function i(n){const o=t.useContext(c);return t.useMemo((function(){return"function"==typeof n?n(o):{...o,...n}}),[o,n])}function u(n){let o;return o=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:i(n.components),t.createElement(c.Provider,{value:o},n.children)}}}]);