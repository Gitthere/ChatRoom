$(document).ready(function() {

  $('#submitButton').on('click', function(e) {
    //If this method is called, the default action of the event will not be triggered.
    e.preventDefault();
    //gets value entered in username
    //STRING
    var name = $('#username').val();   
    //gets value entered in message box
    //STRING
    var message = $('#messageArea').val();
    //creates timestamp
    //DATE
    // NOT SURE HOW BELOW IS USED TO GET TIME
    //  if (!Date.now) {
    //   Date.now = function now() {
    //   return new Date().getTime();
    //   };
    //  }
    //var dateCurrentDate = new Date(date.getTime()* 60 * 60 * 1000);
    var time = new Date($.now());
    //appends message containing username, message and timestamp
    //created class for styling
    var saveName = $('<li></li>').append('<span class="user">' + name +  ":  " +'</span>');
    //appends input message to li
    //created class for styling
    saveName.append('<span class="messageSend">' + message + ":  " + '</span>');
    //appends time to li
    //created class for styling
    saveName.append('<span class="messageTime">' + time + ":  " + '</span>');
    //appends completed li to message window
    $('#messageWindow').append(saveName);
    //clears username and message values onclick
    $('#username').val('');
    $('#messageArea').val('');
  });

});
