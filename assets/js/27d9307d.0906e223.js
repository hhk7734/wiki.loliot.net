"use strict";(self.webpackChunkwiki_loliot_net=self.webpackChunkwiki_loliot_net||[]).push([[94455],{76487:(e,t,n)=>{n.d(t,{A:()=>s});n(96540);var l=n(34164);const r={tabItem:"tabItem_Ymn6"};var a=n(74848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,l.A)(r.tabItem,s),hidden:n,children:t})}},87119:(e,t,n)=>{n.d(t,{A:()=>L});var l=n(96540),r=n(34164),a=n(53622),s=n(56347),i=n(68963),o=n(9579),c=n(52808),u=n(45054);function d(e){return l.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,l.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:l,default:r}}=e;return{value:t,label:n,attributes:l,default:r}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function f(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const r=(0,s.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o.aZ)(a),(0,l.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(r.location.search);t.set(a,e),r.replace({...r.location,search:t.toString()})}),[a,r])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,a=h(e),[s,o]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const l=n.find((e=>e.default))??n[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:t,tabValues:a}))),[c,d]=p({queryString:n,groupId:r}),[m,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,a]=(0,u.Dv)(n);return[r,(0,l.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:r}),b=(()=>{const e=c??m;return f({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{b&&o(b)}),[b]);return{selectedValue:s,selectValue:(0,l.useCallback)((e=>{if(!f({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),g(e)}),[d,g,a]),tabValues:a}}var g=n(94753);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(74848);function x(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),u=e=>{const t=e.currentTarget,n=o.indexOf(t),r=i[n].value;r!==l&&(c(t),s(r))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,ref:e=>o.push(e),onKeyDown:d,onClick:u,...a,className:(0,r.A)("tabs__item",b.tabItem,a?.className,{"tabs__item--active":l===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,l.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function S(e){const t=m(e);return(0,v.jsxs)("div",{className:(0,r.A)("tabs-container",b.tabList),children:[(0,v.jsx)(x,{...t,...e}),(0,v.jsx)(j,{...t,...e})]})}function L(e){const t=(0,g.A)();return(0,v.jsx)(S,{...e,children:d(e.children)},String(t))}},59076:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>d});const l=JSON.parse('{"id":"lang/etc/command-line-tools/git/lfs","title":"Git LFS","description":"Git LFS(Large File Storage)","source":"@site/docs/lang/etc/command-line-tools/git/lfs.mdx","sourceDirName":"lang/etc/command-line-tools/git","slug":"/lang/etc/command-line-tools/git/lfs","permalink":"/docs/lang/etc/command-line-tools/git/lfs","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedAt":1731596630000,"frontMatter":{"id":"lfs","title":"Git LFS","sidebar_label":"LFS(Large File Storage)","description":"Git LFS(Large File Storage)","keywords":["Git","LFS"]},"sidebar":"programmingetc","previous":{"title":"pre-commit","permalink":"/docs/lang/etc/command-line-tools/git/pre-commit"},"next":{"title":"ip \uc0ac\uc6a9\ubc95","permalink":"/docs/lang/etc/command-line-tools/network/ip"}}');var r=n(74848),a=n(28453),s=n(87119),i=n(76487);const o={id:"lfs",title:"Git LFS",sidebar_label:"LFS(Large File Storage)",description:"Git LFS(Large File Storage)",keywords:["Git","LFS"]},c=void 0,u={},d=[{value:"\uc124\uce58",id:"\uc124\uce58",level:2},{value:"LFS\uc5d0 \ud30c\uc77c \ucd94\uac00",id:"lfs\uc5d0-\ud30c\uc77c-\ucd94\uac00",level:2},{value:"LFS \ud30c\uc77c \ub2e4\uc6b4\ub85c\ub4dc",id:"lfs-\ud30c\uc77c-\ub2e4\uc6b4\ub85c\ub4dc",level:2},{value:"LFS\uc5d0\uc11c \ud30c\uc77c \uc0ad\uc81c",id:"lfs\uc5d0\uc11c-\ud30c\uc77c-\uc0ad\uc81c",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"\uc124\uce58",children:"\uc124\uce58"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/git-lfs/git-lfs#getting-started",children:"https://github.com/git-lfs/git-lfs#getting-started"})}),"\n"]}),"\n",(0,r.jsxs)(s.A,{groupId:"os",defaultValue:"arch",values:[{label:"Arch Linux",value:"arch"},{label:"Debian",value:"debian"}],children:[(0,r.jsx)(i.A,{value:"arch",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"sudo pacman -S git-lfs\n"})})}),(0,r.jsx)(i.A,{value:"debian",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"sudo apt install git-lfs\n"})})})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"git lfs install [--local]\n"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"--local"}),": \ud2b9\uc815 \ub9ac\ud3ec\uc9c0\ud1a0\ub9ac\uc5d0\uc11c\ub9cc \ud65c\uc131\ud654 \ud558\ub824\ub294 \uacbd\uc6b0 \ud574\ub2f9 \ub9ac\ud3ec\uc9c0\ud1a0\ub9ac\ub85c \uc774\ub3d9 \ud6c4 \uc774 \uc635\uc158\uc744 \uc0ac\uc6a9\ud558\uba74 \ub429\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"lfs\uc5d0-\ud30c\uc77c-\ucd94\uac00",children:"LFS\uc5d0 \ud30c\uc77c \ucd94\uac00"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"git lfs track <pattern>\n"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"<pattern>"}),": LFS\ub85c \uad00\ub9ac\ud560 \ud30c\uc77c\uba85 \ub610\ub294 \ud328\ud134\uc744 \uc785\ub825\ud569\ub2c8\ub2e4. ex) ",(0,r.jsx)(t.code,{children:"*.zip"})]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"lfs-\ud30c\uc77c-\ub2e4\uc6b4\ub85c\ub4dc",children:"LFS \ud30c\uc77c \ub2e4\uc6b4\ub85c\ub4dc"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"git lfs pull\n"})}),"\n",(0,r.jsx)(t.h2,{id:"lfs\uc5d0\uc11c-\ud30c\uc77c-\uc0ad\uc81c",children:"LFS\uc5d0\uc11c \ud30c\uc77c \uc0ad\uc81c"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"git lfs untrack <pattern>\n"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"git rm --cached <pattern>\n"})})]})}function f(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>i});var l=n(96540);const r={},a=l.createContext(r);function s(e){const t=l.useContext(a);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),l.createElement(a.Provider,{value:t},e.children)}}}]);