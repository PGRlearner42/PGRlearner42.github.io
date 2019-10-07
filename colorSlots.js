function inputNum(){
	var color = ["red","orange","yellow","green","blue","purple"];
	var rand = color[Math.floor(Math.random()*6)]
	var randAlpha = color[Math.floor(Math.random()*6)]
	var randBeta = color[Math.floor(Math.random()*6)]
	var randCharlie = color[Math.floor(Math.random()*6)]

	const one = document.getElementById("one").style.backgroundColor = rand;
	const two = document.getElementById("two").style.backgroundColor = randAlpha;
	const three = document.getElementById("three").style.backgroundColor = randBeta;
	const four = document.getElementById("four").style.backgroundColor = randCharlie;

	if(rand == color[0] && randAlpha == color[0] && randBeta == color[0] && randCharlie == color[0]){
		alert("you won!")
	} else if(rand == color[1] && randAlpha == color[1] && randBeta == color[1] && randCharlie == color[31]){
		alert("you won!")	
	}else if(rand == color[2] && randAlpha == color[2] && randBeta == color[2] && randCharlie == color[2]){
		alert("you won!")	
	}else if(rand == color[3] && randAlpha == color[3] && randBeta == color[3] && randCharlie == color[3]){
		alert("you won!")	
	}else if(rand == color[4] && randAlpha == color[4] && randBeta == color[4] && randCharlie == color[4]){
		alert("you won!")	
	}else if(rand == color[5] && randAlpha == color[5] && randBeta == color[5] && randCharlie == color[5]){
		alert("you won!")	
	}else if(rand == color[6] && randAlpha == color[6] && randBeta == color[6] && randCharlie == color[6]){
		alert("you won!")	
	}else {
		alert("you lose!")
	}
}
