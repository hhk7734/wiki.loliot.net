"use strict";(self.webpackChunkwiki_loliot_net=self.webpackChunkwiki_loliot_net||[]).push([[71399],{21580:(a,n,e)=>{e.r(n),e.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"mlops/monitoring/grafana/grafana","title":"Grafana","description":"Grafana","source":"@site/docs/mlops/monitoring/grafana/grafana.mdx","sourceDirName":"mlops/monitoring/grafana","slug":"/mlops/monitoring/grafana/","permalink":"/docs/mlops/monitoring/grafana/","draft":false,"unlisted":false,"editUrl":"https://github.com/hhk7734/wiki/tree/main/docs/mlops/monitoring/grafana/grafana.mdx","tags":[],"version":"current","lastUpdatedAt":1736949978000,"frontMatter":{"id":"grafana","title":"Grafana","sidebar_label":"Grafana","description":"Grafana","keywords":["Grafana"]},"sidebar":"monitoring","previous":{"title":"Tempo","permalink":"/docs/mlops/monitoring/tempo/"},"next":{"title":"\uc778\uc99d/\uc778\uac00","permalink":"/docs/mlops/monitoring/grafana/auth"}}');var s=e(74848),t=e(28453);const l={id:"grafana",title:"Grafana",sidebar_label:"Grafana",description:"Grafana",keywords:["Grafana"]},o=void 0,i={},c=[{value:"\uc124\uce58",id:"\uc124\uce58",level:2}];function d(a){const n={code:"code",h2:"h2",pre:"pre",...(0,t.R)(),...a.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\uc124\uce58",children:"\uc124\uce58"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"helm repo add grafana https://grafana.github.io/helm-charts\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"helm repo update grafana \\\n&& helm search repo grafana/grafana -l | head -n 10\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"helm pull grafana/grafana --version 8.6.4\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"helm show values grafana/grafana --version 8.6.4 > grafana-8.6.4.yaml\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:'title="grafana-values.yaml"',children:"extraLabels: {}\n\npodLabels: {}\n\nresources: {}\n\ntolerations: []\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"helm template grafana grafana-8.6.4.tgz \\\n    -n grafana \\\n    -f grafana-values.yaml \\\n    > grafana.yaml\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"helm upgrade grafana grafana-8.6.4.tgz \\\n    --install \\\n    --history-max 5 \\\n    -n grafana \\\n    -f grafana-values.yaml\n"})})]})}function g(a={}){const{wrapper:n}={...(0,t.R)(),...a.components};return n?(0,s.jsx)(n,{...a,children:(0,s.jsx)(d,{...a})}):d(a)}},28453:(a,n,e)=>{e.d(n,{R:()=>l,x:()=>o});var r=e(96540);const s={},t=r.createContext(s);function l(a){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof a?a(n):{...n,...a}}),[n,a])}function o(a){let n;return n=a.disableParentContext?"function"==typeof a.components?a.components(s):a.components||s:l(a.components),r.createElement(t.Provider,{value:n},a.children)}}}]);