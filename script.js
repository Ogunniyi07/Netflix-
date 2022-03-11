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
   /*function changeBg(){

        const images = [
        'url("2.jpg")',
        'url("3.jpg")',
        'url("4.jpg")',
        'url("5.jpg")',
        'url("6.jpg")',
        ]
   

    const banner = document.querySelector('.home .banner')
    const bg = images[Math.floor(Math.random() * 
       images.length )];
       banner.style.backgroundImage = bg;

    }
    setInterval(changeBg, 5000)*/



    window.onload = function () {
        var images = ['2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg'];
        var image = images[Math.floor(Math.random() * images.length)];
        document.getElementsByTagName('.home .banner')[0].style.backgroundImage = "url('" + image + "')";
        document.getElementsByTagName('body')[0].style.backgroundRepeat = "no-repeat";
        document.getElementsByTagName('body')[0].style.backgroundSize = "cover";
    }


  
