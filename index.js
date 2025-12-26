// 🌌 Cosmic Galaxy Portfolio Experience ✨
const cosmicMessages = [
    "Welcome to my universe! 🌌", 
    "Exploring the digital cosmos... 🚀", 
    "Where code meets the stars! ⭐", 
    "Navigating through space and time... 🌟",
    "Building dreams in the galaxy! 💫",
    "May the code be with you! 🛸",
    "Orbiting through possibilities! 🪐"
];

const starEmojis = ['✨', '💫', '🌟', '⭐', '🌌', '🚀', '🛸', '🪐'];

// Cosmic initialization
$(document).ready(function() {
    // Initialize cosmic experience
    initializeCosmos();
    
    // Random cosmic greeting
    setTimeout(function() {
        const randomMessage = cosmicMessages[Math.floor(Math.random() * cosmicMessages.length)];
        console.log(randomMessage);
    }, 2000);
    
    // Add shooting star effect on click
    $(document).on('click', function(e) {
        createShootingStar(e.pageX, e.pageY);
    });
    
    // Cosmic navigation bindings
    bindCosmicNavigation();
    
    // Start shooting stars animation
    startShootingStars();
});

function initializeCosmos() {
    // Hide loading after cosmic initialization
    setTimeout(function(){
        $("#loading").fadeOut(1000);
        // Show cosmic interface
        showCosmicInterface();
    }, 3000);
}

function showCosmicInterface() {
    // Show cosmic elements
    $("#cosmic-universe").show().css('opacity', 0).animate({opacity: 1}, 1500);
    $("#cosmic-nav").show().css('opacity', 0).animate({opacity: 1}, 1000);
    
    // Animate main planet entry  
    $("#main-planet").addClass("animated bounceIn");
    setTimeout(function() {
        $("#main-planet").removeClass("animated bounceIn");
    }, 1500);
}

function bindCosmicNavigation() {
    // Navigation star clicks
    $('.nav-star[data-section="about"]').on('click', function() {
        openPlanet('about');
    });
    
    $('.nav-star[data-section="projects"]').on('click', function() {
        openPlanet('projects');
    });
    
    $('.nav-star[data-section="skills"]').on('click', function() {
        openPlanet('skills');
    });
    
    $('.nav-star[data-section="contact"]').on('click', function() {
        openPlanet('contact');
    });
    
    // Orbit navigation clicks
    $('.orbit-item').on('click', function() {
        const section = $(this).data('section');
        openPlanet(section);
    });
    
    // Close planet functionality
    $('.close-planet').on('click', function() {
        closePlanet();
    });
    
    // Close on escape key
    $(document).on('keydown', function(e) {
        if (e.key === 'Escape') {
            closePlanet();
        }
    });
}

function openPlanet(section) {
    const planetId = section + '-planet';
    
    // Update navigation active state
    $('.nav-star').removeClass('active');
    $(`.nav-star[data-section="${section}"]`).addClass('active');
    
    // Show the specific planet with animation
    $(`#${planetId}`).removeClass('hidden');
    $(`#${planetId} .planet-surface`).addClass('animated zoomIn');
    
    setTimeout(function() {
        $(`#${planetId} .planet-surface`).removeClass('animated zoomIn');
    }, 500);
    
    // Add cosmic background blur
    $('#cosmic-universe').addClass('blurred');
}

function closePlanet() {
    // Remove active navigation state
    $('.nav-star').removeClass('active');
    
    // Hide all planets with animation
    $('.floating-planet').each(function() {
        if (!$(this).hasClass('hidden')) {
            $(this).find('.planet-surface').addClass('animated zoomOut');
            
            setTimeout(() => {
                $(this).addClass('hidden');
                $(this).find('.planet-surface').removeClass('animated zoomOut');
            }, 300);
        }
    });
    
    // Remove cosmic background blur
    $('#cosmic-universe').removeClass('blurred');
}

function createShootingStar(x, y) {
    const star = starEmojis[Math.floor(Math.random() * starEmojis.length)];
    const shootingStar = $(`<div class="shooting-star-effect">${star}</div>`);
    
    shootingStar.css({
        position: 'fixed',
        left: x - 10,
        top: y - 10,
        fontSize: '18px',
        pointerEvents: 'none',
        zIndex: 9999,
        color: '#fff',
        textShadow: '0 0 10px currentColor',
        animation: 'shootingStarEffect 1.5s ease-out forwards'
    });
    
    $('body').append(shootingStar);
    
    setTimeout(function() {
        shootingStar.remove();
    }, 1500);
}

function startShootingStars() {
    setInterval(function() {
        createRandomShootingStar();
    }, 3000);
}

function createRandomShootingStar() {
    const startX = Math.random() * window.innerWidth;
    const startY = Math.random() * window.innerHeight * 0.3;
    
    const shootingStar = $('<div class="cosmic-shooting-star"></div>');
    shootingStar.css({
        position: 'fixed',
        left: startX,
        top: startY,
        width: '2px',
        height: '2px',
        background: 'white',
        borderRadius: '50%',
        boxShadow: '0 0 6px 2px rgba(255, 255, 255, 0.8)',
        pointerEvents: 'none',
        zIndex: 1
    });
    
    $('body').append(shootingStar);
    
    // Animate the shooting star
    shootingStar.animate({
        left: startX + 300,
        top: startY + 300,
        opacity: 0
    }, 3000, function() {
        shootingStar.remove();
    });
}

// Cosmic form handling
function submitCosmicForm() {
    // Add cosmic submission feedback
    $('.cosmic-button[type="submit"]').html('Launching message to the stars... 🚀');
    
    setTimeout(function() {
        $('.cosmic-button[type="submit"]').html('Message sent to the cosmos! ✨');
    }, 2000);
}

// Additional cosmic animations and effects
function addCosmicEffects() {
    // Planet floating animation on hover
    $('#main-planet').hover(
        function() {
            $(this).css('animation-play-state', 'paused');
        },
        function() {
            $(this).css('animation-play-state', 'running');
        }
    );
    
    // Cosmic button hover effects
    $('.cosmic-button').hover(
        function() {
            $(this).addClass('cosmic-glow');
        },
        function() {
            $(this).removeClass('cosmic-glow');
        }
    );
}

// Legacy function support for existing functionality
function showprojects() { openPlanet('projects'); }
function closeprojects() { closePlanet(); }
function showabout() { openPlanet('about'); }
function closeabout() { closePlanet(); }
function showwork() { openPlanet('projects'); }
function closework() { closePlanet(); }
function showcontact() { openPlanet('contact'); }
function closecontact() { closePlanet(); }

// Initialize additional cosmic effects when ready
$(window).on('load', function() {
    addCosmicEffects();
});

// Add CSS animation for shooting star effect
$('<style>')
    .prop('type', 'text/css')
    .html(`
        @keyframes shootingStarEffect {
            0% { opacity: 1; transform: scale(1) translate(0, 0); }
            100% { opacity: 0; transform: scale(0.5) translate(100px, 100px); }
        }
        
        .blurred {
            filter: blur(3px);
            transition: filter 0.3s ease;
        }
        
        .cosmic-glow {
            box-shadow: 0 0 30px rgba(102, 126, 234, 0.6) !important;
        }
    `)
    .appendTo('head');
