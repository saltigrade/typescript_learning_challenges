// typescript/learning/ai/
// generators.ts

/**
 * Generates a random password of specified length using alphanumeric characters and special symbols.
 *
 * @param length - The desired length of the password (must be a positive number)
 * @returns A randomly generated password string
 *
 * @example
 * ```typescript
 * // Generate a 12-character password
 * const password = generateRandomPassword(12);
 * console.log(password); // "aB3$kL9mN2@p"
 * ```
 *
 * @example
 * ```typescript
 * // Generate a short 6-character password
 * const shortPassword = generateRandomPassword(6);
 * console.log(shortPassword); // "X9@mKl"
 * ```
 *
 * @example
 * ```typescript
 * // Generate a long 20-character password
 * const longPassword = generateRandomPassword(20);
 * console.log(longPassword); // "aB3$kL9mN2@pQrS4%vWx"
 * ```
 */
function generateRandomPassword(length: number): string {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }
  return password;
}

/**
 * Generates a random username combining adjectives and nouns with optional numbers.
 *
 * @param includeNumbers - Whether to append random numbers to the username (default: true)
 * @returns A randomly generated username string
 *
 * @example
 * ```typescript
 * // Generate a username with numbers
 * const username = generateRandomUsername();
 * console.log(username); // "coolpanda42"
 * ```
 *
 * @example
 * ```typescript
 * // Generate a username without numbers
 * const usernameNoNumbers = generateRandomUsername(false);
 * console.log(usernameNoNumbers); // "happytigger"
 * ```
 *
 * @example
 * ```typescript
 * // Generate a long 20-character username
 * const longUsername = generateRandomUsername(20);
 * console.log(longUsername); // "coolpanda42"
 * ```
 */
function generateRandomUsername(includeNumbers: boolean = true): string {
  const adjectives = [
    "cool",
    "happy",
    "fast",
    "smart",
    "brave",
    "clever",
    "mighty",
    "swift",
    "gentle",
    "silent",
    "bright",
    "warm",
    "wild",
    "calm",
    "epic",
    "noble",
    "fierce",
    "bold",
    "shiny",
    "quirky",
    "zesty",
    "jolly",
    "graceful",
    "fearless",
    "vivid",
    "snappy",
    "daring",
    "cheerful",
    "eager",
    "lively",
    "radiant",
    "spunky",
  ];
  const nouns = [
    "panda",
    "tiger",
    "eagle",
    "fox",
    "wolf",
    "dragon",
    "phoenix",
    "lion",
    "bear",
    "shark",
    "falcon",
    "raven",
    "snake",
    "owl",
    "hawk",
    "dolphin",
    "panther",
    "cheetah",
    "whale",
    "otter",
    "lynx",
    "cougar",
    "peacock",
    "sparrow",
    "rhino",
    "zebra",
    "giraffe",
    "buffalo",
    "crane",
    "beetle",
    "antelope",
    "penguin",
  ];

  const randomAdjective =
    adjectives[Math.floor(Math.random() * adjectives.length)];
  const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
  let username = randomAdjective + randomNoun;

  if (includeNumbers) {
    const randomNumber = Math.floor(Math.random() * 100);
    username += randomNumber;
  }

  return username;
}

/**
 * Generates a random first name based on the specified gender.
 *
 * @param gender - The gender for the first name ('male', 'female', or 'any'). Defaults to 'any'.
 * @returns A randomly generated first name.
 *
 * @example
 * ```typescript
 * const maleName = generateFirstName('male');
 * console.log(maleName); // "Jan"
 *
 * const femaleName = generateFirstName('female');
 * console.log(femaleName); // "Anna"
 *
 * const anyName = generateFirstName();
 * console.log(anyName); // "Petr"
 * ```
 */
