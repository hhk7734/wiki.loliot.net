"use strict";(self.webpackChunkwiki_loliot_net=self.webpackChunkwiki_loliot_net||[]).push([[22360],{86403:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"lang/python/libraries/pyside2/pyside2-qrunnable-and-qthreadpool","title":"PySide2 QRunnable and QThreadPool","description":"PySide2 QRunnable and QThreadPool","source":"@site/docs/lang/python/libraries/pyside2/pyside2-qrunnable-and-qthreadpool.mdx","sourceDirName":"lang/python/libraries/pyside2","slug":"/lang/python/libraries/pyside2/pyside2-qrunnable-and-qthreadpool","permalink":"/docs/lang/python/libraries/pyside2/pyside2-qrunnable-and-qthreadpool","draft":false,"unlisted":false,"editUrl":"https://github.com/hhk7734/wiki/tree/main/docs/lang/python/libraries/pyside2/pyside2-qrunnable-and-qthreadpool.mdx","tags":[],"version":"current","lastUpdatedAt":1735752184000,"frontMatter":{"id":"pyside2-qrunnable-and-qthreadpool","title":"PySide2 QRunnable and QThreadPool","sidebar_label":"QRunnable and QThreadPool","description":"PySide2 QRunnable and QThreadPool","keywords":["Python","PySide2","QRunnable","QThreadPool"]},"sidebar":"python","previous":{"title":"QThread","permalink":"/docs/lang/python/libraries/pyside2/pyside2-qthread"},"next":{"title":"Custom QDialog","permalink":"/docs/lang/python/libraries/pyside2/pyside2-custom-qdialog"}}');var a=s(74848),i=s(28453);s(24763);const l={id:"pyside2-qrunnable-and-qthreadpool",title:"PySide2 QRunnable and QThreadPool",sidebar_label:"QRunnable and QThreadPool",description:"PySide2 QRunnable and QThreadPool",keywords:["Python","PySide2","QRunnable","QThreadPool"]},o=void 0,r={},d=[{value:"Examples",id:"examples",level:2},{value:"Reference",id:"reference",level:2}];function p(e){const n={a:"a",code:"code",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'import sys\n\nfrom PySide2.QtWidgets import QMainWindow, QApplication\nfrom PySide2.QtCore import (\n    QObject,\n    QThread,\n    QRunnable,\n    QThreadPool,\n    Slot,\n    Signal,\n)\n\nfrom ui_mainwindow import Ui_MainWindow\n\n\nclass TaskSignal(QObject):\n    """\n    QRunnable\uc5d0\uc11c \uc0ac\uc6a9\ud560 \uc2dc\uadf8\ub110\n    """\n\n    finished = Signal(bool)\n\n\nclass Task(QRunnable):\n    _taskSignal = TaskSignal()\n    finished = _taskSignal.finished\n\n    var = False\n\n    def run(self):\n        """\n        \uc7a0\uc2dc \uc911\ub2e8\ud558\ub294 \uacbd\uc6b0 QThread.msleep() \uc0ac\uc6a9\n        """\n        QThread.msleep(5000)\n\n        self.finished.emit(self.var)\n\n\nclass MainWindow(QMainWindow, Ui_MainWindow):\n    def __init__(self):\n        super().__init__()\n        self.setupUi(self)\n        self.pushButton.setText("\ubc84\ud2bc 1")\n\n        self.pushButton.clicked.connect(self.startTask)\n\n        self.task = Task()\n        self.task.setAutoDelete(False)\n        self.task.finished.connect(self.taskFinished)\n\n    def startTask(self):\n        if self.task.var:\n            self.task.var = False\n        else:\n            self.task.var = True\n\n        """\n        task \uc2e4\ud589\n        """\n        QThreadPool.globalInstance().start(self.task)\n\n        """\n        \ubc84\ud2bc \ube44\ud65c\uc131\ud654\n        """\n        self.pushButton.setEnabled(False)\n\n    @Slot(bool)\n    def taskFinished(self, is_success):\n        if is_success:\n            self.textBrowser.append("success")\n        else:\n            self.textBrowser.append("fail")\n\n        self.pushButton.setEnabled(True)\n\n\nif __name__ == "__main__":\n    app = QApplication(sys.argv)\n    mainWindow = MainWindow()\n    mainWindow.show()\n    sys.exit(app.exec_())\n'})}),"\n",(0,a.jsx)(n.h2,{id:"reference",children:"Reference"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://doc.qt.io/qtforpython/PySide2/QtCore/QThreadPool.html",children:"https://doc.qt.io/qtforpython/PySide2/QtCore/QThreadPool.html"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://doc.qt.io/qtforpython/PySide2/QtCore/QRunnable.html",children:"https://doc.qt.io/qtforpython/PySide2/QtCore/QRunnable.html"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>o});var t=s(96540);const a={},i=t.createContext(a);function l(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);