// typescript/learning/date-time/
// dayjs.ts
import dayjs from "dayjs";

const now = dayjs().format();
console.log("Aktuální datum a čas: " + now);

const czechDateTime = dayjs().format("D. M. YYYY - HH:mm");
console.log("Český datum a čas: " + czechDateTime);

const onlyDate = dayjs().format("DD/MM/YYYY");
console.log("Pouze datum: " + onlyDate);

const nextWeek = dayjs().add(1, "week").format("DD.MM.YYYY");
console.log("Příští týden: " + nextWeek);

const threeMonthAgo = dayjs().subtract(3, "months").format("DD/MM/YYYY");
console.log("3 měsíce dozadu: " + threeMonthAgo);

const parsedDateAddes3MonthAnd2Days = dayjs("2022-10-30")
  .add(3, "months")
  .add(2, "days")
  .format("DD.MM.YYYY");

console.log("Kompletní datum: " + parsedDateAddes3MonthAnd2Days);
