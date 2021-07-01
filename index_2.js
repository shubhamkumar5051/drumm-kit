function handleClick() {
  alert(" i got clicked ! ");
}
//acessing all the class drum
var size = document.querySelectorAll(".drum").length;

// document.querySelectorAll(".drum")[0].addEventListener("click", handleClick);
// document.querySelectorAll(".drum")[1].addEventListener("click", handleClick);
// document.querySelectorAll(".drum")[2].addEventListener("click", handleClick);
// document.querySelectorAll(".drum")[3].addEventListener("click", handleClick);
// document.querySelectorAll(".drum")[4].addEventListener("click", handleClick);
// document.querySelectorAll(".drum")[5].addEventListener("click", handleClick);
// document.querySelectorAll(".drum")[6].addEventListener("click", handleClick);

//using loop to avoid writing code again and again for each drum class

for (var i = 0; i < size; i++) {
  //detecting button press
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var value = this.innerHTML;
    makeSound(value);
    buttonAnimation(value);
  });
}
//detecting keyboard press
document.addEventListener("keypress", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    //we have created construtor function
    // function Audio(fileLocation)
    // {
    //   this.fileLocation=fileLocation;
    //   this.Play=function()
    //   {

    //   }
    // }

    // to access this constrctor function
    //var audio1= new Audio();
    case "S":
    case "s":
      var audio = new Audio("sounds/tom-3.mp3"); // with the new keyword we creating new object
      audio.play(); //play() is a method here. that is called upon object
      break;
    case "H":
    case "h":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "U":
    case "u":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "B":
    case "b":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "H":
    case "h":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "A":
    case "a":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "M":
    case "m":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;

    default:
      break;
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
