"use strict";(self.webpackChunkwiki_loliot_net=self.webpackChunkwiki_loliot_net||[]).push([[20099],{6254:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"mlops/storage/ceph/cluster","title":"Rook Ceph Cluster \uc0dd\uc131\ud558\uae30","description":"Rook Ceph Cluster \uc0dd\uc131\ud558\uae30","source":"@site/docs/mlops/storage/ceph/cluster.mdx","sourceDirName":"mlops/storage/ceph","slug":"/mlops/storage/ceph/cluster","permalink":"/docs/mlops/storage/ceph/cluster","draft":false,"unlisted":false,"editUrl":"https://github.com/hhk7734/wiki/tree/main/docs/mlops/storage/ceph/cluster.mdx","tags":[],"version":"current","lastUpdatedAt":1735752184000,"frontMatter":{"id":"cluster","title":"Rook Ceph Cluster \uc0dd\uc131\ud558\uae30","sidebar_label":"Rook Ceph Cluster","description":"Rook Ceph Cluster \uc0dd\uc131\ud558\uae30","keywords":["rook","ceph","cluster"]},"sidebar":"storage","previous":{"title":"Rook Ceph","permalink":"/docs/mlops/storage/ceph/rook-ceph"},"next":{"title":"Monitoring","permalink":"/docs/mlops/storage/ceph/monitoring"}}');var r=s(74848),l=s(28453);const i={id:"cluster",title:"Rook Ceph Cluster \uc0dd\uc131\ud558\uae30",sidebar_label:"Rook Ceph Cluster",description:"Rook Ceph Cluster \uc0dd\uc131\ud558\uae30",keywords:["rook","ceph","cluster"]},c=void 0,t={},d=[{value:"CephCluster \uc0dd\uc131",id:"cephcluster-\uc0dd\uc131",level:2},{value:"cephConfig",id:"cephconfig",level:3},{value:"CephCluster \uc0ad\uc81c",id:"cephcluster-\uc0ad\uc81c",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"cephcluster-\uc0dd\uc131",children:"CephCluster \uc0dd\uc131"}),"\n",(0,r.jsx)(n.admonition,{title:"Reference",type:"info",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://rook.io/docs/rook/latest-release/CRDs/Cluster/ceph-cluster-crd/",children:"Rook / CephCluster CRD"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/mlops/storage/ceph/osd",children:"Disk \uc900\ube44"})}),"\n"]})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'apiVersion: ceph.rook.io/v1\nkind: CephCluster\nmetadata:\n  name: rook-ceph\n  namespace: rook-ceph\nspec:\n  cephVersion:\n    image: quay.io/ceph/ceph:v18.2.4\n  cleanupPolicy:\n    allowUninstallWithVolumes: false\n    confirmation: ""\n    sanitizeDisks:\n      dataSource: zero\n      iteration: 1\n      method: quick\n  dashboard:\n    enabled: true\n  dataDirHostPath: /var/lib/rook\n  disruptionManagement:\n    managePodBudgets: true\n    osdMaintenanceTimeout: 30\n    pgHealthCheckTimeout: 0\n  healthCheck:\n    daemonHealth:\n      mon:\n        disabled: false\n        interval: 45s\n      osd:\n        disabled: false\n        interval: 60s\n      status:\n        disabled: false\n        interval: 60s\n  logCollector:\n    enabled: true\n    maxLogSize: 500M\n    periodicity: daily\n  mgr:\n    count: 2\n  mon:\n    count: 3\n  placement:\n    all:\n      tolerations: []\n  priorityClassNames:\n    mgr: system-cluster-critical\n    mon: system-node-critical\n    osd: system-node-critical\n  resources:\n    cleanup:\n      limits:\n        memory: 1Gi\n      requests:\n        memory: 100Mi\n    crashcollector:\n      limits:\n        memory: 60Mi\n      requests:\n        memory: 60Mi\n    exporter:\n      limits:\n        memory: 128Mi\n      requests:\n        memory: 50Mi\n    logcollector:\n      limits:\n        memory: 1Gi\n      requests:\n        memory: 100Mi\n    mgr:\n      limits:\n        memory: 1Gi\n      requests:\n        memory: 512Mi\n    mgr-sidecar:\n      limits:\n        memory: 100Mi\n      requests:\n        memory: 40Mi\n    mon:\n      limits:\n        memory: 2Gi\n      requests:\n        memory: 1Gi\n    prepareosd:\n      requests:\n        memory: 50Mi\n  storage:\n    nodes:\n      - name: ip-192-168-0-11\n        devices:\n          - name: /dev/vg1/lv1\n    useAllDevices: false\n    useAllNodes: false\n'})}),"\n",(0,r.jsx)(n.h3,{id:"cephconfig",children:"cephConfig"}),"\n",(0,r.jsx)(n.admonition,{title:"Reference",type:"info",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://rook.io/docs/rook/latest-release/CRDs/Cluster/ceph-cluster-crd/#ceph-config",children:"Rook / CephCluster CRD # Ceph Config"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://docs.ceph.com/en/reef/rados/configuration/ceph-conf/",children:"Rook / Configuring Ceph"})}),"\n"]})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"apiVersion: ceph.rook.io/v1\nkind: CephCluster\nspec:\n  cephConfig:\n    <section>:\n      <key>: <value>\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"cephConfig"}),"\ub294 MON\uc774 \uc2e4\ud589\ub41c \ud6c4 \uc801\uc6a9\ub429\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"<section>"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"global"}),", ",(0,r.jsx)(n.code,{children:"mon"}),", ",(0,r.jsx)(n.code,{children:"mgr"}),", ",(0,r.jsx)(n.code,{children:"osd"}),", ",(0,r.jsx)(n.code,{children:"mds"}),", ",(0,r.jsx)(n.code,{children:"client"})," \ub4f1"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"osd.<osdID>"}),", ",(0,r.jsx)(n.code,{children:"mon.<monName>"})," \ub4f1 \ud2b9\uc815 Daemon\uc744 \uc9c0\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(n.li,{children:["\uc635\uc158\uc774 \uc911\ubcf5\ub418\ub294 \uacbd\uc6b0 \ubc94\uc704\uac00 \uc881\uc740 \uac83\uc774 \uc801\uc6a9\ub429\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 ",(0,r.jsx)(n.code,{children:"global"}),", ",(0,r.jsx)(n.code,{children:"osd"}),", ",(0,r.jsx)(n.code,{children:"osd.1"}),"\uc5d0 \uc911\ubcf5 \uc635\uc158\uc774 \uc788\ub294 \uacbd\uc6b0 ",(0,r.jsx)(n.code,{children:"osd.1"}),"\uc774 \uc801\uc6a9\ub429\ub2c8\ub2e4."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"kubectl rook-ceph ceph config dump"}),": MON \uc124\uc815 DB\ub97c \ucd9c\ub825\ud569\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"kubectl rook-ceph ceph config get <section> [<option>]"}),": MON \uc124\uc815 DB\ub098 \ucef4\ud30c\uc77c \uc2dc \uacb0\uc815\ub41c \uae30\ubcf8 \uac12\uc744 \ucd9c\ub825\ud569\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"kubectl rook-ceph ceph config show <section>"}),": \uc2e4\ud589 \uc911\uc778 \ub370\ubaac\uc758 \uc124\uc815\uc744 \ucd9c\ub825\ud569\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"cephcluster-\uc0ad\uc81c",children:"CephCluster \uc0ad\uc81c"}),"\n",(0,r.jsx)(n.admonition,{title:"Reference",type:"info",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://rook.io/docs/rook/latest-release/Getting-Started/ceph-teardown/",children:"Rook / Cleanup"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://rook.io/docs/rook/latest-release/CRDs/Cluster/ceph-cluster-crd/#cleanup-policy",children:"Rook / CehpCluster CRD / Cleanup Policy"})}),"\n"]})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'kubectl patch cephcluster rook-ceph \\\n    -n rook-ceph \\\n    --type merge \\\n    -p \'{"spec":{"cleanupPolicy":{"confirmation":"yes-really-destroy-data"}}}\'\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"kubectl delete cephcluster rook-ceph -n rook-ceph\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Cluster \uc6b4\uc601\uc5d0 \uc0ac\uc6a9\ub41c Node\uc5d0 \uc811\uc18d\ud558\uc5ec ",(0,r.jsx)(n.code,{children:"/var/lib/rook"})," \ub514\ub809\ud1a0\ub9ac\ub97c \uc815\ub9ac\ud569\ub2c8\ub2e4."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"- name: remove /var/lib/rook\n  ansible.builtin.file:\n    path: /var/lib/rook\n    state: absent\n"})})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>c});var o=s(96540);const r={},l=o.createContext(r);function i(e){const n=o.useContext(l);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(l.Provider,{value:n},e.children)}}}]);