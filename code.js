// V 1.5.8
var toomuch = 0;
var place = 0;
var how = 0;
var newChoice;

function more() {
   var more =
   document.getElementById("add");
   var background =
    document.getElementById("background");
    if (toomuch > 59) {
        alert("Max number of choices reached (60)");
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
	newChoice.style.width = 15 + "%";
    newChoice.setAttribute("id", how);
	newChoice.setAttribute("class", "op");
    background.appendChild(newChoice);
    }
}
function decide() {
	var toomuch1 = toomuch + 1;
    var x = Math.floor((Math.random() * toomuch1) + 0);
	how = x;
    var ans = document.getElementById("demo");
    var inp = document.getElementById(how).value;
    var text = inp;
    var tim = setTimeout(show_1, 5);
	
    function show_1() {
        var kewl = document.getElementById("showey_a");
		var kewl2 = document.getElementById("showey_b");
		var kewl3 = document.getElementById("showey_c");
        document.getElementById("add").hidden = true;
        document.getElementById("go").hidden = true;
        background.hidden = true;
        clearTimeout(tim);
        var tim_jr = setTimeout(show_2, 0);
        function show_2() {
            document.getElementById("cont").hidden = false;
            kewl.hidden = false;
			kewl2.hidden = false;
			kewl3.hidden = false;
            var Int1 = setInterval(show_3, 5);
			var Int2 = setInterval(show_3A, 5);
            var size = 1;
			var size2 = 1;
			function show_3A() {
				if (size2 === 92) {
					clearInterval(Int2);
				}
				else {
					size2 += 0.5;
					kewl.style.width = size2 + "%";
					kewl3.style.width = size2 + "%";
				}
			}
            function show_3() {
                if (size === 92) {
                	clearInterval(Int1);
                	var Tim7 = setTimeout(show_4, 500);
                } else {
                	size += 0.25;
					kewl2.style.width = size + "%";
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
	document.getElementById("demo").innerHTML = " ";
	
	document.getElementById("showey_a").style.width = 1 + "px";
	document.getElementById("showey_b").style.width = 1 + "px";
	document.getElementById("showey_c").style.width = 1 + "px";
	
	document.getElementById("showey_a").hidden = true;
	document.getElementById("showey_b").hidden = true;
	document.getElementById("showey_c").hidden = true;
	document.getElementById("again").hidden = true;
	document.getElementById("cont").hidden = true;
	document.getElementById("same").hidden = true;
	document.getElementById("background").hidden = false;
	document.getElementById("go").hidden = false;
	document.getElementById("add").hidden = false;
	
}