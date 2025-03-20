import { Menu, app, MenuItemConstructorOptions } from "electron";

export const menuTemplate: MenuItemConstructorOptions[] = [
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
        click: () => app.quit(),
        accelerator: "CmdOrCtrl+Q"
      }
    ]
  },
  {
    label: "Edit",
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

export const createMenu = () => {
  const menu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(menu);
};
