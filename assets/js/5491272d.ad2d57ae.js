(self.webpackChunkwiki_loliot_net=self.webpackChunkwiki_loliot_net||[]).push([[5521],{16145:(e,n,s)=>{e.exports={src:{srcSet:s.p+"assets/ideal-img/thanos-with-sidecar.aefae3d.750.png 750w",images:[{path:s.p+"assets/ideal-img/thanos-with-sidecar.aefae3d.750.png",width:750,height:563}],src:s.p+"assets/ideal-img/thanos-with-sidecar.aefae3d.750.png",toString:function(){return s.p+"assets/ideal-img/thanos-with-sidecar.aefae3d.750.png"},placeholder:void 0,width:750,height:563},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAICAIAAABPmPnhAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAxElEQVR4nD3Py07DMBBAUf//F3VdKoGUZluJUgVo7CbgVxM79tgej1El4Gzv6rL2pxL5AIg1xBQguw2wVlYKQoyzsufP6XW4Ltpe+PeFyw/x5QOwSoTYltXNUk3SutVJs6q713ZJKTOqqYAhwi3A23XybhN8FEIAJCJiWDZw4+bvx/54Og8Q0+Fp33Wd1rqUwlojpBbWSd/64aaUtFQR60NrjaVgvXk3ij8fdvuXfpam4sNvxhIzmBjDOHLBec75f7W19gOqJOHfsTXL3QAAAABJRU5ErkJggg=="}},37505:(e,n,s)=>{"use strict";s.r(n),s.d(n,{assets:()=>h,contentTitle:()=>r,default:()=>m,frontMatter:()=>l,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"mlops/mlops/monitoring/prometheus/thanos","title":"Thanos","description":"Thanos","source":"@site/docs/mlops/mlops/monitoring/prometheus/thanos.mdx","sourceDirName":"mlops/mlops/monitoring/prometheus","slug":"/mlops/mlops/monitoring/prometheus/thanos","permalink":"/docs/mlops/mlops/monitoring/prometheus/thanos","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedAt":1731596630000,"frontMatter":{"id":"thanos","title":"Thanos","sidebar_label":"Thanos","description":"Thanos","keywords":["thanos"]},"sidebar":"mlops","previous":{"title":"kubelet","permalink":"/docs/mlops/mlops/monitoring/prometheus/kubelet"},"next":{"title":"Grafana","permalink":"/docs/mlops/mlops/monitoring/grafana/"}}');var t=s(74848),o=s(28453),i=s(89341);const l={id:"thanos",title:"Thanos",sidebar_label:"Thanos",description:"Thanos",keywords:["thanos"]},r=void 0,h={},c=[{value:"Architecture",id:"architecture",level:2},{value:"\uc124\uce58",id:"\uc124\uce58",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"architecture",children:"Architecture"}),"\n",(0,t.jsx)("center",{children:(0,t.jsx)(i.A,{img:s(16145),width:750})}),"\n",(0,t.jsx)("center",{children:"Thanos with Sidecar"}),"\n",(0,t.jsx)("center",{children:(0,t.jsx)(n.a,{href:"https://github.com/thanos-io/thanos",children:"https://github.com/thanos-io/thanos"})}),"\n",(0,t.jsx)(n.h2,{id:"\uc124\uce58",children:"\uc124\uce58"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"helm repo add bitnami https://charts.bitnami.com/bitnami\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"helm repo update bitnami \\\n&& helm search repo bitnami/thanos -l | head -n 10\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"helm pull bitnami/thanos \\\n    --version 12.10.1\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"helm show values thanos-12.10.1.tgz \\\n    > thanos-values.yaml\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:'title="thanos-values.yaml"',children:"commonLabels: {}\n\nobjstoreConfig: |\n  type: S3\n  prefix: thanos\n  config:\n    endpoint: s3.ap-northeast-2.amazonaws.com\n    region: ap-northeast-2\n    bucket: <bucketName>\n\nquery:\n  enabled: true\n  stores:\n    - prometheus-operated.monitoring.svc:10901\n\nqueryFrontend:\n  enabled: true\n\nbucketweb:\n  enabled: false\n\ncompactor:\n  enabled: true\n\nstoregateway:\n  enabled: true\n\nruler:\n  enabled: false\n\nreceive:\n  enabled: false\n\nreceiveDistributor:\n  enabled: false\n\nmetrics:\n  enabled: false\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"helm template thanos thanos-12.10.1.tgz \\\n    -n monitoring \\\n    -f thanos-values.yaml \\\n    > thanos.yaml\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"helm upgrade thanos thanos-12.10.1.tgz \\\n    --install \\\n    --history-max 5 \\\n    -n monitoring \\\n    -f thanos-values.yaml\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Prometheus\uc5d0 Thanos Sidecar\ub97c \ucd94\uac00\ud558\uc5ec \ubc30\ud3ec\ud569\ub2c8\ub2e4."}),"\n",(0,t.jsxs)(n.li,{children:["\ubc30\ud3ec\ub41c Prometheus \uc11c\ube44\uc2a4\ub97c ",(0,t.jsx)(n.code,{children:"query.stores"}),"\uc5d0 \ucd94\uac00\ud569\ub2c8\ub2e4."]}),"\n",(0,t.jsxs)(n.li,{children:["Grafana\uc5d0 ",(0,t.jsx)(n.code,{children:"http://thanos-query.monitoring.svc:9090"}),"\uc744 \ub370\uc774\ud130 \uc18c\uc2a4\ub85c \ucd94\uac00\ud569\ub2c8\ub2e4."]}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}}}]);