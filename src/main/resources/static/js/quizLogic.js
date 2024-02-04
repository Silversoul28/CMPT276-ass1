const questions =["What is 2 + 2?", "What is 4 + 4?", "What is 8 + 8?"]
const choice1=[6, 4, 3]
const choice2=[4, 2, 9]
const choice3=[3, 8, 10]
const choice4=[1, 16, 16]
const answers =[1, 2, 3]
var choice =[-1, -1, -1]
var count =0;
var score=0;


var begin = document.querySelector('input[value="Begin"]')//grab the submit button
begin.addEventListener('click', function(evt){
    evt.preventDefault()

    document.getElementsByTagName('legend')[0].innerHTML = "Question "+(count+1)
    document.querySelector('label[for="choice1"]').innerHTML = choice1[count]
    document.querySelector('label[for="choice2"]').innerHTML = choice2[count]
    document.querySelector('label[for="choice3"]').innerHTML = choice3[count]
    document.querySelector('label[for="choice4"]').innerHTML = choice4[count]
    document.getElementById('question').innerHTML = questions[count]

    //document.getElementById( 'begin' ).style.display = 'none';
    document.getElementById( 'start' ).style.display = 'none';
    document.getElementById( 'next' ).style.display = 'block';
    document.getElementById( 'quest' ).style.display = 'block';
    document.getElementById( 'prev' ).style.display = 'none';
    document.getElementsByTagName('legend')[0].style.display='block';
    for(var i=0; i<4;i++){
    document.getElementsByName('choiceN')[i].style.display='inline-block';
    document.getElementsByName('choiceN')[i].style.marginLeft='50%';
    }
})

var prev = document.querySelector('input[value="Previous"]')//grab the prev button
prev.addEventListener('click', function(evt){
   evt.preventDefault()
 
    checkPagePrev();

    document.querySelector('label[for="choice1"]').innerHTML = choice1[count]
    document.querySelector('label[for="choice2"]').innerHTML = choice2[count]
    document.querySelector('label[for="choice3"]').innerHTML = choice3[count]
    document.querySelector('label[for="choice4"]').innerHTML = choice4[count]

    document.getElementById('question').innerHTML = questions[count]
    document.getElementsByTagName('legend')[0].innerHTML = "Question "+(count+1)

 })

 var next = document.querySelector('input[value="Next"]')//grab the next button
 next.addEventListener('click',function(evt){
    evt.preventDefault()

    if(individualAns()){

    checkPageNext();

    document.querySelector('label[for="choice1"]').innerHTML = choice1[count]
    document.querySelector('label[for="choice2"]').innerHTML = choice2[count]
    document.querySelector('label[for="choice3"]').innerHTML = choice3[count]
    document.querySelector('label[for="choice4"]').innerHTML = choice4[count]
    document.getElementById('question').innerHTML = questions[count]
    document.getElementsByTagName('legend')[0].innerHTML = "Question "+(count+1)

    document.getElementById( 'prev' ).style.display = 'block';
    }
  })

 function checkPagePrev(){//checking and updating chosen values on the previous page and current page

  for(var i=0; i<4;i++){//keeps the button pressed on the page after if you've clicked it and then pressed previous
    if(document.getElementsByClassName('choiceALL')[i].checked==true){
      choice[count]=document.getElementsByClassName('choiceALL')[i].value;
    }
  }

   if(count>0){
    count--;
    document.getElementsByClassName('choiceALL')[choice[count]].checked= true;//keeps the button you selected and came back to still pressed
   }
   if(count==0) {
    document.getElementById( 'prev' ).style.display = 'none';//if its the first page remove previous button
   }

    document.getElementById('next').value="Next";//changes the button back to next if it was submit

 }

 function checkPageNext(){//checking and updating chosen values on the next page and current page

  if((choice[count+1]!=-1)&&(count<2)){//if on the second to last page or less and you've already selected an answer on the next page, keeps that button selected
    document.getElementsByClassName('choiceALL')[choice[count+1]].checked=true;
  }
  
  if(count <1){
     count++;
  }
  else if(count ==1){
      count ++;
      document.getElementById('next').value="Submit";//if last page change next button to a submit button
  }
  else if(count==2){
     subAnswers();
  }
}

function individualAns(){//records choices

var clicked=false;

  for(var i=0; i<4;i++){
    if(document.getElementsByClassName('choiceALL')[i].checked==true){
      choice[count]=document.getElementsByClassName('choiceALL')[i].value;//loads choice into array
      clicked=true;
    }
    document.getElementsByClassName('choiceALL')[i].checked=false;//resets the buttons
  }

  if(clicked!=true){//if no selection was detected
    alert("Select an Option Before Continuing");
    return 0;
  }
return 1;
} 

function subAnswers(){//displays the answers and score

    document.getElementById("quiz").style.display='none';
    document.getElementById("answers").style.display='block';
    document.getElementById("score").style.display='block';

   for(var i=0; i<3;i++){
    document.getElementsByClassName('questionNum')[i].innerHTML = "Question "+(i+1)
    document.getElementsByClassName('questionn')[i].innerHTML = questions[i]
    document.getElementsByClassName('choiceC')[(i+1)*4].innerHTML = choice1[i]
    document.getElementsByClassName('choiceC')[((i+1)*4)+1].innerHTML = choice2[i]
    document.getElementsByClassName('choiceC')[((i+1)*4)+2].innerHTML = choice3[i]
    document.getElementsByClassName('choiceC')[((i+1)*4)+3].innerHTML = choice4[i]

    var choose=document.getElementsByClassName('choiceALL')[(eval((i+1)*4)+eval(choice[i]))];
    var ans=document.getElementsByClassName('choiceALL')[(eval((i+1)*4)+eval(answers[i]))];
    if(choice[i]==answers[i]){
      score++;
      ans.checked = true;
      ans.style.accentColor='green';
     }else{
   choose.checked = true;
   choose.style.accentColor='red';
   ans.checked = true;
   ans.style.accentColor='green';
     }

   }
   document.getElementById('fraction').innerHTML=score+"/"+"3";
  }

