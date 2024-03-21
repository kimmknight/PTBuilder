function runCode(scriptText) {
    const codeFunction = new Function(scriptText);

    try {
        codeFunction();
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}
