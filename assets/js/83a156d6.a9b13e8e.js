"use strict";(self.webpackChunkwiki_loliot_net=self.webpackChunkwiki_loliot_net||[]).push([[35785],{74009:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=e(74848),o=e(28453);const i={id:"shutdown",title:"Graceful Shutdown",sidebar_label:"Graceful Shutdown",description:"Graceful Shutdown",keywords:["gin","go","graceful","shutdown"]},s=void 0,l={id:"lang/go/libraries/gin/shutdown",title:"Graceful Shutdown",description:"Graceful Shutdown",source:"@site/docs/lang/go/libraries/gin/shutdown.mdx",sourceDirName:"lang/go/libraries/gin",slug:"/lang/go/libraries/gin/shutdown",permalink:"/docs/lang/go/libraries/gin/shutdown",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1724686915e3,frontMatter:{id:"shutdown",title:"Graceful Shutdown",sidebar_label:"Graceful Shutdown",description:"Graceful Shutdown",keywords:["gin","go","graceful","shutdown"]},sidebar:"go",previous:{title:"CRUD",permalink:"/docs/lang/go/libraries/gin/crud"},next:{title:"Deploy",permalink:"/docs/lang/go/libraries/gin/deploy"}},a={},c=[{value:"Graceful Shutdown",id:"graceful-shutdown",level:2}];function d(n){const t={code:"code",h2:"h2",pre:"pre",...(0,o.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"graceful-shutdown",children:"Graceful Shutdown"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:'func main() {\n\t//\n\t// Startup\n\t//\n\n\t// ...\n\n\tserver := &http.Server{\n\t\tAddr:         ":8080",\n\t\tHandler:      engin,\n\t}\n\n\tlistenErr := make(chan error, 1)\n\n\tgo func() {\n\t\tif err := server.ListenAndServe(); err != nil && err != http.ErrServerClosed {\n\t\t\tlistenErr <- err\n\t\t}\n\t}()\n\n\t// ...\n\n\tshutdown := make(chan os.Signal, 1)\n\tsignal.Notify(shutdown, syscall.SIGINT, syscall.SIGTERM)\n\n\tselect {\n\tcase err := <-listenErr:\n\t\tlogger.Logger(context.Background()).Error("failed to listen and serve", zap.Error(err))\n\tcase <-shutdown:\n\t}\n\n\t//\n\t// Shutdown\n\t//\n\tlogger.Logger(context.Background()).Info("shutting down...")\n\n\twg := &sync.WaitGroup{}\n\n\tgo func() {\n\t\tdefer wg.Done()\n\n\t\tctx, cancel := context.WithTimeout(context.Background(), 20*time.Second)\n\t\tdefer cancel()\n\n\t\t// blocked until all connections are closed or timeout\n\t\tif err := server.Shutdown(ctx); err != nil {\n\t\t\tlogger.Logger(context.Background()).Error("failed to shutdown server", zap.Error(err))\n\t\t}\n\t}()\n\twg.Add(1)\n\n\t// ...\n\n\twg.Wait()\n}\n'})})]})}function u(n={}){const{wrapper:t}={...(0,o.R)(),...n.components};return t?(0,r.jsx)(t,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},28453:(n,t,e)=>{e.d(t,{R:()=>s,x:()=>l});var r=e(96540);const o={},i=r.createContext(o);function s(n){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function l(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:s(n.components),r.createElement(i.Provider,{value:t},n.children)}}}]);