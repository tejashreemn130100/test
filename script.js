$(document).ready(function() {
  $('#read-letter').click(function() {
    $('.birthday-container').hide();
    $('#letter-page').fadeIn(800);
  });

  $('#go-back').click(function() {
    $('#letter-page').fadeOut(800, function() {
      $('.birthday-container').fadeIn();
    });
  });
});
   
