"use strict";(self.webpackChunkwiki_loliot_net=self.webpackChunkwiki_loliot_net||[]).push([[52299],{76298:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"mlops/mlops/monitoring/kubernetes-dashboard","title":"Kubernetes Dashboard","description":"Kubernetes Dashboard","source":"@site/docs/mlops/mlops/monitoring/kubernetes-dashboard.mdx","sourceDirName":"mlops/mlops/monitoring","slug":"/mlops/mlops/monitoring/kubernetes-dashboard","permalink":"/docs/mlops/mlops/monitoring/kubernetes-dashboard","draft":false,"unlisted":false,"editUrl":"https://github.com/hhk7734/wiki/tree/main/docs/mlops/mlops/monitoring/kubernetes-dashboard.mdx","tags":[],"version":"current","lastUpdatedAt":1733674338000,"frontMatter":{"id":"kubernetes-dashboard","title":"Kubernetes Dashboard","sidebar_label":"Dashboard","description":"Kubernetes Dashboard","keywords":["kubernetes"]},"sidebar":"mlops","previous":{"title":"dcgm-exporter","permalink":"/docs/mlops/mlops/monitoring/dcgm-exporter"},"next":{"title":"Argo CD","permalink":"/docs/mlops/mlops/workflow/argo-cd/"}}');var a=s(74848),o=s(28453);const t={id:"kubernetes-dashboard",title:"Kubernetes Dashboard",sidebar_label:"Dashboard",description:"Kubernetes Dashboard",keywords:["kubernetes"]},l=void 0,i={},d=[{value:"\uc124\uce58",id:"\uc124\uce58",level:2},{value:"Removal",id:"removal",level:2},{value:"Service",id:"service",level:2},{value:"Token",id:"token",level:3},{value:"Proxy",id:"proxy",level:3},{value:"Port forward",id:"port-forward",level:3},{value:"Reference",id:"reference",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"\uc124\uce58",children:"\uc124\uce58"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"helm repo add kubernetes-dashboard https://kubernetes.github.io/dashboard/ \\\n&& helm repo update kubernetes-dashboard\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"helm search repo kubernetes-dashboard -l | head -n 10\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"mkdir -p monitoring/kubernetes_dashboard/helm\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"helm show values kubernetes-dashboard/kubernetes-dashboard \\\n    --version 5.4.1 \\\n    > monitoring/kubernetes_dashboard/helm/values.yaml\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",metastring:'title="monitoring/kubernetes_dashboard/helm/values.yaml"',children:"extraArgs:\n  - --token-ttl=86400\n\nmetricsScraper:\n  enabled: true\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"helm upgrade kubernetes-dashboard kubernetes-dashboard/kubernetes-dashboard \\\n    --install \\\n    --version 5.4.1 \\\n    -n monitoring \\\n    -f monitoring/kubernetes_dashboard/helm/values.yaml\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",metastring:'title="rbac/admin-sa.yaml"',children:"apiVersion: v1\nkind: ServiceAccount\nmetadata:\n  name: admin-sa\n  namespace: monitoring\n\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRoleBinding\nmetadata:\n  name: admin-crb\nroleRef:\n  apiGroup: rbac.authorization.k8s.io\n  kind: ClusterRole\n  name: cluster-admin\nsubjects:\n  - kind: ServiceAccount\n    name: admin-sa\n    namespace: monitoring\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"kubectl apply -f rbac/admin-sa.yaml\n"})}),"\n",(0,a.jsx)(n.h2,{id:"removal",children:"Removal"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"kubectl delete -f rbac/admin-sa.yaml\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"helm uninstall -n monitoring kubernetes-dashboard\n"})}),"\n",(0,a.jsx)(n.h2,{id:"service",children:"Service"}),"\n",(0,a.jsx)(n.h3,{id:"token",children:"Token"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:'kubectl -n monitoring get secret $(kubectl -n monitoring get sa/admin-sa -o jsonpath="{.secrets[0].name}") -o go-template="{{.data.token | base64decode}}"\n'})}),"\n",(0,a.jsx)(n.p,{children:"\ud1a0\ud070\uc744 \ucd9c\ub825\ud574\uc11c \uc0ac\uc6a9\ud558\ub294 \uacbd\uc6b0 \uc704 \uba85\ub839\uc5b4\ub97c \ub9e4\ubc88 \uc2e4\ud589\ud558\uace0, config\ud30c\uc77c\uc5d0 \uc800\uc7a5\ud574\ub193\uace0 \uc0ac\uc6a9\ud558\ub824\ub294 \uacbd\uc6b0 \uc544\ub798 \uba85\ub839\uc5b4\ub97c \ud1b5\ud574 config\ud30c\uc77c\uc5d0 \ud1a0\ud070\uc744 \uc800\uc7a5\ud574\ub450\uba74 \ub429\ub2c8\ub2e4."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:'kubectl config set-credentials $(kubectl config current-context) --token=$(kubectl -n monitoring get secret $(kubectl -n monitoring get sa/admin-sa -o jsonpath="{.secrets[0].name}") -o go-template="{{.data.token | base64decode}}")\n'})}),"\n",(0,a.jsx)(n.admonition,{type:"warning",children:(0,a.jsxs)(n.p,{children:["\ud55c config \ud30c\uc77c\uc5d0 \uc5ec\ub7ec context\uac00 \uc788\ub294 \uacbd\uc6b0 config\ud30c\uc77c\ub85c \ub85c\uadf8\uc778\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \ud55c context\uc5d0 \ud55c config \ud30c\uc77c\ub85c \ub9cc\ub4e4\uace0 ",(0,a.jsx)(n.code,{children:"KUBECONFIG"})," \ud658\uacbd\ubcc0\uc218\ub85c \uc5ec\ub7ec config \ud30c\uc77c\uc744 \ubb36\uc5b4\uc11c \uc0ac\uc6a9\ud558\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4."]})}),"\n",(0,a.jsx)(n.h3,{id:"proxy",children:"Proxy"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"kubectl proxy\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/",children:"http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/"})}),"\n",(0,a.jsx)(n.h3,{id:"port-forward",children:"Port forward"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"kubectl port-forward -n monitoring svc/kubernetes-dashboard 8002:443\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://localhost:8002",children:"https://localhost:8002"})}),"\n",(0,a.jsx)(n.h2,{id:"reference",children:"Reference"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://github.com/kubernetes/dashboard",children:"https://github.com/kubernetes/dashboard"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>l});var r=s(96540);const a={},o=r.createContext(a);function t(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);