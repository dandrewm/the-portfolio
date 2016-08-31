/**
 * Created by dmerriweather4 on 7/21/16.
 */
//var thirdRow = $('.third-left-container').height();
//$('.third-right-container').css('height', thirdRow);



$(document).ready(function(){
    $('.cuts-logo').click(function(){
        $('.pop-up').toggleClass('is-visible')
    });

    $('.scroll-to').click(function(event){
        event.preventDefault();
        var link = $(this).attr("href");
        $('html, body').animate({
            scrollTop: $( $(link)).offset().top-50
        }, 1500);
        return false;

    });
});
