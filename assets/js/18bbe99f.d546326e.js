"use strict";(self.webpackChunkwiki_loliot_net=self.webpackChunkwiki_loliot_net||[]).push([[60679],{76487:(e,l,n)=>{n.d(l,{A:()=>r});n(96540);var i=n(34164);const t={tabItem:"tabItem_Ymn6"};var a=n(74848);function r(e){let{children:l,hidden:n,className:r}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,i.A)(t.tabItem,r),hidden:n,children:l})}},87119:(e,l,n)=>{n.d(l,{A:()=>y});var i=n(96540),t=n(34164),a=n(53622),r=n(56347),s=n(68963),c=n(9579),o=n(52808),d=n(45054);function u(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:l}=e;return!!l&&"object"==typeof l&&"value"in l}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:l,children:n}=e;return(0,i.useMemo)((()=>{const e=l??function(e){return u(e).map((e=>{let{props:{value:l,label:n,attributes:i,default:t}}=e;return{value:l,label:n,attributes:i,default:t}}))}(n);return function(e){const l=(0,o.XI)(e,((e,l)=>e.value===l.value));if(l.length>0)throw new Error(`Docusaurus error: Duplicate values "${l.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[l,n])}function h(e){let{value:l,tabValues:n}=e;return n.some((e=>e.value===l))}function g(e){let{queryString:l=!1,groupId:n}=e;const t=(0,r.W6)(),a=function(e){let{queryString:l=!1,groupId:n}=e;if("string"==typeof l)return l;if(!1===l)return null;if(!0===l&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:l,groupId:n});return[(0,c.aZ)(a),(0,i.useCallback)((e=>{if(!a)return;const l=new URLSearchParams(t.location.search);l.set(a,e),t.replace({...t.location,search:l.toString()})}),[a,t])]}function x(e){const{defaultValue:l,queryString:n=!1,groupId:t}=e,a=m(e),[r,c]=(0,i.useState)((()=>function(e){let{defaultValue:l,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(l){if(!h({value:l,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${l}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return l}const i=n.find((e=>e.default))??n[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:l,tabValues:a}))),[o,u]=g({queryString:n,groupId:t}),[x,f]=function(e){let{groupId:l}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(l),[t,a]=(0,d.Dv)(n);return[t,(0,i.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:t}),p=(()=>{const e=o??x;return h({value:e,tabValues:a})?e:null})();(0,s.A)((()=>{p&&c(p)}),[p]);return{selectedValue:r,selectValue:(0,i.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),f(e)}),[u,f,a]),tabValues:a}}var f=n(94753);const p={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=n(74848);function v(e){let{className:l,block:n,selectedValue:i,selectValue:r,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,a.a_)(),d=e=>{const l=e.currentTarget,n=c.indexOf(l),t=s[n].value;t!==i&&(o(l),r(t))},u=e=>{let l=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;l=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;l=c[n]??c[c.length-1];break}}l?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":n},l),children:s.map((e=>{let{value:l,label:n,attributes:a}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:i===l?0:-1,"aria-selected":i===l,ref:e=>c.push(e),onKeyDown:u,onClick:d,...a,className:(0,t.A)("tabs__item",p.tabItem,a?.className,{"tabs__item--active":i===l}),children:n??l},l)}))})}function b(e){let{lazy:l,children:n,selectedValue:a}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(l){const e=r.find((e=>e.props.value===a));return e?(0,i.cloneElement)(e,{className:(0,t.A)("margin-top--md",e.props.className)}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:r.map(((e,l)=>(0,i.cloneElement)(e,{key:l,hidden:e.props.value!==a})))})}function w(e){const l=x(e);return(0,j.jsxs)("div",{className:(0,t.A)("tabs-container",p.tabList),children:[(0,j.jsx)(v,{...l,...e}),(0,j.jsx)(b,{...l,...e})]})}function y(e){const l=(0,f.A)();return(0,j.jsx)(w,{...e,children:u(e.children)},String(l))}},17297:(e,l,n)=>{n.r(l),n.d(l,{assets:()=>u,contentTitle:()=>d,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>m});const i=JSON.parse('{"id":"lang/etc/command-line-tools/git/git","title":"Git \uae30\ubcf8 \uc548\ub0b4","description":"Git \uae30\ubcf8 \uc548\ub0b4","source":"@site/docs/lang/etc/command-line-tools/git/git.mdx","sourceDirName":"lang/etc/command-line-tools/git","slug":"/lang/etc/command-line-tools/git/","permalink":"/docs/lang/etc/command-line-tools/git/","draft":false,"unlisted":false,"editUrl":"https://github.com/hhk7734/wiki/tree/main/docs/lang/etc/command-line-tools/git/git.mdx","tags":[],"version":"current","lastUpdatedAt":1732196727000,"frontMatter":{"id":"git","title":"Git \uae30\ubcf8 \uc548\ub0b4","sidebar_label":"Git \uae30\ubcf8 \uc548\ub0b4","description":"Git \uae30\ubcf8 \uc548\ub0b4","keywords":["Git"]},"sidebar":"programmingetc","previous":{"title":"zellij \uc0ac\uc6a9\ubc95","permalink":"/docs/lang/etc/command-line-tools/remote/zellij"},"next":{"title":"Git config","permalink":"/docs/lang/etc/command-line-tools/git/config"}}');var t=n(74848),a=n(28453),r=n(24763),s=n(87119),c=n(76487);const o={id:"git",title:"Git \uae30\ubcf8 \uc548\ub0b4",sidebar_label:"Git \uae30\ubcf8 \uc548\ub0b4",description:"Git \uae30\ubcf8 \uc548\ub0b4",keywords:["Git"]},d=void 0,u={},m=[{value:"\uc124\uce58",id:"\uc124\uce58",level:2},{value:"clone",id:"clone",level:2},{value:"add, rm, mv, commit",id:"add-rm-mv-commit",level:2},{value:"add",id:"add",level:3},{value:"rm",id:"rm",level:3},{value:"mv",id:"mv",level:3},{value:"commit",id:"commit",level:3},{value:"log",id:"log",level:2},{value:"log with commit message",id:"log-with-commit-message",level:3},{value:"log with commit message + diff",id:"log-with-commit-message--diff",level:3},{value:"log with commit message + statistic",id:"log-with-commit-message--statistic",level:3},{value:"log with oneline commit message",id:"log-with-oneline-commit-message",level:3},{value:"reflog",id:"reflog",level:2},{value:"commit hash &amp;&amp; HEAD",id:"commit-hash--head",level:2},{value:"reset",id:"reset",level:2},{value:"remote",id:"remote",level:2}];function h(e){const l={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.h2,{id:"\uc124\uce58",children:"\uc124\uce58"}),"\n",(0,t.jsxs)(s.A,{groupId:"os",defaultValue:"arch",values:[{label:"Arch Linux",value:"arch"},{label:"Debian",value:"debian"}],children:[(0,t.jsx)(c.A,{value:"arch",children:(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-shell",children:"sudo pacman -S git\n"})})}),(0,t.jsx)(c.A,{value:"debian",children:(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-shell",children:"sudo apt install git\n"})})})]}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-shell",children:'git config --global user.name "Hyeonki Hong"\n'})}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-shell",children:'git config --global user.email "hhk7734@gmail.com"\n'})}),"\n",(0,t.jsxs)(l.ul,{children:["\n",(0,t.jsxs)(l.li,{children:["\ud68c\uc0ac \uc544\uc774\ub514, \uac1c\uc778 \uc544\uc774\ub514 \ub4f1 \uc5ec\ub7ec email\uc744 \uc0ac\uc6a9\ud558\ub294 \uacbd\uc6b0 ",(0,t.jsx)(l.code,{children:"--global"})," \ub300\uc2e0 \uac01 \ub9ac\ud3ec\uc9c0\ud1a0\ub9ac\uc5d0\uc11c ",(0,t.jsx)(l.code,{children:"--local"})," \uc635\uc158\uc73c\ub85c \uc124\uc815\ud558\uba74 \ub429\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-shell",children:"git config --global core.autocrlf input \\\n&& git config --global core.eol lf \\\n&& git config --global core.editor vim \\\n&& git config --global core.ignorecase false\n"})}),"\n",(0,t.jsxs)(s.A,{groupId:"os",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"Mac OS",value:"mac"}],children:[(0,t.jsx)(c.A,{value:"linux",children:(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-shell",children:"git config --global credential.helper 'cache --timeout=86400'\n"})})}),(0,t.jsx)(c.A,{value:"mac",children:(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-shell",children:"git config --global credential.helper osxkeychain\n"})})})]}),"\n",(0,t.jsx)(l.h2,{id:"clone",children:"clone"}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-shell",children:"git clone <repository>\n"})}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-shell",children:"git clone <repository> -b <tag or branch> --single-branch\n"})}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-shell",children:"git clone <repository> -b <tag or branch> --depth <# of commit>\n"})}),"\n",(0,t.jsx)(l.h2,{id:"add-rm-mv-commit",children:"add, rm, mv, commit"}),"\n",(0,t.jsx)("center",{children:(0,t.jsx)("img",{src:(0,r.Ay)("img/lang/etc/command-line-tools/git/git-basics-diagram.png")})}),"\n",(0,t.jsx)(l.h3,{id:"add",children:"add"}),"\n",(0,t.jsxs)(l.p,{children:[(0,t.jsx)(l.code,{children:"git add"})," \uba85\ub839\uc5b4\ub294 Untracked file, Modified file \uc744 Staging area\uc5d0 \ubc18\uc601\ud569\ub2c8\ub2e4."]}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-shell",children:"git add <file>\n"})}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-shell",children:"git add .\n"})}),"\n",(0,t.jsx)(l.h3,{id:"rm",children:"rm"}),"\n",(0,t.jsxs)(l.p,{children:[(0,t.jsx)(l.code,{children:"git rm"})," \uba85\ub839\uc5b4\ub294 Tracked file\uc744 Untracked file\ub85c \ubcc0\uacbd\ud558\uace0 Staging area\uc5d0 \uc0ad\uc81c\ub41c \uc0c1\ud0dc\ub77c\ub294 \uac83\uc744 \ubc18\uc601\ud569\ub2c8\ub2e4."]}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-shell",children:"git rm <file>\n"})}),"\n",(0,t.jsx)(l.p,{children:"\ud30c\uc77c\uc774 \ubcc0\uacbd\ub418\uc5b4 Staging area\uc5d0 \uc788\ub294 \uacbd\uc6b0 -f \uc635\uc158\uc744 \uc0ac\uc6a9\ud574 \uac15\uc81c \uc0ad\uc81c \ud574\uc57c\ud569\ub2c8\ub2e4."}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-shell",children:"git rm -f <file>\n"})}),"\n",(0,t.jsx)(l.h3,{id:"mv",children:"mv"}),"\n",(0,t.jsxs)(l.p,{children:[(0,t.jsx)(l.code,{children:"git mv"})," \uba85\ub839\uc5b4\ub294 \ud30c\uc77c\uc758 \uc704\uce58\ub97c \ubcc0\uacbd\ud558\uac70\ub098 \uc774\ub984\uc744 \ubcc0\uacbd\uc744 \ud55c \ud6c4 Staging area\uc5d0 \ubc18\uc601\ud569\ub2c8\ub2e4."]}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-shell",children:"git mv <file> <newName|directory>\n"})}),"\n",(0,t.jsx)(l.h3,{id:"commit",children:"commit"}),"\n",(0,t.jsxs)(l.p,{children:[(0,t.jsx)(l.code,{children:"git commit"})," \uba85\ub839\uc5b4\ub294 Staging area\uc5d0\uc11c \ud30c\uc77c\uc744 \uc81c\uc678\uc2dc\ud0a4\uace0, Unmodified file\ub85c \ubcc0\uacbd\ud55c \ud6c4 commit\ub41c \ud558\ub098\uc758 \uc791\uc5c5\uc73c\ub85c \ub4f1\ub85d\ud569\ub2c8\ub2e4."]}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-shell",children:"git commit\n"})}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-shell",children:'git commit -m "<message>"\n'})}),"\n",(0,t.jsx)(l.h2,{id:"log",children:"log"}),"\n",(0,t.jsx)(l.h3,{id:"log-with-commit-message",children:"log with commit message"}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-shell",children:"git log [-<# of commit>] [directory or file]\n"})}),"\n",(0,t.jsx)(l.h3,{id:"log-with-commit-message--diff",children:"log with commit message + diff"}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-shell",children:"git log -p [-<# of commit>] [directory or file]\n"})}),"\n",(0,t.jsx)(l.h3,{id:"log-with-commit-message--statistic",children:"log with commit message + statistic"}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-shell",children:"git log --stat [-# of commit] [directory or file]\n"})}),"\n",(0,t.jsx)(l.h3,{id:"log-with-oneline-commit-message",children:"log with oneline commit message"}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-shell",children:"git log --oneline [--graph] [-# of commit] [directory or file]\n"})}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-shell",children:'git log --pretty=format:"[format]" [--graph] [-# of commit] [directory or file]\n'})}),"\n",(0,t.jsx)(l.h2,{id:"reflog",children:"reflog"}),"\n",(0,t.jsxs)(l.p,{children:[(0,t.jsx)(l.code,{children:"git reflog"})," \uba85\ub839\uc5b4\ub85c git \ubcc0\uacbd \uc774\ub825\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-shell",children:"git reflog\n"})}),"\n",(0,t.jsx)(l.h2,{id:"commit-hash--head",children:"commit hash && HEAD"}),"\n",(0,t.jsxs)(l.p,{children:[(0,t.jsx)(l.code,{children:"commit hash"}),"\ub294 \ud2b9\uc815 \ucee4\ubc0b\uc744 \uac00\ub9ac\ud0a4\ub294 ",(0,t.jsx)(l.code,{children:"7f0e7030d57d469d150c17eb4746872e415fb379"}),"\uc640 \uac19\uc740 \ud574\uc2dc\uac12\uc785\ub2c8\ub2e4."]}),"\n",(0,t.jsx)(l.p,{children:"\ucee4\ubc0b\uc744 \uac00\ub9ac\ud0ac\ub54c \ud574\uc2dc\uac12\uc758 \uc55e\uc5d0\uc11c\ubd80\ud130 7\uc790\ub9ac \uc815\ub3c4\ub9cc \uc0ac\uc6a9\ud574\ub3c4 \uad6c\ubcc4\uc774 \ub418\uae30 \ub54c\ubb38\uc5d0 \uac12 \uc804\uccb4\ub97c \uc0ac\uc6a9\ud560 \ud544\uc694\ub294 \uc5c6\uc2b5\ub2c8\ub2e4."}),"\n",(0,t.jsxs)(l.p,{children:[(0,t.jsx)(l.code,{children:"HEAD"}),"\ub77c\ub294 \ud0a4\uc6cc\ub4dc \uc870\ud569\uc73c\ub85c \ud604\uc7ac \ucee4\ubc0b \uae30\uc900\uc73c\ub85c \uc0c1\ub300\uc801 \uc704\uce58\uc758 \ucee4\ubc0b\uc744 \uac00\ub9ac\ud0ac \uc218\ub3c4 \uc788\ub294\ub370 \uaddc\uce59\uc740 \uc544\ub798\uc640 \uac19\uc2b5\ub2c8\ub2e4."]}),"\n",(0,t.jsx)("center",{children:(0,t.jsx)("img",{src:(0,r.Ay)("img/lang/etc/command-line-tools/git/git-basics-head.png")})}),"\n",(0,t.jsxs)(l.p,{children:["reflog\uc5d0 \ub530\ub978 \uc0c1\ub300\uc801\uc778 \ucee4\ubc0b \uc704\uce58\ub294 ",(0,t.jsx)(l.code,{children:"HEAD@{#}"}),"\uc73c\ub85c \uac00\ub9ac\ud0ac \uc218 \uc788\uc2b5\ub2c8\ub2e4. # \ub300\uc2e0 \uc22b\uc790\ub97c \uc801\uc73c\uc2dc\uba74 \ub429\ub2c8\ub2e4."]}),"\n",(0,t.jsx)(l.h2,{id:"reset",children:"reset"}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-shell",children:"git reset --[soft|mixed|hard] <commit hash>\n"})}),"\n",(0,t.jsxs)(l.ul,{children:["\n",(0,t.jsx)(l.li,{children:"soft: index\ub294 \uc720\uc9c0\ud558\uace0, HEAD\ub9cc \ud574\ub2f9 \ucee4\ubc0b\uc73c\ub85c \ub418\ub3cc\ub9bd\ub2c8\ub2e4."}),"\n",(0,t.jsx)(l.li,{children:"mixed: index, HEAD\ub97c \ud574\ub2f9 \ucee4\ubc0b\uc73c\ub85c \ub418\ub3cc\ub9bd\ub2c8\ub2e4. \ud30c\uc77c \uc218\uc815 \ub0b4\uc6a9\uc740 \ub0a8\uc544\uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,t.jsx)(l.li,{children:"hard: \ud574\ub2f9 \ucee4\ubc0b \uc2dc\uc810\uc73c\ub85c \uc644\uc804\ud788 \ub418\ub3cc\ub9bd\ub2c8\ub2e4."}),"\n"]}),"\n",(0,t.jsx)(l.h2,{id:"remote",children:"remote"}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-shell",children:"git remote update --prune\n"})})]})}function g(e={}){const{wrapper:l}={...(0,a.R)(),...e.components};return l?(0,t.jsx)(l,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,l,n)=>{n.d(l,{R:()=>r,x:()=>s});var i=n(96540);const t={},a=i.createContext(t);function r(e){const l=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(l):{...l,...e}}),[l,e])}function s(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(a.Provider,{value:l},e.children)}}}]);