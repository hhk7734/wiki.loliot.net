"use strict";(self.webpackChunkwiki_loliot_net=self.webpackChunkwiki_loliot_net||[]).push([[68086],{72141:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>u,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var t=s(74848),r=s(28453);const o={id:"asynchronous-request-response",title:"Asynchronous Request-Response",sidebar_label:"Async Request-Response",description:"Asynchronous Request-Response",keywords:["async","long-running"]},a=void 0,i={id:"lang/design/asynchronous-request-response/asynchronous-request-response",title:"Asynchronous Request-Response",description:"Asynchronous Request-Response",source:"@site/docs/lang/design/asynchronous-request-response/asynchronous-request-response.mdx",sourceDirName:"lang/design/asynchronous-request-response",slug:"/lang/design/asynchronous-request-response/",permalink:"/docs/lang/design/asynchronous-request-response/",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1729318814e3,frontMatter:{id:"asynchronous-request-response",title:"Asynchronous Request-Response",sidebar_label:"Async Request-Response",description:"Asynchronous Request-Response",keywords:["async","long-running"]},sidebar:"design",previous:{title:"Authentication",permalink:"/docs/lang/design/protocol/email/authentication"},next:{title:"Queue and Worker",permalink:"/docs/lang/design/asynchronous-request-response/queue-worker"}},u={},l=[{value:"\uc7a5\uae30 \uc2e4\ud589 \uc791\uc5c5(Long Running Task)",id:"\uc7a5\uae30-\uc2e4\ud589-\uc791\uc5c5long-running-task",level:2},{value:"\uc694\uccad(Request)",id:"\uc694\uccadrequest",level:2},{value:"\uc0c1\ud0dc(Status) &amp;&amp; \uc751\ub2f5(Response)",id:"\uc0c1\ud0dcstatus--\uc751\ub2f5response",level:2},{value:"Polling",id:"polling",level:3},{value:"SSE(Server Sent Event) || Websocket",id:"sseserver-sent-event--websocket",level:3},{value:"\ucde8\uc18c(Cancel)",id:"\ucde8\uc18ccancel",level:2}];function c(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",mermaid:"mermaid",ol:"ol",p:"p",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"\uc7a5\uae30-\uc2e4\ud589-\uc791\uc5c5long-running-task",children:"\uc7a5\uae30 \uc2e4\ud589 \uc791\uc5c5(Long Running Task)"}),"\n",(0,t.jsx)(n.p,{children:"\ud074\ub77c\uc774\uc5b8\ud2b8\uc5d0\uc11c \uc11c\ubc84\uc5d0 \uc694\uccad\uc744 \ubcf4\ub0c8\uc744 \ub54c, \uc11c\ubc84\uc5d0\uc11c \uc2e0\uc18d\ud558\uac8c \uc751\ub2f5\uc744 \ubcf4\ub0b4\uc9c0 \ubabb\ud558\uc9c0\ub9cc \ud074\ub77c\uc774\uc5b8\ud2b8\ub294 \uc11c\ubc84\uc758 \uc751\ub2f5\uc744 \ubc1b\uc544\uc57c\ud558\ub294 \uacbd\uc6b0\uac00 \uc788\uc2b5\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 \ucc98\ub9ac\ud558\ub294 \ub370 1\ucd08\uac00 \uac78\ub9ac\ub294 CPU \ubc14\uc6b4\ub4dc \uc791\uc5c5\uc744 \uc694\uccad\ud588\uc744 \ub54c, \ub300\ub7c9\uc758 \uc694\uccad\uc774 \uc624\ub294 \uacbd\uc6b0 \uc11c\ubc84\ub294 1\ucd08 \uc774\uc0c1 \uc751\ub2f5\uc744 \ubabb\ud558\uac70\ub098 \uc694\uccad \uc790\uccb4\ub97c \ucc98\ub9ac\ud558\uc9c0 \ubabb\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,t.jsx)(n.p,{children:"\uc774\ub7ec\ud55c \uc0c1\ud669\uc5d0 \ub300\ud574 Scale up/out\ub9cc\uc73c\ub85c \ucc98\ub9ac\ud560 \uc218 \uc5c6\ub294 \uacbd\uc6b0"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"\uc11c\ubc84\ub97c \uc11c\ubc84\uc640 \uc6cc\ucee4\ub85c \ubd84\ub9ac"}),"\n",(0,t.jsx)(n.li,{children:"\ud074\ub77c\uc774\uc5b8\ud2b8\uac00 \ud604\uc7ac \uc9c4\ud589\uc0c1\ud0dc\ub97c \uc54c \uc218 \uc788\ub3c4\ub85d \uc0c1\ud0dc(Status) \uc5d4\ub4dc\ud3ec\uc778\ud2b8\ub97c \ucd94\uac00"}),"\n",(0,t.jsx)(n.li,{children:"\ucde8\uc18c\uac00 \ud544\uc694\ud55c \uc7a5\uae30 \uc2e4\ud589 \uc791\uc5c5\uc5d0 \ub300\ud574\uc11c\ub294 \ucde8\uc18c(Cancel) \uc815\ucc45\uacfc \uc5d4\ub4dc\ud3ec\uc778\ud2b8 \ucd94\uac00"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\uac00 \ud544\uc694\ud569\ub2c8\ub2e4."}),"\n",(0,t.jsx)(n.h2,{id:"\uc694\uccadrequest",children:"\uc694\uccad(Request)"}),"\n",(0,t.jsx)(n.mermaid,{value:"sequenceDiagram\n  actor Client\n  participant Server\n  participant RequestQueue\n  participant Worker\n\n  Client->>Server: POST Request\n  Server->>RequestQueue: Request\n  Server--\x3e>Client: 202 Accepted\n  RequestQueue--\x3e>Worker: Request"}),"\n",(0,t.jsx)(n.h2,{id:"\uc0c1\ud0dcstatus--\uc751\ub2f5response",children:"\uc0c1\ud0dc(Status) && \uc751\ub2f5(Response)"}),"\n",(0,t.jsx)(n.mermaid,{value:"sequenceDiagram\n  actor Client\n  participant Server\n  participant StatusQueue\n  participant Worker\n\n  alt webhook\n    Worker->>Server: Status\n  else StatusQueue\n    Worker->>StatusQueue: Status\n    StatusQueue--\x3e>Server: Status\n  end"}),"\n",(0,t.jsx)(n.h3,{id:"polling",children:"Polling"}),"\n",(0,t.jsxs)(n.p,{children:["Polling\uc774 \ub9ce\uc544\uc9c0\uba74 \uc11c\ubc84\uc5d0 \ubd80\ud558\uac00 \uac78\ub9ac\uae30 \ub54c\ubb38\uc5d0 \uc774\ub97c \uc644\ud654\ud558\uae30 \uc704\ud574 ",(0,t.jsx)(n.code,{children:"Retry-After: <date||seconds>"})," \ud5e4\ub354\ub97c \uc0ac\uc6a9\ud558\uc5ec \ud074\ub77c\uc774\uc5b8\ud2b8\uac00 \uc694\uccad \uac04\uaca9\uc744 \uc870\uc808\ud560 \uc218 \uc788\ub3c4\ub85d \ud558\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4."]}),"\n",(0,t.jsx)(n.mermaid,{value:"sequenceDiagram\n  actor Client\n  participant Server\n\n  loop\n    Client->>Server: GET Status\n    Server--\x3e>Client: Status\n  end\n\n  Client->>Server: GET Response\n  Server--\x3e>Client: Response"}),"\n",(0,t.jsx)(n.h3,{id:"sseserver-sent-event--websocket",children:"SSE(Server Sent Event) || Websocket"}),"\n",(0,t.jsx)(n.mermaid,{value:"sequenceDiagram\n  actor Client\n  participant Server\n\n  Server->>Client: Status || Response"}),"\n",(0,t.jsx)(n.h2,{id:"\ucde8\uc18ccancel",children:"\ucde8\uc18c(Cancel)"}),"\n",(0,t.jsx)(n.mermaid,{value:"sequenceDiagram\n  actor Client\n  participant Server\n  participant CancelQueue\n  participant StatusQueue\n  participant Worker\n\n  Client->>Server: POST Cancel\n  Server--\x3e>Client: 202 Accepted\n\n  Server ->> CancelQueue: Cancel\n  CancelQueue--\x3e>Worker: Cancel\n  alt webhook\n    Worker->>Server: Status(Canceled)\n  else StatusQueue\n    Worker->>StatusQueue: Status(Canceled)\n    StatusQueue--\x3e>Server: Status(Canceled)\n  end"})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>i});var t=s(96540);const r={},o=t.createContext(r);function a(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);