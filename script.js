var select = document.getElementById("select");
var slider = document.getElementById("slider");
var chatframe = document.getElementById("chatframe");
var chatvisible = false;

setInterval(() => {
	var emulatordiv = document.getElementById("emulator");
	emulatordiv.style.transform = "scale(" + slider.value / 10 + ")";
	emulatordiv.style.right = emulatordiv.offsetWidth / 2 + "px";
	emulatordiv.style.top = emulatordiv.offsetHeight / 2 + "px";
}, 100);

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
}

function checkselect() {
	var emulatordiv = document.getElementById("emulator");
	if (select.value == "---Select---") {
		emulatordiv.innerHTML = "";
	} else if (select.value == "redirect") {
		location = "https://bootheidiot.github.io/N64";
	} else {
		var system = select.value.split(".")[1];
		emulate(system, select.value);
	}
}
