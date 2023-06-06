function test() : string {
    let str : string = "Hello World!, you call this at "
    const date : Date = new Date();
    str += date.toString();
    return str;
}
console.log("이것은 엔트리 포인트입니다.")
console.log(test());