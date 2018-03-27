$(document).ready(function() {
  getQuote();
  $('.box').hide();
  function getQuote() {
    $.ajax({
      url: 'https://andruxnet-random-famous-quotes.p.mashape.com/',
      type: "GET",
      dataType: 'json',
      success: function(data) {
        var tweetText = '"' + data.quote + '"' + " - " + data.author;
        if (tweetText.length < 140) {
          $('.tweet').attr("href","https://twitter.com/intent/tweet?ref_src=twsrc%5Etfw&text="+ '"' + data.quote + '"' + " - " + data.author);
          $('.quote').text('"' + data.quote + '"');
          $('.author').text('--' + data.author);
          $('.box').addClass('animated fadeInLeft').show();
        } else {
          getQuote();
        }
      },
      beforeSend: function(xhr) {
        xhr.setRequestHeader("X-Mashape-Authorization", "k0yyUeZkPpmshDLnY9BD8bFhgm5mp15QiNXjsncA14OFYnCyOH")
      }
    })
  }
  $('#generator').click(function() {
    getQuote();
  })
});
