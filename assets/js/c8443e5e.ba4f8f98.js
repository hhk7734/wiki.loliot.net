"use strict";(self.webpackChunkwiki_loliot_net=self.webpackChunkwiki_loliot_net||[]).push([[7436],{96794:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"mlops/mlops/storage/ceph/monitoring","title":"Ceph Monitoring","description":"Ceph Monitoring","source":"@site/docs/mlops/mlops/storage/ceph/monitoring.mdx","sourceDirName":"mlops/mlops/storage/ceph","slug":"/mlops/mlops/storage/ceph/monitoring","permalink":"/docs/mlops/mlops/storage/ceph/monitoring","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedAt":1731770802000,"frontMatter":{"id":"monitoring","title":"Ceph Monitoring","sidebar_label":"Monitoring","description":"Ceph Monitoring","keywords":["ceph","monitoring","dashboard"]},"sidebar":"mlops","previous":{"title":"Cluster","permalink":"/docs/mlops/mlops/storage/ceph/cluster"},"next":{"title":"OSD \uad00\ub9ac","permalink":"/docs/mlops/mlops/storage/ceph/osd"}}');var s=o(74848),i=o(28453);const l={id:"monitoring",title:"Ceph Monitoring",sidebar_label:"Monitoring",description:"Ceph Monitoring",keywords:["ceph","monitoring","dashboard"]},t=void 0,c={},a=[{value:"Dashboard",id:"dashboard",level:2},{value:"Prometheus",id:"prometheus",level:2},{value:"Prometheus \uc0dd\uc131",id:"prometheus-\uc0dd\uc131",level:3},{value:"ServiceMonitor",id:"servicemonitor",level:3},{value:"Dashboard \uc124\uc815",id:"dashboard-\uc124\uc815",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"dashboard",children:"Dashboard"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://rook.io/docs/rook/latest/Storage-Configuration/Monitoring/ceph-dashboard/",children:"https://rook.io/docs/rook/latest/Storage-Configuration/Monitoring/ceph-dashboard/"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"apiVersion: ceph.rook.io/v1\nkind: CephCluster\nspec:\n  mgr:\n    modules:\n      - name: rook\n        enabled: true\n\n  dashboard:\n    enabled: true\n    ssl: false\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"mgr"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"modules"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'{"name": "rook", "enabled": true}'}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"rook \uad00\ub9ac\uc790 \ubaa8\ub4c8\uc744 \ud65c\uc131\ud654 \ud569\ub2c8\ub2e4."}),"\n",(0,s.jsxs)(n.li,{children:["rook \uad00\ub9ac\uc790 \ubaa8\ub4c8\uc740 \ub300\uc2dc\ubcf4\ub4dc\uc758 ",(0,s.jsx)(n.code,{children:"Physical Disks"})," \uc139\uc158\uc744 \ud65c\uc131\ud654\uc2dc\ud0b5\ub2c8\ub2e4."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"dashboard"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"enabled"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"ssl"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsx)(n.p,{children:"Physical Disks \ud45c\uc2dc\ub97c \uc704\ud574 rook \ubaa8\ub4c8\uc744 \ud65c\uc131\ud654 \ud55c \uacbd\uc6b0 discovery daemon\uc774 \ud65c\uc131\ud654 \ub418\uc5b4\uc57c \ud569\ub2c8\ub2e4."}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:'title="rook-ceph-values.yaml"',children:"enableDiscoveryDaemon: true\ndiscoveryDaemonInterval: 60m\n\ndiscover:\n  tolerations:\n    - key: loliot.net/storage\n      operator: Exists\n\n  nodeAffinity: {}\n  podLabels: {}\n  resources: {}\n"})})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"kubectl rook-ceph ceph dashboard set-jwt-token-ttl 86400\n"})}),"\n",(0,s.jsx)(n.h2,{id:"prometheus",children:"Prometheus"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://rook.io/docs/rook/latest/Storage-Configuration/Monitoring/ceph-monitoring/",children:"https://rook.io/docs/rook/latest/Storage-Configuration/Monitoring/ceph-monitoring/"})}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"prometheus-\uc0dd\uc131",children:"Prometheus \uc0dd\uc131"}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsx)(n.p,{children:"Prometheus\uc758 volume\uc73c\ub85c Ceph\uc744 \uc0ac\uc6a9\ud558\ub294 \uacbd\uc6b0, Ceph\uc5d0 \ubb38\uc81c\uac00 \uc0dd\uaca8 \ud574\ub2f9 PV \uc811\uadfc\uc774 \uc548\ub418\uba74 Prometheus\ub3c4 \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud569\ub2c8\ub2e4."})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/mlops/mlops/monitoring/prometheus/crd/prometheus",children:"Prometheus CRD"})}),"\n",(0,s.jsx)(n.h3,{id:"servicemonitor",children:"ServiceMonitor"}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"MGR\uc758 prometheus \ubaa8\ub4c8: \ub370\ubaac\ub4e4\uc758 \uc131\ub2a5 counter\ub97c \uc81c\uc678\ud55c \ubaa8\ub4e0 metrics\uc744 \ub178\ucd9c\uc2dc\ud0b5\ub2c8\ub2e4."}),"\n",(0,s.jsx)(n.li,{children:"Ceph exporter: \ub370\ubaac\ub4e4\uc758 \uc131\ub2a5 counter\ub97c \ub178\ucd9c\uc2dc\ud0b5\ub2c8\ub2e4."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"apiVersion: monitoring.coreos.com/v1\nkind: ServiceMonitor\nmetadata:\n  name: rook-ceph-mgr\n  namespace: rook-ceph\n  labels:\n    loliot.net/prometheus: rook-ceph\nspec:\n  namespaceSelector:\n    matchNames:\n      - rook-ceph\n  selector:\n    matchLabels:\n      app: rook-ceph-mgr\n      rook_cluster: rook-ceph\n  endpoints:\n    - port: http-metrics\n      path: /metrics\n      interval: 10s\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"apiVersion: monitoring.coreos.com/v1\nkind: ServiceMonitor\nmetadata:\n  name: rook-ceph-exporter\n  namespace: rook-ceph\n  labels:\n    loliot.net/prometheus: rook-ceph\nspec:\n  namespaceSelector:\n    matchNames:\n      - rook-ceph\n  selector:\n    matchLabels:\n      app: rook-ceph-exporter\n      rook_cluster: rook-ceph\n  endpoints:\n    - port: ceph-exporter-http-metrics\n      path: /metrics\n      interval: 10s\n"})}),"\n",(0,s.jsx)(n.h3,{id:"dashboard-\uc124\uc815",children:"Dashboard \uc124\uc815"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://rook.github.io/docs/rook/latest/CRDs/Cluster/ceph-cluster-crd/",children:"https://rook.github.io/docs/rook/latest/CRDs/Cluster/ceph-cluster-crd/"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:'title="rook-ceph-values.yaml"',children:"monitoring:\n  enabled: false\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"monitoring"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"enabled"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"operator\uac00 \uc18d\ud55c namespace\uc758 ServiceMonitor\ub97c CRUD\ud560 \uc218 \uc788\ub294 Role\uc744 \uc0dd\uc131\ud558\uace0 \ubc14\uc778\ub529\ud569\ub2c8\ub2e4."}),"\n",(0,s.jsx)(n.li,{children:"ServiceMonitor\ub97c \uc9c1\uc811 \uc81c\uc5b4\ud558\ub824\ub294 \uacbd\uc6b0 false\ub85c \uc124\uc815\ud569\ub2c8\ub2e4."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"apiVersion: ceph.rook.io/v1\nkind: CephCluster\nspec:\n  mgr:\n    modules:\n      - name: prometheus\n        enabled: true\n\n  dashboard:\n    prometheusEndpoint: http://prometheus-operated:9090\n    prometheusEndpointSSLVerify: false\n\n  monitoring:\n    enabled: false\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"monitoring"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"enabled"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"cluster\uac00 \uc18d\ud55c namespace\uc758 ServiceMonitor\ub97c CRUD\ud560 \uc218 \uc788\ub294 Role\uc744 \uc0dd\uc131\ud558\uace0 \ubc14\uc778\ub529\ud569\ub2c8\ub2e4."}),"\n",(0,s.jsx)(n.li,{children:"ServiceMonitor\ub97c \uc9c1\uc811 \uc81c\uc5b4\ud558\ub824\ub294 \uacbd\uc6b0 false\ub85c \uc124\uc815\ud569\ub2c8\ub2e4."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>l,x:()=>t});var r=o(96540);const s={},i=r.createContext(s);function l(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);