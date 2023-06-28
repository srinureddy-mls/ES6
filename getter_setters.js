// Create an object: getter 
const person = {
    firstName: "John",
    lastName: "Doe",
    language: "en",
    get lang() {
      return this.firstName;
    }
  };
  console.log(person.lang)

  //setter 

  // Create an object:
const person1 = {
    firstName: "John",
    lastName: "Doe",
    language: "NO",
    set lang(value) {
      this.language = value;
    }
  };
  
  // Set a property using set:
  person1.lang = "english";
  console.log(person1.language)