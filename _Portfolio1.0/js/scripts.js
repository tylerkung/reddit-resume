$(document).ready(function(){
    $(".expand-button").click(function(){
        $(this).toggleClass("collapsed");
        $(this).parent().children(".expand-box").toggleClass("hidden");
    });
    $(".arrow.up").click(function(){
        if ($(this).hasClass("voted")){
            $(this).removeClass("voted").addClass("unvoted");
            $(this).parent(".vote").removeClass("upvoted").addClass("unvoted");
        }
        else{
            $(this).addClass("voted");
            $(this).parent(".vote").removeClass("unvoted downvoted").addClass("upvoted");
            $(this).siblings(".arrow.down").removeClass("voted");
        }
    });
    $(".arrow.down").click(function(){
        if ($(this).hasClass("voted")){
            $(this).removeClass("voted").addClass("unvoted");
            $(this).parent(".vote").removeClass("downvoted").addClass("unvoted");
        }
        else{
            $(this).addClass("voted");
            $(this).parent(".vote").removeClass("unvoted upvoted").addClass("downvoted");
            $(this).siblings(".arrow.up").removeClass("voted");
        }
    });
});
