"use strict";(self.webpackChunkwiki_loliot_net=self.webpackChunkwiki_loliot_net||[]).push([[32611],{27576:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>a});const l=JSON.parse('{"id":"lang/etc/command-line-tools/network/nmap","title":"nmap(Network Mapper)","description":"nmap","source":"@site/docs/lang/etc/command-line-tools/network/nmap.mdx","sourceDirName":"lang/etc/command-line-tools/network","slug":"/lang/etc/command-line-tools/network/nmap","permalink":"/docs/lang/etc/command-line-tools/network/nmap","draft":false,"unlisted":false,"editUrl":"https://github.com/hhk7734/wiki/tree/main/docs/lang/etc/command-line-tools/network/nmap.mdx","tags":[],"version":"current","lastUpdatedAt":1735752184000,"frontMatter":{"id":"nmap","title":"nmap(Network Mapper)","sidebar_label":"nmap","description":"nmap","keywords":["Linux","nmap"]},"sidebar":"programmingetc","previous":{"title":"iptables \uc0ac\uc6a9\ubc95","permalink":"/docs/lang/etc/command-line-tools/network/iptables"},"next":{"title":"user/group \uad00\ub9ac","permalink":"/docs/lang/etc/command-line-tools/user-management"}}');var i=s(74848),t=s(28453);const o={id:"nmap",title:"nmap(Network Mapper)",sidebar_label:"nmap",description:"nmap",keywords:["Linux","nmap"]},c=void 0,r={},a=[{value:"TARGET SPECIFICATION",id:"target-specification",level:2},{value:"HOST DISCOVERY",id:"host-discovery",level:2},{value:"Examples",id:"examples",level:3},{value:"SCAN TECHNIQUES",id:"scan-techniques",level:2},{value:"Examples",id:"examples-1",level:3},{value:"OUTPUT",id:"output",level:2},{value:"MISC",id:"misc",level:2},{value:"Examples",id:"examples-2",level:3}];function d(e){const n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"Nmap 7.80 ( https://nmap.org )\nUsage: nmap [Scan Type(s)] [Options] {TARGET SPECIFICATION}\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"\uc635\uc158\uc5d0 \ub530\ub77c root \uad8c\ud55c\uc73c\ub85c \uc2e4\ud589\ud558\ub294 \uacbd\uc6b0 \ub354 \ub9ce\uc740 \uc815\ubcf4\ub97c \ud45c\uc2dc\ud558\ub294 \uacbd\uc6b0\uac00 \uc788\uc2b5\ub2c8\ub2e4."})}),"\n",(0,i.jsx)(n.h2,{id:"target-specification",children:"TARGET SPECIFICATION"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"hostnames"}),"\n",(0,i.jsx)(n.li,{children:"IP"}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"--exclude <host1[,host2][,host3],...>"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"host-discovery",children:"HOST DISCOVERY"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"-sn"}),": ping\uc744 \uc0ac\uc6a9\ud574 scan\ud569\ub2c8\ub2e4. port scan\uc774 disable \ub429\ub2c8\ub2e4."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"-Pn"}),": \ubaa8\ub4e0 host\ub97c online\uc73c\ub85c \ucc98\ub9ac\ud569\ub2c8\ub2e4. (skip host discovery)"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"sudo nmap -sn 192.168.0.0/24\n"})}),"\n",(0,i.jsxs)(n.p,{children:["ping\uc744 \uc0ac\uc6a9\ud558\uc5ec ",(0,i.jsx)(n.code,{children:"192.168.0.0/24"})," \ub124\ud2b8\uc6cc\ud06c \uc2a4\uce94"]}),"\n",(0,i.jsx)(n.h2,{id:"scan-techniques",children:"SCAN TECHNIQUES"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"-sS/sT/sA/sW/sM"}),": TCP SYN/Connect()/ACK/Window/Maimon scans"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"-sU"}),": UDP Scan"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"examples-1",children:"Examples"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"sudo nmap -sT 192.168.0.0/24\n"})}),"\n",(0,i.jsxs)(n.p,{children:["TCP \ud1b5\uc2e0\uc744 \uc0ac\uc6a9\ud558\uc5ec ",(0,i.jsx)(n.code,{children:"192.168.0.0/24"})," \ub124\ud2b8\uc6cc\ud06c \uc2a4\uce94, \uc5b4\ub5a4 TCP \ud3ec\ud2b8\uac00 \uc5f4\ub824\uc788\ub294\uc9c0 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,i.jsx)(n.h2,{id:"output",children:"OUTPUT"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"-v"}),": Increase verbosity level (use -vv or more for greater effect)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"-d"}),": Increase debugging level (use -dd or more for greater effect)"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"misc",children:"MISC"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"-A"}),": OS detection, version detection, script scanning, and traceroute \uc744 \ud65c\uc131\ud654\ud569\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"examples-2",children:"Examples"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"sudo nmap -A 192.168.0.11\n"})}),"\n",(0,i.jsx)(n.p,{children:"\uc5f4\ub824\uc788\ub294 \ud3ec\ud2b8 \uc815\ubcf4, OS \uc815\ubcf4, hop \uc218, traceroute \ub4f1\uc774 \ud45c\uc2dc\ub429\ub2c8\ub2e4."})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>c});var l=s(96540);const i={},t=l.createContext(i);function o(e){const n=l.useContext(t);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),l.createElement(t.Provider,{value:n},e.children)}}}]);