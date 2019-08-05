$(document).ready(function () {
    $("#copy1").click(function(){
        $("#firstTarget").clone(false).appendTo($("#destination1"))
        $("#delete1").html("")
    })
    $("#copy2").click(function(){
        $("#secondTarget").clone(false).appendTo($("#destination2"))
        $("#delete2").html("")
    })


})