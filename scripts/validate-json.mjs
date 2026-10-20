import { readFileSync, readdirSync } from "node:fs";

function fail(message) {
  console.error(message);
  process.exitCode = 1;
}

const requiredManifestFields = [
  "name",
  "version",
  "minAppVersion",
  "author",
  "authorUrl",
];

const manifest = JSON.parse(readFileSync("manifest.json", "utf8"));
for (const field of requiredManifestFields) {
  if (!manifest[field]) {
    fail(`manifest.json is missing required field "${field}"`);
  }
}

const variantFiles = readdirSync("variants").filter((f) => f.endsWith(".json"));
if (variantFiles.length === 0) {
  fail("No variant JSON files found in variants/");
}

for (const file of variantFiles) {
  try {
    JSON.parse(readFileSync(`variants/${file}`, "utf8"));
  } catch (err) {
    fail(`variants/${file} is not valid JSON: ${err.message}`);
  }
}

if (process.exitCode === 1) {
  process.exit(1);
}

console.log(`OK: manifest.json and ${variantFiles.length} variant file(s) are valid.`);
