/* ==========================================================================
   AnataCreative - Mobile Menu
   ========================================================================== */

anatacreative.menu = function(undefined) {

    var exports = this.menu;

    var btn, btnContainer;


    // Init
    var init = function() {
        btn = document.getElementById('main-nav-mobile-toggle');
        btnContainer = document.getElementById('main-nav-mobile-container');

        btn.addEventListener('click', function() {
            btnContainer.classList.toggle('main-nav__mobile-container--active');
            btn.classList.toggle('main-nav__mobile-toggle--active');
        });
    }();
};
