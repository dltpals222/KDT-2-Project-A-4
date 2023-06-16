function newAccountTable(userid: string): string {
  const createAccountTableQuery = `CREATE TABLE \`${userid}_account\` (
          \`accountIndex\` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '계좌 인덱스',
          \`accountDate\` TIMESTAMP NULL DEFAULT current_timestamp() COMMENT '거래 날짜',
          \`accountDeposit\` INT(10) UNSIGNED NULL DEFAULT NULL COMMENT '입금 기록',
          \`accountWithdraw\` INT(10) UNSIGNED NULL DEFAULT NULL COMMENT '출금 기록',
          \`accountBalance\` INT(10) UNSIGNED NOT NULL DEFAULT '0' COMMENT '계좌 잔액',
          \`companycode\` VARCHAR(15) NOT NULL DEFAULT '' COMMENT '거래한 회사 주 코드' COLLATE 'utf8mb3_general_ci',
          \`shareBuyoutCount\` INT(10) UNSIGNED NULL DEFAULT NULL COMMENT '주식 매수 량',
          \`shareBuyoutPrice\` INT(10) UNSIGNED NULL DEFAULT NULL COMMENT '주식 매수 단가',
          \`shareSelloutCount\` INT(10) UNSIGNED NULL DEFAULT NULL COMMENT '주식 매도 량',
          \`shareSelloutPrice\` INT(10) UNSIGNED NULL DEFAULT NULL COMMENT '주식 매도 단가',
          PRIMARY KEY (\`accountIndex\`) USING BTREE,
          INDEX \`companyCode\` (\`companycode\`) USING BTREE,
          CONSTRAINT \`fk_${userid}_account_companyCode\` FOREIGN KEY (\`companycode\`) REFERENCES \`companylist\` (\`code\`) ON UPDATE NO ACTION ON DELETE NO ACTION
      )
      COMMENT='${userid} 사용자용 모의투자 계좌.'
      COLLATE='utf8mb4_unicode_ci'
      ENGINE=InnoDB
      ;
      `;
  return createAccountTableQuery;
}

function newGachaTable(userid: string): string {
  const createGachaTableQuery = `CREATE TABLE \`${userid}_gacha\` (
          \`gachaIndex\` INT(10) NOT NULL AUTO_INCREMENT COMMENT '가챠 인덱스',
          \`gachaDate\` TIMESTAMP NOT NULL DEFAULT current_timestamp() COMMENT '가챠 날짜',
          \`gachaList\` VARCHAR(300) NOT NULL DEFAULT '' COMMENT '가챠 리스트' COLLATE 'utf8mb4_unicode_ci',
          \`gachaDraw\` VARCHAR(30) NOT NULL DEFAULT '' COMMENT '가챠 결과' COLLATE 'utf8mb4_unicode_ci',
          PRIMARY KEY (\`gachaIndex\`) USING BTREE
      )
      COMMENT='${userid} 사용자의 종목뽑기 기록'
      COLLATE='utf8mb3_general_ci'
      ENGINE=InnoDB
      ;
      `;
  return createGachaTableQuery;
}
function newTodayLuckTable(userid: string): string {
  const createTodayLuckTableQuery = `CREATE TABLE \`${userid}_todayluck\` (
          \`todayDate\` TIMESTAMP NULL DEFAULT current_timestamp() COMMENT '운세 날짜',
          \`todayLuck\` VARCHAR(6) NOT NULL COMMENT '운세 결과' COLLATE 'utf8mb4_unicode_ci',
          \`todayMessage\` VARCHAR(150) NOT NULL COMMENT '운세 설명' COLLATE 'utf8mb4_unicode_ci'
      )
      COMMENT='${userid} 사용자의 오늘의 운세\r\n'
      COLLATE='utf8mb4_unicode_ci'
      ENGINE=InnoDB
      ;
      `;
  return createTodayLuckTableQuery;
}

function newStocksTable(userid: string): string {
  const createStockTableQuery = `CREATE TABLE \`${userid}_stock\` (
        \`stockCode\` VARCHAR(15) NOT NULL DEFAULT '' COLLATE 'utf8mb3_general_ci',
        \`stockName\` VARCHAR(50) NULL DEFAULT '' COLLATE 'utf8mb3_general_ci',
        \`stockBalance\` INT(10) UNSIGNED NOT NULL DEFAULT '0' COMMENT '보유 주식 양',
        PRIMARY KEY (\`stockCode\`) USING BTREE,
        CONSTRAINT \`fk_${userid}_stock_stockCode\` FOREIGN KEY (\`stockCode\`) REFERENCES \`companylist\` (\`code\`) ON UPDATE NO ACTION ON DELETE NO ACTION
    )
    COMMENT='${userid} 사용자의 보유 주식'
    COLLATE='utf8mb3_general_ci'
    ENGINE=InnoDB
    ;
    `;
  return createStockTableQuery;
}
/**
 * 신규 회원가입시 회원 고유의 데이터를 저장할 개인 DB 테이블을 생성할 명령 쿼리문 배열 API
 * 
 * @param userid 테이블을 생성할 회원 id
 * @returns queries : `string[]` : 신규 회원을 위한 개인 DB 테이블 생성 쿼리문 배열
 */
export default function createTableQueries(userid: string): string[] {
  const queries: string[] = new Array();
  queries.push(newAccountTable(userid));
  queries.push(newStocksTable(userid));
  queries.push(newTodayLuckTable(userid));
  queries.push(newGachaTable(userid));

  return queries;
}
