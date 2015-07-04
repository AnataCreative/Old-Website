/* ==========================================================================
   Anata Creative
   ========================================================================== */

var anatacreative = anatacreative || {};

anatacreative.app = function(undefined) {
    var homeParticles;

    // Particles
    homeParticles = function() {
        particlesJS.load('home-container', './particles.json', function() {
            document.getElementById('home-container').classList.add('particles-js-ready');
        });
    };


    // Init
    var init = function() {
        homeParticles();
    }();
};

anatacreative.app();
