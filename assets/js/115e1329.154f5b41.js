"use strict";(self.webpackChunkwiki_loliot_net=self.webpackChunkwiki_loliot_net||[]).push([[94416],{45143:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>a,toc:()=>r});var t=i(74848),s=i(28453);const o={id:"pyside2-custom-qdialog",title:"PySide2 Custom QDialog",sidebar_label:"Custom QDialog",description:"PySide2 Custom QDialog",keywords:["Python","PySide2","QDialog"]},l=void 0,a={id:"lang/python/libraries/pyside2/pyside2-custom-qdialog",title:"PySide2 Custom QDialog",description:"PySide2 Custom QDialog",source:"@site/docs/lang/python/libraries/pyside2/pyside2-custom-qdialog.mdx",sourceDirName:"lang/python/libraries/pyside2",slug:"/lang/python/libraries/pyside2/pyside2-custom-qdialog",permalink:"/docs/lang/python/libraries/pyside2/pyside2-custom-qdialog",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1729318814e3,frontMatter:{id:"pyside2-custom-qdialog",title:"PySide2 Custom QDialog",sidebar_label:"Custom QDialog",description:"PySide2 Custom QDialog",keywords:["Python","PySide2","QDialog"]},sidebar:"python",previous:{title:"QRunnable and QThreadPool",permalink:"/docs/lang/python/libraries/pyside2/pyside2-qrunnable-and-qthreadpool"},next:{title:"socket",permalink:"/docs/lang/python/libraries/python-socket"}},d={},r=[{value:"Create QDialog UI",id:"create-qdialog-ui",level:2},{value:"Example",id:"example",level:2}];function c(e){const n={code:"code",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"create-qdialog-ui",children:"Create QDialog UI"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"New file or project (Ctrl + N)->Qt->Qt Designer Form-> Dialog without Buttons"}),"\n",(0,t.jsxs)(n.li,{children:["Add ",(0,t.jsx)(n.code,{children:"okPushButton"})," and ",(0,t.jsx)(n.code,{children:"cancelPushButton"})]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",metastring:'title="settings_dialog.py"',children:"import copy\n\nfrom PySide2.QtCore import Qt\nfrom PySide2.QtWidgets import QDialog\n\nfrom ui_settings_dialog import Ui_SettingsDialog\n\n\nclass SettingsDialog(QDialog, Ui_SettingsDialog):\n    def __init__(self, parent=None) -> None:\n        super().__init__(parent=parent)\n        self.setupUi(self)\n        self.setModal(True)\n        self.setWindowFlag(Qt.FramelessWindowHint)\n\n        # When accepted, self.result() is 1.\n        self.okPushButton.clicked.connect(self.accept)\n        # When rejected, self.result() is 0.\n        self.cancelPushButton.clicked.connect(self.reject)\n\n        self._settings = None\n\n    def setSettings(self, settings):\n        # Copies settings. Do not edit settings.\n        self._settings = copy.deepcopy(settings)\n\n    def getSettings(self):\n        return self._settings\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",metastring:'title="main_window.py"',children:'import sys\n\nfrom PySide2.QtWidgets import QMainWindow, QApplication\n\nfrom ui_main_window import Ui_MainWindow\nfrom settings_dialog import SettingsDialog\n\n\nclass MainWindow(QMainWindow, Ui_MainWindow):\n    def __init__(self):\n        super().__init__()\n        self.setupUi(self)\n\n        ...\n\n        self.settingsDialog = SettingsDialog(self)\n        self.settingsDialog.finished.connect(self.finishedSettingsDialog)\n\n        self.settingsPushButton.clicked.connect(self.openSettingsDialog)\n\n    def openSettingsDialog(self):\n        self.settingsDialog.setSettings(self.settings)\n        self.settingsDialog.open()\n\n    def finishedSettingsDialog(self):\n        if self.settingsDialog.result():\n            self.settings = self.settingsDialog.getSettings()\n\n\nif __name__ == "__main__":\n    app = QApplication(sys.argv)\n    mainWindow = MainWindow()\n    mainWindow.show()\n    sys.exit(app.exec_())\n'})})]})}function g(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>a});var t=i(96540);const s={},o=t.createContext(s);function l(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);