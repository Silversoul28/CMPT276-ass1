const questions =["What is 2 + 2", "What is 4 + 4", "What is 8 + 8"]
const choice1=[6, 4, 3]
const choice2=[4, 2, 9]
const choice3=[3, 8, 10]
const choice4=[1, 16, 16]
const answers =[2, 3, 4]
var choice =[-1, -1, -1]
var count =0;
//document.getElementById( 'next' ).style.display = 'none';
//document.getElementsByClassName( 'right' ).style.display = 'none';



var begin = document.querySelector('input[value="Begin"]')//grab the submit button
begin.addEventListener('click', function(evt){
    evt.preventDefault()
    console.log(document.getElementsByTagName("legend")[0].innerHTML)
    document.getElementsByTagName('legend')[0].innerHTML = "Question "+(count+1)

    document.getElementById( 'begin' ).style.display = 'none';
    document.getElementById( 'prev' ).style.display = 'block';
    document.getElementById( 'next' ).style.display = 'block';
  

    for(var i=0; i<4;i++){
    document.getElementsByName('choiceN')[i].style.display='inline-block';
    document.getElementsByName('choiceN')[i].style.marginLeft='50%';
    }
    //document.getElementsByClassName( 'center' )[0].style.display='block';



    document.querySelector('label[for="choice1"]').innerHTML = choice1[count]
    document.querySelector('label[for="choice2"]').innerHTML = choice2[count]
    document.querySelector('label[for="choice3"]').innerHTML = choice3[count]
    document.querySelector('label[for="choice4"]').innerHTML = choice4[count]
    document.getElementById('question').innerHTML = questions[count]
})

var prev = document.querySelector('input[value="Previous"]')//grab the submit button
prev.addEventListener('click', function(evt){
   evt.preventDefault()
   if(count>0){
    count--;
    document.getElementsByClassName('choiceALL')[choice[count]].checked= true;
   }

    document.getElementById('next').value="Next";

    document.querySelector('label[for="choice1"]').innerHTML = choice1[count]
    document.querySelector('label[for="choice2"]').innerHTML = choice2[count]
    document.querySelector('label[for="choice3"]').innerHTML = choice3[count]
    document.querySelector('label[for="choice4"]').innerHTML = choice4[count]

    document.getElementById('question').innerHTML = questions[count]
    document.getElementsByTagName('legend')[0].innerHTML = "Question "+(count+1)

 })


 var next = document.querySelector('input[value="Next"]')//grab the submit button
 next.addEventListener('click',function(evt){
    evt.preventDefault()

    checkPage();

    document.querySelector('label[for="choice1"]').innerHTML = choice1[count]
    document.querySelector('label[for="choice2"]').innerHTML = choice2[count]
    document.querySelector('label[for="choice3"]').innerHTML = choice3[count]
    document.querySelector('label[for="choice4"]').innerHTML = choice4[count]
    document.getElementById('question').innerHTML = questions[count]
    document.getElementsByTagName('legend')[0].innerHTML = "Question "+(count+1)
   

    
              //add a spot for caching past answers when the prev button is pressed
        //and add one in the prev event listener as well

        
   
  })


 function checkPage(){

  individualAns();

  if(count <1){
     count++;
  }
  else if(count ==1){
      count ++;
      document.getElementById('next').value="Submit";
  }
  else if(count==2){
     subAnswers();
  }
}

//for next button
function individualAns(){
var clicked=false;
  for(var i=0; i<4;i++){
    if(document.getElementsByClassName('choiceALL')[i].checked==true){
      choice[count]=document.getElementsByClassName('choiceALL')[i].value;
      clicked=true;
    }
    document.getElementsByClassName('choiceALL')[i].checked=false;
  }
  if((choice[count+1]!=-1)&&(count<2)){
    document.getElementsByClassName('choiceALL')[choice[count+1]].checked=true;
  }

} 
//for prev button
// function answerCache(){

//   if(count!=0){
//     document.getElementsByClassName('choiceC')[choice[count-1]].checked= true;
//   }

// }

  function subAnswers(){

    document.getElementById("quiz").style.display='none';
    document.getElementById("answers").style.display='block';
    document.getElementById("score").style.display='block';

   for(var i=0; i<3;i++){
   document.getElementsByClassName('choiceC')[(i+1)*4].innerHTML = choice1[i]
   document.getElementsByClassName('choiceC')[((i+1)*4)+1].innerHTML = choice2[i]
   document.getElementsByClassName('choiceC')[((i+1)*4)+2].innerHTML = choice3[i]
   document.getElementsByClassName('choiceC')[((i+1)*4)+3].innerHTML = choice4[i]
   document.getElementsByClassName('choiceALL')[(eval((i+1)*4)+eval(choice[i]))].checked = true;

   }

  }


  


    //here goes function or class that will capture and record the answers
  
    //and another function that checks if the answers are correct
  
    //then probably a page refresh to or a div tha captures everything forr a display none
    //and then display all the answers with html
  
  

// left to do
// the final page maybe do a refresh and show all the questions and answeers
// and of course figure out how to actually save the answeers
// and then figure  out how to compare and keep the answeers
// not only for the score but to show each questoins right an d wrong answer


// let var1 = document.getElementById("quiz");
// var1;