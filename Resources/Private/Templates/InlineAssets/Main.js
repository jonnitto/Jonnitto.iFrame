window.jonnittoIframeCheck = function(e) {
    var src = e.src;
    if (src) {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.src = src;
        document.head.appendChild(script);
        script.onerror = function() {
            var wrapperNode = e.closest('.jonnitto-iframe');
            wrapperNode.parentNode.removeChild(wrapperNode);
        };
        script.parentNode.removeChild(script);
    }
};
