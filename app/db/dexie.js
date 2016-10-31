require("babel-polyfill");
import Dexie from 'dexie';

let db;

function init() {
    db = new Dexie('WordsDatabase');
    db.version(1).stores({
        word: '++id, word',
        example: '++id, wordIds',
        meaning: '++id, english, chinese, exampleIds',
        prefixes: '++id, letter, prefix, meaningIds',
    });

    db.transaction('rw', db.prefixes, function*() {
        if ((yield db.prefixes.where('letter').equals('a').count()) == 0) {
            let id = yield db.prefixes.add({
                letter: "a",
                prefix: "a",
            });
            console.log(`Added prefix with id ${id}`);
        }
    }).catch(e => {
        alert(e.stack || e);
    });
}

export function getAllPrefixes() {
    if (!db) {
        init();
    }
    return db.prefixes.toArray();
}

export function savePrefix(prefix) {
    return db.transaction('rw', db.prefixes, () => {
        db.prefixes.put(prefix);
    })
}

export function deletePrefix(id) {
    return db.prefixes.delete(id);
}


// function init2() {
//     db.transaction('rw', db.prefixes, function*() {
//         if ((yield db.prefixes.where('letter').equals('a').count()) == 0) {
//             let id = yield db.prefixes.add({
//                 letter: "a",
//                 prefix: "a",
//             });
//             console.log(`Added prefix with id ${id}`);
//         }
//
//         let prefixes = yield db.prefixes.toArray();
//
//         console.log("Prefixes: " + JSON.stringify(prefixes));
//     }).catch(e => {
//         alert(e.stack || e);
//     });
// }


var letter = {
    _id: "1",
    name: "a",
};


var prefixes = {
    _id: "1",
    parent_id: "1",
};

var meaning = {
    parent_id: "1",
    english: "not",
    chinese: "否定",
};

var example = {
    parent_id: "1",
    word: "anarchy",
};
