/* ==========================================================================
   AnataCreative - Form
   ========================================================================== */

anatacreative.forms = function(undefined) {

    var exports = this.forms;

    var form, submitBtn;


    // On submit
    var onSubmit = function(e) {
        e.preventDefault();

        form.classList.add('form--submitting');
        form.classList.remove('form--error');

        submitBtn.classList.add('submit-btn--loading');
        submitBtn.setAttribute('disabled', true);

        var data = 'name=' + this.name.value + '&email=' + this.email.value + '&message=' + this.message.value + '&_gotcha=' + this._gotcha.value;

        var request = new XMLHttpRequest();
        request.open('POST', '//formspree.io/info@anatacreative.com', true);
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        request.setRequestHeader('Accept', 'application/json');

        request.addEventListener('load', function(resp) {
            form.classList.remove('form--submitting');
            form.classList.add('form--success');

        });
        request.addEventListener('error', function(resp) {
            form.classList.remove('form--submitting');
            form.classList.add('form--error');

            submitBtn.classList.remove('submit-btn--loading');
            submitBtn.removeAttribute('disabled');
        });

        request.send(data);
    };



    // Setup
    var setup = function() {
        submitBtn = document.getElementById('form-submit');

        form.addEventListener('submit', onSubmit);
    };



    // Init Form
    exports.initForm = function() {
        form = document.getElementById('form');

        if (form) {
            setup();
        }
    };



    // Init
    var init = function() {
        exports.initForm();
    }();
};
