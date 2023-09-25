
const person = {
    name: "Sanaullah ",
    age: 21,
    country: "Pakistan",
    semester: "Fall 2023",
    cms: "023-21-0010",
  
    details: [
      { contactNumber: "123-456-7890", email: "john.doe@example.com" },
      { contactNumber: "987-654-3210", email: "johndoe@gmail.com" },
      { contactNumber: "555-555-5555", email: "johndoe@yahoo.com" },
    ],
  };
  
 
  function printObjectValues(obj) {
    for (const key in obj) {
      if (typeof obj[key] !== "object") {
        console.log(obj[key]);
      } else {
        obj[key].forEach(innerObj => {
          for (const innerKey in innerObj) {
            console.log(innerObj[innerKey]);
          }
        });
      }
    }
  }
  
  // Print the values of the person object
  printObjectValues(person);
  