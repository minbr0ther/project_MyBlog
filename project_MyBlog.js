// article brightness change
var two = document.querySelector(".two");

function brightOnOut(className) {
	className.onmouseover = function() {
	    className.style = "filter:brightness(150%) blur(0.1px); color:#424242; transition:all 0.2s;";
	};
	className.onmouseout = function() {
	    className.style = "filter:brightness(100%); transition:all 0.2s;";		
	};
}

brightOnOut(two);


// right menu push in, out
var menu = document.querySelector("#menu");
var menuBtn = document.querySelector("#menuBtn");
var frontPage = document.querySelector(".frontPage");


menuBtn.addEventListener("click", function(){
	if(menu.style.transform == "translateX(-450px)"){
		menu.style.transform="translateX(450px)";
		frontPage.style.transform="translateX(0px)";
	}
	else {
		menu.style.transform="translateX(-450px)";
		frontPage.style.transform="translateX(-200px)";		
	}
});