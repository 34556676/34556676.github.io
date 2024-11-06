"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7669],{3954:(n,r,e)=>{e.r(r),e.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>a,toc:()=>_});const a=JSON.parse('{"id":"\u6570\u636e\u5e93/mysql/innodbbackup\u5907\u4efd","title":"innodbbackup\u5907\u4efd","description":"","source":"@site/docs/\u6570\u636e\u5e93/mysql/innodbbackup\u5907\u4efd.md","sourceDirName":"\u6570\u636e\u5e93/mysql","slug":"/\u6570\u636e\u5e93/mysql/innodbbackup\u5907\u4efd","permalink":"/docs/\u6570\u636e\u5e93/mysql/innodbbackup\u5907\u4efd","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/\u6570\u636e\u5e93/mysql/innodbbackup\u5907\u4efd.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"databakfull","permalink":"/docs/\u6570\u636e\u5e93/mysql/databakfull"},"next":{"title":"my.conf","permalink":"/docs/\u6570\u636e\u5e93/mysql/my.conf"}}');var t=e(4848),s=e(8453);const l={},o=void 0,c={},_=[];function i(n){const r={code:"code",pre:"pre",...(0,s.R)(),...n.components};return(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-shell",children:'#!/bin/sh\r\n#===================================================================================================\r\n## \u5907\u4efd\u5de5\u5177\uff1a\r\n##  percona-xtrabackup-2.2.6\r\n##\r\n## \u5907\u4efd\u7b56\u7565\uff1a\r\n##  (1)\u3001\u6bcf\u5468\u51cc\u666801:20\u70b9\u8fdb\u884c\u5168\u91cf\u5907\u4efd\u4e00\u6b21\uff1b\r\n##  (2)\u3001\u6bcf\u54681-6\u51cc\u666801:20\u589e\u91cf\u5907\u4efd\u4e00\u6b21\uff1b\r\n##\r\n#===================================================================================================\r\nPATH=/sbin:/bin:/usr/sbin:/usr/bin:/usr/local/bin:/usr/local/sbin\r\n \r\n## DB\u5907\u4efd\u57fa\u8def\u5f84\r\nBACKUP_BASE_DIR="/data/mysql_backup"\r\n \r\n## \u589e\u91cf\u5907\u4efd\u65f6\uff0c\u7528\u5230\u7684\u57fa\u51c6\u76ee\u5f55\u5217\u8868\u6587\u4ef6\r\n## \u5185\u5bb9\u683c\u5f0f\uff1a\u57fa\u51c6\u76ee\u5f55|\u672c\u6b21\u5907\u4efd\u76ee\u5f55|\u5907\u4efd\u7c7b\u578b\u3010full|inc\u3011\r\nINC_BASE_LIST="${BACKUP_BASE_DIR}/incremental_basedir_list.txt"\r\n \r\n## \u5907\u4efd\u5de5\u5177\u8def\u5f84\r\nXTRABACKUP_PATH="/usr/bin/innobackupex"\r\n \r\n## MySQL\u914d\u7f6e\u8def\u5f84\r\nMYSQL_CNF_PATH="/etc/my.cnf"\r\n\r\n## MYSQL\u5907\u4efd\u7528\u6237\u540d\r\nMYSQL_USER=root\r\n\r\n## MYSQL\u5907\u4efd\u7528\u6237\u5bc6\u7801\r\nMYSQL_PASSWORD=w1ses0ft \r\n## \u7ebf\u7a0b\u6570\r\nTHREAD_CNT=6\r\n \r\n#===================================================================================================\r\nfunction print_help_info()\r\n{\r\n  echo "--------------------------------------------------------------"\r\n  echo "Usage: $0 full | inc | help"\r\n  echo "--------------------------------------------------------------"\r\n  echo ""\r\n  exit 1\r\n}\r\n \r\n[[ $# -lt 1 ]] && print_help_info\r\n[[ -d ${BACKUP_BASE_DIR} ]] || mkdir -p ${BACKUP_BASE_DIR}\r\n \r\n## xtrabackup\u57fa\u7840\u5957\u4ef6\u4e0d\u5b58\u5728\u65f6\uff0c\u8fdb\u884c\u81ea\u52a8\u4e0b\u8f7d\u5b89\u88c5\r\nif [[ ! -e ${XTRABACKUP_PATH} ]]; then\r\n  cd /usr/local\r\n  wget -q -O xtrabackup-2.2.6.tgz http://www.percona.com/redir/downloads/XtraBackup/LATEST/binary/tarball/percona-xtrabackup-2.2.6-5042-Linux-x86_64.tar.gz\r\n  tar xvzf xtrabackup-2.2.6.tgz >/dev/null 2>&1 && rm -f xtrabackup-2.2.6.tgz\r\n  mv percona-xtrabackup-2.2.6-Linux-x86_64 xtrabackup-2.2.6\r\n  rm -rf xtrabackup && ln -s xtrabackup-2.2.6 xtrabackup\r\n   \r\n  for FNAME in `ls -1t /usr/local/xtrabackup/bin`\r\n  do\r\n    rm -f /usr/bin/${FNAME} && ln -s /usr/local/xtrabackup/bin/${FNAME} /usr/bin/${FNAME}\r\n  done\r\nfi\r\n \r\n## \u53ea\u5141\u8bb8\u4e00\u4e2a\u526f\u672c\u8fd0\u884c\uff0c\u4ee5\u907f\u514d\u5168\u91cf\u5907\u4efd\u4e0e\u589e\u91cf\u5907\u4efd\u51fa\u73b0\u4ea4\u53c9\uff0c\u53d1\u751f\u6570\u636e\u9519\u4e71\u7684\u53ef\u80fd\u6027\r\n##[[ -n `ps uax | grep innobackupex | grep -v grep` ]] && exit 1\r\n \r\n## \u76ee\u5f55\u540d\u9ed8\u8ba4\u7cbe\u786e\u5230\u5206\u949f\uff0c\u4e3a\u907f\u514d\u610f\u5916\u60c5\u51b5\uff0c\u5bfc\u81f4\u5907\u4efd\u4efb\u52a1\u5931\u8d25\uff0c\u53ef\u4ee5\u7cbe\u786e\u5230\u79d2\r\nCURRENT_BAK_PATH="${BACKUP_BASE_DIR}/"`date +%F_%H-%M`\r\n[[ -d ${CURRENT_BAK_PATH} ]] && CURRENT_BAK_PATH="${BACKUP_BASE_DIR}/"`date +%F_%H-%M-%S`\r\n \r\n#===================================================================================================\r\n## \u5168\u91cf\u5907\u4efd\r\nif [[ "$1" == "full" ]]; then\r\n  ${XTRABACKUP_PATH} --defaults-file=${MYSQL_CNF_PATH} --user=${MYSQL_USER} --password=${MYSQL_PASSWORD} --parallel=${THREAD_CNT} --no-timestamp ${CURRENT_BAK_PATH}\r\n  echo "NULL|${CURRENT_BAK_PATH}|full" >> ${INC_BASE_LIST}\r\n \r\n## \u589e\u91cf\u5907\u4efd\r\nelif [[ "$1" == "inc" ]]; then\r\n  ## \u57fa\u51c6\u76ee\u5f55\u5217\u8868\u6587\u4ef6\u4e0d\u5b58\u5728\u6216\u8005\u4e3a\u7a7a\u7684\u60c5\u51b5\uff0c\u9700\u8981\u505a\u4e00\u6b21\u5168\u91cf\u5907\u4efd\r\n  if [[ ! -f ${INC_BASE_LIST} || `sed \'/^$/d\' ${INC_BASE_LIST} | wc -l` -eq 0 ]]; then\r\n    ${XTRABACKUP_PATH} --defaults-file=${MYSQL_CNF_PATH} --user=${MYSQL_USER} --password=${MYSQL_PASSWORD} --parallel=${THREAD_CNT} --no-timestamp ${CURRENT_BAK_PATH}\r\n    echo "NULL|${CURRENT_BAK_PATH}|full" >> ${INC_BASE_LIST}\r\n   \r\n  ## \u4e0d\u5b58\u5728\u4efb\u4f55\u76ee\u5f55\u7684\u60c5\u51b5\uff0c\u9700\u8981\u505a\u4e00\u6b21\u5168\u91cf\u5907\u4efd\uff0c\u4ee5\u907f\u514d\u589e\u91cf\u5907\u4efd\u5931\u8d25\r\n  elif [[ `find ${BACKUP_BASE_DIR} -maxdepth 1 -type d | wc -l` -eq 1 ]]; then\r\n    ${XTRABACKUP_PATH} --defaults-file=${MYSQL_CNF_PATH} --user=${MYSQL_USER} --password=${MYSQL_PASSWORD} --parallel=${THREAD_CNT} --no-timestamp ${CURRENT_BAK_PATH}\r\n    echo "NULL|${CURRENT_BAK_PATH}|full" >> ${INC_BASE_LIST}\r\n   \r\n  ## \u5728\u4e0a\u4e00\u6b21\u5907\u4efd\u7684\u57fa\u7840\u4e0a\uff0c\u8fdb\u884c\u589e\u91cf\u5907\u4efd\r\n  else\r\n    PREV_BACKUP_DIR=`sed \'/^$/d\' ${INC_BASE_LIST} | tail -1 | awk -F \'|\' \'{print $2}\'`\r\n    ## \u4e0a\u6b21\u7684\u5907\u4efd\u76ee\u5f55\u4e0d\u5b58\u5728\u6216\u8005\u76ee\u5f55\u4e3a\u7a7a\u7684\u60c5\u51b5\uff0c\u4ee5\u907f\u514d\u4eba\u4e3a\u5220\u9664\u7684\u53ef\u80fd\u6027\u3010\u9488\u5bf9\u90e8\u5206\u6076\u610f\u5220\u9664\u7684\u60c5\u51b5\uff0c\u76ee\u524d\u8fd8\u6ca1\u6709\u8f83\u597d\u7684\u68c0\u67e5\u65b9\u6cd5\u3011\r\n    if [[ ! -d ${PREV_BACKUP_DIR} || -z `ls ${PREV_BACKUP_DIR}` ]]; then\r\n      ${XTRABACKUP_PATH} --defaults-file=${MYSQL_CNF_PATH} --user=${MYSQL_USER} --password=${MYSQL_PASSWORD} --parallel=${THREAD_CNT} --no-timestamp ${CURRENT_BAK_PATH}\r\n      echo "NULL|${CURRENT_BAK_PATH}|full" >> ${INC_BASE_LIST}\r\n    else\r\n      ${XTRABACKUP_PATH} --defaults-file=${MYSQL_CNF_PATH} --user=${MYSQL_USER} --password=${MYSQL_PASSWORD} --parallel=${THREAD_CNT} --no-timestamp --incremental ${CURRENT_BAK_PATH} --incremental-basedir=${PREV_BACKUP_DIR}\r\n      echo "${PREV_BACKUP_DIR}|${CURRENT_BAK_PATH}|inc" >> ${INC_BASE_LIST}\r\n    fi\r\n  fi\r\n \r\nelif [[ "$1" == "help" ]]; then\r\n  print_help_info\r\n \r\nelse\r\n  print_help_info\r\nfi\r\n \r\n## \u5220\u96642\u5468\u524d\u7684\u6570\u636e\u5907\u4efd\r\nrm -rf ${BACKUP_BASE_DIR}/`date -d \'14 days ago\' +\'%F\'`_*\r\nsed -i "/`date -d \'14 days ago\' +\'%F\'`/d" ${INC_BASE_LIST}\r\n \r\n#===================================================================================================\r\n##The End\r\n \r\n####################################################################################################\r\n## \u9700\u8981\u6dfb\u52a0\u7684crontab\u4fe1\u606f\uff1a\r\n##   (1)\u3001\u5168\u91cf\u5907\u4efd\r\n##   20 01 * * 0 /data/scripts/mysql_backup.sh full >/dev/null 2>&1\r\n##\r\n##   (2)\u3001\u589e\u91cf\u5907\u4efd\r\n##   20 01 * * 1-6 /data/scripts/mysql_backup.sh inc >/dev/null 2>&1\r\n##\r\n####################################################################################################\r\n \r\n####################################################################################################\r\n## DB\u6570\u636e\u6062\u590d\u6b65\u9aa4\uff1a\r\n##  (1)\u3001\u5e94\u7528\u57fa\u51c6\r\n##  innobackupex  --defaults-file=/etc/my.cnf --user=root --password=w1ses0ft --use-memory=8G --apply-log --redo-only /data/mysql_backup/full\r\n##\r\n##  (2)\u3001\u5e94\u7528\u7b2c\u4e00\u4e2a\u589e\u91cf\u5907\u4efd\r\n##  innobackupex  --defaults-file=/etc/my.cnf --user=root --password=w1ses0ft --use-memory=8G --apply-log --redo-only /data/mysql_backup/full --incremental-dir=/data/mysql_backup/inc_one\r\n##\r\n##  (3)\u3001\u5e94\u7528\u7b2c\u4e8c\u4e2a\u589e\u91cf\u5907\u4efd\r\n##  innobackupex  --defaults-file=/etc/my.cnf --user=root --password=w1ses0ft --use-memory=8G --apply-log /data/mysql_backup/full --incremental-dir=/data/mysql_backup/inc_two\r\n##\r\n##  (4)\u3001\u518d\u6b21\u5e94\u7528\u57fa\u51c6\r\n##  innobackupex --defaults-file=/etc/my.cnf --user=root --password=w1ses0ft --use-memory=8G --apply-log /data/mysql_backup/full\r\n##\r\n##  (5)\u3001\u6062\u590d\r\n##  innobackupex --defaults-file=/etc/my.cnf --user=root --password=w1ses0ft --copy-back /data/mysql_backup/full\r\n####################################################################################################\n'})})}function u(n={}){const{wrapper:r}={...(0,s.R)(),...n.components};return r?(0,t.jsx)(r,{...n,children:(0,t.jsx)(i,{...n})}):i(n)}},8453:(n,r,e)=>{e.d(r,{R:()=>l,x:()=>o});var a=e(6540);const t={},s=a.createContext(t);function l(n){const r=a.useContext(s);return a.useMemo((function(){return"function"==typeof n?n(r):{...r,...n}}),[r,n])}function o(n){let r;return r=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:l(n.components),a.createElement(s.Provider,{value:r},n.children)}}}]);