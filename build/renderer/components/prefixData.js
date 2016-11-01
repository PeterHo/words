'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by peter on 10/27/16.
 */

var PrefixData = function () {
    function PrefixData() {
        _classCallCheck(this, PrefixData);
    }

    _createClass(PrefixData, [{
        key: 'setData',
        value: function setData() {}
    }, {
        key: 'writeData',
        value: function writeData() {}
    }], [{
        key: 'loadData',
        value: function loadData() {
            return require(PrefixData.prefixJsonFile);
        }
    }, {
        key: 'getLetterList',
        value: function getLetterList() {
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
    }, {
        key: 'getPrefixByLetter',
        value: function getPrefixByLetter(letter) {
            // return Object.keys(PrefixData.loadData()[letter]);
            return [letter + 'an', letter + 'ab'];
        }
    }, {
        key: 'getFirstPrefixByLetter',
        value: function getFirstPrefixByLetter(letter) {
            // return PrefixData.getPrefixByLetter(letter)[0];
            return ['an'];
        }
    }, {
        key: 'getPrefixNode',
        value: function getPrefixNode(letter, prefix) {
            // return PrefixData.loadData()[letter][prefix];
        }
    }, {
        key: 'getPrefixDetail',
        value: function getPrefixDetail(letter, prefix) {
            // var details = [];
            // var prefixNode = PrefixData.getPrefixNode(letter, prefix);
            // prefixNode.forEach(function (item) {
            //     details.push(item);
            // });
            // return details;
            return [{ chinese_meaning: 'abc' }];
        }
    }, {
        key: 'prefixJsonFile',
        get: function get() {
            return "./public/data/prefix.json";
        }
    }]);

    return PrefixData;
}();

exports.default = PrefixData;
//# sourceMappingURL=prefixData.js.map