"use strict";(self.webpackChunkwiki_loliot_net=self.webpackChunkwiki_loliot_net||[]).push([[49018],{93414:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>a,frontMatter:()=>l,metadata:()=>d,toc:()=>r});var t=i(74848),o=i(28453);const l={id:"python-gpiod-about",title:"Python gpiod",sidebar_label:"About",description:"gpiod pure Python library with almost the same usage as libgpiodcxx",keywords:["Python","gpiod","libgpiodcxx","c++"]},s=void 0,d={id:"lang/python/libraries/gpiod/python-gpiod-about",title:"Python gpiod",description:"gpiod pure Python library with almost the same usage as libgpiodcxx",source:"@site/docs/lang/python/libraries/gpiod/python-gpiod-about.mdx",sourceDirName:"lang/python/libraries/gpiod",slug:"/lang/python/libraries/gpiod/python-gpiod-about",permalink:"/docs/lang/python/libraries/gpiod/python-gpiod-about",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1729871992e3,frontMatter:{id:"python-gpiod-about",title:"Python gpiod",sidebar_label:"About",description:"gpiod pure Python library with almost the same usage as libgpiodcxx",keywords:["Python","gpiod","libgpiodcxx","c++"]},sidebar:"python",previous:{title:"concurrent.futures",permalink:"/docs/lang/python/libraries/concurrent-futures"},next:{title:"Installation",permalink:"/docs/lang/cpp/libraries/opencv/opencv-installation"}},p={},r=[{value:"DEPRECATED",id:"deprecated",level:2},{value:"\uc124\uce58",id:"\uc124\uce58",level:2},{value:"Help command",id:"help-command",level:2},{value:"Test command",id:"test-command",level:2},{value:"Python vs. C++",id:"python-vs-c",level:2},{value:"Python",id:"python",level:3},{value:"C++",id:"c",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"deprecated",children:"DEPRECATED"}),"\n",(0,t.jsx)(n.admonition,{type:"danger",children:(0,t.jsxs)(n.p,{children:["Official packages starting from gpiod v2 are uploaded to PyPI.\n",(0,t.jsx)(n.a,{href:"https://git.kernel.org/pub/scm/libs/libgpiod/libgpiod.git",children:"https://git.kernel.org/pub/scm/libs/libgpiod/libgpiod.git"})]})}),"\n",(0,t.jsx)(n.h2,{id:"\uc124\uce58",children:"\uc124\uce58"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"python3 -m pip install -U --user pip gpiod\n"})}),"\n",(0,t.jsx)(n.h2,{id:"help-command",children:"Help command"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'>>> import gpiod\n>>> help(gpiod)\n>>> help(gpiod.chip)\n>>> help(gpiod.line)\n>>> help(gpiod.chip.open)\n\nopen(self, device, how:int=1)\n    @brief Open a GPIO chip.\n\n    @param device: String or int describing the GPIO chip.\n    @param how:    Indicates how the chip should be opened.\n\n    If the object already holds a reference to an open chip, it will be\n    closed and the reference reset.\n\n    Usage:\n        chip.open("/dev/gpiochip0")\n        chip.open(0, chip.OPEN_BY_NUMBER)\n'})}),"\n",(0,t.jsx)(n.h2,{id:"test-command",children:"Test command"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"python3 -m gpiod.test.blink <chip> <line offset>\npython3 -m gpiod.test.bulk_blink <chip> <line offset1> [<line offset2> ...]\npython3 -m gpiod.test.sequential_blink <chip> <line offset1> \\\n    [<line offset2> ...]\npython3 -m gpiod.test.button <chip> <line offset> [rising|falling|both]\npython3 -m gpiod.test.bulk_button <chip> <line offset> [<line offset2> ...]\n    <[rising|falling|both]>\n"})}),"\n",(0,t.jsx)(n.h2,{id:"python-vs-c",children:"Python vs. C++"}),"\n",(0,t.jsx)(n.h3,{id:"python",children:"Python"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"import gpiod\nimport sys\nimport time\n\nif len(sys.argv) > 2:\n    LED_CHIP = sys.argv[1]\n    LED_LINE_OFFSET = int(sys.argv[2])\nelse:\n    print('''Usage:\n    python3 blink.py <chip> <line offset>''')\n    sys.exit()\n\nchip = gpiod.chip(LED_CHIP)\nled = chip.get_line(LED_LINE_OFFSET)\n\nconfig = gpiod.line_request()\nconfig.consumer = \"Blink\"\nconfig.request_type = gpiod.line_request.DIRECTION_OUTPUT\n\nled.request(config)\n\nprint(led.consumer)\n\nwhile True:\n    led.set_value(0)\n    time.sleep(0.1)\n    led.set_value(1)\n    time.sleep(0.1)\n"})}),"\n",(0,t.jsx)(n.h3,{id:"c",children:"C++"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",metastring:'title="blink.cpp"',children:'#include <chrono>\n#include <cstdlib>\n#include <gpiod.hpp>\n#include <iostream>\n#include <string>\n#include <thread>\n\nint main(int argc, char **argv) {\n    std::string LED_CHIP;\n    int         LED_LINE_OFFSET;\n\n    if(argc > 2) {\n        LED_CHIP        = argv[1];\n        LED_LINE_OFFSET = std::stoi(argv[2]);\n    } else {\n        std::cout << "Usage:" << std::endl\n                  << "    ./blink <chip> <line offset>" << std::endl;\n        std::exit(0);\n    }\n\n    gpiod::chip chip(LED_CHIP);\n    gpiod::line led = chip.get_line(LED_LINE_OFFSET);\n\n    gpiod::line_request config;\n    config.consumer     = "Blink";\n    config.request_type = gpiod::line_request::DIRECTION_OUTPUT;\n\n    led.request(config);\n\n    std::cout << led.consumer() << std::endl;\n\n    while(1) {\n        led.set_value(0);\n        std::this_thread::sleep_for(std::chrono::milliseconds(100));\n        led.set_value(1);\n        std::this_thread::sleep_for(std::chrono::milliseconds(100));\n    }\n}\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"g++ -o blink blink.cpp -lgpiodcxx\n"})})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>d});var t=i(96540);const o={},l=t.createContext(o);function s(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);