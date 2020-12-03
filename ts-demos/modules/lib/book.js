"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
    toString() {
        return `Book[${this.title},${this.author}]`;
    }
}
exports.default = Book;
