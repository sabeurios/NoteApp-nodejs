const fs = require("fs");

var fetchNotes = () => {
  try {
    return JSON.parse(fs.readFileSync("notes.txt"));
  } catch (err) {
    return [];
  }
};

var addingNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title,
    body,
  };

  var doubleTitel = notes.filter((note) => note.title === title);

  if (doubleTitel.length === 0) {
    notes.push(note);
    fs.writeFileSync("notes.txt", JSON.stringify(notes));
    console.log("Note  created");
    logNote(note);
  } else {
    console.log("Title already exists.");
  }
};

var removeNote = (title) => {
  var notes = fetchNotes();

  var filteredNotes = notes.filter((note) => note.title !== title);

  fs.writeFileSync("notes.txt", JSON.stringify(filteredNotes));
  console.log("Note was removed");
};

var readNote = (title) => {
  var notes = fetchNotes();

  var filteredNotes = notes.filter((note) => note.title === title);

  console.log("Note found");
  logNote(filteredNotes[0]);
};

var listNote = () => {
  var notes = fetchNotes();

  console.log(`Printing ${notes.length} note(s)`);
  notes.forEach((note) => logNote(note));
};

var logNote = (note) => {
  console.log("--");
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
};

module.exports = {
  addingNote,
  removeNote,
  readNote,
  listNote,
};
