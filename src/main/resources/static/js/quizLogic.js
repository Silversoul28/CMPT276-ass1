const questions =["What is 2 + 2", "What is 4 + 4", "What is 8 + 8"]
const choice1=[6, 4, 3]
const choice2=[4, 2, 9]
const choice3=[3, 8, 10]
const choice4=[1, 16, 16]
var choice =[0, 0, 0]
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
 next.addEventListener('click', function(evt){
    evt.preventDefault()
    if(count <1){
    count++;
    }else if(count ==1){
        count ++;
        document.getElementById('next').value="Submit";
    }
    document.querySelector('label[for="choice1"]').innerHTML = choice1[count]
    document.querySelector('label[for="choice2"]').innerHTML = choice2[count]
    document.querySelector('label[for="choice3"]').innerHTML = choice3[count]
    document.querySelector('label[for="choice4"]').innerHTML = choice4[count]
      document.getElementById('question').innerHTML = questions[count]
      document.getElementsByTagName('legend')[0].innerHTML = "Question "+(count+1)
      for(var i=count; i<4;i++){
        document.getElementsByName('choiceN')[i].checked= false;
        }
   
  })

//  var next = document.getElementById('next')//grab the submit button
//  next.addEventListener('click', function(evt){
//      evt.preventDefault()
//      count++;
//      document.getElementById('question').innerHTML = questions[count]
    
//  })