$(function(){
    $('.box_list li:not(:nth-child(8), :nth-child(9))').mouseover(function(){
        $(this).addClass('changed');
        $(this).children('h2').hide(400);
    });
    $('.box_list li:not(:nth-child(8), :nth-child(9))').mouseleave(function(){
        $(this).removeClass('changed');
        $(this).children('h2').show(400);
    });

    $('.box_list li:not(:nth-child(8), :nth-child(9))').click(function(){
        var Num = $(this).index();
        $('body').css('overflow', 'hidden');
        $('.box_modal li').eq(Num).css('display', 'block');
    });

    $(document).mouseup(function (e){

        var container = $('.box_modal li');
    
        if(container.has(e.target).length === 0){
    
          container.css('display','none');
          $('body').css('overflow', 'auto');
        }
    
      });
});