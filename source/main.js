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

function main() {
    builder = new builder();
    builder.init();
    window = new htmlWindow();
}

function cleanUp() {
    builder.cleanUp();
}
