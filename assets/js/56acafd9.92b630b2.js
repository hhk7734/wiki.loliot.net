"use strict";(self.webpackChunkwiki_loliot_net=self.webpackChunkwiki_loliot_net||[]).push([[91542],{61398:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>d,toc:()=>a});const d=JSON.parse('{"id":"lang/db/dynamodb/update-item","title":"DynamoDB Update Item","description":"DynamoDB Update Item","source":"@site/docs/lang/db/dynamodb/update-item.mdx","sourceDirName":"lang/db/dynamodb","slug":"/lang/db/dynamodb/update-item","permalink":"/docs/lang/db/dynamodb/update-item","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedAt":1731596630000,"frontMatter":{"id":"update-item","title":"DynamoDB Update Item","sidebar_label":"Update Item","description":"DynamoDB Update Item","keywords":["dynamodb","Update Item"]},"sidebar":"db","previous":{"title":"Basics","permalink":"/docs/lang/db/dynamodb/basics"}}');var s=i(74848),l=i(28453);const t={id:"update-item",title:"DynamoDB Update Item",sidebar_label:"Update Item",description:"DynamoDB Update Item",keywords:["dynamodb","Update Item"]},r=void 0,c={},a=[{value:"Terms",id:"terms",level:2},{value:"ConditionExpression",id:"conditionexpression",level:2},{value:"UpdateExpression",id:"updateexpression",level:2},{value:"ExpressionAttributeNames",id:"expressionattributenames",level:2},{value:"ExpressionAttributeValues",id:"expressionattributevalues",level:2},{value:"ReturnValues",id:"returnvalues",level:2},{value:"ReturnConsumedCapacity",id:"returnconsumedcapacity",level:2},{value:"Reference",id:"reference",level:2}];function o(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"terms",children:"Terms"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"path"}),": Item\uc758 \ubb38\uc11c \uacbd\ub85c EX) user, info.name, #name"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"value"}),": ",(0,s.jsx)(n.code,{children:"path"}),"\uc5d0 \ub300\uc785\ud560 \uac12 EX) ",":name"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"operand"}),": ",(0,s.jsx)(n.code,{children:"path"})," or ",(0,s.jsx)(n.code,{children:"value"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"conditionexpression",children:"ConditionExpression"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Comparator","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"a = b"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"a <> b"}),": a\uc640 b\uac00 \ub2e4\ub974\uba74 True"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"a < b"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"a <= b"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"a > b"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"a >= b"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"a BETWEEN b AND c"}),": ",(0,s.jsx)(n.code,{children:"(b <= a) AND (a <= c)"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"a IN (b, c)"}),": ",(0,s.jsx)(n.code,{children:"(a = b) OR (a = c)"}),", \ub9ac\uc2a4\ud2b8\ub294 \ucd5c\ub300 100\uac1c \uae4c\uc9c0 \uc124\uc815\ud560 \uc218 \uc788\uc74c"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Function","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"attribute_exists(path)"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"attribute_not_exists(path)"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"attribute_type(path, type)"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"contains(path, operand)"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"begins_with(path, substr)"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"size(path)"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Logical","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"a AND b"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"a OR b"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"NOT a"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"boto3.dynamodb.conditions"})," \uc744 \uc774\uc6a9\ud574\uc11c \ud45c\ud604\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]})}),"\n",(0,s.jsx)(n.h2,{id:"updateexpression",children:"UpdateExpression"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"SET path = value [, path = value]"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"SET path = value"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"SET path = operand + operand"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"SET path = operand - operand"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"SET path = list_append(operand, operand)"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"REMOVE path [, path]"})}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"SET path=value REMOVE path"})," \ucc98\ub7fc \uc5ec\ub7ec \uc561\uc158\uc744 \uc218\ud589\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."]})}),"\n",(0,s.jsx)(n.h2,{id:"expressionattributenames",children:"ExpressionAttributeNames"}),"\n",(0,s.jsx)(n.h2,{id:"expressionattributevalues",children:"ExpressionAttributeValues"}),"\n",(0,s.jsx)(n.h2,{id:"returnvalues",children:"ReturnValues"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"NONE"}),": \uae30\ubcf8\uac12"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"ALL_OLD"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"UPDATED_OLD"}),": \uc5c5\ub370\uc774\ud2b8\ud558\uae30 \uc804 ",(0,s.jsx)(n.code,{children:"path"}),"\uc758 \uac12\ub9cc \ubc18\ud658"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"ALL_NEW"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"UPDATED_NEW"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"returnconsumedcapacity",children:"ReturnConsumedCapacity"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"INDEXES"}),": \uae30\ubcf8 \ud14c\uc774\ube14 + \uc778\ub371\uc2a4 \ud14c\uc774\ube14"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"TOTAL"}),": \uae30\ubcf8 \ud14c\uc774\ube14"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"NONE"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"reference",children:"Reference"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/dynamodb.html#DynamoDB.Client.update_item",children:"https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/dynamodb.html#DynamoDB.Client.update_item"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.OperatorsAndFunctions.html",children:"https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.OperatorsAndFunctions.html"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>r});var d=i(96540);const s={},l=d.createContext(s);function t(e){const n=d.useContext(l);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),d.createElement(l.Provider,{value:n},e.children)}}}]);