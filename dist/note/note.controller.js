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
exports.NoteController = void 0;
const common_1 = require("@nestjs/common");
const note_service_1 = require("./note.service");
const create_note_dto_1 = require("./dto/create-note.dto");
let NoteController = class NoteController {
    constructor(noteService) {
        this.noteService = noteService;
    }
    async createNote(res, createNoteDTO) {
        const note = await this.noteService.createNote(createNoteDTO);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Note Successfully Created',
            note,
        });
    }
    async getNotes(res) {
        const notes = await this.noteService.getNotes();
        return res.status(common_1.HttpStatus.OK).json(notes);
    }
    async getNote(res, noteID) {
        const note = await this.noteService.getNote(noteID);
        if (!note)
            throw new common_1.NotFoundException('Note does not exist!');
        return res.status(common_1.HttpStatus.OK).json(note);
    }
    async deleteNote(res, noteID) {
        const noteDeleted = await this.noteService.deleteNote(noteID);
        if (!noteDeleted)
            throw new common_1.NotFoundException('Note does not exist!');
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Note Deleted Successfully',
            noteDeleted,
        });
    }
    async updateNote(res, createNoteDTO, noteID) {
        const updatedNote = await this.noteService.updateNote(noteID, createNoteDTO);
        if (!updatedNote)
            throw new common_1.NotFoundException('Note does not exist!');
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Note Updated Successfully',
            updatedNote,
        });
    }
};
__decorate([
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_note_dto_1.CreateNoteDTO]),
    __metadata("design:returntype", Promise)
], NoteController.prototype, "createNote", null);
__decorate([
    (0, common_1.Get)('/'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NoteController.prototype, "getNotes", null);
__decorate([
    (0, common_1.Get)('/:noteID'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('noteID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], NoteController.prototype, "getNote", null);
__decorate([
    (0, common_1.Delete)('/delete'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Query)('noteID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], NoteController.prototype, "deleteNote", null);
__decorate([
    (0, common_1.Put)('/update'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Query)('noteID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_note_dto_1.CreateNoteDTO, Object]),
    __metadata("design:returntype", Promise)
], NoteController.prototype, "updateNote", null);
NoteController = __decorate([
    (0, common_1.Controller)('note'),
    __metadata("design:paramtypes", [note_service_1.NoteService])
], NoteController);
exports.NoteController = NoteController;
//# sourceMappingURL=note.controller.js.map