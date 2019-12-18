var select = document.getElementById("select");

var games = {
    "Legend of Zelda": {
        system: "nes",
        file: "Legend of Zelda.nes"
    },
    
    "Pokemon Sapphire": {
        system: "gba",
        file: "PokemonSapphire.GBA"
    },
    
    "Pokemon Silver": {
        system: "gba",
        file: "PokemonSilver.gbc"
    }
};

function emulate(system, file) {
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
                    system : system,
                    url : '/roms/' + file
                };
                var params = {};
                var attributes = {};

                params.allowscriptaccess = 'sameDomain';
                params.allowFullScreen = 'true';
                params.allowFullScreenInteractive = 'true';

                swfobject.embedSWF('flash/Nesbox.swf', 'emulator', window.innerWidth, window.innerHeight, '11.2.0', 'flash/expressInstall.swf', flashvars, params, attributes);
                resizeOwnEmulator(window.innerWidth, window.innerHeight);
            }
        }

    embed();
    });
}

function checkselect() {
    var game = games[select.value];
    emulate(game.system, game.file);
}
