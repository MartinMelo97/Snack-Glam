

$('document').ready(function(){
     $(".button-collapse").sideNav();
     $('.parallax').parallax();  
    $('select').material_select();
    $('.materialboxed').materialbox();
    $('#cantidadNormal').val(0);
    $('#cantidadMini').val(0);
    $('.video-containerr').css({'padding-top':paddingtop.toString()+" px"});
    var db = firebase.database();
        db.ref('pedidos').on('child_added',function(data){
            $('#pedidos').append('<div class="card"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="images/makeof.jpg"></div><div class="card-content"><span class="card-title activator grey-text text-darken-4">'+data.val().nombre+'</span><p class="puesto">'+data.val().correo+'<i class="material-icons right">search</i></p></div>div class="card-reveal accent-color-back"><span class="card-title white-text"><b>Total: '+data.val().total+'<i class="material-icons right">close</i></b></span></div></div>')
        });
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


//Firebase
var config = {
    apiKey: "AIzaSyDO7UH6zEUUwHgbh6mc_uDkIinjdEMnyRc",
    authDomain: "snack-glam.firebaseapp.com",
    databaseURL: "https://snack-glam.firebaseio.com",
    projectId: "snack-glam",
    storageBucket: "snack-glam.appspot.com",
    messagingSenderId: "66036333580"
  };
  firebase.initializeApp(config);

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
var db = firebase.database();
$('#btnPedido').click(function(){
    var nombre = $('#name').val();
    var email = $('#email').val();
    var phone = $('#phone').val();
    var cantidadNormal = $('#cantidadNormal').val();
    var direccion = $('#direccion').val();
    var subtotalNormal = $('#subtotalNormal').val();
    var cantidadMini = $('#cantidadMini').val();
    var subtotalMini = $('#subtotalMini').val();
    var fruta = $('#fruta option:selected').text();
    var jarabe = $('#jarabe option:selected').text();
    var total = $('#total').val();

    db.ref('pedidos').push({
        nombre: nombre,
        correo: email,
        telefono: phone,
        cantidadNormal: cantidadNormal,
        cantidadMini: cantidadMini,
        direccion: direccion,
        subtotalNormal: subtotalNormal,
        subtotalMini: subtotalMini,
        fruta: fruta,
        jarabe: jarabe,
        total:total
    });
});

$('#btnLogin').click(function(){
    var correo = $('#correoMail').val();
    var pass = $('#contra').val();
    firebase.auth().signInWithEmailAndPassword(correo, pass)
        .catch(function(error){
            var errorCode = error.code;
            var errorMessage = error.message;
        });
});

firebase.auth().onAuthStateChanged(function(user)
{
   if(user)
   { 
        var db = firebase.database();
        db.ref('pedidos').on('child_added', function(data){
            $('.pedidospedidos').append('<div class="col l4 m6 s12"><div class="card"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="images/makeof.jpg"></div><div class="card-content"><span class="card-title activator grey-text text-darken-4">'+data.val().nombre+'</span><p class="puesto">'+data.val().correo+'<i class="material-icons right">search</i></p></div><div class="card-reveal accent-color-back"><span class="card-title white-text"><b>Total: $'+data.val().total+'<i class="material-icons right">close</i></b></span><p class="white-text">Paquetes Normales: '+data.val().cantidadNormal+'</p><p class="white-text">Paquetes mini: '+data.val().cantidadMini+'</p><p class="white-text">Fruta seleccionada: '+data.val().fruta+'</p><p class="white-text">Jarabe seleccionado: '+data.val().jarabe+'</p><p class="white-text">Teléfono: '+data.val().telefono+'</p><p class="white-text">Dirección de envio: '+data.val().direccion+'</p></div></div></div>');
            
        });
   } 
});