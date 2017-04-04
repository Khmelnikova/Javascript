var x = 1;
function func(x) {
  return Math.pow(x, 3) - x;
}

var I = setInterval(function(){

	scrollBy(0,func(x));
	if(scrollY + innerHeight >= 50000){
		clearInterval(I);
	};
    x++;
},100);