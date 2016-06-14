/* ==========================================================================
   AnataCreative - Navigation
   ========================================================================== */

anatacreative.nav = function(undefined) {

    var exports = this.nav;

    var mainContent;

    var mainNavLinks, filterLinks;

    var isNavigating = false;

    var aniEasing = 'ease';
    var aniDuration = 100,
        aniDuration2 = 200;



    // Pre fetch
    var preFetch = function(url) {
        if (window.location.href !== url) {
            history.pushState(null, null, url);

            fetch(url);
        }
    };


    // Fetch
    var fetch = function(url) {
        if (!isNavigating) {
            isNavigating = true;

            var showDone = false,
                downloadDone = false;

            var data,
                aniValues;

            // Determine aniValues
            aniValues = {
                opacity: [0, 1]
            };

            // Update Main Nav
            updateMainNavLinks(url);

            // Hide
            document.body.classList.add('content-loading');

            Velocity(mainContent, aniValues, {
                easing: aniEasing,
                duration: aniDuration,
                delay: 0,
                complete: function() {
                    showDone = true;

                    if (downloadDone) {
                        append(data);
                    }
                }
            });

            // Get New Content
            var getReq = new XMLHttpRequest();
            getReq.open('GET', url, true);

            getReq.onload = function() {
                if (getReq.status >= 200 && getReq.status < 400) {
                    // Store content
                    var fullData = document.createElement('div');
                    fullData.innerHTML = this.responseXML.body.innerHTML;

                    data = fullData.getElementsByClassName('js-main-content')[0].innerHTML;

                    // Download done
                    downloadDone = true;

                    // Update title
                    document.title = this.responseXML.title;

                    // Append
                    if (showDone) {
                        append(data);
                    }
                } else {
                    window.location.href = url;
                }
            };

            getReq.onerror = function() {
                window.location.href = url;
            };

            getReq.responseType = 'document';
            getReq.send();
        }
    };



    // Append new content
    var append = function(data) {
        // Append data
        mainContent.innerHTML = data;

        // Reset
        reset();

        // Show
        show();

        // Not navigating anymore
        isNavigating = false;
    };



    // Show
    var show = function() {
        var aniValues;

        // Show
        document.body.classList.remove('content-loading');

        Velocity(mainContent, {
            opacity: [1, 0]
        }, {
            easing: aniEasing,
            duration: aniDuration2,
            delay: 0
        });
    };



    // Set Navlink active
    var updateMainNavLinks = function(targetUrl) {
        var hasActive = false;

        [].forEach.call(mainNavLinks, function(link, i) {
            link.classList.remove('main-nav__item--active');
            link.blur();

            if (link.href === targetUrl) {
                hasActive = true;
                link.classList.add('main-nav__item--active');
            }
        });

        if (!hasActive) {
            if (targetUrl.indexOf('projects') > -1 || targetUrl.indexOf('projecten') > -1) {
                mainNavLinks[1].classList.add('main-nav__item--active');
            }
        }
    };



    // Reset
    var reset = function() {
        // Recatch links
        catchLinks();

        // Scroll reset
        document.body.scrollTop = 0;
    };



    // Catch Links
    var catchLinks = function() {
        [].forEach.call(document.querySelectorAll('.js-nav-link'), function(link, i) {
            link.addEventListener('click', function(e) {
                e.preventDefault();

                preFetch(this.href, 'vert', 'main', this.dataset.scrollTarget);
            });
        });
    };



    // Init
    var init = function() {

        if (window.history && history.pushState) {
            mainContent = document.getElementById('main-content');
            mainNavLinks = document.querySelectorAll('.js-main-nav-link');

            catchLinks();

            window.addEventListener('popstate', function() {
                fetch(location.href, 'vert', 'main');
            });
        }
    }();
};
