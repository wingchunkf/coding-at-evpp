let scrolling = false;
let navHeader = document.querySelector('.nav-header');
let link = document.querySelectorAll('.main-nav');
let home_link = document.getElementById('home');
let nav_links = document.querySelector('.dropdown-toggle');
let first_link = document.getElementById('link1');
let second_link = document.getElementById('link2');
let contact_link = document.querySelector('contact');
let register_link = document.querySelector('.register-link');

window.onscroll = function () {
  if ($(this).scrollTop() === 0) {
    navHeader.classList.add('animated', 'slideInDown');
    navHeader.classList.remove('footer-bg')
    navHeader.style.color = "#999"
    navHeader.style.backgroundColor = "white";    
    navHeader.style.transition = "1.5s";
    console.log('hey')
  } else {
  console.log('scrolling');
  navHeader.style.backgroundColor = "#999";
  navHeader.style.color = "white";
  navHeader.style.transition = "0.5s";
  navHeader.classList.add('footer-bg');
  navHeader.style.position = "fixed";
  navHeader.classList.add('animated', 'slideInDown');

};
}














