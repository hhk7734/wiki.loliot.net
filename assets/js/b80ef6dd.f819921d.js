"use strict";(self.webpackChunkwiki_loliot_net=self.webpackChunkwiki_loliot_net||[]).push([[36380],{81282:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>r,contentTitle:()=>c,default:()=>h,frontMatter:()=>d,metadata:()=>s,toc:()=>i});const s=JSON.parse('{"id":"lang/db/sql/mysql/mysql","title":"MySQL","description":"MySQL","source":"@site/docs/lang/db/sql/mysql/mysql.mdx","sourceDirName":"lang/db/sql/mysql","slug":"/lang/db/sql/mysql/","permalink":"/docs/lang/db/sql/mysql/","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedAt":1731596630000,"frontMatter":{"id":"mysql","title":"MySQL","sidebar_label":"MySQL","description":"MySQL","keywords":["mysql"]},"sidebar":"db","previous":{"title":"Type","permalink":"/docs/lang/db/sql/type"},"next":{"title":"User(Role)","permalink":"/docs/lang/db/sql/mysql/user"}}');var a=l(74848),t=l(28453);const d={id:"mysql",title:"MySQL",sidebar_label:"MySQL",description:"MySQL",keywords:["mysql"]},c=void 0,r={},i=[{value:"CMD",id:"cmd",level:2},{value:"Execute .sql",id:"execute-sql",level:3},{value:"Database",id:"database",level:2},{value:"CREATE Database",id:"create-database",level:3},{value:"Table",id:"table",level:2},{value:"CREATE TABLE",id:"create-table",level:3},{value:"ALTER TABLE",id:"alter-table",level:3},{value:"ALTER TABLE ADD",id:"alter-table-add",level:4},{value:"ALTER TABLE MODIFY",id:"alter-table-modify",level:4},{value:"ALTER TABLE DROP",id:"alter-table-drop",level:4},{value:"Data",id:"data",level:2},{value:"INSERT",id:"insert",level:3},{value:"LOAD DATA",id:"load-data",level:3},{value:"SELECT",id:"select",level:3},{value:"UPDATE",id:"update",level:3},{value:"DELETE",id:"delete",level:3}];function o(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"cmd",children:"CMD"}),"\n",(0,a.jsx)(n.h3,{id:"execute-sql",children:"Execute .sql"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://dev.mysql.com/doc/refman/8.0/en/mysql-batch-commands.html",children:"https://dev.mysql.com/doc/refman/8.0/en/mysql-batch-commands.html"})}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"mysql <db_name> < </path/sql_file>\n"})}),"\n",(0,a.jsx)(n.p,{children:"or"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"SOURCE </path/sql_file>\n"})}),"\n",(0,a.jsx)(n.h2,{id:"database",children:"Database"}),"\n",(0,a.jsx)(n.h3,{id:"create-database",children:"CREATE Database"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://dev.mysql.com/doc/refman/8.0/en/create-database.html",children:"https://dev.mysql.com/doc/refman/8.0/en/create-database.html"})}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"CREATE DATABASE <db_name> CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci\n"})}),"\n",(0,a.jsx)(n.h2,{id:"table",children:"Table"}),"\n",(0,a.jsx)(n.h3,{id:"create-table",children:"CREATE TABLE"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://dev.mysql.com/doc/refman/8.0/en/create-table.html",children:"https://dev.mysql.com/doc/refman/8.0/en/create-table.html"})}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE\n    `<table>`\n    (\n        <column> <type> <constraints>\n        [,<column> <type> <constraints> ...]\n        [,<table_constraints> ...]\n    )\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"SHOW CREATE TABLE `<table>`\n"})}),"\n",(0,a.jsx)(n.h3,{id:"alter-table",children:"ALTER TABLE"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://dev.mysql.com/doc/refman/8.0/en/alter-table.html",children:"https://dev.mysql.com/doc/refman/8.0/en/alter-table.html"})}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"ALTER TABLE\n    `<table>`\n[<alter_option>[,<alter_option>]]\n[<partition_option>[,<partition_option>]]\n"})}),"\n",(0,a.jsx)(n.h4,{id:"alter-table-add",children:"ALTER TABLE ADD"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"ALTER TABLE\n    `<table>`\nADD\n    [COLUMN] `<column>` <col_definition>\n    [FIRST | AFTER `<column>`]\n"})}),"\n",(0,a.jsx)(n.h4,{id:"alter-table-modify",children:"ALTER TABLE MODIFY"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"ALTER TABLE\n    `<table>`\nMODIFY\n    [COLUMN] `<column>` <col_definition>\n    [FIRST | AFTER `<column>`]\n"})}),"\n",(0,a.jsx)(n.h4,{id:"alter-table-drop",children:"ALTER TABLE DROP"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"ALTER TABLE\n    `<table>`\nDROP\n    [COLUMN] `<column>`\n"})}),"\n",(0,a.jsx)(n.h2,{id:"data",children:"Data"}),"\n",(0,a.jsx)(n.h3,{id:"insert",children:"INSERT"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://dev.mysql.com/doc/refman/8.0/en/insert.html",children:"https://dev.mysql.com/doc/refman/8.0/en/insert.html"})}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"INSERT INTO\n    `<table>` [(<col_name>[,<col_name>])]\nVALUES\n    (<value>[,<value>])\n"})}),"\n",(0,a.jsx)(n.h3,{id:"load-data",children:"LOAD DATA"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://dev.mysql.com/doc/refman/8.0/en/load-data.html",children:"https://dev.mysql.com/doc/refman/8.0/en/load-data.html"})}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"LOAD DATA [LOCAL] INFILE '<path>' INTO TABLE `<table>`\n    [FIELDS [TERMINATED BY '<string>'] [ENCLOSED BY '<char>']]\n    [LINES [STARTING BY '<string>'] [TERMINATED BY '<string>']]\n    [IGNORE <number> ROWS]\n    [(<col_name_or_user_var>[,<col_name_or_user_var>])]\n[SET\n    <col_name>=<expr>[,\n    <col_name>=<expr>]]\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"LOCAL"}),": \ud30c\uc77c\uc774 Client\uc5d0 \uc788\ub294 \uacbd\uc6b0"]}),"\n"]}),"\n",(0,a.jsx)(n.admonition,{type:"warning",children:(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"LOCAL"})," \uc635\uc158\uc744 \uc0ac\uc6a9\ud560 \ub54c, ",(0,a.jsx)(n.code,{children:"ERROR 2068 (HY000)"}),"\uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. ",(0,a.jsx)(n.code,{children:"mysql --local-infile=1 ..."})," \uba85\ub839\uc5b4\ub85c \ud074\ub77c\uc774\uc5b8\ud2b8\ub97c \uc2e4\ud589\ud558\uba74 \ud574\uacb0 \ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]})}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"SELECT ... INTO OUTFILE ..."}),"\uba85\ub839\uc5b4\ub85c \uc635\uc158\uc5d0 \ub530\ub77c \ud30c\uc77c\uc774 \uc5b4\ub5bb\uac8c \ucd9c\ub825\ub418\ub294\uc9c0 \ud655\uc778\ud55c \ud6c4 ",(0,a.jsx)(n.code,{children:"LOAD DATA"})," \uba85\ub839\uc5b4\ub97c \uc0ac\uc6a9\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."]})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"LOAD DATA LOCAL INFILE 'example.tsv' INTO TABLE `example`\n    FIELDS TERMINATED BY '\\t'\n    LINES TERMINATED BY '\\n'\n    (col1, @var1)\nSET\n    col2 = @var1/10\n"})}),"\n",(0,a.jsx)(n.h3,{id:"select",children:"SELECT"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://dev.mysql.com/doc/refman/8.0/en/select.html",children:"https://dev.mysql.com/doc/refman/8.0/en/select.html"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://dev.mysql.com/doc/refman/8.0/en/select-into.html",children:"https://dev.mysql.com/doc/refman/8.0/en/select-into.html"})}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"SELECT\n    <select_expr>\nFROM\n    <table_references>\n[WHERE\n    <where_condition>]\n[LIMIT\n    <row_count> [OFFSET <offset>]]\n[INTO\n    <into_option>]\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"LIMIT a OFFSET b"}),"\ub294 b+1 \ubc88\uc9f8 row\ubd80\ud130 b+a \ubc88\uc9f8 row \uae4c\uc9c0\ub97c \uc758\ubbf8\ud569\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,a.jsx)(n.admonition,{type:"warning",children:(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"SELECT ... INTO OUTFILE ..."})," \uba85\ub839\uc5b4\ub294 \uc11c\ubc84\uc5d0 \ud30c\uc77c\uc744 \uc0dd\uc131\ud569\ub2c8\ub2e4. \ub530\ub77c\uc11c \ud074\ub77c\uc774\uc5b8\ud2b8\uc5d0 \ud30c\uc77c\uc744 \uc0dd\uc131\ud558\ub824\uba74 ",(0,a.jsx)(n.code,{children:'mysql ... -e "SELECT ..." > <path>'})," \uba85\ub839\uc5b4\ub97c \uc0ac\uc6a9\ud574\uc57c \ud569\ub2c8\ub2e4."]})}),"\n",(0,a.jsx)(n.h3,{id:"update",children:"UPDATE"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://dev.mysql.com/doc/refman/8.0/en/update.html",children:"https://dev.mysql.com/doc/refman/8.0/en/update.html"})}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"UPDATE\n    `<table>`\nSET\n    <assignment_list>\n[WHERE\n    <where_condition>]\n"})}),"\n",(0,a.jsx)(n.h3,{id:"delete",children:"DELETE"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://dev.mysql.com/doc/refman/8.0/en/delete.html",children:"https://dev.mysql.com/doc/refman/8.0/en/delete.html"})}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"DELETE FROM\n    `<table>`\n[WHERE\n    <where_condition>]\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},28453:(e,n,l)=>{l.d(n,{R:()=>d,x:()=>c});var s=l(96540);const a={},t=s.createContext(a);function d(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);