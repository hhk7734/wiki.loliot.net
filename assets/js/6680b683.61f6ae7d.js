"use strict";(self.webpackChunkwiki_loliot_net=self.webpackChunkwiki_loliot_net||[]).push([[11976],{35762:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>t,metadata:()=>l,toc:()=>a});const l=JSON.parse('{"id":"lang/python/libraries/opencv/opencv-draw-figure","title":"OpenCV Draw figure","description":"OpenCV Draw figure","source":"@site/docs/lang/python/libraries/opencv/opencv-draw-figure.mdx","sourceDirName":"lang/python/libraries/opencv","slug":"/lang/python/libraries/opencv/opencv-draw-figure","permalink":"/docs/lang/python/libraries/opencv/opencv-draw-figure","draft":false,"unlisted":false,"editUrl":"https://github.com/hhk7734/wiki/tree/main/docs/lang/python/libraries/opencv/opencv-draw-figure.mdx","tags":[],"version":"current","lastUpdatedAt":1732196727000,"frontMatter":{"id":"opencv-draw-figure","title":"OpenCV Draw figure","sidebar_label":"Draw figure","description":"OpenCV Draw figure","keywords":["C++","OpenCV","figure"]},"sidebar":"python","previous":{"title":"Read image or video","permalink":"/docs/lang/python/libraries/opencv/opencv-read-image-video"},"next":{"title":"Color spaces","permalink":"/docs/lang/python/libraries/opencv/opencv-color-spaces"}}');var r=i(74848),s=i(28453),c=i(24763);const t={id:"opencv-draw-figure",title:"OpenCV Draw figure",sidebar_label:"Draw figure",description:"OpenCV Draw figure",keywords:["C++","OpenCV","figure"]},o=void 0,d={},a=[{value:"Common options",id:"common-options",level:2},{value:"Line",id:"line",level:2},{value:"Rectangle",id:"rectangle",level:2},{value:"Polygone",id:"polygone",level:2},{value:"Ellipse",id:"ellipse",level:2},{value:"Marker",id:"marker",level:2},{value:"Text",id:"text",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Ref: ",(0,r.jsx)(n.a,{href:"https://docs.opencv.org/master/",children:"https://docs.opencv.org/master/"})]}),"\n",(0,r.jsx)(n.h2,{id:"common-options",children:"Common options"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["@param ",(0,r.jsx)(n.strong,{children:"img"}),": np.ndarray"]}),"\n",(0,r.jsxs)(n.li,{children:["@param ",(0,r.jsx)(n.strong,{children:"color"}),": tuple (B, G, R)"]}),"\n",(0,r.jsxs)(n.li,{children:["@param ",(0,r.jsx)(n.strong,{children:"thickness"}),": int -1 \uc778 \uacbd\uc6b0 \ub3c4\ud615 \ub0b4\ubd80\ub97c \ucc44\uc6c0"]}),"\n",(0,r.jsxs)(n.li,{children:["@param ",(0,r.jsx)(n.strong,{children:"lineType"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"cv.FILLED"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"cv.LINE_4"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"cv.LINE_8"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"cv.LINE_AA"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["@param ",(0,r.jsx)(n.strong,{children:"shift"}),": int \ubaa8\ub4e0 \uc88c\ud45c\ub97c (x, y) -> (x\xb72^(-shift), y\xb72^(-shift))\ub85c \ubcc0\ud658"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"line",children:"Line"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"img = cv.arrowedLine(img, pt1, pt2, color, thickness=1, line_type=cv.LINE_8, shift=0, tipLength=0.1)\nimg = cv.line(img, pt1, pt2, color, thickness=1, lineType=cv.LINE_8, shift=0)\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["@param ",(0,r.jsx)(n.strong,{children:"pt1, pt2"}),": tuple (x, y) start, end"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"rectangle",children:"Rectangle"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"img = cv.rectangle(img, pt1, pt2, color, thickness=1, lineType=cv.LINE_8, shift=0)\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["@param ",(0,r.jsx)(n.strong,{children:"pt1, pt2"}),": tuple (x, y) top-left, bottom-right"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"polygone",children:"Polygone"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"img = cv.polylines(img, pts, isClosed, color, thickness=1, lineType=cv.LINE_8, shift=0)\nimg = cv.fillPoly(img, pts, color, lineType=cv.LINE_8, shift=0, offset=(0,0))\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["@param ",(0,r.jsx)(n.strong,{children:"pts"}),": list ",(0,r.jsx)(n.code,{children:"[np.ndarray([[],], dtype=np.int32),]"})," \uaf2d\uc9c0\uc810\uc73c\ub85c \uc774\ub8e8\uc5b4\uc9c4 2\ucc28\uc6d0 \ubc30\uc5f4\ub4e4\uc758 \ub9ac\uc2a4\ud2b8, \ubc30\uc5f4 \uc218\ub9cc\ud07c \ub3c4\ud615 \uc0dd\uc131"]}),"\n",(0,r.jsxs)(n.li,{children:["@param ",(0,r.jsx)(n.strong,{children:"isClosed"}),": bool True : \uc2dc\uc791\uc810\uacfc \ub05d\uc810 \uc5f0\uacb0, False : \uc2dc\uc791\uc810\uacfc \ub05d\uc810 \uc5f0\uacb0 \uc548\ud568"]}),"\n",(0,r.jsxs)(n.li,{children:["@param ",(0,r.jsx)(n.strong,{children:"offset"}),": tuple (x, y)"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"ellipse",children:"Ellipse"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"img = cv.circle(img, center, radius, color, thickness=1, lineType=cv.LINE_8, shift=0)\nimg = cv.ellipse(img, center, axes, angle, startAngle, endAngle, color, thickness=1, lineType=cv.LINE_8, shift=0)\nimg = cv.ellipse(img, box, color, thickness=1, lineType=cv.LINE_8)\npts = cv.ellipse2Poly(center, axes, angle, arcStart, arcEnd, delta)\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["@param ",(0,r.jsx)(n.strong,{children:"center"})]}),"\n",(0,r.jsxs)(n.li,{children:["@param ",(0,r.jsx)(n.strong,{children:"radius"})]}),"\n",(0,r.jsxs)(n.li,{children:["@param ",(0,r.jsx)(n.strong,{children:"axes"})]}),"\n",(0,r.jsxs)(n.li,{children:["@param ",(0,r.jsx)(n.strong,{children:"angle"})]}),"\n",(0,r.jsxs)(n.li,{children:["@param ",(0,r.jsx)(n.strong,{children:"startAngle"})]}),"\n",(0,r.jsxs)(n.li,{children:["@param ",(0,r.jsx)(n.strong,{children:"endAngle"})]}),"\n",(0,r.jsxs)(n.li,{children:["@param ",(0,r.jsx)(n.strong,{children:"box"})]}),"\n",(0,r.jsxs)(n.li,{children:["@param ",(0,r.jsx)(n.strong,{children:"delta"})]}),"\n"]}),"\n",(0,r.jsx)("center",{children:(0,r.jsx)("img",{src:(0,c.Ay)("img/lang/python/libraries/opencv/opencv-draw-ellipse.png")})}),"\n",(0,r.jsx)(n.h2,{id:"marker",children:"Marker"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"img = cv.drawMarker(img, position, color, markerType=cv.MARKER_CROSS, markerSize=20, thickness=1, line_type=cv.LINE_8)\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["@param ",(0,r.jsx)(n.strong,{children:"position"}),": tuple (x, y)"]}),"\n",(0,r.jsxs)(n.li,{children:["@param ",(0,r.jsx)(n.strong,{children:"markerType"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"cv.MARKER_CROSS"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"cv.MARKER_TILTED_CROSS"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"cv.MARKER_STAR"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"cv.MARKER_DIAMOND"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"cv.MARKER_SQUARE"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"cv.MARKER_TRIANGLE_UP"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"cv.MARKER_TRIANGLE_DOWN"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"text",children:"Text"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"img = cv.putText(img, text, org, fontFace, fontScale, color, thickness=1, lineType=cv.LINE_8, bottomLeftOrigin=False)\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["@param ",(0,r.jsx)(n.strong,{children:"text"}),": string"]}),"\n",(0,r.jsxs)(n.li,{children:["@param ",(0,r.jsx)(n.strong,{children:"org"}),": tuple \ud14d\uc2a4\ud2b8 \uc704\uce58"]}),"\n",(0,r.jsxs)(n.li,{children:["@param ",(0,r.jsx)(n.strong,{children:"fontFace"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"cv.FONT_HERSHEY_SIMPLEX"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"cv.FONT_HERSHEY_PLAIN"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"cv.FONT_HERSHEY_DUPLEX"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"cv.FONT_HERSHEY_COMPLEX"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"cv.FONT_HERSHEY_TRIPLEX"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"cv.FONT_HERSHEY_COMPLEX_SMALL"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"cv.FONT_HERSHEY_SCRIPT_SIMPLEX"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"cv.FONT_HERSHEY_SCRIPT_COMPLEX"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"cv.FONT_ITALIC"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["@param ",(0,r.jsx)(n.strong,{children:"fontScale"}),": float \uae30\ubcf8 \ud06c\uae30\uc5d0 \uacf1\ud560 \ubc30\uc728"]}),"\n",(0,r.jsxs)(n.li,{children:["@param ",(0,r.jsx)(n.strong,{children:"bottomLeftOrigin"}),": bool True : bottom-left, False : top-left"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>c,x:()=>t});var l=i(96540);const r={},s=l.createContext(r);function c(e){const n=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),l.createElement(s.Provider,{value:n},e.children)}}}]);