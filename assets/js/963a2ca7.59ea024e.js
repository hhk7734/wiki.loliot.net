"use strict";(self.webpackChunkwiki_loliot_net=self.webpackChunkwiki_loliot_net||[]).push([[89039],{67741:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>p,frontMatter:()=>t,metadata:()=>d,toc:()=>u});var s=l(74848),r=l(28453),i=l(49489),a=l(7227);const t={id:"podman",title:"Podman",sidebar_label:"Podman",description:"Podman",keywords:["podman"]},c=void 0,d={id:"mlops/mlops/container/podman",title:"Podman",description:"Podman",source:"@site/docs/mlops/mlops/container/podman.mdx",sourceDirName:"mlops/mlops/container",slug:"/mlops/mlops/container/podman",permalink:"/docs/mlops/mlops/container/podman",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1729318814e3,frontMatter:{id:"podman",title:"Podman",sidebar_label:"Podman",description:"Podman",keywords:["podman"]},sidebar:"mlops",previous:{title:"Buildah and Skopeo",permalink:"/docs/mlops/mlops/container/buildah-skopeo"},next:{title:"Docker",permalink:"/docs/mlops/mlops/container/docker"}},o={},u=[{value:"\uc124\uce58",id:"\uc124\uce58",level:2},{value:"\uba85\ub839\uc5b4",id:"\uba85\ub839\uc5b4",level:2},{value:"run",id:"run",level:3},{value:"ps",id:"ps",level:3},{value:"exec",id:"exec",level:3},{value:"rm",id:"rm",level:3},{value:"cp",id:"cp",level:3},{value:"\uc774\ubbf8\uc9c0\ub97c \ud30c\uc77c\ub85c \uc800\uc7a5\ud558\uace0 \ubd88\ub7ec\uc624\uae30",id:"\uc774\ubbf8\uc9c0\ub97c-\ud30c\uc77c\ub85c-\uc800\uc7a5\ud558\uace0-\ubd88\ub7ec\uc624\uae30",level:2},{value:"\uc720\uc800 \ub124\uc784\uc2a4\ud398\uc774\uc2a4 \ub9e4\ud551",id:"\uc720\uc800-\ub124\uc784\uc2a4\ud398\uc774\uc2a4-\ub9e4\ud551",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\uc124\uce58",children:"\uc124\uce58"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://podman.io/getting-started/installation",children:"https://podman.io/getting-started/installation"})}),"\n"]}),"\n",(0,s.jsxs)(i.A,{groupId:"os",defaultValue:"arch",values:[{label:"Arch Linux",value:"arch"},{label:"Debian",value:"debian"}],children:[(0,s.jsxs)(a.A,{value:"arch",children:[(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"sudo pacman -S podman\n"})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"yay -S podman-desktop\n"})})]}),(0,s.jsxs)(a.A,{value:"debian",children:[(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"sudo apt install podman\n"})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"flatpak install flathub io.podman_desktop.PodmanDesktop\n"})})]})]}),"\n",(0,s.jsx)(n.h2,{id:"\uba85\ub839\uc5b4",children:"\uba85\ub839\uc5b4"}),"\n",(0,s.jsx)(n.h3,{id:"run",children:"run"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"podman run [<options>] <image> [<command> [<arg> ...]]\n"})}),"\n",(0,s.jsx)(n.p,{children:"\uc0c8\ub85c\uc6b4 \ucee8\ud14c\uc774\ub108\uc5d0 \uba85\ub839\uc5b4\ub97c \uc2e4\ud589\ud569\ub2c8\ub2e4."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"<options>"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--cpus <number>"}),": CPU limit"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-d|--detach"}),": \ucee8\ud14c\uc774\ub108\ub97c \ubc31\uadf8\ub77c\uc6b4\ub4dc\uc5d0\uc11c \uc2e4\ud589\ud558\uace0 \ucee8\ud14c\uc774\ub108 ID\ub97c \ud504\ub9b0\ud2b8"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'--entrypoint <command>|\'["<command>", "<arg>", ..."]\''}),": Dockerfile\uc758 ",(0,s.jsx)(n.code,{children:"ENTRYPOINT"}),"\uc5d0 \ud574\ub2f9\ud569\ub2c8\ub2e4."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--env-file <path>"}),": ",(0,s.jsx)(n.code,{children:".env"})," \ucc98\ub7fc \ud658\uacbd \ubcc0\uc218 \uac12\uc774 \uc788\ub294 \ud30c\uc77c\ub85c \ud658\uacbd \ubcc0\uc218 \uc124\uc815"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-e|--env <key>[=<value>]"}),": \ud658\uacbd \ubcc0\uc218 \uc124\uc815","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"<key>"}),"\ub9cc \uc788\ub294 \uacbd\uc6b0 \ud638\uc2a4\ud2b8\uc5d0\uc11c \ud574\ub2f9 \ud658\uacbd \ubcc0\uc218\ub97c \ucc3e\uc544 \uc124\uc815\ud558\uace0 \uc5c6\uc73c\uba74 \uc124\uc815\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. ",(0,s.jsx)(n.code,{children:"*"})," glob\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-it"}),": STDIN\ub97c \uc5f4\uace0 \ucee8\ud14c\uc774\ub108\uc5d0 \uac00\uc0c1 \ud130\ubbf8\ub110 \ud560\ub2f9"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-m|--memory <number><unit>"}),": \uba54\ubaa8\ub9ac limit","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"<unit>"}),": ",(0,s.jsx)(n.code,{children:"b"}),", ",(0,s.jsx)(n.code,{children:"k"}),", ",(0,s.jsx)(n.code,{children:"m"}),", ",(0,s.jsx)(n.code,{children:"g"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--name <containerName>"}),": \ucee8\ud14c\uc774\ub108 \uc774\ub984"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'--network "host"'}),": \ud638\uc2a4\ud2b8 \ub124\ud2b8\uc6cc\ud06c \uc0ac\uc6a9"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-p|--publish <hostPort>:<containerPort>[/<protocol>]"}),": \ud3ec\ud2b8 \ud3ec\uc6cc\ub529"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--rm"}),": \uc885\ub8cc \uc2dc \ucee8\ud14c\uc774\ub108 \uc0ad\uc81c"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-v|--volume <hostDir>:<containerDir>[:<options>]"}),": \ud638\uc2a4\ud2b8 \ub514\ub809\ud1a0\ub9ac\ub97c \ucee8\ud14c\uc774\ub108 \ub514\ub809\ud1a0\ub9ac\uc5d0 \ub9c8\uc6b4\ud2b8","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"<options>"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ro"}),": \uc77d\uae30 \uc804\uc6a9"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"rw"}),": \uc77d\uae30 \uc4f0\uae30"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"z"}),": \uacf5\uc720 \ubcfc\ub968\uc73c\ub85c \uc124\uc815\ud558\uc5ec \ubaa8\ub4e0 \ucee8\ud14c\uc774\ub108\uac00 \uc77d\uace0 \uc4f8 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"[<command> [<arg> ...]]"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Dockerfile\uc758 ",(0,s.jsx)(n.code,{children:"CMD"}),"\uc5d0 \ud574\ub2f9\ud569\ub2c8\ub2e4."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"ps",children:"ps"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"podman ps [options]\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["options","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-a|--all"}),": \ubaa8\ub4e0 \ucee8\ud14c\uc774\ub108 \ucd9c\ub825"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-l|--latest"}),": \ub9c8\uc9c0\ub9c9 \ucee8\ud14c\uc774\ub108 \ucd9c\ub825"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"exec",children:"exec"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"podman exec [options] <containerID|containerName> <command> [arg ...]\n"})}),"\n",(0,s.jsx)(n.p,{children:"\uc2e4\ud589\uc911\uc778 \ucee8\ud14c\uc774\ub108\uc5d0 \uba85\ub839\uc5b4\ub97c \uc2e4\ud589\ud569\ub2c8\ub2e4."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["options","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-it"}),": STDIN\uc744 \uc5f4\uace0 \ucee8\ud14c\uc774\ub108\uc5d0 \uac00\uc0c1 \ud130\ubbf8\ub110 \ud560\ub2f9"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"rm",children:"rm"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"podman rm [options] <containerID|containerName>\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["options","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-f|--force"}),": running \ub610\ub294 unstable \uc0c1\ud0dc\uc758 \ucee8\ud14c\uc774\ub108\ub3c4 \uc0ad\uc81c"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-a|--all"}),": \ubaa8\ub4e0 \ucee8\ud14c\uc774\ub108 \uc0ad\uc81c"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"cp",children:"cp"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"podman cp [options] [<containerID|containerName>:]<srcPath> [<containerID|containerName>:]<destPath>\n"})}),"\n",(0,s.jsx)(n.p,{children:"\ud638\uc2a4\ud2b8\uc640 \ucee8\ud14c\uc774\ub108 \ub610\ub294 \ucee8\ud14c\uc774\ub108\uc640 \ucee8\ud14c\uc774\ub108 \uc0ac\uc774\uc5d0\uc11c \ud30c\uc77c\uc744 \ubcf5\uc0ac\ud569\ub2c8\ub2e4."}),"\n",(0,s.jsx)(n.h2,{id:"\uc774\ubbf8\uc9c0\ub97c-\ud30c\uc77c\ub85c-\uc800\uc7a5\ud558\uace0-\ubd88\ub7ec\uc624\uae30",children:"\uc774\ubbf8\uc9c0\ub97c \ud30c\uc77c\ub85c \uc800\uc7a5\ud558\uace0 \ubd88\ub7ec\uc624\uae30"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"podman save -o <file>.tar <image>\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"podman load -i <file>.tar\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\uc720\uc800-\ub124\uc784\uc2a4\ud398\uc774\uc2a4-\ub9e4\ud551",children:"\uc720\uc800 \ub124\uc784\uc2a4\ud398\uc774\uc2a4 \ub9e4\ud551"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/linux/kernel/namespace/user",children:"User Namespace"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"/etc/subuid"}),"\uc640 ",(0,s.jsx)(n.code,{children:"/etc/subgid"})," \ud30c\uc77c\uc744 \uc0ac\uc6a9\ud558\uc5ec \uc0ac\uc6a9\uc790 \ub124\uc784\uc2a4\ud398\uc774\uc2a4\uc5d0\uc11c \uc0ac\uc6a9\uc790\uac00 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 uid\uc640 gid\ub97c \uacb0\uc815\ud558\ub294 \uae30\ub2a5\uc744 \ud3ec\ud568\ud55c Linux \ubc30\ud3ec\ud310\uc5d0\uc11c\ub294 ",(0,s.jsx)(n.code,{children:"useradd"})," \uba85\ub839\uc5b4\ub97c \ud1b5\ud574 \uc0ac\uc6a9\uc790\ub97c \ucd94\uac00\ud588\uc744 \ub54c \uc790\ub3d9\uc73c\ub85c 65536\uac1c\uc758 uid\uc640 gid\ub97c \ud560\ub2f9\ud569\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",metastring:'title="/etc/subuid, /etc/subgid"',children:"hhk7734:100000:65536\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"sudo useradd test\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",metastring:'title="/etc/subuid, /etc/subgid"',children:"hhk7734:100000:65536\ntest:165536:65536\n"})}),"\n",(0,s.jsx)(n.p,{children:"LDAP \ub4f1\uc758 \uc0ac\uc6a9\uc73c\ub85c \uc774\ub7ec\ud55c \ub9e4\ud551\uc774 \uc5c6\ub2e4\uba74, \uc9c1\uc811 \ucd94\uac00\ud574\uc57c\ud569\ub2c8\ub2e4."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"sudo usermod \\\n  --add-subuids 100000-165535 \\\n  --add-subgids 100000-165535 \\\n  test\n"})}),"\n",(0,s.jsx)(n.p,{children:"podman\uc73c\ub85c \ucee8\ud14c\ub2c8\uc5b4\ub97c \uc2e4\ud589\ud588\uc744 \ub54c, \ucee8\ud14c\uc774\ub108 \ub0b4\ubd80\uc5d0\uc11c \uc678\ubd80 \uc0ac\uc6a9\uc790\uc640 \ub0b4\ubd80 \uc0ac\uc6a9\uc790\uac00 \uc5b4\ub5bb\uac8c \ub9e4\ud551\ub418\uc5b4 \uc788\ub294\uc9c0 \ud655\uc778 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"podman run alpine cat /proc/self/uid_map\n         0       1000          1\n         1     100000      65536\n"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\ub124\uc784\uc2a4\ud398\uc774\uc2a4 \uc548 uid"}),(0,s.jsx)(n.th,{children:"\ub124\uc784\uc2a4\ud398\uc774\uc2a4 \ubc16 uid"}),(0,s.jsx)(n.th,{children:"\uae38\uc774"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"1000"}),(0,s.jsx)(n.td,{children:"1"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"1"}),(0,s.jsx)(n.td,{children:"100000"}),(0,s.jsx)(n.td,{children:"65536"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"\uc774\ub97c \ud574\uc11d\ud558\uba74 \ub0b4\ubd80 uid 0\uc740 \uc678\ubd80 uid 1000\uc5d0 \ub9e4\ud551\ub418\uace0, \ub0b4\ubd80 uid 1 ~ 65536\uc740 \uc678\ubd80 uid 100000 ~ 165535\uc5d0 \uac01\uac01 \ub9e4\ud551\ub41c\ub2e4\ub294 \uac83\uc744 \uc54c \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,s.jsx)(n.p,{children:"podman \uc0ac\uc6a9\uc911\uc5d0 \ub9e4\ud551\uc744 \ucd94\uac00\ud55c\ub2e4\uba74 \uc544\ub798 \uba85\ub839\uc5b4\ub97c \uc2e4\ud589 \uc2dc\ucf1c\uc57c\ud569\ub2c8\ub2e4.(\uc2e4\ud589 \uc911\uc778 \ucee8\ud14c\uc774\ub108\uac00 \uba48\ucda5\ub2c8\ub2e4.)"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"podman system migrate\n"})}),"\n",(0,s.jsxs)(n.admonition,{type:"warning",children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.redhat.com/sysadmin/rootless-podman-nfs",children:"https://www.redhat.com/sysadmin/rootless-podman-nfs"})}),"\n"]}),(0,s.jsxs)(n.p,{children:["NFS \ud504\ub85c\ud1a0\ucf5c\uc5d0\ub294 \uc0ac\uc6a9\uc790 \ub124\uc784\uc2a4\ud398\uc774\uc2a4 \uac1c\ub150\uc774 \uc5c6\uc2b5\ub2c8\ub2e4. rootless podman\uc744 \uc0ac\uc6a9\ud560 \ub54c \uae30\ubcf8 graphroot\ub294 ",(0,s.jsx)(n.code,{children:"$HOME/.local/share/containers/storage"}),"\uc778\ub370, NFS\ub85c \ud648 \ub514\ub809\ud1a0\ub9ac\ub97c \uacf5\uc720\ud558\uace0 \uc788\ub2e4\uba74 \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ini",metastring:'title="~/.config/containers/storage.conf"',children:'[storage]\ndriver = "overlay"\nrunroot = "/run/user/2081"\ngraphroot = "/var/tmp/hyeonki/containers/storage"\n'})}),(0,s.jsx)(n.p,{children:"\uc704\uc640 \uac19\uc740 \uc124\uc815\uc744 \ucd94\uac00\ud574\uc11c NFS\uac00 \uc544\ub2cc \ub85c\uceec \ub514\uc2a4\ud06c\uc5d0 \uc800\uc7a5\ud558\ub3c4\ub85d \uc124\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."})]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},7227:(e,n,l)=>{l.d(n,{A:()=>a});l(96540);var s=l(34164);const r={tabItem:"tabItem_Ymn6"};var i=l(74848);function a(e){let{children:n,hidden:l,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,s.A)(r.tabItem,a),hidden:l,children:n})}},49489:(e,n,l)=>{l.d(n,{A:()=>y});var s=l(96540),r=l(34164),i=l(24245),a=l(56347),t=l(36494),c=l(62814),d=l(67548),o=l(69900);function u(e){var n,l;return null!=(n=null==(l=s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:l.filter(Boolean))?n:[]}function h(e){const{values:n,children:l}=e;return(0,s.useMemo)((()=>{const e=null!=n?n:function(e){return u(e).map((e=>{let{props:{value:n,label:l,attributes:s,default:r}}=e;return{value:n,label:l,attributes:s,default:r}}))}(l);return function(e){const n=(0,d.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,l])}function p(e){let{value:n,tabValues:l}=e;return l.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:l}=e;const r=(0,a.W6)(),i=function(e){let{queryString:n=!1,groupId:l}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!l)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=l?l:null}({queryString:n,groupId:l});return[(0,c.aZ)(i),(0,s.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(r.location.search);n.set(i,e),r.replace({...r.location,search:n.toString()})}),[i,r])]}function m(e){const{defaultValue:n,queryString:l=!1,groupId:r}=e,i=h(e),[a,c]=(0,s.useState)((()=>function(e){var n;let{defaultValue:l,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(l){if(!p({value:l,tabValues:s}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+l+'" but none of its children has the corresponding value. Available values are: '+s.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return l}const r=null!=(n=s.find((e=>e.default)))?n:s[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[d,u]=x({queryString:l,groupId:r}),[m,j]=function(e){let{groupId:n}=e;const l=function(e){return e?"docusaurus.tab."+e:null}(n),[r,i]=(0,o.Dv)(l);return[r,(0,s.useCallback)((e=>{l&&i.set(e)}),[l,i])]}({groupId:r}),g=(()=>{const e=null!=d?d:m;return p({value:e,tabValues:i})?e:null})();(0,t.A)((()=>{g&&c(g)}),[g]);return{selectedValue:a,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error("Can't select invalid tab value="+e);c(e),u(e),j(e)}),[u,j,i]),tabValues:i}}var j=l(11062);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=l(74848);function f(e){let{className:n,block:l,selectedValue:s,selectValue:a,tabValues:t}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.a_)(),o=e=>{const n=e.currentTarget,l=c.indexOf(n),r=t[l].value;r!==s&&(d(n),a(r))},u=e=>{var n;let l=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{var s;const n=c.indexOf(e.currentTarget)+1;l=null!=(s=c[n])?s:c[0];break}case"ArrowLeft":{var r;const n=c.indexOf(e.currentTarget)-1;l=null!=(r=c[n])?r:c[c.length-1];break}}null==(n=l)||n.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":l},n),children:t.map((e=>{let{value:n,label:l,attributes:i}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>c.push(e),onKeyDown:u,onClick:o,...i,className:(0,r.A)("tabs__item",g.tabItem,null==i?void 0:i.className,{"tabs__item--active":s===n}),children:null!=l?l:n},n)}))})}function v(e){let{lazy:n,children:l,selectedValue:i}=e;const a=(Array.isArray(l)?l:[l]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===i));return e?(0,s.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function N(e){const n=m(e);return(0,b.jsxs)("div",{className:(0,r.A)("tabs-container",g.tabList),children:[(0,b.jsx)(f,{...n,...e}),(0,b.jsx)(v,{...n,...e})]})}function y(e){const n=(0,j.A)();return(0,b.jsx)(N,{...e,children:u(e.children)},String(n))}},28453:(e,n,l)=>{l.d(n,{R:()=>a,x:()=>t});var s=l(96540);const r={},i=s.createContext(r);function a(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);