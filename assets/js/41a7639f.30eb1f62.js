"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6294],{1426:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>t,contentTitle:()=>i,default:()=>o,frontMatter:()=>d,metadata:()=>c,toc:()=>h});const c=JSON.parse('{"id":"\u6570\u636e\u5e93/mysql/MySQL\u67e5\u8be2\u7f13\u5b58\u7b80\u5355\u4f7f\u7528","title":"MySQL\u67e5\u8be2\u7f13\u5b58\u7b80\u5355\u4f7f\u7528","description":"1\u3001\u67e5\u770b\u5f53\u524d\u7684mysql\u6570\u636e\u5e93\u662f\u5426\u652f\u6301\u67e5\u8be2\u7f13\u5b58","source":"@site/docs/\u6570\u636e\u5e93/mysql/MySQL\u67e5\u8be2\u7f13\u5b58\u7b80\u5355\u4f7f\u7528.md","sourceDirName":"\u6570\u636e\u5e93/mysql","slug":"/\u6570\u636e\u5e93/mysql/MySQL\u67e5\u8be2\u7f13\u5b58\u7b80\u5355\u4f7f\u7528","permalink":"/docs/\u6570\u636e\u5e93/mysql/MySQL\u67e5\u8be2\u7f13\u5b58\u7b80\u5355\u4f7f\u7528","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/\u6570\u636e\u5e93/mysql/MySQL\u67e5\u8be2\u7f13\u5b58\u7b80\u5355\u4f7f\u7528.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"MySQL\u63d2\u4ef6\u4e4b\u914d\u7f6e\u5bc6\u7801\u7b56\u7565validate_password\u63d2\u4ef6","permalink":"/docs/\u6570\u636e\u5e93/mysql/MySQL\u63d2\u4ef6\u4e4b\u914d\u7f6e\u5bc6\u7801\u7b56\u7565validate_password\u63d2\u4ef6"},"next":{"title":"Mysql\u4e3b\u4ece\u914d\u7f6e","permalink":"/docs/\u6570\u636e\u5e93/mysql/Mysql\u4e3b\u4ece\u914d\u7f6e"}}');var r=n(4848),l=n(8453);const d={},i=void 0,t={},h=[{value:"1\u3001\u67e5\u770b\u5f53\u524d\u7684mysql\u6570\u636e\u5e93\u662f\u5426\u652f\u6301\u67e5\u8be2\u7f13\u5b58",id:"1\u67e5\u770b\u5f53\u524d\u7684mysql\u6570\u636e\u5e93\u662f\u5426\u652f\u6301\u67e5\u8be2\u7f13\u5b58",level:4},{value:"2\u3001\u67e5\u770b\u5f53\u524dmysql\u662f\u5426\u5f00\u542f\u4e86\u67e5\u8be2\u7f13\u5b58",id:"2\u67e5\u770b\u5f53\u524dmysql\u662f\u5426\u5f00\u542f\u4e86\u67e5\u8be2\u7f13\u5b58",level:4},{value:"3\u3001\u67e5\u770b\u67e5\u8be2\u7f13\u5b58\u7684\u5360\u7528\u5927\u5c0f",id:"3\u67e5\u770b\u67e5\u8be2\u7f13\u5b58\u7684\u5360\u7528\u5927\u5c0f",level:4},{value:"4\u3001\u67e5\u770b\u67e5\u8be2\u7f13\u5b58\u7684\u72b6\u6001\u53d8\u91cf",id:"4\u67e5\u770b\u67e5\u8be2\u7f13\u5b58\u7684\u72b6\u6001\u53d8\u91cf",level:4},{value:"\u4e09\u3001\u5f00\u542f\u67e5\u8be2\u7f13\u5b58",id:"\u4e09\u5f00\u542f\u67e5\u8be2\u7f13\u5b58",level:2},{value:"1\u3001\u5728usr/my.cnf\u4e2d\u8fdb\u884c\u914d\u7f6e(\u914d\u7f6e\u6587\u4ef6\u4e5f\u53ef\u80fd\u5728/etc/my.cnf)",id:"1\u5728usrmycnf\u4e2d\u8fdb\u884c\u914d\u7f6e\u914d\u7f6e\u6587\u4ef6\u4e5f\u53ef\u80fd\u5728etcmycnf",level:4},{value:"2\u3001\u91cd\u542f\u670d\u52a1",id:"2\u91cd\u542f\u670d\u52a1",level:4},{value:"\u56db\u3001\u67e5\u8be2\u7f13\u5b58SELECT\u9009\u9879",id:"\u56db\u67e5\u8be2\u7f13\u5b58select\u9009\u9879",level:2},{value:"\u4e94\u3001\u67e5\u8be2\u7f13\u5b58\u5931\u6548\u73b0\u8c61",id:"\u4e94\u67e5\u8be2\u7f13\u5b58\u5931\u6548\u73b0\u8c61",level:2},{value:"1\u3001SQL\u8bed\u53e5\u4e0d\u4e00\u81f4",id:"1sql\u8bed\u53e5\u4e0d\u4e00\u81f4",level:4},{value:"2\u3001\u67e5\u8be2\u8bed\u53e5\u6709\u4e00\u4e9b\u4e0d\u786e\u5b9a\u7684\u503c",id:"2\u67e5\u8be2\u8bed\u53e5\u6709\u4e00\u4e9b\u4e0d\u786e\u5b9a\u7684\u503c",level:4},{value:"3\u3001\u4e0d\u4f7f\u7528\u4efb\u4f55\u8868\u67e5\u8be2\u8bed\u53e5",id:"3\u4e0d\u4f7f\u7528\u4efb\u4f55\u8868\u67e5\u8be2\u8bed\u53e5",level:4},{value:"4\u3001\u67e5\u8be2mysql\u3001information_schema\u6216performance_schema\u6570\u636e\u5e93\u4e2d\u7684\u8868",id:"4\u67e5\u8be2mysqlinformation_schema\u6216performance_schema\u6570\u636e\u5e93\u4e2d\u7684\u8868",level:4},{value:"5\u3001\u5728\u5b58\u50a8\u7684\u51fd\u6570\u3001\u89e6\u53d1\u5668\u6216\u4e8b\u4ef6\u4e3b\u4f53\u5185\u6267\u884c\u7684\u67e5\u8be2",id:"5\u5728\u5b58\u50a8\u7684\u51fd\u6570\u89e6\u53d1\u5668\u6216\u4e8b\u4ef6\u4e3b\u4f53\u5185\u6267\u884c\u7684\u67e5\u8be2",level:4},{value:"6\u3001\u8868\u66f4\u6539\u5bfc\u81f4\u7f13\u5b58\u5220\u9664",id:"6\u8868\u66f4\u6539\u5bfc\u81f4\u7f13\u5b58\u5220\u9664",level:4}];function a(e){const s={code:"code",h2:"h2",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h4,{id:"1\u67e5\u770b\u5f53\u524d\u7684mysql\u6570\u636e\u5e93\u662f\u5426\u652f\u6301\u67e5\u8be2\u7f13\u5b58",children:"1\u3001\u67e5\u770b\u5f53\u524d\u7684mysql\u6570\u636e\u5e93\u662f\u5426\u652f\u6301\u67e5\u8be2\u7f13\u5b58"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"SHOW VARIABLES LIKE 'have_query_cache';\n"})}),"\n",(0,r.jsx)(s.h4,{id:"2\u67e5\u770b\u5f53\u524dmysql\u662f\u5426\u5f00\u542f\u4e86\u67e5\u8be2\u7f13\u5b58",children:"2\u3001\u67e5\u770b\u5f53\u524dmysql\u662f\u5426\u5f00\u542f\u4e86\u67e5\u8be2\u7f13\u5b58"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"SHOW VARIABLES LIKE 'query_cache_type';\n"})}),"\n",(0,r.jsx)(s.h4,{id:"3\u67e5\u770b\u67e5\u8be2\u7f13\u5b58\u7684\u5360\u7528\u5927\u5c0f",children:"3\u3001\u67e5\u770b\u67e5\u8be2\u7f13\u5b58\u7684\u5360\u7528\u5927\u5c0f"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"SHOW VARIABLES LIKE 'query_cache_size';\n"})}),"\n",(0,r.jsx)(s.h4,{id:"4\u67e5\u770b\u67e5\u8be2\u7f13\u5b58\u7684\u72b6\u6001\u53d8\u91cf",children:"4\u3001\u67e5\u770b\u67e5\u8be2\u7f13\u5b58\u7684\u72b6\u6001\u53d8\u91cf"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"SHOW STATUS LIKE 'Qcache%';\n"})}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"\u53c2\u6570"}),(0,r.jsx)(s.th,{children:"\u542b\u4e49"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Qcache_free_blocks"}),(0,r.jsx)(s.td,{children:"\u67e5\u8be2\u7f13\u5b58\u4e2d\u7684\u53ef\u7528\u5185\u5b58\u5757\u6570"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Qcache_free_memory"}),(0,r.jsx)(s.td,{children:"\u67e5\u8be2\u7f13\u5b58\u7684\u53ef\u7528\u5185\u5b58\u91cf"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Qcache_hits"}),(0,r.jsx)(s.td,{children:"\u67e5\u8be2\u7f13\u5b58\u547d\u4e2d\u6570"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Qcache_inserts"}),(0,r.jsx)(s.td,{children:"\u6dfb\u52a0\u5230\u67e5\u8be2\u7f13\u5b58\u7684\u67e5\u8be2\u6570"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Qcache_lowmen_prunes"}),(0,r.jsx)(s.td,{children:"\u7531\u4e8e\u5185\u5b58\u4e0d\u8db3\u800c\u4ece\u67e5\u8be2\u7f13\u5b58\u4e2d\u5220\u9664\u7684\u67e5\u8be2\u6570"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Qcache_not_cached"}),(0,r.jsx)(s.td,{children:"\u975e\u7f13\u5b58\u67e5\u8be2\u7684\u6570\u91cf\uff08\u7531\u4e8e query_cache_type \u8bbe\u7f6e\u800c\u65e0\u6cd5\u7f13\u5b58\u6216\u672a\u7f13\u5b58\uff09"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Qcache_queries_in_cache"}),(0,r.jsx)(s.td,{children:"\u67e5\u8be2\u7f13\u5b58\u4e2d\u6ce8\u518c\u7684\u67e5\u8be2\u6570"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Qcache_total_blocks"}),(0,r.jsx)(s.td,{children:"\u67e5\u8be2\u7f13\u5b58\u4e2d\u7684\u5757\u603b\u6570"})]})]})]}),"\n",(0,r.jsx)(s.h2,{id:"\u4e09\u5f00\u542f\u67e5\u8be2\u7f13\u5b58",children:"\u4e09\u3001\u5f00\u542f\u67e5\u8be2\u7f13\u5b58"}),"\n",(0,r.jsx)(s.p,{children:"MySQL\u7684\u67e5\u8be2\u7f13\u5b58\u9ed8\u8ba4\u662f\u5173\u95ed\u7684\uff0c\u9700\u8981\u624b\u52a8\u914d\u7f6e\u53c2\u6570 query_cache_type \uff0c \u6765\u5f00\u542f\u67e5\u8be2\u7f13\u5b58\u3002query_cache_type\r\n\u8be5\u53c2\u6570\u7684\u53ef\u53d6\u503c\u6709\u4e09\u4e2a"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"\u503c"}),(0,r.jsx)(s.th,{children:"\u542b\u4e49"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"OFF \u6216 0"}),(0,r.jsx)(s.td,{children:"\u67e5\u8be2\u7f13\u5b58\u529f\u80fd\u5173\u95ed"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"ON \u6216 1"}),(0,r.jsx)(s.td,{children:"\u67e5\u8be2\u7f13\u5b58\u529f\u80fd\u6253\u5f00\uff0cSELECT\u7684\u7ed3\u679c\u7b26\u5408\u7f13\u5b58\u6761\u4ef6\u5373\u4f1a\u7f13\u5b58\uff0c\u5426\u5219\uff0c\u4e0d\u4e88\u7f13\u5b58\uff0c\u663e\u5f0f\u6307\u5b9a SQL_NO_CACHE\uff0c\u4e0d\u4e88\u7f13\u5b58"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"DEMAND \u6216 2"}),(0,r.jsx)(s.td,{children:"\u67e5\u8be2\u7f13\u5b58\u529f\u80fd\u6309\u9700\u8fdb\u884c\uff0c\u663e\u5f0f\u6307\u5b9a SQL_CACHE \u7684SELECT\u8bed\u53e5\u624d\u4f1a\u7f13\u5b58\uff1b\u5176\u5b83\u5747\u4e0d\u4e88\u7f13\u5b58"})]})]})]}),"\n",(0,r.jsx)(s.h4,{id:"1\u5728usrmycnf\u4e2d\u8fdb\u884c\u914d\u7f6e\u914d\u7f6e\u6587\u4ef6\u4e5f\u53ef\u80fd\u5728etcmycnf",children:"1\u3001\u5728usr/my.cnf\u4e2d\u8fdb\u884c\u914d\u7f6e(\u914d\u7f6e\u6587\u4ef6\u4e5f\u53ef\u80fd\u5728/etc/my.cnf)"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{src:"https://img-blog.csdnimg.cn/2021030611382741.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3BlZHJvN2s=,size_16,color_FFFFFF,t_70",alt:"\u914d\u7f6e"})}),"\n",(0,r.jsx)(s.h4,{id:"2\u91cd\u542f\u670d\u52a1",children:"2\u3001\u91cd\u542f\u670d\u52a1"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"systemctl restart mysqld\n"})}),"\n",(0,r.jsx)(s.h2,{id:"\u56db\u67e5\u8be2\u7f13\u5b58select\u9009\u9879",children:"\u56db\u3001\u67e5\u8be2\u7f13\u5b58SELECT\u9009\u9879"}),"\n",(0,r.jsx)(s.p,{children:"\u53ef\u4ee5\u5728SELECT\u8bed\u53e5\u4e2d\u6307\u5b9a\u4e24\u4e2a\u4e0e\u67e5\u8be2\u7f13\u5b58\u76f8\u5173\u7684\u9009\u9879"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"SQL_CACHE : \u5982\u679c\u67e5\u8be2\u7ed3\u679c\u662f\u53ef\u7f13\u5b58\u7684\uff0c\u5e76\u4e14 query_cache_type \u7cfb\u7edf\u53d8\u91cf\u7684\u503c\u4e3aON\u6216 DEMAND \uff0c\u5219\u7f13\u5b58\u67e5\u8be2 \u7ed3\u679c \u3002"}),"\n",(0,r.jsx)(s.li,{children:"SQL_NO_CACHE : \u670d\u52a1\u5668\u4e0d\u4f7f\u7528\u67e5\u8be2\u7f13\u5b58\u3002\u5b83\u65e2\u4e0d\u68c0\u67e5\u67e5\u8be2\u7f13\u5b58\uff0c\u4e5f\u4e0d\u68c0\u67e5\u7ed3\u679c\u662f\u5426\u5df2\u7f13\u5b58\uff0c\u4e5f\u4e0d\u7f13\u5b58\u67e5\u8be2\u7ed3\u679c"}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"SELECT SQL_CACUE id,name FROM customer;\r\nSELECT SQL_NO_CACHE id,name FROM customer;\n"})}),"\n",(0,r.jsx)(s.h2,{id:"\u4e94\u67e5\u8be2\u7f13\u5b58\u5931\u6548\u73b0\u8c61",children:"\u4e94\u3001\u67e5\u8be2\u7f13\u5b58\u5931\u6548\u73b0\u8c61"}),"\n",(0,r.jsx)(s.h4,{id:"1sql\u8bed\u53e5\u4e0d\u4e00\u81f4",children:"1\u3001SQL\u8bed\u53e5\u4e0d\u4e00\u81f4"}),"\n",(0,r.jsx)(s.p,{children:"\u8981\u60f3\u547d\u4e2d\u7f13\u5b58\uff0c\u67e5\u8be2\u7684SQL\u8bed\u53e5\u5fc5\u987b\u4e00\u81f4"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"SQL1:select count(*) from tb_item;\r\nSQL2:select count(*) from tb_Item;\n"})}),"\n",(0,r.jsx)(s.h4,{id:"2\u67e5\u8be2\u8bed\u53e5\u6709\u4e00\u4e9b\u4e0d\u786e\u5b9a\u7684\u503c",children:"2\u3001\u67e5\u8be2\u8bed\u53e5\u6709\u4e00\u4e9b\u4e0d\u786e\u5b9a\u7684\u503c"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"SQL1:select * from tb_item where updatetime < now() limit 1;\r\nSQL2:select user();\r\nSQL3:select database();\n"})}),"\n",(0,r.jsx)(s.h4,{id:"3\u4e0d\u4f7f\u7528\u4efb\u4f55\u8868\u67e5\u8be2\u8bed\u53e5",children:"3\u3001\u4e0d\u4f7f\u7528\u4efb\u4f55\u8868\u67e5\u8be2\u8bed\u53e5"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"select 'A';\n"})}),"\n",(0,r.jsx)(s.h4,{id:"4\u67e5\u8be2mysqlinformation_schema\u6216performance_schema\u6570\u636e\u5e93\u4e2d\u7684\u8868",children:"4\u3001\u67e5\u8be2mysql\u3001information_schema\u6216performance_schema\u6570\u636e\u5e93\u4e2d\u7684\u8868"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"select * from information_schema.engines;\n"})}),"\n",(0,r.jsx)(s.h4,{id:"5\u5728\u5b58\u50a8\u7684\u51fd\u6570\u89e6\u53d1\u5668\u6216\u4e8b\u4ef6\u4e3b\u4f53\u5185\u6267\u884c\u7684\u67e5\u8be2",children:"5\u3001\u5728\u5b58\u50a8\u7684\u51fd\u6570\u3001\u89e6\u53d1\u5668\u6216\u4e8b\u4ef6\u4e3b\u4f53\u5185\u6267\u884c\u7684\u67e5\u8be2"}),"\n",(0,r.jsx)(s.p,{children:"\u5982\u9898"}),"\n",(0,r.jsx)(s.h4,{id:"6\u8868\u66f4\u6539\u5bfc\u81f4\u7f13\u5b58\u5220\u9664",children:"6\u3001\u8868\u66f4\u6539\u5bfc\u81f4\u7f13\u5b58\u5220\u9664"}),"\n",(0,r.jsx)(s.p,{children:"\u5982\u679c\u8868\u66f4\u6539\uff0c\u5219\u4f7f\u7528\u8be5\u8868\u7684\u6240\u6709\u9ad8\u901f\u7f13\u5b58\u67e5\u8be2\u90fd\u5c06\u53d8\u4e3a\u65e0\u6548\u5e76\u4ece\u9ad8\u901f\u7f13\u5b58\u4e2d\u5220\u9664\u3002\u8fd9\u5305\u62ec\u4f7f\u7528 MERGE \u6620\u5c04\u5230 \u5df2\u66f4\u6539\u8868\u7684\u8868\u7684\u67e5\u8be2\u3002\u4e00\u4e2a\u8868\u53ef\u4ee5\u88ab\u8bb8\u591a\u7c7b\u578b\u7684\u8bed\u53e5\uff0c\u5982\u88ab\u6539\u53d8 INSERT\uff0c UPDATE\uff0c DELETE\uff0c TRUNCATE TABLE\uff0c ALTER TABLE\uff0c DROP TABLE\uff0c\u6216 DROP DATABASE \u3002"})]})}function o(e={}){const{wrapper:s}={...(0,l.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>d,x:()=>i});var c=n(6540);const r={},l=c.createContext(r);function d(e){const s=c.useContext(l);return c.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),c.createElement(l.Provider,{value:s},e.children)}}}]);