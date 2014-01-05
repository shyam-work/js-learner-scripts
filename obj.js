load("console.js");

var obj = { data1 : "abc", data2 : "def" };
console.log(obj.toSource());
console.log(obj['data1']);

var obj2 = { data3 : "abc2", data4 : "def2" };

console.log(JSON.stringify(obj));

var obj3 = { data3 : obj, data4 : obj2 };
console.log(JSON.stringify(obj3));
