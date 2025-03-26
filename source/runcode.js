function runCode(scriptText) {
    try {
        const codeFunction = new Function(scriptText);
        try {
            codeFunction();
            return true;
        } catch (error) {
            console.log(error);
            ipc.appWindow().showMessageBox("Builder" + " ".repeat(100), "An error occurred on line " + error.lineNumber + ":", error, 3, 0x00000400, 0x00000400, 0x00000400)
            return false;
        }
    } catch (error) {
        console.log(error);
        ipc.appWindow().showMessageBox("Builder" + " ".repeat(100), "An error occurred:", error, 3, 0x00000400, 0x00000400, 0x00000400)
    }
}
