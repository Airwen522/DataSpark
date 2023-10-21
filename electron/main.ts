import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path';
import './handler/index';
import { loadRoute } from './utils/route';
const isDev = process.env.NODE_ENV === 'development';

// 禁用安全提示
process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';
process.versions.dataspark = '0.0.1-alpha';
process.env.DIST = path.join(__dirname, '../dist');
process.env.VITE_PUBLIC = app.isPackaged
    ? process.env.DIST
    : path.join(process.env.DIST, '../public');

function createMainWindow() {
    const mainWindow = new BrowserWindow({
        height: 900,
        width: 1200,
        icon: path.resolve(process.env.VITE_PUBLIC!, 'logo.svg'),
        titleBarStyle: 'hidden',
        titleBarOverlay: {
            color: '#f9fafb',
            symbolColor: '#272E3B'
        },
        webPreferences: {
            devTools: isDev,
            contextIsolation: true,
            nodeIntegration: true,
            preload: path.join(__dirname, 'preload.js')
        }
    });
    // 载入路由
    loadRoute(mainWindow,'');
    
    // isDev && mainWindow.webContents.openDevTools({ mode: 'detach' });
}

app.whenReady().then(() => {
    createMainWindow();
});