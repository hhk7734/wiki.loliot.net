"use strict";(self.webpackChunkwiki_loliot_net=self.webpackChunkwiki_loliot_net||[]).push([[1598],{96728:(e,o,l)=>{l.r(o),l.d(o,{assets:()=>i,contentTitle:()=>n,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>c});var s=l(74848),a=l(28453);const r={id:"local-path-provisioner",title:"local-path-provisioner",sidebar_label:"local-path-provisioner",description:"local-path-provisioner",keywords:["local-path-provisioner"]},n=void 0,t={id:"mlops/mlops/storage/local-path-provisioner",title:"local-path-provisioner",description:"local-path-provisioner",source:"@site/docs/mlops/mlops/storage/local-path-provisioner.mdx",sourceDirName:"mlops/mlops/storage",slug:"/mlops/mlops/storage/local-path-provisioner",permalink:"/docs/mlops/mlops/storage/local-path-provisioner",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1729871992e3,frontMatter:{id:"local-path-provisioner",title:"local-path-provisioner",sidebar_label:"local-path-provisioner",description:"local-path-provisioner",keywords:["local-path-provisioner"]},sidebar:"mlops",previous:{title:"CSI",permalink:"/docs/mlops/mlops/storage/csi"},next:{title:"aws-ebs-csi-driver",permalink:"/docs/mlops/mlops/storage/aws-ebs-csi-driver"}},i={},c=[{value:"\uc124\uce58",id:"\uc124\uce58",level:2}];function p(e){const o={a:"a",code:"code",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.h2,{id:"\uc124\uce58",children:"\uc124\uce58"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:(0,s.jsx)(o.a,{href:"https://github.com/rancher/local-path-provisioner",children:"https://github.com/rancher/local-path-provisioner"})}),"\n"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-shell",children:"git clone https://github.com/rancher/local-path-provisioner.git \\\n    --branch v0.0.26\n"})}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-shell",children:"helm package ./local-path-provisioner/deploy/chart/local-path-provisioner\n"})}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-shell",children:"helm show values local-path-provisioner-0.0.26.tgz \\\n    > local-path-provisioner-0.0.26.yaml\n"})}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-yaml",metastring:'title="local-path-provisioner-values.yaml"',children:"storageClass:\n  defaultClass: false # storageclass.kubernetes.io/is-default-class=false\n\naffinity: {}\n\ntolerations: []\n"})}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-shell",children:"helm template local-path-provisioner local-path-provisioner-0.0.26.tgz \\\n    -n storage \\\n    -f local-path-provisioner-values.yaml \\\n    > local-path-provisioner.yaml\n"})}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-shell",children:"helm upgrade local-path-provisioner local-path-provisioner-0.0.26.tgz \\\n    --install \\\n    --history-max 5 \\\n    -n storage \\\n    -f local-path-provisioner-values.yaml\n"})})]})}function h(e={}){const{wrapper:o}={...(0,a.R)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},28453:(e,o,l)=>{l.d(o,{R:()=>n,x:()=>t});var s=l(96540);const a={},r=s.createContext(a);function n(e){const o=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function t(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:n(e.components),s.createElement(r.Provider,{value:o},e.children)}}}]);