function generateFirstName(gender: "male" | "female" | "any" = "any"): string {
  const maleNames = [
    "Jan",
    "Petr",
    "Martin",
    "Tomáš",
    "Lukáš",
    "Jakub",
    "Michal",
    "David",
    "Václav",
    "Filip",
  ];
  const femaleNames = [
    "Anna",
    "Marie",
    "Eva",
    "Jana",
    "Lucie",
    "Kateřina",
    "Tereza",
    "Adéla",
    "Kristýna",
    "Barbora",
  ];

  let names;
  if (gender === "male") {
    names = maleNames;
  } else if (gender === "female") {
    names = femaleNames;
  } else {
    names = [...maleNames, ...femaleNames];
  }

  const randomIndex = Math.floor(Math.random() * names.length);
  return names[randomIndex];
}

/**
 * Generates a random last name based on the specified gender.
 *
 * @param gender - The gender for the last name ('male', 'female', or 'any'). Defaults to 'any'.
 * @returns A randomly generated last name.
 *
 * @example
 * ```typescript
 * const maleLastName = generateLastName('male');
 * console.log(maleLastName); // "Novák"
 *
 * const femaleLastName = generateLastName('female');
 * console.log(femaleLastName); // "Nováková"
 *
 * const anyLastName = generateLastName();
 * console.log(anyLastName); // "Svoboda"
 * ```
 */
function generateLastName(gender: "male" | "female" | "any" = "any"): string {
  const maleLastNames = [
    "Novák",
    "Svoboda",
    "Novotný",
    "Dvořák",
    "Černý",
    "Procházka",
    "Kučera",
    "Veselý",
    "Horák",
    "Němec",
  ];
  const femaleLastNames = maleLastNames.map((name) => name + "ová");

  let lastNames;
  if (gender === "male") {
    lastNames = maleLastNames;
  } else if (gender === "female") {
    lastNames = femaleLastNames;
  } else {
    lastNames = [...maleLastNames, ...femaleLastNames];
  }

  const randomIndex = Math.floor(Math.random() * lastNames.length);
  return lastNames[randomIndex];
}

/**
 * Generates a random Czech MSISDN (mobile phone number) in the format +420 123 456 789.
 *
 * @returns A randomly generated Czech MSISDN.
 *
 * @example
 * ```typescript
 * const msisdn = generateCzechMSISDN();
 * console.log(msisdn); // "+420 123 456 789"
 * ```
 */
function generateCzechMSISDN(): string {
  const randomThreeDigits = () => Math.floor(100 + Math.random() * 900); // Generates a random number between 100 and 999
  return `+420 ${randomThreeDigits()} ${randomThreeDigits()} ${randomThreeDigits()}`;
}

/**
 * Generates a random email address with an optional domain.
 *
 * @param domain - The domain to use for the email address. Defaults to 'example.com'.
 * @returns A randomly generated email address.
 *
 * @example
 * ```typescript
 * const email = generateEmail();
 * console.log(email); // "user123@example.com"
 *
 * const customEmail = generateEmail('mydomain.com');
 * console.log(customEmail); // "user456@mydomain.com"
 * ```
 */
function generateEmail(domain: string = "example.com"): string {
  const randomUser = `user${Math.floor(100 + Math.random() * 900)}`; // Generates a random username like user123
  return `${randomUser}@${domain}`;
}

const newPassword = generateRandomPassword(12);
console.log("Generated Password: " + newPassword);

const newUsername = generateRandomUsername();
console.log("Generated Username: " + newUsername);

const firstNameMale = generateFirstName("male");
console.log("Generated Male First Name: " + firstNameMale);

const firstNameFemale = generateFirstName("female");
console.log("Generated Female First Name: " + firstNameFemale);

const lastNameMale = generateLastName("male");
console.log("Generated Male Last Name: " + lastNameMale);

const lastNameFemale = generateLastName("female");
console.log("Generated Female Last Name: " + lastNameFemale);

const msisdn = generateCzechMSISDN();
console.log("Generated Czech MSISDN: " + msisdn);

const emailDefault = generateEmail();
console.log("Generated Email (default domain): " + emailDefault);

const emailCustom = generateEmail("customdomain.com");
console.log("Generated Email (custom domain): " + emailCustom);
