"use strict";(self.webpackChunkwiki_loliot_net=self.webpackChunkwiki_loliot_net||[]).push([[45179],{96697:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>d,contentTitle:()=>p,default:()=>o,frontMatter:()=>r,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"lang/python/env/pipenv","title":"pipenv","description":"pipenv","source":"@site/docs/lang/python/env/pipenv.mdx","sourceDirName":"lang/python/env","slug":"/lang/python/env/pipenv","permalink":"/docs/lang/python/env/pipenv","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedAt":1731596630000,"frontMatter":{"id":"pipenv","title":"pipenv","sidebar_label":"pipenv","description":"pipenv","keywords":["pipenv"]},"sidebar":"python","previous":{"title":"\ub7f0\ud0c0\uc784 \ubc84\uc804 \uad00\ub9ac","permalink":"/docs/lang/python/env/version"},"next":{"title":"poetry","permalink":"/docs/lang/python/env/poetry"}}');var s=l(74848),c=l(28453);const r={id:"pipenv",title:"pipenv",sidebar_label:"pipenv",description:"pipenv",keywords:["pipenv"]},p=void 0,d={},a=[{value:"\uc124\uce58",id:"\uc124\uce58",level:2},{value:"Virtualenv",id:"virtualenv",level:2},{value:"Package",id:"package",level:2},{value:"Sync",id:"sync",level:2},{value:"Reference",id:"reference",level:2}];function t(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\uc124\uce58",children:"\uc124\uce58"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"python3 -m pip install -U pip \\\n&& python3 -m pip install pipenv\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",metastring:'title=".zshrc"',children:'eval "$(_PIPENV_COMPLETE=zsh_source pipenv)"\n'})}),"\n",(0,s.jsx)(n.h2,{id:"virtualenv",children:"Virtualenv"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"pipenv --python <version>\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\ud574\ub2f9 \ubc84\uc804\uc73c\ub85c \uac00\uc0c1\ud658\uacbd\uc774 \uc0dd\uc131\ub429\ub2c8\ub2e4. \ud574\ub2f9 \ubc84\uc804\uc774 \uc124\uce58\ub418\uc5b4 \uc788\uc9c0\uc54a\uace0 ",(0,s.jsx)(n.code,{children:"pyenv"}),"\uac00 \uc124\uce58\ub418\uc5b4 \uc788\ub2e4\uba74, \ud574\ub2f9 \ubc84\uc804\uc744 \uc124\uce58\ud55c \ud6c4 \uac00\uc0c1\ud658\uacbd\uc744 \uc0dd\uc131\ud569\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"pipenv shell\n"})}),"\n",(0,s.jsx)(n.p,{children:"\uac00\uc0c1\ud658\uacbd\uc774 \ud65c\uc131\ud654\ub41c shell\uc5d0 \uc811\uc18d\ud569\ub2c8\ub2e4."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"pipenv --venv\n"})}),"\n",(0,s.jsx)(n.p,{children:"\uac00\uc0c1\ud658\uacbd \uc704\uce58\ub97c \ud655\uc778\ud569\ub2c8\ub2e4."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"pipenv --rm\n"})}),"\n",(0,s.jsx)(n.p,{children:"\uac00\uc0c1\ud658\uacbd\uc744 \uc0ad\uc81c\ud569\ub2c8\ub2e4."}),"\n",(0,s.jsx)(n.h2,{id:"package",children:"Package"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"pipenv install <package|git>\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--dev"}),": \uac1c\ubc1c\uc6a9 \ud328\ud0a4\uc9c0\uc778 \uacbd\uc6b0 \uc774 \uc635\uc158\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"<git>"}),": ",(0,s.jsx)(n.code,{children:"-e <vcs_type>+<scheme>://<location>/<user_or_organization>/<repository>@<branch_or_tag>#<package_name>"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-e"}),": \uacbd\ub85c\ub97c \uc218\uc815\ud560 \uc218 \uc788\ub2e4\ub294 \uc758\ubbf8\uc785\ub2c8\ub2e4."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"<vcs_type>"}),": ",(0,s.jsx)(n.code,{children:"git"}),", ",(0,s.jsx)(n.code,{children:"bzr"}),", ",(0,s.jsx)(n.code,{children:"svn"})," or ",(0,s.jsx)(n.code,{children:"hg"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"<scheme>"}),": ",(0,s.jsx)(n.code,{children:"http"}),", ",(0,s.jsx)(n.code,{children:"https"}),", ",(0,s.jsx)(n.code,{children:"ssh"})," or ",(0,s.jsx)(n.code,{children:"file"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"pipenv lock\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Pipfile.lock"})," \ud30c\uc77c\uc744 \uc0dd\uc131\ud569\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"pipenv uninstall <package>\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--all"}),": \ud328\ud0a4\uc9c0\uba85 \ub300\uc2e0 \ud574\ub2f9 \uc635\uc158\uc744 \uc4f0\uba74 \ubaa8\ub4e0 \ud328\ud0a4\uc9c0\ub97c \uc81c\uac70\ud569\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"sync",children:"Sync"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Pipfile"}),"\uc774 \uc788\ub294 \uacbd\ub85c\uc5d0\uc11c \uc544\ub798 \uba85\ub839\uc5b4\ub97c \uc2e4\ud589\ud558\uba74 Pipfile\uc5d0 \uc815\uc758\ub41c \ud328\ud0a4\uc9c0\uac00 \uc124\uce58\ub429\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"pipenv install [--dev]\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Pipfile.lock"}),"\uc774 \uc788\ub294 \uacbd\ub85c\uc5d0\uc11c \uc544\ub798 \uba85\ub839\uc5b4\ub97c \uc2e4\ud589\ud558\uba74 Pipfile.lock\uc5d0 \uc815\uc758\ub41c \ud328\ud0a4\uc9c0\uac00 \uc124\uce58\ub429\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"pipenv sync [--dev]\n"})}),"\n",(0,s.jsx)(n.h2,{id:"reference",children:"Reference"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/pypa/pipenv",children:"https://github.com/pypa/pipenv"})}),"\n"]})]})}function o(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(t,{...e})}):t(e)}},28453:(e,n,l)=>{l.d(n,{R:()=>r,x:()=>p});var i=l(96540);const s={},c=i.createContext(s);function r(e){const n=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function p(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);