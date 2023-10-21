import { BrowserWindow } from "electron";
import path from 'node:path';
import { URL } from 'node:url';

export function loadRoute(window: BrowserWindow, route: string, query?: any) {
    const appEntry = 'index.html';
    if (process.env.VITE_DEV_SERVER_URL) {
        const url = new URL(appEntry, process.env.VITE_DEV_SERVER_URL);
        url.hash = route;
        window.loadURL(url.href+"?"+new URLSearchParams(query).toString());
    } else {
        window.loadFile(path.join(process.env.DIST!, appEntry), { hash: route, query });
    }
}