const fs = require("fs");
const yargs = require("yargs");
const notes = require("./note.js");

var title = yargs.argv.title;
var body = yargs.argv.body;
var command = yargs.argv._[0];

switch (command) {
  case "add":
    process.argv.length === 7
      ? notes.addingNote(title, body)
      : process.argv.length === 4
      ? console.log("Missing required argument: title\n")
      : process.argv.length === 6
      ? console.log("Missing required argument: body\n")
      : console.log(fs.readFileSync("./error").toString());
    break;
  case "remove":
    process.argv.length === 5
      ? notes.removeNote(title)
      : console.log(fs.readFileSync("./error").toString());
    break;
  case "read":
    process.argv.length === 5
      ? notes.readNote(title)
      : console.log(fs.readFileSync("./error").toString());
    break;
  case "list":
    process.argv.length === 3
      ? notes.listNote()
      : console.log(fs.readFileSync("./error").toString());
    break;
  default:
    console.log("Unknown command was used!");
}
