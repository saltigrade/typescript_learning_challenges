// typescript/learning/functions/
// constant_function.ts
const constLogText = (textParam: string, timestamp: string) => {
  console.log(`${timestamp} [INFO] - ${textParam}`);
};

constLogText("Programujeme const funkci", "2025-11-13T10:27:00");
