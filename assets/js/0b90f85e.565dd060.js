"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8666],{3586:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>d,default:()=>u,frontMatter:()=>c,metadata:()=>n,toc:()=>o});const n=JSON.parse('{"id":"\u6570\u636e\u5e93/mysql/databakfull","title":"databakfull","description":"","source":"@site/docs/\u6570\u636e\u5e93/mysql/databakfull.md","sourceDirName":"\u6570\u636e\u5e93/mysql","slug":"/\u6570\u636e\u5e93/mysql/databakfull","permalink":"/docs/\u6570\u636e\u5e93/mysql/databakfull","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/\u6570\u636e\u5e93/mysql/databakfull.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Mysql\u7684\u4e09\u79cd\u5b89\u88c5\u65b9\u5f0f","permalink":"/docs/\u6570\u636e\u5e93/mysql/Mysql\u7684\u4e09\u79cd\u5b89\u88c5\u65b9\u5f0f"},"next":{"title":"innodbbackup\u5907\u4efd","permalink":"/docs/\u6570\u636e\u5e93/mysql/innodbbackup\u5907\u4efd"}}');var s=a(4848),r=a(8453);const c={},d=void 0,l={},o=[];function i(t){const e={code:"code",pre:"pre",...(0,r.R)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"10 01 */1 * * /etc/init.d/databakfull.sh\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:'#!/bin/bash\nrq1=$(date +%Y%m%d)\nrm -rf /data/back/tmp/*\n/data/mysql/bin/mysqldump  -uroot -pw1ses0ft --all-databases --lock-all-tables --routines --triggers --events --flush-logs > /data/back/tmp/zgdb$rq1.sql\ncd /data/back/tmp\ntar czvf zgdata$rq1.tar.gz zgdb$rq1.sql\ncp zgdata$rq1.tar.gz /data/back/zip/\nscp -r -P 22 zgdata$rq1.tar.gz 10.56.3.97:/data/dbbackup/\nfind /data/back/zip/zgdata* -name "*.*" -mtime +1 -type f -exec rm {} \\;\nssh 10.56.3.97  "find /data/dbbackup/zgdata* -name "*.*" -mtime +3 -type f -exec rm {} \\;"\n'})})]})}function u(t={}){const{wrapper:e}={...(0,r.R)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(i,{...t})}):i(t)}},8453:(t,e,a)=>{a.d(e,{R:()=>c,x:()=>d});var n=a(6540);const s={},r=n.createContext(s);function c(t){const e=n.useContext(r);return n.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function d(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:c(t.components),n.createElement(r.Provider,{value:e},t.children)}}}]);