import fs from 'fs'

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

console.log(companyInner)

class CompanyInnerHTML {
  private company : companyInterface[];

  constructor(company : companyInterface[]){
    this.company = company
  }


  get parseData(){
    let value:string = "";
    for(let i in this.company){
      value += 
    }
  }
}




const tagMake1 : string[] = ['div','',tagStyle(divStyle) + 'id=\"DB-view\"']; //root의 자식
const tagMake2 : string[][] = [['div',"",'id=\"no\"'],['div','','id=\"open\"'],['div','','id=\"high\"'],['div','','id=\"low\"'],['div','','id=\"close\"'],['div','','id=\"volume\"'],['div','','id=\"day\"']]; //7개
const tagMake3 : string[][] = [['div','',''],['ul','','']]; //2개


let DBColumn : string="";
let twoChild : string = "";
let fourList : string = "";



tagMake3.map((Element) : void=>{
  twoChild += tagMake(Element[0])
})

tagMake2.map((element) : void=>{
  DBColumn += tagMake(element[0],twoChild,element[2])
})




const mainDiv = tagMake(tagMake1[0],tagMake1[1],tagMake1[2])


module.exports = mainDiv
