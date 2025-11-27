// typescript/learning/functions/
// basic_functions.ts
function logText() {
  console.log("Hello world!");
}

function logTextParameter(textParam: string, timestamp: string) {
  console.log(`${timestamp} [INFO] - ${textParam}`);
}

logText();
logText();
logTextParameter("Programujeme funkce", "2025-11-13T10:19:00");
logTextParameter("Druhý zápis", "2025-11-13T10:20:00");
logTextParameter("Jsme funkcionální bozi!", "2025-11-13T10:21:00");
