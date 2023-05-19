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




const samsung = fs.readFileSync('../financeDB_testData(samsung).json','utf-8')

console.log(samsung)

const tagMake1 : string[] = ['div','',tagStyle(divStyle) + 'id=\"DB-view\"']; //root의 자식
const tagMake2 : string[][] = [['div',"",'id=\"no\"'],['div','','id=\"open\"'],['div','','id=\"high\"'],['div','','id=\"low\"'],['div','','id=\"close\"'],['div','','id=\"volume\"'],['div','','id=\"day\"']]; //7개
const tagMake3 : string[][] = [['div','',''],['ul','','']]; //2개


let DBColumn : string="";
let twoChild : string = "";
let fourList : string = "";


tagList.make2.map((element) : void=>{
  DBColumn += tagMake(element[0],twoChild,element[2])
})

tagList.make3.map((Element) : void=>{
  twoChild += tagMake(Element[0])
})



const mainDiv = tagMake(tagMake1[0],tagMake1[1],tagMake1[2])


module.exports = mainDiv
