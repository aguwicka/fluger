$(function () {
    $('.location-modal, .call-us-modal, .login-modal').magnificPopup({
        type: 'inline',
        preloader: false,
        modal: true
    });
    $(document).on('click', '.popup-modal-dismiss', function (e) {
        e.preventDefault();
        $.magnificPopup.close();
    });
});

$(function () {
    $('.basket__link').magnificPopup({
        type: 'inline',
        preloader: false,
        showCloseBtn: false,
        closeOnBgClick : true,
        mainClass : 'basket-bg'
    });
});

$("body").on('focusin', "input[name='tel'], input[name='login_tel']", function () {
    $(this).inputmask('mask', { mask: "+79{*}", greedy: false});
});