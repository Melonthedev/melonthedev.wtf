document.addEventListener("scroll", function(){   
    var pos = window.scrollY;    
    if(pos >= 63){
      document.getElementById("kopf").classList.add('invisibility');
      document.getElementById("scrollbuttons").classList.add('scrolled');
      document.getElementById("scrollbuttons").classList.remove('invisibility');
      document.getElementById("nav").classList.add('invisibility');
      document.getElementById("menuToggle").classList.add("invisibility")
      }
    
    if(pos <= 63) {
      document.getElementById("kopf").classList.remove('invisibility');
      document.getElementById("scrollbuttons").classList.remove('scrolled');
      document.getElementById("scrollbuttons").classList.add('invisibility');
      document.getElementById("nav").classList.remove('invisibility'); 
      document.getElementById("menuToggle").classList.remove("invisibility")
    }
  });