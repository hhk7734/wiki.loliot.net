(self.webpackChunkwiki_loliot_net=self.webpackChunkwiki_loliot_net||[]).push([[49241],{49412:(n,e,t)=>{n.exports={src:{srcSet:t.p+"assets/ideal-img/vm-vs-container.565a411.750.png 750w",images:[{path:t.p+"assets/ideal-img/vm-vs-container.565a411.750.png",width:750,height:390}],src:t.p+"assets/ideal-img/vm-vs-container.565a411.750.png",toString:function(){return t.p+"assets/ideal-img/vm-vs-container.565a411.750.png"},placeholder:void 0,width:750,height:390},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAFCAYAAAB8ZH1oAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAwUlEQVR4nB3IYWuCQBwH4Pv+32SwmCaGm6EtGJ1TN/N0xaIF5Xl2ntbw1RL+v2DPy4fFovnjWY2QHyhaKySFum725rw7XJGVirb7Ht8/3Y3NYjlOucSUV+RENV7SegjSunW5hMtP5LwdsfhUYG4sRzuSeOIV2e8KXiKHMGuM86FhR/L/QqHB5rkeraTBZFWRlWoEuR4CYYyV9XhYVfSYaLx+9WC+aG8z0cEXmrzygkXR/s7XWj+XF/j5mbyiw3JjxjvHr6uSyMyyGAAAAABJRU5ErkJggg=="}},23748:(n,e,t)=>{"use strict";t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"mlops/mlops/container/cri-containerd","title":"CRI - containerd","description":"CRI - containerd","source":"@site/docs/mlops/mlops/container/cri-containerd.mdx","sourceDirName":"mlops/mlops/container","slug":"/mlops/mlops/container/cri-containerd","permalink":"/docs/mlops/mlops/container/cri-containerd","draft":false,"unlisted":false,"editUrl":"https://github.com/hhk7734/wiki/tree/main/docs/mlops/mlops/container/cri-containerd.mdx","tags":[],"version":"current","lastUpdatedAt":1736949978000,"frontMatter":{"id":"cri-containerd","title":"CRI - containerd","sidebar_label":"CRI - containerd","description":"CRI - containerd","keywords":["CRI","containerd"]},"sidebar":"mlops","previous":{"title":"\uc2e4\ud589 \uc704\uce58 \uc81c\uc5b4\ud558\uae30","permalink":"/docs/mlops/mlops/ansible/delegation"},"next":{"title":"Apptainer for HPC","permalink":"/docs/mlops/mlops/container/apptainer"}}');var r=t(74848),s=t(28453),o=t(89341);const a={id:"cri-containerd",title:"CRI - containerd",sidebar_label:"CRI - containerd",description:"CRI - containerd",keywords:["CRI","containerd"]},c=void 0,d={},l=[{value:"Container",id:"container",level:2},{value:"\uc124\uce58",id:"\uc124\uce58",level:2},{value:"Reference",id:"reference",level:2}];function m(n){const e={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"container",children:"Container"}),"\n",(0,r.jsx)("center",{children:(0,r.jsx)(o.A,{img:t(49412),width:750})}),"\n",(0,r.jsx)("center",{children:(0,r.jsx)("strong",{children:"VM vs Container"})}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["VM","\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Guest OS\uc758 \ucee4\ub110\uc5d0 \uc694\uccad\ub418\ub294 \uc2dc\uc2a4\ud15c \ucf5c\uc740 \ud558\uc774\ud37c\ubc14\uc774\uc800\ub97c \ud1b5\ud574 \ucc98\ub9ac"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["Container","\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Container\uc758 \uc2dc\uc2a4\ud15c \ucf5c\uc740 Host OS\uc758 \ucee4\ub110\uc744 \uacf5\uc720\ud558\uc5ec \ucc98\ub9ac"}),"\n",(0,r.jsx)(e.li,{children:"Linux namespace\uc640 cgroup\uc744 \ud1b5\ud574 \uaca9\ub9ac\ub41c \ud658\uacbd \uc81c\uacf5"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\uc124\uce58",children:"\uc124\uce58"}),"\n",(0,r.jsx)(e.admonition,{type:"warning",children:(0,r.jsx)(e.p,{children:"\uae30\ubcf8\uc801\uc73c\ub85c \uc124\uce58\ub418\uc5b4\uc57c\ud558\ub294 \ud504\ub85c\uadf8\ub7a8\uc758 \uacbd\uc6b0 \ubbf8\ub9ac \uc124\uce58\ub41c \uc774\ubbf8\uc9c0\ub97c \uc900\ube44\ud558\uba74 \uc88b\uc2b5\ub2c8\ub2e4."})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-yaml",metastring:'title="containerd-installation.yaml"',children:'---\n- hosts: all\n  become: yes\n  tasks:\n    - name: Install requirements\n      apt:\n        name: "{{ item }}"\n        state: latest\n        update_cache: yes\n      loop: ["apt-transport-https", "ca-certificates", "curl", "gnupg"]\n\n    - name: Add docker GPG apt key\n      apt_key:\n        url: https://download.docker.com/linux/ubuntu/gpg\n        keyring: /usr/share/keyrings/docker-archive-keyring.gpg\n\n    - name: Add docker repository ({{ ansible_distribution_release }})\n      apt_repository:\n        repo: deb\n          [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg]\n          https://download.docker.com/linux/ubuntu\n          {{ ansible_distribution_release }} stable\n        filename: docker\n\n    - name: Install containerd.io\n      apt:\n        name: containerd.io\n        state: latest\n        update_cache: yes\n\n    - name: Add containerd.conf to /etc/modules-load.d\n      copy:\n        dest: /etc/modules-load.d/containerd.conf\n        content: |\n          overlay\n          br_netfilter\n        mode: 0644\n\n    - name: modprobe overlay\n      modprobe:\n        name: overlay\n\n    - name: modprobe br_netfilter\n      modprobe:\n        name: br_netfilter\n\n    - name: Add 99-k8s-cri.conf to /etc/sysctl.d\n      copy:\n        dest: /etc/sysctl.d/99-k8s-cri.conf\n        content: |\n          net.bridge.bridge-nf-call-iptables  = 1\n          net.ipv4.ip_forward                 = 1\n          net.bridge.bridge-nf-call-ip6tables = 1\n        mode: 0644\n\n    - name: Update sysctl\n      shell: sysctl --system\n\n    - name: mkdir /etc/containerd\n      file:\n        path: /etc/containerd\n        state: directory\n        mode: 0755\n\n    - name: Add config.toml to /etc/containerd\n      shell: containerd config default > /etc/containerd/config.toml\n      args:\n        chdir: /etc/containerd\n\n    - name: Insert \'SystemdCgroup = true\' for containerd with runc\n      lineinfile:\n        path: /etc/containerd/config.toml\n        regexp: \'(^.*containerd\\.runtimes\\.runc\\.options\\]$)\'\n        line: \'\\1\\n            SystemdCgroup = true\'\n        backrefs: yes\n\n    - name: grep /etc/containerd/config.toml\n      shell: grep -C 3 \'SystemdCgroup = true\' /etc/containerd/config.toml\n      register: config_toml_grep\n\n    - name: Debug config.toml changes\n      debug:\n        msg: "{{ config_toml_grep.stdout.split(\'\\n\') }}"\n\n    - name: systemd enable and restart containerd\n      systemd:\n        name: containerd\n        enabled: yes\n        state: restarted\n'})}),"\n",(0,r.jsx)(e.h2,{id:"reference",children:"Reference"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://bi-insider.com/posts/virtual-machines-vs-containers/",children:"https://bi-insider.com/posts/virtual-machines-vs-containers/"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://docs.docker.com/engine/install/",children:"https://docs.docker.com/engine/install/"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://kubernetes.io/docs/setup/production-environment/container-runtimes/",children:"https://kubernetes.io/docs/setup/production-environment/container-runtimes/"})}),"\n"]})]})}function p(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(m,{...n})}):m(n)}}}]);