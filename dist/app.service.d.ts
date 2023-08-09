import { Db } from 'mongodb';
export declare class AppService {
    private database;
    constructor(database: Db);
    getHello(): string;
    getNotes(): Promise<import("mongodb").WithId<import("bson").Document>[]>;
}
