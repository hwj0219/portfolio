$(function(){

    window.onscroll = function() {myFunction()};
    
    var header = document.getElementById("myHeader");
    var sticky = header.offsetTop;

    function myFunction() {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
            $("#right_menu").css('background','rgba(0,0,0,0.85)');
        } 
        else {
            header.classList.remove("sticky");
            $("#right_menu").css('background',"black");
        }
    };
    

    function scrollToAnchor(aid){
        
        var aTag = $("section[name='"+ aid +"']");
        
        $('html,body').animate({scrollTop: aTag.offset().top},'400');
    }

    $("#about").click(function() {
    scrollToAnchor('about');
    });
    $("#game").click(function() {
    scrollToAnchor('game');
    });
    $("#news").click(function() {
    scrollToAnchor('news');
    });
    $("#career").click(function() {
    scrollToAnchor('career');
    });
    $("#about_footer").click(function() {
    scrollToAnchor('about');
    });
    $("#game_footer").click(function() {
    scrollToAnchor('game');
    });
    $("#news_footer").click(function() {
    scrollToAnchor('news');
    });
    $("#career_footer").click(function() {
    scrollToAnchor('career');
    });

    $(window).scroll(function() {
        
        if ($(this).scrollTop() > 500) {
            $('#top').fadeIn();
        }

        else {
            $('#top').fadeOut();
        }
    });
    
    $("#top").click(function() {
        $('html, body').animate({scrollTop : 0},'400');
    });

    $("#logo").click(function() {
        $('html, body').animate({scrollTop : 0},'400');
    });

    $("#gnb_toggle_btn").click(function() {
        $("#right_menu").addClass("open");
        $("#gnb_toggle_btn").css('display','none');
    });
    
    $(".close").click(function() {
        $("#right_menu").removeClass("open");
        $("#gnb_toggle_btn").css('display','block');
    });
});