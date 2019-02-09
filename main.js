let scrolling = false;
let navHeader = document.querySelector('.nav-header');
let links = document.querySelectorAll('.main-nav');
let home_link = document.getElementById('home');
let first_link = document.getElementById('link1');
let second_link = document.getElementById('link2');
let contact_link = document.querySelector('contact');
let register_link = document.querySelector('.register-link');

window.onscroll = function () {

  console.log('scrolling');
  navHeader.style.backgroundColor = "#2b5184";
  navHeader.classList.add('animated', 'slideInDown');
  register_link.style.backgroundColor = "white";
  // home_link.style.color = "white";
  first_link.style.color = 'white';
  second_link.style.color = 'white';
  navHeader.classList.add('animated');
  navHeader.classList.add('slideInDown');

  register_link.style.color = "#2b5184";
};

$(window).scroll(function () {
  if ($(this).scrollTop() === 0) {
    navHeader.classList.add('animated', 'slideInDown');
    // navHeader.classList.add('slideInDown');
    navHeader.style.backgroundColor = "white";
    // home_link.style.color = "#2b5184";
    first_link.style.color = "#2b5184";
    second_link.style.color = "#2b5184";
    register_link.style.backgroundColor = "#2b5184";
    register_link.style.color = 'white';
 
    navHeader.style.transition = "3s";
    console.log('hey')
  }
});

// user clicks on Login button in navbar. Text is removed and login/registration boxes appear

let headerText = document.querySelector('.header-text');
let loginDiv = document.querySelector('.login');
let registrationDiv = document.querySelector('.register');
let comboDiv = document.querySelector('.login-register');

second_link.addEventListener('click', function() {
  headerText.classList.add('fadeOut', 'animated');
  headerText.style.display = "none"; 

  loginDiv.classList.add('fadeIn', 'animated'); 
  loginDiv.style.display = "block";

  registrationDiv.classList.add('fadeIn', 'animated'); 
  registrationDiv.style.display = "block";

  comboDiv.classList.add('fadeIn', 'animated');  
  comboDiv.style.display = "block";
  console.log('clicked')
})

// third_link.addEventListener('click', function() {

//   headerText.classList.add('fadeOut', 'animated');
//   headerText.style.display = "none";
 
//   loginDiv.classList.add('fadeIn', 'animated'); 
//   loginDiv.style.display = "block";

//   registrationDiv.classList.add('fadeIn', 'animated'); 
//   registrationDiv.style.display = "block";

//   comboDiv.classList.add('fadeIn', 'animated');  
//   comboDiv.style.display = "block";
//   console.log('clicked')
// })

// events that occur after user enters info and clicks submit button to log in

let loginButton = document.querySelector('#login-submit');
let userEmail = document.querySelector('#email');
let userPassword = document.querySelector('#registration-password');

loginButton.addEventListener('click', function(e) {
  e.preventDefault();
  if ( (userEmail.value !== "") && (userPassword.value !== "") ) {
    window.location.href="/map.html";
    userEmail.classList.add('animated', 'slideOutRight');
    userEmail.value = ""; 
    userPassword.value = "";    
      } else {
        e.preventDefault();     
    }
  })

// userPassword.addEventListener('focus', function() {
//   if ( userEmail.value == "" ) {
//     userEmail.classList.add('invalid');
//     } else {
//     userEmail.classList.remove('invalid');
//   }
// })

// userPassword.addEventListener('blur', function() {
//   if (userPassword.value == '') {
//     userPassword.classList.add('invalid')     
//   } else {
//     userPassword.classList.remove('invalid')
//   }
// })

loginDiv.addEventListener('mouseover', function() {    
  console.log('input field has been focused on')
  loginDiv.style.transition = "all ease-in 0.9";
  loginDiv.style.backgroundColor = "#2b5184";
  loginDiv.style.color = "white";
})

loginDiv.addEventListener('mouseout', function() {  
  console.log('input field has been focused on')
  loginDiv.style.transition = "all ease-in 0.9";
  loginDiv.style.backgroundColor = "white";
  loginDiv.style.color = "#8c979a"; 
  
})

registrationDiv.addEventListener('mouseover', function() {  
  console.log('input field has been focused on')
  registrationDiv.style.transition = "all ease-in 0.9";  
  registrationDiv.style.backgroundColor = "#2b5184";
  registrationDiv.style.color = "white"; 
})

registrationDiv.addEventListener('mouseout', function() {  
  console.log('input field has been focused on')
  registrationDiv.style.transition = "all ease-in 0.9";
  registrationDiv.style.backgroundColor = "white";
  registrationDiv.style.color = "#8c979a"; 
})

let regButton = document.querySelector('#registration-submit');

regButton.addEventListener('click', function(e) { 
  if ( (userEmail.value !== "") && (userPassword.value !== "") ) {
  window.location.href="/map.html";
  userEmail.value = "";
  userPassword.value = "";
  console.log('user logged in')
  } else {
    e.preventDefault();      
    window.location.href="/map.html";
  }
})









