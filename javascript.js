var playing = false;
var score;
var action;
var timeRemaining;
var correctAnswer = x*y; 

                        // if we click on the start/reset button
document.getElementById("startReset").onclick = function () {
    if(playing == true) { //if we are playing 
        location.reload(); //reload the page 
    } else {  
        playing = true;//if we are not playing 
        score = 0;
        document.getElementById('scoreValue').innerHTML = score;  //set score to 0
        show('timeRemaining') // countdown box
        timeRemaining = 60;
        hide('gameOver');

        document.getElementById('timeRemainingValue').innerHTML = timeRemaining;
        document.getElementById('startReset').innerHTML = "Reset Game";
        
        //start countdown    
        startCountdown();
        //generate New Q&A
    }
} 

///// functions ////
function startCountdown(){
       action = setInterval(function(){
           timeRemaining -= 1;
           
           document.getElementById('timeRemainingValue').innerHTML = timeRemaining;
           if (timeRemaining == 0) {
               stopCountdown;
               show('gameOver');
               document.getElementById('gameOver').innerHTML = "<p>Game Over!</p><p>Your Score is " + score + ".</p>";
                
               hide('timeRemaining');
               hide('correct');
               hide('wrong');
               playing = false; 
               
            document.getElementById('startReset').innerHTML = "Start Game";
           }
        }, 1000);
   }
// stop counter 
function stopCountdown(){
        clearInterval(action);
// hide elements
    }
function hide(Id){
     document.getElementById(Id).style.display = 'none';
 }
//show elements
function show(Id){
     document.getElementById(Id).style.display = 'block';
 }


    // generates 2 nums (1-10) and store them in the values of X and Y. 
    var x = 1 + Math.round(9*Math.random());
    var y = 1 + Math.round(9*Math.random());
    correctAnswer = x*y; 
    
    document.getElementById("question").innerHTML = x + "x" + y;
    var correctPosition = 1 + Math.round(3*Math.random());
    // fills one box with the correct answer.
    document.getElementById("box"+correctPosition).innerHTML = correctAnswer; 
    //fills other boxs with wrong answers. 
    var answers = [correctAnswer]; 

    for(i =1; i<5; i++){
        if (i != correctPosition) {
            var wrongAnswer; 
            do {
                wrongAnswer = (1 + Math.round(9*Math.random()))*(1 + Math.round(9*Math.random()));
            } while (answers.indexOf(wrongAnswer)>-1)
            document.getElementById('box'+i).innerHTML = wrongAnswer; 
            answers.push(wrongAnswer);
    }
 }

document.getElementById('box1').onclick = function(){
    if(playing == true){
        //check if answr is correct
        if(this.innerHTML == correctAnswer){
           score ++ ;
            document.getElementById('scoreValue').innerHTML = score; 
            hide('wrong');
            show('correct');
            setTimeout(function(){
                hide('correct');
            }, 1000);
            
            // generate new question
            
            
           } else { // wrong answer
               hide('correct');
               show('wrong');
            setTimeout(function(){
                show('wrong');
            }, 1000);
           }
    }
}
document.getElementById('box2').onclick = function(){
    
}
document.getElementById('box3').onclick = function(){
    
}
document.getElementById('box4').onclick = function(){
    
}

