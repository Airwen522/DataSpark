import { BrowserWindow, app, ipcMain, shell } from 'electron';
import path from 'path';
import { loadRoute } from '../utils/route';

app.on('window-all-closed', () => {
    app.quit();
});

ipcMain.on('devtool:open', () => {
    const mainWindow = BrowserWindow.fromId(1);
    mainWindow?.webContents.openDevTools({ mode: 'detach' })
});

ipcMain.on('about:open', () => {
    const mainWindow = BrowserWindow.fromId(1);
    const aboutWindow = new BrowserWindow({
        height: 300,
        width: 500,
        parent: mainWindow!,
        modal: true,
        minimizable: false,
        maximizable: false,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    });
    aboutWindow.setMenu(null);
    loadRoute(aboutWindow, "/about");
});

ipcMain.on('start-us:open', () => {
    shell.openExternal('https://github.com/Airwen522/dataspark');
});

let dsWindow: BrowserWindow;
ipcMain.on('datasource:open', (_, message) => {
    const mainWindow = BrowserWindow.fromId(1);
    dsWindow = new BrowserWindow({
        parent: mainWindow!,
        modal: true,
        height: 450,
        width: 400,
        minimizable: false,
        maximizable: false,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    });
    dsWindow.setMenu(null);
    loadRoute(dsWindow, "/datasource", { mode: message });
});

ipcMain.on('datasource:close', () => {
    dsWindow.close();
})