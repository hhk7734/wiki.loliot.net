"use strict";(self.webpackChunkwiki_loliot_net=self.webpackChunkwiki_loliot_net||[]).push([[54165],{76487:(e,n,r)=>{r.d(n,{A:()=>a});r(96540);var l=r(34164);const s={tabItem:"tabItem_Ymn6"};var t=r(74848);function a(e){let{children:n,hidden:r,className:a}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,l.A)(s.tabItem,a),hidden:r,children:n})}},87119:(e,n,r)=>{r.d(n,{A:()=>j});var l=r(96540),s=r(34164),t=r(53622),a=r(56347),o=r(68963),c=r(9579),i=r(52808),u=r(45054);function d(e){return l.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:r}=e;return(0,l.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:r,attributes:l,default:s}}=e;return{value:n,label:r,attributes:l,default:s}}))}(r);return function(e){const n=(0,i.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function h(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:r}=e;const s=(0,a.W6)(),t=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,c.aZ)(t),(0,l.useCallback)((e=>{if(!t)return;const n=new URLSearchParams(s.location.search);n.set(t,e),s.replace({...s.location,search:n.toString()})}),[t,s])]}function f(e){const{defaultValue:n,queryString:r=!1,groupId:s}=e,t=p(e),[a,c]=(0,l.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const l=r.find((e=>e.default))??r[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:n,tabValues:t}))),[i,d]=m({queryString:r,groupId:s}),[f,g]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,t]=(0,u.Dv)(r);return[s,(0,l.useCallback)((e=>{r&&t.set(e)}),[r,t])]}({groupId:s}),v=(()=>{const e=i??f;return h({value:e,tabValues:t})?e:null})();(0,o.A)((()=>{v&&c(v)}),[v]);return{selectedValue:a,selectValue:(0,l.useCallback)((e=>{if(!h({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),g(e)}),[d,g,t]),tabValues:t}}var g=r(94753);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=r(74848);function k(e){let{className:n,block:r,selectedValue:l,selectValue:a,tabValues:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:i}=(0,t.a_)(),u=e=>{const n=e.currentTarget,r=c.indexOf(n),s=o[r].value;s!==l&&(i(n),a(s))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;n=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;n=c[r]??c[c.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":r},n),children:o.map((e=>{let{value:n,label:r,attributes:t}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:l===n?0:-1,"aria-selected":l===n,ref:e=>c.push(e),onKeyDown:d,onClick:u,...t,className:(0,s.A)("tabs__item",v.tabItem,t?.className,{"tabs__item--active":l===n}),children:r??n},n)}))})}function x(e){let{lazy:n,children:r,selectedValue:t}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===t));return e?(0,l.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function y(e){const n=f(e);return(0,b.jsxs)("div",{className:(0,s.A)("tabs-container",v.tabList),children:[(0,b.jsx)(k,{...n,...e}),(0,b.jsx)(x,{...n,...e})]})}function j(e){const n=(0,g.A)();return(0,b.jsx)(y,{...e,children:d(e.children)},String(n))}},55156:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>l,toc:()=>d});const l=JSON.parse('{"id":"mlops/mlops/storage/ceph/cluster","title":"Ceph Cluster","description":"Ceph Cluster","source":"@site/docs/mlops/mlops/storage/ceph/cluster.mdx","sourceDirName":"mlops/mlops/storage/ceph","slug":"/mlops/mlops/storage/ceph/cluster","permalink":"/docs/mlops/mlops/storage/ceph/cluster","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedAt":1731420706000,"frontMatter":{"id":"cluster","title":"Ceph Cluster","sidebar_label":"Cluster","description":"Ceph Cluster","keywords":["ceph","cluster"]},"sidebar":"mlops","previous":{"title":"Rook Ceph","permalink":"/docs/mlops/mlops/storage/ceph/rook-ceph"},"next":{"title":"Monitoring","permalink":"/docs/mlops/mlops/storage/ceph/monitoring"}}');var s=r(74848),t=r(28453),a=r(87119),o=r(76487);const c={id:"cluster",title:"Ceph Cluster",sidebar_label:"Cluster",description:"Ceph Cluster",keywords:["ceph","cluster"]},i=void 0,u={},d=[{value:"\uc124\uce58",id:"\uc124\uce58",level:2},{value:"\uc0ad\uc81c",id:"\uc0ad\uc81c",level:2}];function p(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\uc124\uce58",children:"\uc124\uce58"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/mlops/mlops/storage/ceph/osd",children:"Disk \uc900\ube44"})}),"\n"]}),"\n",(0,s.jsxs)(a.A,{defaultValue:"crd",values:[{label:"CRD",value:"crd"},{label:"Helm",value:"helm"}],children:[(0,s.jsxs)(o.A,{value:"crd",children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://rook.io/docs/rook/latest-release/CRDs/Cluster/ceph-cluster-crd/",children:"https://rook.io/docs/rook/latest-release/CRDs/Cluster/ceph-cluster-crd/"})}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'apiVersion: ceph.rook.io/v1\nkind: CephCluster\nmetadata:\n  name: rook-ceph\n  namespace: rook-ceph\nspec:\n  monitoring:\n    enabled: false\n  cephVersion:\n    allowUnsupported: false\n    image: quay.io/ceph/ceph:v18.2.2\n  cleanupPolicy:\n    allowUninstallWithVolumes: false\n    confirmation: ""\n    sanitizeDisks:\n      dataSource: zero\n      iteration: 1\n      method: quick\n  continueUpgradeAfterChecksEvenIfNotHealthy: false\n  crashCollector:\n    disable: false\n  dashboard:\n    enabled: true\n    ssl: true\n  dataDirHostPath: /var/lib/rook\n  disruptionManagement:\n    managePodBudgets: true\n    osdMaintenanceTimeout: 30\n    pgHealthCheckTimeout: 0\n  healthCheck:\n    daemonHealth:\n      mon:\n        disabled: false\n        interval: 45s\n      osd:\n        disabled: false\n        interval: 60s\n      status:\n        disabled: false\n        interval: 60s\n    livenessProbe:\n      mgr:\n        disabled: false\n      mon:\n        disabled: false\n      osd:\n        disabled: false\n  logCollector:\n    enabled: true\n    maxLogSize: 500M\n    periodicity: daily\n  mgr:\n    allowMultiplePerNode: false\n    count: 2\n    modules:\n      - enabled: true\n        name: pg_autoscaler\n  mon:\n    allowMultiplePerNode: false\n    count: 3\n  network:\n    connections:\n      compression:\n        enabled: false\n      encryption:\n        enabled: false\n      requireMsgr2: false\n  placement:\n    all:\n      tolerations:\n        - key: loliot.net/storage\n          operator: Exists\n  priorityClassNames:\n    mgr: system-cluster-critical\n    mon: system-node-critical\n    osd: system-node-critical\n  removeOSDsIfOutAndSafeToRemove: false\n  resources:\n    cleanup:\n      limits:\n        memory: 1Gi\n      requests:\n        cpu: 500m\n        memory: 100Mi\n    crashcollector:\n      limits:\n        memory: 60Mi\n      requests:\n        cpu: 100m\n        memory: 60Mi\n    exporter:\n      limits:\n        memory: 128Mi\n      requests:\n        cpu: 50m\n        memory: 50Mi\n    logcollector:\n      limits:\n        memory: 1Gi\n      requests:\n        cpu: 100m\n        memory: 100Mi\n    mgr:\n      limits:\n        memory: 1Gi\n      requests:\n        cpu: 500m\n        memory: 512Mi\n    mgr-sidecar:\n      limits:\n        memory: 100Mi\n      requests:\n        cpu: 100m\n        memory: 40Mi\n    mon:\n      limits:\n        memory: 2Gi\n      requests:\n        cpu: 1000m\n        memory: 1Gi\n    osd:\n      limits:\n        memory: 4Gi\n      requests:\n        cpu: 1000m\n        memory: 4Gi\n    prepareosd:\n      requests:\n        cpu: 500m\n        memory: 50Mi\n  skipUpgradeChecks: false\n  storage:\n    node:\n      - devices:\n          - name: /dev/vg1/lv1\n        name: ip-192-168-0-11\n    useAllDevices: false\n    useAllNodes: false\n  waitTimeoutForHealthyOSDInMinutes: 10\n'})})]}),(0,s.jsxs)(o.A,{value:"helm",children:[(0,s.jsx)(n.p,{children:"Cluster \ucc28\ud2b8\ub294 \uc77c\ubc18\uc801\uc73c\ub85c \uc0dd\uc131\ud558\ub294 \ud074\ub7ec\uc2a4\ud130\uc758 \uad6c\uc131\uc5d0 \ub300\ud55c CR, StorageClass \ub4f1\uc744 \uc0dd\uc131\ud569\ub2c8\ub2e4."}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://rook.io/docs/rook/latest-release/Helm-Charts/operator-chart/",children:"https://rook.io/docs/rook/latest-release/Helm-Charts/operator-chart/"})}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"helm repo add rook-release https://charts.rook.io/release\n"})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"helm repo update rook-release \\\n&& helm search repo rook-release/rook-ceph-cluster -l | head -n 10\n"})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"helm pull rook-release/rook-ceph-cluster --version v1.13.7\n"})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"helm show values rook-release/rook-ceph-cluster --version v1.13.7 > rook-ceph-cluster-v1.13.7.yaml\n"})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:'title="rook-ceph-cluster-values.yaml"',children:'operatorNamespace: rook-ceph\n\ncephClusterSpec:\n  mon:\n    count: 3\n\n  mgr:\n    count: 2\n\n  placement:\n    all:\n      tolerations:\n        - key: "loliot.net/storage"\n          operator: "Exists"\n\n  resources: {}\n\n  storage:\n    useAllNodes: false\n    useAllDevices: false\n    node:\n      - name: "ip-192-168-0-11"\n        devices:\n          - name: "/dev/vg1/lv1"\n\ncephBlockPools: []\n\ncephFileSystems: []\n\ncephObjectStores: []\n'})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"helm template rook-ceph-cluster rook-ceph-cluster-v1.13.7.tgz \\\n    -n rook-ceph \\\n    -f rook-ceph-cluster-values.yaml \\\n    > rook-ceph-cluster.yaml\n"})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"helm upgrade rook-ceph-cluster rook-ceph-cluster-v1.13.7.tgz \\\n    --install \\\n    --history-max 5 \\\n    -n rook-ceph \\\n    -f rook-ceph-cluster-values.yaml\n"})})]})]}),"\n",(0,s.jsx)(n.h2,{id:"\uc0ad\uc81c",children:"\uc0ad\uc81c"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://rook.io/docs/rook/latest-release/Getting-Started/ceph-teardown/",children:"https://rook.io/docs/rook/latest-release/Getting-Started/ceph-teardown/"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://rook.io/docs/rook/latest-release/CRDs/Cluster/ceph-cluster-crd/#cleanup-policy",children:"https://rook.io/docs/rook/latest-release/CRDs/Cluster/ceph-cluster-crd/#cleanup-policy"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'kubectl patch cephcluster rook-ceph \\\n    -n rook-ceph \\\n    --type merge \\\n    -p \'{"spec":{"cleanupPolicy":{"confirmation":"yes-really-destroy-data"}}}\'\n'})}),"\n",(0,s.jsxs)(a.A,{defaultValue:"crd",values:[{label:"CRD",value:"crd"},{label:"Helm",value:"helm"}],children:[(0,s.jsx)(o.A,{value:"crd",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"kubectl delete cephcluster rook-ceph -n rook-ceph\n"})})}),(0,s.jsx)(o.A,{value:"helm",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"helm uninstall rook-ceph-cluster -n rook-ceph\n"})})})]}),"\n",(0,s.jsxs)(n.p,{children:["Cluster \uc6b4\uc601\uc5d0 \uc0ac\uc6a9\ub41c Node\uc5d0 \uc811\uc18d\ud558\uc5ec ",(0,s.jsx)(n.code,{children:"/var/lib/rook"})," \ub514\ub809\ud1a0\ub9ac\ub97c \uc815\ub9ac\ud569\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"- name: remove /var/lib/rook\n  ansible.builtin.file:\n    path: /var/lib/rook\n    state: absent\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>o});var l=r(96540);const s={},t=l.createContext(s);function a(e){const n=l.useContext(t);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),l.createElement(t.Provider,{value:n},e.children)}}}]);