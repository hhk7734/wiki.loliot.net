"use strict";(self.webpackChunkwiki_loliot_net=self.webpackChunkwiki_loliot_net||[]).push([[64353],{79748:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>t,toc:()=>m});const t=JSON.parse('{"id":"mcu/sam/sam-sam4s2a-time","title":"SAM4S2A Time","description":"SAM4S2A Time","source":"@site/docs/mcu/sam/sam-sam4s2a-time.mdx","sourceDirName":"mcu/sam","slug":"/mcu/sam/sam-sam4s2a-time","permalink":"/docs/mcu/sam/sam-sam4s2a-time","draft":false,"unlisted":false,"editUrl":"https://github.com/hhk7734/wiki/tree/main/docs/mcu/sam/sam-sam4s2a-time.mdx","tags":[],"version":"current","lastUpdatedAt":1732196727000,"frontMatter":{"id":"sam-sam4s2a-time","title":"SAM4S2A Time","sidebar_label":"Time","description":"SAM4S2A Time","keywords":["SAM","time","micros","millis"]},"sidebar":"sam","previous":{"title":"stdio","permalink":"/docs/mcu/sam/sam-sam4s2a-stdio"},"next":{"title":"ioport","permalink":"/docs/mcu/sam/sam-sam4s2a-ioport"}}');var s=n(74848),a=n(28453);const o={id:"sam-sam4s2a-time",title:"SAM4S2A Time",sidebar_label:"Time",description:"SAM4S2A Time",keywords:["SAM","time","micros","millis"]},r=void 0,c={},m=[{value:"ASF Wizard",id:"asf-wizard",level:2},{value:"Examples",id:"examples",level:2}];function l(e){const i={admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h2,{id:"asf-wizard",children:"ASF Wizard"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Delay routines (service): Loop based delay routines. Provides microseconds, milliseconds and second delays. Common API for SAM, UC3 and XMEGA."}),"\n",(0,s.jsx)(i.li,{children:"WDT - Watchdog Timer (driver): The Watchdog Timer can be used to prevent system lock-up if the software becomes trapped in a deadlock. It features a 12-bit down counter that allows a watchdog period of up to 16 seconds (slow clock at 32.768 kHz)."}),"\n"]}),"\n",(0,s.jsx)(i.admonition,{type:"warning",children:(0,s.jsx)(i.p,{children:"SysTick\uc5d0 \uc758\ud55c \uc778\ud130\ub7fd\ud2b8\uac00 \ub108\ubb34 \ub9ce\uc774 \ubc1c\uc0dd\ud558\uba74 Delay routines\uc758 \ud568\uc218\uac00 \uc601\ud5a5\uc744 \ubc1b\uc544 \uc758\ub3c4\ud55c \uac83\ubcf4\ub2e4 \uae38\uac8c \ub51c\ub808\uc774 \ub429\ub2c8\ub2e4. SAM4S2A 120MHz\uc5d0\uc11c us\ub97c \ub9cc\ub4e4\uae30 \uc704\ud55c \uc124\uc815\uc744 \ud558\uba74 \ub51c\ub808\uc774\ub294 \uc124\uc815 \uac12\ubcf4\ub2e4 \uc57d 1.5 ~ 1.6\ubc30 \uae38\uc5b4\uc9d1\ub2c8\ub2e4."})}),"\n",(0,s.jsx)(i.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-c",children:"#include <asf.h>\n\nvolatile uint32_t us_tick      = 0;\nvolatile uint16_t count_for_ms = 0;\nvolatile uint32_t ms_tick      = 0;\n\nstatic inline uint32_t micros(void) { return us_tick; }\n\nstatic inline uint32_t millis(void) { return ms_tick; }\n\nint main(void) {\n    sysclk_init();\n    board_init();\n    /* Insert application code here, after the board has been initialized. */\n    wdt_disable(WDT);\n\n    // F_CPU / 1,000,000 -> interval\n    SysTick_Config(F_CPU / 1000000UL);\n    delay_init(F_CPU);\n\n    for(;;) {}\n}\n\nISR(SysTick_Handler) {\n    ++us_tick;\n    ++count_for_ms;\n    if(count_for_ms == 1000) {\n        count_for_ms = 0;\n        ++ms_tick;\n    }\n}\n"})})]})}function d(e={}){const{wrapper:i}={...(0,a.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,i,n)=>{n.d(i,{R:()=>o,x:()=>r});var t=n(96540);const s={},a=t.createContext(s);function o(e){const i=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(a.Provider,{value:i},e.children)}}}]);