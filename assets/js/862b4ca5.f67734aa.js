"use strict";(self.webpackChunkwiki_loliot_net=self.webpackChunkwiki_loliot_net||[]).push([[27180],{44867:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>d});const l=JSON.parse('{"id":"mlops/monitoring/collector/vector/source","title":"Vector Source(\uc218\uc9d1\ud558\uae30)","description":"Vector Source(\uc218\uc9d1\ud558\uae30)","source":"@site/docs/mlops/monitoring/collector/vector/source.mdx","sourceDirName":"mlops/monitoring/collector/vector","slug":"/mlops/monitoring/collector/vector/source","permalink":"/docs/mlops/monitoring/collector/vector/source","draft":false,"unlisted":false,"editUrl":"https://github.com/hhk7734/wiki/tree/main/docs/mlops/monitoring/collector/vector/source.mdx","tags":[],"version":"current","lastUpdatedAt":1735233432000,"frontMatter":{"id":"source","title":"Vector Source(\uc218\uc9d1\ud558\uae30)","sidebar_label":"Source(\uc218\uc9d1\ud558\uae30)","description":"Vector Source(\uc218\uc9d1\ud558\uae30)","keywords":["vector","source"]},"sidebar":"monitoring","previous":{"title":"Vector","permalink":"/docs/mlops/monitoring/collector/vector/"},"next":{"title":"Transform(\ubcc0\ud658\ud558\uae30)","permalink":"/docs/mlops/monitoring/collector/vector/transform"}}');var r=t(74848),o=t(28453);const s={id:"source",title:"Vector Source(\uc218\uc9d1\ud558\uae30)",sidebar_label:"Source(\uc218\uc9d1\ud558\uae30)",description:"Vector Source(\uc218\uc9d1\ud558\uae30)",keywords:["vector","source"]},c=void 0,i={},d=[{value:"Source \uc124\uc815 \ubc29\ubc95",id:"source-\uc124\uc815-\ubc29\ubc95",level:2},{value:"Kubernetes Log",id:"kubernetes-log",level:2},{value:"\uc124\uc815",id:"\uc124\uc815",level:3},{value:"\uc218\uc9d1 \ub370\uc774\ud130 \uc608\uc2dc",id:"\uc218\uc9d1-\ub370\uc774\ud130-\uc608\uc2dc",level:3},{value:"File",id:"file",level:2},{value:"\uc124\uc815",id:"\uc124\uc815-1",level:3},{value:"\uc218\uc9d1 \ub370\uc774\ud130 \uc608\uc2dc",id:"\uc218\uc9d1-\ub370\uc774\ud130-\uc608\uc2dc-1",level:3}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"source-\uc124\uc815-\ubc29\ubc95",children:"Source \uc124\uc815 \ubc29\ubc95"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",metastring:'title="vector-values.yaml"',children:"customConfig:\n  sources:\n    <sourceID>:\n      type: <sourceType>\n      <option>: <value>\n"})}),"\n",(0,r.jsx)(n.h2,{id:"kubernetes-log",children:"Kubernetes Log"}),"\n",(0,r.jsx)(n.admonition,{title:"Reference",type:"info",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://vector.dev/docs/reference/configuration/sources/kubernetes_logs/",children:"Vector / Kubernetes logs"})}),"\n"]})}),"\n",(0,r.jsx)(n.h3,{id:"\uc124\uc815",children:"\uc124\uc815"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",metastring:'title="vector-values.yaml"',children:"customConfig:\n  sources:\n    <sourceID>:\n      type: kubernetes_logs\n      <option>: <value>\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"<option>: <value>"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"include_paths_glob_patterns: []"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:'["**/*"]'}),"\uc774 \uae30\ubcf8\uac12\uc785\ub2c8\ub2e4."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"exclude_paths_glob_patterns: []"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:'["**/*.gz", "**/*.tmp"]'}),"\uc774 \uae30\ubcf8\uac12\uc785\ub2c8\ub2e4."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"extra_field_selector: <fieldSelector>[,<fieldSelector>]"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/field-selectors/",children:(0,r.jsx)(n.code,{children:"<fieldSelector>"})})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"extra_label_selector: <labelSelector>[,<labelSelector>]"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#label-selectors",children:(0,r.jsx)(n.code,{children:"<labelSelector>"})})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"extra_namespace_label_selector: <labelSelector>[,<labelSelector>]"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#label-selectors",children:(0,r.jsx)(n.code,{children:"<labelSelector>"})})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.h3,{id:"\uc218\uc9d1-\ub370\uc774\ud130-\uc608\uc2dc",children:"\uc218\uc9d1 \ub370\uc774\ud130 \uc608\uc2dc"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n\t"file": "/var/log/pods/...",\n\t"kubernetes": {\n\t\t"container_id": "containerd://...",\n\t\t"container_image": "",\n\t\t"container_image_id": "",\n\t\t"container_name": "",\n\t\t"namespace_labels": {\n\t\t\t"<label>": "<value>"\n\t\t},\n\t\t"node_labels": {\n\t\t\t"<label>": "<value>"\n\t\t},\n\t\t"pod_ip": "",\n\t\t"pod_ips": [""],\n\t\t"pod_labels": {\n\t\t\t"<label>": "<value>"\n\t\t},\n\t\t"pod_name": "",\n\t\t"pod_namespace": "",\n\t\t"pod_node_name": "",\n\t\t"pod_owner": "",\n\t\t"pod_uid": ""\n\t},\n\t"message": "",\n\t"source_type": "kubernetes_logs",\n\t"stream": "stderr"\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"file",children:"File"}),"\n",(0,r.jsx)(n.admonition,{title:"Reference",type:"info",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://vector.dev/docs/reference/configuration/sources/file/",children:"Vector / File"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://vector.dev/docs/reference/vrl/",children:"Vector Remap Language(VRL)"})}),"\n"]})}),"\n",(0,r.jsx)(n.h3,{id:"\uc124\uc815-1",children:"\uc124\uc815"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",metastring:'title="vector-values.yaml"',children:"customConfig:\n  sources:\n    <sourceID>:\n      type: file\n      include:\n        - <mountPath>/...\n      <option>: <value>\n\nextraVolumes:\n  - name: <volumeName>\n    hostPath:\n      path: <hostPath>\n\nextraVolumeMounts:\n  - name: <volumeName>\n    mountPath: <mountPath>\n    readOnly: true\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"<option>: <value>"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"multiline"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"mode: <mode>"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"continue_past"}),": ",(0,r.jsx)(n.code,{children:"start_pattern"}),"\uc5d0\uc11c \uc2dc\uc791\ud574\uc11c \uc5f0\uc18d\uc801\uc73c\ub85c ",(0,r.jsx)(n.code,{children:"condition_pattern"}),"\uc5d0 \ub9e4\uce6d\ub418\ub294 \uc904\uacfc \uadf8 \ub2e4\uc74c \uc904\uc744 multiline\uc73c\ub85c \ucc98\ub9ac\ud569\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"continue_through"}),": ",(0,r.jsx)(n.code,{children:"start_pattern"}),"\uc5d0\uc11c \uc2dc\uc791\ud574\uc11c \uc5f0\uc18d\uc801\uc73c\ub85c ",(0,r.jsx)(n.code,{children:"condition_pattern"}),"\uc5d0 \ub9e4\uce6d\ub418\ub294 \ub85c\uadf8\ub4e4\uc744 multiline\uc73c\ub85c \ucc98\ub9ac\ud569\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"halt_before"}),": ",(0,r.jsx)(n.code,{children:"start_pattern"}),"\uc5d0\uc11c \uc2dc\uc791\ud574\uc11c ",(0,r.jsx)(n.code,{children:"condition_pattern"})," \uc804\uae4c\uc9c0\ub97c multiline\uc73c\ub85c \ucc98\ub9ac\ud569\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"hart_with"}),": ",(0,r.jsx)(n.code,{children:"start_pattern"}),"\uc5d0\uc11c ",(0,r.jsx)(n.code,{children:"condition_pattern"}),"\uae4c\uc9c0\ub97c multiline\uc73c\ub85c \ucc98\ub9ac\ud569\ub2c8\ub2e4."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"start_pattern: <pattern>"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"condition_pattern: <pattern>"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"timeout_ms: <timeout>"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\uc218\uc9d1-\ub370\uc774\ud130-\uc608\uc2dc-1",children:"\uc218\uc9d1 \ub370\uc774\ud130 \uc608\uc2dc"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n\t"file": "",\n\t"host": "",\n\t"message": "<log>",\n\t"source_type": "file",\n\t"timestamp": "2006-01-02T15:04:05.000000000Z"\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>c});var l=t(96540);const r={},o=l.createContext(r);function s(e){const n=l.useContext(o);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),l.createElement(o.Provider,{value:n},e.children)}}}]);