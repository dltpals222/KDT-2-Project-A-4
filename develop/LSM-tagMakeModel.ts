import fs from 'fs'

function tagMake(tagName: string = "div", innerHTML: string = "", tagMore: string = ""): string{
  return `<${tagName} ${tagMore}>${innerHTML}</${tagName}>`
}

function tagStyle(object:{[key:string]:string|number}):string{
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

interface tagListInterface {
  make1 : string[];
  make2 : string[][];
  make3 : string[][];
}

const jsonParse = fs.readFile('../financeDB_testData(samsung).json',(err,data)=>{
  if(err){
    console.error('파일을 받아오는데 에러가 뜹니다.')
  }

  console.log(data)

})

console.log(jsonParse)

const tagList:tagListInterface = {
  make1 : ['div','',tagStyle(divStyle) + 'id=\"DB-view\"'], //root의 자식
  make2 : [['div','','id=\"no\"'],['div','','id=\"open\"'],['div','','id=\"high\"'],['div','','id=\"low\"'],['div','','id=\"close\"'],['div','','id=\"volume\"'],['div','','id=\"day\"']], //7개
  make3 : [['div'],['ul']], //2개
}

let DBColumn : string="";
let twoChild : string = "";
let fourList : string = "";

tagList.make2.map((element) : void=>{
  DBColumn += tagMake(element[0],twoChild,element[2])
})

tagList.make3.map((Element) : void=>{
  twoChild += tagMake(Element[0])
})



const mainDiv = tagMake(tagList.make1[0],DBColumn,tagList.make1[2])


module.exports = mainDiv
