"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9163],{7226:(n,o,e)=>{e.r(o),e.d(o,{assets:()=>i,contentTitle:()=>r,default:()=>_,frontMatter:()=>s,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"\u6570\u636e\u5e93/mysql/MySQL\u63d2\u4ef6\u4e4b\u8fde\u63a5\u63a7\u5236\u63d2\u4ef6(Connection-Control)","title":"MySQL\u63d2\u4ef6\u4e4b\u8fde\u63a5\u63a7\u5236\u63d2\u4ef6(Connection-Control)","description":"\u63d2\u4ef6\u4ecb\u7ecd MySQL 5.7.17 \u4ee5\u540e\u63d0\u4f9b\u4e86Connection-Control\u63d2\u4ef6\u7528\u6765\u63a7\u5236\u5ba2\u6237\u7aef\u5728\u767b\u5f55\u64cd\u4f5c\u8fde\u7eed\u5931\u8d25\u4e00\u5b9a\u6b21\u6570\u540e\u7684\u54cd\u5e94\u7684\u5ef6\u8fdf\u3002\u8be5\u63d2\u4ef6\u53ef\u6709\u6548\u7684\u9632\u6b62\u5ba2\u6237\u7aef\u66b4\u529b\u767b\u5f55\u7684\u98ce\u9669(\u653b\u51fb)\u3002\u8be5\u63d2\u4ef6\u5305\u542b\u4ee5\u4e0b2\u4e2a\u7ec4\u4ef6","source":"@site/docs/\u6570\u636e\u5e93/mysql/MySQL\u63d2\u4ef6\u4e4b\u8fde\u63a5\u63a7\u5236\u63d2\u4ef6(Connection-Control).md","sourceDirName":"\u6570\u636e\u5e93/mysql","slug":"/\u6570\u636e\u5e93/mysql/MySQL\u63d2\u4ef6\u4e4b\u8fde\u63a5\u63a7\u5236\u63d2\u4ef6(Connection-Control)","permalink":"/docs/\u6570\u636e\u5e93/mysql/MySQL\u63d2\u4ef6\u4e4b\u8fde\u63a5\u63a7\u5236\u63d2\u4ef6(Connection-Control)","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/\u6570\u636e\u5e93/mysql/MySQL\u63d2\u4ef6\u4e4b\u8fde\u63a5\u63a7\u5236\u63d2\u4ef6(Connection-Control).md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"MySQL\u6162\u67e5\u8be2\u65e5\u5fd7\u65f6\u95f4\u4e0e\u7cfb\u7edf\u4e0d\u4e00\u81f4\u7684\u89e3\u51b3\u65b9\u6cd5","permalink":"/docs/\u6570\u636e\u5e93/mysql/MySQL\u6162\u67e5\u8be2\u65e5\u5fd7\u65f6\u95f4\u4e0e\u7cfb\u7edf\u4e0d\u4e00\u81f4\u7684\u89e3\u51b3\u65b9\u6cd5"},"next":{"title":"MySQL\u63d2\u4ef6\u4e4b\u914d\u7f6e\u5bc6\u7801\u7b56\u7565validate_password\u63d2\u4ef6","permalink":"/docs/\u6570\u636e\u5e93/mysql/MySQL\u63d2\u4ef6\u4e4b\u914d\u7f6e\u5bc6\u7801\u7b56\u7565validate_password\u63d2\u4ef6"}}');var c=e(4848),l=e(8453);const s={},r=void 0,i={},d=[];function a(n){const o={code:"code",p:"p",pre:"pre",...(0,l.R)(),...n.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(o.p,{children:"\u63d2\u4ef6\u4ecb\u7ecd MySQL 5.7.17 \u4ee5\u540e\u63d0\u4f9b\u4e86Connection-Control\u63d2\u4ef6\u7528\u6765\u63a7\u5236\u5ba2\u6237\u7aef\u5728\u767b\u5f55\u64cd\u4f5c\u8fde\u7eed\u5931\u8d25\u4e00\u5b9a\u6b21\u6570\u540e\u7684\u54cd\u5e94\u7684\u5ef6\u8fdf\u3002\u8be5\u63d2\u4ef6\u53ef\u6709\u6548\u7684\u9632\u6b62\u5ba2\u6237\u7aef\u66b4\u529b\u767b\u5f55\u7684\u98ce\u9669(\u653b\u51fb)\u3002\u8be5\u63d2\u4ef6\u5305\u542b\u4ee5\u4e0b2\u4e2a\u7ec4\u4ef6"}),"\n",(0,c.jsx)(o.p,{children:"CONNECTION_CONTROL\uff1a\u7528\u6765\u63a7\u5236\u767b\u5f55\u5931\u8d25\u7684\u6b21\u6570\u53ca\u5ef6\u8fdf\u54cd\u5e94\u65f6\u95f4 CONNECTION_CONTROL_FAILED_LOGIN_ATTEMPTS\uff1a\u8be5\u8868\u5c06\u767b\u5f55\u5931\u8d25\u7684\u64cd\u4f5c\u8bb0\u5f55\u81f3IS\u5e93\u4e2d \u63d2\u4ef6\u5b89\u88c5 -- \u914d\u7f6e\u6587\u4ef6\u589e\u52a0\u4ee5\u4e0b\u914d\u7f6e"}),"\n",(0,c.jsx)(o.pre,{children:(0,c.jsx)(o.code,{children:"[mysqld]\r\nplugin-load-add\t\t\t\t\t\t\t       \t= connection_control.so\r\nconnection-control                             \t= FORCE\r\nconnection-control-failed-login-attempts       \t= FORCE\r\nconnection_control_min_connection_delay\t\t\t= 1000\r\nconnection_control_max_connection_delay\t\t\t= 86400\r\nconnection_control_failed_connections_threshold\t= 3\n"})}),"\n",(0,c.jsx)(o.p,{children:"-- \u63d2\u4ef6\u52a8\u6001\u5b89\u88c5\u542f\u7528"}),"\n",(0,c.jsx)(o.pre,{children:(0,c.jsx)(o.code,{children:"mysql> INSTALL PLUGIN CONNECTION_CONTROL SONAME 'connection_control.so';\r\nmysql> INSTALL PLUGIN CONNECTION_CONTROL_FAILED_LOGIN_ATTEMPTS SONAME 'connection_control.so';\n"})}),"\n",(0,c.jsx)(o.p,{children:"-- \u9a8c\u8bc1\u662f\u5426\u6b63\u5e38\u5b89\u88c5"}),"\n",(0,c.jsx)(o.pre,{children:(0,c.jsx)(o.code,{children:" mysql> SELECT PLUGIN_NAME, PLUGIN_STATUS FROM INFORMATION_SCHEMA.PLUGINS WHERE PLUGIN_NAME LIKE 'connection%';\r\n mysql> SHOW PLUGINS; \n"})}),"\n",(0,c.jsx)(o.p,{children:"\u63d2\u4ef6\u914d\u7f6e -- \u67e5\u770b\u9ed8\u8ba4\u76f8\u5173\u53d8\u91cf"}),"\n",(0,c.jsx)(o.pre,{children:(0,c.jsx)(o.code,{children:"mysql> show variables like 'connection_control%';\n"})}),"\n",(0,c.jsx)(o.p,{children:"-- \u5b9a\u5236\u5316\u914d\u7f6e"}),"\n",(0,c.jsx)(o.pre,{children:(0,c.jsx)(o.code,{className:"language-sql",children:"mysql> SET GLOBAL connection_control_failed_connections_threshold = 3;\r\nmysql> SET GLOBAL connection_control_min_connection_delay = 1000;\r\nmysql> SET GLOBAL connection_control_max_connection_delay = 86400;\n"})}),"\n",(0,c.jsx)(o.p,{children:"-- \u67e5\u770b\u4fee\u6539\u540e\u7684\u914d\u7f6e"}),"\n",(0,c.jsx)(o.pre,{children:(0,c.jsx)(o.code,{className:"language-sql",children:"mysql> show variables like 'connection_control%'; \n"})}),"\n",(0,c.jsx)(o.p,{children:"connection_control_failed_connections_threshold \u5931\u8d25\u5c1d\u8bd5\u7684\u6b21\u6570\uff0c\u9ed8\u8ba4\u4e3a3 \uff0c\u8868\u793a\u5f53\u8fde\u63a5\u5931\u8d253\u6b21\u540e\u542f\u7528\u8fde\u63a5\u63a7\u5236\uff0c0\u8868\u793a\u4e0d\u5f00\u542f"}),"\n",(0,c.jsx)(o.p,{children:"connection_control_max_connection_delay \u54cd\u5e94\u5ef6\u8fdf\u7684\u6700\u5927\u65f6\u95f4\uff0c\u9ed8\u8ba4\u7ea625\u5929"}),"\n",(0,c.jsx)(o.p,{children:"connection_control_min_connection_delay \u54cd\u5e94\u5ef6\u8fdf\u7684\u6700\u5c0f\u65f6\u95f4\uff0c\u9ed8\u8ba41000\u5fae\u79d2\uff0c1\u79d2"}),"\n",(0,c.jsx)(o.p,{children:"-- \u8be5\u8868\u8bb0\u5f55\u767b\u5f55\u5931\u8d25\u7684\u7528\u6237\u53ca\u5931\u8d25\u6b21\u6570\uff0c\u5f53\u7528\u6237\u767b\u5f55\u6210\u529f\u540e\uff0c\u767b\u5f55\u5931\u8d25\u7684\u8bb0\u5f55\u5219\u4f1a\u88ab\u5220\u9664\u3002"}),"\n",(0,c.jsx)(o.p,{children:"-- \u91cd\u65b0\u914d\u7f6econnection_control_failed_connections_threshold\u53d8\u91cf\uff0c\u8be5\u8868\u8bb0\u5f55\u4f1a\u88ab\u5220\u9664(\u91cd\u7f6e)"}),"\n",(0,c.jsx)(o.p,{children:"-- \u5982\u679c\u4f7f\u7528\u4e0d\u5b58\u5728\u7684\u7528\u6237\u767b\u5f55\uff0c\u5219\u8be5\u8868\u8bb0\u5f55\u7528\u6237\u540d\u4e3a\u7a7a\uff0c\u4f46\u4f1a\u8bb0\u5f55\u5177\u4f53\u767b\u5f55\u7684IP use information_schema; select * from connection_control_failed_login_attempts;"}),"\n",(0,c.jsx)(o.p,{children:"-- \u8fde\u63a5\u63a7\u5236\u7684\u4f7f\u7528\u6b21\u6570(\u53ef\u7528\u6237\u5224\u65ad\u662f\u5426\u5b58\u5728\u66b4\u529b\u767b\u5f55\u5c1d\u8bd5)"}),"\n",(0,c.jsx)(o.p,{children:"-- \u91cd\u65b0\u914d\u7f6econnection_control_failed_connections_threshold\u53d8\u91cf\uff0c\u8be5\u8868\u8bb0\u5f55\u4f1a\u88ab\u5220\u9664(\u91cd\u7f6e)"}),"\n",(0,c.jsx)(o.pre,{children:(0,c.jsx)(o.code,{className:"language-sql",children:"mysql> show global status like 'Connection_control_delay_generated'; \n"})})]})}function _(n={}){const{wrapper:o}={...(0,l.R)(),...n.components};return o?(0,c.jsx)(o,{...n,children:(0,c.jsx)(a,{...n})}):a(n)}},8453:(n,o,e)=>{e.d(o,{R:()=>s,x:()=>r});var t=e(6540);const c={},l=t.createContext(c);function s(n){const o=t.useContext(l);return t.useMemo((function(){return"function"==typeof n?n(o):{...o,...n}}),[o,n])}function r(n){let o;return o=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:s(n.components),t.createElement(l.Provider,{value:o},n.children)}}}]);