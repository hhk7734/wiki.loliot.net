"use strict";(self.webpackChunkwiki_loliot_net=self.webpackChunkwiki_loliot_net||[]).push([[95405],{31096:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>a,frontMatter:()=>l,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"mcu/stm32/stm32-printf-usage-stm32cubeide","title":"STM32CubeIDE\uc5d0\uc11c \ub2e4\uc591\ud55c printf() \uc0ac\uc6a9\ubc95","description":"STM32CubeIDE\uc5d0\uc11c \ub2e4\uc591\ud55c printf() \uc0ac\uc6a9\ubc95","source":"@site/docs/mcu/stm32/stm32-printf-usage-stm32cubeide.mdx","sourceDirName":"mcu/stm32","slug":"/mcu/stm32/stm32-printf-usage-stm32cubeide","permalink":"/docs/mcu/stm32/stm32-printf-usage-stm32cubeide","draft":false,"unlisted":false,"editUrl":"https://github.com/hhk7734/wiki/tree/main/docs/mcu/stm32/stm32-printf-usage-stm32cubeide.mdx","tags":[],"version":"current","lastUpdatedAt":1733674338000,"frontMatter":{"id":"stm32-printf-usage-stm32cubeide","title":"STM32CubeIDE\uc5d0\uc11c \ub2e4\uc591\ud55c printf() \uc0ac\uc6a9\ubc95","sidebar_label":"\ub2e4\uc591\ud55c printf() \uc0ac\uc6a9\ubc95","description":"STM32CubeIDE\uc5d0\uc11c \ub2e4\uc591\ud55c printf() \uc0ac\uc6a9\ubc95","keywords":["STM32","STM32CubeMX","STM32CubeIDE","printf"]},"sidebar":"stm32","previous":{"title":"\uc2e4\ud589\ud30c\uc77c \uc5c5\ub85c\ub4dc","permalink":"/docs/mcu/stm32/stm32-upload-executable-file-stm32cubeide"},"next":{"title":"SPI","permalink":"/docs/mcu/stm32/stm32-spi"}}');var r=i(74848),s=i(28453);const l={id:"stm32-printf-usage-stm32cubeide",title:"STM32CubeIDE\uc5d0\uc11c \ub2e4\uc591\ud55c printf() \uc0ac\uc6a9\ubc95",sidebar_label:"\ub2e4\uc591\ud55c printf() \uc0ac\uc6a9\ubc95",description:"STM32CubeIDE\uc5d0\uc11c \ub2e4\uc591\ud55c printf() \uc0ac\uc6a9\ubc95",keywords:["STM32","STM32CubeMX","STM32CubeIDE","printf"]},c=void 0,o={},d=[{value:"SWV printf()",id:"swv-printf",level:2},{value:"UART printf()",id:"uart-printf",level:2},{value:"Dynamic printf()",id:"dynamic-printf",level:2}];function u(e){const n={admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"STM32CubeIDE\uc5d0\uc11c printf()\uc744 \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95\uc774 \uc5ec\ub7ec\uac00\uc9c0\uac00 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"SWV"})}),"\n",(0,r.jsx)(n.li,{children:"UART"}),"\n",(0,r.jsx)(n.li,{children:"Dynamic Printf"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\uae30\ubcf8\uc801\uc73c\ub85c tiny_printf.c\ub97c \uc0ac\uc6a9\ud558\uae30 \ub54c\ubb38\uc5d0 ",(0,r.jsx)(n.code,{children:"char(%c)"}),", ",(0,r.jsx)(n.code,{children:"char*(%s)"}),", ",(0,r.jsx)(n.code,{children:"int(%d, %i)"}),", ",(0,r.jsx)(n.code,{children:"uint(%u)"}),", ",(0,r.jsx)(n.code,{children:"uint2hex(%x, %X)"}),"\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"float(%f)"}),"\ub97c \uc0ac\uc6a9\ud558\uace0\uc2f6\uc740 \uacbd\uc6b0 \ub450 \uac00\uc9c0 \ubc29\ubc95\uc774 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Project -> Properties -> C/C++ Build -> Settings","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Tool Settings -> MCU Settings -> Runtime library: Standard C"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Project -> Properties -> C/C++ Build -> Settings","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Tool Settings -> MCU Settings -> Runtime library: Reduced C"}),"\n",(0,r.jsx)(n.li,{children:"Check Use float with printf from newlib-nano"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"Reduced C\uc5d0\uc11c float\uc744 \ud65c\uc131\ud654 \ud558\ub294 \ub450\ubc88\uc9f8 \ubc29\ubc95\uc744 \ucd94\ucc9c\ud569\ub2c8\ub2e4."})}),"\n",(0,r.jsx)(n.h2,{id:"swv-printf",children:"SWV printf()"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)("strong",{children:"SWV(Serial Wire Viewer)"}),", Atollic\uc0ac\ub294 \uc544\ub798\uc640 \uac19\uc774 \uc124\uba85\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Serial Wire Viewer is a real-time trace technology that uses the Serial Wire Debugger(SWD) port and the Serial Wire Output (SWO) pin. Serial Wire Viewer provides advanced system analysis and real-time tracing without the need to halt the processor to extract the debug information."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["MCU \uc124\uc815 \uc2dc Pinout & Configuration -> System Core -> SYS -> Debug \uac00 ",(0,r.jsx)(n.strong,{children:"JTAG \ub610\ub294 Trace Asynchronous Sw"}),"\ub85c \uc124\uc815\ub418\uc5b4 \uc788\uc5b4\uc57c\ud558\uace0 SWO \ud540\uc774 \ub514\ubc84\uac70\uc640 \uc5f0\uacb0\ub418\uc5b4 \uc788\uc5b4\uc57c \ud569\ub2c8\ub2e4."]}),"\n",(0,r.jsx)(n.p,{children:"SWV\ub97c \uc0ac\uc6a9\ud558\uae30 \uc704\ud574 ITM(Instrumentation Trace Macrocell)\uc744 \uc0ac\uc6a9\ud574\uc11c \ucd9c\ub825\ud558\uace0 \uc2f6\uc740 \ub0b4\uc6a9\uc744 SWO\ub97c \ud1b5\ud574 \ucd9c\ub825\ud569\ub2c8\ub2e4."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Run -> Debug Configurations -> STM32 Cortex-M C/C++ Application -> <proejct> Debug"}),"\n",(0,r.jsxs)(n.li,{children:["Debugger","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"GDB Server Command Line Options: SWD"}),"\n",(0,r.jsx)(n.li,{children:"Serial Wire Viewer (SWV): Enable"}),"\n",(0,r.jsx)(n.li,{children:"Core Clock: SystemCoreClock"}),"\n",(0,r.jsx)(n.li,{children:"SWO Colck"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\ucef4\ud30c\uc77c\ub420 \uc18c\uc2a4 \uc911\uc5d0 \uc544\ubb34 \uc704\uce58\uc5d0\ub098 \uc544\ub798 \ucf54\ub4dc\ub97c \ucd94\uac00\ud558\uba74 \ub429\ub2c8\ub2e4. RTOS\ub97c \uc0ac\uc6a9\ud558\ub294 \uacbd\uc6b0 heap \uc124\uc815\uc744 \ud558\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:'#ifdef __cplusplus\nextern "C" int _write(int32_t file, uint8_t *ptr, int32_t len) {\n#else\nint _write(int32_t file, uint8_t *ptr, int32_t len) {\n#endif\n    for(int32_t i = 0; i < len; ++i) { ITM_SendChar(*ptr++); }\n    return len;\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\ub514\ubc84\uadf8 \uc2dc\uc791 \ud6c4, Perspective\uac00 Debug\ub85c \ubcc0\uacbd\ub418\uba74 ",(0,r.jsx)(n.strong,{children:"Debug -> Window -> Show View -> SWV -> SWV ITM Data Console"}),"\ub97c \ub20c\ub7ec \ubdf0\ub97c \ucd94\uac00\ud574 \uc90d\ub2c8\ub2e4."]}),"\n",(0,r.jsx)(n.p,{children:"\uae30\ubcf8\uc801\uc778 ITM \ud3ec\ud2b8\ub294 0 \ubc88\uc785\ub2c8\ub2e4. SWV ITM Data Console \ucc3d\uc5d0\uc11c port 0 \uc744 \ucd94\uac00\ud558\uace0 \uc124\uc815\uc5d0\uc11c ITM Stimulus Ports\uc5d0 0 \ubc88\uc744 \uccb4\ud06c\ud569\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.p,{children:"SWV ITM Data Console \ucc3d\uc5d0\uc11c Start Trace\ubc84\ud2bc\uc744 \ub204\ub974\uace0 \ub514\ubc84\uae45\uc744 \ud558\uba74 console\uc5d0 printf()\uc744 \ud1b5\ud574 \ucd9c\ub825\ud55c \ub0b4\uc6a9\uc774 \ud45c\uc2dc\ub429\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.h2,{id:"uart-printf",children:"UART printf()"}),"\n",(0,r.jsx)(n.p,{children:"\ucef4\ud30c\uc77c\ub420 \uc18c\uc2a4 \uc911\uc5d0 \uc544\ubb34 \uc704\uce58\uc5d0\ub098 \uc544\ub798 \ucf54\ub4dc\ub97c \ucd94\uac00\ud558\uba74 \ub429\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:'#ifdef __cplusplus\nextern "C" int _write(int32_t file, uint8_t *ptr, int32_t len) {\n#else\nint _write(int32_t file, uint8_t *ptr, int32_t len) {\n#endif\n    if( HAL_UART_Transmit(&huart1, ptr, len, len) == HAL_OK ) return len;\n    else return 0;\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"dynamic-printf",children:"Dynamic printf()"}),"\n",(0,r.jsx)(n.p,{children:"Dynamic printf\uc740 \ud2b9\ubcc4\ud788 \ucf54\ub4dc\ub97c \uc791\uc131\ud558\uac70\ub098 \uc124\uc815\uc744 \ubc14\uafc0 \ud544\uc694 \uc5c6\uc774 \uc0ac\uc6a9\ud560 \uc218 \uc788\uace0, \ud30c\uc77c \uc790\uccb4\uc5d0 \ucf54\ub4dc\uac00 \ucd94\uac00\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.p,{children:"\ub2e8, \ucf54\ub4dc\uc758 \uc2e4\ud589 \uc18d\ub3c4\uac00 \ub290\ub824\uc9d1\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.p,{children:"\ucd9c\ub825\uc744 \uc6d0\ud558\ub294 \uc704\uce58\uc758 \uc904 \ubc88\ud638\ub97c \uc624\ub978\ucabd \ud074\ub9ad\ud569\ub2c8\ub2e4. \uadf8 \ub2e4\uc74c Add Dynamic-Printf\uc744 \uc120\ud0dd\ud569\ub2c8\ub2e4. \uadf8\ub9ac\uace0 printf() \ud56d\ubaa9\uc5d0 \uc6d0\ud558\ub294 \ub0b4\uc6a9\uc744 \uc791\uc131\ud569\ub2c8\ub2e4."}),"\n",(0,r.jsxs)(n.p,{children:["\ub514\ubc84\uae45\uc744 \uc2dc\uc791\ud558\uba74 ",(0,r.jsx)(n.strong,{children:"Debugger Console"}),"\uc5d0 \ud574\ub2f9 \ub0b4\uc6a9\uc774 \ucd9c\ub825\ub429\ub2c8\ub2e4."]})]})}function a(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>c});var t=i(96540);const r={},s=t.createContext(r);function l(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);