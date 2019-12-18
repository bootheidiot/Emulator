var input = document.getElementById("input");

function zelda() {
    var resizeOwnEmulator = function(width, height) {
        var emulator = $('#emulator');
        emulator.css('width', width);
        emulator.css('height', height);
    }

    $(function() {
        function embed() {
            var emulator = $('#emulator');
            if(emulator) {
                var flashvars = {
                    system : 'nes',
                    url : '/roms/' + input.value
                };
                var params = {};
                var attributes = {};

                params.allowscriptaccess = 'sameDomain';
                params.allowFullScreen = 'true';
                params.allowFullScreenInteractive = 'true';

                swfobject.embedSWF('flash/Nesbox.swf', 'emulator', '640', '480', '11.2.0', 'flash/expressInstall.swf', flashvars, params, attributes);
            }
        }

    embed();
    });
}

input.value.onchange = () => {
    alert(input.value);
}

zelda();
