const mongose = require('mongoose');

const NoteSchema = mongose.Schema({
    title: String,
    content: String,
}, {
    timestamps: true,
});

module.exports = mongose.model('Note', NoteSchema);
