"use strict";(self.webpackChunkwiki_loliot_net=self.webpackChunkwiki_loliot_net||[]).push([[25980],{34586:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>c,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"lang/javascript/react/nextjs/nextjs","title":"Next.js","description":"Next.js","source":"@site/docs/lang/javascript/react/nextjs/nextjs.mdx","sourceDirName":"lang/javascript/react/nextjs","slug":"/lang/javascript/react/nextjs/","permalink":"/docs/lang/javascript/react/nextjs/","draft":false,"unlisted":false,"editUrl":"https://github.com/hhk7734/wiki/tree/main/docs/lang/javascript/react/nextjs/nextjs.mdx","tags":[],"version":"current","lastUpdatedAt":1736949978000,"frontMatter":{"id":"nextjs","title":"Next.js","sidebar_label":"Next.js","description":"Next.js","keywords":["Next.js"]},"sidebar":"javascript","previous":{"title":"useMutation","permalink":"/docs/lang/javascript/react/react-query/use-mutation"},"next":{"title":"ENV","permalink":"/docs/lang/javascript/react/nextjs/env"}}');var a=t(74848),r=t(28453);const c={id:"nextjs",title:"Next.js",sidebar_label:"Next.js",description:"Next.js",keywords:["Next.js"]},i=void 0,o={},l=[{value:"Create App",id:"create-app",level:2},{value:"Directory Structure",id:"directory-structure",level:2},{value:"Dockerfile",id:"dockerfile",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"create-app",children:"Create App"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"yarn create next-app --typescript\n"})}),"\n",(0,a.jsx)(n.h2,{id:"directory-structure",children:"Directory Structure"}),"\n",(0,a.jsx)(n.p,{children:"\uae30\ubcf8\uc73c\ub85c \uc0dd\uc131\ub418\ub294 \uad6c\uc870\ub294 \uc544\ub798\uc640 \uac19\uc2b5\ub2c8\ub2e4."}),"\n",(0,a.jsx)(n.p,{children:"email/"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"<package>\n\u251c\u2500\u2500 next-env.d.ts\n\u251c\u2500\u2500 next.config.js\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 postcss.config.js\n\u251c\u2500\u2500 public/\n\u2502   \u251c\u2500\u2500 next.svg\n\u2502   \u2514\u2500\u2500 vercel.svg\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 src/\n\u2502   \u2514\u2500\u2500 app/\n\u2502       \u251c\u2500\u2500 favicon.ico\n\u2502       \u251c\u2500\u2500 globals.css\n\u2502       \u251c\u2500\u2500 layout.tsx\n\u2502       \u2514\u2500\u2500 page.tsx\n\u251c\u2500\u2500 tailwind.config.ts\n\u251c\u2500\u2500 tsconfig.json\n\u2514\u2500\u2500 yarn.lock\n"})}),"\n",(0,a.jsx)(n.h2,{id:"dockerfile",children:"Dockerfile"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://nextjs.org/docs/advanced-features/output-file-tracing",children:"https://nextjs.org/docs/advanced-features/output-file-tracing"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://github.com/vercel/next.js/tree/canary/examples/with-docker",children:"https://github.com/vercel/next.js/tree/canary/examples/with-docker"})}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["\uc774\ubbf8\uc9c0 \ucd5c\uc801\ud654\ub97c \uc0ac\uc6a9\ud558\ub294 \uacbd\uc6b0 ",(0,a.jsx)(n.code,{children:"sharp"}),"\ub97c \uc885\uc18d\uc131\uc73c\ub85c \ucd94\uac00\ud574\uc57c \ud569\ub2c8\ub2e4."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"yarn add sharp\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="next.config.js"',children:'module.exports = {\n\toutput: "standalone",\n};\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-dockerfile",children:'FROM node:16-alpine AS deps\nRUN apk add --no-cache libc6-compat\nWORKDIR /app\n\nCOPY package.json yarn.lock ./\nRUN yarn install --frozen-lockfile\n\nFROM node:16-alpine AS builder\nWORKDIR /app\nCOPY --from=deps /app/node_modules ./node_modules\nCOPY . .\n\nENV NEXT_TELEMETRY_DISABLED 1\n\nRUN yarn build\n\nFROM node:16-alpine AS runner\nWORKDIR /app\n\nARG NODE_ENV=production\nENV NODE_ENV=${NODE_ENV}\nENV NEXT_TELEMETRY_DISABLED 1\n\nRUN addgroup --system --gid 1001 nodejs\nRUN adduser --system --uid 1001 nextjs\n\n# You only need to copy next.config.js if you are NOT using the default configuration\n# COPY --from=builder /app/next.config.js ./\nCOPY --from=builder /app/public ./public\nCOPY --from=builder /app/package.json ./package.json\n\n# Automatically leverage output traces to reduce image size\n# https://nextjs.org/docs/advanced-features/output-file-tracing\nCOPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./\nCOPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static\n\n# RUN ln -s /config/.env .env\n\nUSER nextjs\n\nEXPOSE 3000\n\nENV PORT 3000\n\nCMD ["node", "server.js"]\n'})}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:".env"})," \ud30c\uc77c\uc744 \uc778\uc2dd\ud558\uae30 \ub54c\ubb38\uc5d0 \ud658\uacbd \ubcc0\uc218 \ub300\uc2e0 \ubcfc\ub968 \ub9c8\uc6b4\ud2b8\ub97c \uc0ac\uc6a9\ud558\uc5ec \ud658\uacbd \ubcc0\uc218\ub97c \uc804\ub2ec\ud574\uc57c \ud569\ub2c8\ub2e4."]})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>i});var s=t(96540);const a={},r=s.createContext(a);function c(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);