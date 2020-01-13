window.jonnittoIframeCheck = function(e) {
    var src = e.src;
    if (src) {
        fetch(src).catch(function() {
            console.error(`The iframe with the source ${src} returend an error, so the element was removed`);
            var wrapperNode = e.closest('.jonnitto-iframe');
            wrapperNode.parentNode.removeChild(wrapperNode);
        });
    }
};
