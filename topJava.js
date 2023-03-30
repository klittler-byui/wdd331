let menuIcon= document.querySelector('.menu-icon');
let nav = document.querySelector('nav');
let line1 = document.querySelector('nav .menu-icon .line--1');
let line2 = document.querySelector('nav .menu-icon .line--2');
let line3 = document.querySelector('nav .menu-icon .line--3');
let link = document.querySelector('nav .nav-links');

menuIcon.addEventListener('click', () => {
  nav.classList.toggle('nav-open');
  line1.classList.toggle('line-cross');
  line2.classList.toggle('line-fade-out');
  line3.classList.toggle('line-cross');
  link.classList.toggle('fade-in');
})
