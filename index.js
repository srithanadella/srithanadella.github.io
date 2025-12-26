// Fun teenage girl vibes ✨
const funMessages = [
    "Hey bestie! 💕", 
    "Welcome to my world! 🌸", 
    "You're absolutely gorgeous! ✨", 
    "Thanks for visiting! 💖",
    "Hope you're having the best day! 🌟",
    "You seem super cool! 😊",
    "Let's be friends! 👯‍♀️"
];

const sparkleEmojis = ['✨', '💫', '🌟', '⭐', '💖', '🦄', '🌸', '💕'];

// Add sparkle animation on click
$(document).ready(function() {
    // Random greeting message
    setTimeout(function() {
        const randomMessage = funMessages[Math.floor(Math.random() * funMessages.length)];
        console.log(randomMessage);
    }, 2000);
    
    // Add click sparkles
    $(document).on('click', function(e) {
        createSparkle(e.pageX, e.pageY);
    });
    
    // Cute hover effects for buttons
    $('.btn_one').hover(
        function() {
            $(this).html($(this).html() + ' ✨');
        },
        function() {
            $(this).html($(this).html().replace(' ✨', ''));
        }
    );
});

function createSparkle(x, y) {
    const sparkle = $('<div class="sparkle">💖</div>');
    sparkle.css({
        position: 'fixed',
        left: x - 10,
        top: y - 10,
        fontSize: '20px',
        pointerEvents: 'none',
        zIndex: 9999,
        animation: 'sparkleFloat 1s ease-out forwards'
    });
    
    $('body').append(sparkle);
    
    setTimeout(function() {
        sparkle.remove();
    }, 1000);
}

function showprojects(){
    $("#projects_container").css("display","inherit");
    $("#projects_container").addClass("animated slideInDown");
    setTimeout(function(){
        $("#projects_container").removeClass("animated slideInDown");
    },800);
}
function closeprojects(){
    $("#projects_container").addClass("animated slideOutUp");
    setTimeout(function(){
        $("#projects_container").removeClass("animated slideOutUp");
        $("#projects_container").css("display","none");
    },800);
}
function showabout(){
    $("#about_container").css("display","inherit");
    $("#about_container").addClass("animated slideInLeft");
    setTimeout(function(){
        $("#about_container").removeClass("animated slideInLeft");
    },800);
}
function closeabout(){
    $("#about_container").addClass("animated slideOutLeft");
    setTimeout(function(){
        $("#about_container").removeClass("animated slideOutLeft");
        $("#about_container").css("display","none");
    },800);
}
function showwork(){
    $("#work_container").css("display","inherit");
    $("#work_container").addClass("animated slideInRight");
    setTimeout(function(){
        $("#work_container").removeClass("animated slideInRight");
    },800);
}
function closework(){
    $("#work_container").addClass("animated slideOutRight");
    setTimeout(function(){
        $("#work_container").removeClass("animated slideOutRight");
        $("#work_container").css("display","none");
    },800);
}
function showcontact(){
    $("#contact_container").css("display","inherit");
    $("#contact_container").addClass("animated slideInUp");
    setTimeout(function(){
        $("#contact_container").removeClass("animated slideInUp");
    },800);
}
function closecontact(){
    $("#contact_container").addClass("animated slideOutDown");
    setTimeout(function(){
        $("#contact_container").removeClass("animated slideOutDown");
        $("#contact_container").css("display","none");
    },800);
}
setTimeout(function(){
    $("#loading").addClass("animated fadeOut");
    setTimeout(function(){
      $("#loading").removeClass("animated fadeOut");
      $("#loading").css("display","none");
      $("#box").css("display","none");
      $("#projects").removeClass("animated fadeIn");
      $("#about").removeClass("animated fadeIn");
      $("#contact").removeClass("animated fadeIn");
      $("#work").removeClass("animated fadeIn");
    },1000);
},1500);
