// typescript/learning/objects/cars/
// cars.ts

import { CarsBlueprint } from "./cars_blueprint.ts";

const dieselCar = new CarsBlueprint("Červená", "1.6 TDI", "Diesel", "Ropák");
dieselCar.logCarProperties();
// ? Vytvoření dalšího objektu - je nezávislý na předchozím
const petrolCar = new CarsBlueprint("Černá", "1.0 TSI", "Benzín", "Rex");
petrolCar.logCarProperties(); // ? Vypíše informace auta s názvem "Rex"
dieselCar.logCarProperties(); // ? Ropák má stále své data - nemění se vytvořením dalšího objektu
const electricCar = new CarsBlueprint(
  "Černá",
  "EV 160kW",
  "Elektřina",
  "Blesk"
);
electricCar.logCarProperties();
dieselCar.repaint("Modrá");
dieselCar.logCarProperties();
electricCar.logCarProperties();
console.log("Motor Rexe: " + petrolCar.getEngine());
