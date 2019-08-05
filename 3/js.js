$(document).ready(function () {
    $("#fill").click(function () {
        let target1 = $("#target1").val()
        let target2 = $("#target2").val()
        if(target1<target2){  
            for (let option = target1; option <= target2; option++) {
                $("#select").append("<option>" + option + "</option>")
            }
        }
        if(target2<target1){
            console.log("asasd")
            for (let option = target2; option <= target1; option++) {
                $("#select").append("<option>" + option + "</option>")
            }
        }
    })
})
