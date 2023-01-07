const header = document.querySelector('header');
const menu = document.querySelector('.menu');

menu.addEventListener('click', e => {
  header.classList.toggle('ativo');
});
