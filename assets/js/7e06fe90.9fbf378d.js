"use strict";(self.webpackChunkwiki_loliot_net=self.webpackChunkwiki_loliot_net||[]).push([[95129],{36763:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"etc/memo/ssl-lets-encrypt","title":"Let\'s encrypt","description":"Let\'s encrypt","source":"@site/docs/etc/memo/ssl-lets-encrypt.mdx","sourceDirName":"etc/memo","slug":"/etc/memo/ssl-lets-encrypt","permalink":"/docs/etc/memo/ssl-lets-encrypt","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedAt":1731420115000,"frontMatter":{"id":"ssl-lets-encrypt","title":"Let\'s encrypt","description":"Let\'s encrypt","keywords":["Let\'s encrypt","SSL"]},"sidebar":"memo","previous":{"title":"Semantic versioning 2.0.0","permalink":"/docs/etc/memo/semantic-versioning-2-0-0"},"next":{"title":"Role and Responsibility","permalink":"/docs/etc/memo/dev-lead/role-and-responsibility"}}');var c=t(74848),l=t(28453);const r={id:"ssl-lets-encrypt",title:"Let's encrypt",description:"Let's encrypt",keywords:["Let's encrypt","SSL"]},i=void 0,o={},d=[{value:"\uc124\uce58",id:"\uc124\uce58",level:2},{value:"Nginx",id:"nginx",level:2},{value:"certbot",id:"certbot",level:2},{value:"Renew",id:"renew",level:2}];function a(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h2,{id:"\uc124\uce58",children:"\uc124\uce58"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",children:"sudo apt-get update\n"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",children:"sudo apt-get install certbot\n"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",children:"sudo apt-get install python3-certbot-nginx\n"})}),"\n",(0,c.jsx)(n.h2,{id:"nginx",children:"Nginx"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",children:"sudo vim /etc/nginx/conf.d/default.conf\n"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-nginx",children:"server {\n    listen 80;\n    listen [::]:80;\n    return 301 https://$host$request_uri;\n}\n"})}),"\n",(0,c.jsx)(n.h2,{id:"certbot",children:"certbot"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",children:"sudo certbot --nginx \\\n    -d wiki.loliot.net \\\n    -d loliot.net\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\uc790\ub3d9\uc73c\ub85c ",(0,c.jsx)(n.code,{children:"/etc/letsencrypt"}),"\uc5d0 \uc778\uc99d\uad00\ub828 \ud30c\uc77c\uc744 \uc0dd\uc131\ud558\uace0, ",(0,c.jsx)(n.code,{children:"/etc/nginx/conf.d/default.conf"})," \ub0b4\uc6a9\ub3c4 \uc218\uc815\uc744 \ud574\uc90d\ub2c8\ub2e4."]}),"\n",(0,c.jsx)(n.h2,{id:"renew",children:"Renew"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",children:"sudo certbot renew\n"})})]})}function p(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>i});var s=t(96540);const c={},l=s.createContext(c);function r(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);