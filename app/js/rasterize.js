var page = require("webpage").create();
var system = require("system");

page.paperSize = {
    width: '6in',
    height: '4in',
    margin: {
        top: '5px',
        left: '15px',
        right: '15px',
        bottom: '10px'
    }
}

page.zoomFactor = 0.5;

page.viewportSize = {
  width: 576,
  height: 384
};
    
page.open(system.args[1], function (status) {
    window.setTimeout(function () {
        var size = page.evaluate(function () {
            return {width: width = 576, height : 384 };
        });

        page.paperSize = size;

        page.render(system.args[2]);
        phantom.exit();
    }, 5000);
});

page.onError = function(msg, trace) {
    console.log(msg);
}