//SPRACHEN
//alert("Seitensprache: " + sitelang + ", Browsersprache: " + lang[0] + " + " + test)
var lang = navigator.language.split("-")[0];
var sitelang = document.getElementById("doc").getAttribute("lang");
var langbanner = document.getElementById("lang");

if(sitelang != lang) {
  console.debug("False Language!");
  document.getElementById("lang").classList.remove("invisibility");

  if(lang.includes("de")) {
    console.debug(lang + " != " + sitelang);
    document.getElementById("langinfo-de").classList.remove("invisibility");
    document.getElementById("langbutton-de").classList.remove("invisibility");
    document.getElementById("langbutton-de-2").classList.remove("invisibility");
  }else if(lang.includes("en")){
    console.debug(lang + " != " + sitelang);
    document.getElementById("langinfo-en").classList.remove("invisibility");
    document.getElementById("langbutton-en").classList.remove("invisibility");
    document.getElementById("langbutton-en-2").classList.remove("invisibility");
  }else if(lang.includes("fr")) {
    console.debug(lang + " != " + sitelang);
    document.getElementById("langinfo-fr").classList.remove("invisibility");
    document.getElementById("langbutton-fr").classList.remove("invisibility");
    document.getElementById("langbutton-fr-2").classList.remove("invisibility");
  }else {
    console.debug(lang + " != " + sitelang);
    document.getElementById("langinfo-en").classList.remove("invisibility");
    document.getElementById("langbutton-en").classList.remove("invisibility");
    document.getElementById("langbutton-en-2").classList.remove("invisibility");
  } 
}else {
    console.debug(lang);
}



function seite(lang) {
    document.location = "/" + lang + "/";
}

function invisibility() {
    document.getElementById('lang').classList.add('invisibility');
}