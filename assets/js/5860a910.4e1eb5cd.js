"use strict";(self.webpackChunkwiki_loliot_net=self.webpackChunkwiki_loliot_net||[]).push([[35903],{7431:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>t,metadata:()=>p,toc:()=>d});var o=i(74848),r=i(28453);const t={id:"deprovisioning",title:"Karpenter Deprovisioning",sidebar_label:"Deprovisioning",description:"Karpenter Deprovisioning",keywords:["karpenter","deprovisioning"]},s=void 0,p={id:"mlops/mlops/provisioning/karpenter/deprovisioning",title:"Karpenter Deprovisioning",description:"Karpenter Deprovisioning",source:"@site/docs/mlops/mlops/provisioning/karpenter/deprovisioning.mdx",sourceDirName:"mlops/mlops/provisioning/karpenter",slug:"/mlops/mlops/provisioning/karpenter/deprovisioning",permalink:"/docs/mlops/mlops/provisioning/karpenter/deprovisioning",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1724686915e3,frontMatter:{id:"deprovisioning",title:"Karpenter Deprovisioning",sidebar_label:"Deprovisioning",description:"Karpenter Deprovisioning",keywords:["karpenter","deprovisioning"]},sidebar:"mlops",previous:{title:"Scheduling",permalink:"/docs/mlops/mlops/provisioning/karpenter/scheduling"},next:{title:"KEDA",permalink:"/docs/mlops/mlops/provisioning/keda/"}},l={},d=[{value:"Interruption",id:"interruption",level:2},{value:"do-not-evict \uc124\uc815\ub41c Pod",id:"do-not-evict-\uc124\uc815\ub41c-pod",level:2}];function a(n){const e={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h2,{id:"interruption",children:"Interruption"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.a,{href:"https://karpenter.sh/docs/concepts/deprovisioning/#interruption",children:"https://karpenter.sh/docs/concepts/deprovisioning/#interruption"})}),"\n"]}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"Spot \uc911\ub2e8 \uacbd\uace0(\uc885\ub8cc 2\ubd84 \uc804)"}),"\n",(0,o.jsx)(e.li,{children:"Instance \uc885\ub8cc \uc774\ubca4\ud2b8"}),"\n",(0,o.jsx)(e.li,{children:"Instance \uc911\uc9c0 \uc774\ubca4\ud2b8"}),"\n",(0,o.jsx)(e.li,{children:"\uc608\uc57d\ub41c Change Health \uc774\ubca4\ud2b8(Maintenance \uc774\ubca4\ud2b8)"}),"\n"]}),"\n",(0,o.jsx)(e.h2,{id:"do-not-evict-\uc124\uc815\ub41c-pod",children:"do-not-evict \uc124\uc815\ub41c Pod"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-yaml",children:'metadata:\n  annotations:\n    karpenter.sh/do-not-evict: "true"\n'})}),"\n",(0,o.jsxs)(e.p,{children:["\ub178\ub4dc\uc5d0 ",(0,o.jsx)(e.code,{children:'karpenter.sh/do-not-evict: "true"'})," annotation\uc774 \uc124\uc815\ub41c \uc2e4\ud589 \uc911\uc778 Pod\uc774 \uc788\ub294 \uacbd\uc6b0 \ud574\ub2f9 \ub178\ub4dc\ub294 \uc81c\uac70 \ub300\uc0c1\uc5d0\uc11c \uc81c\uc678\ub429\ub2c8\ub2e4."]}),"\n",(0,o.jsx)(e.p,{children:"\ucc98\uc74c\ubd80\ud130 \ub05d\uae4c\uc9c0 \uc885\ub8cc \uc5c6\uc774 \uc2e4\ud589\ub418\uc5b4\uc57c\ud558\ub294 Workload\ub97c karpenter\uac00 \uac15\uc81c\ub85c \uc885\ub8cc\ud558\uc9c0 \uc54a\ub3c4\ub85d \ud558\uae30 \uc704\ud574 \uc0ac\uc6a9\ud558\uba74 \uc720\uc6a9\ud569\ub2c8\ub2e4."})]})}function c(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(a,{...n})}):a(n)}},28453:(n,e,i)=>{i.d(e,{R:()=>s,x:()=>p});var o=i(96540);const r={},t=o.createContext(r);function s(n){const e=o.useContext(t);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function p(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:s(n.components),o.createElement(t.Provider,{value:e},n.children)}}}]);