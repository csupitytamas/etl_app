const { app, BrowserWindow } = require('electron');

function createWindow() {
  try {
    const win = new BrowserWindow({
      width: 400,
      height: 300,
      webPreferences: {
        nodeIntegration: true
      }
    });
    win.loadURL('http://localhost:3000');  // or load a file, depending on your setup
  } catch (error) {
    console.error('Error creating Electron window:', error);
  }
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('quit', () => {
  console.log('Electron app is quitting.');
});
