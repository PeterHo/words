/**
 * Created by peter on 10/31/16.
 */
// require("babel-polyfill");
// import * as db from '../../index';


const Datastore = require("nedb");
const remote = window.require("electron").remote;
const app = remote.app;
const prefixDB = new Datastore({
    filename: '/home/peter/src/words/public/data/prefixDB2.json',
    autoload: true
});

var doc = { hello: 'world'
    , n: 5
    , today: new Date()
    , nedbIsAwesome: true
    , notthere: null
    , notToBeSaved: undefined  // Will not be saved
    , fruits: [ 'apple', 'orange', 'pear' ]
    , infos: { name: 'nedb' }
};

// prefixDB.insert(doc, function (err, newDoc) {   // Callback is optional
//     // newDoc is the newly inserted document, including its _id
//     // newDoc has no key called notToBeSaved since its value was undefined
// });
console.log(prefixDB);
console.log(prefixDB.getAllData());

