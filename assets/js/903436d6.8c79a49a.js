"use strict";(self.webpackChunkwiki_loliot_net=self.webpackChunkwiki_loliot_net||[]).push([[42188],{48663:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>r,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"mlops/mlops/kubernetes/tools/kustomize","title":"Kustomize","description":"Kustomize","source":"@site/docs/mlops/mlops/kubernetes/tools/kustomize.mdx","sourceDirName":"mlops/mlops/kubernetes/tools","slug":"/mlops/mlops/kubernetes/tools/kustomize","permalink":"/docs/mlops/mlops/kubernetes/tools/kustomize","draft":false,"unlisted":false,"editUrl":"https://github.com/hhk7734/wiki/tree/main/docs/mlops/mlops/kubernetes/tools/kustomize.mdx","tags":[],"version":"current","lastUpdatedAt":1732196727000,"frontMatter":{"id":"kustomize","title":"Kustomize","sidebar_label":"Kustomize","description":"Kustomize","keywords":["kustomize"]},"sidebar":"mlops","previous":{"title":"\ubc14\uc774\ub108\ub9ac/\uc774\ubbf8\uc9c0 \ub2e4\uc6b4\ub85c\ub4dc","permalink":"/docs/mlops/mlops/kubernetes/tools/kubespray/download"},"next":{"title":"Helm\uc73c\ub85c \ubc30\ud3ec\ud558\uae30","permalink":"/docs/mlops/mlops/kubernetes/tools/helm"}}');var o=n(74848),l=n(28453);const i={id:"kustomize",title:"Kustomize",sidebar_label:"Kustomize",description:"Kustomize",keywords:["kustomize"]},a=void 0,r={},c=[{value:"Resources",id:"resources",level:2},{value:"kustomize",id:"kustomize",level:2},{value:"Example",id:"example",level:2},{value:"Reference",id:"reference",level:2}];function d(e){const s={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.h2,{id:"resources",children:"Resources"}),"\n",(0,o.jsxs)(s.p,{children:["Kubernetes \uac1d\uccb4\uc758 \uc778\uc2a4\ud134\uc2a4(Deployment, Services, Namespace \ub4f1)\uc744 \ub9ac\uc18c\uc2a4\ub77c\uace0 \ud569\ub2c8\ub2e4. \uadf8 \uc911 \ucee8\ud14c\uc774\ub108\ub97c \uc2e4\ud589\uc2dc\ud0a4\ub294 \ub9ac\uc18c\uc2a4\ub97c \uc6cc\ud06c\ub85c\ub4dc(Workloads) \ub77c\uace0 \ud569\ub2c8\ub2e4. \uc6cc\ud06c\ub85c\ub4dc\uc5d0\ub294 ",(0,o.jsx)(s.code,{children:"Deployment"}),", ",(0,o.jsx)(s.code,{children:"StatefulSets"}),", ",(0,o.jsx)(s.code,{children:"Jobs"}),", ",(0,o.jsx)(s.code,{children:"CronJobs"}),", ",(0,o.jsx)(s.code,{children:"DaemonSets"})," \ub4f1\uc774 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,o.jsx)(s.p,{children:"\ub9ac\uc18c\uc2a4\ub294 \ub2e4\uc74c\uc5d0 \uc758\ud574 \uad6c\ubcc4\ub429\ub2c8\ub2e4."}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:(0,o.jsx)(s.code,{children:"apiVersion"})}),"\n",(0,o.jsx)(s.li,{children:(0,o.jsx)(s.code,{children:"kind"})}),"\n",(0,o.jsx)(s.li,{children:(0,o.jsx)(s.code,{children:"metadata.namespace"})}),"\n",(0,o.jsx)(s.li,{children:(0,o.jsx)(s.code,{children:"metadata.name"})}),"\n"]}),"\n",(0,o.jsx)(s.p,{children:"\ub9ac\uc18c\uc2a4\ub294 \uc544\ub798\uc640 \uac19\uc740 \uad6c\uc131\uc744 \uac16\uc2b5\ub2c8\ub2e4."}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"TypeMeta"}),": apiVersion, kind"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"ObjectMeta"}),": namespace, name"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"Spec"}),": \uc6d0\ud558\ub294 \uc0c1\ud0dc"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"Status"}),": \uad00\ucc30\ub41c \uc0c1\ud0dc"]}),"\n"]}),"\n",(0,o.jsx)(s.h2,{id:"kustomize",children:"kustomize"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-shell",children:"kustomize build <directory path> | kubectl apply -f -\n"})}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.code,{children:"kustomize"}),"\ub294 \uc704\uc640 \uac19\uc740 \ud615\uc2dd\uc73c\ub85c \uc0ac\uc6a9\ub429\ub2c8\ub2e4. ",(0,o.jsx)(s.code,{children:"<directory path>/kustomization.yaml"})," \uc758 \uc124\uc815\uc5d0 \ub530\ub77c yaml \ud30c\uc77c\ub4e4\uc774 \uc870\ud569\ub418\uace0, \uadf8 \uc870\ud569 \uacb0\uacfc\uac00 ",(0,o.jsx)(s.code,{children:"kubectl apply -f -"}),"\uc5d0 \uc758\ud574 \uc801\uc6a9\ub429\ub2c8\ub2e4."]}),"\n",(0,o.jsx)(s.h2,{id:"example",children:"Example"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-shell",children:"local-path-provisioner\n\u251c\u2500\u2500 base\n\u2502   \u251c\u2500\u2500 kustomization.yaml\n\u2502   \u2514\u2500\u2500 local-path-storage.yaml\n\u2514\u2500\u2500 overlays\n    \u2514\u2500\u2500 default-storageclass\n        \u251c\u2500\u2500 kustomization.yaml\n        \u2514\u2500\u2500 patches\n            \u2514\u2500\u2500 default-storageclass.yaml\n"})}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-yaml",metastring:'title="local-path-provisioner/base/local-path-storage.yaml"',children:"#...\napiVersion: storage.k8s.io/v1\nkind: StorageClass\nmetadata:\n  name: local-path\n#...\n"})}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-yaml",metastring:'title="local-path-provisioner/base/kustomization.yaml"',children:"apiVersion: kustomize.config.k8s.io/v1beta1\nkind: Kustomization\nresources:\n  - local-path-storage.yaml\n"})}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-yaml",metastring:'title="local-path-provisioner/overlays/default-storageclass/patchs/default-storageclass.yaml" {5}',children:'apiVersion: storage.k8s.io/v1\nkind: StorageClass\nmetadata:\n  annotations:\n    storageclass.beta.kubernetes.io/is-default-class: "true"\n  name: local-path\n'})}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-yaml",metastring:'title="local-path-provisioner/overlays/default-storageclass/kustomization.yaml"',children:"apiVersion: kustomize.config.k8s.io/v1beta1\nkind: Kustomization\nbases:\n  - ../../base\npatches:\n  - patches/default-storageclass.yaml\n"})}),"\n",(0,o.jsx)(s.h2,{id:"reference",children:"Reference"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:(0,o.jsx)(s.a,{href:"https://kubectl.docs.kubernetes.io/references/kustomize/kustomization/",children:"https://kubectl.docs.kubernetes.io/references/kustomize/kustomization/"})}),"\n",(0,o.jsx)(s.li,{children:(0,o.jsx)(s.a,{href:"https://kubectl.docs.kubernetes.io/guides/introduction/resources_controllers/",children:"https://kubectl.docs.kubernetes.io/guides/introduction/resources_controllers/"})}),"\n"]})]})}function u(e={}){const{wrapper:s}={...(0,l.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>a});var t=n(96540);const o={},l=t.createContext(o);function i(e){const s=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(l.Provider,{value:s},e.children)}}}]);