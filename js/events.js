//define functions here

$(document).ready(function(){


getIt();
frameIt();
pressIt();

});


function getIt()
{
  $('p').on("click",function(){
    alert("Hey!");
  })
}

function frameIt()
{
  $("img").on("load",function(){
    $("img").addClass("tasty");
  })
}

function pressIt()
{
  $("form").on("keydown",function(key){
    if(key.which == 71){
      alert("G has been pressed");
    }
  })
}

function submitIt()
{
  $("form")
}