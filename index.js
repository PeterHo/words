const electron = require('electron');
const {app, BrowserWindow, Menu, ipcMain, ipcRenderer} = electron;

const Datastore = require("nedb");
const prefixDB = new Datastore({
    filename: 'public/data/prefixDB.json',
    autoload: true
});

console.log(prefixDB);

let isDevelopment = true;

if (isDevelopment) {
    require('electron-reload')(__dirname, {ignored: /node_modules|[\/\\]\./});
}

let mainWnd = null;

function createMainWnd() {
    mainWnd = new BrowserWindow({
        width: 800,
        height: 600,
        icon: 'public/img/app-icon.jpeg'
    });

    if (isDevelopment) {
        // mainWnd.webContents.openDevTools();
    }

    // mainWnd.setMenu(null);

    mainWnd.loadURL(`file://${__dirname}/index.html`);

    mainWnd.on('closed', () => {
        mainWnd = null;
    });
}

app.on('ready', createMainWnd);

app.on('window-all-closed', () => {
    app.quit();
});

