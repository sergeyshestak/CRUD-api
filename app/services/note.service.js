const NoteRepository = require('../repositories/note.repository');

class NoteServices {
    constructor() {
        this.noteRepository = new NoteRepository();
    }

    async create(title, content) {
        return await this.noteRepository.create(title, content);
    }

    async findAll() {
        return await this.noteRepository.findAll();
    }

    async findOneById(id) {
        return await this.noteRepository.findOneById(id);
    }

    async updateById(title, content, id) {
        return await this.noteRepository.updateById(title, content, id);
    }

    async deleteById(id) {
        return await this.noteRepository.deleteById(id);
    }
}

module.exports = NoteServices;
