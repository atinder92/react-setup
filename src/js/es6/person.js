class Person {

    constructor(name,age){
        this.name = name;
        this.age  = age;
    }

    //Displays information
    displayInformation(){
        console.log(`Name : ${this.name} `);
        console.log(`Age  : ${this.age} `);
    }

}

export default Person;