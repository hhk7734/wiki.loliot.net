"use strict";(self.webpackChunkwiki_loliot_net=self.webpackChunkwiki_loliot_net||[]).push([[63631],{71818:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var l=t(74848),o=t(28453);const i={id:"collector",title:"\ub85c\uadf8 \uc218\uc9d1\uae30\uc5d0\uc11c Loki\ub85c \ub85c\uadf8 \uc804\uc1a1\ud558\uae30",sidebar_label:"\ub85c\uadf8 \uc218\uc9d1\uae30 \uc124\uc815",description:"\ub85c\uadf8 \uc218\uc9d1\uae30\uc5d0\uc11c Loki\ub85c \ub85c\uadf8 \uc804\uc1a1\ud558\uae30",keywords:["Loki","collector"]},s=void 0,r={id:"mlops/mlops/monitoring/loki/collector",title:"\ub85c\uadf8 \uc218\uc9d1\uae30\uc5d0\uc11c Loki\ub85c \ub85c\uadf8 \uc804\uc1a1\ud558\uae30",description:"\ub85c\uadf8 \uc218\uc9d1\uae30\uc5d0\uc11c Loki\ub85c \ub85c\uadf8 \uc804\uc1a1\ud558\uae30",source:"@site/docs/mlops/mlops/monitoring/loki/collector.mdx",sourceDirName:"mlops/mlops/monitoring/loki",slug:"/mlops/mlops/monitoring/loki/collector",permalink:"/docs/mlops/mlops/monitoring/loki/collector",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1729318814e3,frontMatter:{id:"collector",title:"\ub85c\uadf8 \uc218\uc9d1\uae30\uc5d0\uc11c Loki\ub85c \ub85c\uadf8 \uc804\uc1a1\ud558\uae30",sidebar_label:"\ub85c\uadf8 \uc218\uc9d1\uae30 \uc124\uc815",description:"\ub85c\uadf8 \uc218\uc9d1\uae30\uc5d0\uc11c Loki\ub85c \ub85c\uadf8 \uc804\uc1a1\ud558\uae30",keywords:["Loki","collector"]},sidebar:"mlops",previous:{title:"Label",permalink:"/docs/mlops/mlops/monitoring/loki/label"},next:{title:"Local \ubd80\ud558 \ud14c\uc2a4\ud2b8",permalink:"/docs/mlops/mlops/monitoring/k6/load-test"}},a={},c=[{value:"vector",id:"vector",level:2},{value:"Fluent Bit",id:"fluent-bit",level:2},{value:"Fluentd",id:"fluentd",level:2}];function u(n){const e={a:"a",code:"code",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,o.R)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h2,{id:"vector",children:"vector"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.a,{href:"/docs/mlops/mlops/monitoring/collector/vector/sink#loki",children:"Vector Loki Sink"})}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"fluent-bit",children:"Fluent Bit"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.a,{href:"https://docs.fluentbit.io/manual/pipeline/outputs/loki",children:"https://docs.fluentbit.io/manual/pipeline/outputs/loki"})}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-yaml",metastring:'title="fluent-bit-values.yaml"',children:'env:\n  - name: LOKI_HOST\n    value: loki-gateway.monitoring.svc\n  - name: LOKI_PORT\n    value: "80"\n\nconfig:\n  # indent\ub97c 4\uce78\uc73c\ub85c \ub9de\ucdb0\uc57c \ud569\ub2c8\ub2e4.\n  outputs: |\n    [OUTPUT]\n        name        loki\n        match       *\n        host        ${LOKI_HOST}\n        port        ${LOKI_PORT}\n        labels      job=fluent-bit\n        label_keys  $tag\n        Retry_Limit 5\n'})}),"\n",(0,l.jsx)(e.h2,{id:"fluentd",children:"Fluentd"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.a,{href:"https://grafana.com/docs/loki/latest/clients/fluentd/",children:"https://grafana.com/docs/loki/latest/clients/fluentd/"})}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-yaml",metastring:'title="fluentd-values.yaml"',children:'plugins:\n  - fluent-plugin-grafana-loki\n\nenv:\n  - name: LOKI_HOST\n    value: loki-gateway.monitoring.svc\n  - name: LOKI_PORT\n    value: "80"\n\nfileConfigs:\n  output-loki.conf: |\n    <match **>\n      @type loki\n      url "http://#{ENV[\'LOKI_HOST\']}:#{ENV[\'LOKI_PORT\']}"\n      insecure_tls true\n      line_format json\n      extra_labels {"job":"fluent-bit"}\n      <label>\n        tag $.tag\n      </label>\n      <buffer>\n        flush_at_shutdown true\n        flush_interval 5s\n        flush_thread_count 4\n        retry_max_interval 30s\n      </buffer>\n    </match>\n'})})]})}function d(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(u,{...n})}):u(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>s,x:()=>r});var l=t(96540);const o={},i=l.createContext(o);function s(n){const e=l.useContext(i);return l.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:s(n.components),l.createElement(i.Provider,{value:e},n.children)}}}]);