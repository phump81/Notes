function testNoteHasCorrectText() {
  var note = new Note("Javascript");
  assert.isTrue(note.text === "Javascript");
};

function testThatReturnsNoteText() {
  var note = new Note("Javascript");
  assert.isTrue(note.returnText() === "Javascript")
}

testNoteHasCorrectText();
testThatReturnsNoteText();
