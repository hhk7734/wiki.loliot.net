"use strict";(self.webpackChunkwiki_loliot_net=self.webpackChunkwiki_loliot_net||[]).push([[90409],{47610:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var t=s(74848),r=s(28453);const i={id:"poetry",title:"Package with Poetry",sidebar_label:"Poetry",description:"Package with Poetry",keywords:["Python","Poetry"]},l=void 0,o={id:"lang/python/package/poetry",title:"Package with Poetry",description:"Package with Poetry",source:"@site/docs/lang/python/package/poetry.mdx",sourceDirName:"lang/python/package",slug:"/lang/python/package/poetry",permalink:"/docs/lang/python/package/poetry",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1725967579e3,frontMatter:{id:"poetry",title:"Package with Poetry",sidebar_label:"Poetry",description:"Package with Poetry",keywords:["Python","Poetry"]},sidebar:"python",previous:{title:"setuptools",permalink:"/docs/lang/python/package/setuptools"},next:{title:"conda",permalink:"/docs/lang/python/package/conda"}},c={},p=[{value:"Directory Structure",id:"directory-structure",level:2},{value:"pyproject.toml",id:"pyprojecttoml",level:2},{value:"Extras",id:"extras",level:2},{value:"Scripts",id:"scripts",level:2},{value:"Build",id:"build",level:2},{value:"Publish",id:"publish",level:2},{value:"Test PyPI",id:"test-pypi",level:3},{value:"PyPI",id:"pypi",level:3}];function a(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"directory-structure",children:"Directory Structure"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"<project>/\n\u251c\u2500\u2500 pyproject.toml\n\u251c\u2500\u2500 README.md\n\u2514\u2500\u2500 <package>/\n    \u251c\u2500\u2500 __init__.py # import <package>\n    \u251c\u2500\u2500 <subpackage>/\n    \u2502   \u251c\u2500\u2500 __init__.py # from <package> import <subpackage>\n    \u2502   \u251c\u2500\u2500 <module>.py # from <package>.<subpackage> import <module>\n    \u2502   \u2514\u2500\u2500 ...\n    \u2514\u2500\u2500 ...\n"})}),"\n",(0,t.jsx)(n.h2,{id:"pyprojecttoml",children:"pyproject.toml"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://python-poetry.org/docs/pyproject/",children:"https://python-poetry.org/docs/pyproject/"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-toml",metastring:'title="pyproject.toml"',children:'[tool.poetry]\n# Required\nname = "<packageName>" # pip install <packageName>, <package>\uc640 \ub2e4\ub97c \uc218 \uc788\uc2b5\ub2c8\ub2e4.\nversion = "<version>"\ndescription = "<description>"\nauthors = [\n  "Hyeonki Hong <hhk7734@gmail.com>"\n]\npackages = [\n  { include = "<package>"} # import <package>\n]\n\n# Optional\nlicencse = "<license>"\nmaintainers = []\nreadme = ["README.md"]\nhomepage = "https://wiki.loliot.net"\nrepository = "https://github.com/hhk7734/example"\ndocumentation = "https://wiki.loliot.net"\nkeywords = []\nclassifiers = [\n  "Programming Language :: Python :: 3",\n  "Intended Audience :: Developers",\n]\ninclude = []\nexclude = []\n\n[tool.poetry.dependencies]\npython = ">=3.11,<4.0"\n\n[build-system]\nbuild-backend = "poetry.core.masonry.api"\nrequires = ["poetry-core"]\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["version: ",(0,t.jsx)(n.a,{href:"https://peps.python.org/pep-0440/",children:"https://peps.python.org/pep-0440/"})]}),"\n",(0,t.jsxs)(n.li,{children:["license: identifier, ",(0,t.jsx)(n.a,{href:"https://spdx.org/licenses/",children:"https://spdx.org/licenses/"})]}),"\n",(0,t.jsxs)(n.li,{children:["classifiers: ",(0,t.jsx)(n.a,{href:"https://pypi.org/classifiers/",children:"https://pypi.org/classifiers/"})]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"extras",children:"Extras"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-toml",metastring:'title="pyproject.toml"',children:'[tool.poetry.dependencies]\n<packageName> = {..., optional = true}\n\n[tool.poetry.extras]\n<extra> = ["<packageName>"]\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"[tool.poetry.dependencies]"}),"\uc5d0 \uc815\uc758\ub41c \ud328\ud0a4\uc9c0\ub9cc extra\ub85c \ub4f1\ub85d\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. extra\ub85c \uc815\uc758\ub41c \uc758\uc874\uc131\uc740 \uc544\ub798\uc640 \uac19\uc740 \uba85\ub839\uc5b4\ub85c \ud574\ub2f9 \ud328\ud0a4\uc9c0\ub97c \uc124\uce58\ud560 \ub54c \ud568\uaed8 \uc124\uce58\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"python3 -m pip install <packageName>[<extra>]\n"})}),"\n",(0,t.jsx)(n.h2,{id:"scripts",children:"Scripts"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-toml",metastring:'title="pyproject.toml"',children:'[tool.poetry.scripts]\n<cli> = "<package>.<module>" # __main__\n<cli> = "<package>.<module>:<function>"\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\ud328\ud0a4\uc9c0\ub97c \uc124\uce58\ud558\uba74 \uc124\uce58\ud560 \ub54c \uc0ac\uc6a9\ud55c python\uacfc \uad00\ub828\ub41c ",(0,t.jsx)(n.code,{children:"bin/"})," \ub514\ub809\ud1a0\ub9ac\uc5d0 \ud574\ub2f9 \ubaa8\ub4c8\uc774\ub098 \ud568\uc218\ub97c \uc2e4\ud589\uc2dc\ud0a4\ub294 ",(0,t.jsx)(n.code,{children:"<cli>"})," \uc2a4\ud06c\ub9bd\ud2b8\uac00 \uc790\ub3d9\uc73c\ub85c \uc0dd\uc131\ub429\ub2c8\ub2e4."]}),"\n",(0,t.jsx)(n.h2,{id:"build",children:"Build"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"poetry build\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\ube4c\ub4dc\ub97c \ud558\uba74 ",(0,t.jsx)(n.code,{children:"dist/"})," \ub514\ub809\ud1a0\ub9ac\uc5d0 \ube4c\ub4dc\ub41c \ud328\ud0a4\uc9c0\uac00 \uc0dd\uc131\ub429\ub2c8\ub2e4."]}),"\n",(0,t.jsx)(n.h2,{id:"publish",children:"Publish"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://python-poetry.org/docs/cli/#publish",children:"https://python-poetry.org/docs/cli/#publish"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://python-poetry.org/docs/repositories/",children:"https://python-poetry.org/docs/repositories/"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"poetry publish [<options>]\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"<options>"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"--build"}),": \ube4c\ub4dc \ud6c4 \uc5c5\ub85c\ub4dc"]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"-r|--repository <repository>"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:'-u|--username "<user>"'})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:'-p|--password "<password>"'})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"test-pypi",children:"Test PyPI"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"poetry config repositories.testpypi https://test.pypi.org/legacy/\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'poetry config http-basic.testpypi "<user>" "<password>"\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"poetry publish -r testpypi\n"})}),"\n",(0,t.jsx)(n.p,{children:"Test PyPI\uc5d0 \ub4f1\ub85d\ub41c \ud328\ud0a4\uc9c0\ub97c poetry\ub85c \uc124\uce58\ud574\ubcf4\ub824\uba74 \uc544\ub798\uc640 \uac19\uc774 source \ub4f1\ub85d \ud6c4 \uc124\uce58\ud574\uc57c \ud569\ub2c8\ub2e4."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"poetry source add --secondary testpypi https://test.pypi.org/simple/\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"poetry add --source testpypi <packageName>\n"})}),"\n",(0,t.jsx)(n.h3,{id:"pypi",children:"PyPI"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'poetry config http-basic.pypi "<user>" "<password>"\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"poetry publish\n"})})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>o});var t=s(96540);const r={},i=t.createContext(r);function l(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);