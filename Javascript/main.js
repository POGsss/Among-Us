window.addEventListener("load", function(){
	setTimeout(loaded, 3000);
});

var load = document.getElementById("loader");
var load1 = document.getElementById("loader1");

var first = document.getElementById("modal1");
var second = document.getElementById("modal2");
var third = document.getElementById("modal3");

var input = document.getElementById("name");

function loaded(){
	load.style.opacity = "0";
	load.style.visibility = "hidden";
}

function frst(){
 first.style.opacity = "1";
	first.style.visibility = "visible";
}

function cls1(){
 first.style.opacity = "0";
	first.style.visibility = "hidden";
}

function scnd(){
 second.style.opacity = "1";
	second.style.visibility = "visible";
}

function cls2(){
 second.style.opacity = "0";
 second.style.visibility = "hidden";
}

function thrd(){
 third.style.opacity = "1";
	third.style.visibility = "visible";
}

function cls3(){
 third.style.opacity = "0";
 third.style.visibility = "hidden";
}

function forward(){
 document.getElementById("home").style.display = "none";
 document.getElementById("home2").style.display = "block";
}

function backward(){
 document.getElementById("home").style.display = "block";
 document.getElementById("home2").style.display = "none";
}

function playing(){
 if (input.value == ""){
  document.getElementById("inputBox").classList.add("shake");
  
  setTimeout(function(){
   document.getElementById("inputBox").classList.remove("shake");
  }, 300);
 } else {
  document.getElementById("game").style.display = "block";
  document.getElementById("home").style.display = "none";
  document.getElementById("home2").style.display = "none";
  document.querySelector(".charName").innerHTML= (input.value);  
  
  load1.style.opacity = "1";
	 load1.style.visibility = "visible";
	 
	 load.style.opacity = "1";
	 load.style.visibility = "visible";
	 
	 setTimeout(loaded, 3500);
	 setTimeout(function(){
	  load1.style.opacity = "0";
	  load1.style.visibility = "hidden";
	 }, 3500);
 }
}

function leaving(){
 document.getElementById("game").style.display = "none";
 document.getElementById("home").style.display = "block";
 document.getElementById("home2").style.display = "none";
 third.style.opacity = "0";
 third.style.visibility = "hidden";
}

var map = document.querySelector(".map");

/*
document.querySelector(".up").ontouchstart = function(){
 var inter = setInterval(function(){
  var mapStyle = window.getComputedStyle(map);
  var topValue = mapStyle.getPropertyValue("top").replace("px", "");
  if (map.style.top != 200 + "px") {
   map.style.top = (Number(topValue) + 5) + "px";
  }
 }, 5);
}

document.querySelector(".up").ontouchend = function(){
 clearInterval(inter);
}
*/

function moveU() {
 var mapStyle = window.getComputedStyle(map);
 var topValue = mapStyle.getPropertyValue("top").replace("px", "");
 var UP = document.querySelector(".up");
 UP.disabled = true;
 if (map.style.top != 200 + "px") {
  map.style.top = (Number(topValue) + 50) + "px";
 }
 
 setTimeout(function(){
  UP.disabled = false;
 }, 500);
}

function moveR() {
 var mapStyle = window.getComputedStyle(map);
 var leftValue = mapStyle.getPropertyValue("left").replace("px", "");
 var RIGHT = document.querySelector(".right");
 RIGHT.disabled = true;
 document.querySelector(".characterC").classList.remove("flip");
 if (map.style.left != -200 + "px") {
  map.style.left = (Number(leftValue) - 50) + "px";
 }
 
 setTimeout(function(){
  RIGHT.disabled = false;
 }, 500);
}

function moveD() {
 var mapStyle = window.getComputedStyle(map);
 var topValue = mapStyle.getPropertyValue("top").replace("px", "");
 var DOWN = document.querySelector(".down");
 DOWN.disabled = true;
 if (map.style.top != -150 + "px") {
  map.style.top = (Number(topValue) - 50) + "px";
 }
 
 setTimeout(function(){
  DOWN.disabled = false;
 }, 500);
}

function moveL() {
 var mapStyle = window.getComputedStyle(map);
 var leftValue = mapStyle.getPropertyValue("left").replace("px", "");
 var LEFT = document.querySelector(".left");
 LEFT.disabled = true;
 document.querySelector(".characterC").classList.add("flip");
 if (map.style.left != 200 + "px") {
  map.style.left = (Number(leftValue) + 50) + "px";
 }
 
 setTimeout(function(){
  LEFT.disabled = false;
 }, 500);
}

document.onkeydown = function (event) {
    switch (event.keyCode) {
       case 37:
          moveL();
          break;
       case 38:
          moveU();
          break;
       case 39:
          moveR();
          break;
       case 40:
          moveD();
          break;
    }
 };