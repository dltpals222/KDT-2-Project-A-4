function tagMake(tagName, innerHTML, tagMore) {
    if (tagName === void 0) { tagName = "div"; }
    if (innerHTML === void 0) { innerHTML = ""; }
    if (tagMore === void 0) { tagMore = ""; }
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
    width: '100vw',
    height: '100vh',
    display: 'flex',
    'align-items': 'center',
    'justify-content': 'center'
};
var tagList = {
    make1: ['div', '', tagStyle(divStyle) + 'id=\"DB-view\"'],
    make2: [['div', '', 'id=\"no\"'], ['div', '', 'id=\"open\"'], ['div', '', 'id=\"high\"'], ['div', '', 'id=\"low\"'], ['div', '', 'id=\"close\"'], ['div', '', 'id=\"volume\"'], ['div', '', 'id=\"day\"']],
    make3: [['div'], ['ul']], //2개
};
var DBColumn = "";
var twoChild = "";
var fourList = "";
tagList.make2.map(function (element) {
    DBColumn += tagMake(element[0], twoChild, element[2]);
});
tagList.make3.map(function (Element) {
    twoChild += tagMake(Element[0]);
});
var mainDiv = tagMake(tagList.make1[0], DBColumn, tagList.make1[2]);
module.exports = mainDiv;
