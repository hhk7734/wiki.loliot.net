"use strict";(self.webpackChunkwiki_loliot_net=self.webpackChunkwiki_loliot_net||[]).push([[69137],{80007:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"mlops/mlops/kubeflow/access-management","title":"Kubeflow Access Management","description":"Kubeflow Access Management","source":"@site/docs/mlops/mlops/kubeflow/access-management.mdx","sourceDirName":"mlops/mlops/kubeflow","slug":"/mlops/mlops/kubeflow/access-management","permalink":"/docs/mlops/mlops/kubeflow/access-management","draft":false,"unlisted":false,"editUrl":"https://github.com/hhk7734/wiki/tree/main/docs/mlops/mlops/kubeflow/access-management.mdx","tags":[],"version":"current","lastUpdatedAt":1736949978000,"frontMatter":{"id":"access-management","title":"Kubeflow Access Management","sidebar_label":"Access Management","description":"Kubeflow Access Management","keywords":["access management","kubeflow"]},"sidebar":"mlops","previous":{"title":"Architecture","permalink":"/docs/mlops/mlops/kubeflow/architecture"},"next":{"title":"Notebook","permalink":"/docs/mlops/mlops/kubeflow/notebook"}}');var t=o(74848),s=o(28453);const i={id:"access-management",title:"Kubeflow Access Management",sidebar_label:"Access Management",description:"Kubeflow Access Management",keywords:["access management","kubeflow"]},r=void 0,l={},c=[{value:"Profile",id:"profile",level:2},{value:"Contributor",id:"contributor",level:2}];function m(e){const n={code:"code",h2:"h2",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"profile",children:"Profile"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'apiVersion: kubeflow.org/v1beta1\nkind: Profile\nmetadata:\n  name: <name>\nspec:\n  # <name> namespace admin\n  owner:\n    kind: User\n    name: <email>\n\n  # optional\n  # https://kubernetes.io/docs/concepts/policy/resource-quotas/\n  resourceQuotaSpec:\n    hard:\n      cpu: "16"\n      memory: "64Gi"\n      requests.nvidia.com/gpu: "2"\n'})}),"\n",(0,t.jsx)(n.h2,{id:"contributor",children:"Contributor"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"apiVersion: rbac.authorization.k8s.io/v1\nkind: RoleBinding\nmetadata:\n  name: <email>-clusterrole-edit # .@ \ub4f1 \ud2b9\uc218\ubb38\uc790\ub294 -\ub85c \ubcc0\uacbd, \ub300\ubb38\uc790\ub294 \uc18c\ubb38\uc790\ub85c \ubcc0\uacbd\n  namespace: <profileName>\n  annotations:\n    role: edit\n    user: <email>\nroleRef:\n  apiGroup: rbac.authorization.k8s.io\n  kind: ClusterRole\n  name: kubeflow-edit\nsubjects:\n  - apiGroup: rbac.authorization.k8s.io\n    kind: User\n    name: <email>\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"apiVersion: security.istio.io/v1beta1\nkind: AuthorizationPolicy\nmetadata:\n  name: <email>-clusterrole-edit # .@ \ub4f1 \ud2b9\uc218\ubb38\uc790\ub294 -\ub85c \ubcc0\uacbd, \ub300\ubb38\uc790\ub294 \uc18c\ubb38\uc790\ub85c \ubcc0\uacbd\n  namespace: <profileName>\n  annotations:\n    role: edit\n    user: <email>\nspec:\n  action: ALLOW\n  rules:\n    - when:\n        - key: request.headers[kubeflow-userid] # \ud5e4\ub354\ub294 \uc124\uc815\uc5d0 \ub530\ub77c \ub2e4\ub984\n          values:\n            - <email>\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>r});var a=o(96540);const t={},s=a.createContext(t);function i(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);