"use strict";(self.webpackChunkwiki_loliot_net=self.webpackChunkwiki_loliot_net||[]).push([[53473],{27036:(e,l,s)=>{s.r(l),s.d(l,{assets:()=>i,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"mlops/mlops/aws/parallel-cluster/etc","title":"etc","description":"etc","source":"@site/docs/mlops/mlops/aws/parallel-cluster/etc.mdx","sourceDirName":"mlops/mlops/aws/parallel-cluster","slug":"/mlops/mlops/aws/parallel-cluster/etc","permalink":"/docs/mlops/mlops/aws/parallel-cluster/etc","draft":false,"unlisted":false,"editUrl":"https://github.com/hhk7734/wiki/tree/main/docs/mlops/mlops/aws/parallel-cluster/etc.mdx","tags":[],"version":"current","lastUpdatedAt":1735233432000,"frontMatter":{"id":"etc","title":"etc","sidebar_label":"etc","description":"etc","keywords":["ParallelCluster"]},"sidebar":"mlops","previous":{"title":"CustomActions","permalink":"/docs/mlops/mlops/aws/parallel-cluster/custom-action"},"next":{"title":"SES","permalink":"/docs/mlops/mlops/aws/ses"}}');var t=s(74848),c=s(28453);const o={id:"etc",title:"etc",sidebar_label:"etc",description:"etc",keywords:["ParallelCluster"]},r=void 0,i={},d=[{value:"Instance \uc124\uc815",id:"instance-\uc124\uc815",level:2},{value:"Environment",id:"environment",level:3},{value:"ResumeTimeout",id:"resumetimeout",level:4},{value:"scontrol \uba85\ub839\uc5b4",id:"scontrol-\uba85\ub839\uc5b4",level:2},{value:"CF \uc0c1\ud0dc\uc5d0\uc11c \uba48\ucdb0\uc788\ub294 \uc791\uc5c5 \uc7ac\uc2dc\uc791\ud558\uae30",id:"cf-\uc0c1\ud0dc\uc5d0\uc11c-\uba48\ucdb0\uc788\ub294-\uc791\uc5c5-\uc7ac\uc2dc\uc791\ud558\uae30",level:3}];function a(e){const l={code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.h2,{id:"instance-\uc124\uc815",children:"Instance \uc124\uc815"}),"\n",(0,t.jsx)(l.h3,{id:"environment",children:"Environment"}),"\n",(0,t.jsxs)(l.ul,{children:["\n",(0,t.jsx)(l.li,{children:(0,t.jsx)(l.code,{children:"/opt/slurm"})}),"\n",(0,t.jsx)(l.li,{children:(0,t.jsx)(l.code,{children:"/opt/slurm/etc/slurm.conf"})}),"\n",(0,t.jsx)(l.li,{children:(0,t.jsx)(l.code,{children:"/opt/slurm/etc/slurm.sh"})}),"\n",(0,t.jsxs)(l.li,{children:[(0,t.jsx)(l.code,{children:"/etc/profile.d/slurm.sh -> /opt/slurm/etc/slurm.sh"}),"(symbolic link)"]}),"\n"]}),"\n",(0,t.jsx)(l.h4,{id:"resumetimeout",children:"ResumeTimeout"}),"\n",(0,t.jsxs)(l.p,{children:[(0,t.jsx)(l.code,{children:"/opt/slurm/etc/slurm.conf"})," \ud30c\uc77c\uc5d0\uc11c \uc544\ub798 \uc124\uc815\uac12\uc744 \uc218\uc815\ud558\uc5ec \uc7a1\uc774 \uc5c6\uc744 \ub54c \ucef4\ud4e8\ud2b8 \ub178\ub4dc\uac00 \uaebc\uc9c8 \uc2dc\uac04\uc744 \uc124\uc815\ud569\ub2c8\ub2e4."]}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-shell",children:"ResumeTimeout=600\n"})}),"\n",(0,t.jsx)(l.h2,{id:"scontrol-\uba85\ub839\uc5b4",children:"scontrol \uba85\ub839\uc5b4"}),"\n",(0,t.jsxs)(l.p,{children:[(0,t.jsx)(l.code,{children:"<jobid>"}),", ",(0,t.jsx)(l.code,{children:"<jobid>,<jobid>"}),", ",(0,t.jsx)(l.code,{children:"{<jobid>..<jobid>}"})]}),"\n",(0,t.jsx)(l.h3,{id:"cf-\uc0c1\ud0dc\uc5d0\uc11c-\uba48\ucdb0\uc788\ub294-\uc791\uc5c5-\uc7ac\uc2dc\uc791\ud558\uae30",children:"CF \uc0c1\ud0dc\uc5d0\uc11c \uba48\ucdb0\uc788\ub294 \uc791\uc5c5 \uc7ac\uc2dc\uc791\ud558\uae30"}),"\n",(0,t.jsx)(l.p,{children:"Suspend \uc0c1\ud0dc\ub85c \ub9cc\ub4e4\uae30"}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-shell",children:"sudo `which scontrol` suspend jobid=<jobid>\n"})}),"\n",(0,t.jsx)(l.p,{children:"Suspend -> Pending \uc0c1\ud0dc\ub85c \ub9cc\ub4e4\uae30"}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-shell",children:"sudo `which scontrol` requeue jobid=<jobid>\n"})}),"\n",(0,t.jsx)(l.p,{children:"Pending -> Configuring or Running \uc0c1\ud0dc\ub85c \ub9cc\ub4e4\uae30"}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-shell",children:"sudo `which scontrol` requeue jobid=<jobid>\n"})})]})}function u(e={}){const{wrapper:l}={...(0,c.R)(),...e.components};return l?(0,t.jsx)(l,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},28453:(e,l,s)=>{s.d(l,{R:()=>o,x:()=>r});var n=s(96540);const t={},c=n.createContext(t);function o(e){const l=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(l):{...l,...e}}),[l,e])}function r(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),n.createElement(c.Provider,{value:l},e.children)}}}]);