function* generator() {
    yield 1;
    yield 2;
    return 3;
    yield 4;
}
let obj = generator();
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());
