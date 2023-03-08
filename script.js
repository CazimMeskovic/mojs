
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav');

const inicialCords=section1.getBoundingClientRect();

window.addEventListener('scroll', function(){

if(window.scrollY > inicialCords.top) nav.
classList.add('sticky')
else nav.classList.remove('sticky')

})

















