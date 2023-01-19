const header = document.querySelector('header');
const menu = document.querySelector('.menu');
const linkShort = document.querySelector('.addLink');
const addLink = document.querySelector('.links-content');
const input = linkShort.querySelector('input');

let shortenLink = null;

const linkShortCut = async link => {
  const url = await fetch(`https://api.shrtco.de/v2/shorten?url=${link}`);
  const data = await url.json();
  shortenLink = await data.result.full_short_link;
  return shortenLink;
};

const submitLink = async event => {
  event.preventDefault();

  if (input.value) {
    addLinkShort(input.value, await linkShortCut(input.value));
    input.value = '';
    return;
  }
};

const addLinkShort = async (link, shortLink) => {

  addLink.innerHTML += ` <div class="newlink-copy">
  <p class="link-to-generate">${link}</p>
<div class="generate-link-content">
<a href="#" class="new-link">${shortLink}</a>
<button class="button-copy">Copy</button>
</div>
</div>`;
};

addLink.addEventListener('click', async e => {
  if (e.target.textContent === 'Copy') {
    await navigator.clipboard.writeText(shortenLink);
    e.target.textContent = 'Copied';
  }
});

// button.addEventListener('click', e => {
//   button.textContent('Copied!');
//   navigator.clipboard.writeText(linkShortCut);
// });

menu.addEventListener('click', e => header.classList.toggle('ativo'));
linkShort.addEventListener('submit', submitLink);
