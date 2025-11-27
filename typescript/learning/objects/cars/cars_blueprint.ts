// typescript/learning/objects/cars/
// cars_blueprint.ts
// ? Vytvoření vlastního typu (typová anotace) - jakákoliv proměnná označená touto typovou anotací může nabývat jen těch stringů, které jsou uvedené v CarColor
type CarColor = "Červená" | "Modrá" | "Šedá" | "Černá" | "Zelená";

export class CarsBlueprint {
  private color: CarColor; // ? Vlastní typ
  public engine: string; // ? public - modifikátor viditelnosti - není omezeno použití, je redudantní (zbytečný) - property i metody jsou i bez zadání public stejně viditelné a použitelné
  protected fuel: string; // ? protected - modifikátor viditelnosti - použitelný jen v třídě nebo v děděných třídách
  readonly carName: string; // ? readonly - constanta - nelze měnit a musí být zadána napřímo nebo v constructoru
  wheels = 4; // ? Hardcodování hodnoty property

  constructor(color: CarColor, engine: string, fuel: string, carName: string) {
    this.color = color;
    this.engine = engine;
    this.fuel = fuel;
    this.carName = carName;
    console.log(
      `Auto "${carName}" bylo vyrobeno!\n\t- Motor: ${engine}\n\t- Barva: ${color}\n\t- Palivo: ${fuel}\n\t- Počet kol: ${this.wheels}`
    );
    this.logDivider();
  }

  logCarProperties() {
    console.log(
      `Informace o autě ${this.carName}: Motor: ${this.engine}, Barva: ${this.color}, Palivo: ${this.fuel}, Počet kol: ${this.wheels}`
    );
    this.logDivider();
  }

  // ? private = modifikátor viditelnosti - metoda lze použít jen uvnitř třídy, ale ne mimo
  private logDivider() {
    console.log("-----------------------");
  }

  repaint(newColor: CarColor) {
    const oldColor = this.color;
    this.color = newColor;
    console.log(
      `Auto "${this.carName}" bylo přebarveno z ${oldColor} na ${this.color}`
    );
    this.logDivider();
  }

  getEngine(): string {
    // ? Explicitní typová anotace - není vždy nutná
    return this.engine;
  }
}
