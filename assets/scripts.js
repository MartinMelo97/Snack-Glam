$('document').ready(function(){
     $(".button-collapse").sideNav();
     $('.parallax').parallax();  
    $('select').material_select();
    $('.materialboxed').materialbox();
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

$('#checkboxNormal').on('change', function(){
    if(this.checked)
    {
        $('.RangeNormal').removeClass('invisibile');
        calcularSubtotalNormal();
    }
    else
    {
        $('.RangeNormal').addClass('invisibile');
        $('#subtotalNormal').val(0);
        calcularTotal();
    }
});

$('#checkboxMini').on('change', function(){
    if(this.checked)
    {
        $('.RangeMini').removeClass('invisibile');
        calcularSubtotalMini();
    }
    else
    {
        $('.RangeMini').addClass('invisibile');
        $('#subtotalMini').val(0);
        calcularTotal();
    }
});

$('#cantidadNormal').on('change', calcularSubtotalNormal);

$('#cantidadMini').on('change', calcularSubtotalMini);

function calcularSubtotalNormal(){
    var cantNormal = $('#cantidadNormal').val();
        var normal = 35;
        var subNormal = cantNormal*normal;
        $('#subtotalNormal').val(subNormal);
        calcularTotal();
}

function calcularSubtotalMini(){
    var cantmini = $('#cantidadMini').val();
        var mini = 15;
        var submini = cantmini*mini;
        $('#subtotalMini').val(submini);
        calcularTotal();
}

function calcularTotal(){
    var subNorm = $('#subtotalNormal').val();
    var subMini = $('#subtotalMini').val();
    var total = 0;
    if(subNorm > 0)
    {
        total = total + parseInt(subNorm);
    }

    if(subMini > 0)
    {
        total = total + parseInt(subMini);
    }

    $('#total').val(total);
}