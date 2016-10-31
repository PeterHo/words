'use strict';

var _constants = require('../constants');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var path = require('path'),
    Datastore = require('nedb'),
    db = {};

db.files = new Datastore({ filename: path.resolve(_constants2.default.DB_PATH, './files'),
  autoload: true,
  timestampData: true }), db.books = new Datastore({ filename: path.resolve(_constants2.default.DB_PATH, './books'),
  autoload: true,
  timestampData: true }), db.tags = new Datastore({ filename: path.resolve(_constants2.default.DB_PATH, './tags'),
  autoload: true,
  timestampData: true }), db.infos = new Datastore({ filename: path.resolve(_constants2.default.DB_PATH, './infos'),
  autoload: true,
  timestampData: true });

db.books.ensureIndex({ fieldName: 'updatedAt' });
db.files.ensureIndex({ fieldName: 'updatedAt' });
db.files.ensureIndex({ fieldName: 'bookId' });

db.files.ensureIndex({ fieldName: '_id', unique: true }, function (err) {});

module.exports = db;
//# sourceMappingURL=set_db.js.map