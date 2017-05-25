$('document').ready(function(){
     $(".button-collapse").sideNav();
    // $('.logo_nav').css({'margin-top':'50vh'});
    var paddingtop = $('#elnav').height();
    console.log(typeof(paddingtop));
    $('.video-containerr').css({'padding-top':paddingtop.toString()+" px"});
    console.log(paddingtop.toString());
    console.log($('.video-containerr').css('padding-top'));
});

var video = $('#video-background').get(0);
$('.video-container').click(function(){
    console.log("toco");
    video.play();
    $('.text').addClass('animated bounceInUp');
    $('.text').css({display:'flex','align-items':'center'});
});

$('.text').click(function(){
    console.log("toco");
    video.play();
});

/*$(document).on('scroll', function(){
    var scrollT = $(document).scrollTop();

    if(scrollT > 500)
    {
        $('.logo_nav').css({'margin-top':'0vh'});
    }
    else
    {
        $('.logo_nav').css({'margin-top':'50vh'});
    }
})*/