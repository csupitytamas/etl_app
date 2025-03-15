var _a = require('electron'), app = _a.app, BrowserWindow = _a.BrowserWindow;
function createWindow() {
    try {
        var win = new BrowserWindow({
            width: 800,
            height: 600,
            webPreferences: {
                nodeIntegration: true
            }
        });
        win.loadURL('http://localhost:3000'); // or load a file, depending on your setup
    }
    catch (error) {
        console.error('Error creating Electron window:', error);
    }
}
app.whenReady().then(createWindow);
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
app.on('quit', function () {
    console.log('Electron app is quitting.');
});
