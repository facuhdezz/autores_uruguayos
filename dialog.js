let btnCerrar = document.getElementsByClassName('btn-dialog');
let dialog = document.getElementsByClassName('dialog');
let header = document.getElementsByTagName('header');
let main = document.getElementsByTagName('main');

btnCerrar[0].addEventListener('click', () => {
    dialog[0].classList.add('d-none');
    header[0].classList.remove('fade');
    main[0].classList.remove('fade');
})