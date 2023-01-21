// Info Switcher
class Info {
    constructor(type, imageSource) {
        this.type = type;
        this.imageSource = imageSource;
    }
}
var infos = [new Info("Developer", "assets/media/code.gif"), new Info("Melonclientmacher", "assets/media/melon.png"), new Info("Ultra Pro Gamer", "assets/media/minecraft.png"), new Info("Guitar Player", "assets/media/guitar.png"), new Info("Coffee Lover", "assets/media/coffee.svg")];
var index = 0;

setInterval(() => {
    if(index == infos.length) {
        index = 0;
    }
    document.querySelector('#profileimage').src = infos[index].imageSource;
    document.querySelector('#profileimage').alt = infos[index].type;
    document.querySelector('#info').innerText = infos[index].type;
    index++;
}, 3000);

