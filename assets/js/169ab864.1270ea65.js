"use strict";(self.webpackChunkwiki_loliot_net=self.webpackChunkwiki_loliot_net||[]).push([[35812],{53076:(e,o,i)=>{i.r(o),i.d(o,{assets:()=>d,contentTitle:()=>t,default:()=>a,frontMatter:()=>l,metadata:()=>n,toc:()=>r});const n=JSON.parse('{"id":"lang/design/protocol/http/cookie","title":"Cookie","description":"Cookie","source":"@site/docs/lang/design/protocol/http/cookie.mdx","sourceDirName":"lang/design/protocol/http","slug":"/lang/design/protocol/http/cookie","permalink":"/docs/lang/design/protocol/http/cookie","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedAt":1731596630000,"frontMatter":{"id":"cookie","title":"Cookie","sidebar_label":"Cookie","description":"Cookie","keywords":["cookie"]},"sidebar":"design","previous":{"title":"MIME Type","permalink":"/docs/lang/design/protocol/http/mime-type"},"next":{"title":"CORS","permalink":"/docs/lang/design/protocol/http/cors"}}');var s=i(74848),c=i(28453);const l={id:"cookie",title:"Cookie",sidebar_label:"Cookie",description:"Cookie",keywords:["cookie"]},t=void 0,d={},r=[{value:"Set-Cookie",id:"set-cookie",level:2},{value:"Cookie",id:"cookie",level:2}];function h(e){const o={a:"a",code:"code",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.h2,{id:"set-cookie",children:"Set-Cookie"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:(0,s.jsx)(o.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie",children:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie"})}),"\n"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-http",children:"HTTP/1.0 200 OK\nSet-Cookie: <cookieName1>=<cookieValue1>[; <option>[; <option>]]\nSet-Cookie: <cookieName2>=<cookieValue2>\n...\n"})}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.code,{children:"<option>"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:(0,s.jsx)(o.code,{children:"Expires=<date>"})}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.code,{children:"Max-Age=<seconds>"}),": ",(0,s.jsx)(o.code,{children:"<=0"})," \uc774\uba74 \ucfe0\ud0a4\uac00 \uc0ad\uc81c\ub429\ub2c8\ub2e4","\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.code,{children:"Expires"})," \ub610\ub294 ",(0,s.jsx)(o.code,{children:"Max-Age"}),"\ub97c \uc124\uc815\ud558\uc9c0 \uc54a\uc73c\uba74 \uc138\uc158 \ucfe0\ud0a4\uac00 \ub418\uc5b4 \ud074\ub77c\uc774\uc5b8\ud2b8 \uc885\ub8cc\uc2dc \uc0ad\uc81c\ub429\ub2c8\ub2e4"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.code,{children:"HttpOnly"}),": \ud65c\uc131\ud654 \ud558\uba74 JavaScript\uc758 ",(0,s.jsx)(o.code,{children:"document.cookie"})," API\ub97c \ud1b5\ud574 \ucfe0\ud0a4\uc5d0 \uc811\uadfc\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4"]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.code,{children:"Secure"}),": \ud65c\uc131\ud654 \ud558\uba74 HTTPS \ud504\ub85c\ud1a0\ucf5c\uc744 \uc0ac\uc6a9\ud560 \ub54c\ub9cc ",(0,s.jsx)(o.code,{children:"Cookie"}),"\ub97c \ud5e4\ub354\uc5d0 \ucd94\uac00\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4(localhost \uc81c\uc678)"]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.code,{children:"Domain=<domain>"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:"\uba85\uc2dc\uc801\uc73c\ub85c \uc9c0\uc815\ud558\uc9c0 \uc54a\uc73c\uba74 \ube0c\ub77c\uc6b0\uc800\ub294 \ud504\ub860\ud2b8\uc5d4\ub4dc Host\ub97c \uae30\ubcf8 \uac12\uc73c\ub85c \uc0ac\uc6a9\ud569\ub2c8\ub2e4"}),"\n",(0,s.jsxs)(o.li,{children:["\uba85\uc2dc\uc801\uc73c\ub85c \uc9c0\uc815\ud558\uba74 \ud558\uc704 \ub3c4\uba54\uc778\uc744 \ud3ec\ud568\ud55c \ubaa8\ub4e0 \ub3c4\uba54\uc778\uc5d0\uc11c ",(0,s.jsx)(o.code,{children:"Cookie"}),"\ub97c \ud5e4\ub354\uc5d0 \ucd94\uac00\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.code,{children:"Path=<prefix>"}),": \uc124\uc815\ud558\uba74 Request \ud5e4\ub354\uc758 \uacbd\ub85c\uc640 prefix\uac00 \ub9e4\uce6d\ub418\uc5b4\uc57c ",(0,s.jsx)(o.code,{children:"Cookie"}),"\ub97c \ud5e4\ub354\uc5d0 \ucd94\uac00\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4"]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.code,{children:"SameSite=None|Lax|Strict"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:["site: \uc720\ud6a8 \ucd5c\uc0c1\uc704 \ub3c4\uba54\uc778(eTLD) + 1\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4","\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:(0,s.jsx)(o.a,{href:"https://github.com/publicsuffix/list/blob/master/public_suffix_list.dat",children:"https://github.com/publicsuffix/list/blob/master/public_suffix_list.dat"})}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.code,{children:".net"}),"\uc740 eTLD\uc774\ubbc0\ub85c ",(0,s.jsx)(o.code,{children:"loliot.net"}),"\uc774 site\uc785\ub2c8\ub2e4"]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.code,{children:".github.io"}),"\ub294 eTLD\uc774\ubbc0\ub85c ",(0,s.jsx)(o.code,{children:"a.github.io"}),"\uc640 ",(0,s.jsx)(o.code,{children:"b.github.io"}),"\ub294 Cross-site \uc785\ub2c8\ub2e4"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.code,{children:"None"}),": \ubaa8\ub4e0 \uc694\uccad\uc5d0 \ub300\ud574 \ucfe0\ud0a4\uac00 \uc804\uc1a1\ub429\ub2c8\ub2e4(",(0,s.jsx)(o.code,{children:"Secure"})," \uc635\uc158\uc744 \ud65c\uc131\ud654\ud574\uc57c \ud568)"]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.code,{children:"Lax"}),": Same-site\uac00 \uc544\ub2c8\ub354\ub77c\ub3c4 \uba87\uac00\uc9c0 \uc608\uc678\uc801\uc778 \uc694\uccad\uc5d0 \ub300\ud574 ",(0,s.jsx)(o.code,{children:"Cookie"}),"\ub97c \ud5e4\ub354\uc5d0 \ucd94\uac00\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4"]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.code,{children:"Strict"}),": Same-site\uc778 \uacbd\uc6b0\uc5d0\ub9cc ",(0,s.jsx)(o.code,{children:"Cookie"}),"\ub97c \ud5e4\ub354\uc5d0 \ucd94\uac00\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(o.h2,{id:"cookie",children:"Cookie"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-http",children:"GET /test HTTP/1.1\nHost: wiki.loliot.net\nCookie: <cookieName1>=<cookieValue1>; <cookieName2>=<cookieValue2>\n...\n"})})]})}function a(e={}){const{wrapper:o}={...(0,c.R)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,o,i)=>{i.d(o,{R:()=>l,x:()=>t});var n=i(96540);const s={},c=n.createContext(s);function l(e){const o=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function t(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),n.createElement(c.Provider,{value:o},e.children)}}}]);