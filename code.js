// V 1.6.6

function onDeviceReady() {
      document.removeEventListener('deviceready', onDeviceReady, false);
      
      // Set AdMobAds options:
      admob.setOptions({
        publisherId:          "ca-app-pub-2368364509282508~7661702402",  // Required
		interstitialAdId:     "ca-app-pub-3940256099942544/6300978111",  // Optional
      });
      
      // Start showing banners (atomatic when autoShowBanner is set to true)
      admob.createBannerView({autoShowBanner: true});
      
      // Request interstitial (will present automatically when autoShowInterstitial is set to true)
      admob.requestInterstitialAd();
    }
    
    document.addEventListener("deviceready", onDeviceReady, false);

var toomuch = 0;
var place = 0;
var how = 0;
var newChoice;

function more() {
   var more =
   document.getElementById("add");
   var background =
    document.getElementById("background");
    if (toomuch > 19) {
        alert("Max number of choices reached (20)");
    } else {
        toomuch +=1;
        place +=1;
        how += 1;
			
    newChoice =
    document.createElement("INPUT");
    newChoice.setAttribute("type", "text");
    newChoice.setAttribute("placeholder", "Opt " + place);
    newChoice.style.left = 20 + "%";
    newChoice.style.top = 40 + "%";
	newChoice.style.width = 40 + "%";
    newChoice.setAttribute("id", how);
	newChoice.setAttribute("class", "op");
    background.appendChild(newChoice);
    }
}
function decide() {
	var toomuch1 = toomuch + 1;
    var x = Math.floor((Math.random() * toomuch1) + 0);
	how = x;
    var ans = document.getElementById("ans");
    var inp = document.getElementById(how).value;
    var text = inp;
    var tim = setTimeout(show_1, 5);
	
    function show_1() {
        var kewl = document.getElementById("showey_a");

        document.getElementById("add").hidden = true;
        document.getElementById("go").hidden = true;
        background.hidden = true;
        clearTimeout(tim);
        var tim_jr = setTimeout(show_2, 0);
        function show_2() {
            document.getElementById("cont").hidden = false;
            kewl.hidden = false;

            var Int1 = setInterval(show_3, 5);
            var size = 1;

            function show_3() {
                if (size === 100) {
                	clearInterval(Int1);
                	var Tim7 = setTimeout(show_4, 500);
                } else {
                	size += 0.25;
					kewl.style.height = size + "%";
                }
                function show_4() {
                    ans.innerHTML = text;
					document.getElementById("again").hidden = false;
					document.getElementById("same").hidden = false;
					clearTimeout(Tim7);
                }
            }
        }
    }
}
function runs() {
	location.reload();
}
function redo() {
	document.getElementById("ans").innerHTML = " ";
	
	document.getElementById("showey_a").style.height = 1 + "%";
	
	document.getElementById("showey_a").hidden = true;
	document.getElementById("again").hidden = true;
	document.getElementById("cont").hidden = true;
	document.getElementById("same").hidden = true;
	document.getElementById("background").hidden = false;
	document.getElementById("go").hidden = false;
	document.getElementById("add").hidden = false;
	
}
