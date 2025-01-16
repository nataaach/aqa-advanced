class Book {
    constructor(title, author, publicationYear) {
        this.title = title;
        this.author = author;
        this.publicationYear = publicationYear;
    }

    get title() {
        return this._title;
    }

    set title(value) {
        if (typeof value !== 'string' || value.trim() === '') {
            throw new Error('Title must be a non-empty string.');
        }
        this._title = value;
    }

    get author() {
        return this._author;
    }

    set author(value) {
        if (typeof value !== 'string' || value.trim() === '') {
            throw new Error('Author must be a non-empty string.');
        }
        this._author = value;
    }

    get publicationYear() {
        return this._publicationYear;
    }

    set publicationYear(value) {
        if (!Number.isInteger(value) || value <= 0) {
            throw new Error('Publication year must be a positive integer.');
        }
        this._publicationYear = value;
    }

    printInfo() {
        console.log(`Title: ${this.title}, Author: ${this.author}, Year: ${this.publicationYear}`);
    }

    static getOldestBook(books) {
        if (!books.length) return null;
        return books.reduce((oldest, book) => book.publicationYear < oldest.publicationYear ? book : oldest);
    }
}

export default Book;
