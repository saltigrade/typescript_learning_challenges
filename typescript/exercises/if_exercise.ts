// const score = -5;
// const minimalScore = 75;
// const studentName = "Sabuela la Bomba";
// const redDiploma = 95;

// if (score >= minimalScore) {
//   console.log(`${studentName} úspěšně složil zkoušku.`);
// } else if (score >= 0) {
//   console.log(`${studentName} to musí opakovat.`);
// } else if (score > redDiploma) {
//   console.log(`${studentName} je šprtík. Blahopřeji`);
// } else {
//   console.log("CHYBA: něco se nepovedlo");
// }

const actualPoints = 75;
const graduationLimit = 75;
const studentName = "Alena Dlouhá";

if (actualPoints >= graduationLimit) {
  console.log(
    `Student/ka ${studentName} úspěšně dokončil/a studium s ${actualPoints} body.`
  );
} else {
  console.log(
    `Student/ka ${studentName} ukončil/a studium neúspěšně s ${actualPoints} body. Pro úspěšně dokončení bylo potřeba minimálně ${graduationLimit} bodů.`
  );
}
