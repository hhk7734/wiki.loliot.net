"use strict";(self.webpackChunkwiki_loliot_net=self.webpackChunkwiki_loliot_net||[]).push([[68654],{42552:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>a});var t=s(74848),c=s(28453),i=s(98180);const l={id:"python-socket",title:"Python socket",sidebar_label:"socket",description:"Python socket",keywords:["Python","socket"]},r=void 0,o={id:"lang/python/libraries/python-socket",title:"Python socket",description:"Python socket",source:"@site/docs/lang/python/libraries/python-socket.mdx",sourceDirName:"lang/python/libraries",slug:"/lang/python/libraries/python-socket",permalink:"/docs/lang/python/libraries/python-socket",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1729871992e3,frontMatter:{id:"python-socket",title:"Python socket",sidebar_label:"socket",description:"Python socket",keywords:["Python","socket"]},sidebar:"python",previous:{title:"Custom QDialog",permalink:"/docs/lang/python/libraries/pyside2/pyside2-custom-qdialog"},next:{title:"tkinter",permalink:"/docs/lang/python/libraries/python-tkinter"}},d={},a=[{value:"\ub124\ud2b8\uc6cc\ud06c \uacc4\uce35 (OSI, TCP/IP)",id:"\ub124\ud2b8\uc6cc\ud06c-\uacc4\uce35-osi-tcpip",level:2},{value:"\uc18c\ucf13 \ud1b5\uc2e0",id:"\uc18c\ucf13-\ud1b5\uc2e0",level:2},{value:"\ud568\uc218 \uc124\uba85",id:"\ud568\uc218-\uc124\uba85",level:2},{value:"TCP, UDP",id:"tcp-udp",level:2},{value:"TCP server - client \uae30\ubcf8 \uc608\uc81c",id:"tcp-server---client-\uae30\ubcf8-\uc608\uc81c",level:2},{value:"server",id:"server",level:3},{value:"client",id:"client",level:3},{value:"Bluetooth",id:"bluetooth",level:2},{value:"server",id:"server-1",level:3},{value:"client",id:"client-1",level:3},{value:"Reference",id:"reference",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"\ub124\ud2b8\uc6cc\ud06c-\uacc4\uce35-osi-tcpip",children:"\ub124\ud2b8\uc6cc\ud06c \uacc4\uce35 (OSI, TCP/IP)"}),"\n",(0,t.jsx)(n.p,{children:"\ub124\ud2b8\uc6cc\ud06c \uacc4\uce35\uc740 OSI 7 \uacc4\uce35\uc73c\ub85c \uc774\ub8e8\uc5b4\uc838 \uc788\uace0, \uc778\ud130\ub137 \uc0ac\uc6a9 \ud658\uacbd\uc5d0\uc11c\ub294 TCP/IP 4\uacc4\uce35(\ub610\ub294 5\uacc4\uce35)\uc758 \uc2dc\uac01\uc73c\ub85c \ubc14\ub77c\ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,t.jsx)(n.p,{children:"\uc544\ub798 \uadf8\ub9bc\uc740 \ub450 \ubaa8\ub378\uc744 \uc124\uba85\ud558\ub294 \uadf8\ub9bc\uc785\ub2c8\ub2e4."}),"\n",(0,t.jsx)("center",{children:(0,t.jsx)("img",{src:(0,i.Ay)("img/lang/python/libraries/socket/python-socket-osi-tcp-ip.jpg")})}),"\n",(0,t.jsxs)(n.p,{children:["Ref: ",(0,t.jsx)(n.a,{href:"https://community.fs.com/blog/tcpip-vs-osi-whats-the-difference-between-the-two-models.html",children:"https://community.fs.com/blog/tcpip-vs-osi-whats-the-difference-between-the-two-models.html"})]}),"\n",(0,t.jsx)("center",{children:(0,t.jsx)("img",{src:(0,i.Ay)("img/lang/python/libraries/socket/python-socket-osi-tcp-ip-2.jpg")})}),"\n",(0,t.jsxs)(n.p,{children:["Ref: ",(0,t.jsx)(n.a,{href:"https://www.researchgate.net/figure/The-logical-mapping-between-OSI-basic-reference-model-and-the-TCP-IP-stack_fig2_327483011",children:"https://www.researchgate.net/figure/The-logical-mapping-between-OSI-basic-reference-model-and-the-TCP-IP-stack_fig2_327483011"})]}),"\n",(0,t.jsx)(n.p,{children:"\uac01 \uacc4\uce35\uc758 \uc5ed\ud560\uc740 \uc544\ub798\uc640 \uac19\uc2b5\ub2c8\ub2e4."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"7 \uacc4\uce35, Application"})," : \ud1b5\uc2e0 \ud504\ub85c\ud1a0\ucf5c\uacfc \uc778\ud130\ud398\uc774\uc2a4 \ub2f4\ub2f9\ud558\ub294 \uacc4\uce35"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"6 \uacc4\uce35, Presentation"})," : \ub370\uc774\ud130 \ubcc0\ud658, \uc554\ud638\ud654 \ub4f1\uc744 \ub3d5\ub294 \uacc4\uce35"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"5 \uacc4\uce35, Session"})," : \uc591 \ub05d\ub2e8 \uc751\uc6a9 \ud504\ub85c\uc138\uc2a4\uc5d0\uac8c \ud1b5\uc2e0 \uc5f0\uacb0, \uc720\uc9c0 \ub4f1\uc5d0 \ub300\ud55c \ubc29\ubc95\uc744 \uc81c\uacf5\ud558\ub294 \uacc4\uce35"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"4 \uacc4\uce35, Transport"})," : \ub370\uc774\ud130\ub97c \uc804\uc1a1\ud558\ub294 \ubc29\ubc95\uc744 \uc81c\uacf5\ud558\ub294 \uacc4\uce35"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"3 \uacc4\uce35, Network"})," : \ub2e4\uc911 \ub178\ub4dc \ub124\ud2b8\uc6cc\ud06c\uc758 \uad6c\uc870\ud654\uc640 \uad00\ub9ac\ub97c \uc704\ud574 \uc8fc\uc18c \uc9c0\uc815, \ub77c\uc6b0\ud305\uacfc \ud2b8\ub798\ud53d \uc81c\uc5b4\ub97c \ub2f4\ub2f9\ud558\ub294 \uacc4\uce35"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"2 \uacc4\uce35, Data link"})," : 1 \uacc4\uce35\uc5d0 \uc758\ud574 \uc5f0\uacb0\ub41c \ub450 \ub178\ub4dc \uc0ac\uc774\uc758 \uc2e0\ub8b0\uc131 \uc788\ub294 \uc804\uc1a1\uc744 \uc704\ud55c \uacc4\uce35"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"1 \uacc4\uce35, Physical"})," : \ud558\ub4dc\uc6e8\uc5b4 \uc804\uc1a1 \uae30\uc220\ub85c \uad6c\uc131\ub41c \uacc4\uce35"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\uc18c\ucf13-\ud1b5\uc2e0",children:"\uc18c\ucf13 \ud1b5\uc2e0"}),"\n",(0,t.jsx)(n.p,{children:"\uc18c\ucf13\uc740 TCP/IP \ubaa8\ub378\uc5d0\uc11c Application \uacc4\uce35\uacfc Transport \uacc4\uce35 \uc0ac\uc774\uc5d0\uc11c \ub124\ud2b8\uc6cc\ud06c \ud1b5\uc2e0\uc744 \ub3c4\uc640\uc8fc\ub294 \uc778\ud130\ud398\uc774\uc2a4 \uc785\ub2c8\ub2e4."}),"\n",(0,t.jsx)(n.h2,{id:"\ud568\uc218-\uc124\uba85",children:"\ud568\uc218 \uc124\uba85"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"socket.socket(family=AF_INET, type=SOCK_STREAM, proto=0, fileno=None)\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"@brief \uc18c\ucf13 \uac1d\uccb4 \uc0dd\uc131"}),"\n",(0,t.jsxs)(n.li,{children:["@param ",(0,t.jsx)(n.code,{children:"family"})," address family \uc124\uc815, \uc774 \uc124\uc815\uc5d0 \ub530\ub77c address format\uc774 \uacb0\uc815\ub429\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"socket.bind(address)\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"@brief address\uc5d0 \uc18c\ucf13\uc744 \uc5f0\uacb0"}),"\n",(0,t.jsxs)(n.li,{children:["@param ",(0,t.jsx)(n.code,{children:"address"})," ",(0,t.jsx)(n.code,{children:"socket.AF_INET"}),"\uc758 \uacbd\uc6b0 ",(0,t.jsx)(n.code,{children:"(host, port)"}),"\uc785\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"socket.listen([backlog])\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"@brief \uc11c\ubc84\uac00 \uc5f0\uacb0\uc744 \ud5c8\uc6a9\ud560 \uc218 \uc788\ub3c4\ub85d \uc124\uc815"}),"\n",(0,t.jsxs)(n.li,{children:["@param ",(0,t.jsx)(n.code,{children:"backlog"})," client\uac00 \uc5f0\uacb0\uc744 \uc694\uccad\ud588\uc744 \ub54c, socket.accept() \uc5c6\uc774 \ub300\uae30 \uac00\ub2a5\ud55c \uc694\uccad\uc758 \ucd5c\ub300 \uac1c\uc218, \uc8fc\ub85c 5 \uc815\ub3c4 \uc124\uc815"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"socket.accept()\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"@brief \uc5f0\uacb0 \uc694\uccad\uc744 \uc218\ub77d"}),"\n",(0,t.jsx)(n.li,{children:"@return (connected_socket, address)"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"socket.connect(address)\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"@brief address\uc5d0 \uc5f0\uacb0\ub41c socket\uacfc \uc5f0\uacb0"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"socket.recv(bufsize[, flags])\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"@brief \ucd5c\ub300 bufsize\ub9cc\ud07c \ub370\uc774\ud130\ub97c \uc218\uc2e0, bufsize\ub294 2^n \uac12\uc774 \uc801\uc808\ud568"}),"\n",(0,t.jsx)(n.li,{children:"@return byte"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["\uc0c1\ub300 \uc18c\ucf13\uc774 \ub2eb\ud788\uba74 \ube48 byte (",(0,t.jsx)(n.code,{children:"b''"}),")\ub97c \ubc18\ud658\ud558\uae30 \ub54c\ubb38\uc5d0 ",(0,t.jsx)(n.code,{children:"if not socket.recv(1024)"}),": \ub85c \uc5f0\uacb0\uc774 \ub04a\uacbc\ub294\uc9c0 \ud655\uc778 \uac00\ub2a5"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"socket.send(bytes[, flags])\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"@brief \ub370\uc774\ud130\ub97c \uc1a1\uc2e0"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"socket.sendall(bytes[, flags])\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"@brief \ubaa8\ub4e0 \ub370\uc774\ud130\uac00 \uc1a1\uc2e0\ub420 \ub54c\uae4c\uc9c0 \uc1a1\uc2e0"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"socket.close()\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"@brief \uc18c\ucf13 \uc885\ub8cc"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"socket.gethostname()\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"@return string \ud638\uc2a4\ud2b8 \uc774\ub984 \ubc18\ud658"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"tcp-udp",children:"TCP, UDP"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"TCP(Transmission Control Protocol)"}),(0,t.jsx)(n.th,{children:"UDP(User Datagram Protocol)"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\uc5f0\uacb0\ud615"}),(0,t.jsx)(n.td,{children:"\ube44\uc5f0\uacb0\ud615"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1:1"}),(0,t.jsxs)(n.td,{children:["1:1, 1",":N",", N",":N"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\ub192\uc740 \uc2e0\ub8b0\uc131"}),(0,t.jsx)(n.td,{children:"."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"."}),(0,t.jsx)(n.td,{children:"\ub354 \ube60\ub978 \uc18d\ub3c4"})]})]})]}),"\n",(0,t.jsx)("center",{children:(0,t.jsx)("img",{src:(0,i.Ay)("img/lang/python/libraries/socket/python-socket-tcp-udp.jpg")})}),"\n",(0,t.jsx)(n.h2,{id:"tcp-server---client-\uae30\ubcf8-\uc608\uc81c",children:"TCP server - client \uae30\ubcf8 \uc608\uc81c"}),"\n",(0,t.jsx)(n.h3,{id:"server",children:"server"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'import socket\nimport signal\nimport sys\nimport logging\nimport threading\nimport time\n\nlog = logging.getLogger(__name__)\n\nlogging.basicConfig(\n    format=\'[%(levelname)-8s] %(filename)-10s %(lineno) 4d \ud589 : %(message)s\',\n    level=logging.DEBUG)\n\n# \uc11c\ubc84 IP, PORT\n_HOST = "xxx.xxx.xxx.xxx"\n_PORT = 12345\n\nserver_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\n\nserver_socket.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)\n\nserver_socket.bind((_HOST, _PORT))\nserver_socket.listen()\n\ndef signal_handler(sig, frame):\n    server_socket.close()\n    time.sleep(1)\n    sys.exit()\n\nsignal.signal(signal.SIGINT, signal_handler)\n\ndef recv_thread(connected_socket):\n    while True:\n        try:\n            data = connected_socket.recv(1024)\n            if data == b\'\':\n                break\n            log.debug(data)\n        except:\n            break\n\nwhile True:\n    log.info("\uc5f0\uacb0 \ub300\uae30")\n    connected_socket, client_address = server_socket.accept()\n    log.info("{} \uc5f0\uacb0".format(client_address))\n\n    t = threading.Thread(target=recv_thread, args=(\n        connected_socket,), daemon=True)\n    t.start()\n    while t.isAlive():\n        try:\n            connected_socket.send("hello client\\n".encode())\n            time.sleep(1)\n        except:\n            break\n'})}),"\n",(0,t.jsx)(n.h3,{id:"client",children:"client"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"import socket\nimport signal\nimport sys\nimport logging\nimport threading\nimport time\n\nlog = logging.getLogger(__name__)\n\nlogging.basicConfig(\n    format='[%(levelname)-8s] %(filename)-10s %(lineno) 4d \ud589 : %(message)s',\n    level=logging.DEBUG)\n\n# \uc11c\ubc84 IP, PORT\n_HOST = \"xxx.xxx.xxx.xxx\"\n_PORT = 12345\n\nclient_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\nclient_socket.connect((_HOST, _PORT))\n\ndef signal_handler(sig, frame):\n    client_socket.close()\n    time.sleep(1)\n    sys.exit()\n\nsignal.signal(signal.SIGINT, signal_handler)\n\ndef recv_thread(client_socket):\n    while True:\n        try:\n            data = client_socket.recv(1024)\n            if data == b'':\n                break\n            log.debug(data)\n        except:\n            break\n\nt = threading.Thread(target=recv_thread, args=(client_socket,), daemon=True)\nt.start()\n\nwhile t.isAlive():\n    client_socket.send(\"hello server\\n\".encode())\n    time.sleep(1)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"bluetooth",children:"Bluetooth"}),"\n",(0,t.jsx)(n.h3,{id:"server-1",children:"server"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"import socket\nimport signal\nimport sys\n\nHOST = socket.BDADDR_ANY # '\ube14\ub8e8\ud22c\uc2a4 \ucee8\ud2b8\ub864\ub7ec \ub9e5 \uc8fc\uc18c'\ub97c \uc9c1\uc811 \uc785\ub825\ud574\ub3c4 \ub428\nPORT = 1\n\ndef signal_handler(sig, frame):\n    try:\n        connected_socket.close()\n\n    except:\n        pass\n\n    server_socket.close()\n    sys.exit()\n\nsignal.signal(signal.SIGINT, signal_handler)\n\n# \ube14\ub8e8\ud22c\uc2a4 \uc11c\ubc84 \uc18c\ucf13 \uc0dd\uc131\nserver_socket = socket.socket(\n    socket.AF_BLUETOOTH, socket.SOCK_STREAM, socket.BTPROTO_RFCOMM)\nserver_socket.bind((HOST, PORT))\nserver_socket.listen()\n\n# \ud074\ub77c\uc774\uc5b8\ud2b8 \uc811\uc18d \ub300\uae30\nconnected_socket, client_address = server_socket.accept()\n\ntry:\n    while True:\n        data = connected_socket.recv(1024)\n        print(\"client :\", data)\n        connected_socket.send(data)\n\nexcept:\n    pass\n\nconnected_socket.close()\nserver_socket.close()\n"})}),"\n",(0,t.jsx)(n.h3,{id:"client-1",children:"client"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'import socket\nimport signal\nimport sys\n\n# \uc11c\ubc84\uc758 HOST\uc640 PORT \uc815\ubcf4\nHOST = \'\'\nPORT = 1\n\ndef signal_handler(sig, frame):\n    client_socket.close()\n\n    sys.exit()\n\nsignal.signal(signal.SIGINT, signal_handler)\n\n# \ube14\ub8e8\ud22c\uc2a4 \ud074\ub77c\uc774\uc5b8\ud2b8 \uc18c\ucf13 \uc0dd\uc131\nclient_socket = socket.socket(\n    socket.AF_BLUETOOTH, socket.SOCK_STREAM, socket.BTPROTO_RFCOMM)\n\n# \uc11c\ubc84 \uc811\uc18d\nclient_socket.connect((HOST, PORT))\n\ntry:\n    while True:\n        data = input("client : ")\n        if data:\n            client_socket.send(data.encode())\n            data = client_socket.recv(1024)\n            print("server :", data)\n\nexcept:\n    pass\n\nclient_socket.close()\n'})}),"\n",(0,t.jsx)(n.h2,{id:"reference",children:"Reference"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://docs.python.org/3/library/socket.html",children:"https://docs.python.org/3/library/socket.html"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/OSI_model",children:"https://en.wikipedia.org/wiki/OSI_model"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>r});var t=s(96540);const c={},i=t.createContext(c);function l(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);