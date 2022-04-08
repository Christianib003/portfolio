// MOBILE DROPDOWN MENU

const menuBtn = document.querySelector('#bars-menu');
const dropDown = document.querySelector('#menu-mobile');
const closeBtn = document.querySelector('#close-btn');
const body = document.getElementById('body');
const options = document.querySelectorAll('.option');
const overlay = document.querySelector('#background');

menuBtn.addEventListener('click', () => {
  dropDown.style.display = 'block';
  overlay.style.display = 'block';
  body.style.overflow = 'hidden';
});

closeBtn.addEventListener('click', () => {
  dropDown.style.display = 'none';
  overlay.style.display = 'none';
  body.style.overflow = 'visible';
});

for (let i = 0; i < options.length; i += 1) {
  options[i].addEventListener('click', () => {
    dropDown.style.display = 'none';
    overlay.style.display = 'none';
    body.style.overflow = 'visible';
  });
}