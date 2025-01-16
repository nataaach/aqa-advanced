import Book from './Book.js';
import EBook from './EBook.js';

const book1 = new Book('Holly', 'Stephen King', 2023);
const book2 = new Book('The Shining', 'Stephen King', 1977);
book1.printInfo();
book2.printInfo();

const ebook1 = new EBook('It', 'Stephen King', 1986, 'PDF');
ebook1.printInfo();

const books = [book1, book2, ebook1];
const oldestBook = Book.getOldestBook(books);
console.log('Oldest Book:');
oldestBook.printInfo();

const newEBook = EBook.fromBook(book1, 'EPUB');
newEBook.printInfo();
