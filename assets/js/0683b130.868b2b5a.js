"use strict";(self.webpackChunkwiki_loliot_net=self.webpackChunkwiki_loliot_net||[]).push([[80900],{63088:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>y,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var l=o(74848),t=o(28453),r=o(98180);const i={id:"python-yolov4-model-neck",title:"Neck",sidebar_label:"Neck",description:"YOLOv4 Neck",keywords:["Neural Network","YOLOv4","TensorFlow","SPP"]},s=void 0,d={id:"lang/python/libraries/yolov4/model/python-yolov4-model-neck",title:"Neck",description:"YOLOv4 Neck",source:"@site/docs/lang/python/libraries/yolov4/model/python-yolov4-model-neck.mdx",sourceDirName:"lang/python/libraries/yolov4/model",slug:"/lang/python/libraries/yolov4/model/python-yolov4-model-neck",permalink:"/docs/lang/python/libraries/yolov4/model/python-yolov4-model-neck",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1729871992e3,frontMatter:{id:"python-yolov4-model-neck",title:"Neck",sidebar_label:"Neck",description:"YOLOv4 Neck",keywords:["Neural Network","YOLOv4","TensorFlow","SPP"]},sidebar:"python",previous:{title:"Backbone",permalink:"/docs/lang/python/libraries/yolov4/model/python-yolov4-model-backbone"},next:{title:"Loss",permalink:"/docs/lang/python/libraries/yolov4/model/python-yolov4-model-loss"}},a={},c=[{value:"SPP",id:"spp",level:2},{value:"modified PAN",id:"modified-pan",level:2},{value:"Reference",id:"reference",level:2}];function p(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"spp",children:"SPP"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"SPP"}),": Spatial Pyramid Pooling"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ini",children:"[maxpool]\nstride=1\nsize=5\n\n[route]\nlayers=-2\n\n[maxpool]\nstride=1\nsize=9\n\n[route]\nlayers=-4\n\n[maxpool]\nstride=1\nsize=13\n\n[route]\nlayers=-1,-3,-5,-6\n"})}),"\n",(0,l.jsx)("center",{children:(0,l.jsx)("img",{src:(0,r.Ay)("img/lang/python/libraries/yolov4/model/yolov4-spp.jpeg")})}),"\n",(0,l.jsx)(n.h2,{id:"modified-pan",children:"modified PAN"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"PAN"}),": Path Aggregation Network"]}),"\n",(0,l.jsx)("center",{children:(0,l.jsx)("img",{src:(0,r.Ay)("img/lang/python/libraries/yolov4/model/yolov4-modified-pan.jpeg")})}),"\n",(0,l.jsx)("center",{children:(0,l.jsx)("img",{src:(0,r.Ay)("img/lang/python/libraries/yolov4/model/yolov4-pan.jpeg")})}),"\n",(0,l.jsx)(n.h2,{id:"reference",children:"Reference"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://github.com/AlexeyAB/darknet/wiki/CFG-Parameters-in-the-different-layers",children:"https://github.com/AlexeyAB/darknet/wiki/CFG-Parameters-in-the-different-layers"})}),"\n",(0,l.jsx)(n.li,{children:"YOLOv4: Optimal Speed and Accuracy of Object Detection"}),"\n"]})]})}function y(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(p,{...e})}):p(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>s});var l=o(96540);const t={},r=l.createContext(t);function i(e){const n=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);