"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var path = require("path");
function createWindow() {
    try {
        var win = new electron_1.BrowserWindow({
            width: 800,
            height: 600,
            webPreferences: {
                nodeIntegration: false, // Ajánlott kikapcsolni
                contextIsolation: true, // Biztonsági beállítás
                preload: path.join(__dirname, "preload.js")
            }
        });
        win.loadFile(path.join(__dirname, "../index.html"));
    }
    catch (error) {
        console.error("Hiba az Electron ablak létrehozásakor:", error);
    }
}
// Menü sablon létrehozása
var menuTemplate = [
    {
        label: "Options",
        submenu: [
            {
                label: "ETL progress"
            },
            {
                label: "Load file to ETL"
            },
            {
                label: "Exit",
                click: function () { return electron_1.app.quit(); },
                accelerator: "CmdOrCtrl+Q"
            }
        ]
    },
    {
        label: "Szerkesztés",
        submenu: [
            { role: "undo" },
            { role: "redo" },
            { type: "separator" },
            { role: "cut" },
            { role: "copy" },
            { role: "paste" }
        ]
    }
];
// Menü létrehozása és hozzárendelése
var menu = electron_1.Menu.buildFromTemplate(menuTemplate);
electron_1.Menu.setApplicationMenu(menu);
electron_1.app.whenReady().then(function () {
    createWindow();
}).catch(function (error) {
    console.error("Hiba az alkalmazás indításakor:", error);
});
electron_1.ipcMain.on('close-window', function () {
    if (electron_1.BrowserWindow.getAllWindows().length === 0) {
        electron_1.app.quit();
    }
});
