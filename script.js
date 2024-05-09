  $(document).ready(function(){
    // Agrega un evento click a todos los enlaces del menú
    $('nav ul li a').click(function(){
      // Elimina la clase 'active' de todos los enlaces del menú
      $('nav ul li a').removeClass('active');
      // Agrega la clase 'active' solo al enlace clicado
      $(this).addClass('active');
    });
  
    $('.carousel').slick({
      autoplay: true,
      autoplaySpeed: 4000,
      dots: true,
      arrows: true
    });
  });
  