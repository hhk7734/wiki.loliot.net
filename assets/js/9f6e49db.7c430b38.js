"use strict";(self.webpackChunkwiki_loliot_net=self.webpackChunkwiki_loliot_net||[]).push([[21174],{43003:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>x,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var t=r(74848),o=r(28453);const i={id:"exception",title:"Exception",sidebar_label:"Exception",description:"Python Exception",keywords:["Python","exception"]},c=void 0,l={id:"lang/python/exception",title:"Exception",description:"Python Exception",source:"@site/docs/lang/python/exception.mdx",sourceDirName:"lang/python",slug:"/lang/python/exception",permalink:"/docs/lang/python/exception",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1723917838e3,frontMatter:{id:"exception",title:"Exception",sidebar_label:"Exception",description:"Python Exception",keywords:["Python","exception"]},sidebar:"python",previous:{title:"Linting & Formatting",permalink:"/docs/lang/python/env/linting-formatting"},next:{title:"Logger",permalink:"/docs/lang/python/logger/"}},s={},d=[{value:"try-except",id:"try-except",level:2},{value:"Exception hierarchy",id:"exception-hierarchy",level:2},{value:"Reference",id:"reference",level:2}];function a(e){const n={a:"a",code:"code",h2:"h2",li:"li",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"try-except",children:"try-except"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"try:\n    ...\nexcept Exception as e:\n    ...\nelse:\n    ...\nfinally:\n    ...\n"})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"\uc815\uc0c1"}),(0,t.jsx)(n.th,{style:{textAlign:"center"}}),(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"\ube44\uc815\uc0c1"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"\u2713"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"try"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"\u2713"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"center"}}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"except"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"\u2713"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"\u2713"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"else"}),(0,t.jsx)(n.td,{style:{textAlign:"center"}})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"\u2713"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"finally"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"\u2713"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"exception-hierarchy",children:"Exception hierarchy"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"BaseException # \uc0ac\uc6a9\ud558\uc9c0 \ub9d0 \uac83\n\u251c\u2500\u2500 SystemExit # sys.exit(), Exception\uc744 \uc7a1\ub294 \ucf54\ub4dc\ub97c \ud53c\ud558\uae30 \uc704\ud574 BaseException \uc0c1\uc18d\n\u251c\u2500\u2500 KeyboardInterrupt\n\u251c\u2500\u2500 GeneratorExit\n\u2514\u2500\u2500 Exception # \uc77c\ubc18\uc801\uc73c\ub85c \uc0ac\uc6a9\uc790 \uc815\uc758 \uc608\uc678\ub294 \uc774 \ud074\ub798\uc2a4\ub97c \uc0c1\uc18d\ubc1b\uc544 \uc0dd\uc131\n    \u251c\u2500\u2500 StopIteration\n    \u251c\u2500\u2500 StopAsyncIteration\n    \u251c\u2500\u2500 ArithmeticError\n    \u2502   \u251c\u2500\u2500 FloatingPointError\n    \u2502   \u251c\u2500\u2500 OverflowError\n    \u2502   \u2514\u2500\u2500 ZeroDivisionError\n    \u251c\u2500\u2500 AssertionError\n    \u251c\u2500\u2500 AttributeError\n    \u251c\u2500\u2500 BufferError\n    \u251c\u2500\u2500 EOFError\n    \u251c\u2500\u2500 ImportError\n    \u2502   \u2514\u2500\u2500 ModuleNotFoundError\n    \u251c\u2500\u2500 LookupError\n    \u2502   \u251c\u2500\u2500 IndexError\n    \u2502   \u2514\u2500\u2500 KeyError\n    \u251c\u2500\u2500 MemoryError\n    \u251c\u2500\u2500 NameError\n    \u2502   \u2514\u2500\u2500 UnboundLocalError\n    \u251c\u2500\u2500 OSError\n    \u2502   \u251c\u2500\u2500 BlockingIOError\n    \u2502   \u251c\u2500\u2500 ChildProcessError\n    \u2502   \u251c\u2500\u2500 ConnectionError\n    \u2502   \u2502   \u251c\u2500\u2500 BrokenPipeError\n    \u2502   \u2502   \u251c\u2500\u2500 ConnectionAbortedError\n    \u2502   \u2502   \u251c\u2500\u2500 ConnectionRefusedError\n    \u2502   \u2502   \u2514\u2500\u2500 ConnectionResetError\n    \u2502   \u251c\u2500\u2500 FileExistsError\n    \u2502   \u251c\u2500\u2500 FileNotFoundError\n    \u2502   \u251c\u2500\u2500 InterruptedError\n    \u2502   \u251c\u2500\u2500 IsADirectoryError\n    \u2502   \u251c\u2500\u2500 NotADirectoryError\n    \u2502   \u251c\u2500\u2500 PermissionError\n    \u2502   \u251c\u2500\u2500 ProcessLookupError\n    \u2502   \u2514\u2500\u2500 TimeoutError\n    \u251c\u2500\u2500 ReferenceError\n    \u251c\u2500\u2500 RuntimeError # \ub2e4\ub978 \ubc94\uc8fc\uc5d0 \uc18d\ud558\uc9c0 \uc54a\ub294 \uc5d0\ub7ec\uac00 \uac10\uc9c0\ub420 \ub54c\n    \u2502   \u251c\u2500\u2500 NotImplementedError\n    \u2502   \u2514\u2500\u2500 RecursionError\n    \u251c\u2500\u2500 SyntaxError\n    \u2502   \u2514\u2500\u2500 IndentationError\n    \u2502        \u2514\u2500\u2500 TabError\n    \u251c\u2500\u2500 SystemError\n    \u251c\u2500\u2500 TypeError\n    \u251c\u2500\u2500 ValueError # \uc5f0\uc0b0\uc774\ub098 \ud568\uc218\uac00 \uc62c\ubc14\ub978 \ud615\uc774\uc9c0\ub9cc \ubd80\uc801\uc808\ud55c \uac12\n    \u2502   \u2514\u2500\u2500 UnicodeError\n    \u2502        \u251c\u2500\u2500 UnicodeDecodeError\n    \u2502        \u251c\u2500\u2500 UnicodeEncodeError\n    \u2502        \u2514\u2500\u2500 UnicodeTranslateError\n    \u2514\u2500\u2500 Warning\n        \u251c\u2500\u2500 DeprecationWarning\n        \u251c\u2500\u2500 PendingDeprecationWarning\n        \u251c\u2500\u2500 RuntimeWarning\n        \u251c\u2500\u2500 SyntaxWarning\n        \u251c\u2500\u2500 UserWarning\n        \u251c\u2500\u2500 FutureWarning\n        \u251c\u2500\u2500 ImportWarning\n        \u251c\u2500\u2500 UnicodeWarning\n        \u251c\u2500\u2500 BytesWarning\n        \u251c\u2500\u2500 EncodingWarning\n        \u2514\u2500\u2500 ResourceWarning\n"})}),"\n",(0,t.jsx)(n.h2,{id:"reference",children:"Reference"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://docs.python.org/3.10/library/exceptions.html",children:"https://docs.python.org/3.10/library/exceptions.html"})}),"\n"]})]})}function x(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>l});var t=r(96540);const o={},i=t.createContext(o);function c(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);