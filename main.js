const { app, BrowserWindow } = require('electron')

function createWindow () {

const win = new BrowserWindow({

width: 800,

height: 600,

kiosk: true,
//fullscreen: true,

webPreferences: {

nodeIntegration: true } })

win.loadURL('http://192.168.60.87:3000/')

//win.webContents.openDevTools()

}

app.on('ready', createWindow)

app.on('window-all-closed', () => {

if (process.platform !== 'darwin') {

app.quit() } })

app.on('activate', () => {

if (BrowserWindow.getAllWindows().length === 0) {

createWindow() } })