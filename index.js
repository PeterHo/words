var cfg = require('./build/config');
if (cfg.dev) {
    require('electron-reload')(__dirname, {ignored: /node_modules|[\/\\]\./});
}
require('./build/main');