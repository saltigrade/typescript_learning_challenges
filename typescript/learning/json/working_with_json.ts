// typescript/learning/json/
// working_with_json.ts
const jsonString = `{
   "name": "John",
   "age": 30,
   "cars": {
      "car1": "Ford",
      "car2": "BMW",
      "car3": "Fiat"
   },
   "friends": ["Jane", "Tom", "Anna"]
   }`;

const jsobObject = JSON.parse(jsonString); // ? Převede text json na objekt
console.log("User name: " + jsobObject.name);
console.log("User first car: " + jsobObject.cars.car1);
console.log("User first friend: " + jsobObject.friends[0]);
