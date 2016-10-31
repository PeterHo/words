/**
 * Created by peter on 10/27/16.
 */
import * as db from '../db/dexie';

export default class PrefixData {

    static get prefixJsonFile() {
        return "./public/data/prefix.json";
    }

    static loadData() {
        return require(PrefixData.prefixJsonFile);
    }

    static getLetterList() {
        var letters = [];
        db.getAllPrefixes().then((prefixes) => {
            console.log(prefixes);
            prefixes.map(prefix => {
                letters.push(prefix.letter);
            });
        });

        // return Object.keys(PrefixData.loadData());
        return letters;
    }

    static getPrefixByLetter(letter) {
        return Object.keys(PrefixData.loadData()[letter]);
    }

    static getFirstPrefixByLetter(letter) {
        return PrefixData.getPrefixByLetter(letter)[0];
    }

    static getPrefixNode(letter, prefix) {
        return PrefixData.loadData()[letter][prefix];
    }

    static getPrefixDetail(letter, prefix) {
        var details = [];
        var prefixNode = PrefixData.getPrefixNode(letter, prefix);
        prefixNode.forEach(function (item) {
            details.push(item);
        });
        return details;
    }

    setData() {

    }

    writeData() {

    }
}
