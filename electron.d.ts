import { IpcRenderer } from "electron";

declare global {
  interface Window {
    electronAPI: {
      openETLProgress: (callback: () => void) => void;
      closeApp: () => void;
    };
  }
}
