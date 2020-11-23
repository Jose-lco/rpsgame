(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.scrollspy').scrollSpy();


    $('button').on('click', function(e){
      e.preventDefault()
      let playerName = $('input').val();
      let play = $(this).val();
      $.get("/shoot/" + playerName + "/" + play, function(data){
        console.log(data);
      })
    })
  }); // end of document ready
})(jQuery); // end of jQuery name space
