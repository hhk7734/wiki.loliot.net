"use strict";(self.webpackChunkwiki_loliot_net=self.webpackChunkwiki_loliot_net||[]).push([[81136],{95476:(e,t,n)=>{n.d(t,{A:()=>s});n(96540);var r=n(18215);const a={tabItem:"tabItem_Ymn6"};var l=n(74848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,s),hidden:n,children:t})}},40915:(e,t,n)=>{n.d(t,{A:()=>w});var r=n(96540),a=n(18215),l=n(53622),s=n(56347),o=n(68963),i=n(9579),u=n(52808),c=n(45054);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,u.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.W6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=h(e),[s,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[u,d]=m({queryString:n,groupId:a}),[f,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,c.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),g=(()=>{const e=u??f;return p({value:e,tabValues:l})?e:null})();(0,o.A)((()=>{g&&i(g)}),[g]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),b(e)}),[d,b,l]),tabValues:l}}var b=n(94753);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(74848);function j(e){let{className:t,block:n,selectedValue:r,selectValue:s,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.a_)(),c=e=>{const t=e.currentTarget,n=i.indexOf(t),a=o[n].value;a!==r&&(u(t),s(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:l}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>i.push(e),onKeyDown:d,onClick:c,...l,className:(0,a.A)("tabs__item",g.tabItem,l?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function x(e){let{lazy:t,children:n,selectedValue:l}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===l));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==l})))})}function q(e){const t=f(e);return(0,v.jsxs)("div",{className:(0,a.A)("tabs-container",g.tabList),children:[(0,v.jsx)(j,{...t,...e}),(0,v.jsx)(x,{...t,...e})]})}function w(e){const t=(0,b.A)();return(0,v.jsx)(q,{...e,children:d(e.children)},String(t))}},73378:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"lang/shellscript/command-line-tools/jq","title":"jq \uc0ac\uc6a9\ubc95","description":"jq \uc0ac\uc6a9\ubc95","source":"@site/docs/lang/shellscript/command-line-tools/jq.mdx","sourceDirName":"lang/shellscript/command-line-tools","slug":"/lang/shellscript/command-line-tools/jq","permalink":"/docs/lang/shellscript/command-line-tools/jq","draft":false,"unlisted":false,"editUrl":"https://github.com/hhk7734/wiki/tree/main/docs/lang/shellscript/command-line-tools/jq.mdx","tags":[],"version":"current","lastUpdatedAt":1733240816000,"frontMatter":{"id":"jq","title":"jq \uc0ac\uc6a9\ubc95","sidebar_label":"jq \uc0ac\uc6a9\ubc95","description":"jq \uc0ac\uc6a9\ubc95","keywords":["shell script","jq"]},"sidebar":"shellscript","previous":{"title":"xargs \uc0ac\uc6a9\ubc95","permalink":"/docs/lang/shellscript/command-line-tools/xargs"},"next":{"title":"awk \uc0ac\uc6a9\ubc95","permalink":"/docs/lang/shellscript/command-line-tools/awk"}}');var a=n(74848),l=n(28453),s=n(40915),o=n(95476);const i={id:"jq",title:"jq \uc0ac\uc6a9\ubc95",sidebar_label:"jq \uc0ac\uc6a9\ubc95",description:"jq \uc0ac\uc6a9\ubc95",keywords:["shell script","jq"]},u=void 0,c={},d=[{value:"\uc124\uce58",id:"\uc124\uce58",level:2},{value:"\uc2e4\uc2dc\uac04 json log \ud30c\uc2f1",id:"\uc2e4\uc2dc\uac04-json-log-\ud30c\uc2f1",level:2}];function h(e){const t={code:"code",h2:"h2",pre:"pre",...(0,l.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"\uc124\uce58",children:"\uc124\uce58"}),"\n",(0,a.jsxs)(s.A,{groupId:"os",defaultValue:"arch",values:[{label:"Arch Linux",value:"arch"},{label:"Debian",value:"debian"}],children:[(0,a.jsx)(o.A,{value:"arch",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",children:"sudo pacman -S jq\n"})})}),(0,a.jsx)(o.A,{value:"debian",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",children:"sudo apt install jq\n"})})})]}),"\n",(0,a.jsx)(t.h2,{id:"\uc2e4\uc2dc\uac04-json-log-\ud30c\uc2f1",children:"\uc2e4\uc2dc\uac04 json log \ud30c\uc2f1"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",children:"alias log2jq=\"jq -rRC --unbuffered '. as \\$line | try fromjson catch \\$line' | sed 's/\\\\\\\\n/\\\\n/g; s/\\\\\\\\t/\\\\t/g'\"\n"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",children:"<program> | log2jq\n"})})]})}function p(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var r=n(96540);const a={},l=r.createContext(a);function s(e){const t=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);