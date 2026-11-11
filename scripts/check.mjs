import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const practicePaths = JSON.parse(
  fs.readFileSync(path.join(root, "practice-paths.json"), "utf8"),
);
const tsc = path.join(
  root,
  "node_modules",
  ".bin",
  process.platform === "win32" ? "tsc.cmd" : "tsc",
);
const compilerArgs = [
  "--ignoreConfig",
  "--noEmit",
  "--strict",
  "--noUncheckedIndexedAccess",
  "--exactOptionalPropertyTypes",
  "--verbatimModuleSyntax",
  "--isolatedModules",
  "--noUncheckedSideEffectImports",
  "--module",
  "nodenext",
  "--target",
  "es2022",
  "--moduleDetection",
  "force",
  "--skipLibCheck",
];
const expectedStartDiagnostics = {
  "practices/3-02.Enum": "TS2322",
};

function run(testFile) {
  return spawnSync(tsc, [...compilerArgs, testFile], { encoding: "utf8" });
}

function printFailure(label, result) {
  console.error("FAIL: " + label);
  console.error(result.stdout);
  console.error(result.stderr);
}

const rawArgs = process.argv.slice(2);
const args = rawArgs[0] === "--" ? rawArgs.slice(1) : rawArgs;
const mode = args[0];

if (mode === "--answers" || mode === "--starts") {
  const answers = mode === "--answers";
  let passed = 0;

  for (const practicePath of practicePaths) {
    const testFile = answers
      ? path.join(practicePath, "answers", "test-cases.ts")
      : path.join(practicePath, "test-cases.ts");
    const result = run(testFile);
    const output = result.stdout + result.stderr;
    const success = answers
      ? result.status === 0
      : result.status !== 0 &&
        output.includes(
          "error " + (expectedStartDiagnostics[practicePath] ?? "TS2344") + ":",
        );

    if (!success) {
      printFailure(practicePath, result);
      process.exitCode = 1;
      continue;
    }

    passed += 1;
  }

  console.log(
    (answers ? "answer" : "start") +
      " checks: " +
      passed +
      "/" +
      practicePaths.length,
  );
} else {
  if (!practicePaths.includes(mode)) {
    console.error("사용법: pnpm check -- <practice 경로>");
    process.exit(1);
  }

  const result = run(path.join(mode, "test-cases.ts"));
  process.stdout.write(result.stdout);
  process.stderr.write(result.stderr);
  if (result.status === 0) {
    console.log("PASS: " + mode);
  }
  process.exit(result.status ?? 1);
}
