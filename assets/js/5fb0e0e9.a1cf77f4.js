"use strict";(self.webpackChunkwiki_loliot_net=self.webpackChunkwiki_loliot_net||[]).push([[18041],{35536:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>x,frontMatter:()=>t,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"lang/shellscript/command-line-tools/xargs","title":"xargs \uc0ac\uc6a9\ubc95","description":"xargs \uc0ac\uc6a9\ubc95","source":"@site/docs/lang/shellscript/command-line-tools/xargs.mdx","sourceDirName":"lang/shellscript/command-line-tools","slug":"/lang/shellscript/command-line-tools/xargs","permalink":"/docs/lang/shellscript/command-line-tools/xargs","draft":false,"unlisted":false,"editUrl":"https://github.com/hhk7734/wiki/tree/main/docs/lang/shellscript/command-line-tools/xargs.mdx","tags":[],"version":"current","lastUpdatedAt":1735752184000,"frontMatter":{"id":"xargs","title":"xargs \uc0ac\uc6a9\ubc95","sidebar_label":"xargs \uc0ac\uc6a9\ubc95","description":"xargs \uc0ac\uc6a9\ubc95","keywords":["shell script","xargs","findutils","stdin"]},"sidebar":"shellscript","previous":{"title":"Redirection\uacfc Piping","permalink":"/docs/lang/shellscript/redirection-piping"},"next":{"title":"jq \uc0ac\uc6a9\ubc95","permalink":"/docs/lang/shellscript/command-line-tools/jq"}}');var l=s(74848),r=s(28453);const t={id:"xargs",title:"xargs \uc0ac\uc6a9\ubc95",sidebar_label:"xargs \uc0ac\uc6a9\ubc95",description:"xargs \uc0ac\uc6a9\ubc95",keywords:["shell script","xargs","findutils","stdin"]},c=void 0,o={},d=[{value:"xargs",id:"xargs",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"xargs",children:"xargs"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"xargs"}),"\ub294 GNU Findutils \uc911 \ud558\ub098\uc785\ub2c8\ub2e4."]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"stdin"}),"\uc73c\ub85c \ub4e4\uc5b4\uc624\ub294 \ubb38\uc790\uc5f4\uc744 \ub744\uc5b4\uc4f0\uae30 \ub610\ub294 \uac1c\ud589\uc73c\ub85c \uad6c\ubd84\ud558\uc5ec \uc8fc\uc5b4\uc9c4 \uba85\ub839\uc5b4\uc758 \uc778\uc790\ub85c \uc804\ub2ec\ud558\uc5ec \uba85\ub839\uc5b4\ub97c \uc644\uc131 \uc2dc\ud0a8 \ud6c4 \uc2e4\ud589\ud569\ub2c8\ub2e4."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"<stdout> | xargs [<options>] <command>\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"<options>"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"-t|--verbose"}),": \uc2e4\ud589\ud560 \uba85\ub839\uc5b4\ub97c \ucd9c\ub825\ud569\ub2c8\ub2e4."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"-n|--max-args <num>"}),": \ud55c\ubc88\uc5d0 \uba85\ub839\uc5b4\ub85c \uc804\ub2ec\ud560 \uc778\uc790\uc758 \ucd5c\ub300 \uac1c\uc218\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"-r|--no-run-if-empty"}),": stdin\uc774 \ube44\uc5b4\uc788\uc744 \uacbd\uc6b0 \uba85\ub839\uc5b4\ub97c \uc2e4\ud589\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"-I <arg>"}),": \uc785\ub825\ubc1b\uc740 \uc778\uc790\ub85c \uce58\ud658\ub420 \uc218 \uc788\ub294 \ubb38\uc790\uc5f4\uc744 \uc9c0\uc815\ud569\ub2c8\ub2e4.","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:'echo -n a b c | xargs -d " " -I {} echo {}'})," \uba85\ub839\uc5b4\ub294 ",(0,l.jsx)(n.code,{children:"echo a"}),", ",(0,l.jsx)(n.code,{children:"echo b"}),", ",(0,l.jsx)(n.code,{children:"echo c"}),"\ub97c \uc2e4\ud589\ud569\ub2c8\ub2e4."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.admonition,{type:"warning",children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"|"}),"\ub294 stdout\ub9cc stdin\uc73c\ub85c \ubcf4\ub0b4\uae30 \ub54c\ubb38\uc5d0 stderr\ub97c \ucc98\ub9ac\ud558\ub824\uba74 ",(0,l.jsx)(n.code,{children:"2>&1"}),"\uc744 \uc0ac\uc6a9\ud574\uc57c\ud569\ub2c8\ub2e4."]}),(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/docs/lang/shellscript/redirection-piping",children:"Redirection\uacfc Piping"})}),"\n"]})]})]})}function x(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>c});var i=s(96540);const l={},r=i.createContext(l);function t(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);