import * as fs from "fs";
import * as path from "path";

function tagMake(tagName: string = "div", innerHTML: string = "", tagMore: string = ""): string {
  return `<${tagName} ${tagMore}>${innerHTML}</${tagName}>`;
}

function tagStyle(object: { [key: string]: string | number }): string {
  let style = 'style="';
  for (let key in object) {
    style += `${key}:${object[key]};`;
  }
  style += '"';
  return style;
}

const divStyle: {} = {
  width: "100vw",
  height: "100vh",
  display: "flex",
  "align-items": "center",
  "justify-content": "center",
};

interface companyInterface {
  no: number;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  day: string;
}

interface companyParseInterface {
  samsung: companyInterface[];
}

const company = fs.readFileSync(path.join(path.resolve(), "../financeDB_testData(samsung).json"), "utf-8");
// const company = fs.readFileSync(path.join(path.resolve(),'financeDB_testData(samsung).json'),'utf-8')
const companyParse: companyParseInterface = JSON.parse(company);
const companyInner: companyInterface[] = companyParse.samsung;
const companyNo: number[] = companyInner.map((value) => value.no);
const companyOpen: number[] = companyInner.map((value) => value.open);
const companyHigh: number[] = companyInner.map((value) => value.high);
const companyLow: number[] = companyInner.map((value) => value.low);
const companyClose: number[] = companyInner.map((value) => value.close);
const companyVolume: number[] = companyInner.map((value) => value.volume);
const companyDay: string[] = companyInner.map((value) => value.day);

const tagMake1: string[] = ["div", "", tagStyle(divStyle) + 'id="DB-view"']; //root의 자식
const tagMake2: string[][] = [
  ["div", "", 'id="no"'],
  ["div", "", 'id="open"'],
  ["div", "", 'id="high"'],
  ["div", "", 'id="low"'],
  ["div", "", 'id="close"'],
  ["div", "", 'id="volume"'],
  ["div", "", 'id="day"'],
]; //7개
const tagMake3Text: string[] = ["no", "open", "high", "low", "close", "volume", "day"];
const tagMake3CompanyData = [companyNo, companyOpen, companyHigh, companyLow, companyClose, companyVolume, companyDay];

let DBColumn: string = "";

const companyInfo = (company: (string | number)[], count: number = -1) => {
  let fourList: string = "";
  if (count === -1) {
    for (let i in company) {
      company.map((element) => {
        fourList += tagMake("li", company.toString());
      });
    }
  } else {
    for (let i = 0; i < count; i++) {
      fourList += tagMake("li", company.toString());
    }
  }
  return fourList;
};
console.log(companyInfo(companyClose));

const wantCompanyInfo = (companyInfo: [], count: number) => {
  let twoChild: string = "";
  tagMake3Text.map((element, i) => {
    twoChild += tagMake("div");
    twoChild += tagMake("div");
  });
};

tagMake2.map((element): void => {
  DBColumn += tagMake(element[0], "", element[2]);
});

const mainDiv = tagMake(tagMake1[0], tagMake1[1], tagMake1[2]);

module.exports = mainDiv;
