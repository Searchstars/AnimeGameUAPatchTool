const { app } = require('@electron/remote');

const alertOnlineStatus = () => {
    if(!app.isPackaged){
        if(navigator.onLine){
            dialog.showMessageBox({
                type: "info",
                title: "Check Network",
                message: "onLine",
                buttons: ["ohhhhhhhhhhhhhhhhhhhhhhhhh"]
            })
        }
    }
    if(!navigator.onLine){
        dialog.showMessageBox({
            type: "info",
            title: "No network connection",
            message: "This program requires an internet connection, but it looks like you are not connected to the internet at this time...",
            buttons: ["Quit"]
        })
        app.quit()
    }
  }

window.addEventListener('online',  alertOnlineStatus)
window.addEventListener('offline',  alertOnlineStatus)

alertOnlineStatus()
/* Check network connection because this program need use network */