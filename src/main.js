const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
      width: 840,
      height: 500,
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
        enableRemoteModule: true
      }  
    })
    const remote = require('@electron/remote/main')
    remote.initialize()
    remote.enable(win.webContents)
    win.setIcon("./src/appicon_512_transparent.png")
    win.title = "Anime Game UA Patch Tool"
    win.resizable = false
    win.loadFile('./src/index.html')
    /* Create a window and load index.html*/
}

app.whenReady().then(() => {
    console.log("running")
    console.log("checking network connection")
    createWindow()
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})