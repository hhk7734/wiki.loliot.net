"use strict";(self.webpackChunkwiki_loliot_net=self.webpackChunkwiki_loliot_net||[]).push([[37840],{59099:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>m,frontMatter:()=>s,metadata:()=>t,toc:()=>i});const t=JSON.parse('{"id":"mlops/mlops/monitoring/collector/vector/vector","title":"Vector","description":"Vector","source":"@site/docs/mlops/mlops/monitoring/collector/vector/vector.mdx","sourceDirName":"mlops/mlops/monitoring/collector/vector","slug":"/mlops/mlops/monitoring/collector/vector/","permalink":"/docs/mlops/mlops/monitoring/collector/vector/","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedAt":1731420706000,"frontMatter":{"id":"vector","title":"Vector","sidebar_label":"Vector","description":"Vector","keywords":["vector"]},"sidebar":"mlops","previous":{"title":"Pipeline(\ub85c\uadf8 \ubcc0\ud658)","permalink":"/docs/mlops/mlops/monitoring/collector/promtail/pipeline"},"next":{"title":"Source(\uc218\uc9d1\ud558\uae30)","permalink":"/docs/mlops/mlops/monitoring/collector/vector/source"}}');var l=o(74848),r=o(28453);const s={id:"vector",title:"Vector",sidebar_label:"Vector",description:"Vector",keywords:["vector"]},c=void 0,a={},i=[{value:"\uc124\uce58",id:"\uc124\uce58",level:2},{value:"\uc0ad\uc81c",id:"\uc0ad\uc81c",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"\uc124\uce58",children:"\uc124\uce58"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://vector.dev/docs/setup/installation/package-managers/helm/",children:"https://vector.dev/docs/setup/installation/package-managers/helm/"})}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"helm repo add vector https://helm.vector.dev\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"helm repo update vector \\\n&& helm search repo vector/vector -l | head -n 10\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"helm pull vector/vector --version 0.32.0\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"helm show values vector/vector --version 0.32.0 > vector-0.32.0.yaml\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-yaml",metastring:'title="vector-values.yaml"',children:'role: Agent\n\ntolerations: []\n\ncustomConfig:\n  api:\n    enabled: true\n    address: 127.0.0.1:8686\n    playground: false\n\n  sources: {}\n\n  transforms: {}\n\n  sinks: {}\n\ndefaultVolumeMounts:\n  - name: var-log\n    mountPath: "/var/log/"\n    readOnly: true\n  - name: var-lib\n    mountPath: "/var/lib"\n  - name: procfs\n    mountPath: "/host/proc"\n    readOnly: true\n  - name: sysfs\n    mountPath: "/host/sys"\n    readOnly: true\n'})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"helm template vector vector-0.32.0.tgz \\\n  -n monitoring \\\n  -f vector-values.yaml \\\n  > vector.yaml\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"helm upgrade vector vector-0.32.0.tgz \\\n  --install \\\n  --max-history 5 \\\n  -n monitoring \\\n  -f vector-values.yaml\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\uc0ad\uc81c",children:"\uc0ad\uc81c"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"helm uninstall -n monitoring vector\n"})})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>c});var t=o(96540);const l={},r=t.createContext(l);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);