"use strict";(self.webpackChunkwiki_loliot_net=self.webpackChunkwiki_loliot_net||[]).push([[29572],{21784:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>m,frontMatter:()=>r,metadata:()=>a,toc:()=>o});var i=s(74848),l=s(28453);const r={id:"redis",title:"Redis",sidebar_label:"Redis",description:"redis",keywords:["redis"]},t=void 0,a={id:"mlops/mlops/event/redis/redis",title:"Redis",description:"redis",source:"@site/docs/mlops/mlops/event/redis/redis.mdx",sourceDirName:"mlops/mlops/event/redis",slug:"/mlops/mlops/event/redis/",permalink:"/docs/mlops/mlops/event/redis/",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1723917838e3,frontMatter:{id:"redis",title:"Redis",sidebar_label:"Redis",description:"redis",keywords:["redis"]},sidebar:"mlops",previous:{title:"Dead Letter Queue",permalink:"/docs/mlops/mlops/event/nats/dlq"},next:{title:"RabbitMQ",permalink:"/docs/mlops/mlops/event/rabbitmq"}},d={},o=[{value:"\uc124\uce58",id:"\uc124\uce58",level:2},{value:"Test",id:"test",level:2}];function c(e){const n={admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"\uc124\uce58",children:"\uc124\uce58"}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["\uc0ac\uc6a9\ud560 ",(0,i.jsx)(n.code,{children:"StorageClass"}),"\uc758 ",(0,i.jsx)(n.code,{children:"allowVolumeExpansion"}),"\uac00 ",(0,i.jsx)(n.code,{children:"true"}),"\uc778 \uc9c0 \ud655\uc778 \ud6c4 \uc9c4\ud589\ud574\uc8fc\uc138\uc694."]})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"helm repo add bitnami https://charts.bitnami.com/bitnami\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"helm repo update bitnami \\\n&& helm search repo bitnami/redis -l | head -n 10\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"helm show values bitnami/redis \\\n    --version 17.4.2 \\\n    > redis-values.yaml\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:'title="redis-value.yaml"',children:'commonLabels: {}\n\narchitecture: standalone\nauth:\n  enabled: true\n  sentinel: true\n  password: ""\ncommonConfiguration: |-\n  #\n  activedefrag yes\n  #\n  lazyfree-lazy-eviction yes\n  lazyfree-lazy-expire yes\n  lazyfree-lazy-server-del yes\n  lazyfree-lazy-user-del yes\n  replica-lazy-flush yes\n  #\n  maxmemory 2gb\n  maxmemory-policy allkeys-lru\n  # Enable AOF https://redis.io/topics/persistence#append-only-file\n  appendonly no\n  # Disable RDB persistence, AOF persistence already enabled.\n  save ""\nmaster:\n  resources:\n    limits: {}\n    requests: {}\n  podLabels: {}\n  persistence:\n    enabled: true\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"helm upgrade redis bitnami/redis \\\n    --version 17.4.2 \\\n    -n storage \\\n    --values redis-values.yaml \\\n    > redis.yaml\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"helm upgrade redis bitnami/redis \\\n    --install \\\n    --version 17.4.2 \\\n    -n storage \\\n    --history-max 5 \\\n    --values redis-values.yaml\n"})}),"\n",(0,i.jsx)(n.h2,{id:"test",children:"Test"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"kubectl run tmp-redis --rm -it --image redis -- redis-cli -h redis-master.storage\n"})})]})}function m(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>a});var i=s(96540);const l={},r=i.createContext(l);function t(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);