function testThatNewNoteListIsCreated() {
  var notelist = new Notelist();
  assert.isTrue(notelist.notes.length === 0);
}

function addsNewNoteToArray() {
  var notelist = new Notelist();
  notelist.add("note");
  assert.isTrue(notelist.notes.length === 1);
}

function returnsAllNotesFromTheList() {
  var notelist = new Notelist();
  notelist.add("note");
  notelist.add("another note");
  assert.isTrue(notelist.all().length === 2);
}

function canStoreInstancesOfNoteModel() {
  var note = new Note("note")
  var notelist = new Notelist();
  notelist.add(note);
  assert.isTrue(notelist.notes[0] instanceof Note);
}

testThatNewNoteListIsCreated();
addsNewNoteToArray();
returnsAllNotesFromTheList();
canStoreInstancesOfNoteModel();
