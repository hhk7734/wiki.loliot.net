"use strict";(self.webpackChunkwiki_loliot_net=self.webpackChunkwiki_loliot_net||[]).push([[69936],{2105:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>c,metadata:()=>a,toc:()=>r});const a=JSON.parse('{"id":"mlops/mlops/aws/vpc","title":"VPC","description":"VPC","source":"@site/docs/mlops/mlops/aws/vpc.mdx","sourceDirName":"mlops/mlops/aws","slug":"/mlops/mlops/aws/vpc","permalink":"/docs/mlops/mlops/aws/vpc","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedAt":1731420115000,"frontMatter":{"id":"vpc","title":"VPC","sidebar_label":"VPC","description":"VPC","keywords":["VPC"]},"sidebar":"mlops","previous":{"title":"Spot Role","permalink":"/docs/mlops/mlops/aws/iam/spot-role"},"next":{"title":"EKS","permalink":"/docs/mlops/mlops/aws/eks/"}}');var s=n(74848),i=n(28453);const c={id:"vpc",title:"VPC",sidebar_label:"VPC",description:"VPC",keywords:["VPC"]},l=void 0,o={},r=[{value:"VPC &amp; Internet Gateway",id:"vpc--internet-gateway",level:2},{value:"RouteTable",id:"routetable",level:3},{value:"Public Subnet &amp;&amp; NAT Gateway",id:"public-subnet--nat-gateway",level:2},{value:"Private Subnet",id:"private-subnet",level:2}];function u(t){const e={admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",mermaid:"mermaid",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("center",{children:(0,s.jsx)(e.mermaid,{value:"flowchart\n  subgraph VPC\n    InternetGateway(InternetGateway)\n\n    NatGateway-1 --\x3e InternetGateway\n    NatGateway-2 --\x3e InternetGateway\n\n    subgraph ap-northeast-2a\n      subgraph public-subnet-1\n        NatGateway-1(NAT Gateway)\n      end\n\n      subgraph private-subnet-1\n        EC2-1-1(Private EC2-1)\n        EC2-1-2(Private EC2-2)\n\n        EC2-1-1 --\x3e NatGateway-1\n        EC2-1-2 --\x3e NatGateway-1\n      end\n    end\n\n    subgraph ap-northeast-2c\n      subgraph public-subnet-2\n        NatGateway-2(NAT Gateway)\n      end\n\n      subgraph private-subnet-2\n        EC2-2-1(Private EC2-1)\n        EC2-2-2(Private EC2-2)\n\n        EC2-2-1 --\x3e NatGateway-2\n        EC2-2-2 --\x3e NatGateway-2\n      end\n    end\n  end"})}),"\n",(0,s.jsx)(e.h2,{id:"vpc--internet-gateway",children:"VPC & Internet Gateway"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\ub9ac\uc804\ub2f9 \uc0dd\uc131\uac00\ub2a5\ud55c VPC \uc218\ub294 5 \uac1c\ub85c \uc124\uc815\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4.(Quota \ubcc0\uacbd \uac00\ub2a5)"}),"\n",(0,s.jsx)(e.li,{children:"VPC\ub2f9 \uc0dd\uc131 \uac00\ub2a5\ud55c Subnet \uc218\ub294 200 \uac1c\ub85c \uc124\uc815\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4.(Quota \ubcc0\uacbd \uac00\ub2a5)"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",children:'// 172.16.0.1 ~ 172.16.255.255\nconst vpcName = "vpc";\nconst vpc = new aws.ec2.Vpc(\n\tvpcName,\n\t{\n\t\tenableDnsHostnames: true,\n\t\tenableDnsSupport: true,\n\t\tinstanceTenancy: "default",\n\t\tcidrBlock: "172.16.0.0/16",\n\t\ttags: {\n\t\t\tName: vpcName,\n\t\t\t"loliot.net/stack": variable.stackName,\n\t\t},\n\t},\n\t{ protect: true },\n);\n\nconst igwName = "igw";\nconst igw = new aws.ec2.InternetGateway(\n\tigwName,\n\t{\n\t\tvpcId: vpc.id,\n\t\ttags: {\n\t\t\tName: igwName,\n\t\t\t"loliot.net/stack": variable.stackName,\n\t\t},\n\t},\n\t{ protect: true },\n);\n\nconst igwRouteTableName = `${igwName}-rtb`;\nconst igwRouteTable = new aws.ec2.RouteTable(\n\tigwRouteTableName,\n\t{\n\t\tvpcId: vpc.id,\n\t\troutes: [\n\t\t\t{\n\t\t\t\tcidrBlock: "0.0.0.0/0", // \ubaa8\ub4e0 IP\uc5d0 \ub300\ud55c \uc694\uccad\uc744\n\t\t\t\tgatewayId: igw.id, // Internet Gateway\ub85c \uc5f0\uacb0\n\t\t\t},\n\t\t],\n\t\ttags: {\n\t\t\tName: igwRouteTableName,\n\t\t\t"loliot.net/stack": variable.stackName,\n\t\t},\n\t},\n\t{ protect: true },\n);\n'})}),"\n",(0,s.jsxs)(e.admonition,{type:"info",children:[(0,s.jsx)(e.p,{children:"VPC\uc5d0 IP\uac00 \ubd80\uc871\ud55c \uacbd\uc6b0 CIDR \ube14\ub85d\uc744 \ucd94\uac00\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",children:'const secondaryCIDRName = "vpc-secondary-cidr";\nconst secondaryCIDR = new aws.ec2.VpcIpv4CidrBlockAssociation(\n\tsecondaryCIDRName,\n\t{\n\t\tcidrBlock: "172.17.0.0/16",\n\t\tvpcId: vpc.id,\n\t},\n\t{ protect: true },\n);\n'})})]}),"\n",(0,s.jsx)(e.h3,{id:"routetable",children:"RouteTable"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"VPC\uc5d0\ub294 \uc554\uc2dc\uc801 \ub77c\uc6b0\ud130\uac00 \uc788\uc2b5\ub2c8\ub2e4"}),"\n",(0,s.jsx)(e.li,{children:"RouteTable\uc740 Subnet\uc5d0 \ub300\ud55c \ub77c\uc6b0\ud305 \uc815\uc758\uc785\ub2c8\ub2e4"}),"\n",(0,s.jsx)(e.li,{children:"Subnet\uc5d0 \uba85\uc2dc\uc801\uc73c\ub85c RouteTable\uc744 \uc5f0\uacb0\ud558\uc9c0 \uc54a\uc73c\uba74 \uae30\ubcf8 RouteTable\uc5d0 \uc5f0\uacb0\ub429\ub2c8\ub2e4"}),"\n",(0,s.jsx)(e.li,{children:"Subnet\uc740 \ud558\ub098\uc758 RouteTable\uc5d0\ub9cc \uc5f0\uacb0\ub429\ub2c8\ub2e4"}),"\n",(0,s.jsx)(e.li,{children:"RouteTable\uc5d0\ub294 \uc5ec\ub7ec\uac1c\uc758 Subnet\uc744 \uc5f0\uacb0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4"}),"\n",(0,s.jsx)(e.li,{children:"RouteTable\uc5d0\ub294 \uae30\ubcf8\uc801\uc73c\ub85c VPC \ub0b4\ubd80 \ud1b5\uc2e0\uc744 \uc704\ud55c \ub85c\uceec \ub77c\uc6b0\ud305\uc774 \ud3ec\ud568\ub429\ub2c8\ub2e4"}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"public-subnet--nat-gateway",children:"Public Subnet && NAT Gateway"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",children:'// 172.16.0.1 ~ 172.16.0.255\nconst publicSubnet1Name = "public-subnet-1";\nconst publicSubnet1 = new aws.ec2.Subnet(\n\tpublicSubnet1Name,\n\t{\n\t\tvpcId: vpc.id,\n\t\tcidrBlock: "172.16.0.0/24",\n\t\tavailabilityZone: "ap-northeast-2a",\n\t\ttags: {\n\t\t\tName: publicSubnet1Name,\n\t\t\t"loliot.net/stack": variable.stackName,\n\t\t\t"kubernetes.io/cluster/eks": "shared",\n\t\t},\n\t},\n\t{ protect: true },\n);\n\nnew aws.ec2.RouteTableAssociation(\n\t`${igwRouteTableName}-${publicSubnet1Name}`,\n\t{\n\t\trouteTableId: igwRouteTable.id,\n\t\tsubnetId: publicSubnet1.id,\n\t},\n\t{ protect: true },\n);\n\nconst ngw1Name = "ngw-1";\nconst ngw1EIPName = `${ngw1Name}-eip`;\nconst ngw1 = new aws.ec2.NatGateway(\n\tngw1Name,\n\t{\n\t\tallocationId: new aws.ec2.Eip(ngw1EIPName, {\n\t\t\ttags: {\n\t\t\t\tName: ngw1EIPName,\n\t\t\t\t"loliot.net/stack": variable.stackName,\n\t\t\t},\n\t\t}).id,\n\t\tsubnetId: publicSubnet1.id,\n\t\ttags: {\n\t\t\tName: ngw1Name,\n\t\t\t"loliot.net/stack": variable.stackName,\n\t\t},\n\t},\n\t{ protect: true },\n);\n\nconst ngw1RouteTableName = `${ngw1Name}-rtb`;\nconst ngw1RouteTable = new aws.ec2.RouteTable(\n\tngw1RouteTableName,\n\t{\n\t\tvpcId: vpc.id,\n\t\troutes: [\n\t\t\t{\n\t\t\t\tcidrBlock: "0.0.0.0/0",\n\t\t\t\tnatGatewayId: ngw1.id,\n\t\t\t},\n\t\t],\n\t\ttags: {\n\t\t\tName: ngw1RouteTableName,\n\t\t\t"loliot.net/stack": variable.stackName,\n\t\t},\n\t},\n\t{ protect: true },\n);\n'})}),"\n",(0,s.jsx)(e.h2,{id:"private-subnet",children:"Private Subnet"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",children:'// 172.16.32.1 ~ 172.16.47.255\nconst privateSubnet1Name = "private-subnet-1";\nexport const privateSubnet1 = new aws.ec2.Subnet(\n\tprivateSubnet1Name,\n\t{\n\t\tvpcId: vpc.id,\n\t\tcidrBlock: "172.16.32.0/20",\n\t\tavailabilityZone: "ap-northeast-2a",\n\t\ttags: {\n\t\t\tName: privateSubnet1Name,\n\t\t\t"loliot.net/stack": variable.stackName,\n\t\t\t"kubernetes.io/cluster/eks": "shared",\n\t\t},\n\t},\n\t{ protect: true },\n);\n\nnew aws.ec2.RouteTableAssociation(\n\t`${ngw1RouteTableName}-${privateSubnet1Name}`,\n\t{\n\t\trouteTableId: ngw1RouteTable.id,\n\t\tsubnetId: privateSubnet1.id,\n\t},\n\t{ protect: true },\n);\n'})})]})}function p(t={}){const{wrapper:e}={...(0,i.R)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(u,{...t})}):u(t)}},28453:(t,e,n)=>{n.d(e,{R:()=>c,x:()=>l});var a=n(96540);const s={},i=a.createContext(s);function c(t){const e=a.useContext(i);return a.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function l(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:c(t.components),a.createElement(i.Provider,{value:e},t.children)}}}]);