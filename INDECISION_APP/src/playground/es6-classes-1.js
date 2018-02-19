


class Person {
    constructor(name= 'Anonymous', age = 0){
        this.name = name;
        this.age = age;
    }
    getGreeting(){
       //return 'Hai' + this.name + '!';
        return `Hi, This is ${this.name}`;
    }

    getDescription(){
        return `${this.name} is ${this.age} years old.`;
    }
}

class Student extends Person {
    
    constructor(name, age, major){
        super(name, age);
        this.major = major; 
    }

    hasMajor() {
      return !!this.major;
    }

    getDescription(){
        let description = super.getDescription();

        if(this.hasMajor()) {
            description += `His Major is ${this.major}`;
        }
        return description;
    }
}


class Traveller extends Person {
    constructor(name, age, homelocation) {
        super(name, age);
        this.homelocation = homelocation;
    }

    /*hashome() {
        return !!this.homelocation;
    }*/

    getGreeting() {
        let content = super.getGreeting();
        
        if(this.homelocation) {
            content += `His homelocaion is ${this.homelocation}`;
        }
        return content;
    }
}

const me = new Traveller("Manoj", '24', 'Madurai');
console.log(me.getGreeting());
//console.log(me.hasMajor());

const him = new Traveller("Dude", '21');
//console.log(him);
console.log(him.getGreeting());


