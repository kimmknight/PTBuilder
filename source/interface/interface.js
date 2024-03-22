function copyToClipboard() {
    var currentCode = document.getElementById("codeeditor").value;
    navigator.clipboard.writeText(currentCode);
}

function pasteFromClipboard() {
    navigator.clipboard.readText()
    .then((clipboardText) => {
        document.getElementById("codeeditor").value = clipboardText;
    })
}

function executeCode() {
    var code = document.getElementById("codeeditor").value;
    code = code.replace(/\n/g, "");
    $se("runCode", code)
}

function clearEditor() {
    document.getElementById("codeeditor").value = "";
}

function saveCode() {
    let code = document.getElementById("codeeditor").value;
    $putData("code", code);
}

function loadCode() {
    $getData("code").then((code) => {
        document.getElementById("codeeditor").value = code;
    })
}