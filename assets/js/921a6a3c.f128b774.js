"use strict";(self.webpackChunkwiki_loliot_net=self.webpackChunkwiki_loliot_net||[]).push([[63117],{70919:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>d,contentTitle:()=>r,default:()=>o,frontMatter:()=>a,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"lang/python/package/pybind11/pybind11","title":"Python package using Pybind11","description":"Python package using Pybind11","source":"@site/docs/lang/python/package/pybind11/pybind11.mdx","sourceDirName":"lang/python/package/pybind11","slug":"/lang/python/package/pybind11/","permalink":"/docs/lang/python/package/pybind11/","draft":false,"unlisted":false,"editUrl":"https://github.com/hhk7734/wiki/tree/main/docs/lang/python/package/pybind11/pybind11.mdx","tags":[],"version":"current","lastUpdatedAt":1736949978000,"frontMatter":{"id":"pybind11","title":"Python package using Pybind11","sidebar_label":"Basics","description":"Python package using Pybind11","keywords":["Python","package","Pybind11"]},"sidebar":"python","previous":{"title":"Atlas","permalink":"/docs/lang/python/libraries/sqlalchemy/atlas"},"next":{"title":"Type","permalink":"/docs/lang/python/package/pybind11/type"}}');var t=i(74848),l=i(28453);const a={id:"pybind11",title:"Python package using Pybind11",sidebar_label:"Basics",description:"Python package using Pybind11",keywords:["Python","package","Pybind11"]},r=void 0,d={},c=[{value:"\uc124\uce58",id:"\uc124\uce58",level:2},{value:"Package directory structure",id:"package-directory-structure",level:2},{value:"C/C++",id:"cc",level:2},{value:"function",id:"function",level:3},{value:"variable",id:"variable",level:3},{value:"class",id:"class",level:3},{value:"Python",id:"python",level:2},{value:"__init__.py",id:"__init__py",level:3},{value:"Build",id:"build",level:2},{value:"pyproject.toml",id:"pyprojecttoml",level:3},{value:"setup.cfg",id:"setupcfg",level:3},{value:"setup.py",id:"setuppy",level:3},{value:"MANIFEST.in",id:"manifestin",level:3},{value:"Test install/uninstall with pip",id:"test-installuninstall-with-pip",level:3},{value:"pip \ub4f1\ub85d",id:"pip-\ub4f1\ub85d",level:2},{value:"dist",id:"dist",level:3},{value:"Test \ub4f1\ub85d/\uc124\uce58",id:"test-\ub4f1\ub85d\uc124\uce58",level:3},{value:"\uc815\uc2dd \ub4f1\ub85d/\uc124\uce58",id:"\uc815\uc2dd-\ub4f1\ub85d\uc124\uce58",level:3},{value:"Reference",id:"reference",level:2}];function p(n){const e={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"\uc124\uce58",children:"\uc124\uce58"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-shell",children:"sudo apt install -y libffi-dev python3 python3-pip python3-dev \\\n&& python3 -m pip install -U pip setuptools wheel twine keyrings.alt pybind11 build\n"})}),"\n",(0,t.jsx)(e.h2,{id:"package-directory-structure",children:"Package directory structure"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-shell",children:"workspace\n\u251c\u2500\u2500 LICENSE\n\u251c\u2500\u2500 MANIFEST.in\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 CHANGELOG\n\u251c\u2500\u2500 setup.cfg\n\u251c\u2500\u2500 setup.py\n\u251c\u2500\u2500 c_src\n\u2502   \u2514\u2500\u2500 ...\n\u2514\u2500\u2500 py_src\n    \u2514\u2500\u2500 package\n        \u251c\u2500\u2500 test\n        |   \u251c\u2500\u2500 __init__.py\n        |   \u2514\u2500\u2500 ...\n        \u251c\u2500\u2500 subPackage\n        \u2502   \u251c\u2500\u2500 __init__.py\n        \u2502   \u2514\u2500\u2500 module1.py\n        \u251c\u2500\u2500 __init__.py\n        \u2514\u2500\u2500 __main__.py\n"})}),"\n",(0,t.jsx)(e.h2,{id:"cc",children:"C/C++"}),"\n",(0,t.jsx)(e.h3,{id:"function",children:"function"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",children:'#include <pybind11/pybind11.h>\n\nnamespace py = pybind11;\n\nint add(int i, int j) { return i + j; }\n\nPYBIND11_MODULE(_<package>, m) {\n    // m.def( "add", &add );\n    m.def("add",\n          &add,\n          "A function which adds two numbers",\n          py::arg("i") = 1,\n          py::arg("j") = 2);\n}\n'})}),"\n",(0,t.jsx)(e.h3,{id:"variable",children:"variable"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",children:'#include <pybind11/pybind11.h>\n\nnamespace py = pybind11;\n\nPYBIND11_MODULE(_<package>, m) {\n    // Built-in types and general objects (more on that later)\n    // are automatically converted.\n    m.attr("var1") = 10;\n\n    // Can be explicitly converted using the function `py::cast`.\n    py::object var2 = py::cast("It is string");\n    m.attr("var2")  = var2;\n}\n'})}),"\n",(0,t.jsx)(e.h3,{id:"class",children:"class"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",children:'#include <pybind11/pybind11.h>\n#include <string>\n\nnamespace py = pybind11;\n\nclass TestClass {\npublic:\n    TestClass(int a);\n    ~TestClass();\n    int         add(int a, int b);\n    int         sub(int a, int b);\n    float       sub(float a, float b);\n    std::string get_name(void);\n    void        set_name(std::string name);\n\nprivate:\n    std::string name;\n};\n\nPYBIND11_MODULE(_<package>, m) {\n    py::class_<TestClass>(m, "TestClass")\n        .def(py::init<int>())\n        .def("add", &TestClass::add)\n        .def("sub", (int (TestClass::*)(int, int)) & TestClass::sub)\n        .def("sub", (float (TestClass::*)(float, float)) & TestClass::sub)\n        // .def_readwrite( "name", &TestClass::name )    // public\n        .def_property(\n            "name", &TestClass::get_name, &TestClass::set_name);    // private\n}\n'})}),"\n",(0,t.jsx)(e.h2,{id:"python",children:"Python"}),"\n",(0,t.jsx)(e.h3,{id:"__init__py",children:"__init__.py"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:"from <package>._<package> import *\n\n...\n"})}),"\n",(0,t.jsx)(e.h2,{id:"build",children:"Build"}),"\n",(0,t.jsx)(e.h3,{id:"pyprojecttoml",children:"pyproject.toml"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"https://setuptools.pypa.io/en/latest/userguide/pyproject_config.html",children:"https://setuptools.pypa.io/en/latest/userguide/pyproject_config.html"})}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-toml",children:'[build-system]\nrequires = [\n    "setuptools>=42",\n    "wheel",\n    "pybind11>=2.6.0",\n]\nbuild-backend = "setuptools.build_meta"\n'})}),"\n",(0,t.jsx)(e.admonition,{type:"warning",children:(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"build-system.requires"}),"\ub294 build\ud560 \ub54c\ub9cc \uc0ac\uc6a9\ub418\ub294 \ud328\ud0a4\uc9c0\uc785\ub2c8\ub2e4. \uc124\uce58 \uc774\ud6c4\uc5d0 \uc0ac\uc6a9\ub420 \ud328\ud0a4\uc9c0\ub294 ",(0,t.jsx)(e.code,{children:"setup.cfg"}),"\uc5d0\uc11c \uad00\ub9ac\ud558\uc138\uc694."]})}),"\n",(0,t.jsx)(e.h3,{id:"setupcfg",children:"setup.cfg"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"https://setuptools.pypa.io/en/latest/userguide/declarative_config.html",children:"https://setuptools.pypa.io/en/latest/userguide/declarative_config.html"})}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"Static metadata\ub97c \uad00\ub9ac\ud558\ub294 \ud30c\uc77c\uc785\ub2c8\ub2e4. \uc124\uce58 \uc0c1\ud669\uc5d0 \ub530\ub77c \ubc14\ub00c\uc9c0 \uc54a\ub294 \ub0b4\uc6a9\uc744 \uc801\uc73c\uc138\uc694."}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ini",children:"[metadata]\nname = yolov4\nurl = https://github.com/hhk7734/tensorflow-yolov4\nproject_urls =\n    Documentation = https://wiki.loliot.net/docs/lang/python/libraries/yolov4/python-yolov4-about\n    Source = https://github.com/hhk7734/tensorflow-yolov4\n\nauthor = Hyeonki Hong\nauthor_email = hhk7734@gmail.com\ndescription = YOLOv4: Optimal Speed and Accuracy of Object Detection\nlong-description = file: README.md, CHANGELOG\nlong_description_content_type = text/markdown\nkeywords = tensorflow, yolo, AI, TPU\nlicense = MIT\nclassifiers =\n    Programming Language :: Python :: 3\n    License :: OSI Approved :: MIT License\n    Operating System :: POSIX :: Linux\n    Intended Audience :: Developers\n    Intended Audience :: Science/Research\n    Topic :: Scientific/Engineering\n    Topic :: Scientific/Engineering :: Artificial Intelligence\n    Topic :: Software Development\n    Topic :: System :: Hardware\n\n\n[options]\npackage_dir =\n    = py_src\npackages = find:\nzip_safe = False\ninstall_requires =\n    numpy>=1.18.0\n\n[options.packages.find]\nwhere = py_src\n"})}),"\n",(0,t.jsx)(e.admonition,{type:"info",children:(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"install_requires"}),"\uc5d0 \uac19\uc774 \uc124\uce58\ub418\uc5b4\uc57c\ud560 \ud328\ud0a4\uc9c0\ub97c \uc801\uc73c\uba74 \ub429\ub2c8\ub2e4."]})}),"\n",(0,t.jsxs)(e.p,{children:["TODO: ",(0,t.jsx)(e.code,{children:"extras_require"})]}),"\n",(0,t.jsx)(e.h3,{id:"setuppy",children:"setup.py"}),"\n",(0,t.jsx)(e.p,{children:"Dynamic metadata\ub97c \uad00\ub9ac\ud558\ub294 \ud30c\uc77c\uc785\ub2c8\ub2e4. \uc124\uce58 \uc0c1\ud669\uc5d0 \ub530\ub77c \ubc14\ub014 \uc218 \uc788\ub294 \ub0b4\uc6a9\uc744 \ud504\ub85c\uadf8\ub798\ubc0d\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:'from glob import glob\nfrom os import path\n\nfrom setuptools import setup\nfrom pybind11.setup_helpers import ParallelCompile, Pybind11Extension, build_ext\n\nBASE_DIR = path.dirname(path.abspath(__file__))\nCHANGELOG_PATH = path.join(BASE_DIR, "CHANGELOG")\n\nwith open(CHANGELOG_PATH, "r") as f:\n    __version__ = f.readline()\n    __version__ = __version__.split()\n    __version__ = __version__[1][1:-1]\n\nParallelCompile("NPY_NUM_BUILD_JOBS").install()\n\next_modules = [\n    Pybind11Extension(\n        # Ref: distutils.extension.Extension\n        name="yolov4.common._common",\n        sources=sorted(glob("c_src/**/*.cpp", recursive=True)),\n        include_dirs=["c_src/"],  # -I\n        define_macros=[(("VERSION_INFO", __version__))],  # -D<string>=<string>\n        undef_macros=[],  # [string] -D<string>\n        library_dirs=[],  # [string] -L<string>\n        libraries=[],  # [string] -l<string>\n        runtime_library_dirs=[],  # [string] -rpath=<string>\n        extra_objects=[],  # [string]\n        extra_compile_args=[],  # [string]\n        extra_link_args=[],  # [string]\n    ),\n]\n\n\nsetup(\n    version=__version__,\n    ext_modules=ext_modules,\n    cmdclass={"build_ext": build_ext},\n)\n'})}),"\n",(0,t.jsxs)(e.p,{children:["__version__ \uac12\uc744 ",(0,t.jsx)(e.code,{children:".cpp"}),"\ud30c\uc77c \uc548\uc5d0\uc11c \ud638\ucd9c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",children:'#define MACRO_STRINGIFY(x) #x\n\nPYBIND11_MODULE(_<package>, m) {\n#ifdef VERSION_INFO\n    m.attr("__version__") = MACRO_STRINGIFY(VERSION_INFO);\n#else\n    m.attr("__version__") = "dev";\n#endif\n}\n'})}),"\n",(0,t.jsx)(e.h3,{id:"manifestin",children:"MANIFEST.in"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-text",children:"include LICENSE\ninclude README.md\ninclude CHANGELOG\ninclude c_src/*\n"})}),"\n",(0,t.jsx)(e.h3,{id:"test-installuninstall-with-pip",children:"Test install/uninstall with pip"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-shell",children:"python3 -m pip install <directory|git|package>\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-shell",children:"python3 -m pip uninstall <package>\n"})}),"\n",(0,t.jsx)(e.h2,{id:"pip-\ub4f1\ub85d",children:"pip \ub4f1\ub85d"}),"\n",(0,t.jsx)(e.h3,{id:"dist",children:"dist"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-shell",children:"python3 -m build\n"})}),"\n",(0,t.jsx)(e.h3,{id:"test-\ub4f1\ub85d\uc124\uce58",children:"Test \ub4f1\ub85d/\uc124\uce58"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-shell",children:"python3 -m twine upload --repository testpypi dist/*\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-shell",children:"python3 -m pip install \\\n    --index-url https://test.pypi.org/simple/ \\\n    --verbose \\\n    --user \\\n    --no-deps \\\n    <package>\n"})}),"\n",(0,t.jsx)(e.h3,{id:"\uc815\uc2dd-\ub4f1\ub85d\uc124\uce58",children:"\uc815\uc2dd \ub4f1\ub85d/\uc124\uce58"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-shell",children:"python3 -m twine upload dist/*\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-shell",children:"python3 -m pip install <package>\n"})}),"\n",(0,t.jsx)(e.h2,{id:"reference",children:"Reference"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"https://pybind11.readthedocs.io",children:"https://pybind11.readthedocs.io"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"https://github.com/pybind/pybind11",children:"https://github.com/pybind/pybind11"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"https://packaging.python.org/guides/distributing-packages-using-setuptools",children:"https://packaging.python.org/guides/distributing-packages-using-setuptools"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"https://pypi.org/classifiers",children:"https://pypi.org/classifiers"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"https://packaging.python.org/tutorials/packaging-projects/",children:"https://packaging.python.org/tutorials/packaging-projects/"})}),"\n"]})]})}function o(n={}){const{wrapper:e}={...(0,l.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(p,{...n})}):p(n)}},28453:(n,e,i)=>{i.d(e,{R:()=>a,x:()=>r});var s=i(96540);const t={},l=s.createContext(t);function a(n){const e=s.useContext(l);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:a(n.components),s.createElement(l.Provider,{value:e},n.children)}}}]);