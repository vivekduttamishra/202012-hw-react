"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const book_1 = __importDefault(require("./lib/book"));
let book = new book_1.default("The Accursed God", "Vivek Dutta Mihsra");
console.log(book);
