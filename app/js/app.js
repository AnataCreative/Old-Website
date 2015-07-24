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

var ready = function(fn) {
    // Sanity check
    if (typeof(fn) !== 'function') return;

    // If document is already loaded, run method
    if (document.readyState === 'complete') {
        return fn();
    }

    // Otherwise, wait until document is loaded
    document.addEventListener('DOMContentLoaded', fn, false);
};

ready(function() {
    anatacreative.app();
});
