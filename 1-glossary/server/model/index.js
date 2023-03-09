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
    return Word.find();
  },
  addWord: function(word) {
    const newWord = new Word(word);
    return newWord.save();
  },
  editWord: function(word) {
    return Word.findOneAndUpdate({name : word.name}, word);
  },
  deleteWord: function(word) {
    return Word.deleteOne({name: word.name});
  },
}