const cities = ["Praha", "Brno", "Mnichovice", "Plzeň"];

console.log("Města: " + cities);
console.log(cities);
console.log(JSON.stringify(cities, null, 2)); // ? JSON stringify převádí TS/JS struktury do JSON parametry null a 2 nám ho formátují
console.log("2.město: " + cities[1]);

cities.push("Olomouc");
console.log("5.město: " + cities[4]);

for (let i = 0; i < cities.length; i++) {
  // ? cities.length je property - vlastnost uložená v každém poli. Je to něco jako proměnná uvnitř datové struktury. array.length v sobě má uloženo kolik členů obsahuje
  console.log("Město: " + cities[i]);
}
