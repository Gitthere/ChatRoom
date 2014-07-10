$(document).ready(function() {

  $('#submitButton').on('click', function(e) {
    e.preventDefault();
    //gets value entered in username
    var first = $('#username').val();
    //gets value entered in message box
    var message = $('#messageArea').val();
    //creates timestamp
    var time = new Date($.now());
    //appends message containing username, message and timestamp
    $('#messageWindow').append('<p>' + first +':  ' + message + ':  ' + time + '</p>');
    //clears username and message values onclick
    $('#username').val('');
    $('#messageArea').val('');
  });

});
