$(document).ready(function() {

  $('#submitButton').on('click', function(e) {
    //If this method is called, the default action of the event will not be triggered.
    e.preventDefault();
    //gets value entered in username
    var name = $('#username').val();
        
    //gets value entered in message box
    var message = $('#messageArea').val();
    //creates timestamp
    var time = new Date($.now());
    //appends message containing username, message and timestamp
    $('#messageWindow').append('<li>' + name +':  ' + message + ':  ' + time + '</li>');
    $('#messageWindow').append('<span class="user">' + name + '</span>');
    //$('#messageWindow > span').css('color', 'orange');
        //console.log($('#messageWindow, span').css('color', 'orange'));


    //clears username and message values onclick
    $('#username').val('');
    $('#messageArea').val('');
  });

});
