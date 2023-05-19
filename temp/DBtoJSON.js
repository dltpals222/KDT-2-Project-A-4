const sendQuery = require("./mariadb.js")
const fs = require("fs");

async function DBtoJSON(){
  const DBdata = {};
  const samsung = await sendQuery(`SELECT * FROM \`aitrading_db\`.\`kospi_005930_d\` ORDER BY \`day\` DESC LIMIT 100;`);
  DBdata.samsung = samsung;
  fs.writeFileSync("./financeDB_testData(samsung).json",JSON.stringify(DBdata));
} 

DBtoJSON();