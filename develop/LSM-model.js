function tagMake(tagName = "div", innerHTML = "", tagMore = ""){
  return `<${tagName} ${tagMore}> ${innerHTML} </${tagName}>`
}

function tagStyle(object){
  let style = 'style="'
  for(let key in object){
    style += `${key}:${object[key]};`
  }
  style += '"'
  return style
}

const aaaaa = {
  width : '100vw',
  height : '100vh',
  display : 'flex',
  'align-items' : 'center',
  'justify-content' : 'center'
}

const mainDiv = tagMake('div',"NaR",tagStyle(aaaaa))
console.log(mainDiv)

module.exports = mainDiv
