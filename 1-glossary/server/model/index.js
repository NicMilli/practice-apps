const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/glossary');

const wordSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true
  },
  definition: String
})

const Word = mongoose.model('Word', wordSchema);

module.exports = {
  getAll: function() {
    return Word.find().then((response) => {
      return response.sort((a, b) => {
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
    });
    });
  },
  addWord: function(word) {
    const newWord = new Word(word);
    return newWord.save();
  },
  editWord: function({previousItem, newItem}) {
    return Word.findOneAndUpdate({name : previousItem.name}, newItem);
  },
  deleteWord: function(word) {
    return Word.deleteOne({name: word.name});
  },
  searchWord: function(term) {
    return Word.find().then((response) => {
      return response.filter(
        (word) => word.name.includes(term)
        ).sort((a, b) => {
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
    });
    });
  },
}