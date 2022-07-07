const { dialog } = require('@electron/remote');
const fs = require('fs')

var file_path

function select_ua_file(){
    file_path = dialog.showOpenDialogSync({
        title:'Select UserAssembly.dll',
        filters:[{
        name: 'UserAssembly.dll',
        extensions: ['dll']
        }]
    });
    if(file_path){
        document.getElementById("select_path_view").innerHTML = "Path: " + file_path[0];
    }
}

function cs_dialog(){
    dialog.showMessageBox({
        type: "info",
        title: "Confidentiality statement",
        message: "just don't casually send this software to people you don't trust.",
        buttons: ["OK"]
    })
}

function is_dialog(){
    dialog.showMessageBox({
        type: "info",
        title: "Instructions",
        message: "This program is the best instruction.",
        buttons: ["OK"]
    })
}

function test_(){
    const data = fs.readFileSync(file_path[0])
    const data_buff = Buffer.from(data)
    data_buff.fill(Buffer.from("90","hex"), start=0x018C0410, end=0x018C0411)
    data_buff.fill(Buffer.from("90","hex"), start=0x018C0411, end=0x018C0412)
    data_buff.fill(Buffer.from("B0","hex"), start=0x029A3C60, end=0x029A3C61)
    data_buff.fill(Buffer.from("01","hex"), start=0x029A3C61, end=0x029A3C62)
    data_buff.fill(Buffer.from("C3","hex"), start=0x029A3C62, end=0x029A3C63)
    fs.writeFileSync(file_path[0], data_buff)
    dialog.showMessageBox({
        type: "info",
        title: "success",
        message: "Operation completed successfully.",
        buttons: ["OK"]
    })
}