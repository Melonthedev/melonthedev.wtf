document.addEventListener("click", function() {
    if(document.getElementById("nacht").classList.contains("invisibility")) {
        document.getElementById("tag").classList.remove("invisibility");
        document.getElementById("nacht").classList.add("invisibility");
        document.getElementById("main").classList.add("main_night");
        document.getElementById("doc").classList.add("dark");
        document.getElementById("doc").classList.remove("light");
        document.getElementById("footer").classList.add("footertextdark");
        document.getElementById("menu").classList.add("menu-dark")
        document.cookie = "theme=dark;path=/";
    }
    if(document.getElementById("tag").classList.contains("click")){
        document.getElementById("tag").classList.remove("click");
        document.getElementById("tag").classList.add("invisibility");
        document.getElementById("nacht").classList.remove("invisibility");
        document.getElementById("main").classList.remove("main_night");
        document.getElementById("doc").classList.remove("dark");
        document.getElementById("doc").classList.add("light");
        document.getElementById("footer").classList.remove("footertextdark");
        document.getElementById("menu").classList.remove("menu-dark")
        document.cookie = "theme=light;path=/";
    }

});

window.onload = function() {
    if(document.cookie.length !=0 && document.cookie.includes("theme=")){
        var value = document.cookie.split(";");
        var cookie = document.cookie;
        if(cookie.includes("dark")){
            console.debug(document.cookie + " der darkmode ist aktiv");
            document.getElementById("tag").classList.remove("invisibility");
            document.getElementById("nacht").classList.add("invisibility");
            document.getElementById("main").classList.add("main_night");
            document.getElementById("doc").classList.add("dark");
            document.getElementById("doc").classList.remove("light");
            document.getElementById("footer").classList.add("footertextdark");
            document.getElementById("menu").classList.add("menu-dark")

        }else if(cookie.includes("light")){
            console.debug(document.cookie + " der darkmode ist inaktiv");
            document.getElementById("tag").classList.remove("click");
            document.getElementById("tag").classList.add("invisibility");
            document.getElementById("nacht").classList.remove("invisibility");
            document.getElementById("main").classList.remove("main_night");
            document.getElementById("doc").classList.remove("dark");
            document.getElementById("doc").classList.add("light");
            document.getElementById("footer").classList.remove("footertextdark");
            document.getElementById("menu").classList.remove("menu-dark")

        }else {
            alert("A problem has been detected and Cookies has been shut down to prevent errors to my website.");
            document.cookie = "theme=light;path=/";
            var c = confirm("If this is the first time you've seen this error, click on 'OK' and reload my website. If this error appears again, click 'Cancel' and follow these steps.");
            if(c == false) {
                alert("So click on the 'lock' icon in the left corner on the top and select 'Cookies'. Now click on the first row and press delete. Now reload the Page!");
            }
        }
    }else {
        document.cookie = "theme=light;path=/";
        console.log("theme: light(new)")
    }
}


