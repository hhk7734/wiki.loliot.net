"use strict";(self.webpackChunkwiki_loliot_net=self.webpackChunkwiki_loliot_net||[]).push([[96194],{83298:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"mlops/mlops/storage/aws-ebs-csi-driver","title":"aws-ebs-csi-driver","description":"aws-ebs-csi-driver","source":"@site/docs/mlops/mlops/storage/aws-ebs-csi-driver.mdx","sourceDirName":"mlops/mlops/storage","slug":"/mlops/mlops/storage/aws-ebs-csi-driver","permalink":"/docs/mlops/mlops/storage/aws-ebs-csi-driver","draft":false,"unlisted":false,"editUrl":"https://github.com/hhk7734/wiki/tree/main/docs/mlops/mlops/storage/aws-ebs-csi-driver.mdx","tags":[],"version":"current","lastUpdatedAt":1733240816000,"frontMatter":{"id":"aws-ebs-csi-driver","title":"aws-ebs-csi-driver","sidebar_label":"aws-ebs-csi-driver","description":"aws-ebs-csi-driver","keywords":["aws-ebs-csi-driver"]},"sidebar":"mlops","previous":{"title":"local-path-provisioner","permalink":"/docs/mlops/mlops/storage/local-path-provisioner"},"next":{"title":"aws-efs-csi-driver","permalink":"/docs/mlops/mlops/storage/aws-efs-csi-driver"}}');var i=t(74848),n=t(28453);const a={id:"aws-ebs-csi-driver",title:"aws-ebs-csi-driver",sidebar_label:"aws-ebs-csi-driver",description:"aws-ebs-csi-driver",keywords:["aws-ebs-csi-driver"]},l=void 0,o={},c=[{value:"\uc0ac\uc804 \uc694\uad6c \uc0ac\ud56d",id:"\uc0ac\uc804-\uc694\uad6c-\uc0ac\ud56d",level:2},{value:"\uc124\uce58",id:"\uc124\uce58",level:2},{value:"StorageClass",id:"storageclass",level:2}];function d(e){const s={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.p,{children:"AWS EBS Container Storage Interface Driver"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://github.com/kubernetes-sigs/aws-ebs-csi-driver/blob/master/docs/install.md",children:"https://github.com/kubernetes-sigs/aws-ebs-csi-driver/blob/master/docs/install.md"})}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"\uc0ac\uc804-\uc694\uad6c-\uc0ac\ud56d",children:"\uc0ac\uc804 \uc694\uad6c \uc0ac\ud56d"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-ts",children:'import * as aws from "@pulumi/aws";\nimport * as variable from "@src/variable";\n\nconst awsEbsCsiDriverRoleName = "aws-ebs-csi-driver-role";\nexport const awsEbsCsiDriverRole = new aws.iam.Role(\n\tawsEbsCsiDriverRoleName,\n\t{\n\t\tnamePrefix: `${awsEbsCsiDriverRoleName}-`,\n\t\tassumeRolePolicy: {\n\t\t\tVersion: "2012-10-17",\n\t\t\tStatement: [\n\t\t\t\t{\n\t\t\t\t\tEffect: "Allow",\n\t\t\t\t\tPrincipal: {\n\t\t\t\t\t\tFederated: variable.eks.core.eks.apply((eks) => eks.oidcProvider.arn),\n\t\t\t\t\t},\n\t\t\t\t\tCondition: {\n\t\t\t\t\t\tStringEquals: variable.eks.core.eks.apply((eks) => ({\n\t\t\t\t\t\t\t[`${eks.oidcProvider.url}:aud`]: "sts.amazonaws.com",\n\t\t\t\t\t\t\t[`${eks.oidcProvider.url}:sub`]:\n\t\t\t\t\t\t\t\t// system:serviceaccount:<namespace>:<serviceAccount>\n\t\t\t\t\t\t\t\t"system:serviceaccount:kube-system:aws-ebs-csi-driver",\n\t\t\t\t\t\t})),\n\t\t\t\t\t},\n\t\t\t\t\tAction: "sts:AssumeRoleWithWebIdentity",\n\t\t\t\t},\n\t\t\t],\n\t\t},\n\t\ttags: {\n\t\t\tName: awsEbsCsiDriverRoleName,\n\t\t\t"loliot.net/stack": variable.stackName,\n\t\t},\n\t},\n\t{ protect: true },\n);\n\nnew aws.iam.RolePolicyAttachment(\n\t"aws-ebs-csi-driver-rpa-0",\n\t{\n\t\tpolicyArn: "arn:aws:iam::aws:policy/service-role/AmazonEBSCSIDriverPolicy",\n\t\trole: awsEbsCsiDriverRole.name,\n\t},\n\t{ protect: true },\n);\n'})}),"\n",(0,i.jsx)(s.h2,{id:"\uc124\uce58",children:"\uc124\uce58"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-shell",children:"helm repo add aws-ebs-csi-driver https://kubernetes-sigs.github.io/aws-ebs-csi-driver\n"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-shell",children:"helm repo update aws-ebs-csi-driver \\\n&& helm search repo aws-ebs-csi-driver/aws-ebs-csi-driver -l | head -n 10\n"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-shell",children:"helm show values aws-ebs-csi-driver/aws-ebs-csi-driver \\\n    --version 2.26.0 \\\n    > aws-ebs-csi-driver-values.yaml\n"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-yaml",metastring:'title="aws-ebs-csi-driver-values.yaml"',children:'customLabels: {}\n\ncontroller:\n  serviceAccount:\n    create: true\n    name: aws-ebs-csi-driver\n    annotations:\n      eks.amazonaws.com/role-arn: "arn:aws:iam::<account-id>:role/<role-name>"\n\n  tolerations: []\n'})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-shell",children:"helm template aws-ebs-csi-driver aws-ebs-csi-driver/aws-ebs-csi-driver \\\n    --version 2.26.0 \\\n    -n kube-system \\\n    -f aws-ebs-csi-driver-values.yaml \\\n    > aws-ebs-csi-driver.yaml\n"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-shell",children:"helm upgrade aws-ebs-csi-driver aws-ebs-csi-driver/aws-ebs-csi-driver \\\n    --install \\\n    --history-max 5 \\\n    --version 2.26.0 \\\n    -n kube-system \\\n    -f aws-ebs-csi-driver-values.yaml\n"})}),"\n",(0,i.jsx)(s.h2,{id:"storageclass",children:"StorageClass"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://github.com/kubernetes-sigs/aws-ebs-csi-driver/blob/master/docs/parameters.md",children:"https://github.com/kubernetes-sigs/aws-ebs-csi-driver/blob/master/docs/parameters.md"})}),"\n"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-yaml",children:'kind: StorageClass\napiVersion: storage.k8s.io/v1\nmetadata:\n  name: gp3\n  annotations:\n    storageclass.kubernetes.io/is-default-class: "true"\nprovisioner: ebs.csi.aws.com\nvolumeBindingMode: WaitForFirstConsumer\nallowVolumeExpansion: true\nparameters:\n  type: gp3\n'})})]})}function m(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>a,x:()=>l});var r=t(96540);const i={},n=r.createContext(i);function a(e){const s=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(n.Provider,{value:s},e.children)}}}]);