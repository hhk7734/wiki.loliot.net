"use strict";(self.webpackChunkwiki_loliot_net=self.webpackChunkwiki_loliot_net||[]).push([[21200],{29158:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>a,frontMatter:()=>s,metadata:()=>d,toc:()=>o});var l=n(74848),r=n(28453);const s={id:"text-color",title:"ShellScript Text color",sidebar_label:"Text color",description:"ShellScript Text color",keywords:["ShellScript","Text color"]},c=void 0,d={id:"lang/shellscript/text-color",title:"ShellScript Text color",description:"ShellScript Text color",source:"@site/docs/lang/shellscript/text-color.mdx",sourceDirName:"lang/shellscript",slug:"/lang/shellscript/text-color",permalink:"/docs/lang/shellscript/text-color",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1723917838e3,frontMatter:{id:"text-color",title:"ShellScript Text color",sidebar_label:"Text color",description:"ShellScript Text color",keywords:["ShellScript","Text color"]},sidebar:"shellscript",previous:{title:"ShellScript",permalink:"/docs/lang/shellscript/"},next:{title:"getopt",permalink:"/docs/lang/shellscript/getopt"}},i={},o=[{value:"ANSI escape code",id:"ansi-escape-code",level:2},{value:"tput",id:"tput",level:2},{value:"Example",id:"example",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(t.p,{children:["Ref: ",(0,l.jsx)(t.a,{href:"https://stackoverflow.com/questions/5947742/how-to-change-the-output-color-of-echo-in-linux",children:"https://stackoverflow.com/questions/5947742/how-to-change-the-output-color-of-echo-in-linux"})]}),"\n",(0,l.jsx)(t.h2,{id:"ansi-escape-code",children:"ANSI escape code"}),"\n",(0,l.jsxs)(t.p,{children:["Ref: ",(0,l.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/ANSI_escape_code",children:"https://en.wikipedia.org/wiki/ANSI_escape_code"})]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-shell",children:'BLACK="\\033[0;30m"\nRED="\\033[0;31m"\nGREEN="\\033[0;32m"\nORANGE="\\033[0;33m"\nBLUE="\\033[0;34m"\nPURPLE="\\033[0;35m"\nCYAN="\\033[0;36m"\nLGRAY="\\033[0;37m"\n\nDGRAY="\\033[1;30m"\nLRED="\\033[1;31m"\nLGREEN="\\033[1;32m"\nYELLOW="\\033[1;33m"\nLBLUE="\\033[1;34m"\nLPURPLE="\\033[1;35m"\nLCYAN="\\033[1;36m"\nWHITE="\\033[1;37m"\n\nDEFAULT="\\033[0m"\n\nprintf "${RED}red, ${YELLOW}yellow\\n"\necho "${BLUE}blue, ${LCYAN}light cyan"\n'})}),"\n",(0,l.jsx)(t.h2,{id:"tput",children:"tput"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-shell",children:"tput setab [1-7] # Set the background colour using ANSI escape\ntput setaf [1-7] # Set the foreground colour using ANSI escape\n"})}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"Num"}),(0,l.jsx)(t.th,{children:"Colour"}),(0,l.jsx)(t.th,{children:"define"}),(0,l.jsx)(t.th,{children:"R,G,B"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"0"}),(0,l.jsx)(t.td,{children:"black"}),(0,l.jsx)(t.td,{children:"COLOR_BLACK"}),(0,l.jsx)(t.td,{children:"0,0,0"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"1"}),(0,l.jsx)(t.td,{children:"red"}),(0,l.jsx)(t.td,{children:"COLOR_RED"}),(0,l.jsx)(t.td,{children:"1,0,0"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"2"}),(0,l.jsx)(t.td,{children:"green"}),(0,l.jsx)(t.td,{children:"COLOR_GREEN"}),(0,l.jsx)(t.td,{children:"0,1,0"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"3"}),(0,l.jsx)(t.td,{children:"yellow"}),(0,l.jsx)(t.td,{children:"COLOR_YELLOW"}),(0,l.jsx)(t.td,{children:"1,1,0"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"4"}),(0,l.jsx)(t.td,{children:"blue"}),(0,l.jsx)(t.td,{children:"COLOR_BLUE"}),(0,l.jsx)(t.td,{children:"0,0,1"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"5"}),(0,l.jsx)(t.td,{children:"magenta"}),(0,l.jsx)(t.td,{children:"COLOR_MAGENTA"}),(0,l.jsx)(t.td,{children:"1,0,1"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"6"}),(0,l.jsx)(t.td,{children:"cyan"}),(0,l.jsx)(t.td,{children:"COLOR_CYAN"}),(0,l.jsx)(t.td,{children:"0,1,1"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"7"}),(0,l.jsx)(t.td,{children:"white"}),(0,l.jsx)(t.td,{children:"COLOR_WHITE"}),(0,l.jsx)(t.td,{children:"1,1,1"})]})]})]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-shell",children:"tput bold    # Select bold mode\ntput dim     # Select dim (half-bright) mode\ntput smul    # Enable underline mode\ntput rmul    # Disable underline mode\n"})}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-shell",children:"tput sgr0    # Reset text format to the terminal's default\ntput bel     # Play a bell\ntput clear   # Clear screen and move the cursor to 0,0\n"})}),"\n",(0,l.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-shell",children:'BLACK=$(tput setaf 0)\nRED=$(tput setaf 1)\nGREEN=$(tput setaf 2)\nORANGE=$(tput setaf 3)\nBLUE=$(tput setaf 4)\nPURPLE=$(tput setaf 5)\nCYAN=$(tput setaf 6)\nLGRAY=$(tput setaf 7)\n\nBOLD=$(tput bold)\n\nDEFAULT=$(tput sgr0)\n\nprintf "${RED}${BOLD}red, ${YELLOW}yellow\\n"\necho "${BLUE}blue, ${CYAN}light cyan"\n'})})]})}function a(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>d});var l=n(96540);const r={},s=l.createContext(r);function c(e){const t=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),l.createElement(s.Provider,{value:t},e.children)}}}]);