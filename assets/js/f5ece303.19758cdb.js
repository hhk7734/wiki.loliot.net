"use strict";(self.webpackChunkwiki_loliot_net=self.webpackChunkwiki_loliot_net||[]).push([[18183],{67290:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"mlops/mlops/network/istio/traffic-management/virtual-service","title":"VirtualService","description":"VirtualService","source":"@site/docs/mlops/mlops/network/istio/traffic-management/virtual-service.mdx","sourceDirName":"mlops/mlops/network/istio/traffic-management","slug":"/mlops/mlops/network/istio/traffic-management/virtual-service","permalink":"/docs/mlops/mlops/network/istio/traffic-management/virtual-service","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedAt":1731770802000,"frontMatter":{"id":"virtual-service","title":"VirtualService","sidebar_label":"VirtualService","description":"VirtualService","keywords":["istio","gateway","virtualservice"]},"sidebar":"mlops","previous":{"title":"Gateway","permalink":"/docs/mlops/mlops/network/istio/traffic-management/gateway"},"next":{"title":"EnvoyFilter","permalink":"/docs/mlops/mlops/network/istio/traffic-management/envoy-filter/"}}');var r=t(74848),a=t(28453);const s={id:"virtual-service",title:"VirtualService",sidebar_label:"VirtualService",description:"VirtualService",keywords:["istio","gateway","virtualservice"]},o=void 0,l={},c=[{value:"VirtualService",id:"virtualservice",level:2},{value:"HTTP route",id:"http-route",level:2},{value:"HTTP redirect",id:"http-redirect",level:2},{value:"HTTP rewrite",id:"http-rewrite",level:2},{value:"TCP route",id:"tcp-route",level:2},{value:"CorsPolicy",id:"corspolicy",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"virtualservice",children:"VirtualService"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"VirtualService"}),"\ub294 \ud2b8\ub798\ud53d\uc758 \ub77c\uc6b0\ud305\uc744 \uc124\uc815\ud558\ub294 CRD\uc785\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://istio.io/latest/docs/reference/config/networking/virtual-service/",children:"https://istio.io/latest/docs/reference/config/networking/virtual-service/"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"http-route",children:"HTTP route"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"apiVersion: networking.istio.io/v1alpha3\nkind: VirtualService\nmetadata:\n  name: <name>\n  namespace: <namespace>\nspec:\n  hosts: # \ubaa9\uc801\uc9c0\uc758 IP|DNS \ubaa9\ub85d\uc785\ub2c8\ub2e4. \ud544\uc218\ub294 \uc544\ub2c8\uba70, `Delegate VirtualService`\uc758 \uacbd\uc6b0 \uc774 \ud544\ub4dc\ub294 \uc0dd\ub7b5\ud574\uc57c \ud569\ub2c8\ub2e4.\n    - <host>\n  gateways: # \uc774 VirtualService\uac00 \uc801\uc6a9\ub420 Gateway\n    - <gateway>\n    - <namespace>/<gateway>\n  http: # HTTP \ub77c\uc6b0\ud305 \uaddc\uce59\uc785\ub2c8\ub2e4.\n    # \uba3c\uc800 \uc124\uc815\ud55c \uaddc\uce59\uc758 \uc6b0\uc120\uc21c\uc704\uac00 \ub192\uc2b5\ub2c8\ub2e4.\n    - name: <name> # \ub514\ubc84\uae45\uc5d0 \uc0ac\uc6a9\ub418\ub294 \uc774\ub984\n      match:\n        # \uc774 \uaddc\uce59\uc744 \uc801\uc6a9\ud560 \ud2b8\ub798\ud53d\uc744 \uc120\ud0dd\ud569\ub2c8\ub2e4. uri, schema, method, headers \ub4f1\n      route:\n        - destination:\n            host: <host> # <service>.<namespace>.svc.cluster.local\n            subset: <subset> # \uba54\uc2dc \ub0b4\uc758 \uc11c\ube44\uc2a4\uc5d0\ub9cc \uc801\uc6a9\ub429\ub2c8\ub2e4.\n            port:\n              number: <port> # \uc11c\ube44\uc2a4\uc758 \ud3ec\ud2b8\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. \ub2e8\uc77c \ud3ec\ud2b8\ub9cc \ub178\ucd9c\ud558\ub294 \uacbd\uc6b0 \uc9c0\uc815\ud560 \ud544\uc694 \uc5c5\uc2b5\ub2c8\ub2e4.\n          weight: <0-100> # \ud2b8\ub798\ud53d \ube44\uc728, \ucd1d \ud569\uc774 100\uc774\uc5b4\uc57c \ud569\ub2c8\ub2e4.\n"})}),"\n",(0,r.jsx)(n.h2,{id:"http-redirect",children:"HTTP redirect"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://istio.io/latest/docs/reference/config/networking/virtual-service/#HTTPRedirect",children:"https://istio.io/latest/docs/reference/config/networking/virtual-service/#HTTPRedirect"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"apiVersion: networking.istio.io/v1beta1\nkind: VirtualService\nmetadata:\n  name: <name>\n  namespace: <namespace>\nspec:\n  hosts:\n    - <host>\n  gateways:\n    - <gateway>\n    - <namespace>/<gateway>\n  http:\n    # \uba3c\uc800 \uc124\uc815\ud55c \uaddc\uce59\uc758 \uc6b0\uc120\uc21c\uc704\uac00 \ub192\uc2b5\ub2c8\ub2e4.\n    - name: <name> # \ub514\ubc84\uae45\uc5d0 \uc0ac\uc6a9\ub418\ub294 \uc774\ub984\n      match:\n        # \uc774 \uaddc\uce59\uc744 \uc801\uc6a9\ud560 \ud2b8\ub798\ud53d\uc744 \uc120\ud0dd\ud569\ub2c8\ub2e4. uri, schema, method, headers \ub4f1\n      redirect:\n        authority: <host> # Optional\n        uri: <path> # Optional, \uc124\uc815\ud558\uba74 \uc804\uccb4 path\uac00 \ub300\uccb4\ub429\ub2c8\ub2e4\n        redirectCode: 301 # Optional, \uc124\uc815\ud558\uc9c0 \uc54a\uc73c\uba74 301\ub85c \uc124\uc815\ub429\ub2c8\ub2e4\n"})}),"\n",(0,r.jsx)(n.h2,{id:"http-rewrite",children:"HTTP rewrite"}),"\n",(0,r.jsx)(n.h2,{id:"tcp-route",children:"TCP route"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"apiVersion: networking.istio.io/v1alpha3\nkind: VirtualService\nmetadata:\n  name: <name>\n  namespace: <namespace>\nspec:\n  hosts:\n    - <host>\n  gateways:\n    - <gateway>\n    - <namespace>/<gateway>\n  tcp: # TCP \ub77c\uc6b0\ud305 \uaddc\uce59\uc785\ub2c8\ub2e4.\n    # \uba3c\uc800 \uc124\uc815\ud55c \uaddc\uce59\uc758 \uc6b0\uc120\uc21c\uc704\uac00 \ub192\uc2b5\ub2c8\ub2e4.\n    - name: <name> # \ub514\ubc84\uae45\uc5d0 \uc0ac\uc6a9\ub418\ub294 \uc774\ub984\n      match:\n        # \uc774 \uaddc\uce59\uc744 \uc801\uc6a9\ud560 \ud2b8\ub798\ud53d\uc744 \uc120\ud0dd\ud569\ub2c8\ub2e4. port \ub4f1\n      route:\n        - destination:\n            host: <host>\n            subset: <subset>\n            port:\n              number: <port>\n          weight: <0-100>\n"})}),"\n",(0,r.jsx)(n.h2,{id:"corspolicy",children:"CorsPolicy"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://istio.io/latest/docs/reference/config/networking/virtual-service/#CorsPolicy",children:"https://istio.io/latest/docs/reference/config/networking/virtual-service/#CorsPolicy"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/lang/design/protocol/http/cors",children:"Cross-Origin Resource Sharing(CORS)"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'apiVersion: networking.istio.io/v1alpha3\nkind: VirtualService\nmetadata:\n  name: "backend"\nspec:\n  hosts:\n    - domain-b.com\n  gateways:\n    - <namespace>/<gateway>\n  http:\n    - match:\n        - uri:\n            prefix: "/v1/"\n      rewrite:\n        uri: "/"\n      route:\n        - destination:\n            host: backend.default.svc.cluster.local\n      corsPolicy:\n        # Access-Control-Allow-Origin\n        allowOrigins:\n          - https://domain-a.com\n        # Access-Control-Allow-Methods\n        allowMethods:\n          - POST\n          - GET\n          - PUT\n          - DELETE\n          - OPTIONS\n          - PATCH\n        # Access-Control-Allow-Headers\n        allowHeaders: # Request\n          - Authorization\n          - Content-Type\n        # Access-Control-Expose-Headers\n        exposeHeaders: # Response\n          - Ratelimit-Limit\n          - Ratelimit-Remaining\n        # Access-Control-Max-Age\n        maxAge: "24h"\n        # Access-Control-Allow-Credentials\n        allowCredentials: true\n'})})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var i=t(96540);const r={},a=i.createContext(r);function s(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);