/* ==========================================================================
   Anata Creative
   ========================================================================== */

anatacreative.app = function(undefined) {

    var exports = this.app;


    // Init
    var init = function() {
        anatacreative.menu();
        anatacreative.forms();
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
