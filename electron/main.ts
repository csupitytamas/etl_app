import { app, BrowserWindow, Menu, ipcMain, MenuItemConstructorOptions } from "electron";
import * as path from "path";
import {createMenu} from "./menu";

function createWindow() {
  try {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        nodeIntegration: false, // Ajánlott kikapcsolni
        contextIsolation: true, // Biztonsági beállítás
        preload: path.join(__dirname, "preload.js")
      }
    });

    win.loadFile(path.join(__dirname, "../index.html"));
  } catch (error) {
    console.error("Hiba az Electron ablak létrehozásakor:", error);
  }
}

createMenu();
ipcMain.on('open-etl-progress', () => {
  const etlWindow = new BrowserWindow({
    width: 600,
    height: 400,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, "preload.js")
    }
  });

  etlWindow.loadFile(path.join(__dirname, "../src/components/ETLProgress.vue"));
});

app.whenReady().then(() => {
  createWindow();
}).catch((error) => {
  console.error("Hiba az alkalmazás indításakor:", error);
});

ipcMain.on('close-window', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    app.quit();
  }
});
