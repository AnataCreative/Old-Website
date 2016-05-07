/* ==========================================================================
   AnataCreative - headerScroll
   ========================================================================== */

anatacreative.headerScroll = function(undefined) {

    var exports = this.headerScroll;

    var hasHeaderImg = false,
        hasCaption = false;

    var scrollHeaderImg,
        scrollHeaderCaption;


    // Private function
    var transform = function(offset) {
        if (hasHeaderImg) {
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

        if (hasHeaderImg || scrollHeaderCaption && currentOffset < 420) {
            transform(currentOffset);
        }
    };


    // Init
    var init = function() {
        scrollHeaderImg = document.getElementById('scroll-header-img');
        scrollHeaderCaption = document.getElementById('scroll-header-caption');

        if (scrollHeaderImg) {
            hasHeaderImg = true;
        }

        if (scrollHeaderCaption) {
            hasCaption = true;
        }
    }();
};
