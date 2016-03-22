/* ==========================================================================
   AnataCreative - Nav
   ========================================================================== */

anatacreative.nav = function(undefined) {

    var exports = this.nav;

    var preloader, mainContent;


    var showAndFetch = function(url) {
        var showDone = false,
            downloadDone = false;

        var mainData;

        // Show Preloader
        Velocity(preloader, {
            translateY: [0, '100%'],
            translateZ: 0
        }, {
            easing: [0.44, 0, 0.16, 1],
            duration: 1000,
            delay: 100,
            begin: function() {
                preloader.classList.add('preloader--active');
            },
            complete: function() {
                showDone = true;

                if (downloadDone) {
                    append(mainData);
                }
            }
        });
        Velocity(mainContent, {
            translateY: ['-100px', 0],
            translateZ: 0,
            opacity: [0.2, 1]
        }, {
            easing: [0.44, 0, 0.16, 1],
            duration: 1000,
            delay: 0
        });

        // Get New Content
        console.log(url);
        var getReq = new XMLHttpRequest();
        getReq.open('GET', url, true);

        getReq.onload = function() {
            if (getReq.status >= 200 && getReq.status < 400) {
                // Success!
                var fullData = document.createElement('div');
                fullData.innerHTML = this.responseXML.body.innerHTML;

                console.log(fullData);
                mainData = fullData.getElementsByClassName('main-content')[0].innerHTML;
                console.log(mainData);

                downloadDone = true;

                if (showDone) {
                    append(mainData);
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
    };


    var append = function(data) {
        // Append data
        mainContent.innerHTML = data;

        // Scroll to top
        document.documentElement.scrollTop = document.body.scrollTop = 0;

        // Hide and reset
        hideAndReset();
    };


    var hideAndReset =  function() {
        // CatchLinks
        catchLinks();
        anatacreative.headerScroll.initScroll();
        anatacreative.forms.initForm();

        // Hide preloader
        Velocity(preloader, {
            translateY: ['-100%', 0],
            translateZ: 0
        }, {
            easing: [0.44, 0, 0.16, 1],
            duration: 1000,
            delay: 0,
            complete: function() {
                preloader.classList.remove('preloader--active');
            }
        });
        Velocity(mainContent, {
            translateY: [0, '100px'],
            translateZ: 0,
            opacity: [1, 0.2]
        }, {
            easing: [0.44, 0, 0.16, 1],
            duration: 1000,
            delay: 0
        });
    };


    var catchLinks = function() {
        [].forEach.call(document.querySelectorAll('.js-internal-link'), function(link, i) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                showAndFetch(this.href);
            });
        });
    };


    // Init
    var init = function() {
        preloader = document.getElementById('preloader');
        mainContent = document.getElementById('main-content');

        catchLinks();
    }();
};
