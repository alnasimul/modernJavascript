// Object er context a this

var dog = {
    name:'kallu',
    bark(){
        console.log(`Woof!, ${this.name}`);
    }
}

var x = dog.bark;
dog.bark();
x();
x.call(dog);

