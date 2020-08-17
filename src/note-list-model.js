(function(exports) {
  function Notelist() {
    this.notes = [];
  }

  Notelist.prototype.add = function(note) {
    this.notes.push(note);
  }

  Notelist.prototype.all = function() {
    return this.notes;
  }

  exports.Notelist = Notelist;
})(this);
