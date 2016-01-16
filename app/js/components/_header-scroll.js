/* ==========================================================================
   AnataCreative - headerScroll
   ========================================================================== */

var anatacreative = anatacreative || {};

anatacreative.headerScroll = function(undefined) {

    var exports = this.headerScroll;

    var hasHeader = false,
        hasDefaultHeader = false,
        hasAltHeader = false,
        hasCaption = false;

    var scrollHeaderImg,
        scrollHeaderCaption;


    // Private function
    var transform = function(offset) {
        if (hasDefaultHeader) {
            scrollHeaderImg.style.webkitTransform = 'translate3d(-50%, ' + offset/6 + 'px, 0)';
            scrollHeaderImg.style.transform = 'translate3d(-50%, ' + offset/6 + 'px, 0)';
        }

        if (hasAltHeader) {
            scrollHeaderAltImg.style.webkitTransform = 'translate3d(0, ' + offset/6 + 'px, 0)';
            scrollHeaderAltImg.style.transform = 'translate3d(0, ' + offset/6 + 'px, 0)';
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


    // Init
    var init = function() {
        scrollHeaderImg = document.getElementById('scroll-header-img');
        scrollHeaderAltImg = document.getElementById('scroll-header-alt-img');
        scrollHeaderCaption = document.getElementById('scroll-header-caption');

        if (scrollHeaderImg) {
            hasHeader = true;
            hasDefaultHeader = true;
        }

        if (scrollHeaderAltImg) {
            hasHeader = true;
            hasAltHeader = true;
        }

        if (scrollHeaderCaption) {
            hasCaption = true;
        }
    }();
};
