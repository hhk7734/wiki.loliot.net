"use strict";(self.webpackChunkwiki_loliot_net=self.webpackChunkwiki_loliot_net||[]).push([[12558],{36359:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"mlops/mlops/monitoring/grafana/auth","title":"Grafana \uc778\uc99d/\uc778\uac00","description":"Grafana \uc778\uc99d/\uc778\uac00","source":"@site/docs/mlops/mlops/monitoring/grafana/auth.mdx","sourceDirName":"mlops/mlops/monitoring/grafana","slug":"/mlops/mlops/monitoring/grafana/auth","permalink":"/docs/mlops/mlops/monitoring/grafana/auth","draft":false,"unlisted":false,"editUrl":"https://github.com/hhk7734/wiki/tree/main/docs/mlops/mlops/monitoring/grafana/auth.mdx","tags":[],"version":"current","lastUpdatedAt":1733674338000,"frontMatter":{"id":"auth","title":"Grafana \uc778\uc99d/\uc778\uac00","sidebar_label":"\uc778\uc99d/\uc778\uac00","description":"Grafana \uc778\uc99d/\uc778\uac00","keywords":["grafana","auth"]},"sidebar":"mlops","previous":{"title":"Grafana","permalink":"/docs/mlops/mlops/monitoring/grafana/"},"next":{"title":"Data Source","permalink":"/docs/mlops/mlops/monitoring/grafana/datasource"}}');var r=a(74848),o=a(28453);const s={id:"auth",title:"Grafana \uc778\uc99d/\uc778\uac00",sidebar_label:"\uc778\uc99d/\uc778\uac00",description:"Grafana \uc778\uc99d/\uc778\uac00",keywords:["grafana","auth"]},t=void 0,l={},c=[{value:"OpenID Connect(OIDC)",id:"openid-connectoidc",level:2}];function d(n){const e={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"openid-connectoidc",children:"OpenID Connect(OIDC)"}),"\n",(0,r.jsx)(e.admonition,{title:"Reference",type:"info",children:(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://grafana.com/docs/grafana/latest/setup-grafana/configure-security/configure-authentication/generic-oauth/",children:"Grafana / Configure generic OAuth2 authentication"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"/docs/mlops/mlops/auth/keycloak/openid-connect",children:"Keycloak OIDC"})}),"\n"]})}),"\n",(0,r.jsxs)(e.p,{children:["\uc0ac\uc6a9\ud558\ub824\ub294 OpenID Connect Provider(OP)\uc5d0 \ud074\ub77c\uc774\uc5b8\ud2b8\ub97c \uc0dd\uc131\ud574\uc11c \ud074\ub77c\uc774\uc5b8\ud2b8 ID\uc640 Secret\uc744 \ubc1c\uae09\ubc1b\uc544\uc57c \ud569\ub2c8\ub2e4. OIDC discovery\ub97c \uc9c0\uc6d0\ud558\ub294 OP\uc758 \uacbd\uc6b0 ",(0,r.jsx)(e.code,{children:"GET <issuer>/.well-known/openid-configuration"}),"\ub97c \ud1b5\ud574 \uc5d4\ub4dc\ud3ec\uc778\ud2b8 \uc815\ubcf4\ub97c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-yaml",metastring:'title="grafana-values.yaml"',children:"envFromSecret: <secretName>\n\ngrafana.ini:\n  server:\n    root_url: <grafanaURL>\n  auth.generic_oauth:\n    enabled: true\n    name: Keycloak\n    client_id: <clientID>\n    client_secret: ${OIDC_CLIENT_SECRET} # \ud658\uacbd\ubcc0\uc218\uc5d0\uc11c \uc77d\uc5b4\uc635\ub2c8\ub2e4.\n    scopes: openid profile email groups\n    auth_url: <authorizationEndpoint>\n    token_url: <tokenEndpoint>\n    api_url: <userinfoEndpoint>\n    role_attribute_path: <path>\n    allow_sign_up: true\n    auto_login: true\n    use_refresh_token: true\n"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"auth.generic_oauth"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"allow_sign_up: true"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Grafana \uc0ac\uc6a9\uc790 \ub9ac\uc2a4\ud2b8\uc5d0 \uc5c6\ub294 \uacbd\uc6b0 \uc790\ub3d9\uc73c\ub85c \uc0ac\uc6a9\uc790\ub97c \uc0dd\uc131\ud560\uc9c0 \uacb0\uc815\ud569\ub2c8\ub2e4."}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"false"}),"\uc778 \uacbd\uc6b0 Grafana\uc5d0 \uc874\uc7ac\ud558\ub294 \uc0ac\uc6a9\uc790\ub9cc \ub85c\uadf8\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"auto_login: false"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Grafana \ub85c\uadf8\uc778 \ud398\uc774\uc9c0\ub97c \uac74\ub108\ub6f0\uace0 OP\ub85c \ub9ac\ub2e4\uc774\ub809\ud2b8 \uc2dc\ud0ac\uc9c0 \uacb0\uc815\ud569\ub2c8\ub2e4."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"role_attribute_path: <role>"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\uc0ac\uc6a9\uc790\uc758 Role\uc744 \uacb0\uc815\ud558\ub294 \ubc29\ubc95\uc785\ub2c8\ub2e4."}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"None"}),", ",(0,r.jsx)(e.code,{children:"Viewer"}),", ",(0,r.jsx)(e.code,{children:"Editor"}),", ",(0,r.jsx)(e.code,{children:"Admin"}),", ",(0,r.jsx)(e.code,{children:"GrafanaAdmin"})," \uc911 \ud558\ub098\ub97c \ubc18\ud658\ud574\uc57c \ud569\ub2c8\ub2e4."]}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://grafana.com/docs/grafana/latest/administration/roles-and-permissions",children:"Grafana / Roles and permissions"})}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.a,{href:"http://jmespath.org/examples.html",children:"JMESPath"})," \ud45c\ud604\uc2dd\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.","\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.code,{children:"contains(groups[*], 'devops') && 'GrafanaAdmin' || contains(groups[*], 'backend') && 'Editor' || 'Viewer'"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"allow_assign_grafana_admin: false"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"GrafanaAdmin\uc774 \ud560\ub2f9\ub418\ub294 \uacbd\uc6b0 Server \uad00\ub9ac\uc790 \uad8c\ud55c\uc744 \ubd80\uc5ec\ud560\uc9c0 \uacb0\uc815\ud569\ub2c8\ub2e4."}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"false"}),"\uc778 \uacbd\uc6b0 Admin\uacfc \ub3d9\uc77c\ud55c \uad8c\ud55c\uc744 \uac00\uc9d1\ub2c8\ub2e4."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},28453:(n,e,a)=>{a.d(e,{R:()=>s,x:()=>t});var i=a(96540);const r={},o=i.createContext(r);function s(n){const e=i.useContext(o);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:s(n.components),i.createElement(o.Provider,{value:e},n.children)}}}]);