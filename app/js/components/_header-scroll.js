/* ==========================================================================
   AnataCreative - headerScroll
   ========================================================================== */

anatacreative.headerScroll = function(undefined) {

    var exports = this.headerScroll;

    var hasHeader = false,
        hasCaption = false;

    var scrollHeaderImg,
        scrollHeaderCaption;


    // Private function
    var transform = function(offset) {
        if (hasHeader) {
            scrollHeaderImg.style.webkitTransform = 'translate3d(-50%, ' + offset/6 + 'px, 0)';
            scrollHeaderImg.style.transform = 'translate3d(-50%, ' + offset/6 + 'px, 0)';
        }

        if (hasCaption) {
            scrollHeaderCaption.style.webkitTransform = 'translate3d(0, ' + offset/8 + 'px, 0)';
            scrollHeaderCaption.style.transform = 'translate3d(0, ' + offset/8 + 'px, 0)';

            scrollHeaderCaption.style.opacity = 100/offset;
        }
    };


    // Public function
    exports.updateScroll = function(currentOffset) {

        if (hasHeader  && currentOffset < 420) {
            transform(currentOffset);
        }
    };


    // Reinit
    exports.initScroll = function() {
        scrollHeaderImg = document.getElementById('scroll-header-img');
        scrollHeaderCaption = document.getElementById('scroll-header-caption');

        if (scrollHeaderImg) {
            hasHeader = true;
        }

        if (scrollHeaderCaption) {
            hasCaption = true;
        }
    };


    // Init
    var init = function() {
        exports.initScroll();
    }();
};
