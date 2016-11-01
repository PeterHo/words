var cfg = require('./build/config');
if (cfg.default.dev) {
    require('electron-reload')(__dirname, {ignored: /node_modules|[\/\\]\./});
}
require('./build/main');