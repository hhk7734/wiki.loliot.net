"use strict";(self.webpackChunkwiki_loliot_net=self.webpackChunkwiki_loliot_net||[]).push([[70958],{86781:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>d,contentTitle:()=>t,default:()=>a,frontMatter:()=>o,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"lang/design/solid","title":"SOLID","description":"SOLID","source":"@site/docs/lang/design/solid.mdx","sourceDirName":"lang/design","slug":"/lang/design/solid","permalink":"/docs/lang/design/solid","draft":false,"unlisted":false,"editUrl":"https://github.com/hhk7734/wiki/tree/main/docs/lang/design/solid.mdx","tags":[],"version":"current","lastUpdatedAt":1735837343000,"frontMatter":{"id":"solid","title":"SOLID","sidebar_label":"SOLID","description":"SOLID","keywords":["solid"]},"sidebar":"design","previous":{"title":"Event Storming","permalink":"/docs/lang/design/event-storming"},"next":{"title":"Contextual Logging","permalink":"/docs/lang/design/contextual-logging"}}');var l=i(74848),r=i(28453);const o={id:"solid",title:"SOLID",sidebar_label:"SOLID",description:"SOLID",keywords:["solid"]},t=void 0,d={},c=[{value:"Single Responsibility Principle(SRP)",id:"single-responsibility-principlesrp",level:2},{value:"Open-Closed Principle(OCP)",id:"open-closed-principleocp",level:2},{value:"Liskov Substitution Principle(LSP)",id:"liskov-substitution-principlelsp",level:2},{value:"Interface Segregation Principle(ISP)",id:"interface-segregation-principleisp",level:2},{value:"Dependency Inversion Principle(DIP)",id:"dependency-inversion-principledip",level:2},{value:"Reference",id:"reference",level:2}];function p(n){const e={admonition:"admonition",blockquote:"blockquote",h2:"h2",li:"li",mermaid:"mermaid",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.admonition,{type:"info",children:(0,l.jsx)(e.p,{children:"\uaf2d \ub530\ub77c\uc57c\ud558\ub294 \uc6d0\uce59\uc740 \uc544\ub2c8\uc9c0\ub9cc, \uc774 \uc6d0\uce59\ub4e4\uc744 \ub530\ub790\uc744 \ub54c, \ucf54\ub4dc \ubcc0\uacbd\uc5d0 \ub530\ub978 \ub9ac\uc18c\uc2a4 \uc18c\ubaa8\ub97c \uc904\uc77c \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ubcc0\uacbd\uc0ac\ud56d, \uae30\ub2a5 \ub4f1\uc774 \uc801\uc740 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \ub9cc\ub4e4 \ub54c\ub294 \uc774\ub7f0 \uc6d0\uce59\uc744 \ub530\ub974\uc9c0 \uc54a\ub294 \uac83\uc774 \uc0dd\uc0b0\uc131\uc774\ub098 \uac00\ub3c5\uc131\uc5d0 \ub354 \uc88b\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."})}),"\n",(0,l.jsx)(e.h2,{id:"single-responsibility-principlesrp",children:"Single Responsibility Principle(SRP)"}),"\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsx)(e.p,{children:"\ud558\ub098\uc758 \ubaa8\ub4c8\uc740 \ud558\ub098\uc758, \uc624\uc9c1 \ud558\ub098\uc758 \uc561\ud130(actor)\uc5d0 \ub300\ud574\uc11c\ub9cc \ucc45\uc784\uc838\uc57c \ud55c\ub2e4."}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"\uc758\ubbf8\uc0c1 \uac01 \uae30\ub2a5\uc774 \ud55c \ubaa8\ub4c8\uc5d0 \uc788\ub294 \uac83\uc774 \uc5b4\uc0c9\ud558\ub2e4\uba74 \ucc98\uc74c\ubd80\ud130 \ubd84\ub9ac\ud558\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \uac1c\ubc1c\ud558\ub2e4\ubcf4\uba74 \ud558\ub098\uc758 \ubaa8\ub4c8\ub85c \ub9cc\ub4e4\uc5b4\uc57c \ud560 \uac83 \ucc98\ub7fc \ub290\uaef4\uc9c0\ub294 \uc0c1\ud669\ub4e4\uc774 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,l.jsx)(e.p,{children:"\uc0c1\ud669 \ud558\ub098\ub97c \uac00\uc815\ud574\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\uc758\ubbf8\uc0c1 \uac01 \uae30\ub2a5\uc774 \ud55c \ubaa8\ub4c8\uc5d0 \uc788\uc5b4\ub3c4 \ub420 \uac83 \uac19\uc740 \ubaa8\ub4c8\uc774 \uc788\ub2e4."}),"\n",(0,l.jsx)(e.li,{children:"\ubaa8\ub4c8\uc5d0 \ub2e4\ub978 \ubaa9\uc801\uc744 \uac00\uc9c4 A, B \uc561\ud130\uac00 \uc758\uc874\ud558\uace0 \uc788\ub2e4."}),"\n",(0,l.jsx)(e.li,{children:"A \uc561\ud130\uac00 \uc790\uc8fc \uc0ac\uc6a9\ud558\ub294 \ud568\uc218, \ud14c\uc2a4\ud2b8 \ucf54\ub4dc\uac00 \uc788\ub2e4."}),"\n",(0,l.jsx)(e.li,{children:"B \uc561\ud130\uac00 \uc790\uc8fc \uc0ac\uc6a9\ud558\ub294 \ud568\uc218, \ud14c\uc2a4\ud2b8 \ucf54\ub4dc\uac00 \uc788\ub2e4."}),"\n",(0,l.jsx)(e.li,{children:"\ub450 \uc561\ud130\uc5d0 \uc758\ud574 \uc0ac\uc6a9\ub418\ub294 \ud568\uc218\ub97c \uad6c\uc131\ud558\uae30 \uc704\ud55c \uacf5\ud1b5 \ud568\uc218\uac00 \uc788\ub2e4."}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"\uc774 \uc0c1\ud669\uc5d0\uc11c A \uc561\ud130\uc758 \ubaa9\uc801 \ubcc0\ud654\uc5d0 \ub530\ub77c \uacf5\ud1b5\uc73c\ub85c \uc0ac\uc6a9\ub418\ub294 \ud568\uc218\ub97c \ubcc0\uacbd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ubaa8\ub4e0 \ud14c\uc2a4\ud2b8\ub97c \ud1b5\uacfc\ud588\uc9c0\ub9cc \ub17c\ub9ac\uc801\uc73c\ub85c B \uc5d0\uac8c\ub294 \ub9de\uc9c0 \uc54a\ub294 \uc0c1\ud0dc\uac00 \ub420 \uc218 \uc788\ub2e4\ub294 \ubb38\uc81c\ub97c \uac00\uc9c0\uace0 \uc788\uc2b5\ub2c8\ub2e4. \uadf8\ub098\ub9c8\ub3c4 \ud14c\uc2a4\ud2b8 \ucf54\ub4dc\uac00 \uc5c6\ub2e4\uba74, \ubb38\uc81c\uac00 \uc788\ub354\ub77c\ub3c4 \uc5b8\uc5b4\uc5d0 \ub530\ub77c \uadf8\ub0e5 \uc9c0\ub098\uac08 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,l.jsx)(e.p,{children:"\uc774 \ubb38\uc81c\ub97c \ud574\uacb0\ud558\uae30 \uc704\ud574 \uacf5\uc6a9 \ub370\uc774\ud130 \ud074\ub798\uc2a4\uac00 \uc788\ub2e4\uba74 \ubd84\ub9ac\ud574\ub0b4\uace0, \uac01 \uc561\ud130\uc5d0 \ub9de\ub294 \uba54\uc11c\ub4dc\ub9cc\uc73c\ub85c \uad6c\uc131\ub41c \ubaa8\ub4c8\uc744 \ub9cc\ub4e4\uba74 \ub429\ub2c8\ub2e4."}),"\n",(0,l.jsx)(e.admonition,{type:"warning",children:(0,l.jsx)(e.p,{children:"\uc774 \ub54c \uacf5\ud1b5\uc73c\ub85c \uc0ac\uc6a9\ub418\uc5c8\ub358 \ud568\uc218\ub294 \uac01\uac01\uc758 \ubaa8\ub4c8\ub85c \ubd84\ub9ac\ub418\uba74\uc11c \uc911\ubcf5\ub41c \ucf54\ub4dc\uac00 \ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \ubb38\uc81c \uc0c1\ud669\uc73c\ub85c \ub3cc\uc544\uac00\ubcf4\uba74 \uc5b8\uc820\uac00 \uc774 \ucf54\ub4dc\ub294 \uc11c\ub85c \ub2e4\ub978 \ucf54\ub4dc\uac00 \ub41c\ub2e4\ub294 \uac83\uc744 \uc54c \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc5b4\ub5a4 \ucf54\ub4dc\ub97c \uc9c4\uc9dc \uc911\ubcf5\uc73c\ub85c \ubc1b\uc544\ub4e4\uc77c \uc9c0 \uc77c\uc2dc\uc801\uc778 \uc911\ubcf5\uc73c\ub85c \ubc1b\uc544\ub4e4\uc77c \uc9c0 \uace0\ubbfc\uc744 \uc798 \ud574\uc57c\ud569\ub2c8\ub2e4."})}),"\n",(0,l.jsx)(e.admonition,{type:"info",children:(0,l.jsx)(e.p,{children:"\uc758\ubbf8\uc0c1 \ud55c \ubaa8\ub4c8\uc5d0 \uc788\ub294\uac83\uc774 \uc88b\uc544\ubcf4\uc600\ub2e4\ub294 \uac83\uc740, \uc0ac\uc6a9\ud560 \ub54c, \ud55c \ubaa8\ub4c8\uc5d0 \ub450\uace0 \uc0ac\uc6a9\ud558\ub294 \uac83\uc774 \ud3b8\ud55c \uc0c1\ud669\uc774 \uc788\uc5c8\ub2e4\ub294 \ub73b\uc77c \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \ub54c \ubd84\ub9ac\ub41c \ucf54\ub4dc\ub294 \uac1c\ubc1c\uc790\uac00 \uc27d\uac8c \ucd94\uc801\ud558\uc9c0 \ubabb\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub7f0 \uacbd\uc6b0\uc5d0\ub294 Facade \ud328\ud134\uc744 \uc0ac\uc6a9\ud558\uc5ec \uac01 \uac1d\uccb4\ub97c \uc0dd\uc131\ud558\uace0 \uc694\uccad\ub41c \uba54\uc11c\ub4dc\ub97c \uac01 \uac1d\uccb4\ub85c \uc704\uc784\ud574\uc8fc\uac70\ub098 \uc2e4\ud589 \uc21c\uc11c\uc5d0 \ub9de\ucdb0 \ud638\ucd9c\ub9cc \ud574\uc8fc\ub294 \ud074\ub798\uc2a4\ub97c \ub9cc\ub4e4\uc5b4 \uc8fc\uba74 \ub429\ub2c8\ub2e4."})}),"\n",(0,l.jsx)(e.p,{children:"\ub610\ub294 \uac00\uc7a5 \uc911\uc694\ud55c \uc561\ud130\ub97c \uc704\ud55c \uae30\ub2a5\ub9cc \ub0a8\uae30\uace0 \ub098\uba38\uc9c0 \uae30\ub2a5\uc5d0 \ub300\ud55c \ud37c\uc0ac\ub4dc\ub85c \uc0ac\uc6a9\ud574\ub3c4 \ub429\ub2c8\ub2e4. \uc774 \ub54c \ubd84\ub9ac\ub418\uc5b4 \ub098\uc628 \uae30\ub2a5\uc740 \uc11c\ub85c \uc758\uc874\uc801\uc774\uc9c0 \uc54a\ub3c4\ub85d \uc720\uc9c0\ud558\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4."}),"\n",(0,l.jsx)(e.h2,{id:"open-closed-principleocp",children:"Open-Closed Principle(OCP)"}),"\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsx)(e.p,{children:"Classes should be open for extension, but closed for modification."}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"\uae30\ub2a5 \ucd94\uac00\ub97c \uc704\ud574 \uae30\uc874 \ucf54\ub4dc \uc218\uc815\uc744 \ub9ce\uc774 \ud574\uc57c\ud55c\ub2e4\uba74, \uae30\ub2a5 \ucd94\uac00\uc5d0 \ud070 \uc7a5\ubcbd\uc774 \ub429\ub2c8\ub2e4. \uc774 \ubb38\uc81c\ub97c \ud574\uacb0\ud558\uae30 \uc704\ud574\uc11c\ub294"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["SRP\ub97c \uc9c0\ud0a4\uba74\uc11c \uae30\ub2a5\uc744 \ucef4\ud3ec\ub10c\ud2b8 \ub2e8\uc704\ub85c \ubd84\ub9ac\ud55c\ub2e4. ex) View, Controller, ...","\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\uae30\ub2a5\uc774 \uc5b4\ub5bb\uac8c(how), \uc65c(why), \uc5b8\uc81c(when) \ubc1c\uc0dd\ud558\ub294\uc9c0\uc5d0 \ub530\ub77c \uae30\ub2a5\uc744 \ubd84\ub9ac\ud55c\ub2e4."}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["DIP\ub97c \ud65c\uc6a9\ud558\uc5ec \ucef4\ud3ec\ub10c\ud2b8\uac04 \uc758\uc874 \uc131\uc744 \ud55c \ubc29\ud5a5\uc73c\ub85c \ud750\ub974\ub3c4\ub85d \uc720\uc9c0\ud55c\ub2e4.","\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"A \ucef4\ud3ec\ub10c\ud2b8\uc758 \ubcc0\uacbd\uc73c\ub85c\ubd80\ud130 B \ucef4\ud3ec\ub10c\ud2b8\ub97c \ubcf4\ud638\ud558\ub824\uba74 A \ucef4\ud3ec\ub10c\ud2b8\uac00 B \ucef4\ud3ec\ub10c\ud2b8\uc5d0 \uc758\uc874\ud574\uc57c\ud55c\ub2e4.(A \ucef4\ud3ec\ub10c\ud2b8\uac00 B \ucef4\ud3ec\ub10c\ud2b8\ub97c \uc0ac\uc6a9)"}),"\n",(0,l.jsx)(e.li,{children:"\ub3c4\uba54\uc778\uc5d0\uc11c \uc911\uc694\ud55c \ub85c\uc9c1, \uc815\ucc45 \ub4f1\uc744 \ub2f4\ub2f9\ud558\ub294 \ucef4\ud3ec\ub10c\ud2b8\uac00 \ubcf4\ud638\ub418\ub3c4\ub85d \ud55c\ub2e4."}),"\n",(0,l.jsx)(e.li,{children:"\ubcf4\ud638\ubc1b\ub294 \ucef4\ud3ec\ub10c\ud2b8\uac00 \uc0c1\ub300\uc801\uc73c\ub85c \uace0\uc218\uc900 \ucef4\ud3ec\ub10c\ud2b8\uc774\ubbc0\ub85c \uc800\uc218\uc900 \ucef4\ud3ec\ub10c\ud2b8\ub294 \uace0\uc218\uc900 \ucef4\ud3ec\ub10c\ud2b8\uc5d0 \uc758\uc874\ud574\uc57c\ud55c\ub2e4."}),"\n",(0,l.jsx)(e.li,{children:"\uc800\uc218\uc900 \ucef4\ud3ec\ub10c\ud2b8\uac00 \uace0\uc218\uc900 \ucef4\ud3ec\ub10c\ud2b8 \ubcc0\uacbd\uc5d0 \ub108\ubb34 \ucde8\uc57d\ud558\uc9c0 \uc54a\ub3c4\ub85d \uace0\uc218\uc900 \ucef4\ud3ec\ub10c\ud2b8\uc758 \ucea1\uc290\ud654 \ub610\ud55c \uc911\uc694\ud558\ub2e4."}),"\n",(0,l.jsx)(e.li,{children:"\uc785\ucd9c\ub825\uad00\ub828 \ucef4\ud3ec\ub10c\ud2b8\ub294 \uc800\uc218\uc900 \ucef4\ud3ec\ub10c\ud2b8\ub85c \ub9cc\ub4e0\ub2e4.(\ub370\uc774\ud130\uc758 \ud750\ub984\uc5d0 \ub530\ub77c \uc218\uc900\uc744 \uacb0\uc815\ud558\uba74 \uc548\ub41c\ub2e4)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.admonition,{type:"info",children:(0,l.jsxs)(e.p,{children:["\ucef4\ud30c\uc77c \uc5b8\uc5b4\uc5d0\uc11c \ucef4\ud3ec\ub10c\ud2b8 \ub2e8\uc704\ub294 ",(0,l.jsx)(e.strong,{children:"\ub7f0\ud0c0\uc784\uc5d0 \ud50c\ub7ec\uadf8\uc778 \ud615\ud0dc\ub85c \uacb0\ud569\ud560 \uc218 \uc788\ub294 \ub3d9\uc801 \ub9c1\ud06c \ud30c\uc77c\uc5d0 \ub300\ud55c \uc18c\uc2a4\ucf54\ub4dc \ubb36\uc74c"}),"\uc73c\ub85c \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub7ec\ud55c \uad00\uc810\uc5d0\uc11c SOLID\uc6d0\uce59\uc744 \ubc14\ub77c\ubcf4\uba74 \ucef4\ud30c\uc77c \uc5b8\uc5b4\uc5d0\uc11c\uc758 \uc911\uc694\uc131\uacfc \uc778\ud130\ud504\ub9ac\ud130\ud615 \uc5b8\uc5b4\uc5d0\uc11c\uc758 \uc911\uc694\uc131\uc774 \uc870\uae08 \ub2ec\ub77c\uc9c8 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]})}),"\n",(0,l.jsx)(e.h2,{id:"liskov-substitution-principlelsp",children:"Liskov Substitution Principle(LSP)"}),"\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsx)(e.p,{children:"If S is a subtype of T, then objects of type T in program P may be replaced with objects of type S without altering any of the desirable properties of that program."}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"\ud504\ub85c\uadf8\ub7a8 P\uc5d0\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 T\uc640 S\uac00 \ub2e4\ub978 \uc778\ud130\ud398\uc774\uc2a4\ub97c \uac16\ub294\ub2e4\uba74 P\uc5d0\uc11c\ub294 if \ubb38\uc744 \uc0ac\uc6a9\ud558\uc5ec T\ub97c \uc0ac\uc6a9\ud560 \ub54c\uc640 S\ub97c \uc0ac\uc6a9\ud560 \ub54c\ub97c \uad6c\ubd84\ud574\uc918\uc57c \ud569\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \uac19\uc740 \uc778\ud130\ud398\uc774\uc2a4\ub97c \uac00\uc838\ub3c4 \uc0c1\uad00 \uc5c6\ub2e4\uba74 P\uc758 \uc218\uc815 \uc5c6\uc774 S\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub9c8\ucc2c\uac00\uc9c0\ub85c \uac19\uc740 \uc778\ud130\ud398\uc774\uc2a4\ub97c \uac16\uc9c0\ub9cc \uad6c\ud604\uc774 \ub2e4\ub978 \uc0c8\ub85c\uc6b4 \ud0c0\uc785 S1, S2, ...\ub97c \ucd94\uac00\ud558\uc5ec P\uc5d0 \uae30\ub2a5\uc744 \ud655\uc7a5\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,l.jsx)(e.p,{children:"LSP\uc5d0\uc11c \uac19\uc740 \uc778\ud130\ud398\uc774\uc2a4\ub780 \ub355 \ud0c0\uc774\ud551\uc744 \uc4f4\ub2e4\uba74 \uac19\uc740 \uba54\uc11c\ub4dc \uc2dc\uadf8\ub2c8\ucc98\ub97c \uacf5\uc720\ud55c\ub2e4\ub294 \uc758\ubbf8\uc77c \uc218\ub3c4 \uc788\uace0, \uac19\uc740 REST \uc778\ud130\ud398\uc774\uc2a4\uac00 \ub420 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,l.jsx)(e.h2,{id:"interface-segregation-principleisp",children:"Interface Segregation Principle(ISP)"}),"\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsx)(e.p,{children:"Clients should not be forced to depend on methods that they do not use."}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"\ucef4\ud30c\uc77c\uc744 \ud558\ub294 \uc9c0 \uc548\ud558\ub294 \uc9c0, \ucef4\ud30c\uc77c \ubc29\uc2dd\uc740 \uc5b4\ub5bb\uac8c \ub418\ub294 \uc9c0\uc5d0 \ub530\ub77c \uc601\ud5a5\uc744 \ubc1b\uc744 \uc218\ub3c4 \uc788\uace0 \uc544\ub2d0 \uc218\ub3c4 \uc788\ub294 \uc6d0\uce59\uc785\ub2c8\ub2e4."}),"\n",(0,l.jsx)("center",{children:(0,l.jsx)(e.mermaid,{value:"classDiagram\n  direction TB\n  User1 ..> OPS\n  User2 ..> OPS\n  User3 ..> OPS\nclass OPS{+op1() +op2() +op3()}"})}),"\n",(0,l.jsx)("br",{}),"\n",(0,l.jsx)("center",{children:(0,l.jsx)(e.mermaid,{value:"classDiagram\n  direction TB\n  User1 ..> U1Ops\n  User2 ..> U2Ops\n  User3 ..> U3Ops\n  U1Ops <|.. OPS\n  U2Ops <|.. OPS\n  U3Ops <|.. OPS\nclass OPS {\n  +op1() +op2() +op3()\n}\nclass U1Ops{\n  <<interface>>\n  +op1()\n}\nclass U2Ops{\n  <<interface>>\n  +op2()\n}\nclass U3Ops{\n  <<interface>>\n  +op3()\n}"})}),"\n",(0,l.jsx)(e.h2,{id:"dependency-inversion-principledip",children:"Dependency Inversion Principle(DIP)"}),"\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsx)(e.p,{children:"High-level modules should not depend on low-level modules. Both should depend on the abstraction.\nAbstractions should not depend on details. Details should depend on abstractions."}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"\uc6b4\uc601\uccb4\uc81c\ub098 \ud50c\ub7ab\ud3fc \uac19\uc774 \uc548\uc815\uc131\uc774 \ubcf4\uc7a5\ub41c \ud658\uacbd\uc5d0 \ub300\ud574\uc11c\ub294 DIP\ub97c \uc801\uc6a9\ud558\uc9c0 \uc54a\uc544\ub3c4 \ub429\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \uac1c\ubc1c\uc911\uc778 \ucf54\ub4dc\ub294 \uc5b8\uc81c \ubcc0\uacbd\ub420 \uc218 \uc788\uc744\uc9c0 \ubaa8\ub974\uae30 \ub54c\ubb38\uc5d0 DIP\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc758\uc874\uc131 \ud750\ub984\uc744 \uad00\ub9ac\ud558\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4."}),"\n",(0,l.jsx)(e.p,{children:"\uc778\ud130\ud398\uc774\uc2a4\uc640 \uad6c\ud604\uccb4\ub97c \uc0dd\uac01\ud574\ubcf4\uba74 \ub2f9\uc5f0\ud788 \uad6c\ud604\uccb4\uc758 \ubcc0\uacbd\uc774 \uc7a6\uc744 \uc218 \ubc16\uc5d0 \uc5c6\uc2b5\ub2c8\ub2e4. \ub530\ub77c\uc11c \uc544\ub798\uc640 \uac19\uc740 \uc0ac\ud56d\uc744 \uc9c0\ud0a4\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4."}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\ubcc0\ub3d9\uc131\uc774 \ud070 \uad6c\ud604\uccb4\ub97c \ucc38\uc870\ud558\uc9c0\ub9d0\uace0, \ucd94\uc0c1 \uc778\ud130\ud398\uc774\uc2a4\ub97c \ucc38\uc870\ud55c\ub2e4."}),"\n",(0,l.jsx)(e.li,{children:"\ubcc0\ub3d9\uc131\uc774 \ud070 \uad6c\ud604\uccb4 \ud074\ub798\uc2a4\ub97c \ucd5c\ub300\ud55c \uc0c1\uc18d\ubc1b\uc9c0 \uc54a\ub294\ub2e4."}),"\n",(0,l.jsx)(e.li,{children:"\uc0c1\uc18d\ubc1b\ub354\ub77c\ub3c4 \uad6c\ud604\uccb4 \ud568\uc218\ub97c \uc624\ubc84\ub77c\uc774\ub4dc \ud558\uc9c0 \uc54a\ub294\ub2e4. \ud544\uc694\ud558\uba74 \ucc28\ub77c\ub9ac \uc778\ud130\ud398\uc774\uc2a4\ub97c \uacf5\uc720\ud558\ub294 \uac01\uac01\uc758 \uad6c\ud604\uccb4\ub97c \ub9cc\ub4e0\ub2e4."}),"\n",(0,l.jsx)(e.li,{children:"\ubcc0\ub3d9\uc131\uc774 \ud06c\ub2e4\uba74 \uc5b4\ub5bb\uac8c \ud574\uc11c\ub4e0 \uc9c1\uc811 \uc0ac\uc6a9\uc744 \ud53c\ud55c\ub2e4."}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"reference",children:"Reference"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"Robert C. Martin, Clean Architecture(\ubc88\uc5ed\ubcf8)"}),"\n"]})]})}function a(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(p,{...n})}):p(n)}},28453:(n,e,i)=>{i.d(e,{R:()=>o,x:()=>t});var s=i(96540);const l={},r=s.createContext(l);function o(n){const e=s.useContext(r);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:o(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);