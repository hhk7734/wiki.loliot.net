"use strict";(self.webpackChunkwiki_loliot_net=self.webpackChunkwiki_loliot_net||[]).push([[40095],{36098:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>r,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"mlops/mlops/network/cilium/gateway-api","title":"cilium\uc5d0\uc11c Gateway API \uc0ac\uc6a9\ud558\uae30","description":"cilium\uc5d0\uc11c Gateway API \uc0ac\uc6a9\ud558\uae30","source":"@site/docs/mlops/mlops/network/cilium/gateway-api.mdx","sourceDirName":"mlops/mlops/network/cilium","slug":"/mlops/mlops/network/cilium/gateway-api","permalink":"/docs/mlops/mlops/network/cilium/gateway-api","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedAt":1731596630000,"frontMatter":{"id":"gateway-api","title":"cilium\uc5d0\uc11c Gateway API \uc0ac\uc6a9\ud558\uae30","sidebar_label":"Gateway API","description":"cilium\uc5d0\uc11c Gateway API \uc0ac\uc6a9\ud558\uae30","keywords":["cilium","gateway-api"]},"sidebar":"mlops","previous":{"title":"Load Balancer IPAM","permalink":"/docs/mlops/mlops/network/cilium/load-balancer"},"next":{"title":"Multus","permalink":"/docs/mlops/mlops/network/multus/"}}');var n=t(74848),l=t(28453);const s={id:"gateway-api",title:"cilium\uc5d0\uc11c Gateway API \uc0ac\uc6a9\ud558\uae30",sidebar_label:"Gateway API",description:"cilium\uc5d0\uc11c Gateway API \uc0ac\uc6a9\ud558\uae30",keywords:["cilium","gateway-api"]},o=void 0,r={},c=[{value:"Gateway API CRD",id:"gateway-api-crd",level:2},{value:"cilium Gateway API \uc124\uc815",id:"cilium-gateway-api-\uc124\uc815",level:2}];function m(e){const a={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h2,{id:"gateway-api-crd",children:"Gateway API CRD"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:(0,n.jsx)(a.a,{href:"https://github.com/kubernetes-sigs/gateway-api/tree/main/config/crd",children:"https://github.com/kubernetes-sigs/gateway-api/tree/main/config/crd"})}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"cilium-gateway-api-\uc124\uc815",children:"cilium Gateway API \uc124\uc815"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:(0,n.jsx)(a.a,{href:"https://docs.cilium.io/en/stable/network/servicemesh/gateway-api/gateway-api/",children:"https://docs.cilium.io/en/stable/network/servicemesh/gateway-api/gateway-api/"})}),"\n"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-yaml",metastring:'title="cilium-values.yaml"',children:'gatewayAPI:\n  enabled: true\n\nkubeProxyReplacement: "true"\n\nnodePort:\n  enabled: true\n'})}),"\n",(0,n.jsx)(a.p,{children:"cilium-operator\uc640 cilium\uc744 \uc7ac\uc2dc\uc791\ud574\uc57c\ud569\ub2c8\ub2e4."}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-yaml",children:"apiVersion: gateway.networking.k8s.io/v1\nkind: GatewayClass\nmetadata:\n  name: cilium\nspec:\n  controllerName: io.cilium/gateway-controller\n"})})]})}function u(e={}){const{wrapper:a}={...(0,l.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},28453:(e,a,t)=>{t.d(a,{R:()=>s,x:()=>o});var i=t(96540);const n={},l=i.createContext(n);function s(e){const a=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),i.createElement(l.Provider,{value:a},e.children)}}}]);