class Person {
    // Constructor function to initialize the person's details
    constructor(name, age, gender, address) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.address = address;
    }

    // Method to display information about the person
    displayInfo() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Gender: ${this.gender}`);
        console.log(`Address: ${this.address}`);
    }
}

//Creating new instance for the Person class
const person = new Person("Kumaran", 22, "Male", "124, Mannargudi-614001");

//Printing the information of person
console.log(person.displayInfo);