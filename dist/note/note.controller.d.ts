import { NoteService } from './note.service';
import { CreateNoteDTO } from './dto/create-note.dto';
export declare class NoteController {
    private noteService;
    constructor(noteService: NoteService);
    createNote(res: any, createNoteDTO: CreateNoteDTO): Promise<any>;
    getNotes(res: any): Promise<any>;
    getNote(res: any, noteID: any): Promise<any>;
    deleteNote(res: any, noteID: any): Promise<any>;
    updateNote(res: any, createNoteDTO: CreateNoteDTO, noteID: any): Promise<any>;
}
