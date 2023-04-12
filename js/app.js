$(document).ready(function () {
    $("#tombol1").click(function (e) { 
        $("div").hide('slow');
        
    });
    $("#tombol2").click(function (e) { 
        $("div").show('slow');
        
    });
});