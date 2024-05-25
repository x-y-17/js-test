let obj = { a: 1, b: 2 };
Reflect.deleteProperty(obj, "a");
console.log(obj);
const myTarget = {};
const proxy = new Proxy(myTarget, {
  deleteProperty(target, property) {
    console.log("deleteProperty()");
    console.log(...arguments)
    return Reflect.deleteProperty(...arguments);
  },
});
delete proxy.abc;
// deleteProperty()
