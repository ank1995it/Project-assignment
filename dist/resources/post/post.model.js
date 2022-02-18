"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var bson_1 = require("bson");
var PostSchema = new mongoose_1.Schema({
    thumbnailImage: {
        type: String,
        required: true,
    },
    headline: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        _id: { type: bson_1.ObjectID, required: true },
        categoryName: { type: String, required: true }
    },
    authorName: {
        type: String,
        required: true,
    }
}, { timestamps: true });
exports.default = mongoose_1.model('Post', PostSchema);
