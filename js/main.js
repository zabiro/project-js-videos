$(document).ready(function(){
    if (window.location.href.indexOf('index')>-1) {

        
        //Slider

        $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200,
        page: true,
    });
}

      //POSTS
        if (window.location.href.indexOf('index')>-1) {
            
        
      var posts = [
        {
            title: 'prueba de titulo 1',
            date: "Publicado el dia " + moment().format("dddd") +" del mes de "+moment().format("MMMM ")+" del año "+ moment().format("YYYY"),
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec mi eu nibh viverra maximus. Ut elementum urna ac cursus ornare. Nullam sit amet commodo neque. Aenean dapibus ac dui sed laoreet. Suspendisse sit amet lacus tempus, tristique nunc sit amet, egestas augue. Ut ut elit eu risus scelerisque tempor. Nulla eget semper erat, et mattis risus. In suscipit, lorem id lobortis pharetra, urna ex sollicitudin erat, nec viverra mauris risus id augue. Pellentesque dapibus leo a diam ultrices rhoncus. Quisque vulputate pretium diam, eget semper velit maximus ac."

        },
        {
            title: 'prueba de titulo 2',
            date: new Date(),
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec mi eu nibh viverra maximus. Ut elementum urna ac cursus ornare. Nullam sit amet commodo neque. Aenean dapibus ac dui sed laoreet. Suspendisse sit amet lacus tempus, tristique nunc sit amet, egestas augue. Ut ut elit eu risus scelerisque tempor. Nulla eget semper erat, et mattis risus. In suscipit, lorem id lobortis pharetra, urna ex sollicitudin erat, nec viverra mauris risus id augue. Pellentesque dapibus leo a diam ultrices rhoncus. Quisque vulputate pretium diam, eget semper velit maximus ac."

        },
        {
            title: 'prueba de titulo 3',
            date: new Date(),
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec mi eu nibh viverra maximus. Ut elementum urna ac cursus ornare. Nullam sit amet commodo neque. Aenean dapibus ac dui sed laoreet. Suspendisse sit amet lacus tempus, tristique nunc sit amet, egestas augue. Ut ut elit eu risus scelerisque tempor. Nulla eget semper erat, et mattis risus. In suscipit, lorem id lobortis pharetra, urna ex sollicitudin erat, nec viverra mauris risus id augue. Pellentesque dapibus leo a diam ultrices rhoncus. Quisque vulputate pretium diam, eget semper velit maximus ac."

        },
        {
            title: 'prueba de titulo 4',
            date: new Date(),
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec mi eu nibh viverra maximus. Ut elementum urna ac cursus ornare. Nullam sit amet commodo neque. Aenean dapibus ac dui sed laoreet. Suspendisse sit amet lacus tempus, tristique nunc sit amet, egestas augue. Ut ut elit eu risus scelerisque tempor. Nulla eget semper erat, et mattis risus. In suscipit, lorem id lobortis pharetra, urna ex sollicitudin erat, nec viverra mauris risus id augue. Pellentesque dapibus leo a diam ultrices rhoncus. Quisque vulputate pretium diam, eget semper velit maximus ac."

        },
        {

            title: 'prueba de titulo 5',
            date: new Date(),
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec mi eu nibh viverra maximus. Ut elementum urna ac cursus ornare. Nullam sit amet commodo neque. Aenean dapibus ac dui sed laoreet. Suspendisse sit amet lacus tempus, tristique nunc sit amet, egestas augue. Ut ut elit eu risus scelerisque tempor. Nulla eget semper erat, et mattis risus. In suscipit, lorem id lobortis pharetra, urna ex sollicitudin erat, nec viverra mauris risus id augue. Pellentesque dapibus leo a diam ultrices rhoncus. Quisque vulputate pretium diam, eget semper velit maximus ac."

        },

      ];



      posts.forEach((item, index) => {
          
          var post = `
          <article class="post">
            <h2>${item.title}</h2>
             <span class="date">${item.date}</span>
             <p> ${item.content}</p>
             <a href="#" class="button-more" >Leer Mas</a>
          </article>
          
          
          `;
          $("#posts").append(post);
      
        });
}
        //selector de tema

        var theme = $("#theme");

        $("#to-green").click(function(){
            theme.attr("href", "css/green.css")

        });

        $("#to-red").click(function(){
            theme.attr("href", "css/red.css")

        });

        $("#to-blue").click(function(){
            theme.attr("href", "css/blue.css")

        });
  
            //SCROLL arriba
        $(".subir").click(function(e){
            e.preventDefault();
                $("html, body").animate({
                    scrollTop: 0
                },500);
                return false;
        });

        //login falso


        $("#login form").submit(function(){
            var form_name = $("#form_name").val();
            localStorage.setItem("form_name", form_name);
        });

        var form_name = localStorage.getItem("form_name");
        if (form_name != null && form_name != undefined) {
            var about_parrafo = $("#about p");
            about_parrafo.html("<br><strong> Bienvenido, "+ form_name+"</strong>");
            about_parrafo.append("<a href='#' id='logout'>Cerrar Sesión </a>");
            $("#login").hide();
            $("#logout").click(function(){
                localStorage.clear();
                location.reload();
            });
            
        } 

        //Acordeon
        if (window.location.href.indexOf('about')>-1) {
            $("#acordeon").accordion();
        }

        //Reloj
        if (window.location.href.indexOf('clock')>-1) {
            setInterval(function(){

                var reloj =moment().format("h:mm:ss");
                $("#reloj").html(reloj);

            },1000);
        }

        //Validation
        if (window.location.href.indexOf('contact')>-1){

            $("form input[name='date']").datepicker({
                dateFormat: 'dd-mm-yy'
            });

            $.validate({
                lang: 'es',
                errorMessagePosition: 'top',
                scrollToTopOnError: true
            });
        }
            
});