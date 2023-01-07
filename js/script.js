const header = document.querySelector('header');
const menu = document.querySelector('.menu');
const url = 'https://api.shrtco.de/v2/';

menu.addEventListener('click', e => {
  header.classList.toggle('ativo');
});

async function getLink() {
  const items = await fetch(url);
  console.log(items);
}
getLink();
