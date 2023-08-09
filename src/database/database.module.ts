import { Global, Module } from '@nestjs/common';
import { MongoClient } from 'mongodb';

@Global()
@Module({
  providers: [
    {
      provide: 'MONGO',
      useFactory: async () => {
        const uri = 'mongodb://localhost:27017/';
        const client = new MongoClient(uri);
        await client.connect();
        const database = client.db('note-app');
        return database;
      },
    },
  ],
  exports: ['MONGO'],
})
export class DatabaseModule {}
