class Person {
  constructor(name = "Anonymous", age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hi I'm ${this.name}`;
  }
  getDescription() {
    return `I am ${this.age} years old.`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();

    if (this.hasMajor()) {
      description += ` My major is ${this.major}`;
    }

    return description;
  }
}

class Traveller extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  hasHome() {
    return !!this.homeLocation;
  }
  getGreeting() {
    let greeting = super.getGreeting();

    if (this.hasHome()) {
      greeting += ` I'm visiting from ${this.homeLocation}`;
    }

    return greeting;
  }
}

const me = new Traveller("Brandi Mummery", 27, "Toronto");
console.log(me.getGreeting());

const other = new Traveller();
console.log(other.getGreeting());
