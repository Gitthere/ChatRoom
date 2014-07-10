$(document).ready(function() {

  $('#submitButton').on('click', function(e) {
    e.preventDefault();
    //gets value entered in username
    var first = $('#username').val();
    //gets value entered in message box
    var message = $('#messageArea').val();
    //appends message containing username and message
    $('#messageWindow').append('<p>' + first +':  ' + message + '</p>');
      
    // $('#username').val('');
    // $('#messageArea').val('');
  });

});
// p

// .text format(first, message);

// function format() {
//   return first":" message;
// }