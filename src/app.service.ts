import { Injectable, Inject } from '@nestjs/common';
import { Db } from 'mongodb';

@Injectable()
export class AppService {
  constructor(
    //@Inject('NOTE') private notes: any[z],
    @Inject('MONGO') private database: Db,
  ) {}

  getHello(): string {
    return `Hello World!`;
  }
  getNotes() {
    const notesCollection = this.database.collection('notes');
    return notesCollection.find().toArray();
  }
}
