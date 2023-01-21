//EVENTLISTENERS
document.getElementById("aquaico").addEventListener('dragend', notmyfault, true);
document.getElementById("tag").addEventListener('contextmenu', themeclickedhell, true);
document.getElementById("nacht").addEventListener('contextmenu', themeclickeddunkel, true);
document.getElementById("mainheadding").addEventListener('click', clickadd, true);
document.getElementById("scrollbar").addEventListener('contextmenu', scrollbarclicked, true);


//VARS
var clicks = 0
var allclicks = 20


//FUNCTIONS
function notmyfault() {
    a = confirm('NotMyFault aktivieren? Wenn sie sich fragen was das ist, dann googlen!');
    if(a == true) {
        document.cookie = "theme=kaputt(notmyfault);path=/";
        x = confirm("NotMyFault wurde aktiviert. Klicken sie auf OK für das Neuladen der Webseite und Abbrechen um es manuell zu machen. Bei beiden Wegen tritt ein Cookie BSOD ein.");
        if(x == true) {
            location.reload(true);

        }
    } else {
        alert("Was für ein Weichei.");
    }
}

function themeclickedhell() {
    document.getElementById("üsee").innerText = "Noch heller?! :)";
    setTimeout(function(){document.getElementById("üsee").innerText = "";},4000);
}
function scrollbarclicked() {
    document.getElementById("üsee").innerText = "Was willst du jetzt mit der Scrollbar??? xD";
    setTimeout(function(){document.getElementById("üsee").innerText = "";},4000);
}
function themeclickeddunkel() {
    document.getElementById("üsee").innerText = "Noch dunkler?! :)";
    setTimeout(function(){document.getElementById("üsee").innerText = "";},4000);
}



function clickadd() {
    clicks++
    if(clicks == 20) {
        clicks = 0
        document.getElementById("üsee").innerText = "Hast du nix besseres zu tun, als 20x auf eine Überschrift zu klicken?!";
        document.getElementById("secondheadding").innerText = "Du bist halt echt dumm!"
        setTimeout(function() {
            document.getElementById("üsee").innerText = "";
            document.getElementById("secondheadding").innerText = content;
        },6000);
        setTimeout(function() {
            document.getElementById("üsee").innerText = "But wait! There is more! Du hast soeben eine SECRET Funktion aktiviert ^^";
            document.cookie = "secret=true;path=/";
        },8000);
        setTimeout(function() {document.getElementById("üsee").innerText = "";},14000);
        
        


    }if(clicks >= 15) {
        document.getElementById("secondheadding").innerText = "Noch " + (allclicks-clicks) + " mal und du bist dumm!"
    }if(clicks == 14) {
        content = document.getElementById("secondheadding").textContent;
    }
}