"use strict";(self.webpackChunkwiki_loliot_net=self.webpackChunkwiki_loliot_net||[]).push([[36560],{77864:(n,e,c)=>{c.r(e),c.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"lang/cpp/libraries/cpp-exception-handling","title":"C++ Exception handling","description":"C++ Exception handling","source":"@site/docs/lang/cpp/libraries/cpp-exception-handling.mdx","sourceDirName":"lang/cpp/libraries","slug":"/lang/cpp/libraries/cpp-exception-handling","permalink":"/docs/lang/cpp/libraries/cpp-exception-handling","draft":false,"unlisted":false,"editUrl":"https://github.com/hhk7734/wiki/tree/main/docs/lang/cpp/libraries/cpp-exception-handling.mdx","tags":[],"version":"current","lastUpdatedAt":1735752184000,"frontMatter":{"id":"cpp-exception-handling","title":"C++ Exception handling","description":"C++ Exception handling","keywords":["C++","Exception"]},"sidebar":"cpp","previous":{"title":"C++ STL","permalink":"/docs/lang/cpp/libraries/cpp-stl"},"next":{"title":"Basics","permalink":"/docs/lang/cpp/libraries/opencl/opencl-basics"}}');var r=c(74848),t=c(28453);const s={id:"cpp-exception-handling",title:"C++ Exception handling",description:"C++ Exception handling",keywords:["C++","Exception"]},l=void 0,o={},a=[{value:"Exception",id:"exception",level:2},{value:"Exception specification",id:"exception-specification",level:2},{value:"Custom exception",id:"custom-exception",level:2},{value:"try, catch",id:"try-catch",level:2}];function d(n){const e={admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-cpp",children:"#include <stdexcept>\n"})}),"\n",(0,r.jsx)(e.h2,{id:"exception",children:"Exception"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"class logic_error;"})," - \ub17c\ub9ac\uc801 \uc0ac\uc804 \uc870\uac74 \uc704\ubc18\uacfc \uac19\uc774 \ud504\ub85c\uadf8\ub7a8\uc774 \uc2e4\ud589\ub418\uae30 \uc804\uc5d0 \uac80\uc0c9\ub420 \uc218 \uc788\ub294 \uc624\ub958\ub97c \ubcf4\uace0\ud558\uae30 \uc704\ud574 \ubc1c\uc0dd\ud558\ub294 \ubaa8\ub4e0 \uc608\uc678","\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"class domain_error;"})," - \ub3c4\uba54\uc778 \uc624\ub958\ub97c \ubcf4\uace0\ud558\uae30 \uc704\ud574 \ubc1c\uc0dd\ud558\ub294 \ubaa8\ub4e0 \uc608\uc678"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"class invalid_argument;"})," - \uc798\ubabb\ub41c \uc778\uc218\ub97c \ubcf4\uace0\ud558\uae30 \uc704\ud574 \ubc1c\uc0dd\ud558\ub294 \ubaa8\ub4e0 \uc608\uc678"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"class length_error;"})," - \ub108\ubb34 \uae38\uc5b4\uc11c \uc9c0\uc815\ud560 \uc218 \uc5c6\ub294 \uac1c\uccb4 \uc0dd\uc131 \uc2dc\ub3c4\ub97c \ubcf4\uace0\ud558\uae30 \uc704\ud574 \ubc1c\uc0dd\ud558\ub294 \ubaa8\ub4e0 \uc608\uc678"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"class out_of_range;"})," - \uc720\ud6a8 \ubc94\uc704\ub97c \ubc97\uc5b4\ub09c \uc778\uc218\ub97c \ubcf4\uace0\ud558\uae30 \uc704\ud574 \ubc1c\uc0dd\ud558\ub294 \ubaa8\ub4e0 \uc608\uc678"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"class runtime_error;"})," - \ud504\ub85c\uadf8\ub7a8\uc774 \uc2e4\ud589\ub418\ub294 \uacbd\uc6b0\uc5d0\ub9cc \uac80\uc0c9\ub420 \uc218 \uc788\ub294 \uc624\ub958\ub97c \ubcf4\uace0\ud558\uae30 \uc704\ud574 \ubc1c\uc0dd\ud558\ub294 \ubaa8\ub4e0 \uc608\uc678","\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"class range_error;"})," - \ubc94\uc704 \uc624\ub958\ub97c \ubcf4\uace0\ud558\uae30 \uc704\ud574 \ubc1c\uc0dd\ud558\ub294 \ubaa8\ub4e0 \uc608\uc678"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"class overflow_error;"})," - \uc0b0\uc220 \uc624\ubc84\ud50c\ub85c\ub97c \ubcf4\uace0\ud558\uae30 \uc704\ud574 \ubc1c\uc0dd\ud558\ub294 \ubaa8\ub4e0 \uc608\uc678"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"class underflow_error;"})," - \uc0b0\uc220 \uc5b8\ub354\ud50c\ub85c\ub97c \ubcf4\uace0\ud558\uae30 \uc704\ud574 \ubc1c\uc0dd\ud558\ub294 \ubaa8\ub4e0 \uc608\uc678"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-cpp",children:"class logic_error : public exception {\n    public:\n        explicit logic_error(const string& what_arg);\n        explicit logic_error(const char* what_arg);\n};\n\nclass runtime_error : public exception {\n    public:\n        explicit runtime_error(const string& what_arg);\n        explicit runtime_error(const char* what_arg);\n};\n"})}),"\n",(0,r.jsx)(e.h2,{id:"exception-specification",children:"Exception specification"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-cpp",children:"void func( void ) noexcept;\nvoid func( void ) noexcept( true );\nvoid func( void ) throw();\n"})}),"\n",(0,r.jsxs)(e.p,{children:["\uc704 \uc120\uc5b8 \ubaa8\ub450 \ud574\ub2f9 \ud568\uc218\ub294 \uc608\uc678\ub97c throw \ud558\uc9c0 \uc54a\ub294\ub2e4\ub294 \uc120\uc5b8\uc785\ub2c8\ub2e4. ",(0,r.jsx)(e.code,{children:"noexcept"}),"\ub97c \uad8c\uc7a5\ud569\ub2c8\ub2e4."]}),"\n",(0,r.jsx)(e.h2,{id:"custom-exception",children:"Custom exception"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-cpp",children:"class custom_error : public std::exception\n{\nprivate:\n    const char *m_what_arg;\n\npublic:\n    explicit custom_error( const std::string &what_arg )\n        : m_what_arg( what_arg.c_str() )\n    {\n    }\n    explicit custom_error( const char *what_arg )\n        : m_what_arg( what_arg )\n    {\n    }\n    virtual const char *what() const throw()\n    {\n        return m_what_arg;\n    }\n};\n"})}),"\n",(0,r.jsx)(e.h2,{id:"try-catch",children:"try, catch"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-cpp",children:"try\n{\n    ...\n}\ncatch( const std::exception &e )\n{\n    std::cerr << e.what() << std::endl;\n    ...\n}\n"})}),"\n",(0,r.jsx)(e.admonition,{type:"danger",children:(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"ld"}),"\ub97c \uc0ac\uc6a9\ud558\ub294 \uacbd\uc6b0 shared library\uc5d0\uc11c \ubc1c\uc0dd\ud558\ub294 \uc608\uc678\ub294 catch\ud558\uc9c0 \ubabb\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. ",(0,r.jsx)(e.code,{children:"g++"}),"\uc744 \uc0ac\uc6a9\ud558\uac70\ub098 static library\ub97c \uc0ac\uc6a9\ud558\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4."]})})]})}function p(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},28453:(n,e,c)=>{c.d(e,{R:()=>s,x:()=>l});var i=c(96540);const r={},t=i.createContext(r);function s(n){const e=i.useContext(t);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:s(n.components),i.createElement(t.Provider,{value:e},n.children)}}}]);