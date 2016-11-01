/**
 * Created by peter on 10/27/16.
 */

export default class PrefixData {

    static get prefixJsonFile() {
        return "./public/data/prefix.json";
    }

    static loadData() {
        return require(PrefixData.prefixJsonFile);
    }

    static getLetterList() {
        var letters = [];
        // db.getAllPrefixes().then((prefixes) => {
        //     console.log(prefixes);
        //     prefixes.map(prefix => {
        //         letters.push(prefix.letter);
        //     });
        // });

        return ['a', 'b', 'c', 'd', 'e'];
        // return Object.keys(PrefixData.loadData());
        return letters;
    }

    static getPrefixByLetter(letter) {
        // return Object.keys(PrefixData.loadData()[letter]);
        return [letter+'an', letter+'ab'];
    }

    static getFirstPrefixByLetter(letter) {
        // return PrefixData.getPrefixByLetter(letter)[0];
        return ['an'];
    }

    static getPrefixNode(letter, prefix) {
        // return PrefixData.loadData()[letter][prefix];
    }

    static getPrefixDetail(letter, prefix) {
        // var details = [];
        // var prefixNode = PrefixData.getPrefixNode(letter, prefix);
        // prefixNode.forEach(function (item) {
        //     details.push(item);
        // });
        // return details;
        return [{chinese_meaning: 'abc'}];
    }

    setData() {

    }

    writeData() {

    }
}
