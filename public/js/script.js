(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.scrollspy').scrollSpy();
    $.get("leaderboard", function(data){
      console.log(data)
      let html;
      data.forEach(res => {
        html += `<tr>
        <td>${res.player}</td>
        <td>${res.wins}</td>
        <td>${res.losses}</td>
        <td>${res.ties}</td>
      </tr>`
      })
      $('tbody').html(html);
    })

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
