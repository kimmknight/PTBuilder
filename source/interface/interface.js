/* Auto-start bridge polling — runs inside QWebEngine so XMLHttpRequest is available.
   Polls the MCP bridge at :54321 every 500ms and forwards commands to the Script Engine.
   No manual bootstrap paste required on any platform. */
(function startBridge() {
    var port = 54321;
    var indicator = null;

    function setStatus(connected) {
        if (!indicator) return;
        indicator.style.background = connected ? "#28a745" : "#6c757d";
        indicator.title = connected ? "MCP Bridge: connected" : "MCP Bridge: waiting...";
    }

    function poll() {
        var x = new XMLHttpRequest();
        x.open("GET", "http://127.0.0.1:" + port + "/next", true);
        x.timeout = 800;
        x.onload = function () {
            setStatus(true);
            if (x.status === 200 && x.responseText) {
                $se("runCode", x.responseText);
            }
        };
        x.onerror = x.ontimeout = function () { setStatus(false); };
        x.send();
    }

    window.addEventListener("DOMContentLoaded", function () {
        /* Inject a small status dot next to the Run button */
        indicator = document.createElement("span");
        indicator.style.cssText = "display:inline-block;width:10px;height:10px;border-radius:50%;background:#6c757d;margin-left:8px;vertical-align:middle;";
        indicator.title = "MCP Bridge: waiting...";
        var runBtn = document.querySelector("button.btn-outline-success");
        if (runBtn) runBtn.parentNode.insertBefore(indicator, runBtn.nextSibling);
        setInterval(poll, 500);
    });
})();

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