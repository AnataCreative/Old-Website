/* ==========================================================================
   Anata Creative - Blog
   ========================================================================== */

var anatacreative = anatacreative || {};

anatacreative.blog = function(undefined) {

    var init, handleClick;

    // Handle Click
    handleClick = function(link) {
        link.classList.add('blog-nav__item--active');
    };


    // Init
    init = function() {

        // Click
        [].forEach.call(document.querySelectorAll('.js-blog-link'), function(link) {

            link.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();

                handleClick(this);
            });
        });
    }();
};
