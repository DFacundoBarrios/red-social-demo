var url = 'http://image-social.com';
window.addEventListener("load", function() {
    
        
    $('.btn-like').css('cursor', 'pointer');//cuando paso con el mouse sobre el corazon de like se pone la manito
    $('.btn-dislike').css('cursor', 'pointer');

     // Botón de like
     function like() {
        $('.btn-like').unbind('click').click(function() { //unbind borra los eventos antiguos ,unbind('click') limpia el evento click 
            console.log('like');
            $(this).addClass('btn-dislike').removeClass('btn-like'); //le agrego la clase dilike y le saco la otra clase
            $(this).attr('src', url + '/img/heart-red.png'); //hacemos un cambio en el atributo src poniendo la otra imagen
            
            $.ajax({
                url: url + '/like/' + $(this).data('id'), //.data funcion q me coge el valor o id en este caso data-id="{{$image->id}}"
                type: 'GET',//tipo de peticion
                success: function(response) {//success.. cuando la peticion es un exito, response es la respuesta q me llega  
                    if (response.like) {//si me llega el objeto
                        console.log('Has dado like a la publicacion');
                    } else {
                        console.log('Error al dar like');
                    }
                }
            });
            
            dislike();

        });
    }
    like();

    // Botón de dislike
    function dislike() {
        $('.btn-dislike').unbind('click').click(function() {
            console.log('dislike');
            $(this).addClass('btn-like').removeClass('btn-dislike');
            $(this).attr('src', url + '/img/heart-black.png');

            $.ajax({
                url: url + '/dislike/' + $(this).data('id'),
                type: 'GET',
                success: function(response) {
                    if (response.like) {
                        console.log('Has dado dislike a la publicacion');
                    } else {
                        console.log('Error al dar dislike');
                    }
                }
            });

            like();
        });
    }
    dislike();


    // BUSCADOR
    $('#buscador').submit(function(e) {
        $(this).attr('action', url + '/gente/' + $('#buscador #search').val());
    });
    

    });