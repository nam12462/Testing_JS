var count = 0;
function counter(){
	count++;
}
function stop(){
	alert("Final Count: " + count);
}
function reset(){
	count = 0;
	alert("counter has been reset");
}

var display_text = document.getElementById("simple_text");
function Cheese_Selected(){
	if(document.getElementById("AC").checked==true){
		display_text.value = "Really? Have you considered expanding your horizions?";
	}else if(document.getElementById("SC").checked==true){
		display_text.value = "Oh my, so you like that little extra bitter bite.";
	}else if(document.getElementById("CC").checked==true){
		display_text.value = "Ooo, so you like things a little bit differen from the basic cheese";
	}else if(document.getElementById("BC").checked==true){
		display_text.value = "Umm... Are you sure something isn't wrong with your taste buds?";
	}else if(document.getElementById("MC").checked==true){
		display_text.value = "Yes! The best/only kinda cheese for pizza.";
	}else if(document.getElementById("no").checked==true){
		display_text.value = "Is there something wrong with you?";
	}else{
		alert("none selected");
	}
}
function clear(){
	display_text.value = "";
}