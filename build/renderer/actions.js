'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.addBook = addBook;
exports.listBooks = listBooks;
exports.delBook = delBook;
exports.editBook = editBook;
exports.concatBooks = concatBooks;
exports.activeBook = activeBook;
exports.popHistory = popHistory;
exports.pushHistory = pushHistory;
exports.listFiles = listFiles;
exports.addFile = addFile;
exports.delFile = delFile;
exports.editFile = editFile;
exports.concatFiles = concatFiles;
exports.activeFile = activeFile;
exports.setGlobalBook = setGlobalBook;
exports.setEditorState = setEditorState;

var _constants = require('../constants');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LIST_BOOKS = _constants2.default.LIST_BOOKS,
    ADD_BOOK = _constants2.default.ADD_BOOK,
    DEL_BOOK = _constants2.default.DEL_BOOK,
    EDIT_BOOK = _constants2.default.EDIT_BOOK,
    CONCAT_BOOKS = _constants2.default.CONCAT_BOOKS,
    ACTIVE_BOOK = _constants2.default.ACTIVE_BOOK,
    POP_HISTORY = _constants2.default.POP_HISTORY,
    PUSH_HISTORY = _constants2.default.PUSH_HISTORY,
    LIST_FILES = _constants2.default.LIST_FILES,
    ADD_FILE = _constants2.default.ADD_FILE,
    DEL_FILE = _constants2.default.DEL_FILE,
    EDIT_FILE = _constants2.default.EDIT_FILE,
    CONCAT_FILES = _constants2.default.CONCAT_FILES,
    ACTIVE_FILE = _constants2.default.ACTIVE_FILE,
    SET_GLOBAL_BOOK = _constants2.default.SET_GLOBAL_BOOK,
    SET_EDITOR_STATE = _constants2.default.SET_EDITOR_STATE;

/* book actions */

function addBook(book) {
    return {
        type: ADD_BOOK,
        book: book
    };
}

function listBooks(books) {
    return {
        type: LIST_BOOKS,
        books: books
    };
}

function delBook(book) {
    return {
        type: DEL_BOOK,
        book: book
    };
}

function editBook(book) {
    return {
        type: EDIT_BOOK,
        book: book
    };
}

function concatBooks(books) {
    return {
        type: CONCAT_BOOKS,
        books: books
    };
}

function activeBook(book) {
    return {
        type: ACTIVE_BOOK,
        book: book
    };
}

/* history actions */
function popHistory() {
    return {
        type: POP_HISTORY
    };
}

function pushHistory(history) {
    return {
        type: PUSH_HISTORY,
        history: history
    };
}

/* file actions */
function listFiles(files) {
    return {
        type: LIST_FILES,
        files: files
    };
}

function addFile(file) {
    return {
        type: ADD_FILE,
        file: file
    };
}

function delFile(file) {
    return {
        type: DEL_FILE,
        file: file
    };
}

function editFile(file) {
    return {
        type: EDIT_FILE,
        file: file
    };
}

function concatFiles(files) {
    return {
        type: CONCAT_FILES,
        files: files
    };
}

// active file
function activeFile(file) {
    return {
        type: ACTIVE_FILE,
        file: file
    };
}

// set global book id for create note
function setGlobalBook(globalBook) {
    return {
        type: SET_GLOBAL_BOOK,
        globalBook: globalBook
    };
}

// set editorState for anote editor
function setEditorState(state) {
    return {
        type: SET_EDITOR_STATE,
        state: state
    };
}