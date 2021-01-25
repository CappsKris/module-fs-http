const http = require("http");
const path = require("path");
const fsHelper = require("./file-io.js");

const server = http.createServer((req, res) => {
  res.write(fsHelper.writeFile('I still need to go over all of this'));
  res.write(fsHelper.appendFile('\nI had to rewatch Wednesdays recording and copy. Sorry!!!'));
  res.write(fsHelper.readFile('I still need to go over all of this' + " " + 'I had to rewatch Wednesdays recording and copy. Sorry!!!'));
  res.write(fsHelper.deleteFile('fsHelper.appendfile'));
  res.end();
});

server.listen(3000);



