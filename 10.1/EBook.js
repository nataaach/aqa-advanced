import Book from './Book.js';

class EBook extends Book {
    constructor(title, author, publicationYear, fileFormat) {
        super(title, author, publicationYear);
        this.fileFormat = fileFormat;
    }

    get fileFormat() {
        return this._fileFormat;
    }

    set fileFormat(value) {
        if (typeof value !== 'string' || value.trim() === '') {
            throw new Error('File format must be a non-empty string.');
        }
        this._fileFormat = value;
    }

    printInfo() {
        super.printInfo();
        console.log(`File Format: ${this.fileFormat}`);
    }

    static fromBook(book, fileFormat) {
        if (!(book instanceof Book)) {
            throw new Error('Argument must be an instance of Book.');
        }
        return new EBook(book.title, book.author, book.publicationYear, fileFormat);
    }
}

export default EBook;
