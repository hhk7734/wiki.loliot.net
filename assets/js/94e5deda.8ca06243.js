"use strict";(self.webpackChunkwiki_loliot_net=self.webpackChunkwiki_loliot_net||[]).push([[31502],{68728:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>i,contentTitle:()=>t,default:()=>h,frontMatter:()=>d,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"mlops/monitoring/grafana/dashboard","title":"Grafana Dashboard","description":"Grafana Dashboard","source":"@site/docs/mlops/monitoring/grafana/dashboard.mdx","sourceDirName":"mlops/monitoring/grafana","slug":"/mlops/monitoring/grafana/dashboard","permalink":"/docs/mlops/monitoring/grafana/dashboard","draft":false,"unlisted":false,"editUrl":"https://github.com/hhk7734/wiki/tree/main/docs/mlops/monitoring/grafana/dashboard.mdx","tags":[],"version":"current","lastUpdatedAt":1736949978000,"frontMatter":{"id":"dashboard","title":"Grafana Dashboard","sidebar_label":"Dashboard","description":"Grafana Dashboard","keywords":["Grafana","Dashboard"]},"sidebar":"monitoring","previous":{"title":"Data Source","permalink":"/docs/mlops/monitoring/grafana/datasource"},"next":{"title":"Alert","permalink":"/docs/mlops/monitoring/grafana/alert"}}');var s=n(74848),l=n(28453);const d={id:"dashboard",title:"Grafana Dashboard",sidebar_label:"Dashboard",description:"Grafana Dashboard",keywords:["Grafana","Dashboard"]},t=void 0,i={},o=[{value:"Dashboard",id:"dashboard",level:2},{value:"Variables",id:"variables",level:2},{value:"Query",id:"query",level:3}];function c(e){const a={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.h2,{id:"dashboard",children:"Dashboard"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-yaml",metastring:'title="grafana-values.yaml"',children:'dashboardProviders:\n  dashboardproviders.yaml:\n    apiVersion: 1\n    providers:\n      - name: <provider>\n        folder: ""\n        type: file\n        allowUiUpdates: false\n        options:\n          path: /var/lib/grafana/dashboards/<provider>\n\ndashboards:\n  <provider>:\n    <dashboard>: {}\n'})}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.code,{children:"dashboardProviders"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.code,{children:"dashboardproviders.yaml"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.code,{children:"providers: []"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:(0,s.jsx)(a.code,{children:"allowUiUpdates: false"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.code,{children:"dashboards"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.code,{children:"<provider>"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.code,{children:"<dashboard>"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:(0,s.jsx)(a.code,{children:"url: <url>"})}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.code,{children:"gnetId: <gnetId>"}),": ",(0,s.jsx)(a.a,{href:"https://grafana.com/grafana/dashboards/",children:"https://grafana.com/grafana/dashboards/"})," \uc5d0 \ub4f1\ub85d\ub41c ID\uc785\ub2c8\ub2e4."]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.code,{children:"revision: 1"}),": ",(0,s.jsx)(a.a,{href:"https://grafana.com/grafana/dashboards/",children:"https://grafana.com/grafana/dashboards/"})," \uc5d0 \ub4f1\ub85d\ub41c \ubc84\uc804\uc785\ub2c8\ub2e4."]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.code,{children:"datasource: <string|[]>"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:["array\uc77c \uacbd\uc6b0","\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:(0,s.jsx)(a.code,{children:"name: <name>"})}),"\n",(0,s.jsx)(a.li,{children:(0,s.jsx)(a.code,{children:"value: <value>"})}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.code,{children:"s/${<name>}/<value>/g"}),"\ub85c JSON \ub0b4 \ubcc0\uc218\ub97c \uce58\ud658\ud569\ub2c8\ub2e4"]}),"\n",(0,s.jsxs)(a.li,{children:["Ee) ",(0,s.jsx)(a.code,{children:"datasource: [{name: DS_PROMETHEUS, value: <prometheusUID>}]"})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(a.h2,{id:"variables",children:"Variables"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:(0,s.jsx)(a.a,{href:"https://grafana.com/docs/grafana/latest/dashboards/variables/add-template-variables/",children:"https://grafana.com/docs/grafana/latest/dashboards/variables/add-template-variables/"})}),"\n"]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:"Dashbaord -> Settings -> Variables"}),"\n",(0,s.jsxs)(a.li,{children:["\uc0ac\uc6a9\ud560 \ub54c\ub294 ",(0,s.jsx)(a.code,{children:"$<name>"}),", ",(0,s.jsx)(a.code,{children:"${<name>}"}),", ",(0,s.jsx)(a.code,{children:"${<name>:<format>}"})," \ud615\ud0dc\ub85c \uc0ac\uc6a9\ud569\ub2c8\ub2e4"]}),"\n"]}),"\n",(0,s.jsx)(a.h3,{id:"query",children:"Query"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-json",children:'{\n\t"templating": {\n\t\t"list": [\n\t\t\t{\n\t\t\t\t"type": "query",\n\t\t\t\t"name": "<name>",\n\t\t\t\t"label": "<label>",\n\t\t\t\t"description": "<description>",\n\t\t\t\t"datasource": {\n\t\t\t\t\t"type": "prometheus",\n\t\t\t\t\t"uid": "<uid>"\n\t\t\t\t},\n\t\t\t\t"query": {\n\t\t\t\t\t"query": "<query>",\n\t\t\t\t\t"refId": "<refId>"\n\t\t\t\t},\n\t\t\t\t"regex": "<regex>",\n\t\t\t\t"refresh": 1, // 1: on dashboard load, 2: on time range change\n\t\t\t\t"allValue": "<allValue>"\n\t\t\t}\n\t\t]\n\t}\n}\n'})}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:"label: \ub300\uc2dc\ubcf4\ub4dc\uc5d0 \ud45c\uc2dc\ub420 \uc774\ub984, \uc120\uc5b8\ud558\uc9c0 \uc54a\uc73c\uba74 name\uc774 \ud45c\uc2dc\ub429\ub2c8\ub2e4"}),"\n",(0,s.jsxs)(a.li,{children:["query","\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:["query","\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:["datasource\uac00 prometheus\uc778 \uacbd\uc6b0","\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:(0,s.jsx)(a.a,{href:"https://grafana.com/docs/grafana/latest/datasources/prometheus/template-variables/",children:"https://grafana.com/docs/grafana/latest/datasources/prometheus/template-variables/"})}),"\n",(0,s.jsx)(a.li,{children:(0,s.jsx)(a.a,{href:"https://prometheus.io/docs/prometheus/latest/querying/api/",children:"https://prometheus.io/docs/prometheus/latest/querying/api/"})}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.code,{children:"label_names()"}),": ",(0,s.jsx)(a.code,{children:"/api/v1/labels"})]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.code,{children:"label_values(<label>)"}),": ",(0,s.jsx)(a.code,{children:"/api/v1/label/<label>/values"})]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.code,{children:"label_values(<metric>, <label>)"}),": ",(0,s.jsx)(a.code,{children:"/api/v1/series"})]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.code,{children:"metrics(<metric>)"}),": ",(0,s.jsx)(a.code,{children:"/api/v1/label/__name__/values?match[]=<metric>"})]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.code,{children:"query_result(<query>)"}),": ",(0,s.jsx)(a.code,{children:"/api/v1/query?query=<query>"})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(a.li,{children:["allValue: ",(0,s.jsx)(a.code,{children:"ALL"}),"\uc744 \uc120\ud0dd\ud588\uc744 \ub54c \uc0ac\uc6a9\ub420 \uac12"]}),"\n"]})]})}function h(e={}){const{wrapper:a}={...(0,l.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,a,n)=>{n.d(a,{R:()=>d,x:()=>t});var r=n(96540);const s={},l=r.createContext(s);function d(e){const a=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function t(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(l.Provider,{value:a},e.children)}}}]);