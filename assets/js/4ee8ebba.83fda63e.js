"use strict";(self.webpackChunkwiki_loliot_net=self.webpackChunkwiki_loliot_net||[]).push([[18435],{66714:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=t(74848),i=t(28453);const l={id:"validator",title:"validator",sidebar_label:"validator",description:"validator",keywords:["validator","golang"]},a=void 0,o={id:"lang/go/libraries/validator",title:"validator",description:"validator",source:"@site/docs/lang/go/libraries/validator.mdx",sourceDirName:"lang/go/libraries",slug:"/lang/go/libraries/validator",permalink:"/docs/lang/go/libraries/validator",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1724686915e3,frontMatter:{id:"validator",title:"validator",sidebar_label:"validator",description:"validator",keywords:["validator","golang"]},sidebar:"go",previous:{title:"time",permalink:"/docs/lang/go/libraries/time"},next:{title:"Swagger",permalink:"/docs/lang/go/libraries/swagger"}},d={},s=[{value:"\uc124\uce58",id:"\uc124\uce58",level:2},{value:"Tag",id:"tag",level:2},{value:"String",id:"string",level:3},{value:"\uc804\ud654\ubc88\ud638",id:"\uc804\ud654\ubc88\ud638",level:3},{value:"Custom Field Type",id:"custom-field-type",level:2},{value:"Custom Validator",id:"custom-validator",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\uc124\uce58",children:"\uc124\uce58"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/go-playground/validator",children:"https://github.com/go-playground/validator"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"go get github.com/go-playground/validator/v10\n"})}),"\n",(0,r.jsx)(n.h2,{id:"tag",children:"Tag"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/go-playground/validator#baked-in-validations",children:"https://github.com/go-playground/validator#baked-in-validations"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'type Test struct {\n\tField `validate:"<tag>"`\n}\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"-"}),": \uc2a4\ud0b5"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:","}),": AND"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"|"}),": OR"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"omitempty"}),": ",(0,r.jsx)(n.code,{children:"required"})," \uac80\uc0ac\uae30\uc5d0 \uc758\ud574 \ud544\ub4dc\uac00 \uc124\uc815\ub418\uc9c0 \uc54a\uc558\ub2e4\uace0 \ud310\ub2e8\ub418\uba74 \uc2a4\ud0b5\ud569\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"required"}),": \ud544\ub4dc\uac00 \uc124\uc815\ub418\uc9c0 \uc54a\uc558\ub2e4\uace0 \ud310\ub2e8\ub418\uba74(nil \uac12) \uc624\ub958\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"string",children:"String"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"min=<value>"}),": \ucd5c\uc18c \uae38\uc774"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"max=<value>"}),": \ucd5c\ub300 \uae38\uc774"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"len=<value>"}),": \uae38\uc774"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\uc804\ud654\ubc88\ud638",children:"\uc804\ud654\ubc88\ud638"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"e164"}),": E.164 \ud615\uc2dd\uc758 \uc804\ud654\ubc88\ud638"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"custom-field-type",children:"Custom Field Type"}),"\n",(0,r.jsxs)(n.p,{children:["\ucee4\uc2a4\ud140\uc73c\ub85c \ub9cc\ub4e0 \ud0c0\uc785 \uc911\uc5d0 \ubcc0\ud658\uc744 \ud1b5\ud574 validator\uac00 \ucc98\ub9ac\ud560 \uc218 \uc788\ub294 \ud0c0\uc785\uc744 \ub9cc\ub4e4 \uc218 \uc788\ub294 \uacbd\uc6b0 ",(0,r.jsx)(n.code,{children:"RegisterCustomTypeFunc"}),"\ub97c \uc0ac\uc6a9\ud558\uc5ec \ud0c0\uc785 \ubcc0\ud658 \ud568\uc218\ub97c \ub4f1\ub85d\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n\t"fmt"\n\t"reflect"\n\n\t"github.com/go-playground/validator/v10"\n)\n\ntype PhoneNumber struct {\n\tCountryCode string\n\tNumber      string\n}\n\nfunc PhoneNumberToString(field reflect.Value) interface{} {\n\tif v, ok := field.Interface().(PhoneNumber); ok {\n\t\tif v == (PhoneNumber{}) {\n\t\t\treturn ""\n\t\t}\n\t\treturn fmt.Sprintf("+%s%s", v.CountryCode, v.Number)\n\t}\n\treturn ""\n}\n\ntype User struct {\n\tPhoneNumber PhoneNumber `validate:"omitempty,e164"`\n}\n\nvar validate *validator.Validate\n\nfunc main() {\n\tvalidate = validator.New()\n\tvalidate.RegisterCustomTypeFunc(PhoneNumberToString, PhoneNumber{})\n\n\tcases := []User{\n\t\t{},\n\t\t{\n\t\t\tPhoneNumber: PhoneNumber{\n\t\t\t\tCountryCode: "82",\n\t\t\t\tNumber:      "1012345678",\n\t\t\t},\n\t\t},\n\t\t{\n\t\t\tPhoneNumber: PhoneNumber{\n\t\t\t\tCountryCode: "x",\n\t\t\t\tNumber:      "x",\n\t\t\t},\n\t\t},\n\t}\n\n\tfor _, c := range cases {\n\t\tif err := validate.Struct(c); err != nil {\n\t\t\tfmt.Println(err)\n\t\t} else {\n\t\t\tfmt.Println("OK")\n\t\t}\n\t}\n}\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"OK\nOK\nKey: 'User.PhoneNumber' Error:Field validation for 'PhoneNumber' failed on the 'e164' tag\n"})}),"\n",(0,r.jsx)(n.h2,{id:"custom-validator",children:"Custom Validator"})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var r=t(96540);const i={},l=r.createContext(i);function a(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);