var select = document.getElementById("select");
var emulatordiv = document.getElementById("emulator");

var games = {
    "Legend of Zelda": {
        system: "nes",
        file: "Legend of Zelda.nes"
    },
    
    "Pokemon Sapphire": {
        system: "gba",
        file: "PokemonSapphire.gba"
    },
    
    "Pokemon Silver": {
        system: "gba",
        file: "PokemonSilver.gbc"
    },
	
    "Mortal Kombat Advance": {
        system: "gba",
        file: "Mortal Kombat Advance.gba"
    },
	
    "Donkey Kong Country": {
        system: "gba",
        file: "Donkey Kong Country.gba"
    },
		
    "Super Mario Bros": {
        system: "nes",
        file: "Super Mario Bros.nes"
    },
    "Mega Man 3": {
        system: "nes",
        file: "Mega Man 3 (USA).nes"
    },
    "Pokemon Emerald": {
        system: "gba",
        file: "1986 - Pokemon - Emerald Version (UE).gba"
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
