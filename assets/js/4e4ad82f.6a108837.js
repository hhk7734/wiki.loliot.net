"use strict";(self.webpackChunkwiki_loliot_net=self.webpackChunkwiki_loliot_net||[]).push([[20099],{6254:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>a});const o=JSON.parse('{"id":"mlops/storage/ceph/cluster","title":"Rook Ceph Cluster \uc0dd\uc131\ud558\uae30","description":"Rook Ceph Cluster \uc0dd\uc131\ud558\uae30","source":"@site/docs/mlops/storage/ceph/cluster.mdx","sourceDirName":"mlops/storage/ceph","slug":"/mlops/storage/ceph/cluster","permalink":"/docs/mlops/storage/ceph/cluster","draft":false,"unlisted":false,"editUrl":"https://github.com/hhk7734/wiki/tree/main/docs/mlops/storage/ceph/cluster.mdx","tags":[],"version":"current","lastUpdatedAt":1735233432000,"frontMatter":{"id":"cluster","title":"Rook Ceph Cluster \uc0dd\uc131\ud558\uae30","sidebar_label":"Rook Ceph Cluster","description":"Rook Ceph Cluster \uc0dd\uc131\ud558\uae30","keywords":["rook","ceph","cluster"]},"sidebar":"storage","previous":{"title":"Rook Ceph","permalink":"/docs/mlops/storage/ceph/rook-ceph"},"next":{"title":"Monitoring","permalink":"/docs/mlops/storage/ceph/monitoring"}}');var t=s(74848),r=s(28453);const l={id:"cluster",title:"Rook Ceph Cluster \uc0dd\uc131\ud558\uae30",sidebar_label:"Rook Ceph Cluster",description:"Rook Ceph Cluster \uc0dd\uc131\ud558\uae30",keywords:["rook","ceph","cluster"]},i=void 0,c={},a=[{value:"CephCluster \uc0dd\uc131",id:"cephcluster-\uc0dd\uc131",level:2},{value:"CephCluster \uc0ad\uc81c",id:"cephcluster-\uc0ad\uc81c",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"cephcluster-\uc0dd\uc131",children:"CephCluster \uc0dd\uc131"}),"\n",(0,t.jsx)(n.admonition,{title:"Reference",type:"info",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://rook.io/docs/rook/latest-release/CRDs/Cluster/ceph-cluster-crd/",children:"Rook / CephCluster CRD"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/mlops/storage/ceph/osd",children:"Disk \uc900\ube44"})}),"\n"]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'apiVersion: ceph.rook.io/v1\nkind: CephCluster\nmetadata:\n  name: rook-ceph\n  namespace: rook-ceph\nspec:\n  cephVersion:\n    image: quay.io/ceph/ceph:v18.2.4\n  cleanupPolicy:\n    allowUninstallWithVolumes: false\n    confirmation: ""\n    sanitizeDisks:\n      dataSource: zero\n      iteration: 1\n      method: quick\n  dashboard:\n    enabled: true\n  dataDirHostPath: /var/lib/rook\n  disruptionManagement:\n    managePodBudgets: true\n    osdMaintenanceTimeout: 30\n    pgHealthCheckTimeout: 0\n  healthCheck:\n    daemonHealth:\n      mon:\n        disabled: false\n        interval: 45s\n      osd:\n        disabled: false\n        interval: 60s\n      status:\n        disabled: false\n        interval: 60s\n  logCollector:\n    enabled: true\n    maxLogSize: 500M\n    periodicity: daily\n  mgr:\n    count: 2\n  mon:\n    count: 3\n  placement:\n    all:\n      tolerations: []\n  priorityClassNames:\n    mgr: system-cluster-critical\n    mon: system-node-critical\n    osd: system-node-critical\n  resources:\n    cleanup:\n      limits:\n        memory: 1Gi\n      requests:\n        memory: 100Mi\n    crashcollector:\n      limits:\n        memory: 60Mi\n      requests:\n        memory: 60Mi\n    exporter:\n      limits:\n        memory: 128Mi\n      requests:\n        memory: 50Mi\n    logcollector:\n      limits:\n        memory: 1Gi\n      requests:\n        memory: 100Mi\n    mgr:\n      limits:\n        memory: 1Gi\n      requests:\n        memory: 512Mi\n    mgr-sidecar:\n      limits:\n        memory: 100Mi\n      requests:\n        memory: 40Mi\n    mon:\n      limits:\n        memory: 2Gi\n      requests:\n        memory: 1Gi\n    osd:\n      limits:\n        memory: 4Gi\n      requests:\n        memory: 4Gi\n    prepareosd:\n      requests:\n        memory: 50Mi\n  storage:\n    nodes:\n      - name: ip-192-168-0-11\n        devices:\n          - name: /dev/vg1/lv1\n    useAllDevices: false\n    useAllNodes: false\n'})}),"\n",(0,t.jsx)(n.h2,{id:"cephcluster-\uc0ad\uc81c",children:"CephCluster \uc0ad\uc81c"}),"\n",(0,t.jsx)(n.admonition,{title:"Reference",type:"info",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://rook.io/docs/rook/latest-release/Getting-Started/ceph-teardown/",children:"Rook / Cleanup"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://rook.io/docs/rook/latest-release/CRDs/Cluster/ceph-cluster-crd/#cleanup-policy",children:"Rook / CehpCluster CRD / Cleanup Policy"})}),"\n"]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'kubectl patch cephcluster rook-ceph \\\n    -n rook-ceph \\\n    --type merge \\\n    -p \'{"spec":{"cleanupPolicy":{"confirmation":"yes-really-destroy-data"}}}\'\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"kubectl delete cephcluster rook-ceph -n rook-ceph\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Cluster \uc6b4\uc601\uc5d0 \uc0ac\uc6a9\ub41c Node\uc5d0 \uc811\uc18d\ud558\uc5ec ",(0,t.jsx)(n.code,{children:"/var/lib/rook"})," \ub514\ub809\ud1a0\ub9ac\ub97c \uc815\ub9ac\ud569\ub2c8\ub2e4."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"- name: remove /var/lib/rook\n  ansible.builtin.file:\n    path: /var/lib/rook\n    state: absent\n"})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>i});var o=s(96540);const t={},r=o.createContext(t);function l(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);