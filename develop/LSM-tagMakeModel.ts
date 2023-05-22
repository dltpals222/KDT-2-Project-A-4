import * as fs from 'fs'
import * as path from 'path'

function tagMake(tagName: string = "div", innerHTML: string = "", tagMore: string = ""): string{
  return `<${tagName} ${tagMore}>${innerHTML}</${tagName}>`
}

function tagStyle (object:{[key:string]:string|number}):string{
  let style = 'style="'
  for(let key in object){
    style += `${key}:${object[key]};`
  }
  style += '"'
  return style
}


const divStyle : {}= {
  width : '100vw',
  height : '100vh',
  display : 'flex',
  'align-items' : 'center',
  'justify-content' : 'center'
}

interface companyInterface {
  no : number;
  open : number;
  high : number;
  low : number;
  close : number;
  volume : number;
  day : string;
}

interface companyParseInterface {
  samsung : companyInterface[];
}

const company = fs.readFileSync('../financeDB_testData(samsung).json','utf-8')
const companyParse:companyParseInterface = JSON.parse(company)
const companyInner:companyInterface[] = companyParse.samsung
const companyNo = companyInner.map((value) => {value.no});
const companyOpen = companyInner.map((value) => {value.open});
const companyHigh = companyInner.map((value) => {value.high});
const companyLow = companyInner.map((value) => {value.low});
const companyClose = companyInner.map((value) => {value.close});
const companyVolume = companyInner.map((value) => {value.volume});
const companyDay  = companyInner.map((value) => {value.day});


const tagMake1 : string[] = ['div','',tagStyle(divStyle) + 'id=\"DB-view\"']; //root의 자식
const tagMake2 : string[][] = [['div',"",'id=\"no\"'],['div','','id=\"open\"'],['div','','id=\"high\"'],['div','','id=\"low\"'],['div','','id=\"close\"'],['div','','id=\"volume\"'],['div','','id=\"day\"']]; //7개


let DBColumn : string="";
let twoChild : string = "";
let fourList : string = "";




tagMake2.map((element) : void=>{
  DBColumn += tagMake(element[0],twoChild,element[2])
})




const mainDiv = tagMake(tagMake1[0],tagMake1[1],tagMake1[2])


module.exports = mainDiv
