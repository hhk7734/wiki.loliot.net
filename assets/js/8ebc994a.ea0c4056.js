"use strict";(self.webpackChunkwiki_loliot_net=self.webpackChunkwiki_loliot_net||[]).push([[81136],{61497:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var l=n(74848),r=n(28453),a=n(49489),s=n(7227);const o={id:"jq",title:"jq \uc0ac\uc6a9\ubc95",sidebar_label:"jq \uc0ac\uc6a9\ubc95",description:"jq \uc0ac\uc6a9\ubc95",keywords:["shell script","jq"]},u=void 0,i={id:"lang/shellscript/command-line-tools/jq",title:"jq \uc0ac\uc6a9\ubc95",description:"jq \uc0ac\uc6a9\ubc95",source:"@site/docs/lang/shellscript/command-line-tools/jq.mdx",sourceDirName:"lang/shellscript/command-line-tools",slug:"/lang/shellscript/command-line-tools/jq",permalink:"/docs/lang/shellscript/command-line-tools/jq",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1723917838e3,frontMatter:{id:"jq",title:"jq \uc0ac\uc6a9\ubc95",sidebar_label:"jq \uc0ac\uc6a9\ubc95",description:"jq \uc0ac\uc6a9\ubc95",keywords:["shell script","jq"]},sidebar:"shellscript",previous:{title:"xargs \uc0ac\uc6a9\ubc95",permalink:"/docs/lang/shellscript/command-line-tools/xargs"},next:{title:"awk \uc0ac\uc6a9\ubc95",permalink:"/docs/lang/shellscript/command-line-tools/awk"}},c={},d=[{value:"\uc124\uce58",id:"\uc124\uce58",level:2},{value:"\uc2e4\uc2dc\uac04 json log \ud30c\uc2f1",id:"\uc2e4\uc2dc\uac04-json-log-\ud30c\uc2f1",level:2}];function h(e){const t={code:"code",h2:"h2",pre:"pre",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h2,{id:"\uc124\uce58",children:"\uc124\uce58"}),"\n",(0,l.jsxs)(a.A,{groupId:"os",defaultValue:"arch",values:[{label:"Arch Linux",value:"arch"},{label:"Debian",value:"debian"}],children:[(0,l.jsx)(s.A,{value:"arch",children:(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-shell",children:"sudo pacman -S jq\n"})})}),(0,l.jsx)(s.A,{value:"debian",children:(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-shell",children:"sudo apt install jq\n"})})})]}),"\n",(0,l.jsx)(t.h2,{id:"\uc2e4\uc2dc\uac04-json-log-\ud30c\uc2f1",children:"\uc2e4\uc2dc\uac04 json log \ud30c\uc2f1"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-shell",children:"alias log2jq=\"jq -rRC --unbuffered '. as \\$line | try fromjson catch \\$line' | sed 's/\\\\\\\\n/\\\\n/g; s/\\\\\\\\t/\\\\t/g'\"\n"})}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-shell",children:"<program> | log2jq\n"})})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},7227:(e,t,n)=>{n.d(t,{A:()=>s});n(96540);var l=n(34164);const r={tabItem:"tabItem_Ymn6"};var a=n(74848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,l.A)(r.tabItem,s),hidden:n,children:t})}},49489:(e,t,n)=>{n.d(t,{A:()=>w});var l=n(96540),r=n(34164),a=n(24245),s=n(56347),o=n(36494),u=n(62814),i=n(67548),c=n(69900);function d(e){var t,n;return null!=(t=null==(n=l.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function h(e){const{values:t,children:n}=e;return(0,l.useMemo)((()=>{const e=null!=t?t:function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:l,default:r}}=e;return{value:t,label:n,attributes:l,default:r}}))}(n);return function(e){const t=(0,i.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,s.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:t,groupId:n});return[(0,u.aZ)(a),(0,l.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(r.location.search);t.set(a,e),r.replace({...r.location,search:t.toString()})}),[a,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,a=h(e),[s,u]=(0,l.useState)((()=>function(e){var t;let{defaultValue:n,tabValues:l}=e;if(0===l.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:l}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+l.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}const r=null!=(t=l.find((e=>e.default)))?t:l[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[i,d]=m({queryString:n,groupId:r}),[f,b]=function(e){let{groupId:t}=e;const n=function(e){return e?"docusaurus.tab."+e:null}(t),[r,a]=(0,c.Dv)(n);return[r,(0,l.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:r}),v=(()=>{const e=null!=i?i:f;return p({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{v&&u(v)}),[v]);return{selectedValue:s,selectValue:(0,l.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error("Can't select invalid tab value="+e);u(e),d(e),b(e)}),[d,b,a]),tabValues:a}}var b=n(11062);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(74848);function j(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:o}=e;const u=[],{blockElementScrollPositionUntilNextRender:i}=(0,a.a_)(),c=e=>{const t=e.currentTarget,n=u.indexOf(t),r=o[n].value;r!==l&&(i(t),s(r))},d=e=>{var t;let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{var l;const t=u.indexOf(e.currentTarget)+1;n=null!=(l=u[t])?l:u[0];break}case"ArrowLeft":{var r;const t=u.indexOf(e.currentTarget)-1;n=null!=(r=u[t])?r:u[u.length-1];break}}null==(t=n)||t.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,ref:e=>u.push(e),onKeyDown:d,onClick:c,...a,className:(0,r.A)("tabs__item",v.tabItem,null==a?void 0:a.className,{"tabs__item--active":l===t}),children:null!=n?n:t},t)}))})}function x(e){let{lazy:t,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,l.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function q(e){const t=f(e);return(0,g.jsxs)("div",{className:(0,r.A)("tabs-container",v.tabList),children:[(0,g.jsx)(j,{...t,...e}),(0,g.jsx)(x,{...t,...e})]})}function w(e){const t=(0,b.A)();return(0,g.jsx)(q,{...e,children:d(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var l=n(96540);const r={},a=l.createContext(r);function s(e){const t=l.useContext(a);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),l.createElement(a.Provider,{value:t},e.children)}}}]);