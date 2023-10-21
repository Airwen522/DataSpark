import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld('sparkApi', {
    getAppInfo: () => {
        return {
            electron: process.versions.electron,
            chrome: process.versions.chrome,
            node: process.versions.node,
            v8: process.versions.v8,
            platform: process.platform,
            dataspark: process.versions.dataspark
        }
    },
    openDevTool: () => ipcRenderer.send('devtool:open'),
    openAbout: () => ipcRenderer.send('about:open'),
    openStarUs: () => ipcRenderer.send('start-us:open'),
    openDatasource: (type: string) => ipcRenderer.send('datasource:open', type),
    closeDatasource: (type: string) => ipcRenderer.send('datasource:close')
});