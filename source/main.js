function builder() {
    this.m_builderUuid = "";
    this.errors = [];
}

builder.prototype.init = function () {
    var menu = ipc.appWindow().getMenuBar().getExtensionsPopupMenu();
    this.m_builderUuid = menu.insertItem("", "Builder Code Editor");
    var menuItem = menu.getMenuItemByUuid(this.m_builderUuid);
    menuItem.registerEvent("onClicked", this, this.menuClicked);
};

builder.prototype.cleanUp = function () {
    if (this.m_builderUuid != "") {
        var menu = ipc.appWindow().getMenuBar().getExtensionsPopupMenu();
        _ScriptModule.unregisterIpcEventByID("MenuItem", this.m_builderUuid, "onClicked", this, this.menuClicked);
        menu.removeItemUuid(this.m_builderUuid);
        this.m_builderUuid = "";
    }
};

builder.prototype.menuClicked = function (src, args) {
    window.show();
};

builder.prototype.enterGlobalConfigMode = function(deviceName) {
    var mode = "";
    var count = 0;
    while (mode != "global") {
        count++;
        if (count >= 10) {
            return false;
        }

        var cl = ipc.network().getDevice(deviceName).getCommandLine();
        var mode = cl.getMode();

        if (mode == "") {
            var prompt = ipc.network().getDevice(deviceName).getCommandLine().getPrompt();
            if (prompt == "Would you like to enter the initial configuration dialog? [yes/no]: ") {
                builder.sendIosCommand(deviceName, "no");
            }
        } else if (mode == "logout") {
            builder.sendIosCommand(deviceName, "");
        } else if (mode == "user") {
            builder.sendIosCommand(deviceName, "enable");
        } else if (mode == "enable") {
            builder.sendIosCommand(deviceName, "configure terminal");
        } else if (mode != "global") {
            builder.sendIosCommand(deviceName, "end");
            builder.sendIosCommand("");
        }
    }

    return true;
}

builder.prototype.sendIosCommand = function(deviceName, command) {
    ipc.network().getDevice(deviceName).getCommandLine().enterCommand(command);
}

function main() {
    builder = new builder();
    builder.init();
    window = new htmlWindow();
}

function cleanUp() {
    builder.cleanUp();
}
