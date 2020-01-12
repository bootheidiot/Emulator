var select = document.getElementById("select");
var slider = document.getElementById("slider");
var chatframe = document.getElementById("chatframe");
var chatvisible = false;

var systems = {
	"nes": "nes",
	"smc": "snes",
	"gen": "sega",
	"gb": "gb",
	"gbc": "gbc",
	"gba": "gba",
}

function updatezoom() {
	var emulatediv = document.getElementById("emulator");
	var scale = slider.value / 10;
	var width = emulatediv.offsetWidth * scale;
	var height = emulatediv.offsetHeight * scale;
	emulatediv.style.transform = "scale(" + scale + ")";
	emulatediv.style.right = width / 4 + "px";
	emulatediv.style.top = height / 4 + "px";
}

function toggleframe() {
	if (chatvisible) {
		chatframe.style.transform = "translateY(100%)";
	} else {
		chatframe.style.transform = "translateY(0)";
	}
	chatvisible = !chatvisible;
}

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
	setTimeout(() => {
		updatezoom();
	}, 1000);
}

function checkselect() {
	var emulatordiv = document.getElementById("emulator");
	if (select.value == "---Select---") {
		emulatordiv.innerHTML = "";
	} else if (select.value == "redirect") {
		location = "https://bootheidiot.github.io/N64-2.0/";
	} else {
		var extension = select.value.split(".")[1];
		emulate(systems[extension], select.value);
	}
}

emulate("", "");
setTimeout(() => {
	document.getElementById("emulator").innerHTML = "";
}, 1000);
