const NoteService = require('../services/note.service');

class NoteController {
    constructor() {
        this.noteService = new NoteService();
    }

    async create(req, res) {
        try {
            if (!req || !req.body || !req.body.title || !req.body.content) {
                throw new Error('Wrong params.');
            }

            const { title, content } = req.body;

            const result = await this.noteService.create(title, content);

            res.send({
                result,
                error: null,
            });
        } catch (e) {
            res.status(400).send({
                result: null,
                error: e.message,
            });
        }
    }

    async findAll(req, res) {
        try {
            const result = await this.noteService.findAll();

            res.send({
                result,
                error: null,
            });
        } catch (e) {
            res.status(400).send({
                result: null,
                error: e.message,
            });
        }
    }

    async findOneById(req, res) {
        try {
            const { noteId } = req.params;
            const result = await this.noteService.findOneById(noteId);

            res.send({
                result,
                error: null,
            });
        } catch (e) {
            res.status(400).send({
                result: null,
                error: e.message,
            });
        }
    }

    async updateById(req, res) {
        try {
            if (!req || !req.body || !req.body.title || !req.body.content) {
                throw new Error('Wrong params.');
            }

            const { title, content } = req.body;
            const { noteId } = req.params;

            const result = await this.noteService.updateById(title, content, noteId);

            res.send({
                result,
                error: null,
            });
        } catch (e) {
            res.status(400).send({
                result: null,
                error: e.message,
            });
        }
    }

    async deleteById(req, res) {
        try {
            const { noteId } = req.params;
            const result = await this.noteService.deleteById(noteId);

            res.send({
                result,
                error: null,
            });
        } catch (e) {
            res.status(400).send({
                result: null,
                error: e.message,
            });
        }
    }
}

module.exports = NoteController;
