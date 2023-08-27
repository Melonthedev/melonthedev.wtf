var sitelang = "de";
var title = "Melonthedev - " + "title";
var maincontent = "MAINCONTENT. Diese Sätze sind nur zum Beispiel gedacht. Wir müssen testen, wie sich unser styledocument auf lange texte auswirkt.  Wenn es falsch ist, müssen wir das ändern. Liebe Grüße Melonthedev! Oh, ich sehe gerade, dass es super passt. Vielen dank für ihre Hilfe!";
var mainheadding = "MAINHEADDING";
var secondheadding = "secondheadding";
var author = "Creator: " + "Melonthedev";
var langinfode = "Sind sie möglicherweise Deutsch?";
var langbuttonde = "Zur Deutschen Seite";
var langbuttonde2 = "Hier bleiben";
var langinfoen = "Are you possibly English?";
var langbuttonen = "Go to the English site";
var langbuttonen2 = "Stay here";
var langinfofr = "Êtes-vous probablement français?";
var langbuttonfr = "Êtes-vous probablement français?";
var langbuttonfr2 = "reste ici";
var browsersprache = navigator.language;






window.onload = function() {

    document.getElementById("mainheadding").append(mainheadding); 
    document.getElementById("maincontent").append(maincontent);
    document.getElementById("secondheadding").append(secondheadding);
    document.getElementById("title").append(title); 
    
    
}
if(browsersprache.indexOf(sitelang) > -1) {
    document.getElementById("lang").classList.add("invisibility");
} else {
    console.log("debug");
    if(browsersprache.indexOf("de") > -1) {
        console.log("de");
        document.getElementById("lang").classList.remove("invisibility");
        document.getElementById("langbutton").append(langbuttonde);
        document.getElementById("langbutton2").append(langbuttonde2);
        document.getElementById("langinfo").append(langinfode);
    }else if(navigator.language.indexOf("en") > -1) {
        console.log("en");
        document.getElementById("lang").classList.remove("invisibility");
        document.getElementById("langbutton").append(langbuttonen);
        document.getElementById("langbutton2").append(langbuttonen2);
        document.getElementById("langinfo").append(langinfoen);
    }else if(navigator.language.indexOf("fr") > -1) {
        console.log("fr");
        document.getElementById("lang").classList.remove("invisibility");
        document.getElementById("langbutton").append(langbuttonfr);
        document.getElementById("langbutton2").append(langbuttonfr2);
        document.getElementById("langinfo").append(langinfofr);
    }
    alert("debug3")
}
