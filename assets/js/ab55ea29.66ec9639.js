"use strict";(self.webpackChunkwiki_loliot_net=self.webpackChunkwiki_loliot_net||[]).push([[7649],{7804:(e,l,n)=>{n.r(l),n.d(l,{assets:()=>i,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>t});const s=JSON.parse('{"id":"lang/db/sql/mysql/user","title":"MySQL User(Role)","description":"MySQL User(Role)","source":"@site/docs/lang/db/sql/mysql/user.mdx","sourceDirName":"lang/db/sql/mysql","slug":"/lang/db/sql/mysql/user","permalink":"/docs/lang/db/sql/mysql/user","draft":false,"unlisted":false,"editUrl":"https://github.com/hhk7734/wiki/tree/main/docs/lang/db/sql/mysql/user.mdx","tags":[],"version":"current","lastUpdatedAt":1732905402000,"frontMatter":{"id":"user","title":"MySQL User(Role)","sidebar_label":"User(Role)","description":"MySQL User(Role)","keywords":["user","role","mysql"]},"sidebar":"db","previous":{"title":"MySQL","permalink":"/docs/lang/db/sql/mysql/"},"next":{"title":"Aggregate","permalink":"/docs/lang/db/sql/mysql/aggregate"}}');var r=n(74848),d=n(28453);const a={id:"user",title:"MySQL User(Role)",sidebar_label:"User(Role)",description:"MySQL User(Role)",keywords:["user","role","mysql"]},c=void 0,i={},t=[{value:"CREATE USER",id:"create-user",level:2},{value:"CREATE ROLE",id:"create-role",level:2},{value:"GRANT",id:"grant",level:2},{value:"REVOKE",id:"revoke",level:2},{value:"\uad8c\ud55c \uad00\ub9ac \uc608\uc2dc",id:"\uad8c\ud55c-\uad00\ub9ac-\uc608\uc2dc",level:2},{value:"<code>&lt;database&gt;_admin</code>",id:"database_admin",level:3},{value:"<code>&lt;database&gt;_writer</code>",id:"database_writer",level:3},{value:"<code>&lt;database&gt;_reader</code>",id:"database_reader",level:3}];function o(e){const l={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",pre:"pre",ul:"ul",...(0,d.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.h2,{id:"create-user",children:"CREATE USER"}),"\n",(0,r.jsxs)(l.ul,{children:["\n",(0,r.jsx)(l.li,{children:(0,r.jsx)(l.a,{href:"https://dev.mysql.com/doc/refman/8.0/en/create-user.html",children:"https://dev.mysql.com/doc/refman/8.0/en/create-user.html"})}),"\n",(0,r.jsx)(l.li,{children:(0,r.jsx)(l.a,{href:"https://dev.mysql.com/doc/refman/8.0/en/account-names.html",children:"https://dev.mysql.com/doc/refman/8.0/en/account-names.html"})}),"\n"]}),"\n",(0,r.jsx)(l.pre,{children:(0,r.jsx)(l.code,{className:"language-sql",children:"CREATE USER <user>[@<host>] [<authOption>]\n"})}),"\n",(0,r.jsxs)(l.ul,{children:["\n",(0,r.jsxs)(l.li,{children:[(0,r.jsx)(l.code,{children:"<authOption>"}),"\n",(0,r.jsxs)(l.ul,{children:["\n",(0,r.jsx)(l.li,{children:(0,r.jsx)(l.code,{children:"IDENTIFIED BY <password>"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(l.h2,{id:"create-role",children:"CREATE ROLE"}),"\n",(0,r.jsxs)(l.ul,{children:["\n",(0,r.jsx)(l.li,{children:(0,r.jsx)(l.a,{href:"https://dev.mysql.com/doc/refman/8.0/en/create-role.html",children:"https://dev.mysql.com/doc/refman/8.0/en/create-role.html"})}),"\n",(0,r.jsx)(l.li,{children:(0,r.jsx)(l.a,{href:"https://dev.mysql.com/doc/refman/8.0/en/role-names.html",children:"https://dev.mysql.com/doc/refman/8.0/en/role-names.html"})}),"\n"]}),"\n",(0,r.jsx)(l.pre,{children:(0,r.jsx)(l.code,{className:"language-sql",children:"CREATE ROLE <role>\n"})}),"\n",(0,r.jsx)(l.h2,{id:"grant",children:"GRANT"}),"\n",(0,r.jsxs)(l.ul,{children:["\n",(0,r.jsx)(l.li,{children:(0,r.jsx)(l.a,{href:"https://dev.mysql.com/doc/refman/8.0/en/grant.html",children:"https://dev.mysql.com/doc/refman/8.0/en/grant.html"})}),"\n"]}),"\n",(0,r.jsx)(l.pre,{children:(0,r.jsx)(l.code,{className:"language-sql",children:"GRANT\n    <privilegeType> [(<column> [, <column>])]\n    , [<privilegeType> [(<column> [, <column>])]]\n    ON [TABLE | FUNCTION | PROCEDURE] <privilegeLevel>\n    TO <user[@<host>] | role>\n    [WITH GRANT OPTION]\n"})}),"\n",(0,r.jsxs)(l.ul,{children:["\n",(0,r.jsxs)(l.li,{children:[(0,r.jsx)(l.code,{children:"<privilegeType>"}),"\n",(0,r.jsxs)(l.ul,{children:["\n",(0,r.jsx)(l.li,{children:(0,r.jsx)(l.a,{href:"https://dev.mysql.com/doc/refman/8.0/en/privileges-provided.html",children:"https://dev.mysql.com/doc/refman/8.0/en/privileges-provided.html"})}),"\n",(0,r.jsx)(l.li,{children:(0,r.jsx)(l.code,{children:"ALL"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(l.li,{children:[(0,r.jsx)(l.code,{children:"<privilegeLevel>"}),"\n",(0,r.jsxs)(l.ul,{children:["\n",(0,r.jsx)(l.li,{children:(0,r.jsx)(l.code,{children:"<table>"})}),"\n",(0,r.jsx)(l.li,{children:(0,r.jsx)(l.code,{children:"<database>.<table>"})}),"\n",(0,r.jsx)(l.li,{children:(0,r.jsx)(l.code,{children:"<database>.<routine>"})}),"\n",(0,r.jsxs)(l.li,{children:["\uc774\ub984 \ub300\uc2e0 ",(0,r.jsx)(l.code,{children:"*"}),"\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\uc218"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(l.li,{children:[(0,r.jsx)(l.code,{children:"WITH GRANT OPTION"}),": \ub2e4\ub978 \uc0ac\uc6a9\uc790\uc5d0\uac8c \uc790\uc2e0\uc774 \ubd80\uc5ec\ubc1b\uc740 \uad8c\ud55c\uc744 \ubd80\uc5ec \ud560 \uc218 \uc788\ub294 \uad8c\ud55c\uc744 \ubd80\uc5ec\ud569\ub2c8\ub2e4"]}),"\n"]}),"\n",(0,r.jsx)(l.pre,{children:(0,r.jsx)(l.code,{className:"language-sql",children:"GRANT <role>, [,<role>]\n    TO <user[@<host>] | role>, [,<user[@<host>] | role>]\n    [WITH ADMIN OPTION]\n"})}),"\n",(0,r.jsx)(l.pre,{children:(0,r.jsx)(l.code,{className:"language-sql",children:"FLUSH PRIVILEGES\n"})}),"\n",(0,r.jsx)(l.pre,{children:(0,r.jsx)(l.code,{className:"language-sql",children:"SHOW GRANTS FOR <user[@<host>] | role>\n"})}),"\n",(0,r.jsx)(l.h2,{id:"revoke",children:"REVOKE"}),"\n",(0,r.jsx)(l.h2,{id:"\uad8c\ud55c-\uad00\ub9ac-\uc608\uc2dc",children:"\uad8c\ud55c \uad00\ub9ac \uc608\uc2dc"}),"\n",(0,r.jsx)(l.h3,{id:"database_admin",children:(0,r.jsx)(l.code,{children:"<database>_admin"})}),"\n",(0,r.jsx)(l.pre,{children:(0,r.jsx)(l.code,{className:"language-sql",children:"GRANT ALL ON <database>.* TO <database>_admin\n"})}),"\n",(0,r.jsx)(l.h3,{id:"database_writer",children:(0,r.jsx)(l.code,{children:"<database>_writer"})}),"\n",(0,r.jsx)(l.pre,{children:(0,r.jsx)(l.code,{className:"language-sql",children:"GRANT INSERT, UPDATE, DELETE ON <database>.* TO <database>_writer\n"})}),"\n",(0,r.jsx)(l.h3,{id:"database_reader",children:(0,r.jsx)(l.code,{children:"<database>_reader"})}),"\n",(0,r.jsx)(l.pre,{children:(0,r.jsx)(l.code,{className:"language-sql",children:"GRANT SELECT ON <database>.* TO <database>_reader\n"})})]})}function h(e={}){const{wrapper:l}={...(0,d.R)(),...e.components};return l?(0,r.jsx)(l,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},28453:(e,l,n)=>{n.d(l,{R:()=>a,x:()=>c});var s=n(96540);const r={},d=s.createContext(r);function a(e){const l=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(l):{...l,...e}}),[l,e])}function c(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(d.Provider,{value:l},e.children)}}}]);