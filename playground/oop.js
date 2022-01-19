function Person(firstName, lastName, age){
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
}


let anonPerson1 = new Person('Richard', 'Dixon', 36)

console.log(anonPerson1.firstName)
console.log(anonPerson1.lastName)
console.log(anonPerson1.age)

///////////////////////
// another way to create objects instead of the constructor above is to use the Object()
let anonPerson1 = new Object()

//Use dot or bracket notation to add properties and methods to it
anonPerson1.name = 'Chris';
anonPerson1['age'] = 38;
anonPerson1.greeting = function() {
  alert('Hi! I\'m ' + this.name + '.');
};

//also can do it like this as well

let anonPerson1 = new Object({
    name: 'Chris',
    age: 38,
    greeting: function() {
      alert('Hi! I\'m ' + this.name + '.');
    }
  });

  ////////////////////////////////////////////////

  //Defining a child class on Person, adding property specific to Teacher.
  // Use call() when doing inheritance.
  function Teacher(first, last, age, gender, interests, subject) {
    Person.call(this, first, last, age, gender, interests);
  
    this.subject = subject;
  }
  