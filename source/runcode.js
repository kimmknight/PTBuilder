function runCode(scriptText) {
    const codeFunction = new Function(scriptText);

    try {
        codeFunction();
        return true;
    } catch (error) {
        console.log(error);
        ipc.appWindow().showMessageBox("Builder", "An error occurred on line " + error.lineNumber + ":", error, 3, 0x00000400, 0x00000400, 0x00000400)
        return false;
    }
}
