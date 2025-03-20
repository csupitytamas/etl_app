// preload.js
import {contextBridge, ipcRenderer} from "electron";


// Az electronAPI objektum elérhetővé tétele a renderer folyamat számára
contextBridge.exposeInMainWorld('electronAPI', {
  openETLProgress: (callback) => ipcRenderer.on('open-etl-progress', callback),
  closeApp: () => ipcRenderer.send('close-window')
});
