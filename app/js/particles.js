/* ==========================================================================
   Anata Creative - Particles
   ========================================================================== */

var anatacreative = anatacreative || {};

anatacreative.particles = function(undefined) {

    var init;

    // Init
    init = function() {
        var particlesContainer = document.getElementById('particle-container');

        if (particlesContainer !== null) {
            var url = particlesContainer.dataset.particlesUrl;

            particlesJS.load('particle-container', url, function() {
                particlesContainer.classList.add('particles-js-ready');
            });
        }
    }();
};
