"use strict";

const { app, BrowserWindow } = require("electron")

function createWindow() {
    let win = new BrowserWindow({
        width: 1000,
        height: 720,
        frame: false,
        webPreferences: {
            nodeIntegration: true
        }
    })

    win.on("closed", () => {
        win = null
    })

    win.loadURL("https://outlook.live.com/calendar/view/month")
}

app.on("ready", createWindow)
