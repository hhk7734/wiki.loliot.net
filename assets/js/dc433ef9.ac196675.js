"use strict";(self.webpackChunkwiki_loliot_net=self.webpackChunkwiki_loliot_net||[]).push([[42104],{34337:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var i=t(74848),o=t(28453);const r={id:"tricore-tc27d-ports",title:"TriCore TC27D Ports(DIO)",sidebar_label:"TC27D Ports(DIO)",description:"TriCore TC27D Ports(DIO)",keywords:["Infineon","TriCore","TC275","Ports"]},c=void 0,s={id:"mcu/infineon/tricore-tc27d-ports",title:"TriCore TC27D Ports(DIO)",description:"TriCore TC27D Ports(DIO)",source:"@site/docs/mcu/infineon/tricore-tc27d-ports.mdx",sourceDirName:"mcu/infineon",slug:"/mcu/infineon/tricore-tc27d-ports",permalink:"/docs/mcu/infineon/tricore-tc27d-ports",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1729871992e3,frontMatter:{id:"tricore-tc27d-ports",title:"TriCore TC27D Ports(DIO)",sidebar_label:"TC27D Ports(DIO)",description:"TriCore TC27D Ports(DIO)",keywords:["Infineon","TriCore","TC275","Ports"]},sidebar:"infineon",previous:{title:"ShieldBuddy TC275",permalink:"/docs/mcu/infineon/tricore-shieldbuddy-tc275"},next:{title:"TC27D STM(System Timer)",permalink:"/docs/mcu/infineon/tricore-tc27d-stm"}},d={},l=[{value:"Related header",id:"related-header",level:2},{value:"IfxPort_Io.h",id:"ifxport_ioh",level:2},{value:"Examples",id:"examples",level:2},{value:"Toggling a pin",id:"toggling-a-pin",level:3}];function a(n){const e={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.p,{children:"HW: ShieldBuddy TC275"}),"\n",(0,i.jsx)(e.h2,{id:"related-header",children:"Related header"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"IfxPort_cfg.h"}),": PORT on-chip implementation data."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"IfxPort_PinMap.h"}),": PORT I/O map."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"IfxPort_Io.h"}),": PORT IO details."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"IfxPort.h"}),": PORT basic functionality."]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"ifxport_ioh",children:"IfxPort_Io.h"}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"The PORT I/O driver provides several functions to easily configure and read pins."}),"\n",(0,i.jsxs)(e.li,{children:["The configuration includes input/output, mode, pad driver strength and state. For referencing the pins and their ports a ",(0,i.jsx)(e.strong,{children:"IfxPort_PinMap"})," is available as well."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(e.h3,{id:"toggling-a-pin",children:"Toggling a pin"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-c",children:'#include "IfxCpu.h"\n#include "IfxPort_Io.h"\n#include "IfxPort_PinMap.h"\n#include "IfxScuWdt.h"\n#include "Ifx_Types.h"\n\nIfxCpu_syncEvent cpuSyncEvent = 0;\n\n// P10.2 \ud540\uc744 OUTPUT\uc73c\ub85c \uc124\uc815.\nconst IfxPort_Io_ConfigPin configPin[] = {\n    {&IfxPort_P10_2,\n     IfxPort_Mode_outputPushPullGeneral,\n     IfxPort_PadDriver_cmosAutomotiveSpeed1},\n};\n\nconst IfxPort_Io_Config conf\n    = {sizeof(configPin) / sizeof(IfxPort_Io_ConfigPin),\n       (IfxPort_Io_ConfigPin *)configPin};\n\nint core0_main(void) {\n    IfxCpu_enableInterrupts();\n    /*\n     * !!WATCHDOG0 AND SAFETY WATCHDOG ARE DISABLED HERE!!\n     * Enable the watchdog in the demo if it is required and also service the\n     * watchdog periodically\n     * */\n    IfxScuWdt_disableCpuWatchdog(IfxScuWdt_getCpuWatchdogPassword());\n    IfxScuWdt_disableSafetyWatchdog(IfxScuWdt_getSafetyWatchdogPassword());\n\n    /* Cpu sync event wait*/\n    IfxCpu_emitEvent(&cpuSyncEvent);\n    IfxCpu_waitEvent(&cpuSyncEvent, 1);\n\n    // \ud540 \uc124\uc815 \uc801\uc6a9.\n    IfxPort_Io_initModule(&conf);\n\n    while(1) {\n        // P10.2 \ud540\uc744 \ud1a0\uae00.\n        IfxPort_setPinState(&MODULE_P10, 2, IfxPort_State_toggled);\n\n        // Hard loop delay.\n        for(int i = 0; i < 50000000; i++) {}\n    }\n\n    return 1;\n}\n'})})]})}function u(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(a,{...n})}):a(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>c,x:()=>s});var i=t(96540);const o={},r=i.createContext(o);function c(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:c(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);