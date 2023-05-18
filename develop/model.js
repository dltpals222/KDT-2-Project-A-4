function tagMake(tagName = "div", innerHTML = "", tagMore = ""){
  return `<${tagName} ${tagMore}> ${innerHTML} </${tagName}>`
}

function tagStyle(object){
  let style = 'style='
  for(let key in object){
    style += `${object}:${object[key]} `
  }
  return style
}

const aaaaa = {
  'width' :'100px',
  'height' : '100px',
  backgroundColor : '#ccc'
}

console.log(tagStyle(aaaaa))

const mainDiv = () => {
  tagMake('div',"NaR",tagStyle(aaaaa))
}