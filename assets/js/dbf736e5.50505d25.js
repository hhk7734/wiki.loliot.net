"use strict";(self.webpackChunkwiki_loliot_net=self.webpackChunkwiki_loliot_net||[]).push([[85101],{65182:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"mlops/mlops/aws/ses","title":"SES","description":"SES","source":"@site/docs/mlops/mlops/aws/ses.mdx","sourceDirName":"mlops/mlops/aws","slug":"/mlops/mlops/aws/ses","permalink":"/docs/mlops/mlops/aws/ses","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedAt":1731770802000,"frontMatter":{"id":"ses","title":"SES","sidebar_label":"SES","description":"SES","keywords":["SES"]},"sidebar":"mlops","previous":{"title":"etc","permalink":"/docs/mlops/mlops/aws/parallel-cluster/etc"},"next":{"title":"Architecture","permalink":"/docs/mlops/mlops/kubeflow/architecture"}}');var o=n(74848),i=n(28453);const r={id:"ses",title:"SES",sidebar_label:"SES",description:"SES",keywords:["SES"]},a=void 0,c={},l=[{value:"Create",id:"create",level:2},{value:"Production access request",id:"production-access-request",level:2}];function d(e){const s={code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.h2,{id:"create",children:"Create"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-python",children:'import pulumi\nimport pulumi_aws as aws\nimport pulumi_cloudflare as cloudflare\n\nname = "ses"\nses = aws.ses.DomainIdentity(\n    name,\n    domain="<domain>",\n    opts=pulumi.ResourceOptions(protect=True),\n)\n\nname = "ses-dkim"\nses_dkim = aws.ses.DomainDkim(\n    name,\n    domain="<domain>",\n    opts=pulumi.ResourceOptions(parent=ses, protect=True),\n)\n\n\nfor i in range(3):\n    name = f"ses-dkim-record-{i}"\n    cloudflare.Record(\n        name,\n        zone_id="<id>",\n        type="CNAME",\n        name=ses_dkim.dkim_tokens[i].apply(\n            lambda x: f"{x}._domainkey" # subdomain\uc774 \uc788\ub2e4\uba74 subdomain\uae4c\uc9c0 \uc785\ub825\n        ),\n        value=ses_dkim.dkim_tokens[i].apply(\n            lambda x: f"{x}.dkim.amazonses.com"\n        ),\n        ttl=1,  # auto\n        opts=pulumi.ResourceOptions(parent=ses_dkim, protect=True),\n    )\n'})}),"\n",(0,o.jsx)(s.h2,{id:"production-access-request",children:"Production access request"}),"\n",(0,o.jsx)(s.p,{children:"SES \uc0dd\uc131 \ud6c4 Production access request\ub97c \ud574\uc57c \uba54\uc77c \uc804\uc1a1\uc5d0 \ub300\ud55c \uc81c\uc57d\uc870\uac74\uc774 \uc0ac\ub77c\uc9d1\ub2c8\ub2e4."})]})}function p(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>a});var t=n(96540);const o={},i=t.createContext(o);function r(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);