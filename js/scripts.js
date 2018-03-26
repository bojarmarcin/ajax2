$(document).ready(function() {
  $('.box').hide();
  $('#generator').click(function() {
    $('.box').hide();
    $('.quote').text("");
    $('.author').text("");
    $.ajax({
      url: 'https://andruxnet-random-famous-quotes.p.mashape.com/',
      type: "GET",
      dataType: 'json',
      success: function(data) {
        $('.tweet').attr("href","https://twitter.com/intent/tweet?ref_src=twsrc%5Etfw&text="+ '"' + data.quote + '"' + " - " + data.author + "&tw_p=tweetbutton&url=http%3A%2F%2Fcodepen.io%2Fgexo%2Fpen%2FvOPxdg" );
        $('.quote').text('"' + data.quote + '"');
        $('.author').text('--' + data.author);
        $('.box').addClass('animated fadeInLeft').show();
      },
      beforeSend: function(xhr) {
        xhr.setRequestHeader("X-Mashape-Authorization", "k0yyUeZkPpmshDLnY9BD8bFhgm5mp15QiNXjsncA14OFYnCyOH")
      }
    })
  })
});
