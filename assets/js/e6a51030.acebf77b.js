"use strict";(self.webpackChunkwiki_loliot_net=self.webpackChunkwiki_loliot_net||[]).push([[50634],{37791:(e,o,r)=>{r.r(o),r.d(o,{assets:()=>i,contentTitle:()=>n,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>p});const a=JSON.parse('{"id":"mlops/mlops/workflow/awx/awx-operator","title":"AWX operator","description":"AWX operator","source":"@site/docs/mlops/mlops/workflow/awx/awx-operator.mdx","sourceDirName":"mlops/mlops/workflow/awx","slug":"/mlops/mlops/workflow/awx/awx-operator","permalink":"/docs/mlops/mlops/workflow/awx/awx-operator","draft":false,"unlisted":false,"editUrl":"https://github.com/hhk7734/wiki/tree/main/docs/mlops/mlops/workflow/awx/awx-operator.mdx","tags":[],"version":"current","lastUpdatedAt":1736949978000,"frontMatter":{"id":"awx-operator","title":"AWX operator","sidebar_label":"AWX operator","description":"AWX operator","keywords":["awx","operator","workflows"]},"sidebar":"mlops","previous":{"title":"Client","permalink":"/docs/mlops/mlops/workflow/argo-workflows/client"},"next":{"title":"CRD","permalink":"/docs/mlops/mlops/workflow/awx/crd"}}');var l=r(74848),t=r(28453);const s={id:"awx-operator",title:"AWX operator",sidebar_label:"AWX operator",description:"AWX operator",keywords:["awx","operator","workflows"]},n=void 0,i={},p=[{value:"\uc124\uce58",id:"\uc124\uce58",level:2}];function c(e){const o={a:"a",code:"code",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o.h2,{id:"\uc124\uce58",children:"\uc124\uce58"}),"\n",(0,l.jsxs)(o.ul,{children:["\n",(0,l.jsx)(o.li,{children:(0,l.jsx)(o.a,{href:"https://ansible.readthedocs.io/projects/awx-operator/en/latest/installation/helm-install-on-existing-cluster.html",children:"https://ansible.readthedocs.io/projects/awx-operator/en/latest/installation/helm-install-on-existing-cluster.html"})}),"\n"]}),"\n",(0,l.jsx)(o.pre,{children:(0,l.jsx)(o.code,{className:"language-shell",children:"helm repo add awx-operator https://ansible.github.io/awx-operator/\n"})}),"\n",(0,l.jsx)(o.pre,{children:(0,l.jsx)(o.code,{className:"language-shell",children:"helm repo update awx-operator \\\n&& helm search repo awx-operator -l | head -n 10\n"})}),"\n",(0,l.jsx)(o.pre,{children:(0,l.jsx)(o.code,{className:"language-shell",children:"helm pull awx-operator/awx-operator --version 2.15.0\n"})}),"\n",(0,l.jsx)(o.pre,{children:(0,l.jsx)(o.code,{className:"language-shell",children:"helm show values awx-operator/awx-operator --version 2.15.0 > awx-operator-2.15.0.yaml\n"})}),"\n",(0,l.jsx)(o.pre,{children:(0,l.jsx)(o.code,{className:"language-yaml",metastring:'title="awx-operator-values.yaml"',children:"AWX:\n  enabled: false\n"})}),"\n",(0,l.jsx)(o.pre,{children:(0,l.jsx)(o.code,{className:"language-shell",children:"helm template awx-operator awx-operator-2.15.0.tgz \\\n    -n workflow \\\n    -f awx-operator-values.yaml \\\n    > awx-operator.yaml\n"})}),"\n",(0,l.jsx)(o.pre,{children:(0,l.jsx)(o.code,{className:"language-shell",children:"helm upgrade awx-operator awx-operator-2.15.0.tgz \\\n    --install \\\n    --history-max 5 \\\n    -n workflow \\\n    -f awx-operator-values.yaml\n"})})]})}function d(e={}){const{wrapper:o}={...(0,t.R)(),...e.components};return o?(0,l.jsx)(o,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},28453:(e,o,r)=>{r.d(o,{R:()=>s,x:()=>n});var a=r(96540);const l={},t=a.createContext(l);function s(e){const o=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function n(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),a.createElement(t.Provider,{value:o},e.children)}}}]);