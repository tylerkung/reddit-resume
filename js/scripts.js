$(document).ready(function(){
    $(".expand-button").click(function(){
        $(this).toggleClass("collapsed");
        $(this).parent().children(".expand-box").toggleClass("hidden");
    });
});
