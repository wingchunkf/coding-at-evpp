var one = document.querySelector('.answer1');
var two = document.querySelector('.answer2');
var correct_answer = document.querySelector('.answer3');
var four = document.querySelector('.answer4');
var correct_message = document.querySelector('.hidden');
var body = document.getElementsByTagName('body')[0];
var wrong_div = document.querySelector('.wrong_hidden');
var main = document.querySelector('.main');
var image = document.querySelector('.speed');

var button = document.querySelector('.check_button');

button.addEventListener('click', function() {
  var answer = document.getElementById('user_response').value;
 
  console.log(answer)
  if (answer == "C" || answer == 'c') {    
    correct_message.style.display = "block";
    main.style.display = "none";
    body.style.backgroundColor = "#800080";
    body.style.color = "white";
    correct_message.style.color = "white";
    image.style.display = "none";
      } else {
        wrong_div.style.display = "block";
        body.style.backgroundColor = "#8b0000";
        main.style.display = "none";
        body.style.fontFamily = "Nosifer";
        image.style.display = "none";
        body.style.color = "black";
      }  
    })






