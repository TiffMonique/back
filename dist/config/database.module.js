"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("@nestjs/mongoose");
const DatabaseModule = mongoose_1.MongooseModule.forRoot(process.env.MONGODB_URI);
exports.default = DatabaseModule;
//# sourceMappingURL=database.module.js.map