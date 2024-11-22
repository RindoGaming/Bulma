var btn = document.querySelector('#showModal');
var modalDlg = document.querySelector('#signin-modal');
var imageModalCloseBtn = document.querySelector('#signin-modal-close');
btn.addEventListener('click', function () {
    modalDlg.classList.add('is-active');
});

imageModalCloseBtn.addEventListener('click', function () {
    modalDlg.classList.remove('is-active');
});