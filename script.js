var studentcount = 0
var departmentclass;
var studentarray = []

var changemode = 1;


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}


$.getJSON("data.json", function(data) {
  let html = '';
  // <h3>${artist.Name}</h3>

  $.each(data, function(i, artist) {
    studentarray[i] = i
  });

  studentarray = shuffle(studentarray)
  console.log(studentarray)
  console.log(data[studentarray[0]].Department)
  
  for(x=0; x<studentarray.length; x++){
    var toolslist= ""
    var tagslist= ""

    for(y=0; y<data[studentarray[x]].Tools.length; y++){
      toolslist += `<div class="tool ${data[studentarray[x]].Tools[y]}">${data[studentarray[x]].Tools[y]}</div>`
    }

    for(y=0; y<data[studentarray[x]].Verb.length; y++){
      tagslist += `<div class="tag ${data[studentarray[x]].Verb[y]}">${data[studentarray[x]].Verb[y]}</div>`
    }
 
    if(`${data[studentarray[x]].Department}` == "Graphic Design"){
      departmentclass = "graphicdesign"
    }

    else if (`${data[studentarray[x]].Department}` == "Department") {
      departmentclass = "generic"
    }

    else if (`${data[studentarray[x]].Department}` == "Architecture") {
      departmentclass = "architecture"
    }

    else if (`${data[studentarray[x]].Department}` == "Digital + Media") {
      departmentclass = "digitalmedia"
    }

    else if (`${data[studentarray[x]].Department}` == "Furniture") {
      departmentclass = "furniture"
    }

    else if (`${data[studentarray[x]].Department}` == "Landscape Architecture") {
      departmentclass = "landscapearchitecture"
    }
    else if (`${data[studentarray[x]].Department}` == "Ceramics") {
      departmentclass = "ceramics"
    }
    else if (`${data[studentarray[x]].Department}` == "Printmaking") {
      departmentclass = "printmaking"
    }
    else if (`${data[studentarray[x]].Department}` == "Industrial Design") {
      departmentclass = "industrialdesign"
    }

    studentcount = studentcount + 1
    html += `<div class="container">
    <div class ="studentname">${data[studentarray[x]].Name}</div>
    <div  class="cubes show-left" id="cube${x+1}">
        <figure class="right">
            <div class="name">${data[studentarray[x]].Name}</div>
        </figure>
        <figure class="front">
            <div class="from">${data[studentarray[x]].From}</div>
        </figure>
        <figure class="left">
            <div class="tags">
            ${tagslist}
            </div>
        </figure>
        <figure class="back">
            <div class="tools">
            ${toolslist}
            </div>
        </figure>
        <figure class="bottom"><div class="department ${departmentclass}">${data[studentarray[x]].Department}</div></figure>
        <figure class="top">
        <div class="song">${data[studentarray[x]].Songs}</div>
        </figure>
    </div>
    </div>`
  }

  $(".cubecontainer").append(html);
});




