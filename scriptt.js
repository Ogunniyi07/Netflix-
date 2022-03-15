(function () {
    var words = [
        "Stranger",
        "Baby",
        "Youtuber",
        "Developer"
    ],
    i = 0;  
    setInterval(function(){
        $('#words').fadeOut(function(){
            $(this).html(words[(i =(i + 1) % words.length)]).fadeIn();
        });
    }, 1000)
})();

$(document).ready(function()
    {
        var rld_cnt=parseInt($.cookie('rld_cnt')||0)+1;
        $.cookie('rld_cnt', rld_cnt);
        var text = ["Good Mornning", "Good Afternoon"];
        $('#words').html(text[rld_cnt%2]);

});


