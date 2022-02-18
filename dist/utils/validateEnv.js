"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var envalid_1 = require("envalid");
function validateEnv() {
    envalid_1.cleanEnv(process.env, {
    // NODE_ENV: str({
    //     choices: ['development', 'production'],
    // }),
    // MONGO_PASSWORD: "",
    // MONGO_PATH: "str()",
    // MONGO_USER: "str()",
    // PORT: port({ default: 3000 }),
    });
}
exports.default = validateEnv;
