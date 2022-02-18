"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var joi_1 = __importDefault(require("joi"));
var register = joi_1.default.object({
    name: joi_1.default.string().max(30).required(),
    email: joi_1.default.string().email().required(),
    password: joi_1.default.string().min(8).required(),
    phoneNo: joi_1.default.string().min(10).max(10).required(),
    dob: joi_1.default.string().required(),
    tob: joi_1.default.string().required(),
    gender: joi_1.default.string().required(),
    maritalStatus: joi_1.default.string().required(),
    language: joi_1.default.string().required(),
    profilePicture: joi_1.default.string().required(),
});
var login = joi_1.default.object({
    email: joi_1.default.string().required(),
    password: joi_1.default.string().required(),
});
var post = joi_1.default.object({
    page: joi_1.default.string().required(),
    limit: joi_1.default.string().required(),
});
exports.default = { register: register, login: login, post: post };
