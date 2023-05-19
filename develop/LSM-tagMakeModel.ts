function tagMake(tagName: string = "div", innerHTML: string = "", tagMore: string = ""): string{
  return `<${tagName} ${tagMore}> ${innerHTML} </${tagName}>`
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

const tagList:{} = {
  make1 : {
    tagName : "div",
    innerHTML : "",
    tagMore : "id='DB-view'",
  },
  make2 : {
    tagName : "",
    innerHTML : "",
    tagMore : "",
  },
  make3 : {
    tagName : "",
    innerHTML : "",
    tagMore : "",
  },
  make4 : {
    tagName : "",
    innerHTML : "",
    tagMore : "",
  },
}

const mainDiv = tagMake('div',"NaR",tagStyle(divStyle))
console.log(mainDiv)

module.exports = mainDiv
