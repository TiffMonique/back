import { Model } from 'mongoose';
import { CreateNoteDTO } from './dto/create-note.dto';
import { Note, NoteDocument } from './schemas/note.schema';
export declare class NoteService {
    private noteModel;
    constructor(noteModel: Model<NoteDocument>);
    getNotes(): Promise<Note[]>;
    getNote(noteID: string): Promise<Note>;
    createNote(createNoteDTO: CreateNoteDTO): Promise<Note>;
    deleteNote(noteID: string): Promise<any>;
    updateNote(noteID: string, createNoteDTO: CreateNoteDTO): Promise<Note>;
}
