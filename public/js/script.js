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
        let html = `<h4>${playerName} has ${data.wins} wins, ${data.losses} losses and ${data.ties} ties </h4>`
        $('.score').html(html);
      })
    })
  }); // end of document ready
})(jQuery); // end of jQuery name space
