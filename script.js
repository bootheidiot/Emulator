var select = document.getElementById("select");
var emulatordiv = document.getElementById("emulator");

alert("Please fullscreen this page, as some content may go outside the window when not fullscreened.");

var games = {
    "Castlevania": {
	    system: "nes",
		file: "Castlevania.nes"
	},
	
	"Contra": {
		system: "nes",
		file: "Contra.nes"
	},
	
	"Donkey Kong": {
		system: "nes",
		file: "Donkey_kong.nes"
	},
	
	"Donkey Kong Country": {
		system: "gba",
		file: "Donkey Kong Country.gba"
	},
	
	"Excitebike": {
		system: "nes",
		file: "Excitebike (E).nes"
	},
	
	"Kirby - Nightmare in Dreamland": {
		system: "gba",
		file: "Kirby - Nightmare in Dreamland (U) [!].gba"
	},
	
	"Legend of Zelda": {
		system: "nes",
		file: "Legend of Zelda.nes"
	},
	
	"Mega Man 3": {
		system: "nes",
		file: "Mega Man 3 (USA).nes"
	},
	
	"Meteroid Fusion": {
		system: "gba",
		file: "Metroid Fusion (U) [!]"
	},
	
	"Mortal Kombat Advace": {
		system: "gba",
		file: "Mortal Kombat Advance.gba"
	},
	
	"Pokemon Emerald": {
		system: "gba",
		file: "Pokemon - Emerald Version (UE).gba"
	},
	
	"Pokemon Sapphire": {
		system: "gba",
		file: "PokemonSapphire.gba"
	},
	
	"Punch Out": {
		system: "nes",
		file: "Punch-Out.nes"
	},
	
	"Super Mario Bros": {
		system: "nes",
		file: "Super Mario Bros.nes"
	},
	
	"Tetris": {
		system: "nes",
		file: "Tetris.nes"
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
		emulatediv.innerHTML = "";
	} else if (select.value == "redirect") {
		location = "https://bootheidiot.github.io/N64";
	} else {
		emulate(games[select.value].system, games[select.value].file);
	}
}

setInterval(() => {
	if (document.activeElement == document.getElementById("slider")) {
		document.getElementById("slider").style.transform = "scale(" + slider.value / 10 + ") transform(-25%, 20%)";
	}
}, 500);
