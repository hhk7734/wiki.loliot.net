"use strict";(self.webpackChunkwiki_loliot_net=self.webpackChunkwiki_loliot_net||[]).push([[5658],{49502:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>i,toc:()=>r});const i=JSON.parse('{"id":"mlops/mlops/network/multus/network-attachment-definition","title":"NetworkAttachmentDefinition","description":"NetworkAttachmentDefinition","source":"@site/docs/mlops/mlops/network/multus/network-attachment-definition.mdx","sourceDirName":"mlops/mlops/network/multus","slug":"/mlops/mlops/network/multus/network-attachment-definition","permalink":"/docs/mlops/mlops/network/multus/network-attachment-definition","draft":false,"unlisted":false,"editUrl":"https://github.com/hhk7734/wiki/tree/main/docs/mlops/mlops/network/multus/network-attachment-definition.mdx","tags":[],"version":"current","lastUpdatedAt":1733674338000,"frontMatter":{"id":"network-attachment-definition","title":"NetworkAttachmentDefinition","sidebar_label":"NetworkAttachmentDefinition","description":"NetworkAttachmentDefinition","keywords":["multus","multi-homed","cni","NetworkAttachmentDefinition"]},"sidebar":"mlops","previous":{"title":"Multus","permalink":"/docs/mlops/mlops/network/multus/"},"next":{"title":"IPoIB","permalink":"/docs/mlops/mlops/network/multus/ipoib"}}');var o=e(74848),s=e(28453);const c={id:"network-attachment-definition",title:"NetworkAttachmentDefinition",sidebar_label:"NetworkAttachmentDefinition",description:"NetworkAttachmentDefinition",keywords:["multus","multi-homed","cni","NetworkAttachmentDefinition"]},l=void 0,a={},r=[{value:"\ud558\ub098\uc758 config \uc0ac\uc6a9\ud558\uae30",id:"\ud558\ub098\uc758-config-\uc0ac\uc6a9\ud558\uae30",level:2},{value:"Node\ubcc4 config \uc0ac\uc6a9\ud558\uae30",id:"node\ubcc4-config-\uc0ac\uc6a9\ud558\uae30",level:2},{value:"Pod annotation\uc73c\ub85c \ub124\ud2b8\uc6cc\ud06c \ud560\ub2f9\ud558\uae30",id:"pod-annotation\uc73c\ub85c-\ub124\ud2b8\uc6cc\ud06c-\ud560\ub2f9\ud558\uae30",level:2}];function d(n){const t={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"\ud558\ub098\uc758-config-\uc0ac\uc6a9\ud558\uae30",children:"\ud558\ub098\uc758 config \uc0ac\uc6a9\ud558\uae30"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-yaml",children:'apiVersion: k8s.cni.cncf.io/v1\nkind: NetworkAttachmentDefinition\nmetadata:\n  name: macvlan-conf-1\nspec:\n  config: |\n    {\n      "cniVersion": "0.3.0",\n      "type": "macvlan",\n      "master": "eth1",\n      "mode": "bridge",\n      "ipam": {\n        "type": "host-local",\n        "ranges": [\n          [\n            {\n              "subnet": "10.10.0.0/16",\n              "rangeStart": "10.10.1.20",\n              "rangeEnd": "10.10.3.50",\n              "gateway": "10.10.0.254"\n            }\n          ]\n        ]\n      }\n    }\n'})}),"\n",(0,o.jsx)(t.h2,{id:"node\ubcc4-config-\uc0ac\uc6a9\ud558\uae30",children:"Node\ubcc4 config \uc0ac\uc6a9\ud558\uae30"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-yaml",children:"apiVersion: k8s.cni.cncf.io/v1\nkind: NetworkAttachmentDefinition\nmetadata:\n  name: macvlan-conf-2\n"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-json",metastring:'title="/etc/cni/multus/net.d/macvlan2"',children:'{\n\t"cniVersion": "0.3.0",\n\t"type": "macvlan",\n\t"name": "macvlan-conf-2",\n\t"master": "eth1",\n\t"mode": "bridge",\n\t"ipam": {\n\t\t"type": "host-local",\n\t\t"ranges": [\n\t\t\t[\n\t\t\t\t{\n\t\t\t\t\t"subnet": "11.10.0.0/16",\n\t\t\t\t\t"rangeStart": "11.10.1.20",\n\t\t\t\t\t"rangeEnd": "11.10.3.50"\n\t\t\t\t}\n\t\t\t]\n\t\t]\n\t}\n}\n'})}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"NetworkAttachmentDefinition"}),"\uc5d0 ",(0,o.jsx)(t.code,{children:".spec.config"}),"\ub97c \uc120\uc5b8\ud558\uc9c0 \uc54a\uc73c\uba74 ",(0,o.jsx)(t.code,{children:".metadata.name"}),"\uacfc \uc77c\uce58\ud558\ub294 ",(0,o.jsx)(t.code,{children:"name"}),"\uc744 \uac00\uc9c4 \uc124\uc815 \ud30c\uc77c\uc744 \ucc3e\uc544\uc11c \uc0ac\uc6a9\ud569\ub2c8\ub2e4."]}),"\n",(0,o.jsx)(t.h2,{id:"pod-annotation\uc73c\ub85c-\ub124\ud2b8\uc6cc\ud06c-\ud560\ub2f9\ud558\uae30",children:"Pod annotation\uc73c\ub85c \ub124\ud2b8\uc6cc\ud06c \ud560\ub2f9\ud558\uae30"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-yaml",children:"apiVersion: v1\nkind: Pod\nmetadata:\n  annotations:\n    k8s.v1.cni.cncf.io/networks: <networks>\n"})}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"<networks>"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"<network>[,<network>]"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"<network>"})," = ",(0,o.jsx)(t.code,{children:"[<namespace>]<networkAttachmentDefinitionName>[@<ifName>]"})]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["JSON \ud615\uc2dd\uc73c\ub85c \uc120\uc5b8\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4.","\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.code,{children:'[ { "<field>": <value> } ]'})}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"<field>"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.code,{children:"name"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.code,{children:"namespace"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.code,{children:"interface"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function m(n={}){const{wrapper:t}={...(0,s.R)(),...n.components};return t?(0,o.jsx)(t,{...n,children:(0,o.jsx)(d,{...n})}):d(n)}},28453:(n,t,e)=>{e.d(t,{R:()=>c,x:()=>l});var i=e(96540);const o={},s=i.createContext(o);function c(n){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function l(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:c(n.components),i.createElement(s.Provider,{value:t},n.children)}}}]);