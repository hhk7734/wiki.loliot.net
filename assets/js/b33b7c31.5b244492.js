"use strict";(self.webpackChunkwiki_loliot_net=self.webpackChunkwiki_loliot_net||[]).push([[13731],{64538:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>a,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var o=n(74848),t=n(28453);const l={id:"dcgm-exporter",title:"dcgm-exporter",sidebar_label:"dcgm-exporter",description:"dcgm-exporter",keywords:["dcgm-exporter"]},i=void 0,s={id:"mlops/mlops/monitoring/dcgm-exporter",title:"dcgm-exporter",description:"dcgm-exporter",source:"@site/docs/mlops/mlops/monitoring/dcgm-exporter.mdx",sourceDirName:"mlops/mlops/monitoring",slug:"/mlops/mlops/monitoring/dcgm-exporter",permalink:"/docs/mlops/mlops/monitoring/dcgm-exporter",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1723917838e3,frontMatter:{id:"dcgm-exporter",title:"dcgm-exporter",sidebar_label:"dcgm-exporter",description:"dcgm-exporter",keywords:["dcgm-exporter"]},sidebar:"mlops",previous:{title:"Operator",permalink:"/docs/mlops/mlops/monitoring/eck/operator"},next:{title:"Dashboard",permalink:"/docs/mlops/mlops/monitoring/kubernetes-dashboard"}},c={},d=[{value:"\uc124\uce58",id:"\uc124\uce58",level:2},{value:"Removal",id:"removal",level:2},{value:"Reference",id:"reference",level:2}];function m(e){const r={a:"a",code:"code",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.h2,{id:"\uc124\uce58",children:"\uc124\uce58"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-shell",children:"helm repo add dcgm-exporter https://nvidia.github.io/gpu-monitoring-tools/helm-charts \\\n&& helm repo update dcgm-exporter\n"})}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-shell",children:"helm search repo dcgm-exporter -l | head -n 10\n"})}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-shell",children:"mkdir -p monitoring/dcgm-exporter/helm\n"})}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-shell",children:"helm show values dcgm-exporter/dcgm-exporter \\\n    --version 2.4.0 \\\n    > monitoring/dcgm-exporter/helm/values.yaml\n"})}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-yaml",metastring:'title="monitoring/dcgm-exporter/helm/values.yaml"',children:"affinity:\n  nodeAffinity:\n    # \uc2a4\ucf00\uc904\ub9c1 \ud560 \ub550 \ud544\uc694, \uc774\ubbf8 \uc0dd\uc131\ub41c \uacbd\uc6b0 \ubb34\uc2dc\ud558\ub294 \uc870\uac74\n    requiredDuringSchedulingIgnoredDuringExecution:\n      nodeSelectorTerms:\n        - matchExpressions:\n            # node label\uc5d0 key\uac12\uc73c\ub85c nvidia.com/gpu\uac00 \uc788\uc73c\uba74 \uc2a4\ucf00\uc904\ub9c1\n            - key: nvidia.com/gpu\n              operator: Exists\n"})}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-shell",children:"helm upgrade dcgm-exporter dcgm-exporter/dcgm-exporter \\\n    --install \\\n    --version 2.4.0 \\\n    -n monitoring \\\n    --create-namespace \\\n    -f monitoring/dcgm-exporter/helm/values.yaml\n"})}),"\n",(0,o.jsx)(r.h2,{id:"removal",children:"Removal"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-shell",children:"helm uninstall dcgm-exporter -n monitoring\n"})}),"\n",(0,o.jsx)(r.h2,{id:"reference",children:"Reference"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:(0,o.jsx)(r.a,{href:"https://github.com/NVIDIA/gpu-monitoring-tools",children:"https://github.com/NVIDIA/gpu-monitoring-tools"})}),"\n"]})]})}function a(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>s});var o=n(96540);const t={},l=o.createContext(t);function i(e){const r=o.useContext(l);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),o.createElement(l.Provider,{value:r},e.children)}}}]);