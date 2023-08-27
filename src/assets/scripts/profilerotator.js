// Info Switcher
import dev from '/assets/media/code.gif'
import melon from '/assets/media/melon.png'
import minecraft from '/assets/media/minecraft.png'
import coffee from '/assets/media/coffee.svg'
import plugin from '/assets/media/minecraftblock.png'

class Info {
    constructor(type, imageSource, color) {
        this.type = type;
        this.imageSource = imageSource;
        this.color = color;
    }
}

var infos = [
    new Info("Developer", dev, "#0b0285"), 
    new Info("Melonclientmacher", melon, "#be0000"), 
    new Info("Ultra Pro Gamer", minecraft, "#4300be"),  
    new Info("Plugin Developer", plugin, "#06b100"),
    new Info("Coffee Lover", coffee, "#744500")
];

var index = 0;

document.querySelector('#middle').style.transition = "box-shadow 1s ease-in-out";
document.querySelector('#profileimage').style.transition = "opacity 1s ease-in-out";
document.querySelector('#info').style.transition = "opacity 1s ease-in-out";

setInterval(() => {
    if(index >= infos.length) {
        index = 0;
    }
    //if (window.innerWidth > 600) { 
        document.querySelector('#middle').style.boxShadow = "0px -130px 2000000px 150px " + infos[index].color;
    //} else {
    //    document.querySelector('#middle').style.boxShadow = "0px -130px 2000000px 150px " + infos[index].color;
    //}
    //document.querySelector('#middle').style.boxShadow = "0px -130px 2000000px " + window.innerWidth/5 + "px " + infos[index].color;
    document.querySelector('#profileimage').style.opacity = "0";
    document.querySelector('#info').style.opacity = "0";
    setTimeout(() => {
        document.querySelector('#profileimage').style.opacity = "1";
        document.querySelector('#info').style.opacity = "1";
        document.querySelector('#profileimage').src = infos[index-1].imageSource;
        document.querySelector('#profileimage').alt = infos[index-1].type;
        document.querySelector('#info').innerText = infos[index-1].type;
    }, 1000);
    clearTimeout();
    index++;
}, 4000);