$( document ).ready(function() {

   var newclass;
   var oldclass;
   var randomside; 

   function gotorandomside(){
    for(x = 0; x<studentcount; x++ ){
      randomside = getRandomInt(1,6)
      if(randomside == 1){
        document.getElementById(`cube${x + 1}`).className = "cubes show-right";
      }

      else if(randomside == 2){
        document.getElementById(`cube${x + 1}`).className = "cubes show-left";
      }

      else if(randomside == 3){
        document.getElementById(`cube${x + 1}`).className = "cubes show-front";
      }

      else if(randomside == 4){
        document.getElementById(`cube${x + 1}`).className = "cubes show-bottom";
      }

      else if(randomside == 5){
        document.getElementById(`cube${x + 1}`).className = "cubes show-back";
      }

      else if(randomside == 6){
        document.getElementById(`cube${x + 1}`).className = "cubes show-top";
      }
      
    }
   }

   
   gotorandomside()
   var change;
   var toolchange;

   setInterval(function() {
    if (changemode == 1){
      gotorandomside()
    }
    else{
      
    }
 }, 5000);


   $(".tag").hover(function(){
    console.log($(this).text())
    change = $(this).text()
    $(`.${$(this).text()}`).toggleClass("tag")
    $(`.${$(this).text()}`).toggleClass("taghighlight")
  })

  $(".tool").hover(function(){
    console.log($(this).text())
    toolchange = $(this).text()
    $(`.${$(this).text()}`).toggleClass("tool")
    $(`.${$(this).text()}`).toggleClass("toolhighlight")
  })



    $(".fixedtitle").click(function(){
      changemode = 1
      gotorandomside()
   
        
    })

    $(".rightb").click(function(){
      $(".testbuttons").children().removeClass("buttonon")
      $(".testbuttons").children().addClass("button")
      $(this).removeClass("button")
      $(this).addClass("buttonon")
      changemode = 0
      for(x = 0; x<studentcount; x++ ){
        document.getElementById(`cube${x + 1}`).className = "cubes show-right";
      }
      $(".xout").css({"display":"flex"})
      $(".navtag").html("calls home")
     })

     $(".nameb").click(function(){
      $(".testbuttons").children().removeClass("buttonon")
      $(".testbuttons").children().addClass("button")
      $(this).removeClass("button")
      $(this).addClass("buttonon")
      $(this).toggleClass("button")

      changemode = 0
      for(x = 0; x<studentcount; x++ ){
        document.getElementById(`cube${x + 1}`).className = "cubes show-left";
      }
     })

     $(".frontb").click(function(){
      $(".testbuttons").children().removeClass("buttonon")
      $(".testbuttons").children().addClass("button")
      $(this).removeClass("button")
      $(this).addClass("buttonon")
      changemode = 0
      for(x = 0; x<studentcount; x++ ){
        document.getElementById(`cube${x + 1}`).className = "cubes show-bottom";
      }
      $(".xout").css({"display":"flex"})
      $(".navtag").html("is practicing")
     })

     $(".topb").click(function(){
      $(".testbuttons").children().removeClass("buttonon")
      $(".testbuttons").children().addClass("button")
      $(this).removeClass("button")
      $(this).addClass("buttonon")
      changemode = 0
      $(".testbuttons").children().removeClass("buttonon")
      $(".testbuttons").children().addClass("button")
      $(this).removeClass("button")
      $(this).addClass("buttonon")
      for(x = 0; x<studentcount; x++ ){
        document.getElementById(`cube${x + 1}`).className = "cubes show-back";
      }
      $(".xout").css({"display":"flex"})
      $(".navtag").html("is working with")
     })  

     $(".backb").click(function(){
      $(".testbuttons").children().removeClass("buttonon")
      $(".testbuttons").children().addClass("button")
      $(this).removeClass("button")
      $(this).addClass("buttonon")
      changemode = 0
     
      for(x = 0; x<studentcount; x++ ){
        document.getElementById(`cube${x + 1}`).className = "cubes show-front";
      }
      $(".xout").css({"display":"flex"})
      $(".navtag").html("is thinking about")

     })

     $(".bottomb").click(function(){
      $(".testbuttons").children().removeClass("buttonon")
      $(".testbuttons").children().addClass("button")
      $(this).removeClass("button")
      $(this).addClass("buttonon")
      changemode = 0
     
      for(x = 0; x<studentcount; x++ ){
        document.getElementById(`cube${x + 1}`).className = "cubes show-top";
      }
      $(".xout").css({"display":"flex"})
      $(".navtag").html("is listening to")
     })

     $(".plusminus2").click(function(){
      console.log("click")
      $(".testbuttons").children().addClass("button")
      $(".testbuttons").children().removeClass("buttonon")
      $(".navtag").empty()
      $(".xout").hide()
      changemode = 1
      gotorandomside()
     })

     var zoom = 2;

     function makesmall(){
      $(".container").css({"height":"auto","width":"75px", "margin":"2px", "perspective": "300px"})
      $(".studentname").css({"padding-bottom":"15px", "padding-top":"15px"})
      $(".cubes").css({"height":"75px","width":"75px"})
      $(".cubes .back").css({"transform":"rotateY(  -135deg ) translateZ(37.5px )"})
      $(".cubes .left").css({"transform":"rotateY(  135deg ) translateZ(37.5px)"})
      $("figure").css({"height":"75px","width":"75px", "font-size":"12px"})
      $(".cubes .front").css({"transform":"rotateY(45deg)translateZ(37.5px)"})
      $(".cubes .right").css({"transform":"rotateY(-45deg)translateZ(37.5px)"})
      $(".cubes .bottom").css({"transform":"rotateY(225deg) rotateX(-90deg)translateZ(37.5px)"})
      $(".cubes .top").css({"transform":"rotateY( 45deg ) rotateX( +90deg )translateZ(37.5px)"})
      $(".cubes .show-front").css({"transform":"translateZ(-37.5px) rotateY(-135deg)"})
      $(".cubes .show-middle").css({"transform":" translateZ(-37.5px) rotateY( 0deg)"})
      $(".cubes .show-right").css({"transform":"translateZ( -37.5px) rotateY(-45deg)"})
      $(".cubes .show-left").css({"transform":"translateZ(-37.5px) rotateY(45deg)"})
      $(".cubes .show-back").css({"transform":"translateZ( -37.5px ) rotateY(  -225deg )"})
      $(".cubes .show-top").css({"transform":"translateZ( -37.5px ) rotateY(0deg) rotateZ(45deg) rotateX( -90deg)"})
      $(".cubes .show-bottom").css({"transform":"translateZ( -37.5px ) rotateY(180deg) rotateZ(45deg) rotateX( -90deg )"})
     }

     function makemedium(){
      $(".container").css({"height":"auto","width":"150px", "margin":"5px", "perspective": "150px"})
      $(".studentname").css({"padding-bottom":"30px", "padding-top":"30px"})
      $(".cubes").css({"height":"150px","width":"150px"})
      $(".cubes .back").css({"transform":"rotateY(  -135deg ) translateZ(75px )"})
      $(".cubes .left").css({"transform":"rotateY(  135deg ) translateZ(75px)"})
      $("figure").css({"height":"150px","width":"150px", "font-size":"16px"})
      $(".cubes .front").css({"transform":"rotateY(45deg)translateZ(75px)"})
      $(".cubes .right").css({"transform":"rotateY(-45deg)translateZ(75px)"})
      $(".cubes .bottom").css({"transform":"rotateY(225deg) rotateX(-90deg)translateZ(75px)"})
      $(".cubes .top").css({"transform":"rotateY( 45deg ) rotateX( +90deg )translateZ(75px)"})
      $(".cubes .show-front").css({"transform":"translateZ(-75px) rotateY(-135deg)"})
      $(".cubes .show-middle").css({"transform":" translateZ(-75px) rotateY( 0deg)"})
      $(".cubes .show-right").css({"transform":"translateZ( -75px) rotateY(-45deg)"})
      $(".cubes .show-left").css({"transform":"translateZ(-75px) rotateY(45deg)"})
      $(".cubes .show-back").css({"transform":"translateZ( -75px ) rotateY(  -225deg )"})
      $(".cubes .show-top").css({"transform":"translateZ( -75px) rotateY(0deg) rotateZ(45deg) rotateX( -90deg)"})
      $(".cubes .show-bottom").css({"transform":"translateZ( -75px) rotateY(180deg) rotateZ(45deg) rotateX( -90deg )"})

    }

    function makelarge(){
      $(".container").css({"height":"auto","width":"250px", "margin":"25px", "perspective": "500px"})
      $(".cubes").css({"height":"250px","width":"250px"})
      $(".cubes .back").css({"transform":"rotateY(  -135deg ) translateZ(125px )"})
      $(".cubes .left").css({"transform":"rotateY(  135deg ) translateZ(125px)"})
      $("figure").css({"height":"250px","width":"250px", "font-size":"28px"})
      $(".cubes .front").css({"transform":"rotateY(45deg)translateZ(125px)"})
      $(".cubes .right").css({"transform":"rotateY(-45deg)translateZ(125px)"})
      $(".cubes .bottom").css({"transform":"rotateY(225deg) rotateX(-90deg)translateZ(125px)"})
      $(".cubes .top").css({"transform":"rotateY( 45deg ) rotateX( +90deg )translateZ(125px)"})
      $(".cubes .show-front").css({"transform":"translateZ(-125px) rotateY(-135deg)"})
      $(".cubes .show-middle").css({"transform":" translateZ(-125px) rotateY( 0deg)"})
      $(".cubes .show-right").css({"transform":"translateZ( -125px) rotateY(-45deg)"})
      $(".cubes .show-left").css({"transform":"translateZ(-125px) rotateY(45deg)"})
      $(".cubes .show-back").css({"transform":"translateZ( -125px ) rotateY(  -225deg )"})
      $(".cubes .show-top").css({"transform":"translateZ( -125px) rotateY(0deg) rotateZ(45deg) rotateX( -90deg)"})
      $(".cubes .show-bottom").css({"transform":"translateZ( -125px) rotateY(180deg) rotateZ(45deg) rotateX( -90deg )"})
    }

     $(".minus").click(function(){
       console.log("click")
       if(zoom == 1){
        makesmall()
        zoom = 1 
       }

       else if(zoom == 2){
        makesmall()
        zoom =1 
       }

       else if(zoom == 3){
        makemedium()
        zoom = 2
       }
       
       
     })

     $(".plus").click(function(){
      console.log("click")
      if(zoom == 1){
        zoom = 2
        makemedium()
       }

       else if(zoom == 2){
        zoom =3 
        makelarge()
       }

       else if(zoom == 3){
        zoom = 3
        makemelarge()
       
       }
    })




    //  $(".bottomb").click(function(){
    //     document.getElementById("cube1").className = "cubes show-bottom";
    //     document.getElementById("cube2").className = "cubes show-back";
    //     document.getElementById("cube3").className = "cubes show-top";
    //     document.getElementById("cube4").className = "cubes show-front";
    //  })
    

});