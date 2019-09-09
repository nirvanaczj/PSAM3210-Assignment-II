var myWrapper = document.getElementById('wrapper');
for (var i = 0;i < 100; i++){
	myWrapper.innerHTML += '<div id="transform-3d" style="background-color: rgb('+ (149 - (i*1)) +','+ (175 - (i*1)) +', '+ (252 - (i*1)) +'); width:'+(0+(i*5))+'px;height:'+(0+(3*i))+'px;-webkit-transition: all 1s ease;-webkit-transform: perspective(305)translate3d(0px, 0px, 90px)scale3d(.7, .7, .7)rotate3d('+(0+(1*i))+', '+(0+(1*i))+', '+(0+(1*i))+', '+(0+(1*i))+'deg);"></div><br><br><br><br><br>  ';

}

