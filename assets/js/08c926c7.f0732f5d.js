"use strict";(self.webpackChunkwiki_loliot_net=self.webpackChunkwiki_loliot_net||[]).push([[12661],{72336:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>t,frontMatter:()=>r,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"linux/linux-kernel/module/dkms","title":"DKMS","description":"Dynamic Kernel Module Support","source":"@site/docs/linux/linux-kernel/module/dkms.mdx","sourceDirName":"linux/linux-kernel/module","slug":"/linux/linux-kernel/module/dkms","permalink":"/docs/linux/linux-kernel/module/dkms","draft":false,"unlisted":false,"editUrl":"https://github.com/hhk7734/wiki/tree/main/docs/linux/linux-kernel/module/dkms.mdx","tags":[],"version":"current","lastUpdatedAt":1732196727000,"frontMatter":{"id":"dkms","title":"DKMS","description":"Dynamic Kernel Module Support","keywords":["kernel","module","build","dkms"]},"sidebar":"linux-kernel","previous":{"title":"Build external module","permalink":"/docs/linux/linux-kernel/module/build-external-module"},"next":{"title":"Basics","permalink":"/docs/linux/linux-kernel/device-tree/device-tree-basics"}}');var d=l(74848),i=l(28453);const r={id:"dkms",title:"DKMS",description:"Dynamic Kernel Module Support",keywords:["kernel","module","build","dkms"]},o=void 0,c={},a=[{value:"dkms.conf",id:"dkmsconf",level:2},{value:"DKMS \ubaa8\ub4c8 \ub9ac\uc2a4\ud2b8",id:"dkms-\ubaa8\ub4c8-\ub9ac\uc2a4\ud2b8",level:2},{value:"DKMS\uc5d0 module \ucd94\uac00",id:"dkms\uc5d0-module-\ucd94\uac00",level:2},{value:"DKMS\uc5d0\uc11c module \uc81c\uac70",id:"dkms\uc5d0\uc11c-module-\uc81c\uac70",level:2}];function u(e){const n={admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h2,{id:"dkmsconf",children:"dkms.conf"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-shell",children:"<package>\n\u251c\u2500\u2500 dkms.conf\n\u251c\u2500\u2500 Makefile\n\u2514\u2500\u2500 ...\n"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-shell",metastring:'title="dkms.conf"',children:'PACKAGE_NAME="<package>"\nPACKAGE_VERSION="<version>"\nMAKE[0]="make -j$(nproc) KVERSION=$kernelver"\nCLEAN="make clean"\nBUILT_MODULE_NAME[0]="<module>"\nDEST_MODULE_LOCATION[0]="/updates/dkms"\nAUTOINSTALL="YES"\n'})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"$kernelver"}),": ",(0,d.jsx)(n.code,{children:"dkms"})," \uba85\ub839\uc5b4 \uc0ac\uc6a9\uc2dc \ud604\uc7ac \ucee4\ub110 \ubc84\uc804 \ub610\ub294 ",(0,d.jsx)(n.code,{children:"-k <kernelVersion>"}),"\uc5d0 \uc758\ud574 \ub300\uccb4\ub418\ub294 \ubcc0\uc218\uc785\ub2c8\ub2e4"]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"dkms-\ubaa8\ub4c8-\ub9ac\uc2a4\ud2b8",children:"DKMS \ubaa8\ub4c8 \ub9ac\uc2a4\ud2b8"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-shell",children:"dkms status\n"})}),"\n",(0,d.jsx)(n.h2,{id:"dkms\uc5d0-module-\ucd94\uac00",children:"DKMS\uc5d0 module \ucd94\uac00"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-shell",children:"sudo dkms add -m <package> -v <version>\n"})}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"/var/lib/dkms/<package>/<version>/source"})," -> ",(0,d.jsx)(n.code,{children:"/usr/src/<package>-<version>"})," \uc778 \uc2ec\ubcfc\ub9ad \ub9c1\ud06c\uac00 \uc0dd\uc131\ub429\ub2c8\ub2e4."]}),"\n",(0,d.jsx)(n.admonition,{type:"info",children:(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"sudo dkms add <path/package>"})," \uba85\ub839\uc5b4\ub85c \ucd94\uac00\ud558\ub294 \uacbd\uc6b0 \ud574\ub2f9 \ub514\ub809\ud1a0\ub9ac \ub0b4\uc758 \ud30c\uc77c\ub4e4\uc774 ",(0,d.jsx)(n.code,{children:"/usr/src/<package>-<version>"}),"\ub85c \ubcf5\uc0ac\ub41c \ud6c4 \uc704\uc640 \uac19\uc774 ",(0,d.jsx)(n.code,{children:"/var/lib/dkms"}),"\uc5d0 \ucd94\uac00\ub429\ub2c8\ub2e4."]})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-shell",children:"sudo dkms build -m <package> -v <version>\n"})}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"/var/lib/dkms/<package>/<version>/<kernelVersion>/<arch>/module/<module>.ko"})," \ud30c\uc77c\uc774 \uc0dd\uc131\ub429\ub2c8\ub2e4."]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-shell",children:"sudo dkms install -m <package> -v <version>\n"})}),"\n",(0,d.jsxs)(n.p,{children:["\ube4c\ub4dc\ub41c \ubaa8\ub4c8 \ud30c\uc77c\uc744 ",(0,d.jsx)(n.code,{children:"/lib/module/<kernelVersion>/updates/dkms/"})," \uc5d0 \ubcf5\uc0ac\ud569\ub2c8\ub2e4."]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-shell",children:"modinfo <module>\n"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-shell",children:"modprobe <module>\n"})}),"\n",(0,d.jsx)(n.h2,{id:"dkms\uc5d0\uc11c-module-\uc81c\uac70",children:"DKMS\uc5d0\uc11c module \uc81c\uac70"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-shell",children:"sudo dkms remove\n"})})]})}function t(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(u,{...e})}):u(e)}},28453:(e,n,l)=>{l.d(n,{R:()=>r,x:()=>o});var s=l(96540);const d={},i=s.createContext(d);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);