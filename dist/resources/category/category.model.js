"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var CategorySchema = new mongoose_1.Schema({
    categoryName: {
        type: String,
        required: true,
    }
}, { timestamps: true });
exports.default = mongoose_1.model('Categories', CategorySchema);
