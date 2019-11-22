const NoteController = require('../controllers/note.controller.js');

module.exports = (app) => {
    const notes = new NoteController();

    app.post('/notes', notes.create.bind(notes));

    app.get('/notes', notes.findAll.bind(notes));

    app.get('/notes/:noteId', notes.findOneById.bind(notes));

    app.put('/notes/:noteId', notes.updateById.bind(notes));

    app.delete('/notes/:noteId', notes.deleteById.bind(notes));
};
