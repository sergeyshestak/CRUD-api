const Note = require('../models/note.model');

class NoteRepository {
    constructor() {
        this.Note = Note;
    }

    async create(title, content) {
        const note = new Note({
            title: title || 'Untitle Note.',
            content,
        });

        return await note.save();
    }

    async findAll() {
        return await Note.find();
    }

    async findOneById(id) {
        return await Note.findById(id);
    }

    async updateById(title, content, id) {
        return await Note.findByIdAndUpdate(id, {
            title,
            content,
        }, { new: true });
    }

    async deleteById(id) {
        return await Note.findByIdAndRemove(id);
    }
}

module.exports = NoteRepository;
