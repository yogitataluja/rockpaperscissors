
function rpsgame(yourchoice){
    console.log(yourchoice)
    //console.log(yourchoice.src)   // object oriented programing
var humanchoice, botchoice     // initialize variable
humanchoice = yourchoice.id     // it give me rock if i click rock symbol
console.log(humanchoice)
botchoice=numbertochice(randtorpsint())
console.log(` computer choice:  ${botchoice} `)
// call this function     //return array [1,0] return string + object  { message: you win! color: green}

result=decidewinner(humanchoice,botchoice)   
 console.log(result)
 message= finalmessage(result)
 console.log(message)

rpsfronthand(yourchoice.id, botchoice,message) 
}  
 function randtorpsint(){    // for computer to chose between different choice
return Math.floor(Math.random()*3)
 }
 function numbertochice(number){                // for convert number to chice
 return ['rock','paper','scissors'][number]
 }
 // Json object  // yourchoice= humanchoice and computerchoice=botchoice
 function decidewinner(yourchoice,computerchoice){                           
     var rpsdatabase={                             // creating object     // key also have object(object contain another object)
 
'paper':{'scissors':0,'paper':0.5,'rock':1 },     // paper win againt rock
'rock':{ 'scissors':1,'paper':0,'rock':0.5 },     // rock win againt   scissor 
'scissors':{'scissors':0.5,'paper':1,'rock':0 }   // scissore win againt paper
}
var yourscore= rpsdatabase[yourchoice][computerchoice]    // retuen numerical value
var computerscore= rpsdatabase[computerchoice][yourchoice]
return [yourscore,computerscore] 
}
function  finalmessage([yourscore,computerscore]){
    if(yourscore===0){
        return{ 'message':'you lost!', 'color':'red'}
    } else if(yourscore=== 0.5){
        return { 'message':'you tied!', 'color':'yellow'};
        }
        else {
          return {'message': 'you won!', 'color':'green'}}
}
function rpsfronthand (humanimagechoice,botimagechoics,finalmessages) {
    var imagedatabase={
        'rock':document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissors':document.getElementById('scissors').src
      }// JASON object

      // lets remove all images
      document.getElementById('rock').remove()
      document.getElementById('paper').remove()
      document.getElementById('scissors').remove()

      //create div in js for bith image and message
var humandiv =document.createElement('div')  // 
var Botdiv =document.createElement('div')
var messagediv =document.createElement('div')
humandiv.innerHTML="<img src='" +imagedatabase[humanimagechoice]+"' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37,50,233,1);' >"
document.getElementById('flex-box-rps-div').appendChild(humandiv)
// <h1 style= color: green, fontsize-60px padding 30 px> you won!</h1>
messagediv.innerHTML="<h1 style='color: " +finalmessages['color']+ "; font-size:60px; padding:30px; '> "+ finalmessages['message'] +"</h1>"
document.getElementById('flex-box-rps-div').appendChild(messagediv)
Botdiv.innerHTML="<img src='" +imagedatabase[botimagechoics]+"' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243,38,24,1);' >"
document.getElementById('flex-box-rps-div').appendChild(Botdiv)


} 
   