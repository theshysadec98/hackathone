$(function(){
    var socket = io.connect("http://127.0.0.1:5500");
    socket.on("send", function (data) {
        console.log(data);
        $("#content").append("<p class='message'>" + data.username + ": " + data.message + "</p>")
    })

    $("#sendMessage").on("click", function(){
        var username = $('#username').val();
        var message = $('#message').val();
        if(username == ''){
            alert("Please enter the username");
        }
        else{
            socket.emit("send", {username: username , message: message});
            $("#message").val();
        }
    })
})