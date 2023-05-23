"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
function tagMake(tagName, innerHTML, tagMore) {
  if (tagName === void 0) {
    tagName = "div";
  }
  if (innerHTML === void 0) {
    innerHTML = "";
  }
  if (tagMore === void 0) {
    tagMore = "";
  }
  return "<".concat(tagName, " ").concat(tagMore, ">").concat(innerHTML, "</").concat(tagName, ">");
}
function tagStyle(object) {
  var style = 'style="';
  for (var key in object) {
    style += "".concat(key, ":").concat(object[key], ";");
  }
  style += '"';
  return style;
}
var divStyle = {
  width: "100vw",
  height: "100vh",
  display: "flex",
  "align-items": "center",
  "justify-content": "center",
};
// const company = fs.readFileSync(path.join(path.resolve(), "../financeDB_testData(samsung).json"), "utf-8");
var company = fs.readFileSync(path.join(path.resolve(), "financeDB_testData(samsung).json"), "utf-8");
var companyParse = JSON.parse(company);
var companyInner = companyParse.samsung;
var companyNo = companyInner.map(function (value) {
  return value.no;
});
var companyOpen = companyInner.map(function (value) {
  return value.open;
});
var companyHigh = companyInner.map(function (value) {
  return value.high;
});
var companyLow = companyInner.map(function (value) {
  return value.low;
});
var companyClose = companyInner.map(function (value) {
  return value.close;
});
var companyVolume = companyInner.map(function (value) {
  return value.volume;
});
var companyDay = companyInner.map(function (value) {
  return value.day;
});
var tagMake1 = ["div", "", tagStyle(divStyle) + 'id="DB-view"']; //root의 자식
var tagMake2 = [
  ["div", "", 'id="no"'],
  ["div", "", 'id="open"'],
  ["div", "", 'id="high"'],
  ["div", "", 'id="low"'],
  ["div", "", 'id="close"'],
  ["div", "", 'id="volume"'],
  ["div", "", 'id="day"'],
]; //7개
var tagMake3Text = ["no", "open", "high", "low", "close", "volume", "day"];
var tagMake3CompanyData = [companyNo, companyOpen, companyHigh, companyLow, companyClose, companyVolume, companyDay];
var companyInfoAll = function (company, count) {
  if (count === void 0) {
    count = -1;
  }
  var fourList = "";
  if (count === -1) {
    for (var i in company) {
      company.map(function (element) {
        fourList += tagMake("li", element.toString());
      });
    }
  } else {
    company.map(function (ele, i) {
      if (count > i) {
        fourList += tagMake("li", ele.toString());
      }
    });
  }
  return fourList;
};
var wantCompanyInfo = function (company, count) {
  if (count === void 0) {
    count = -1;
  }
  var twoChild = "";
  tagMake3Text.map(function (element) {
    twoChild += tagMake("div", element);
    twoChild += tagMake("ul", companyInfoAll(company, count));
  });
  return twoChild;
};
var mainDiv = tagMake(tagMake1[0], wantCompanyInfo(tagMake3CompanyData[0], 10), tagMake1[2]);
module.exports = mainDiv;
