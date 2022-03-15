let navBar = document.querySelector(".navbar");

//sticky Navigation menu JS code
let nav = document.querySelector("nav");
let val;
window.onscroll = function(){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("sticky");
    }else{
        nav.classList.remove("sticky");
    }
}



//changing banner image at intervals
   function changeBg(){
        const images = [
       'url("Les-gardians.jpg")',
        'url("money-heist.jpg")',
        'url("hell-bound.jpg")',
        'url("archive-81.jpg")',
        'url("cobra-kai.jpg")',
        'url("savage-rythm.jpg")',
        ]
   
    const banner = document.querySelector('.home .banner')
    const bg = images[Math.floor(Math.random() * 
       images.length )];
       banner.style.backgroundImage = bg;
    }
    setInterval(changeBg, 100000)