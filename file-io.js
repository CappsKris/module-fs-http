const fs = require('fs');
const path = require("path");

const myPath = path.resolve(__dirname, "file.txt");

function writeFile(string) {
  return fs.writeFileSync(myPath, string);
}

function appendFile(string) {
  return fs.appendFileSync(myPath, string);
}

function readFile(string) {
  return fs.readFileSync(myPath, string);
}

function deleteFile(string) {
  return fs.unlinkSync(myPath, string)
}

module.exports = {
  writeFile,
  appendFile,
  readFile,
  deleteFile,
};
