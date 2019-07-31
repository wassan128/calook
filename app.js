"use strict";

const { app, BrowserWindow } = require("electron")

function createWindow() {
    let win = new BrowserWindow({
        width: 800,
        height: 600,
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
