"use strict";(self.webpackChunkwiki_loliot_net=self.webpackChunkwiki_loliot_net||[]).push([[98139],{48919:(c,s,e)=>{e.r(s),e.d(s,{assets:()=>h,contentTitle:()=>R,default:()=>j,frontMatter:()=>r,metadata:()=>n,toc:()=>O});const n=JSON.parse('{"id":"lang/python/libraries/opencv/opencv-color-spaces","title":"OpenCV Color spaces","description":"OpenCV Color spaces","source":"@site/docs/lang/python/libraries/opencv/opencv-color-spaces.mdx","sourceDirName":"lang/python/libraries/opencv","slug":"/lang/python/libraries/opencv/opencv-color-spaces","permalink":"/docs/lang/python/libraries/opencv/opencv-color-spaces","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedAt":1731420115000,"frontMatter":{"id":"opencv-color-spaces","title":"OpenCV Color spaces","sidebar_label":"Color spaces","description":"OpenCV Color spaces","keywords":["C++","OpenCV","color spaces"]},"sidebar":"python","previous":{"title":"Draw figure","permalink":"/docs/lang/python/libraries/opencv/opencv-draw-figure"},"next":{"title":"Histogram","permalink":"/docs/lang/python/libraries/opencv/opencv-histogram"}}');var i=e(74848),l=e(28453),d=e(24763);const r={id:"opencv-color-spaces",title:"OpenCV Color spaces",sidebar_label:"Color spaces",description:"OpenCV Color spaces",keywords:["C++","OpenCV","color spaces"]},R=void 0,h={},O=[{value:"BGR",id:"bgr",level:2},{value:"Grayscale",id:"grayscale",level:2},{value:"RGB, HSV, HSL \uc0c9 \uacf5\uac04",id:"rgb-hsv-hsl-\uc0c9-\uacf5\uac04",level:2},{value:"\uc0c9 \uacf5\uac04(color space) \ubcc0\ud658",id:"\uc0c9-\uacf5\uac04color-space-\ubcc0\ud658",level:2}];function x(c){const s={a:"a",annotation:"annotation",code:"code",h2:"h2",li:"li",math:"math",mo:"mo",mrow:"mrow",msup:"msup",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,l.R)(),...c.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.p,{children:["Ref: ",(0,i.jsx)(s.a,{href:"https://docs.opencv.org/master/",children:"https://docs.opencv.org/master/"})]}),"\n",(0,i.jsx)(s.p,{children:"BGR, RGB, YUV, HSV \ub4f1\uc740 8 bits 3 \ucc44\ub110\ub85c \ud53d\uc140\ub9c8\ub2e4 24 bits \uac12\uc744 \uac16\uace0, Grayscale\uc740 8 bits 1 \ucc44\ub110\ub85c \ud53d\uc140\ub9c8\ub2e4 8 bits \uac12\uc744 \uac16\uc2b5\ub2c8\ub2e4."}),"\n",(0,i.jsx)(s.p,{children:"\uc54c\ud30c\ucc44\ub110\uc774 \ucd94\uac00\ub41c RGBA \ub4f1\uc740 8 bits 4 \ucc44\ub110\ub85c \ud53d\uc140\ub9c8\ub2e4 32 bits \uac12\uc744 \uac16\uc2b5\ub2c8\ub2e4."}),"\n",(0,i.jsx)(s.p,{children:"\uc774\ubbf8\uc9c0 \ubc30\uc5f4\uc740 (\uac00\ub85c, \uc138\ub85c, \ucc44\ub110) 3 \ucc28\uc6d0 \ubc30\uc5f4\ub85c \uc774\ub8e8\uc5b4\uc838\uc788\uace0, 1 \ucc44\ub110 \uc774\ubbf8\uc9c0\uc758 \uacbd\uc6b0 (\uac00\ub85c, \uc138\ub85c) 2 \ucc28\uc6d0 \ubc30\uc5f4\ub85c \ud45c\ud604\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"BGR 3 \ucc44\ub110\uc774 \uae30\ubcf8"}),"\uc73c\ub85c \uc0ac\uc6a9\ub429\ub2c8\ub2e4."]}),"\n",(0,i.jsx)(s.p,{children:"\uc608\ub97c \ub4e4\uc5b4 400x400 \ube68\uac04\uc0c9 \ube48 \uc774\ubbf8\uc9c0\ub97c \uc0dd\uc131\ud558\uace0 \uc2f6\uc744 \ub54c, \uc544\ub798\uc640 \uac19\uc740 \ucf54\ub4dc\ub97c \uc774\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-python",children:"import cv2 as cv\nimport numpy as np\n\nimage = np.zeros((400,400,3), dtype=np.uint8)\nimage[:,:,2] = 255\ncv.imshow('red', image)\ncv.waitKey()\n"})}),"\n",(0,i.jsx)(s.h2,{id:"bgr",children:"BGR"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-python",children:"import cv2 as cv\nimport numpy as np\n\nbgr_image = np.array([[[255,  0,  0],[  0,255,  0],[  0,  0,255]],\n                      [[255,255,  0],[255,  0,255],[  0,255,255]]],\n                     dtype=np.uint8)\ncv.imshow('bgr', bgr_image)\ncv.waitKey()\n"})}),"\n",(0,i.jsx)("center",{children:(0,i.jsx)("img",{src:(0,d.Ay)("img/lang/python/libraries/opencv/opencv-color-bgr.png")})}),"\n",(0,i.jsx)(s.h2,{id:"grayscale",children:"Grayscale"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-python",children:"import cv2 as cv\nimport numpy as np\n\ngray_image = np.array([[  0,127,255],\n                       [255,127,  0]],\n                      dtype=np.uint8)\ncv.imshow('gray', gray_image)\ncv.waitKey()\n"})}),"\n",(0,i.jsx)("center",{children:(0,i.jsx)("img",{src:(0,d.Ay)("img/lang/python/libraries/opencv/opencv-color-gray.png")})}),"\n",(0,i.jsx)(s.h2,{id:"rgb-hsv-hsl-\uc0c9-\uacf5\uac04",children:"RGB, HSV, HSL \uc0c9 \uacf5\uac04"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Hue(\uc0c9\uc0c1) : 8 bits\ub85c \ubcfc\ub54c R=0(0",(0,i.jsxs)(s.span,{className:"katex",children:[(0,i.jsx)(s.span,{className:"katex-mathml",children:(0,i.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(s.semantics,{children:[(0,i.jsx)(s.mrow,{children:(0,i.jsxs)(s.msup,{children:[(0,i.jsx)(s.mrow,{}),(0,i.jsx)(s.mo,{lspace:"0em",rspace:"0em",children:"\u2218"})]})}),(0,i.jsx)(s.annotation,{encoding:"application/x-tex",children:"^{\\circ}"})]})})}),(0,i.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"0.6741em"}}),(0,i.jsxs)(s.span,{className:"mord",children:[(0,i.jsx)(s.span,{}),(0,i.jsx)(s.span,{className:"msupsub",children:(0,i.jsx)(s.span,{className:"vlist-t",children:(0,i.jsx)(s.span,{className:"vlist-r",children:(0,i.jsx)(s.span,{className:"vlist",style:{height:"0.6741em"},children:(0,i.jsxs)(s.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,i.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,i.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,i.jsx)(s.span,{className:"mord mtight",children:(0,i.jsx)(s.span,{className:"mord mtight",children:"\u2218"})})})]})})})})})]})]})})]}),"), G=60(120",(0,i.jsxs)(s.span,{className:"katex",children:[(0,i.jsx)(s.span,{className:"katex-mathml",children:(0,i.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(s.semantics,{children:[(0,i.jsx)(s.mrow,{children:(0,i.jsxs)(s.msup,{children:[(0,i.jsx)(s.mrow,{}),(0,i.jsx)(s.mo,{lspace:"0em",rspace:"0em",children:"\u2218"})]})}),(0,i.jsx)(s.annotation,{encoding:"application/x-tex",children:"^{\\circ}"})]})})}),(0,i.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"0.6741em"}}),(0,i.jsxs)(s.span,{className:"mord",children:[(0,i.jsx)(s.span,{}),(0,i.jsx)(s.span,{className:"msupsub",children:(0,i.jsx)(s.span,{className:"vlist-t",children:(0,i.jsx)(s.span,{className:"vlist-r",children:(0,i.jsx)(s.span,{className:"vlist",style:{height:"0.6741em"},children:(0,i.jsxs)(s.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,i.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,i.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,i.jsx)(s.span,{className:"mord mtight",children:(0,i.jsx)(s.span,{className:"mord mtight",children:"\u2218"})})})]})})})})})]})]})})]}),"), B=120(240",(0,i.jsxs)(s.span,{className:"katex",children:[(0,i.jsx)(s.span,{className:"katex-mathml",children:(0,i.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(s.semantics,{children:[(0,i.jsx)(s.mrow,{children:(0,i.jsxs)(s.msup,{children:[(0,i.jsx)(s.mrow,{}),(0,i.jsx)(s.mo,{lspace:"0em",rspace:"0em",children:"\u2218"})]})}),(0,i.jsx)(s.annotation,{encoding:"application/x-tex",children:"^{\\circ}"})]})})}),(0,i.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"0.6741em"}}),(0,i.jsxs)(s.span,{className:"mord",children:[(0,i.jsx)(s.span,{}),(0,i.jsx)(s.span,{className:"msupsub",children:(0,i.jsx)(s.span,{className:"vlist-t",children:(0,i.jsx)(s.span,{className:"vlist-r",children:(0,i.jsx)(s.span,{className:"vlist",style:{height:"0.6741em"},children:(0,i.jsxs)(s.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,i.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,i.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,i.jsx)(s.span,{className:"mord mtight",children:(0,i.jsx)(s.span,{className:"mord mtight",children:"\u2218"})})})]})})})})})]})]})})]}),")"]}),"\n",(0,i.jsx)(s.li,{children:"Saturation(\ucc44\ub3c4)"}),"\n",(0,i.jsx)(s.li,{children:"Value(\uba85\ub3c4)"}),"\n",(0,i.jsx)(s.li,{children:"Lightness(\ubc1d\uae30)"}),"\n"]}),"\n",(0,i.jsx)("center",{children:(0,i.jsx)("img",{src:(0,d.Ay)("img/lang/python/libraries/opencv/opencv-color.png")})}),"\n",(0,i.jsx)(s.h2,{id:"\uc0c9-\uacf5\uac04color-space-\ubcc0\ud658",children:"\uc0c9 \uacf5\uac04(color space) \ubcc0\ud658"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-python",children:"dst = cv.cvtColor(src, code, dst=None, dstCn=0)\n"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"@brief src \uc0c9 \uacf5\uac04\uc744 code\uc5d0 \ub530\ub77c \ubcc0\ud658\ud55c \ud6c4, dst\ub85c \ubc18\ud658"}),"\n",(0,i.jsxs)(s.li,{children:["@param ",(0,i.jsx)(s.strong,{children:"src"}),": np.ndarray"]}),"\n",(0,i.jsxs)(s.li,{children:["@param ",(0,i.jsx)(s.strong,{children:"dstCn"}),": 0 \uc73c\ub85c \uc124\uc815\ud560 \uacbd\uc6b0 src\uc640 code\uc5d0 \ub530\ub77c \uc790\ub3d9 \uc124\uc815"]}),"\n",(0,i.jsxs)(s.li,{children:["@param ",(0,i.jsx)(s.strong,{children:"code"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_BGR2BGRA"})," = 0"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_RGB2RGBA"})," = COLOR_BGR2BGRA"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_BGRA2BGR"})," = 1"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_RGBA2RGB"})," = COLOR_BGRA2BGR"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_BGR2RGBA"})," = 2"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_RGB2BGRA"})," = COLOR_BGR2RGBA"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_RGBA2BGR"})," = 3"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_BGRA2RGB"})," = COLOR_RGBA2BGR"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_BGR2RGB"})," = 4"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_RGB2BGR"})," = COLOR_BGR2RGB"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_BGRA2RGBA"})," = 5"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_RGBA2BGRA"})," = COLOR_BGRA2RGBA"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_BGR2GRAY"})," = 6"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_RGB2GRAY"})," = 7"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_GRAY2BGR"})," = 8"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_GRAY2RGB"})," = COLOR_GRAY2BGR"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_GRAY2BGRA"})," = 9"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_GRAY2RGBA"})," = COLOR_GRAY2BGRA"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_BGRA2GRAY"})," = 10"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_RGBA2GRAY"})," = 11"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_BGR2BGR565"})," = 12"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_RGB2BGR565"})," = 13"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_BGR5652BGR"})," = 14"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_BGR5652RGB"})," = 15"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_BGRA2BGR565"})," = 16"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_RGBA2BGR565"})," = 17"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_BGR5652BGRA"})," = 18"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_BGR5652RGBA"})," = 19"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_GRAY2BGR565"})," = 20"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_BGR5652GRAY"})," = 21"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_BGR2BGR555"})," = 22"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_RGB2BGR555"})," = 23"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_BGR5552BGR"})," = 24"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_BGR5552RGB"})," = 25"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_BGRA2BGR555"})," = 26"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_RGBA2BGR555"})," = 27"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_BGR5552BGRA"})," = 28"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_BGR5552RGBA"})," = 29"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_GRAY2BGR555"})," = 30"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_BGR5552GRAY"})," = 31"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_BGR2XYZ"})," = 32"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_RGB2XYZ"})," = 33"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_XYZ2BGR"})," = 34"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_XYZ2RGB"})," = 35"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_BGR2YCrCb"})," = 36"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_RGB2YCrCb"})," = 37"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_YCrCb2BGR"})," = 38"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_YCrCb2RGB"})," = 39"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_BGR2HSV"})," = 40"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_RGB2HSV"})," = 41"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_BGR2Lab"})," = 44"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_RGB2Lab"})," = 45"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_BGR2Luv"})," = 50"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_RGB2Luv"})," = 51"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_BGR2HLS"})," = 52"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_RGB2HLS"})," = 53"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_HSV2BGR"})," = 54"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_HSV2RGB"})," = 55"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_Lab2BGR"})," = 56"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_Lab2RGB"})," = 57"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_Luv2BGR"})," = 58"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_Luv2RGB"})," = 59"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_HLS2BGR"})," = 60"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_HLS2RGB"})," = 61"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_BGR2HSV_FULL"})," = 66"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_RGB2HSV_FULL"})," = 67"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_BGR2HLS_FULL"})," = 68"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_RGB2HLS_FULL"})," = 69"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_HSV2BGR_FULL"})," = 70"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_HSV2RGB_FULL"})," = 71"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_HLS2BGR_FULL"})," = 72"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_HLS2RGB_FULL"})," = 73"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_LBGR2Lab"})," = 74"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_LRGB2Lab"})," = 75"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_LBGR2Luv"})," = 76"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_LRGB2Luv"})," = 77"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_Lab2LBGR"})," = 78"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_Lab2LRGB"})," = 79"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_Luv2LBGR"})," = 80"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_Luv2LRGB"})," = 81"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_BGR2YUV"})," = 82"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_RGB2YUV"})," = 83"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_YUV2BGR"})," = 84"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_YUV2RGB"})," = 85"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_YUV2RGB_NV12"})," = 90"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_YUV2BGR_NV12"})," = 91"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_YUV2RGB_NV21"})," = 92"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_YUV2BGR_NV21"})," = 93"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_YUV420sp2RGB"})," = COLOR_YUV2RGB_NV21"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_YUV420sp2BGR"})," = COLOR_YUV2BGR_NV21"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_YUV2RGBA_NV12"})," = 94"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_YUV2BGRA_NV12"})," = 95"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_YUV2RGBA_NV21"})," = 96"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_YUV2BGRA_NV21"})," = 97"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_YUV420sp2RGBA"})," = COLOR_YUV2RGBA_NV21"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_YUV420sp2BGRA"})," = COLOR_YUV2BGRA_NV21"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_YUV2RGB_YV12"})," = 98"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_YUV2BGR_YV12"})," = 99"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_YUV2RGB_IYUV"})," = 100"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_YUV2BGR_IYUV"})," = 101"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_YUV2RGB_I420"})," = COLOR_YUV2RGB_IYUV"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_YUV2BGR_I420"})," = COLOR_YUV2BGR_IYUV"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_YUV420p2RGB"})," = COLOR_YUV2RGB_YV12"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_YUV420p2BGR"})," = COLOR_YUV2BGR_YV12"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_YUV2RGBA_YV12"})," = 102"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_YUV2BGRA_YV12"})," = 103"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_YUV2RGBA_IYUV"})," = 104"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_YUV2BGRA_IYUV"})," = 105"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_YUV2RGBA_I420"})," = COLOR_YUV2RGBA_IYUV"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_YUV2BGRA_I420"})," = COLOR_YUV2BGRA_IYUV"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_YUV420p2RGBA"})," = COLOR_YUV2RGBA_YV12"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_YUV420p2BGRA"})," = COLOR_YUV2BGRA_YV12"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_YUV2GRAY_420"})," = 106"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_YUV2GRAY_NV21"})," = COLOR_YUV2GRAY_420"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_YUV2GRAY_NV12"})," = COLOR_YUV2GRAY_420"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_YUV2GRAY_YV12"})," = COLOR_YUV2GRAY_420"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_YUV2GRAY_IYUV"})," = COLOR_YUV2GRAY_420"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_YUV2GRAY_I420"})," = COLOR_YUV2GRAY_420"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_YUV420sp2GRAY"})," = COLOR_YUV2GRAY_420"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_YUV420p2GRAY"})," = COLOR_YUV2GRAY_420"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_YUV2RGB_UYVY"})," = 107"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_YUV2BGR_UYVY"})," = 108"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_YUV2RGB_Y422"})," = COLOR_YUV2RGB_UYVY"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_YUV2BGR_Y422"})," = COLOR_YUV2BGR_UYVY"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_YUV2RGB_UYNV"})," = COLOR_YUV2RGB_UYVY"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_YUV2BGR_UYNV"})," = COLOR_YUV2BGR_UYVY"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_YUV2RGBA_UYVY"})," = 111"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_YUV2BGRA_UYVY"})," = 112"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_YUV2RGBA_Y422"})," = COLOR_YUV2RGBA_UYVY"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_YUV2BGRA_Y422"})," = COLOR_YUV2BGRA_UYVY"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_YUV2RGBA_UYNV"})," = COLOR_YUV2RGBA_UYVY"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_YUV2BGRA_UYNV"})," = COLOR_YUV2BGRA_UYVY"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_YUV2RGB_YUY2"})," = 115"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_YUV2BGR_YUY2"})," = 116"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_YUV2RGB_YVYU"})," = 117"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_YUV2BGR_YVYU"})," = 118"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_YUV2RGB_YUYV"})," = COLOR_YUV2RGB_YUY2"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_YUV2BGR_YUYV"})," = COLOR_YUV2BGR_YUY2"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_YUV2RGB_YUNV"})," = COLOR_YUV2RGB_YUY2"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_YUV2BGR_YUNV"})," = COLOR_YUV2BGR_YUY2"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_YUV2RGBA_YUY2"})," = 119"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_YUV2BGRA_YUY2"})," = 120"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_YUV2RGBA_YVYU"})," = 121"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_YUV2BGRA_YVYU"})," = 122"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_YUV2RGBA_YUYV"})," = COLOR_YUV2RGBA_YUY2"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_YUV2BGRA_YUYV"})," = COLOR_YUV2BGRA_YUY2"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_YUV2RGBA_YUNV"})," = COLOR_YUV2RGBA_YUY2"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_YUV2BGRA_YUNV"})," = COLOR_YUV2BGRA_YUY2"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_YUV2GRAY_UYVY"})," = 123"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_YUV2GRAY_YUY2"})," = 124"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_YUV2GRAY_Y422"})," = COLOR_YUV2GRAY_UYVY"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_YUV2GRAY_UYNV"})," = COLOR_YUV2GRAY_UYVY"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_YUV2GRAY_YVYU"})," = COLOR_YUV2GRAY_YUY2"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_YUV2GRAY_YUYV"})," = COLOR_YUV2GRAY_YUY2"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_YUV2GRAY_YUNV"})," = COLOR_YUV2GRAY_YUY2"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_RGBA2mRGBA"})," = 125"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_mRGBA2RGBA"})," = 126"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_RGB2YUV_I420"})," = 127"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_BGR2YUV_I420"})," = 128"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_RGB2YUV_IYUV"})," = COLOR_RGB2YUV_I420"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_BGR2YUV_IYUV"})," = COLOR_BGR2YUV_I420"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_RGBA2YUV_I420"})," = 129"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_BGRA2YUV_I420"})," = 130"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_RGBA2YUV_IYUV"})," = COLOR_RGBA2YUV_I420"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_BGRA2YUV_IYUV"})," = COLOR_BGRA2YUV_I420"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_RGB2YUV_YV12"})," = 131"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_BGR2YUV_YV12"})," = 132"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_RGBA2YUV_YV12"})," = 133"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_BGRA2YUV_YV12"})," = 134"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_BayerBG2BGR"})," = 46"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_BayerGB2BGR"})," = 47"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_BayerRG2BGR"})," = 48"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_BayerGR2BGR"})," = 49"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_BayerBG2RGB"})," = COLOR_BayerRG2BGR"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_BayerGB2RGB"})," = COLOR_BayerGR2BGR"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_BayerRG2RGB"})," = COLOR_BayerBG2BGR"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_BayerGR2RGB"})," = COLOR_BayerGB2BGR"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_BayerBG2GRAY"})," = 86"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_BayerGB2GRAY"})," = 87"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_BayerRG2GRAY"})," = 88"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_BayerGR2GRAY"})," = 89"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_BayerBG2BGR_VNG"})," = 62"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_BayerGB2BGR_VNG"})," = 63"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_BayerRG2BGR_VNG"})," = 64"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_BayerGR2BGR_VNG"})," = 65"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_BayerBG2RGB_VNG"})," = COLOR_BayerRG2BGR_VNG"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_BayerGB2RGB_VNG"})," = COLOR_BayerGR2BGR_VNG"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_BayerRG2RGB_VNG"})," = COLOR_BayerBG2BGR_VNG"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_BayerGR2RGB_VNG"})," = COLOR_BayerGB2BGR_VNG"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_BayerBG2BGR_EA"})," = 135"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_BayerGB2BGR_EA"})," = 136"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_BayerRG2BGR_EA"})," = 137"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_BayerGR2BGR_EA"})," = 138"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_BayerBG2RGB_EA"})," = COLOR_BayerRG2BGR_EA"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_BayerGB2RGB_EA"})," = COLOR_BayerGR2BGR_EA"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_BayerRG2RGB_EA"})," = COLOR_BayerBG2BGR_EA"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_BayerGR2RGB_EA"})," = COLOR_BayerGB2BGR_EA"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_BayerBG2BGRA"})," = 139"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_BayerGB2BGRA"})," = 140"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_BayerRG2BGRA"})," = 141"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_BayerGR2BGRA"})," = 142"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_BayerBG2RGBA"})," = COLOR_BayerRG2BGRA"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_BayerGB2RGBA"})," = COLOR_BayerGR2BGRA"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_BayerRG2RGBA"})," = COLOR_BayerBG2BGRA"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_BayerGR2RGBA"})," = COLOR_BayerGB2BGRA"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cv.COLOR_COLORCVT_MAX"})," = 143"]}),"\n"]}),"\n"]}),"\n"]})]})}function j(c={}){const{wrapper:s}={...(0,l.R)(),...c.components};return s?(0,i.jsx)(s,{...c,children:(0,i.jsx)(x,{...c})}):x(c)}},28453:(c,s,e)=>{e.d(s,{R:()=>d,x:()=>r});var n=e(96540);const i={},l=n.createContext(i);function d(c){const s=n.useContext(l);return n.useMemo((function(){return"function"==typeof c?c(s):{...s,...c}}),[s,c])}function r(c){let s;return s=c.disableParentContext?"function"==typeof c.components?c.components(i):c.components||i:d(c.components),n.createElement(l.Provider,{value:s},c.children)}}}]);