"use strict";(self.webpackChunkwiki_loliot_net=self.webpackChunkwiki_loliot_net||[]).push([[73146],{1862:(s,e,a)=>{a.r(e),a.d(e,{assets:()=>r,contentTitle:()=>m,default:()=>d,frontMatter:()=>c,metadata:()=>n,toc:()=>t});const n=JSON.parse('{"id":"lang/db/sql/design/user-defined-order","title":"\uc0ac\uc6a9\uc790 \uc815\uc758 \uc21c\uc11c(User Defined Order)","description":"\uc0ac\uc6a9\uc790 \uc815\uc758 \uc21c\uc11c(User Defined Order)","source":"@site/docs/lang/db/sql/design/user-defined-order.mdx","sourceDirName":"lang/db/sql/design","slug":"/lang/db/sql/design/user-defined-order","permalink":"/docs/lang/db/sql/design/user-defined-order","draft":false,"unlisted":false,"editUrl":"https://github.com/hhk7734/wiki/tree/main/docs/lang/db/sql/design/user-defined-order.mdx","tags":[],"version":"current","lastUpdatedAt":1732905402000,"frontMatter":{"id":"user-defined-order","title":"\uc0ac\uc6a9\uc790 \uc815\uc758 \uc21c\uc11c(User Defined Order)","sidebar_label":"\uc0ac\uc6a9\uc790 \uc815\uc758 \uc21c\uc11c","description":"\uc0ac\uc6a9\uc790 \uc815\uc758 \uc21c\uc11c(User Defined Order)","keywords":["sql","user-defined","order"]},"sidebar":"db","previous":{"title":"Pagination","permalink":"/docs/lang/db/sql/design/pagination"},"next":{"title":"MongoDB","permalink":"/docs/lang/db/mongodb/"}}');var l=a(74848),i=a(28453);const c={id:"user-defined-order",title:"\uc0ac\uc6a9\uc790 \uc815\uc758 \uc21c\uc11c(User Defined Order)",sidebar_label:"\uc0ac\uc6a9\uc790 \uc815\uc758 \uc21c\uc11c",description:"\uc0ac\uc6a9\uc790 \uc815\uc758 \uc21c\uc11c(User Defined Order)",keywords:["sql","user-defined","order"]},m=void 0,r={},t=[{value:"LexoRank",id:"lexorank",level:2},{value:"Linked List",id:"linked-list",level:2}];function h(s){const e={a:"a",annotation:"annotation",code:"code",h2:"h2",li:"li",math:"math",mn:"mn",mo:"mo",mrow:"mrow",msup:"msup",p:"p",semantics:"semantics",span:"span",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...s.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h2,{id:"lexorank",children:"LexoRank"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.a,{href:"https://github.com/hhk7734/lexorank.py",children:"https://github.com/hhk7734/lexorank.py"})}),"\n"]}),"\n",(0,l.jsx)("br",{}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["Bucket","\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"Rank \uac12\uc744 \uc800\uc7a5\ud558\ub294 \uacf3\uc785\ub2c8\ub2e4."}),"\n",(0,l.jsx)(e.li,{children:"0 -> 1 -> 2 -> 0 \uc21c\uc73c\ub85c \uc21c\ud658\ud558\ub294 3 \uac1c\uc758 Bucket\uc774 \uc874\uc7ac\ud569\ub2c8\ub2e4."}),"\n",(0,l.jsx)(e.li,{children:"1 \uac1c\uc758 Bucket\ub9cc \uc0ac\uc6a9\ub418\uba70, Balancing\uc744 \ud558\ub294 \ub3d9\uc548\uc5d0\ub9cc 2 \uac1c\uc758 Bucket\uc774 \uc874\uc7ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["Balancing","\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"Rank\ub97c \ubcc0\uacbd\ud560 \uc218 \uc5c6\ub294 \uacbd\uc6b0\uac00 \ubc1c\uc0dd\ud55c \uacbd\uc6b0, \uc804\uccb4 Rank\ub97c \ub2e4\uc2dc \uacc4\uc0b0\ud558\ub294 \uac83\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4."}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["Marker Row","\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"Type 0: \uac00\uc7a5 \uc791\uc740 Rank \uac12\uc744 \uac00\uc9c4 Row"}),"\n",(0,l.jsx)(e.li,{children:"Type 1"}),"\n",(0,l.jsx)(e.li,{children:"Type 2: \uac00\uc7a5 \ud070 Rank \uac12\uc744 \uac00\uc9c4 Row"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)("br",{}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"<bucket>|<rank>"})," \ud615\ud0dc\ub85c \uc800\uc7a5\ud569\ub2c8\ub2e4."]}),"\n",(0,l.jsxs)(e.li,{children:["base36(JIRA): ",(0,l.jsx)(e.code,{children:"0123456789abcdefghijklmnopqrstuvwxyz"})]}),"\n",(0,l.jsxs)(e.li,{children:["base64: ",(0,l.jsx)(e.code,{children:"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ^_abcdefghijklmnopqrstuvwxyz"})]}),"\n",(0,l.jsxs)(e.li,{children:["\uc18c\uc22b\uc810 \ub300\uc2e0 ",(0,l.jsx)(e.code,{children:":"})," \ubb38\uc790\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4."]}),"\n",(0,l.jsxs)(e.li,{children:["\uc22b\uc790 \ubc94\uc704","\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsxs)(e.msup,{children:[(0,l.jsx)(e.mn,{children:"2"}),(0,l.jsx)(e.mn,{children:"31"})]}),(0,l.jsx)(e.mo,{children:"<"}),(0,l.jsx)(e.mn,{children:"3"}),(0,l.jsxs)(e.msup,{children:[(0,l.jsx)(e.mn,{children:"6"}),(0,l.jsx)(e.mn,{children:"6"})]}),(0,l.jsx)(e.mo,{children:"<"}),(0,l.jsxs)(e.msup,{children:[(0,l.jsx)(e.mn,{children:"2"}),(0,l.jsx)(e.mn,{children:"32"})]})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"2^{31} < 36^{6} < 2^{32}"})]})})}),(0,l.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.8532em",verticalAlign:"-0.0391em"}}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord",children:"2"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsx)(e.span,{className:"vlist-t",children:(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.8141em"},children:(0,l.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"31"})})})]})})})})})]}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(e.span,{className:"mrel",children:"<"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.8532em",verticalAlign:"-0.0391em"}}),(0,l.jsx)(e.span,{className:"mord",children:"3"}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord",children:"6"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsx)(e.span,{className:"vlist-t",children:(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.8141em"},children:(0,l.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"6"})})})]})})})})})]}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(e.span,{className:"mrel",children:"<"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.8141em"}}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord",children:"2"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsx)(e.span,{className:"vlist-t",children:(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.8141em"},children:(0,l.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"32"})})})]})})})})})]})]})]})]})}),"\n",(0,l.jsx)(e.li,{children:(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsxs)(e.msup,{children:[(0,l.jsx)(e.mn,{children:"2"}),(0,l.jsx)(e.mn,{children:"1271"})]}),(0,l.jsx)(e.mo,{children:"<"}),(0,l.jsx)(e.mn,{children:"3"}),(0,l.jsxs)(e.msup,{children:[(0,l.jsx)(e.mn,{children:"6"}),(0,l.jsx)(e.mn,{children:"246"})]}),(0,l.jsx)(e.mo,{children:"<"}),(0,l.jsxs)(e.msup,{children:[(0,l.jsx)(e.mn,{children:"2"}),(0,l.jsx)(e.mn,{children:"1272"})]})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"2^{1271} < 36^{246} < 2^{1272}"})]})})}),(0,l.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.8532em",verticalAlign:"-0.0391em"}}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord",children:"2"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsx)(e.span,{className:"vlist-t",children:(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.8141em"},children:(0,l.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"1271"})})})]})})})})})]}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(e.span,{className:"mrel",children:"<"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.8532em",verticalAlign:"-0.0391em"}}),(0,l.jsx)(e.span,{className:"mord",children:"3"}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord",children:"6"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsx)(e.span,{className:"vlist-t",children:(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.8141em"},children:(0,l.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"246"})})})]})})})})})]}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(e.span,{className:"mrel",children:"<"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.8141em"}}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord",children:"2"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsx)(e.span,{className:"vlist-t",children:(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.8141em"},children:(0,l.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"1272"})})})]})})})})})]})]})]})]})}),"\n",(0,l.jsx)(e.li,{children:(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsxs)(e.msup,{children:[(0,l.jsx)(e.mn,{children:"2"}),(0,l.jsx)(e.mn,{children:"1302"})]}),(0,l.jsx)(e.mo,{children:"<"}),(0,l.jsx)(e.mn,{children:"3"}),(0,l.jsxs)(e.msup,{children:[(0,l.jsx)(e.mn,{children:"6"}),(0,l.jsx)(e.mn,{children:"252"})]}),(0,l.jsx)(e.mo,{children:"<"}),(0,l.jsxs)(e.msup,{children:[(0,l.jsx)(e.mn,{children:"2"}),(0,l.jsx)(e.mn,{children:"1303"})]})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"2^{1302} < 36^{252} < 2^{1303}"})]})})}),(0,l.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.8532em",verticalAlign:"-0.0391em"}}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord",children:"2"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsx)(e.span,{className:"vlist-t",children:(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.8141em"},children:(0,l.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"1302"})})})]})})})})})]}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(e.span,{className:"mrel",children:"<"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.8532em",verticalAlign:"-0.0391em"}}),(0,l.jsx)(e.span,{className:"mord",children:"3"}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord",children:"6"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsx)(e.span,{className:"vlist-t",children:(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.8141em"},children:(0,l.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"252"})})})]})})})})})]}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(e.span,{className:"mrel",children:"<"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.8141em"}}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord",children:"2"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsx)(e.span,{className:"vlist-t",children:(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.8141em"},children:(0,l.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"1303"})})})]})})})})})]})]})]})]})}),"\n",(0,l.jsx)(e.li,{children:(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mn,{children:"6"}),(0,l.jsxs)(e.msup,{children:[(0,l.jsx)(e.mn,{children:"4"}),(0,l.jsx)(e.mn,{children:"6"})]}),(0,l.jsx)(e.mo,{children:"="}),(0,l.jsxs)(e.msup,{children:[(0,l.jsx)(e.mn,{children:"2"}),(0,l.jsx)(e.mn,{children:"36"})]})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"64^{6} = 2^{36}"})]})})}),(0,l.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.8141em"}}),(0,l.jsx)(e.span,{className:"mord",children:"6"}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord",children:"4"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsx)(e.span,{className:"vlist-t",children:(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.8141em"},children:(0,l.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"6"})})})]})})})})})]}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(e.span,{className:"mrel",children:"="}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.8141em"}}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord",children:"2"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsx)(e.span,{className:"vlist-t",children:(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.8141em"},children:(0,l.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"36"})})})]})})})})})]})]})]})]})}),"\n",(0,l.jsx)(e.li,{children:(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mn,{children:"6"}),(0,l.jsxs)(e.msup,{children:[(0,l.jsx)(e.mn,{children:"4"}),(0,l.jsx)(e.mn,{children:"246"})]}),(0,l.jsx)(e.mo,{children:"="}),(0,l.jsxs)(e.msup,{children:[(0,l.jsx)(e.mn,{children:"2"}),(0,l.jsx)(e.mn,{children:"1476"})]})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"64^{246} = 2^{1476}"})]})})}),(0,l.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.8141em"}}),(0,l.jsx)(e.span,{className:"mord",children:"6"}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord",children:"4"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsx)(e.span,{className:"vlist-t",children:(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.8141em"},children:(0,l.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"246"})})})]})})})})})]}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(e.span,{className:"mrel",children:"="}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.8141em"}}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord",children:"2"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsx)(e.span,{className:"vlist-t",children:(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.8141em"},children:(0,l.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"1476"})})})]})})})})})]})]})]})]})}),"\n",(0,l.jsx)(e.li,{children:(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mn,{children:"6"}),(0,l.jsxs)(e.msup,{children:[(0,l.jsx)(e.mn,{children:"4"}),(0,l.jsx)(e.mn,{children:"252"})]}),(0,l.jsx)(e.mo,{children:"="}),(0,l.jsxs)(e.msup,{children:[(0,l.jsx)(e.mn,{children:"2"}),(0,l.jsx)(e.mn,{children:"1512"})]})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"64^{252} = 2^{1512}"})]})})}),(0,l.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.8141em"}}),(0,l.jsx)(e.span,{className:"mord",children:"6"}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord",children:"4"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsx)(e.span,{className:"vlist-t",children:(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.8141em"},children:(0,l.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"252"})})})]})})})})})]}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(e.span,{className:"mrel",children:"="}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.8141em"}}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord",children:"2"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsx)(e.span,{className:"vlist-t",children:(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.8141em"},children:(0,l.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"1512"})})})]})})})})})]})]})]})]})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{children:"id"}),(0,l.jsx)(e.th,{children:"rank"})]})}),(0,l.jsxs)(e.tbody,{children:[(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"1"}),(0,l.jsx)(e.td,{children:"0|000001:"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"2"}),(0,l.jsx)(e.td,{children:"0|hzzzzz:"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"3"}),(0,l.jsx)(e.td,{children:"0|i00000:"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"4"}),(0,l.jsx)(e.td,{children:"0|zzzzzz:"})]})]})]}),"\n",(0,l.jsx)(e.h2,{id:"linked-list",children:"Linked List"}),"\n",(0,l.jsx)(e.p,{children:"TODO"})]})}function d(s={}){const{wrapper:e}={...(0,i.R)(),...s.components};return e?(0,l.jsx)(e,{...s,children:(0,l.jsx)(h,{...s})}):h(s)}},28453:(s,e,a)=>{a.d(e,{R:()=>c,x:()=>m});var n=a(96540);const l={},i=n.createContext(l);function c(s){const e=n.useContext(i);return n.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function m(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(l):s.components||l:c(s.components),n.createElement(i.Provider,{value:e},s.children)}}}]);