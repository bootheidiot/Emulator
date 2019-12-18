var input = document.getElementById("input");

input.onkeyup = (e) => {
  if (e.key == "Enter") {
    var resizeOwnEmulator = function(width, height)
      {
        var emulator = $('#emulator');
        emulator.css('width', width);
        emulator.css('height', height);
      }

      $(function()
      {
        function embed()
        {
          var emulator = $('#emulator');
          if(emulator)
          {
            var flashvars = 
            {
              system : 'nes',
              url : '/roms/Legend of Zelda.nes'
            };
            var params = {};
            var attributes = {};

            params.allowscriptaccess = 'sameDomain';
            params.allowFullScreen = 'true';
            params.allowFullScreenInteractive = 'true';

            swfobject.embedSWF('flash/' + input.value, 'emulator', '640', '480', '11.2.0', 'flash/expressInstall.swf', flashvars, params, attributes);
          }
        }

        embed();
      });
    }
 }

