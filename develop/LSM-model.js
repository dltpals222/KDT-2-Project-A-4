function tagMake(tagName = "div", innerHTML = "", tagMore = ""){
  return `<${tagName} ${tagMore}> ${innerHTML} </${tagName}>`
}

function tagStyle(object){
  let style = 'style='
  for(let key in object){
    style += `${key}:${object[key]} `
  }
  return style
}

const aaaaa = {
  display : 'flex',
  alignItems : 'center',
  justifyContent : 'center'
}


const mainDiv = tagMake('div',"NaR",tagStyle(aaaaa))

module.exports = mainDiv

console.log(mainDiv)