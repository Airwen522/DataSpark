/// <reference types="electron/electron" />

declare namespace DataSpark {

    declare enum DBType {
        MYSQL,
        SQLITE
    }

    declare interface AppInfo {
        electron: string;
        chrome: string;
        node: string;
        v8: string;
        platform: string;
        dataspark: string;
    }
}

declare interface SparkApi {
    getAppInfo: () => AppInfo;
    openDevTool: () => void;
    openAbout: () => void;
    openStarUs: () => void;
    openDatasource: (type: string) => void;
    closeDatasource: () => void;
}

declare global {
    const mainWindow: Electron.BrowserWindow;
    interface Window {
        sparkApi: SparkApi
    }
}

export default DataSpark;