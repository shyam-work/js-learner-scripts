load("console.js");

function Person(name, age) {
    this.age = age;
    this.name = name;
    if (this.name == null) {
        this.name = 'No name';
    }
    if (this.age == null) {
        this.age = 10;
    }
    this.print = function() {
        console.log('hello');
    }
    this.printAge = function() {
        console.log('My age is: ' + this.age + ' and name is: ' + this.name);
    }
};

var p = new Person();
p.print();
p.printAge();
p = new Person('Shyam', 44);
p.print();
p.printAge();

