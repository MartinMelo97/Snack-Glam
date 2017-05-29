$('document').ready(function(){
     $(".button-collapse").sideNav();
     $('.parallax').parallax();
    // $('.logo_nav').css({'margin-top':'50vh'});
    var paddingtop = $('#elnav').height();
    console.log(typeof(paddingtop));
    $('.video-containerr').css({'padding-top':paddingtop.toString()+" px"});
    console.log(paddingtop.toString());
    console.log($('.video-containerr').css('padding-top'));

    var freshDiv = $('#Delicious');
    var freshDivoffset = freshDiv.offset().top/2;

    var bolicakesDiv = $('#Bolicakes');
    var bolicakesDivoffset = bolicakesDiv.offset().top - 300;
    
    $(document).on('scroll', function(){
        if($(document).scrollTop() > freshDivoffset && !freshDiv.hasClass('animated'))
        {
            $('#Delicious .textote').addClass('animated bounceInLeft').css({'display':'block'});
        }

        if($(document).scrollTop() > bolicakesDivoffset && !bolicakesDiv.hasClass('animated'))
        {
            $('#Bolicakes .textote').addClass('animated bounceInRight').css({'display':'block'});
        }
    });
});

var video = $('#video-background').get(0);

$('.brand-logo').on('touchstart click',function(){
    console.log("toco");
    video.play();
    $('.text').addClass('animated bounceInUp');
    $('.text').css({display:'flex','align-items':'center'});
    $('.logo_nav').removeClass('rotate');
});
$('.video-container').click(function(){
    console.log("toco");
    video.play();
    $('.text').addClass('animated bounceInUp');
    $('.text').css({display:'flex','align-items':'center'});
    $('.logo_nav').removeClass('rotate');
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