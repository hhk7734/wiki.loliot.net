"use strict";(self.webpackChunkwiki_loliot_net=self.webpackChunkwiki_loliot_net||[]).push([[42649],{76487:(e,n,a)=>{a.d(n,{A:()=>r});a(96540);var t=a(34164);const i={tabItem:"tabItem_Ymn6"};var l=a(74848);function r(e){let{children:n,hidden:a,className:r}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,t.A)(i.tabItem,r),hidden:a,children:n})}},87119:(e,n,a)=>{a.d(n,{A:()=>y});var t=a(96540),i=a(34164),l=a(53622),r=a(56347),s=a(68963),c=a(9579),o=a(52808),u=a(45054);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function v(e){const{values:n,children:a}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:a,attributes:t,default:i}}=e;return{value:n,label:a,attributes:t,default:i}}))}(a);return function(e){const n=(0,o.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function p(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:a}=e;const i=(0,r.W6)(),l=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,c.aZ)(l),(0,t.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(i.location.search);n.set(l,e),i.replace({...i.location,search:n.toString()})}),[l,i])]}function m(e){const{defaultValue:n,queryString:a=!1,groupId:i}=e,l=v(e),[r,c]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=a.find((e=>e.default))??a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:l}))),[o,d]=h({queryString:a,groupId:i}),[m,g]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,l]=(0,u.Dv)(a);return[i,(0,t.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:i}),x=(()=>{const e=o??m;return p({value:e,tabValues:l})?e:null})();(0,s.A)((()=>{x&&c(x)}),[x]);return{selectedValue:r,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),g(e)}),[d,g,l]),tabValues:l}}var g=a(94753);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=a(74848);function f(e){let{className:n,block:a,selectedValue:t,selectValue:r,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,l.a_)(),u=e=>{const n=e.currentTarget,a=c.indexOf(n),i=s[a].value;i!==t&&(o(n),r(i))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;n=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;n=c[a]??c[c.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":a},n),children:s.map((e=>{let{value:n,label:a,attributes:l}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>c.push(e),onKeyDown:d,onClick:u,...l,className:(0,i.A)("tabs__item",x.tabItem,l?.className,{"tabs__item--active":t===n}),children:a??n},n)}))})}function k(e){let{lazy:n,children:a,selectedValue:l}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===l));return e?(0,t.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==l})))})}function b(e){const n=m(e);return(0,j.jsxs)("div",{className:(0,i.A)("tabs-container",x.tabList),children:[(0,j.jsx)(f,{...n,...e}),(0,j.jsx)(k,{...n,...e})]})}function y(e){const n=(0,g.A)();return(0,j.jsx)(b,{...e,children:d(e.children)},String(n))}},77799:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>c,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"mlops/mlops/provisioning/knative/autoscaling","title":"Knative Auto Scaling \uc124\uc815\ud558\uae30","description":"Knative Auto Scaling \uc124\uc815\ud558\uae30","source":"@site/docs/mlops/mlops/provisioning/knative/autoscaling.mdx","sourceDirName":"mlops/mlops/provisioning/knative","slug":"/mlops/mlops/provisioning/knative/autoscaling","permalink":"/docs/mlops/mlops/provisioning/knative/autoscaling","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedAt":1731596630000,"frontMatter":{"id":"autoscaling","title":"Knative Auto Scaling \uc124\uc815\ud558\uae30","sidebar_label":"Auto Scaling \uc124\uc815\ud558\uae30","description":"Knative Auto Scaling \uc124\uc815\ud558\uae30","keywords":["knative","serverless","autoscaling","kpa","hpa"]},"sidebar":"mlops","previous":{"title":"Serving CRDs","permalink":"/docs/mlops/mlops/provisioning/knative/serving-crds"},"next":{"title":"k8s \uc778\uc99d(Authn)","permalink":"/docs/mlops/mlops/auth/authn"}}');var i=a(74848),l=a(28453),r=a(87119),s=a(76487);const c={id:"autoscaling",title:"Knative Auto Scaling \uc124\uc815\ud558\uae30",sidebar_label:"Auto Scaling \uc124\uc815\ud558\uae30",description:"Knative Auto Scaling \uc124\uc815\ud558\uae30",keywords:["knative","serverless","autoscaling","kpa","hpa"]},o=void 0,u={},d=[{value:"KPA/HPA",id:"kpahpa",level:2},{value:"\uc124\uc815",id:"\uc124\uc815",level:2},{value:"\uc804\uc5ed \uc124\uc815(Operator)",id:"\uc804\uc5ed-\uc124\uc815operator",level:3},{value:"Revision \ubcc4 \uc124\uc815",id:"revision-\ubcc4-\uc124\uc815",level:3}];function v(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"kpahpa",children:"KPA/HPA"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://knative.dev/docs/serving/autoscaling/autoscaler-types/",children:"https://knative.dev/docs/serving/autoscaling/autoscaler-types/"})}),"\n"]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["KPA(Knative Pod Autoscaler)","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Knative\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 \uae30\ubcf8\uc801\uc778 Pod Autoscaler\uc785\ub2c8\ub2e4."}),"\n",(0,i.jsx)(n.li,{children:"0\uc73c\ub85c \uc2a4\ucf00\uc77c\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4."}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"concurrency"}),", ",(0,i.jsx)(n.code,{children:"rps"})," \uae30\uc900\uc73c\ub85c Autoscaling\uc744 \uc9c0\uc6d0\ud569\ub2c8\ub2e4."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["HPA(Horizontal Pod Autoscaler)","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Kubernetes\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 Pod Autoscaler\uc785\ub2c8\ub2e4."}),"\n",(0,i.jsx)(n.li,{children:"0\uc73c\ub85c \uc2a4\ucf00\uc77c\uc774 \ubd88\uac00\ub2a5\ud569\ub2c8\ub2e4."}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"cpu"}),", ",(0,i.jsx)(n.code,{children:"memory"}),", ",(0,i.jsx)(n.code,{children:"<custom-metric>"})," \uae30\uc900\uc73c\ub85c Autoscaling\uc744 \uc9c0\uc6d0\ud569\ub2c8\ub2e4."]}),"\n",(0,i.jsxs)(n.li,{children:["\ud655\uc7a5\ud504\ub85c\uadf8\ub7a8 \uc124\uce58\uac00 \ud544\uc694\ud569\ub2c8\ub2e4.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://knative.dev/docs/install/yaml-install/serving/install-serving-with-yaml/#install-optional-serving-extensions",children:"https://knative.dev/docs/install/yaml-install/serving/install-serving-with-yaml/#install-optional-serving-extensions"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(r.A,{defaultValue:"operator",values:[{label:"\uc804\uc5ed \uc124\uc815(Operator)",value:"operator"},{label:"Revision \ubcc4 \uc124\uc815",value:"revision"}],children:[(0,i.jsx)(s.A,{value:"operator",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"apiVersion: operator.knative.dev/v1alpha1\nkind: KnativeServing\nspec:\n  config:\n    autoscaler:\n      pod-autoscaler-class: kpa.autoscaling.knative.dev # kpa.autoscaling.knative.dev|hpa.autoscaling.knative.dev\n"})})}),(0,i.jsx)(s.A,{value:"revision",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"apiVersion: serving.knative.dev/v1\nkind: Service\nspec:\n  template:\n    metadata:\n      annotations:\n        autoscaling.knative.dev/class: kpa.autoscaling.knative.dev # kpa.autoscaling.knative.dev|hpa.autoscaling.knative.dev\n"})})})]}),"\n",(0,i.jsx)(n.h2,{id:"\uc124\uc815",children:"\uc124\uc815"}),"\n",(0,i.jsx)(n.p,{children:"\ubaa8\ub4e0 \uc124\uc815\uc774 \uc804\uc5ed \uc124\uc815\uacfc Revision \ubcc4 \uc124\uc815\uc73c\ub85c \ub098\ub258\uc5b4\uc9c0\ub294 \uac83\uc740 \uc544\ub2d9\ub2c8\ub2e4."}),"\n",(0,i.jsx)(n.h3,{id:"\uc804\uc5ed-\uc124\uc815operator",children:"\uc804\uc5ed \uc124\uc815(Operator)"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'apiVersion: operator.knative.dev/v1alpha1\nkind: KnativeServing\nspec:\n  config:\n    defaults:\n      container-concurrency: "0"\n    autoscaler:\n      pod-autoscaler-class: kpa.autoscaling.knative.dev # kpa.autoscaling.knative.dev|hpa.autoscaling.knative.dev\n      min-scale: "0"\n      max-scale: "0" # 0 == no-limit\n      initial-scale: "1"\n      allow-zero-initial-scale: "false"\n      enable-scale-to-zero: "true"\n      scale-to-zero-grace-period: "30s"\n      scale-to-zero-pod-retention-period: "0s"\n      container-concurrency-target-default: "100"\n      container-concurrency-target-percentage: "70"\n      requests-per-second-target-default: "200"\n      scale-down-delay: "0s" # 0s <= value <= 1h\n      stable-window: "60s" # 6s <= value <= 1h\n      panic-window-percentage: "10.0" # 1.0 <= value <= 100.0\n      panic-threshold-percentage: "110.0" # 110.0 <= value <= 1000.0\n      max-scale-up-rate: "1000.0"\n      max-scale-down-rate: "2.0"\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"scale-to-zero-grace-period"}),": 0\uc73c\ub85c \uc2a4\ucf00\uc77c \ub420\ub54c\uae4c\uc9c0 \ub300\uae30\ud558\ub294 \uc0c1\ud55c \uc2dc\uac04\uc744 \uc124\uc815\ud569\ub2c8\ub2e4."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"scale-to-zero-pod-retention-period"}),": 0\uc73c\ub85c \uc2a4\ucf00\uc77c\ud558\uae30\ub85c \uacb0\uc815\ud55c \ud6c4, Pod\ub97c \uc720\uc9c0\ud560 \uc2dc\uac04\uc744 \uc124\uc815\ud569\ub2c8\ub2e4."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"panic-window-percentage"}),": panic \ubaa8\ub4dc\uc77c \ub54c ",(0,i.jsx)(n.code,{children:"window = stable-window * panic-window-percentage / 100"})," \uc785\ub2c8\ub2e4."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"panic-threshold-percentage"}),": metric\uc774 ",(0,i.jsx)(n.code,{children:"target * panic-threshold-percentage / 100"}),"\uc744 \ucd08\uacfc\ud558\uba74 panic \ubaa8\ub4dc\ub85c \uc804\ud658\ud569\ub2c8\ub2e4."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"max-scale-up-rate"}),": \ud55c\ubc88\uc5d0 \uc2a4\ucf00\uc77c \uc544\uc6c3\ub420 \uc218 \uc788\ub294 \uc218\ub294 ",(0,i.jsx)(n.code,{children:"\ud604\uc7ac Pod \uc218 * max-scale-up-rate"})," \uc785\ub2c8\ub2e4."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"max-scale-down-rate"}),": \ud55c\ubc88\uc5d0 \uc2a4\ucf00\uc77c \uc778\ub420 \uc218 \uc788\ub294 \uc218\ub294 ",(0,i.jsx)(n.code,{children:"\ud604\uc7ac Pod \uc218 / max-scale-down-rate"})," \uc785\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"revision-\ubcc4-\uc124\uc815",children:"Revision \ubcc4 \uc124\uc815"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'apiVersion: serving.knative.dev/v1\nkind: Service\nspec:\n  template:\n    metadata:\n      annotations:\n        autoscaling.knative.dev/class: kpa.autoscaling.knative.dev # kpa.autoscaling.knative.dev|hpa.autoscaling.knative.dev\n        autoscaling.knative.dev/min-scale: "0"\n        autoscaling.knative.dev/max-scale: "0" # 0 == no-limit\n        autoscaling.knative.dev/initial-scale: "1"\n        autoscaling.knative.dev/activation-scale: "1"\n        autoscaling.knative.dev/metric: concurrency # concurrency|rps|cpu|memory|<custom-metric>\n        autoscaling.knative.dev/target: "<number>"\n        autoscaling.knative.dev/target-utilization-percentage: "70" # concurrency\uc5d0 \uc801\uc6a9\n        autoscaling.knative.dev/scale-to-zero-pod-retention-period: "0s"\n        autoscaling.knative.dev/scale-down-delay: "0s" # 0s <= value <= 1h\n        autoscaling.knative.dev/window: "60s" # 6s <= value <= 1h\n        autoscaling.knative.dev/panic-window-percentage: "10.0" # 1.0 <= value <= 100.0\n        autoscaling.knative.dev/panic-threshold-percentage: "110.0" # 110.0 <= value <= 1000.0\n    spec:\n      containerConcurrency: 0\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"autoscaling.knative.dev/metric: <metric>"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"concurrency"}),": Pod\uc774 \ub3d9\uc2dc\uc5d0 \ucc98\ub9ac\ud560 \uc218 \uc788\ub294 \uc694\uccad\uc758 \uc218\uc785\ub2c8\ub2e4."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"rps"}),": Pod\uc774 \ucc98\ub9ac\ud560 \uc218 \uc788\ub294 \ucd08\ub2f9 \uc694\uccad\uc758 \uc218\uc785\ub2c8\ub2e4."]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"cpu"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"memory"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"<custom-metric>"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:'autoscaling.knative.dev/target: "<number>"'}),": metric\uc758 \uae30\uc900\uac12\uc744 \uc124\uc815\ud569\ub2c8\ub2e4.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\uae30\uc900\uac12\uc740 soft limit\uc73c\ub85c \uc774 \uac12\uc744 \ucd08\uacfc\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"concurrency"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"rps"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"cpu"}),": millicore \uac12\uc744 \uc124\uc815\ud569\ub2c8\ub2e4."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"memory"}),": Mi \uac12\uc744 \uc124\uc815\ud569\ub2c8\ub2e4."]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"<custom-metric>"})}),"\n"]}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(v,{...e})}):v(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>r,x:()=>s});var t=a(96540);const i={},l=t.createContext(i);function r(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);