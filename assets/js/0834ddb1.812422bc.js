"use strict";(self.webpackChunkwiki_loliot_net=self.webpackChunkwiki_loliot_net||[]).push([[25881],{54538:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=l(74848),s=l(28453);l(49489),l(7227);const a={id:"swap",title:"Swap Memory",sidebar_label:"Swap Memory",description:"Swap Memory",keywords:["Linux","swap","memory"]},t=void 0,i={id:"linux/kernel/storage/swap",title:"Swap Memory",description:"Swap Memory",source:"@site/docs/linux/kernel/storage/swap.mdx",sourceDirName:"linux/kernel/storage",slug:"/linux/kernel/storage/swap",permalink:"/docs/linux/kernel/storage/swap",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1729871992e3,frontMatter:{id:"swap",title:"Swap Memory",sidebar_label:"Swap Memory",description:"Swap Memory",keywords:["Linux","swap","memory"]},sidebar:"linux-kernel",previous:{title:"LVM",permalink:"/docs/linux/kernel/storage/lvm"},next:{title:"fstab",permalink:"/docs/linux/kernel/storage/fstab"}},o={},c=[{value:"Swap Space \ub9cc\ub4e4\uae30",id:"swap-space-\ub9cc\ub4e4\uae30",level:2},{value:"Swap file",id:"swap-file",level:3},{value:"ZRAM",id:"zram",level:3},{value:"Swap ON/OFF",id:"swap-onoff",level:2},{value:"vm.swappiness",id:"vmswappiness",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"swap-space-\ub9cc\ub4e4\uae30",children:"Swap Space \ub9cc\ub4e4\uae30"}),"\n",(0,r.jsx)(n.h3,{id:"swap-file",children:"Swap file"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"sudo dd if=/dev/zero of=<swapfile> bs=<blockSize> count=<blockCount>\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"sudo chmod 600 <swapfile>\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"sudo mkswap <swapfile>\n"})}),"\n",(0,r.jsx)(n.h3,{id:"zram",children:"ZRAM"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"sudo modprobe zram [num_devices=<num>]\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"sudo zramctl <option> [<device>]\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"<option>"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"-f | --find"}),": free device\ub97c \ucc3e\uc2b5\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"-s | --size <size>"}),": device size\ub97c \uc124\uc815\ud569\ub2c8\ub2e4.(\uc555\ucd95 \ub418\uae30 \uc804 \ud06c\uae30)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"-a | --algorithm <alg>"}),": compression algorithm\uc744 \uc124\uc815\ud569\ub2c8\ub2e4."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"zramctl\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"sudo mkswap <device>\n"})}),"\n",(0,r.jsxs)(n.admonition,{type:"info",children:[(0,r.jsx)(n.p,{children:"udev\ub97c \uc0ac\uc6a9\ud558\uc5ec zram\uc744 \uc124\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",metastring:'title="/etc/modules-load.d/zram.conf"',children:"zram\n"})}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",metastring:'title="/etc/udev/rules.d/99-zram.rules"',children:'KERNEL=="zram0", ACTION=="add", ATTR{comp_algorithm}="lzo-rle", ATTR{disksize}="2G", RUN="/sbin/mkswap /dev/%k"\n'})}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ini",metastring:'title="/etc/systemd/system/zram.service"',children:"[Unit]\nDescription=Swap with zram\nAfter=multi-user.target\n\n[Service]\nRemainAfterExit=true\nExecStartPre=/sbin/mkswap /dev/zram0\nExecStart=/sbin/swapon -p 10 /dev/zram0\nExecStop=/sbin/swapoff /dev/zram0\n\n[Install]\nWantedBy=multi-user.target\n"})}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"sudo systemctl enable zram\n"})})]}),"\n",(0,r.jsx)(n.h2,{id:"swap-onoff",children:"Swap ON/OFF"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"sudo swapon <option> <spec>\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"<option>"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"-p | --priority <priority>"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"0 ~ 32767 \uac12\uc744 \uc124\uc815 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.li,{children:"\ud070 \uac12\uc77c \uc218\ub85d \uc6b0\uc120\uc21c\uc704\uac00 \ub192\uc2b5\ub2c8\ub2e4."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"-s | --summary"}),": swap \uc0c1\ud0dc\ub97c \ucd9c\ub825\ud569\ub2c8\ub2e4."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"sudo swapoff <spec>\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",metastring:'title="/etc/fstab"',children:"<spec> none swap defaults[,<option>] 0 0\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"<option>"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"pri=<priority>"}),": swap \uc6b0\uc120\uc21c\uc704"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"vmswappiness",children:"vm.swappiness"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/torvalds/linux/blob/v6.2/mm/vmscan.c#L3000-L3014",children:"https://github.com/torvalds/linux/blob/v6.2/mm/vmscan.c#L3000-L3014"})}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},7227:(e,n,l)=>{l.d(n,{A:()=>t});l(96540);var r=l(34164);const s={tabItem:"tabItem_Ymn6"};var a=l(74848);function t(e){let{children:n,hidden:l,className:t}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,t),hidden:l,children:n})}},49489:(e,n,l)=>{l.d(n,{A:()=>y});var r=l(96540),s=l(34164),a=l(24245),t=l(56347),i=l(36494),o=l(62814),c=l(67548),u=l(69900);function d(e){var n,l;return null!=(n=null==(l=r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:l.filter(Boolean))?n:[]}function p(e){const{values:n,children:l}=e;return(0,r.useMemo)((()=>{const e=null!=n?n:function(e){return d(e).map((e=>{let{props:{value:n,label:l,attributes:r,default:s}}=e;return{value:n,label:l,attributes:r,default:s}}))}(l);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,l])}function h(e){let{value:n,tabValues:l}=e;return l.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:l}=e;const s=(0,t.W6)(),a=function(e){let{queryString:n=!1,groupId:l}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!l)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=l?l:null}({queryString:n,groupId:l});return[(0,o.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(s.location.search);n.set(a,e),s.replace({...s.location,search:n.toString()})}),[a,s])]}function x(e){const{defaultValue:n,queryString:l=!1,groupId:s}=e,a=p(e),[t,o]=(0,r.useState)((()=>function(e){var n;let{defaultValue:l,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(l){if(!h({value:l,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+l+'" but none of its children has the corresponding value. Available values are: '+r.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return l}const s=null!=(n=r.find((e=>e.default)))?n:r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:a}))),[c,d]=m({queryString:l,groupId:s}),[x,f]=function(e){let{groupId:n}=e;const l=function(e){return e?"docusaurus.tab."+e:null}(n),[s,a]=(0,u.Dv)(l);return[s,(0,r.useCallback)((e=>{l&&a.set(e)}),[l,a])]}({groupId:s}),v=(()=>{const e=null!=c?c:x;return h({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{v&&o(v)}),[v]);return{selectedValue:t,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error("Can't select invalid tab value="+e);o(e),d(e),f(e)}),[d,f,a]),tabValues:a}}var f=l(11062);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=l(74848);function g(e){let{className:n,block:l,selectedValue:r,selectValue:t,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),u=e=>{const n=e.currentTarget,l=o.indexOf(n),s=i[l].value;s!==r&&(c(n),t(s))},d=e=>{var n;let l=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{var r;const n=o.indexOf(e.currentTarget)+1;l=null!=(r=o[n])?r:o[0];break}case"ArrowLeft":{var s;const n=o.indexOf(e.currentTarget)-1;l=null!=(s=o[n])?s:o[o.length-1];break}}null==(n=l)||n.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":l},n),children:i.map((e=>{let{value:n,label:l,attributes:a}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>o.push(e),onKeyDown:d,onClick:u,...a,className:(0,s.A)("tabs__item",v.tabItem,null==a?void 0:a.className,{"tabs__item--active":r===n}),children:null!=l?l:n},n)}))})}function j(e){let{lazy:n,children:l,selectedValue:a}=e;const t=(Array.isArray(l)?l:[l]).filter(Boolean);if(n){const e=t.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:t.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function w(e){const n=x(e);return(0,b.jsxs)("div",{className:(0,s.A)("tabs-container",v.tabList),children:[(0,b.jsx)(g,{...n,...e}),(0,b.jsx)(j,{...n,...e})]})}function y(e){const n=(0,f.A)();return(0,b.jsx)(w,{...e,children:d(e.children)},String(n))}},28453:(e,n,l)=>{l.d(n,{R:()=>t,x:()=>i});var r=l(96540);const s={},a=r.createContext(s);function t(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);