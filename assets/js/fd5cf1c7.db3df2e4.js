"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[944],{2247:(L,E,T)=>{T.r(E),T.d(E,{assets:()=>C,contentTitle:()=>n,default:()=>t,frontMatter:()=>U,metadata:()=>A,toc:()=>e});const A=JSON.parse('{"id":"\u6570\u636e\u5e93/mysql/\u5206\u533a","title":"\u5206\u533a","description":"wf_pended\u8868","source":"@site/docs/\u6570\u636e\u5e93/mysql/\u5206\u533a.md","sourceDirName":"\u6570\u636e\u5e93/mysql","slug":"/\u6570\u636e\u5e93/mysql/\u5206\u533a","permalink":"/docs/\u6570\u636e\u5e93/mysql/\u5206\u533a","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/\u6570\u636e\u5e93/mysql/\u5206\u533a.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"\u4fee\u6539mysql\u63d0\u793a\u7b26\u7684\u65b9\u5f0f","permalink":"/docs/\u6570\u636e\u5e93/mysql/\u4fee\u6539mysql\u63d0\u793a\u7b26\u7684\u65b9\u5f0f"},"next":{"title":"\u5b89\u88c5mysql\u534a\u540c\u6b65\u590d\u5236","permalink":"/docs/\u6570\u636e\u5e93/mysql/\u5b89\u88c5mysql\u534a\u540c\u6b65\u590d\u5236"}}');var r=T(4848),N=T(8453);const U={},n=void 0,C={},e=[];function a(L){const E={code:"code",p:"p",pre:"pre",...(0,N.R)(),...L.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(E.pre,{children:(0,r.jsx)(E.code,{children:"\r\nALTER TABLE `box_enter_record_archive` DROP partition p0; -- \u5220\u9664box_enter_record_archive\u8868\u4e2d\u7684\u67d0\u4e00\u4e2a\u5206\u533a\u3002\r\n\r\nALTER TABLE `box_enter_record_archive` REMOVE partitioning; -- \u5220\u9664box_enter_record_archive\u8868\u7684\u5206\u533a\u5e76\u5c06\u5176\u6062\u590d\u4e3a\u5176\u539f\u59cb\u7684\u975e\u5206\u533a\u72b6\u6001\u3002\r\n\r\nALTER TABLE `box_enter_record_archive` add partition(partition P12 values less than (to_days('2019-01-01'))); -- \u65b0\u589erange\u5206\u533a\r\n\r\n\u666e\u901a\u8868\u6570\u636e\u8fc1\u79fb\u5230\u5206\u533a\u8868\uff1ainsert into wf_pending_tmp select * from wf_pending;\r\n\u6d4b\u8bd5\u5206\u533a\u529f\u80fd\uff1aexplain partitions select * from wf_pending;\n"})}),"\n",(0,r.jsx)(E.pre,{children:(0,r.jsx)(E.code,{children:"CREATE TABLE wf_pending_tmp ( \r\n  `ID` varchar(64)  CHARACTER SET utf8 COLLATE utf8_general_ci  NOT NULL COMMENT '\u5f85\u529eID',\r\n  `BCODE` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '\u4e1a\u52a1\u7f16\u53f7',\r\n  `BNAME` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '\u4e1a\u52a1\u540d\u79f0',\r\n  `TASKID` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '\u6d41\u7a0b\u4efb\u52a1ID',\r\n  `TYPECODE` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '\u6b65\u9aa4\u7f16\u53f7',\r\n  `ITEMID` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '\u8282\u70b9\u7f16\u53f7',\r\n  `ITEMNAME` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '\u8282\u70b9\u540d\u79f0',\r\n  `PENDTITLE` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '\u5f85\u529e\u6807\u9898',\r\n  `APPRECORDID` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '\u4e1a\u52a1\u6570\u636e\u8bb0\u5f55ID',\r\n  `PROCESSKEY` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '\u6d41\u7a0bkey',\r\n  `PENDSTATE` decimal(11, 0) NULL DEFAULT NULL COMMENT '\u6d41\u7a0b\u72b6\u6001(-1:\u9884\u5907;0:\u672a\u7b7e\u6536;1:\u5df2\u7b7e\u6536;2:\u5df2\u5b8c\u6210)',\r\n  `DELETED` decimal(11, 0) NULL DEFAULT NULL COMMENT '\u5220\u9664\u72b6\u6001',\r\n  `CREATETIME` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '\u521b\u5efa\u65f6\u95f4',\r\n  `SIGNTIME` datetime(0) NULL DEFAULT NULL COMMENT '\u7b7e\u6536\u65f6\u95f4',\r\n  `USERID` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '\u5f85\u529e(\u5f85\u9605)\u4eba\u5458id',\r\n  `DEPTID` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '\u5f85\u529e(\u5f85\u9605)\u4eba\u5458\u90e8\u95e8id',\r\n  `ORGID` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '\u5f85\u529e(\u5f85\u9605)\u4eba\u5458\u5355\u4f4did',\r\n  `SIGNPERSONID` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '\u7b7e\u6536\u4ebaID',\r\n  `SIGNDEPTID` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '\u7b7e\u6536\u4eba\u5458\u90e8\u95e8id',\r\n  `SINGORGID` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '\u7b7e\u6536\u4eba\u5458\u5355\u4f4did',\r\n  `SUBCENTERID` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '\u5206\u4e2d\u5fc3id',\r\n  `ISINSTANCY` decimal(11, 0) NULL DEFAULT NULL COMMENT '\u7d27\u6025\u7a0b\u5ea6(0:\u666e\u901a;1:\u7d27\u6025;2:\u52a0\u60253:\u7279\u6025;)',\r\n  `DOENDTIME` datetime(0) NULL DEFAULT NULL COMMENT '\u529e\u7406\u9650\u65f6\u7ed3\u675f\u65f6\u95f4',\r\n  `STATECHANGETIME` datetime(0) NULL DEFAULT NULL COMMENT '\u6700\u540e\u72b6\u6001\u66f4\u65b0\u65f6\u95f4',\r\n  `MOBILEKEY` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '\u624b\u673a\u5ba2\u6237\u6807\u8bc6',\r\n  `IP` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '\u5ba2\u6237\u7aefIP',\r\n  `PENDINGURL` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '\u529e\u7406url\u5730\u5740',\r\n  `READURL` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '\u67e5\u9605url\u5730\u5740',\r\n  `PENDINGATTR` decimal(11, 0) NULL DEFAULT NULL COMMENT '\u5c5e\u6027(0:\u5f85\u529e;1:\u5f85\u9605)',\r\n  `TASKTYPE` decimal(11, 0) NULL DEFAULT NULL COMMENT '\u4efb\u52a1\u7c7b\u578b(0:\u666e\u901a\u4efb\u52a1;1:\u9a73\u56de\u4efb\u52a1;2:\u4e32\u884c\u4efb\u52a1;3:\u5e76\u884c\u4efb\u52a1;4:\u8fd4\u56de\u4efb\u52a1)',\r\n  `INITIATORUSERID` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '\u53d1\u8d77\u4eba\u5458id',\r\n  `INITIATORDEPTID` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '\u53d1\u8d77\u4eba\u5458\u90e8\u95e8id',\r\n  `INITIATORORGID` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '\u53d1\u8d77\u4eba\u5458\u5355\u4f4did',\r\n  `TYPECODECLASS` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '\u6b65\u9aa4\u7c7b\u578b(1:\u8d77\u59cb\u6b65\u9aa4\u30012:\u4e2d\u95f4\u6b65\u9aa4\u30013:\u7ed3\u675f\u6b65\u9aa4\u30014:\u4f20\u9605\u6b65\u9aa4\u30015:\u5206\u9605\u6b65\u9aa4\uff09',\r\n  `DRAFTERUSERID` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '\u62df\u7a3f\u4eba',\r\n  `QUERYKEYWORDS` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '\u67e5\u8be2\u5173\u952e\u5b57',\r\n  `APPID` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '\u5b9e\u4f8bid',\r\n  `ORDERNUM` decimal(11, 0) NULL DEFAULT NULL COMMENT '\u5f85\u529e\u987a\u5e8f',\r\n  `PARENTITEM` varchar(4000) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,\r\n  `HANDLEINFO` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '\u529e\u7406\u8bf4\u660e',\r\n  `nodesign` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,\r\n  `BELONG_APP_ID` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,\r\n  `SUB_APP_ID` varchar(8000) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,\r\n  `PRESSTIMES` int(10) NULL DEFAULT 0 COMMENT '\u50ac\u529e\u6b21\u6570',\r\n  `BUSINESSINFO` varchar(1000) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,\r\n  `USERNAME` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '\u5f85\u529e\u4eba\u540d\u79f0',\r\n  `DEPTNAME` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '\u5f85\u529e\u4eba\u90e8\u95e8\u540d\u79f0',\r\n  `ORGNAME` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '\u5f85\u529e\u4eba\u5355\u4f4d\u540d\u79f0',\r\n  `SIGNPERSONNAME` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '\u7b7e\u6536\u4eba\u540d\u79f0',\r\n  `SIGNDEPTNAME` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '\u7b7e\u6536\u4eba\u90e8\u95e8\u540d\u79f0',\r\n  `SINGORGNAME` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '\u7b7e\u6536\u4eba\u5355\u4f4d\u540d\u79f0',\r\n  `DOUSERNAME` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '\u529e\u7406\u4eba\u540d\u79f0',\r\n  `DODEPTNAME` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '\u529e\u7406\u4eba\u90e8\u95e8\u540d\u79f0',\r\n  `DOORGNAME` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '\u529e\u7406\u4eba\u5355\u4f4d\u540d\u79f0',\r\n  `STRFILED1` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,\r\n  `SHOW_DORESULT` int(5) NULL DEFAULT NULL COMMENT '\u5206\u9605\u662f\u5426\u80fd\u770b\u5386\u53f2\u8bb0\u5f55\u30020:\u662f\uff0c1\uff1a\u5426',\r\n  `PERSON_ID` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '\u5f85\u529e\u4ebapersonId',\r\n  `DO_RESULT` varchar(2000) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '\u6682\u5b58\u7684\u529e\u7406\u610f\u89c1',\r\n  `not_master_node` int(2) NULL DEFAULT NULL COMMENT '\u975e\u4e3b\u8981\u8282\u70b9',\r\n  `is_supervise_node` smallint(6) NULL DEFAULT NULL,\r\n  `role_code` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,\r\n  `sys_mark` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,\r\n  `APP_READ_URL` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,\r\n  `APP_PENDING_URL` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,\r\n  `show_type` int(11) NULL DEFAULT NULL,\r\n  `handle_type` int(11) NULL DEFAULT NULL,\r\n  `batch_handle` smallint(6) NULL DEFAULT NULL,\r\n  `json_data` mediumtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL,\r\n  `flow_type` smallint(6) NULL DEFAULT NULL,\r\n  PRIMARY KEY (`ID`,`CREATETIME`) USING BTREE,\r\n  INDEX `wf_id`(`ID`) USING BTREE,\r\n  INDEX `wf_index_appid`(`APPID`) USING BTREE,\r\n  INDEX `index_oa_wf_deleted`(`DELETED`) USING BTREE,\r\n  INDEX `index_oa_wf_doendtime`(`DOENDTIME`) USING BTREE,\r\n  INDEX `index_oa_wf_itemid`(`ITEMID`) USING BTREE,\r\n  INDEX `index_oa_wf_pendingattr`(`PENDINGATTR`) USING BTREE,\r\n  INDEX `index_oa_wf_pendstate`(`PENDSTATE`) USING BTREE,\r\n  INDEX `index_oa_wf_taskid`(`TASKID`) USING BTREE,\r\n  INDEX `pengding_apprecordid`(`APPRECORDID`) USING BTREE,\r\n  INDEX `sigid_index`(`SIGNPERSONID`) USING BTREE,\r\n  INDEX `index_userid`(`USERID`) USING BTREE\r\n)\r\n\r\n\r\nPARTITION BY RANGE ( UNIX_TIMESTAMP(CREATETIME) ) (\r\n\r\n\r\n    PARTITION p0 VALUES LESS THAN ( UNIX_TIMESTAMP('2018-01-01 00:00:00') ),\r\n    PARTITION p1 VALUES LESS THAN ( UNIX_TIMESTAMP('2018-04-01 00:00:00') ),\r\n    PARTITION p2 VALUES LESS THAN ( UNIX_TIMESTAMP('2018-07-01 00:00:00') ),\r\n    PARTITION p3 VALUES LESS THAN ( UNIX_TIMESTAMP('2018-10-01 00:00:00') ),\r\n    PARTITION p4 VALUES LESS THAN ( UNIX_TIMESTAMP('2019-01-01 00:00:00') ),\r\n    PARTITION p5 VALUES LESS THAN ( UNIX_TIMESTAMP('2019-04-01 00:00:00') ),\r\n    PARTITION p6 VALUES LESS THAN ( UNIX_TIMESTAMP('2019-07-01 00:00:00') ),\r\n    PARTITION p7 VALUES LESS THAN ( UNIX_TIMESTAMP('2019-10-01 00:00:00') ),\r\n    PARTITION p8 VALUES LESS THAN ( UNIX_TIMESTAMP('2020-01-01 00:00:00') ),\r\n\t\tPARTITION p9 VALUES LESS THAN ( UNIX_TIMESTAMP('2020-04-01 00:00:00') ),\r\n\t\tPARTITION p10 VALUES LESS THAN ( UNIX_TIMESTAMP('2020-07-01 00:00:00') ),\r\n\t  PARTITION p11 VALUES LESS THAN ( UNIX_TIMESTAMP('2020-10-01 00:00:00') ),\r\n\t\tPARTITION p12 VALUES LESS THAN ( UNIX_TIMESTAMP('2021-01-01 00:00:00') ),\r\n\t\tPARTITION p13 VALUES LESS THAN ( UNIX_TIMESTAMP('2021-04-01 00:00:00') ),\r\n\t\tPARTITION p14 VALUES LESS THAN ( UNIX_TIMESTAMP('2021-07-01 00:00:00') ),\r\n\t\tPARTITION p15 VALUES LESS THAN ( UNIX_TIMESTAMP('2021-10-01 00:00:00') ),\r\n    PARTITION p16 VALUES LESS THAN (MAXVALUE)\r\n);\r\n\n"})}),"\n",(0,r.jsx)(E.p,{children:"wf_pended\u8868"}),"\n",(0,r.jsx)(E.pre,{children:(0,r.jsx)(E.code,{children:"CREATE TABLE `wf_pended_tmp`  (\r\n  `ID` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '\u5f85\u529eID',\r\n  `BCODE` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '\u4e1a\u52a1\u7f16\u53f7',\r\n  `BNAME` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '\u4e1a\u52a1\u540d\u79f0',\r\n  `TASKID` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '\u6d41\u7a0b\u4efb\u52a1ID',\r\n  `TYPECODE` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '\u6b65\u9aa4\u7f16\u53f7',\r\n  `ITEMID` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '\u8282\u70b9\u7f16\u53f7',\r\n  `ITEMNAME` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '\u8282\u70b9\u540d\u79f0',\r\n  `PENDTITLE` varchar(2000) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '\u5df2\u529e\u6807\u9898',\r\n  `APPRECORDID` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '\u4e1a\u52a1\u6570\u636e\u8bb0\u5f55ID',\r\n  `PROCESSKEY` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '\u6d41\u7a0bkey',\r\n  `PENDSTATE` decimal(11, 0) NULL DEFAULT NULL COMMENT '\u6d41\u7a0b\u72b6\u6001(-1:\u9884\u5907;0:\u672a\u7b7e\u6536;1:\u5df2\u7b7e\u6536;2:\u5df2\u5b8c\u6210)',\r\n  `DELETED` decimal(11, 0) NULL DEFAULT NULL COMMENT '\u5220\u9664\u72b6\u6001',\r\n  `CREATETIME` datetime(0) NOT NULL COMMENT '\u521b\u5efa\u65f6\u95f4',\r\n  `SIGNTIME` datetime(0) NULL DEFAULT NULL COMMENT '\u7b7e\u6536\u65f6\u95f4',\r\n  `USERID` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '\u5f85\u529e\u4eba\u5458id',\r\n  `DEPTID` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '\u5f85\u529e\u4eba\u5458\u90e8\u95e8',\r\n  `ORGID` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '\u5f85\u529e\u4eba\u5458\u5355\u4f4did',\r\n  `SIGNPERSONID` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '\u7b7e\u6536\u4ebaID',\r\n  `SIGNDEPTID` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '\u7b7e\u6536\u4eba\u5458\u90e8\u95e8id',\r\n  `SINGORGID` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '\u7b7e\u6536\u4eba\u5458\u5355\u4f4did',\r\n  `SUBCENTERID` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '\u5206\u4e2d\u5fc3id',\r\n  `ISINSTANCY` decimal(11, 0) NULL DEFAULT NULL COMMENT '\u7d27\u6025\u7a0b\u5ea6(0:\u666e\u901a;1:\u7d27\u6025;2:\u52a0\u60253:\u7279\u6025;)',\r\n  `DOENDTIME`   TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '\u529e\u7406\u9650\u65f6\u7ed3\u675f\u65f6\u95f4',\r\n  `STATECHANGETIME` datetime(0) NOT NULL COMMENT '\u6700\u540e\u72b6\u6001\u66f4\u65b0\u65f6\u95f4',\r\n  `MOBILEKEY` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '\u624b\u673a\u5ba2\u6237\u6807\u8bc6',\r\n  `IP` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '\u5ba2\u6237\u7aefIP',\r\n  `PENDINGURL` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '\u529e\u7406url\u5730\u5740',\r\n  `READURL` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '\u67e5\u9605url\u5730\u5740',\r\n  `DOUSERID` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '\u529e\u7406\u4eba\u5458id',\r\n  `DODEPTID` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '\u529e\u7406\u4eba\u5458\u90e8\u95e8id',\r\n  `DOORGID2` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '\u529e\u7406\u4eba\u5458\u5355\u4f4did',\r\n  `DOETIME` datetime(0) NULL DEFAULT NULL COMMENT '\u6700\u8fd1\u529e\u7406\u65f6\u95f4',\r\n  `DORESULT` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '\u6700\u8fd1\u529e\u7406\u610f\u89c1',\r\n  `PENDINGATTR` decimal(11, 0) NULL DEFAULT NULL COMMENT '\u5c5e\u6027(0:\u5df2\u529e;1:\u5df2\u9605)',\r\n  `DRAFTERUSERID` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '\u62df\u7a3f\u4eba',\r\n  `TYPECODECLASS` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '\u6b65\u9aa4\u7c7b\u578b(1:\u8d77\u59cb\u6b65\u9aa4\u30012:\u4e2d\u95f4\u6b65\u9aa4\u30013:\u7ed3\u6574\u6b65\u9aa4\u30014:\u4f20\u9605\u6b65\u9aa4\u30015:\u5206\u9605\u6b65\u9aa4\uff09',\r\n  `QUERYKEYWORDS` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '\u67e5\u8be2\u5173\u952e\u5b57',\r\n  `DEPTH` decimal(11, 0) NULL DEFAULT NULL COMMENT '\u5c42\u6b21',\r\n  `PARENTITEM` varchar(4000) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,\r\n  `TASKTYPE` decimal(11, 0) NULL DEFAULT NULL COMMENT '\u4efb\u52a1\u7c7b\u578b(0:\u666e\u901a\u4efb\u52a1;1:\u9a73\u56de\u4efb\u52a1;2:\u4e32\u884c\u4efb\u52a1;3:\u5e76\u884c\u4efb\u52a1)',\r\n  `APPID` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '\u6d41\u7a0b\u5b9e\u4f8bid',\r\n  `PRESSTIMES` int(10) NULL DEFAULT 0 COMMENT '\u50ac\u529e\u6b21\u6570',\r\n  `USERNAME` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '\u5f85\u529e\u4eba\u540d\u79f0',\r\n  `DEPTNAME` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '\u5f85\u529e\u4eba\u90e8\u95e8\u540d\u79f0',\r\n  `ORGNAME` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '\u5f85\u529e\u4eba\u5355\u4f4d\u540d\u79f0',\r\n  `SIGNPERSONNAME` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '\u7b7e\u6536\u4eba\u540d\u79f0',\r\n  `SIGNDEPTNAME` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '\u7b7e\u6536\u4eba\u90e8\u95e8\u540d\u79f0',\r\n  `SINGORGNAME` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '\u7b7e\u6536\u4eba\u5355\u4f4d\u540d\u79f0',\r\n  `DOUSERNAME` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '\u529e\u7406\u4eba\u540d\u79f0',\r\n  `DODEPTNAME` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '\u529e\u7406\u4eba\u90e8\u95e8\u540d\u79f0',\r\n  `DOORGNAME` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '\u529e\u7406\u4eba\u5355\u4f4d\u540d\u79f0',\r\n  `INITIATORUSERID` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '\u53d1\u8d77\u4ebaid',\r\n  `INITIATORDEPTID` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '\u53d1\u8d77\u4eba\u5458\u90e8\u95e8id',\r\n  `INITIATORORGID` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '\u53d1\u8d77\u4eba\u5458\u5355\u4f4did',\r\n  `NEXTTASKID` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '\u4e0b\u6b65\u4efb\u52a1id',\r\n  `nodesign` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,\r\n  `strfiled1` varchar(2000) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '\u6269\u5c55\u5b57\u6bb5\uff0c\u7528\u4e8e\u8de8\u5355\u4f4d\u8c03\u52a8\u5df2\u529e\u6807\u8bc6',\r\n  `SHOW_DORESULT` int(5) NULL DEFAULT NULL COMMENT '\u5206\u9605\u662f\u5426\u80fd\u770b\u5386\u53f2\u8bb0\u5f55\u30020:\u662f\uff0c1\uff1a\u5426',\r\n  `PERSON_ID` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '\u5f85\u529e\u4ebapersonId',\r\n  `DO_RESULT` varchar(2000) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '\u6682\u5b58\u7684\u529e\u7406\u610f\u89c1',\r\n  `sys_mark` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,\r\n  `app_read_url` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,\r\n  `show_type` int(11) NULL DEFAULT NULL,\r\n  `handle_type` int(11) NULL DEFAULT NULL,\r\n  `json_data` mediumtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL,\r\n  `flow_type` smallint(6) NULL DEFAULT NULL,\r\n  PRIMARY KEY (`ID`,`DOENDTIME`) USING BTREE,\r\n\t INDEX `index_id`(`ID`) USING BTREE,\r\n  INDEX `index_douserid`(`DOUSERID`) USING BTREE,\r\n  INDEX `index_wf_doetime`(`DOETIME`) USING BTREE,\r\n  INDEX `index_wf_userid`(`USERID`) USING BTREE,\r\n  INDEX `index_workflow_apprecordid`(`APPRECORDID`) USING BTREE,\r\n  INDEX `index_wf_appid`(`APPID`) USING BTREE,\r\n  INDEX `index_wf_douserid`(`DOUSERID`) USING BTREE,\r\n  INDEX `index_deleted`(`DELETED`) USING BTREE\r\n) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '\u6700\u540e\u5df2\u529e\u8bb0\u5f55' ROW_FORMAT = Dynamic\r\n\r\n\r\nPARTITION BY RANGE ( UNIX_TIMESTAMP(DOENDTIME) ) (\r\n\r\n\r\n    PARTITION p0 VALUES LESS THAN ( UNIX_TIMESTAMP('2018-01-01 00:00:00') ),\r\n    PARTITION p1 VALUES LESS THAN ( UNIX_TIMESTAMP('2018-04-01 00:00:00') ),\r\n    PARTITION p2 VALUES LESS THAN ( UNIX_TIMESTAMP('2018-07-01 00:00:00') ),\r\n    PARTITION p3 VALUES LESS THAN ( UNIX_TIMESTAMP('2018-10-01 00:00:00') ),\r\n    PARTITION p4 VALUES LESS THAN ( UNIX_TIMESTAMP('2019-01-01 00:00:00') ),\r\n    PARTITION p5 VALUES LESS THAN ( UNIX_TIMESTAMP('2019-04-01 00:00:00') ),\r\n    PARTITION p6 VALUES LESS THAN ( UNIX_TIMESTAMP('2019-07-01 00:00:00') ),\r\n    PARTITION p7 VALUES LESS THAN ( UNIX_TIMESTAMP('2019-10-01 00:00:00') ),\r\n    PARTITION p8 VALUES LESS THAN ( UNIX_TIMESTAMP('2020-01-01 00:00:00') ),\r\n\t\tPARTITION p9 VALUES LESS THAN ( UNIX_TIMESTAMP('2020-04-01 00:00:00') ),\r\n\t\tPARTITION p10 VALUES LESS THAN ( UNIX_TIMESTAMP('2020-07-01 00:00:00') ),\r\n\t  PARTITION p11 VALUES LESS THAN ( UNIX_TIMESTAMP('2020-10-01 00:00:00') ),\r\n\t\tPARTITION p12 VALUES LESS THAN ( UNIX_TIMESTAMP('2021-01-01 00:00:00') ),\r\n\t\tPARTITION p13 VALUES LESS THAN ( UNIX_TIMESTAMP('2021-04-01 00:00:00') ),\r\n\t\tPARTITION p14 VALUES LESS THAN ( UNIX_TIMESTAMP('2021-07-01 00:00:00') ),\r\n\t\tPARTITION p15 VALUES LESS THAN ( UNIX_TIMESTAMP('2021-10-01 00:00:00') ),\r\n    PARTITION p16 VALUES LESS THAN (MAXVALUE)\r\n);\n"})})]})}function t(L={}){const{wrapper:E}={...(0,N.R)(),...L.components};return E?(0,r.jsx)(E,{...L,children:(0,r.jsx)(a,{...L})}):a(L)}},8453:(L,E,T)=>{T.d(E,{R:()=>U,x:()=>n});var A=T(6540);const r={},N=A.createContext(r);function U(L){const E=A.useContext(N);return A.useMemo((function(){return"function"==typeof L?L(E):{...E,...L}}),[E,L])}function n(L){let E;return E=L.disableParentContext?"function"==typeof L.components?L.components(r):L.components||r:U(L.components),A.createElement(N.Provider,{value:E},L.children)}}}]);