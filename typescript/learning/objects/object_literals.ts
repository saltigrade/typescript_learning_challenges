// typescript/learning/objects/
// object_literals.ts

// ?  Deklarace vlastního typu (umožní nám kontrolovat strukturu dat a VSCode nám bude našeptávat při používání)
type User = {
  name: string;
  email: string;
  age: number;
  isActive: 0 | 1;
};

const testUser: User = {
  name: "Jan Novák",
  email: "jan@example.com",
  age: 28,
  isActive: 1,
};

const adminTypeUser: User = {
  name: "Boží Admin",
  email: "admin@test.cz",
  age: 23,
  isActive: 1,
};

function registerUser(user: User) {
  console.log("===== REGISTRACE UŽIVATELE =====");
  console.log(`Jméno: ${user.name}`);
  console.log(`Email: ${user.email}`);
  console.log(`Věk: ${user.age}`);
  console.log(`Aktivní: ${user.isActive}`);
  console.log(`=================================`);
}

registerUser(adminTypeUser);
registerUser(testUser);
