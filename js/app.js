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
    var saveName = $('<li></li>').append('<span class="user">' + name +  ":  " +'</span>');
    //appends input message to li
    saveName.append('<span class="messageSend">' + message + ":  " + '</span>');
    //appends time to li
    saveName.append('<span class="messageTime">' + time + ":  " + '</span>');
    //appends completed li to message window
    $('#messageWindow').append(saveName);
    //clears username and message values onclick
    $('#username').val('');
    $('#messageArea').val('');
  });

});
