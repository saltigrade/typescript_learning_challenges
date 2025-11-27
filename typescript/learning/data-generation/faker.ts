// typescript/learning/data-generation/
// faker.ts
// import { faker } from "@faker-js/faker"; // ? Anglická verze
import { fakerCS_CZ as faker } from "@faker-js/faker"; // ? Česká verze

const firstName = faker.person.firstName("female");
const lastName = faker.person.lastName("female");
const username = faker.internet.username({
  firstName: firstName,
  lastName, // ? Pokud se mi název property i proměnné, která do ní vstupuje rovná, potom nemusím udělat přiřazení hodnoty: lastName: lastName - proběhne to automaticky
});
const email = faker.internet.email({
  firstName,
  lastName,
  provider: "seznam.cz",
});

console.log("Uživatelské jméno: " + username);
console.log("Emailová adresa: " + email);
console.log(`Jméno a příjmení: ${firstName} ${lastName}`);
