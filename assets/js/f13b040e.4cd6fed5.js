"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2626],{2423:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>m});const s=JSON.parse('{"id":"\u6570\u636e\u5e93/mysql/userparameter_mysql.conf","title":"userparameter_mysql.conf","description":"","source":"@site/docs/\u6570\u636e\u5e93/mysql/userparameter_mysql.conf.md","sourceDirName":"\u6570\u636e\u5e93/mysql","slug":"/\u6570\u636e\u5e93/mysql/userparameter_mysql.conf","permalink":"/docs/\u6570\u636e\u5e93/mysql/userparameter_mysql.conf","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/\u6570\u636e\u5e93/mysql/userparameter_mysql.conf.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"mysql\u7684sql_mode\u8bbe\u7f6e","permalink":"/docs/\u6570\u636e\u5e93/mysql/mysql\u7684sql_mode\u8bbe\u7f6e"},"next":{"title":"xtrabackup\u5907\u4efd\u4e0e\u6062\u590d","permalink":"/docs/\u6570\u636e\u5e93/mysql/xtrabackup\u5907\u4efd\u4e0e\u6062\u590d"}}');var n=t(4848),r=t(8453);const o={},l=void 0,i={},m=[];function c(e){const a={code:"code",pre:"pre",...(0,r.R)(),...e.components};return(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{children:'[root@localhost data]# cat /etc/zabbix/zabbix_agentd.d/userparameter_mysql.conf\n# For all the following commands HOME should be set to the directory that has .my.cnf file with password information.\n\n# Flexible parameter to grab global variables. On the frontend side, use keys like mysql.status[Com_insert].\n# Key syntax is mysql.status[variable].\nUserParameter=mysql.status[*],echo "show global status where Variable_name=\'$1\';" | HOME=/var/lib/zabbix mysql -N | awk \'{print $$2}\'\n\n# Flexible parameter to determine database or table size. On the frontend side, use keys like mysql.size[zabbix,history,data].\n# Key syntax is mysql.size[<database>,<table>,<type>].\n# Database may be a database name or "all". Default is "all".\n# Table may be a table name or "all". Default is "all".\n# Type may be "data", "index", "free" or "both". Both is a sum of data and index. Default is "both".\n# Database is mandatory if a table is specified. Type may be specified always.\n# Returns value in bytes.\n# \'sum\' on data_length or index_length alone needed when we are getting this information for whole database instead of a single table\nUserParameter=mysql.size[*],bash -c \'echo "select sum($(case "$3" in both|"") echo "data_length+index_length";; data|index) echo "$3_length";; free) echo "data_free";; esac)) from information_schema.tables$([[ "$1" = "all" || ! "$1" ]] || echo " where table_schema=\\"$1\\"")$([[ "$2" = "all" || ! "$2" ]] || echo "and table_name=\\"$2\\"");" | HOME=/var/lib/zabbix mysql -N\'\n\nUserParameter=mysql.ping,HOME=/var/lib/zabbix mysqladmin ping | grep -c alive\nUserParameter=mysql.version,mysql -V\n\n'})})}function d(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},8453:(e,a,t)=>{t.d(a,{R:()=>o,x:()=>l});var s=t(6540);const n={},r=s.createContext(n);function o(e){const a=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),s.createElement(r.Provider,{value:a},e.children)}}}]);