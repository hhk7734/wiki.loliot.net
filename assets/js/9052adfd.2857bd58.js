"use strict";(self.webpackChunkwiki_loliot_net=self.webpackChunkwiki_loliot_net||[]).push([[23244],{573:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>t,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var a=r(74848),o=r(28453);const s={id:"harbor",title:"Harbor",sidebar_label:"Harbor",description:"Harbor is an open source registry",keywords:["harbor","container"]},t=void 0,l={id:"mlops/mlops/storage/harbor/harbor",title:"Harbor",description:"Harbor is an open source registry",source:"@site/docs/mlops/mlops/storage/harbor/harbor.mdx",sourceDirName:"mlops/mlops/storage/harbor",slug:"/mlops/mlops/storage/harbor/",permalink:"/docs/mlops/mlops/storage/harbor/",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1725967579e3,frontMatter:{id:"harbor",title:"Harbor",sidebar_label:"Harbor",description:"Harbor is an open source registry",keywords:["harbor","container"]},sidebar:"mlops",previous:{title:"MongoDB",permalink:"/docs/mlops/mlops/storage/mongodb"},next:{title:"\uc778\uc99d/\uc778\uac00(authn/authz)",permalink:"/docs/mlops/mlops/storage/harbor/auth"}},i={},c=[{value:"\uc124\uce58",id:"\uc124\uce58",level:2}];function d(e){const n={code:"code",h2:"h2",pre:"pre",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"\uc124\uce58",children:"\uc124\uce58"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"helm repo add harbor https://helm.goharbor.io\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"helm repo update harbor \\\n&& helm search repo harbor/harbor -l | head -n 10\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"helm pull harbor/harbor --version 1.14.0\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"helm show values harbor/harbor --version 1.14.0 > harbor-1.14.0.yaml\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",metastring:'title="harbor-values.yaml"',children:"expose:\n  type:\n  tls:\n    enabled: false\n\n# 1) \ud074\ub77c\uc774\uc5b8\ud2b8\uc5d0\uc11c \ub85c\uadf8\uc778\ud560 \ub54c \ubc18\ud658\ub418\ub294 token \uc11c\ube44\uc2a4\uc758 URL\ub85c \uc0ac\uc6a9\ub429\ub2c8\ub2e4.\n# 2) Harbor Portal \ud398\uc774\uc9c0\uc758 docker, helm \uba85\ub839\uc5b4 \ub3c4\uc6c0\ub9d0\uc5d0 \uc0ac\uc6a9\ub429\ub2c8\ub2e4.\nexternalURL: <url>\n\npersistence:\n  enabled: true\n  persistentVolumeClaim:\n    registry:\n      accessMode: ReadWriteMany\n    jobservice:\n      jobLog:\n        accessMode: ReadWriteMany\n    database:\n      accessMode: ReadWriteOnce\n    redis:\n      accessMode: ReadWriteOnce\n    trivy:\n      accessMode: ReadWriteOnce\n\nupdateStrategy:\n  # registry\uc640 jobservice PVC\uc758 accessMode\uac00 ReadWriteOnce\uc77c \uacbd\uc6b0\n  # Recreate\uc73c\ub85c \ubcc0\uacbd\ud574\uc57c\ud569\ub2c8\ub2e4.\n  type: RollingUpdate\n\nportal:\n  affinity: {}\n\n  tolerations: []\n\ncore:\n  affinity: {}\n\n  tolerations: []\n\njobservice:\n  affinity: {}\n\n  tolerations: []\n\nregistry:\n  affinity: {}\n\n  tolerations: []\n\ntrivy:\n  affinity: {}\n\n  tolerations: []\n\ndatabase:\n  internal:\n    affinity: {}\n\n    tolerations: []\n\nredis:\n  internal:\n    affinity: {}\n\n    tolerations: []\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"helm template harbor harbor-1.14.0.tgz \\\n    -n storage \\\n    -f harbor-values.yaml \\\n    > harbor.yaml\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"helm upgrade harbor harbor-1.14.0.tgz \\\n    --install \\\n    --history-max 5 \\\n    -n storage \\\n    -f harbor-values.yaml\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>t,x:()=>l});var a=r(96540);const o={},s=a.createContext(o);function t(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);