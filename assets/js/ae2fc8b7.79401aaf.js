"use strict";(self.webpackChunkwiki_loliot_net=self.webpackChunkwiki_loliot_net||[]).push([[50117],{25769:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>r});const c=JSON.parse('{"id":"lang/cpp/advanced-cpp/llvm/cross-compile","title":"LLVM Cross-compile","description":"LLVM Cross-compile","source":"@site/docs/lang/cpp/advanced-cpp/llvm/cross-compile.mdx","sourceDirName":"lang/cpp/advanced-cpp/llvm","slug":"/lang/cpp/advanced-cpp/llvm/cross-compile","permalink":"/docs/lang/cpp/advanced-cpp/llvm/cross-compile","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedAt":1731596630000,"frontMatter":{"id":"cross-compile","title":"LLVM Cross-compile","sidebar_label":"Cross-compile","description":"LLVM Cross-compile","keywords":["C++","LLVM","Clang"]},"sidebar":"cpp","previous":{"title":"LLVM","permalink":"/docs/lang/cpp/advanced-cpp/llvm/"},"next":{"title":"C++ -> C or C -> C++","permalink":"/docs/lang/cpp/advanced-cpp/extern-c/"}}');var o=t(74848),s=t(28453);const l={id:"cross-compile",title:"LLVM Cross-compile",sidebar_label:"Cross-compile",description:"LLVM Cross-compile",keywords:["C++","LLVM","Clang"]},a=void 0,p={},r=[{value:"CMake",id:"cmake",level:2}];function i(e){const n={code:"code",h2:"h2",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"cmake",children:"CMake"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cmake",children:"cmake_minimum_required(VERSION 3.15)\n\nproject(example)\n\nset(CMAKE_SYSROOT /path/to/sysroot)\nset(TRIPLE aarch64-linux-gnu)\n\nset(TOOLCHAIN /opt/toolchain/clang/11)\nset(CMAKE_C_COMPILER ${TOOLCHAIN}/bin/clang)\nset(CMAKE_CXX_COMPILER ${TOOLCHAIN}/bin/clang++)\n\nset(SOURCE\n    main.cpp\n)\n\nadd_executable(example ${SOURCE})\n\ntarget_compile_options(example PRIVATE --target=${TRIPLE})\n\ntarget_link_options(example PRIVATE --target=${TRIPLE})\n"})})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(i,{...e})}):i(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>a});var c=t(96540);const o={},s=c.createContext(o);function l(e){const n=c.useContext(s);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),c.createElement(s.Provider,{value:n},e.children)}}}]);