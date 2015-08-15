/* ==========================================================================
   Anata Creative
   ========================================================================== */

var anatacreative = anatacreative || {};

anatacreative.app = function(undefined) {
    var homeParticles;


    // Particles
    homeParticles = function() {
        if (document.getElementById('particle-container') !== null) {
            particlesJS.load('particle-container', '/particles.json', function() {
                document.getElementById('particle-container').classList.add('particles-js-ready');
            });
        }
    };


    // Init
    var init = function() {
        homeParticles();
        //anatacreative.blog();
    }();
};

anatacreative.app();
