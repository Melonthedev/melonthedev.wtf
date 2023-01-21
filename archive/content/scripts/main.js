//MAINJAVASCRIPT by Melonthedev{}

//COOKIES
if(document.cookie.length == 0) {
    document.cookie = "theme=light;path=/";
    document.cookie = "locale=" + lang[0] + ";path=/";
}
//--------------------------------------------------------

//TITELICON
setInterval(function() {
    var randomimg = Math.round(Math.random() *  (7 - 0)) + 0;
    var images = ["aqua", "blue", "green", "lila", "red", "pink", "orange", "border"];
    document.getElementById("icon").href = "/media/ico-" + images[randomimg] +  ".png";
},5000)
//--------------------------------------------------------

//SCROLLBAR
window.onscroll = function() {
    document.getElementById("scrollbar").style.height = (window.pageYOffset / (document.body.scrollHeight - window.innerHeight)) * 100  + "%";
}
//--------------------------------------------------------


