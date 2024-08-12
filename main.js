x = 0;

y = 0;

screenWidth=0;

screenHeight=0;

draw_apple = "";

var speak_data="";

var to_number="";

var apple="";

function preload()
{
apple = loadImage("apple.png");
}

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

    to_number = Number(content);

    if(Number.isInteger(to_number));

    screen_width = window.innerWidth;

    screen_height = window.innerHeight;

    canvas = createCanvas(screenWidth,screenHeight-150)

    canvas.position(0,150)



}

function setup() {
 
}

function draw() {
  if(draw_apple == "set")
  {
    for(var i = 1; i <= to_number; i++)
      {
      X = Math. floor(Math.random()* 700);
      y = Math. floor(Math.random() * 400 );
      image(apple, x, y, 50, 50);
     }

     speak_data = to_number + "Apples Drawn";
    
     speak("");
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);


}
