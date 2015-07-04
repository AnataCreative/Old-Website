/* ==========================================================================
   Startkit
   ========================================================================== */

var anatacreative = anatacreative || {};

anatacreative.app = function(undefined) {
    var homeParticles;

    // Particles
    homeParticles = function() {
        particlesJS.load('home-container', '/particles.json');
    };


    // Init
    var init = function() {
        homeParticles();
    }();
};

document.addEventListener('DOMContentLoaded', function(event) {
    anatacreative.app();
});
