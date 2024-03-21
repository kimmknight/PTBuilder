function htmlWindow()
{
	var webview;
    var webviewId;
}

htmlWindow.prototype.init = function()
{
    
}

htmlWindow.prototype.cleanUp = function()
{
	this.webview.unregisterEvent("closed", this, this.windowClosed);
}

htmlWindow.prototype.show = function()
{
    if (webViewManager.getWebView(this.webviewId) == null)
	{
		this.webview = webViewManager.createWebView("Builder Code Editor","this-sm:index.html", 600, 400);
		this.webviewId = this.webview.getWebViewId() ;
		this.webview.registerEvent("closed", this, this.windowClosed);
		this.webview.setGeometry(100,100,600,400); // x position, y position, x size, y size
		this.webview.setMinimumWidth(400);
		this.webview.setMinimumHeight(300);
	}

	this.webview.hide();
	this.webview.show();
}

htmlWindow.prototype.windowClosed = function(src, args)
{
	this.webviewId = "";
	this.webview.unregisterEvent("closed", this, this.windowClosed);

}