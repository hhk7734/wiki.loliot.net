"use strict";(self.webpackChunkwiki_loliot_net=self.webpackChunkwiki_loliot_net||[]).push([[66042],{72048:(i,t,e)=>{e.r(t),e.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>g,frontMatter:()=>r,metadata:()=>a,toc:()=>s});const a=JSON.parse('{"id":"lang/go/libraries/gin/validator","title":"Validator","description":"Validator","source":"@site/docs/lang/go/libraries/gin/validator.mdx","sourceDirName":"lang/go/libraries/gin","slug":"/lang/go/libraries/gin/validator","permalink":"/docs/lang/go/libraries/gin/validator","draft":false,"unlisted":false,"editUrl":"https://github.com/hhk7734/wiki/tree/main/docs/lang/go/libraries/gin/validator.mdx","tags":[],"version":"current","lastUpdatedAt":1733674338000,"frontMatter":{"id":"validator","title":"Validator","sidebar_label":"Validator","description":"Validator","keywords":["validator"]},"sidebar":"go","previous":{"title":"Gin","permalink":"/docs/lang/go/libraries/gin/"},"next":{"title":"CRUD","permalink":"/docs/lang/go/libraries/gin/crud"}}');var n=e(74848),o=e(28453);const r={id:"validator",title:"Validator",sidebar_label:"Validator",description:"Validator",keywords:["validator"]},l=void 0,d={},s=[{value:"Deafult Validator",id:"deafult-validator",level:2},{value:"Custom Validator",id:"custom-validator",level:2}];function c(i){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...i.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"deafult-validator",children:"Deafult Validator"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/go-playground/validator",children:"https://github.com/go-playground/validator"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://pkg.go.dev/github.com/go-playground/validator/v10#section-readme",children:"https://pkg.go.dev/github.com/go-playground/validator/v10#section-readme"})}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:'binding:"<condition>[,<condition>]"'})," \ud615\uc2dd\uc73c\ub85c \ud0dc\uadf8\ub97c \ub2ec\uba74 ",(0,n.jsx)(t.code,{children:"gin.Context.*Bind*"})," \uba54\uc11c\ub4dc\ub97c \uc0ac\uc6a9\ud560 \ub54c \ud574\ub2f9 \uc870\uac74\uc744 \uac80\uc0ac\ud569\ub2c8\ub2e4."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-go",children:'type TestRequest struct {\n    Email string `json:"email" binding:"required,email"`\n    Name  string `json:"name" binding:"-"`\n}\n'})}),"\n",(0,n.jsx)(t.h2,{id:"custom-validator",children:"Custom Validator"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://gin-gonic.com/ko-kr/docs/examples/custom-validators/",children:"https://gin-gonic.com/ko-kr/docs/examples/custom-validators/"})}),"\n"]})]})}function g(i={}){const{wrapper:t}={...(0,o.R)(),...i.components};return t?(0,n.jsx)(t,{...i,children:(0,n.jsx)(c,{...i})}):c(i)}},28453:(i,t,e)=>{e.d(t,{R:()=>r,x:()=>l});var a=e(96540);const n={},o=a.createContext(n);function r(i){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof i?i(t):{...t,...i}}),[t,i])}function l(i){let t;return t=i.disableParentContext?"function"==typeof i.components?i.components(n):i.components||n:r(i.components),a.createElement(o.Provider,{value:t},i.children)}}}]);