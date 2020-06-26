var secXpos = [];
var secYpos = [];

var minXpos = []; 
var minYpos = [];

var hourXpos = []; 
var hourYpos = [];

var lineTime = [];
var lineX = [];
var lineY = [];


function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}


function setup() {

  createCanvas(windowWidth,windowHeight)
  background(155)
  
  // textSize(32);
  //   var theTime = amPm(hour()) + ":" + minute() + ":" + niceSecond(second());
  //   text(theTime,40,height/12)



    for(var x=0; x < 240; x++) {               

      var randomX =  getRndInteger(0, width)
      var randomY = getRndInteger((height*1/18),height)

          secXpos.push(randomX);
          secYpos.push(randomY);         
      }
  
    

  for(var min=0; min < 120; min++) {     
              
    var ranMinX = getRndInteger(0, width)
    var ranMinY = getRndInteger((height*1/18),height)

      // var ranMinX =  Math.floor(Math.random() * width)
      // var ranMinY = Math.floor(Math.random() * height)

          minXpos.push(ranMinX);
          minYpos.push(ranMinY);
             
      }


  for(var hour=0; hour < 60; hour++) {     
          
    var ranHourX = getRndInteger(0, width)    
    var ranHourY = getRndInteger((height* 1/18), height)

      // var ranHourX =  Math.floor(Math.random() * width)
      // var ranHourY = Math.floor(Math.random() * height)

          hourXpos.push(ranHourX);
          hourYpos.push(ranHourY);
             
      }

}



function amPm(myhour) {
 if(myhour < 13) {
   return myhour
 } else {
   return myhour-12
 }
}
function niceSecond(sec) {
 if(sec < 10) {
   return "0" + sec
 } else {
   return sec
 }
}


//we are ready for draw()
// draw() is a loop that runs automatically 60 times a second
function draw() {
  // put drawing code here
  //you need a background here....
noStroke()
background(0,0,102)

// var nightColor2 = [0,0,102]
// var nightcolor1 = [0,0,153]

// var dayColor2 = [153,204,255]
// var daycolor1 = [102,205,255]

// from = color(nightColor2, nightcolor1)
// to = color(dayColor2, daycolor1)
// lerpColor(from, to)

// want to try to change color background.... 
 
 // Time 
  fill('black')
  //the time
    textSize(32);
    var theTime = amPm(hour()) + ":" + minute() + ":" + niceSecond(second());
    text(theTime,100,height/20)

//the moon
if ( hour() < 13 ) { 
     fill(255, 255, 102)
   } else { 
    fill(255, 255, 204)
   } 
  ellipse(50, height/20, 60,60)
   

fill('yellow')
for(var i=0; i < second()+240; i++) { 
    ellipse(secXpos[i] + second(), secYpos[i] + second(), 5,5)
  }


fill('white')
  push();
    translate(p5.Vector.fromAngle(millis() / 1000, 10))
  for(var j=0; j < minute()+ 120; j++) { 
    // push();
    // translate(width / 120, height / 100) 
    // translate(p5.Vector.fromAngle(millis() / 1000, 10))
    ellipse(minXpos[j] + minute(), minYpos[j] + minute(), 9,9)  
  }
pop();

fill('orange')
  for(var k=0; k < hour()+ 60; k++) { 
    ellipse(hourXpos[k], hourYpos[k], 10,10)
  }
if (second()/5 == lineTime.length) {
    var ranX = Math.floor(random(60))
    lineTime.push(second())
    lineX.push(hourXpos[ranX])
    lineY.push(hourYpos[ranX])
}
stroke(255)
if (lineX.length > 1) {
  for(var i = 1; i < lineX.length; i++) {
  line(lineX[i-1], lineY[i-1], lineX[i], lineY[i])
    }
  }
  if (second() == 59) {
    lineTime = [];
    lineX = [];
    lineY = [];
  }
}







