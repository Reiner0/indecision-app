class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi. I am ${ this.name }!`;
    }
    getDescription() {
        return `${ this.name } is ${ this.age } year(s) old.`;
    }
}

const me = new Person('Reiner Leal', 33);
console.log(me);
console.log(me.getGreeting());
console.log(me.getDescription());

const other = new Person();
console.log(other);
console.log(other.getGreeting());