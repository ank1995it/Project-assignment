"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var joi_1 = __importDefault(require("joi"));
var create = joi_1.default.object({
    thumbnailImage: joi_1.default.string().required(),
    headline: joi_1.default.string().min(5).max(100).required(),
    category: joi_1.default.object().keys({
        _id: joi_1.default.string().regex(/^[a-f\d]{24}$/i).required(),
        categoryName: joi_1.default.string().required()
    }),
    authorName: joi_1.default.string().min(3).max(20).required(),
    description: joi_1.default.string().min(5).max(500).required()
});
exports.default = { create: create };
