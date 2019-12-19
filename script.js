var select = document.getElementById("select");
var emulatordiv = document.getElementById("emulator");

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
    },
	
    "Mortal Kombat Advance": {
        system: "gba",
        file: "Mortal Kombat Advance (U).gba"
    },
	
    "Donkey Kong Country": {
        system: "gba",
        file: "Donkey Kong Country (U) [!].gba"
    },
		
    "Super Mario Bros": {
        system: "nes",
        file: "Super Mario Bros. (Japan, USA).nes"
    }
};

function emulate(systemin, filein) {
    var resizeOwnEmulator = function(width, height) {
		var emulator = $('#emulator');
		emulator.css('width', width);
		emulator.css('height', height);
	}

	$(function() {
		function embed() {
			var emulator = $('#emulator');
			if(emulator) {
				var flashvars =  {
					system: systemin,
					url: "roms/" + filein
				};
				var params = {};
				var attributes = {};
				
				params.allowscriptaccess = 'sameDomain';
				params.allowFullScreen = 'true';
				params.allowFullScreenInteractive = 'true';
				
				swfobject.embedSWF('flash/Nesbox.swf', 'emulator', "640", "480", '11.2.0', 'flash/expressInstall.swf', flashvars, params, attributes);
			}
		}
		
		embed();
	});
}

function checkselect() {
    if (select.value == "---Select---") {
		emulatediv.innerHTML = "<h1>Please select a game.</h1>";
	} else {	
		var game = games[select.value];
        emulate(game.system, game.file);
    }
}
