"use strict";(self.webpackChunkwiki_loliot_net=self.webpackChunkwiki_loliot_net||[]).push([[67498],{87210:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"mlops/monitoring/collector/fluent-bit","title":"Fluent Bit","description":"Fluent Bit","source":"@site/docs/mlops/monitoring/collector/fluent-bit.mdx","sourceDirName":"mlops/monitoring/collector","slug":"/mlops/monitoring/collector/fluent-bit","permalink":"/docs/mlops/monitoring/collector/fluent-bit","draft":false,"unlisted":false,"editUrl":"https://github.com/hhk7734/wiki/tree/main/docs/mlops/monitoring/collector/fluent-bit.mdx","tags":[],"version":"current","lastUpdatedAt":1736949978000,"frontMatter":{"id":"fluent-bit","title":"Fluent Bit","sidebar_label":"Fluent Bit","description":"Fluent Bit","keywords":["fluentbit","Fluent Bit"]},"sidebar":"monitoring","previous":{"title":"metrics-server","permalink":"/docs/mlops/monitoring/metrics-server"},"next":{"title":"Fluentd","permalink":"/docs/mlops/monitoring/collector/fluentd"}}');var i=l(74848),r=l(28453);const s={id:"fluent-bit",title:"Fluent Bit",sidebar_label:"Fluent Bit",description:"Fluent Bit",keywords:["fluentbit","Fluent Bit"]},a=void 0,o={},c=[{value:"\uc124\uce58",id:"\uc124\uce58",level:2},{value:"\uc5c5\uadf8\ub808\uc774\ub4dc",id:"\uc5c5\uadf8\ub808\uc774\ub4dc",level:2},{value:"\uc124\uc815",id:"\uc124\uc815",level:2},{value:"Format",id:"format",level:3},{value:"INPUT",id:"input",level:3},{value:"Tail",id:"tail",level:4},{value:"FILTER",id:"filter",level:3},{value:"Validating data",id:"validating-data",level:4},{value:"Grep",id:"grep",level:4},{value:"OUTPUT",id:"output",level:3},{value:"Forward",id:"forward",level:4}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"\uc124\uce58",children:"\uc124\uce58"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"helm repo add fluent https://fluent.github.io/helm-charts\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"helm repo update fluent \\\n&& helm search repo fluent/fluent-bit -l | head -n 10\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"helm show values fluent/fluent-bit \\\n  --version 0.39.0 \\\n  > fluent-bit-values.yaml\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:'title="fluent-bit-values.yaml"',children:'resources:\n  requests:\n    cpu: 10m\n    memory: 128Mi\n  limits:\n    memory: 128Mi\n\ntolerations:\n  - operator: Exists\n\nlabels: {}\n\nluaScripts:\n  # https://docs.fluentbit.io/manual/pipeline/filters/lua\n  tag.lua: |\n    function add_tag(tag, timestamp, record)\n      new_record = record\n      new_record["tag"] = tag\n      return 2, timestamp, new_record\n    end\n\nconfig:\n  # https://docs.fluentbit.io/manual/administration/configuring-fluent-bit/classic-mode/configuration-file#config_section\n  service: |\n    [SERVICE]\n        Daemon          Off\n        Flush           {{ .Values.flush }}\n        Log_Level       {{ .Values.logLevel }}\n        Parsers_File    /fluent-bit/etc/parsers.conf\n        Parsers_File    /fluent-bit/etc/conf/custom_parsers.conf\n        HTTP_Server     On\n        HTTP_Listen     0.0.0.0\n        HTTP_Port       {{ .Values.metricsPort }}\n        Health_Check    On\n        # https://docs.fluentbit.io/manual/administration/buffering-and-storage\n        storage.path    /var/log/flb-storage/\n        storage.metrics On\n\n  filters: |\n    [FILTER]\n        # log\ud0a4\uc5d0 \uc788\ub294 json \ud14d\uc2a4\ud2b8\ub97c \ud30c\uc2f1\ud558\uc5ec \ud0a4/\uac12\uc73c\ub85c \ubd84\ub9ac \ud6c4 log \ud0a4 \uc0ad\uc81c\n        Name         parser\n        Match        *\n        Parser       docker\n        Key_Name     log\n\n    [FILTER]\n        # docker parser\uac00 \uc2e4\ud328\ud55c \uacbd\uc6b0 level=warn \ucd94\uac00\n        Name modify\n        Match *\n        Condition Key_Exists log\n        Add level warn\n\n    [FILTER]\n        # fluent-bit tag\ub97c tag\ud0a4\uc758 \uac12\uc73c\ub85c \ucd94\uac00\n        Name lua\n        Match *\n        script /fluent-bit/scripts/tag.lua\n        call add_tag\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"helm template fluent-bit fluent/fluent-bit \\\n    --version 0.39.0 \\\n    -n monitoring \\\n    -f fluent-bit-values.yaml \\\n    > fluent-bit.yaml\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"helm upgrade fluent-bit fluent/fluent-bit \\\n  --install \\\n  --history-max 5 \\\n  --version 0.39.0 \\\n  -n monitoring \\\n  -f fluent-bit-values.yaml\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\uc5c5\uadf8\ub808\uc774\ub4dc",children:"\uc5c5\uadf8\ub808\uc774\ub4dc"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://docs.fluentbit.io/manual/installation/upgrade-notes",children:"https://docs.fluentbit.io/manual/installation/upgrade-notes"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\uc124\uc815",children:"\uc124\uc815"}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["Fluent Bit\uc5d0\uc11c \uc0ac\uc6a9\ud558\ub294 Regex \ud14c\uc2a4\ud2b8\ub294 ",(0,i.jsx)(n.a,{href:"https://rubular.com/",children:"https://rubular.com/"})," \uc5d0\uc11c \uac00\ub2a5\ud569\ub2c8\ub2e4."]})}),"\n",(0,i.jsx)(n.h3,{id:"format",children:"Format"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Format"}),"\uc740 \uae30\ubcf8\uc801\uc73c\ub85c ",(0,i.jsx)(n.code,{children:"out_file"}),"\uc73c\ub85c \ub370\uc774\ud130\ub294 \uc544\ub798\uc640 \uac19\uc740 \ud3ec\ub9f7\uc744 \uac16\uac8c\ub429\ub2c8\ub2e4."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'<tag>: [<time>, {"key1": "value1", "key2": "value2"}]\n'})}),"\n",(0,i.jsx)(n.h3,{id:"input",children:"INPUT"}),"\n",(0,i.jsx)(n.h4,{id:"tail",children:"Tail"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://docs.fluentbit.io/manual/pipeline/inputs/tail",children:"https://docs.fluentbit.io/manual/pipeline/inputs/tail"})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ini",children:'[INPUT]\n    Name             tail\n    # <tag>: [<time>, {"log": "<message>"}]\n    multiline.parser docker, cri\n    # /var/log/containers/<pod-name>_<pod-namespace>_<container-name>-<hash>.log\n    # * wildcard \uc0ac\uc6a9 \uac00\ub2a5\n    Path             /var/log/containers/xxx*.log\n    Exclude_Path     /var/log/containers/xxx*istio*.log\n    # \ud30c\uc77c\uc758 \uc774\ub984(\uc808\ub300 \uacbd\ub85c)\uc5d0 \uc815\uaddc\ud45c\ud604\uc2dd\uc744 \uc0ac\uc6a9\ud558\uc5ec \ud328\ud134 \ub9e4\uce6d\n    Tag_Regex        \\/(?<project>[a-z0-9][-a-z0-9]*)-(?<env>\\bdev|stag|prod\\b)(.*)_(?<namespace_name>.+)_(?<container_name>.+)-\n    Tag              <project>.<env>\n    Mem_Buf_Limit    20MB\n    storage.type     filesystem\n'})}),"\n",(0,i.jsx)(n.h3,{id:"filter",children:"FILTER"}),"\n",(0,i.jsx)(n.p,{children:"FILTER\ub294 \uc120\uc5b8\ub41c \uc21c\uc11c\ub300\ub85c \uc801\uc6a9\ub429\ub2c8\ub2e4."}),"\n",(0,i.jsx)(n.h4,{id:"validating-data",children:"Validating data"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://docs.fluentbit.io/manual/local-testing/validating-your-data-and-structure",children:"https://docs.fluentbit.io/manual/local-testing/validating-your-data-and-structure"})}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"grep",children:"Grep"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://docs.fluentbit.io/manual/pipeline/filters/grep",children:"https://docs.fluentbit.io/manual/pipeline/filters/grep"})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ini",children:"[FILTER]\n    name       grep\n    match      *\n    logical_op <or|and>\n    regex      <key|recordAccessor> <regex>\n    exclude    <key|recordAccessor> <regex>\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"logical_op <or|and>"}),": \uc5ec\ub7ec ",(0,i.jsx)(n.code,{children:"regex"}),"\ub098 ",(0,i.jsx)(n.code,{children:"exclude"}),"\ub97c \uc120\uc5b8\ud588\uc744 \ub54c \uc870\ud569\uc5d0 \uc0ac\uc6a9\ub420 \uc870\uac74\uc785\ub2c8\ub2e4."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"regex <key|recordAccessor> <regex>"}),": ",(0,i.jsx)(n.code,{children:"<key|recordAccessor>"}),"\uc5d0 \ud574\ub2f9\ud558\ub294 \uac12\uc774 ",(0,i.jsx)(n.code,{children:"<regex>"}),"\ub97c \ub9cc\uc871\ud558\uba74 \ud574\ub2f9 \ub808\ucf54\ub4dc\ub97c \ud1b5\uacfc\uc2dc\ud0b5\ub2c8\ub2e4."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"exclude <key|recordAccessor> <regex>"}),": ",(0,i.jsx)(n.code,{children:"<key|recordAccessor>"}),"\uc5d0 \ud574\ub2f9\ud558\ub294 \uac12\uc774 ",(0,i.jsx)(n.code,{children:"<regex>"}),"\ub97c \ub9cc\uc871\ud558\uba74 \ud574\ub2f9 \ub808\ucf54\ub4dc\ub97c \uac74\ub108\ub701\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"output",children:"OUTPUT"}),"\n",(0,i.jsx)(n.h4,{id:"forward",children:"Forward"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://docs.fluentbit.io/manual/pipeline/outputs/forward",children:"https://docs.fluentbit.io/manual/pipeline/outputs/forward"})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'env:\n  - name: FLUENTD_HOST\n    value: "fluentd-forwarder.monitoring.svc"\n  - name: FLUENTD_PORT\n    value: "24224"\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ini",children:"[OUTPUT]\n    Name        forward\n    Match       *\n    Host        ${FLUENTD_HOST}\n    Port        ${FLUENTD_PORT}\n    Retry_Limit 5\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,l)=>{l.d(n,{R:()=>s,x:()=>a});var t=l(96540);const i={},r=t.createContext(i);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);