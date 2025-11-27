// typescript/learning/functions/
// callback.ts

function greet(name: string, actionAfterGreeting: () => void) {
  console.log("Ahoj " + name);
  console.log(name + " volá:");
  actionAfterGreeting();
  console.log("Akce po callbacku");
}

greet("Petr", () => {
  console.log("Rád tě poznávám");
  console.log("Jak je?");
});

greet("Anežka", () => {
  console.log("Jsem mistryně v programování TypeScript");
  console.log("2 + 2 = " + (2 + 2));
});
