"use strict";(self.webpackChunkwiki_loliot_net=self.webpackChunkwiki_loliot_net||[]).push([[83942],{43:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"lang/shellscript/command-line-tools/awk","title":"awk \uc0ac\uc6a9\ubc95","description":"awk \uc0ac\uc6a9\ubc95","source":"@site/docs/lang/shellscript/command-line-tools/awk.mdx","sourceDirName":"lang/shellscript/command-line-tools","slug":"/lang/shellscript/command-line-tools/awk","permalink":"/docs/lang/shellscript/command-line-tools/awk","draft":false,"unlisted":false,"editUrl":"https://github.com/hhk7734/wiki/tree/main/docs/lang/shellscript/command-line-tools/awk.mdx","tags":[],"version":"current","lastUpdatedAt":1732809096000,"frontMatter":{"id":"awk","title":"awk \uc0ac\uc6a9\ubc95","sidebar_label":"awk \uc0ac\uc6a9\ubc95","description":"awk \uc0ac\uc6a9\ubc95","keywords":["shell script","awk"]},"sidebar":"shellscript","previous":{"title":"jq \uc0ac\uc6a9\ubc95","permalink":"/docs/lang/shellscript/command-line-tools/jq"}}');var i=l(74848),c=l(28453);const t={id:"awk",title:"awk \uc0ac\uc6a9\ubc95",sidebar_label:"awk \uc0ac\uc6a9\ubc95",description:"awk \uc0ac\uc6a9\ubc95",keywords:["shell script","awk"]},r=void 0,a={},d=[{value:"awk",id:"awk",level:2},{value:"action",id:"action",level:2},{value:"\ub0b4\uc7a5 \ubcc0\uc218",id:"\ub0b4\uc7a5-\ubcc0\uc218",level:3}];function o(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"awk",children:"awk"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.gnu.org/software/gawk/manual/gawk.html",children:"https://www.gnu.org/software/gawk/manual/gawk.html"})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"awk"}),"\ub294 \uc785\ub825\uc744 \ubc1b\uc544\uc11c \ud328\ud134\uc744 \ucc3e\uc544 \uc6d0\ud558\ub294 \ud615\ud0dc\ub85c \ubcc0\ud658\ud558\uc5ec \ucd9c\ub825\ud558\ub294 \uc2a4\ud06c\ub9bd\ud2b8 \uc5b8\uc5b4\uc785\ub2c8\ub2e4."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"awk"})," \uc2a4\ud06c\ub9bd\ud2b8\ub294 \uc544\ub798\uc640 \uac19\uc740 \ubc29\uc2dd\uc73c\ub85c \uc791\uc131\ub429\ub2c8\ub2e4. \uc785\ub825\uc744 \ubc1b\uc544\uc11c \ub77c\uc778 \ubcc4\ub85c ",(0,i.jsx)(n.code,{children:"pattern"}),"\uc774 \ub9e4\uce6d\ub418\ub294\uc9c0 \ud655\uc778\ud558\uace0, \ub9e4\uce6d\ub418\uba74 ",(0,i.jsx)(n.code,{children:"action"}),"\uc744 \uc2e4\ud589\ud569\ub2c8\ub2e4."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-awk",metastring:'title="example.awk"',children:"# comment\npattern { action }\npattern { action }\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"awk [<flag>] '<script>' <input> [<input> ...]\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"awk [<flag>] -f <scriptFile> <input> [<input> ...]\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"<pattern>"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"BEGIN"}),": \uccab \ubc88\uc9f8 ",(0,i.jsx)(n.code,{children:"<input>"}),"\uc744 \uc77d\uae30 \uc804\uc5d0 \uc2e4\ud589\ub429\ub2c8\ub2e4."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"END"}),": \ubaa8\ub4e0 ",(0,i.jsx)(n.code,{children:"<input>"}),"\uc744 \uc77d\uc740 \ud6c4 \uc2e4\ud589\ub429\ub2c8\ub2e4."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"<flag>"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"-F|--field-separator <regex>"}),": \ud544\ub4dc \uad6c\ubd84\uc790\ub97c \uc815\uaddc\uc2dd\uc73c\ub85c \uc9c0\uc815\ud569\ub2c8\ub2e4. \uae30\ubcf8\uac12\uc740 \uc5f0\uc18d\ub41c \uacf5\ubc31\uc785\ub2c8\ub2e4."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"action",children:"action"}),"\n",(0,i.jsx)(n.h3,{id:"\ub0b4\uc7a5-\ubcc0\uc218",children:"\ub0b4\uc7a5 \ubcc0\uc218"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"FS"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\ud544\ub4dc \uad6c\ubd84\uc790\uc785\ub2c8\ub2e4."}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"$0"}),": \ub77c\uc778 \ud55c \uc904 \uc804\uccb4\uc785\ub2c8\ub2e4."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"$n"}),": ",(0,i.jsx)(n.code,{children:"FS"}),"\ub85c \uad6c\ubd84\ub41c n \ubc88\uc9f8 \ud544\ub4dc, \uc5c6\uc73c\uba74 \ube48 \ubb38\uc790\uc5f4\uc785\ub2c8\ub2e4."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"echo ' a  b  c  d ' | awk 'BEGIN { FS = \"[ \\t]+\" } { print $2 }'"}),"\uc758 \uacb0\uacfc\ub294 a \uc785\ub2c8\ub2e4."]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},28453:(e,n,l)=>{l.d(n,{R:()=>t,x:()=>r});var s=l(96540);const i={},c=s.createContext(i);function t(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);