$(document).ready(function() {

  $('#submitButton').on('click', function(e) {
    e.preventDefault();
    var first = $('#username').val();
    console.log(first);
    var message = $('#messageArea').val();
    console.log(message);

    $('#messageWindow').append(first, message);

    $('#username').remove(first);
  })

});