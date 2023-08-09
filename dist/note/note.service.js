"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoteService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const note_schema_1 = require("./schemas/note.schema");
let NoteService = class NoteService {
    constructor(noteModel) {
        this.noteModel = noteModel;
    }
    async getNotes() {
        const notes = this.noteModel.find();
        return notes;
    }
    async getNote(noteID) {
        const note = this.noteModel.findById(noteID);
        return note;
    }
    async createNote(createNoteDTO) {
        const newNote = new this.noteModel(createNoteDTO);
        return newNote.save();
    }
    async deleteNote(noteID) {
        const deletedNote = this.noteModel.findOneAndDelete({ _id: noteID });
        return deletedNote;
    }
    async updateNote(noteID, createNoteDTO) {
        const updatedNote = this.noteModel.findByIdAndUpdate(noteID, createNoteDTO, { new: true });
        return updatedNote;
    }
};
NoteService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(note_schema_1.Note.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], NoteService);
exports.NoteService = NoteService;
//# sourceMappingURL=note.service.js.map