
	/*BACK TO TOP*/
	window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

/*####################1.ÖRNEK##################*/

function yatirFunction(){
	
	var currentMoney_value=parseInt(document.getElementById("miktar").value);
	var bakiye=parseInt(document.getElementById("bakiye").textContent);
	var sum=currentMoney_value+bakiye;
	document.getElementById("bakiye").innerHTML=sum;
	document.getElementById("example1_log").innerHTML=document.getElementById("example1_log").textContent+"\n"+currentMoney_value+" Yatırıldı.";
	
	
}
function cekFunction(){
	
		var currentMoney_value=parseInt(document.getElementById("miktar").value);
		var bakiye=parseInt(document.getElementById("bakiye").textContent);
		
		if(bakiye>currentMoney_value){
			var sub=bakiye-currentMoney_value;
			document.getElementById("bakiye").innerHTML=sub;
			document.getElementById("example1_log").innerHTML=document.getElementById("example1_log").textContent+"\n"+currentMoney_value+" Çekildi.";
	
			
		}
		if(bakiye<currentMoney_value){
		alert("Yeterli Bakiye Yok!")
		}
}

/*####################################################*/

/*####################2.ÖRNEK##################*/


var fruits = ["1",
			  "2", 
			  "3", 
			  "4",
			  "5",
			  "6",
			  "7",
			  "8",
			  "9",];
			  


function hamle_GeneratorFunction(){
	
	var random_id;
	random_id = Math.floor(Math.random() * fruits.length)
	document.getElementById("rakam").innerHTML=random_id;
	var sil = fruits.splice(random_id, 1);
	document.getElementById("demo").innerHTML=fruits;
}

var clickCount=0;


function bg_Color0(){
	
	
	document.getElementById("1").style.backgroundColor="red";
		
		if(clickCount%2==1){
			document.getElementById("kare1").innerHTML="X";
			clickCount=clickCount+1;
			document.getElementById("1").style.display="none";
		}
		else if(clickCount%2==0){
			document.getElementById("kare1").innerHTML="O";
			clickCount=clickCount+1;
			document.getElementById("1").style.display="none";
		}
	document.getElementById("p1").innerHTML=clickCount;
}

function bg_Color1(){
	document.getElementById("2").style.backgroundColor="red";
	
		if(clickCount%2==1){
			document.getElementById("kare2").innerHTML="X";
			clickCount=clickCount+1;
			document.getElementById("2").style.display="none";
		}
		else if(clickCount%2==0){
			document.getElementById("kare2").innerHTML="O";
			clickCount=clickCount+1;
			document.getElementById("2").style.display="none";
		}
	document.getElementById("p1").innerHTML=clickCount;
}

function bg_Color2(){
	document.getElementById("3").style.backgroundColor="red";
	
		if(clickCount%2==1){
			document.getElementById("kare3").innerHTML="X";
			clickCount=clickCount+1;
			document.getElementById("3").style.display="none";
		}
		else if(clickCount%2==0){
			document.getElementById("kare3").innerHTML="O";
			clickCount=clickCount+1;
			document.getElementById("3").style.display="none";
		}
	document.getElementById("p1").innerHTML=clickCount;
}

function bg_Color3(){
	document.getElementById("4").style.backgroundColor="red";
	
		if(clickCount%2==1){
			document.getElementById("kare4").innerHTML="X";
			clickCount=clickCount+1;
			document.getElementById("4").style.display="none";
		}
		else if(clickCount%2==0){
			document.getElementById("kare4").innerHTML="O";
			clickCount=clickCount+1;
			document.getElementById("4").style.display="none";
		}
	document.getElementById("p1").innerHTML=clickCount;
}

function bg_Color4(){
	document.getElementById("5").style.backgroundColor="red";
	
		if(clickCount%2==1){
			document.getElementById("kare5").innerHTML="X";
			clickCount=clickCount+1;
			document.getElementById("5").style.display="none";
		}
		else if(clickCount%2==0){
			document.getElementById("kare5").innerHTML="O";
			clickCount=clickCount+1;
			document.getElementById("5").style.display="none";
		}
	document.getElementById("p1").innerHTML=clickCount;
}

function bg_Color5(){
	document.getElementById("6").style.backgroundColor="red";
	
		if(clickCount%2==1){
			document.getElementById("kare6").innerHTML="X";
			clickCount=clickCount+1;
			document.getElementById("6").style.display="none";
		}
		else if(clickCount%2==0){
			document.getElementById("kare6").innerHTML="O";
			clickCount=clickCount+1;
			document.getElementById("6").style.display="none";
		}
	document.getElementById("p1").innerHTML=clickCount;
}

function bg_Color6(){
	document.getElementById("7").style.backgroundColor="red";
	
		if(clickCount%2==1){
			document.getElementById("kare7").innerHTML="X";
			clickCount=clickCount+1;
			document.getElementById("7").style.display="none";
		}
		else if(clickCount%2==0){
			document.getElementById("kare7").innerHTML="O";
			clickCount=clickCount+1;
			document.getElementById("7").style.display="none";
		}
	document.getElementById("p1").innerHTML=clickCount;
}

function bg_Color7(){
	document.getElementById("8").style.backgroundColor="red";
	
		if(clickCount%2==1){
			document.getElementById("kare8").innerHTML="X";
			clickCount=clickCount+1;
			document.getElementById("8").style.display="none";
		}
		else if(clickCount%2==0){
			document.getElementById("kare8").innerHTML="O";
			clickCount=clickCount+1;
			document.getElementById("8").style.display="none";
		}
	document.getElementById("p1").innerHTML=clickCount;
}

function bg_Color8(){
	document.getElementById("9").style.backgroundColor="red";
	
		if(clickCount%2==1){
			document.getElementById("kare9").innerHTML="X";
			clickCount=clickCount+1;
			document.getElementById("9").style.display="none";
		}
		else if(clickCount%2==0){
			document.getElementById("kare9").innerHTML="O";
			clickCount=clickCount+1;
			document.getElementById("9").style.display="none";
		}
	document.getElementById("p1").innerHTML=clickCount;
}


function check(){
	
	var kontrol1 = document.getElementById("kare1").textContent;
	var kontrol2 = document.getElementById("kare2").textContent;
	var kontrol3 = document.getElementById("kare3").textContent;
	var kontrol4 = document.getElementById("kare4").textContent;
	var kontrol5 = document.getElementById("kare5").textContent;
	var kontrol6 = document.getElementById("kare6").textContent;
	var kontrol7 = document.getElementById("kare7").textContent;
	var kontrol8 = document.getElementById("kare8").textContent;
	var kontrol9 = document.getElementById("kare9").textContent;
	
	
	
	if(kontrol1==kontrol2 && kontrol1==kontrol3){
		var x = document.getElementById('kare1');
			x.style.color = 'red';
		var y = document.getElementById('kare2');
			y.style.color = 'red';
		var z = document.getElementById('kare3');
			z.style.color = 'red';
		alert("Kazandın!");
		
		
	}
	else if(kontrol1==kontrol5 && kontrol1==kontrol9){
		var x = document.getElementById('kare1');
			x.style.color = 'red';
		var y = document.getElementById('kare5');
			y.style.color = 'red';
		var z = document.getElementById('kare9');
			z.style.color = 'red';
		alert("Kazandın!")
	}
	else if(kontrol1==kontrol4 && kontrol1==kontrol7){
		var x = document.getElementById('kare1');
			x.style.color = 'red';
		var y = document.getElementById('kare4');
			y.style.color = 'red';
		var z = document.getElementById('kare7');
			z.style.color = 'red';
		alert("Kazandın!")
	}
	else if(kontrol2==kontrol5 && kontrol2==kontrol8){
		var x = document.getElementById('kare2');
			x.style.color = 'red';
		var y = document.getElementById('kare5');
			y.style.color = 'red';
		var z = document.getElementById('kare8');
			z.style.color = 'red';
		alert("Kazandın!")
	}
	else if(kontrol3==kontrol5 && kontrol3==kontrol7){
		var x = document.getElementById('kare3');
			x.style.color = 'red';
		var y = document.getElementById('kare5');
			y.style.color = 'red';
		var z = document.getElementById('kare7');
			z.style.color = 'red';
		alert("Kazandın!")
	}
	else if(kontrol3==kontrol6 && kontrol3==kontrol9){
		var x = document.getElementById('kare3');
			x.style.color = 'red';
		var y = document.getElementById('kare6');
			y.style.color = 'red';
		var z = document.getElementById('kare9');
			z.style.color = 'red';
		alert("Kazandın!");
	}
	else if(kontrol1==kontrol4 && kontrol1==kontrol7){
		var x = document.getElementById('kare1');
			x.style.color = 'red';
		var y = document.getElementById('kare4');
			y.style.color = 'red';
		var z = document.getElementById('kare7');
			z.style.color = 'red';
		alert("Kazandın!")
	}
	else if(kontrol4==kontrol5 && kontrol4==kontrol6){
		var x = document.getElementById('kare4');
			x.style.color = 'red';
		var y = document.getElementById('kare5');
			y.style.color = 'red';
		var z = document.getElementById('kare6');
			z.style.color = 'red';
		alert("Kazandın!")
	}
	
	else if(kontrol7==kontrol8 && kontrol7==kontrol9){
		var x = document.getElementById('kare7');
			x.style.color = 'red';
		var y = document.getElementById('kare8');
			y.style.color = 'red';
		var z = document.getElementById('kare9');
			z.style.color = 'red';
		alert("Kazandın!");
	}
	else alert("Berabere!");
	
}
function again(){
	location.reload(true);
	}

/*####################################################*/

/*####################3.ÖRNEK##################*/

var imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = 'img/bomb.png';
imgArray[1] = new Image();
imgArray[1].src = 'img/non.png';

var numbers = ["1","2","3","4","5","6","7","8","9",
			   "10","11","12","13","14","15","16","17","18",
			   "19","20","21","22","23","24","25"];


function senkronize(){
	
	
	var random_numbers1;
	
	random_numbers1 = Math.floor(Math.random() * numbers.length);
	document.getElementById("random").innerHTML=random_numbers1;
	var sil = numbers.splice(random_numbers1, 1);
	document.getElementById("kalan").innerHTML=numbers;
	
	var random_numbers2;
	random_numbers2 = Math.floor(Math.random() * numbers.length);
	document.getElementById("random").innerHTML=random_numbers2;
	var sil = numbers.splice(random_numbers2, 1);
	document.getElementById("kalan2").innerHTML=numbers;
	
	var random_numbers3;
	random_numbers3 = Math.floor(Math.random() * numbers.length);
	document.getElementById("random").innerHTML=random_numbers3;
	var sil = numbers.splice(random_numbers3, 1);
	document.getElementById("kalan3").innerHTML=numbers;
	
	var random_numbers4;
	random_numbers4 = Math.floor(Math.random() * numbers.length);
	document.getElementById("random").innerHTML=random_numbers4;
	var sil = numbers.splice(random_numbers4, 1);
	document.getElementById("kalan4").innerHTML=numbers;
	
	var random_numbers5;
	random_numbers5 = Math.floor(Math.random() * numbers.length)
	document.getElementById("random").innerHTML=random_numbers5;
	var sil = numbers.splice(random_numbers5, 1);
	document.getElementById("kalan5").innerHTML=numbers;
	
	
	document.getElementById("selected1").innerHTML=random_numbers1;
	document.getElementById("selected2").innerHTML=random_numbers2;
	document.getElementById("selected3").innerHTML=random_numbers3;
	document.getElementById("selected4").innerHTML=random_numbers4;
	document.getElementById("selected5").innerHTML=random_numbers5;
	
	
	if(random_numbers1==random_numbers2 || random_numbers1==random_numbers3 || random_numbers1==random_numbers4 || random_numbers1==random_numbers5
		|| random_numbers2==random_numbers3 || random_numbers2==random_numbers4 || random_numbers2==random_numbers5 || random_numbers3==random_numbers4
		|| random_numbers3==random_numbers5 || random_numbers4==random_numbers5 )
		{
			alert("BİR HATA OLUŞTU LÜTFEN SAYFAYI YENİLEYİN!") ? "" : location.reload();
		}
	
	
	
	
	/*------------------------------1.BOMBA-----------------------------------*/
	if(random_numbers1==0){
	document.getElementById("img1").src="img/bomb.png";
	}
	if(random_numbers1==1){
	document.getElementById("img2").src="img/bomb.png";
	}
	if(random_numbers1==2){
	document.getElementById("img3").src="img/bomb.png";
	}
	if(random_numbers1==3){
	document.getElementById("img4").src="img/bomb.png";
	}
	if(random_numbers1==4){
	document.getElementById("img5").src="img/bomb.png";
	}
	if(random_numbers1==5){
	document.getElementById("img6").src="img/bomb.png";
	}
	if(random_numbers1==6){
	document.getElementById("img7").src="img/bomb.png";
	}
	if(random_numbers1==7){
	document.getElementById("img8").src="img/bomb.png";
	}
	if(random_numbers1==8){
	document.getElementById("img9").src="img/bomb.png";
	}
	if(random_numbers1==9){
	document.getElementById("img10").src="img/bomb.png";
	}
	if(random_numbers1==10){
	document.getElementById("img11").src="img/bomb.png";
	}
	if(random_numbers1==11){
	document.getElementById("img12").src="img/bomb.png";
	}
	if(random_numbers1==12){
	document.getElementById("img13").src="img/bomb.png";
	}
	if(random_numbers1==13){
	document.getElementById("img14").src="img/bomb.png";
	}
	if(random_numbers1==14){
	document.getElementById("img15").src="img/bomb.png";
	}
	if(random_numbers1==15){
	document.getElementById("img16").src="img/bomb.png";
	}
	if(random_numbers1==16){
	document.getElementById("img17").src="img/bomb.png";
	}
	if(random_numbers1==17){
	document.getElementById("img18").src="img/bomb.png";
	}
	if(random_numbers1==18){
	document.getElementById("img19").src="img/bomb.png";
	}
	if(random_numbers1==19){
	document.getElementById("img20").src="img/bomb.png";
	}
	if(random_numbers1==20){
	document.getElementById("img21").src="img/bomb.png";
	}
	if(random_numbers1==21){
	document.getElementById("img22").src="img/bomb.png";
	}
	if(random_numbers1==22){
	document.getElementById("img23").src="img/bomb.png";
	}
	if(random_numbers1==23){
	document.getElementById("img24").src="img/bomb.png";
	}
	if(random_numbers1==24){
	document.getElementById("img25").src="img/bomb.png";
	}
	/*------------------------------2.BOMBA-----------------------------------*/
	if(random_numbers2==0){
	document.getElementById("img1").src="img/bomb.png";
	}
	if(random_numbers2==1){
	document.getElementById("img2").src="img/bomb.png";
	}
	if(random_numbers2==2){
	document.getElementById("img3").src="img/bomb.png";
	}
	if(random_numbers2==3){
	document.getElementById("img4").src="img/bomb.png";
	}
	if(random_numbers2==4){
	document.getElementById("img5").src="img/bomb.png";
	}
	if(random_numbers2==5){
	document.getElementById("img6").src="img/bomb.png";
	}
	if(random_numbers2==6){
	document.getElementById("img7").src="img/bomb.png";
	}
	if(random_numbers2==7){
	document.getElementById("img8").src="img/bomb.png";
	}
	if(random_numbers2==8){
	document.getElementById("img9").src="img/bomb.png";
	}
	if(random_numbers2==9){
	document.getElementById("img10").src="img/bomb.png";
	}
	if(random_numbers2==10){
	document.getElementById("img11").src="img/bomb.png";
	}
	if(random_numbers2==11){
	document.getElementById("img12").src="img/bomb.png";
	}
	if(random_numbers2==12){
	document.getElementById("img13").src="img/bomb.png";
	}
	if(random_numbers2==13){
	document.getElementById("img14").src="img/bomb.png";
	}
	if(random_numbers2==14){
	document.getElementById("img15").src="img/bomb.png";
	}
	if(random_numbers2==15){
	document.getElementById("img16").src="img/bomb.png";
	}
	if(random_numbers2==16){
	document.getElementById("img17").src="img/bomb.png";
	}
	if(random_numbers2==17){
	document.getElementById("img18").src="img/bomb.png";
	}
	if(random_numbers2==18){
	document.getElementById("img19").src="img/bomb.png";
	}
	if(random_numbers2==19){
	document.getElementById("img20").src="img/bomb.png";
	}
	if(random_numbers2==20){
	document.getElementById("img21").src="img/bomb.png";
	}
	if(random_numbers2==21){
	document.getElementById("img22").src="img/bomb.png";
	}
	if(random_numbers2==22){
	document.getElementById("img23").src="img/bomb.png";
	}
	if(random_numbers2==23){
	document.getElementById("img24").src="img/bomb.png";
	}
	if(random_numbers2==24){
	document.getElementById("img25").src="img/bomb.png";
	}
	/*------------------------------3.BOMBA-----------------------------------*/
	if(random_numbers3==0){
	document.getElementById("img1").src="img/bomb.png";
	}
	if(random_numbers3==1){
	document.getElementById("img2").src="img/bomb.png";
	}
	if(random_numbers3==2){
	document.getElementById("img3").src="img/bomb.png";
	}
	if(random_numbers3==3){
	document.getElementById("img4").src="img/bomb.png";
	}
	if(random_numbers3==4){
	document.getElementById("img5").src="img/bomb.png";
	}
	if(random_numbers3==5){
	document.getElementById("img6").src="img/bomb.png";
	}
	if(random_numbers3==6){
	document.getElementById("img7").src="img/bomb.png";
	}
	if(random_numbers3==7){
	document.getElementById("img8").src="img/bomb.png";
	}
	if(random_numbers3==8){
	document.getElementById("img9").src="img/bomb.png";
	}
	if(random_numbers3==9){
	document.getElementById("img10").src="img/bomb.png";
	}
	if(random_numbers3==10){
	document.getElementById("img11").src="img/bomb.png";
	}
	if(random_numbers3==11){
	document.getElementById("img12").src="img/bomb.png";
	}
	if(random_numbers3==12){
	document.getElementById("img13").src="img/bomb.png";
	}
	if(random_numbers3==13){
	document.getElementById("img14").src="img/bomb.png";
	}
	if(random_numbers3==14){
	document.getElementById("img15").src="img/bomb.png";
	}
	if(random_numbers3==15){
	document.getElementById("img16").src="img/bomb.png";
	}
	if(random_numbers3==16){
	document.getElementById("img17").src="img/bomb.png";
	}
	if(random_numbers3==17){
	document.getElementById("img18").src="img/bomb.png";
	}
	if(random_numbers3==18){
	document.getElementById("img19").src="img/bomb.png";
	}
	if(random_numbers3==19){
	document.getElementById("img20").src="img/bomb.png";
	}
	if(random_numbers3==20){
	document.getElementById("img21").src="img/bomb.png";
	}
	if(random_numbers3==21){
	document.getElementById("img22").src="img/bomb.png";
	}
	if(random_numbers3==22){
	document.getElementById("img23").src="img/bomb.png";
	}
	if(random_numbers3==23){
	document.getElementById("img24").src="img/bomb.png";
	}
	if(random_numbers3==24){
	document.getElementById("img25").src="img/bomb.png";
	}
	/*------------------------------4.BOMBA-----------------------------------*/
	if(random_numbers4==0){
	document.getElementById("img1").src="img/bomb.png";
	}
	if(random_numbers4==1){
	document.getElementById("img2").src="img/bomb.png";
	}
	if(random_numbers4==2){
	document.getElementById("img3").src="img/bomb.png";
	}
	if(random_numbers4==3){
	document.getElementById("img4").src="img/bomb.png";
	}
	if(random_numbers4==4){
	document.getElementById("img5").src="img/bomb.png";
	}
	if(random_numbers4==5){
	document.getElementById("img6").src="img/bomb.png";
	}
	if(random_numbers4==6){
	document.getElementById("img7").src="img/bomb.png";
	}
	if(random_numbers4==7){
	document.getElementById("img8").src="img/bomb.png";
	}
	if(random_numbers4==8){
	document.getElementById("img9").src="img/bomb.png";
	}
	if(random_numbers4==9){
	document.getElementById("img10").src="img/bomb.png";
	}
	if(random_numbers4==10){
	document.getElementById("img11").src="img/bomb.png";
	}
	if(random_numbers4==11){
	document.getElementById("img12").src="img/bomb.png";
	}
	if(random_numbers4==12){
	document.getElementById("img13").src="img/bomb.png";
	}
	if(random_numbers4==13){
	document.getElementById("img14").src="img/bomb.png";
	}
	if(random_numbers4==14){
	document.getElementById("img15").src="img/bomb.png";
	}
	if(random_numbers4==15){
	document.getElementById("img16").src="img/bomb.png";
	}
	if(random_numbers4==16){
	document.getElementById("img17").src="img/bomb.png";
	}
	if(random_numbers4==17){
	document.getElementById("img18").src="img/bomb.png";
	}
	if(random_numbers4==18){
	document.getElementById("img19").src="img/bomb.png";
	}
	if(random_numbers4==19){
	document.getElementById("img20").src="img/bomb.png";
	}
	if(random_numbers4==20){
	document.getElementById("img21").src="img/bomb.png";
	}
	if(random_numbers4==21){
	document.getElementById("img22").src="img/bomb.png";
	}
	if(random_numbers4==22){
	document.getElementById("img23").src="img/bomb.png";
	}
	if(random_numbers4==23){
	document.getElementById("img24").src="img/bomb.png";
	}
	if(random_numbers4==24){
	document.getElementById("img25").src="img/bomb.png";
	}
	/*------------------------------5.BOMBA-----------------------------------*/
	if(random_numbers5==0){
	document.getElementById("img1").src="img/bomb.png";
	}
	if(random_numbers5==1){
	document.getElementById("img2").src="img/bomb.png";
	}
	if(random_numbers5==2){
	document.getElementById("img3").src="img/bomb.png";
	}
	if(random_numbers5==3){
	document.getElementById("img4").src="img/bomb.png";
	}
	if(random_numbers5==4){
	document.getElementById("img5").src="img/bomb.png";
	}
	if(random_numbers5==5){
	document.getElementById("img6").src="img/bomb.png";
	}
	if(random_numbers5==6){
	document.getElementById("img7").src="img/bomb.png";
	}
	if(random_numbers5==7){
	document.getElementById("img8").src="img/bomb.png";
	}
	if(random_numbers5==8){
	document.getElementById("img9").src="img/bomb.png";
	}
	if(random_numbers5==9){
	document.getElementById("img10").src="img/bomb.png";
	}
	if(random_numbers5==10){
	document.getElementById("img11").src="img/bomb.png";
	}
	if(random_numbers5==11){
	document.getElementById("img12").src="img/bomb.png";
	}
	if(random_numbers5==12){
	document.getElementById("img13").src="img/bomb.png";
	}
	if(random_numbers5==13){
	document.getElementById("img14").src="img/bomb.png";
	}
	if(random_numbers5==14){
	document.getElementById("img15").src="img/bomb.png";
	}
	if(random_numbers5==15){
	document.getElementById("img16").src="img/bomb.png";
	}
	if(random_numbers1==16){
	document.getElementById("img17").src="img/bomb.png";
	}
	if(random_numbers1==17){
	document.getElementById("img18").src="img/bomb.png";
	}
	if(random_numbers5==18){
	document.getElementById("img19").src="img/bomb.png";
	}
	if(random_numbers5==19){
	document.getElementById("img20").src="img/bomb.png";
	}
	if(random_numbers5==20){
	document.getElementById("img21").src="img/bomb.png";
	}
	if(random_numbers5==21){
	document.getElementById("img22").src="img/bomb.png";
	}
	if(random_numbers5==22){
	document.getElementById("img23").src="img/bomb.png";
	}
	if(random_numbers5==23){
	document.getElementById("img24").src="img/bomb.png";
	}
	if(random_numbers5==24){
	document.getElementById("img25").src="img/bomb.png";
	}
	
}

function degistir0(){
	document.getElementById("3_0").style.display="none";
	document.getElementById("img1").style.display="block";
}
function degistir1(){
	document.getElementById("3_1").style.display="none";
	document.getElementById("img2").style.display="block";
}
function degistir2(){
	document.getElementById("3_2").style.display="none";
	document.getElementById("img3").style.display="block";
}
function degistir3(){
	document.getElementById("3_3").style.display="none";
	document.getElementById("img4").style.display="block";
}
function degistir4(){
	document.getElementById("3_4").style.display="none";
	document.getElementById("img5").style.display="block";
}
function degistir5(){
	document.getElementById("3_5").style.display="none";
	document.getElementById("img6").style.display="block";
}
function degistir6(){
	document.getElementById("3_6").style.display="none";
	document.getElementById("img7").style.display="block";
}
function degistir7(){
	document.getElementById("3_7").style.display="none";
	document.getElementById("img8").style.display="block";
}
function degistir8(){
	document.getElementById("3_8").style.display="none";
	document.getElementById("img9").style.display="block";
}
function degistir9(){
	document.getElementById("3_9").style.display="none";
	document.getElementById("img10").style.display="block";
}
function degistir10(){
	document.getElementById("3_10").style.display="none";
	document.getElementById("img11").style.display="block";
}
function degistir11(){
	document.getElementById("3_11").style.display="none";
	document.getElementById("img12").style.display="block";
}
function degistir12(){
	document.getElementById("3_12").style.display="none";
	document.getElementById("img13").style.display="block";
}
function degistir13(){
	document.getElementById("3_13").style.display="none";
	document.getElementById("img14").style.display="block";
}
function degistir14(){
	document.getElementById("3_14").style.display="none";
	document.getElementById("img15").style.display="block";
}
function degistir15(){
	document.getElementById("3_15").style.display="none";
	document.getElementById("img16").style.display="block";
}
function degistir16(){
	document.getElementById("3_16").style.display="none";
	document.getElementById("img17").style.display="block";
}
function degistir17(){
	document.getElementById("3_17").style.display="none";
	document.getElementById("img18").style.display="block";
}
function degistir18(){
	document.getElementById("3_18").style.display="none";
	document.getElementById("img19").style.display="block";
}
function degistir19(){
	document.getElementById("3_19").style.display="none";
	document.getElementById("img20").style.display="block";
}
function degistir20(){
	document.getElementById("3_20").style.display="none";
	document.getElementById("img21").style.display="block";
}
function degistir21(){
	document.getElementById("3_21").style.display="none";
	document.getElementById("img22").style.display="block";
}
function degistir22(){
	document.getElementById("3_22").style.display="none";
	document.getElementById("img23").style.display="block";
}
function degistir23(){
	document.getElementById("3_23").style.display="none";
	document.getElementById("img24").style.display="block";
}
function degistir24(){
	document.getElementById("3_24").style.display="none";
	document.getElementById("img25").style.display="block";
}

/*####################################################*/

/*####################4.ÖRNEK#########################*/


var deck = ["A",2,3,4,5,6,7,8,9,10,"Q","J","K",
		    "A",2,3,4,5,6,7,8,9,10,"Q","J","K",
		    "A",2,3,4,5,6,7,8,9,10,"Q","J","K",
		    "A",2,3,4,5,6,7,8,9,10,"Q","J","K",];
var hand = [];
var clickCount=0;
var total=0;

function cek(){
	/*
	document.getElementById("cekilen").style.visibility="hidden";
	document.getElementById("deste").style.visibility="hidden";
	*/
	clickCount+=1;
	
	random_card = Math.floor(Math.random() * deck.length);
	document.getElementById("deste").innerHTML=deck[random_card];
	hand.push(deck[random_card]);
	
	
	if(clickCount==1){
		if(hand[0]>1 && hand[0]<11)
		{
			document.getElementById("card1").innerHTML=hand[0];
			total=total+hand[0];
			document.getElementById("total").innerHTML=total;
		}
		
		if(hand[0]=="Q"){
			document.getElementById("card1").innerHTML=hand[0];
			total=total+10;
			document.getElementById("total").innerHTML=total;
		}
		if(hand[0]=="J"){
			document.getElementById("card1").innerHTML=hand[0];
			total=total+10;
			document.getElementById("total").innerHTML=total;
		}
		if(hand[0]=="K"){
			document.getElementById("card1").innerHTML=hand[0];
			total=total+10;
			document.getElementById("total").innerHTML=total;
		}
		if(hand[0]=="A"){
			document.getElementById("card1").innerHTML=hand[0];
			total=total+11;
			document.getElementById("total").innerHTML=total;
		}
		
		
	}
	if(clickCount==2){
		
		if(hand[1]>1 && hand[1]<11)
		{
			document.getElementById("card2").innerHTML=hand[1];
			total=total+hand[1];
			document.getElementById("total").innerHTML=total;
		}
		if(hand[1]=="Q"){
			document.getElementById("card2").innerHTML=hand[1];
			total=total+10;
			document.getElementById("total").innerHTML=total;
			if(total==21)
			{
				alert("TEBRİKLER KAZANDIN!!!");
			}
		}
		if(hand[1]=="J"){
			document.getElementById("card2").innerHTML=hand[1];
			total=total+10;
			document.getElementById("total").innerHTML=total;
			if(total==21)
			{
				alert("TEBRİKLER KAZANDIN!!!");
			}
		}
		if(hand[1]=="K"){
			document.getElementById("card2").innerHTML=hand[1];
			total=total+10;
			document.getElementById("total").innerHTML=total;
			if(total==21)
			{
				alert("TEBRİKLER KAZANDIN!!!");
			}
		}
		if(hand[1]=="A"){
			document.getElementById("card2").innerHTML=hand[1];
			total=total+11;
			document.getElementById("total").innerHTML=total;
			if(total>21)
			{
				total=total-10;
				document.getElementById("total").innerHTML.total;
			}
			if(total==21)
			{
				alert("TEBRİKLER KAZANDIN!!!");
			}
		}
		
	}
	if(clickCount==3){
		
		if(hand[2]>1 && hand[2]<11)
		{
			document.getElementById("card3").innerHTML=hand[2];
			total=total+hand[2];
			document.getElementById("total").innerHTML=total;
			if(total==21)
			{
				alert("TEBRİKLER KAZANDIN!!!");
			}
		}
		if(hand[2]=="Q"){
			document.getElementById("card3").innerHTML=hand[2];
			total=total+10;
			document.getElementById("total").innerHTML=total;
			if(total==21)
			{
				alert("TEBRİKLER KAZANDIN!!!");
			}
		}
		if(hand[2]=="J"){
			document.getElementById("card3").innerHTML=hand[2];
			total=total+10;
			document.getElementById("total").innerHTML=total;
			if(total==21)
			{
				alert("TEBRİKLER KAZANDIN!!!");
			}
		}
		if(hand[2]=="K"){
			document.getElementById("card3").innerHTML=hand[2];
			total=total+10;
			document.getElementById("total").innerHTML=total;
			if(total==21)
			{
				alert("TEBRİKLER KAZANDIN!!!");
			}
		}
		if(hand[2]=="A"){
			document.getElementById("card3").innerHTML=hand[2];
			total=total+11;
			
			if(total>21){
				total=total-10;
				document.getElementById("total").innerHTML=total;
			}
			if(total==21)
			{
				alert("TEBRİKLER KAZANDIN!!!");
			}
		}
		if(total>21 && hand[0]=="A" || total>21 && hand[1]=="A"){
			total=total-10;
			document.getElementById("total").innerHTML=total;
			if(total==21)
			{
				alert("TEBRİKLER KAZANDIN!!!");
			}
		}
		if(total>21)
		{
			alert("KAYBETTİN ELİN 21'i GEÇTİ");
			var pc_result=(Math.floor(Math.random()*(25-16+1)+16));
			document.getElementById("pc_total").innerHTML=pc_result;
		}
	}
	if(clickCount==4){
		if(hand[3]>1 && hand[3]<11)
		{
			document.getElementById("card4").innerHTML=hand[3];
			total=total+hand[3];
			document.getElementById("total").innerHTML=total;
			if(total==21)
			{
				alert("TEBRİKLER KAZANDIN!!!");
			}
		}
		if(hand[3]=="Q"){
			document.getElementById("card4").innerHTML=hand[3];
			total=total+10;
			document.getElementById("total").innerHTML=total;
			if(total==21)
			{
				alert("TEBRİKLER KAZANDIN!!!");
			}
		}
		if(hand[3]=="J"){
			document.getElementById("card4").innerHTML=hand[3];
			total=total+10;
			document.getElementById("total").innerHTML=total;
			if(total==21)
			{
				alert("TEBRİKLER KAZANDIN!!!");
			}
		}
		if(hand[3]=="K"){
			document.getElementById("card4").innerHTML=hand[3];
			total=total+10;
			document.getElementById("total").innerHTML=total;
			if(total==21)
			{
				alert("TEBRİKLER KAZANDIN!!!");
			}
		}
		if(hand[3]=="A"){
			document.getElementById("card4").innerHTML=hand[3];
			total=total+11;
			
			if(total>21){
				total=total-10;
				document.getElementById("total").innerHTML=total;
			}
			if(total==21)
			{
				alert("TEBRİKLER KAZANDIN!!!");
			}
		}
		if(total>21 && hand[0]=="A" || total>21 && hand[1]=="A"){
			total=total-10;
			document.getElementById("total").innerHTML=total;
			if(total==21)
			{
				alert("TEBRİKLER KAZANDIN!!!");
			}
		}
		if(total>21)
		{
			alert("KAYBETTİN ELİN 21'i GEÇTİ");
			var pc_result=(Math.floor(Math.random()*(25-16+1)+16));
			document.getElementById("pc_total").innerHTML=pc_result;
		}
	}
	if(clickCount==5){
		if(hand[4]>1 && hand[4]<11)
		{
			document.getElementById("card5").innerHTML=hand[4];
			total=total+hand[4];
			document.getElementById("total").innerHTML=total;
			if(total==21)
			{
				alert("TEBRİKLER KAZANDIN!!!");
			}
		}
		if(hand[4]=="Q"){
			document.getElementById("card5").innerHTML=hand[4];
			total=total+10;
			document.getElementById("total").innerHTML=total;
			if(total==21)
			{
				alert("TEBRİKLER KAZANDIN!!!");
			}
		}
		if(hand[4]=="J"){
			document.getElementById("card5").innerHTML=hand[4];
			total=total+10;
			document.getElementById("total").innerHTML=total;
			if(total==21)
			{
				alert("TEBRİKLER KAZANDIN!!!");
			}
		}
		if(hand[4]=="K"){
			document.getElementById("card5").innerHTML=hand[4];
			total=total+10;
			document.getElementById("total").innerHTML=total;
			if(total==21)
			{
				alert("TEBRİKLER KAZANDIN!!!");
			}
		}
		if(hand[4]=="A"){
			document.getElementById("card5").innerHTML=hand[4];
			total=total+11;
			
			if(total>21){
				total=total-10;
				document.getElementById("total").innerHTML=total;
				if(total==21)
			{
				alert("TEBRİKLER KAZANDIN!!!");
			}
			}
		}
		
		if(total>21 && hand[0]=="A" || total>21 && hand[1]=="A"){
			total=total-10;
			document.getElementById("total").innerHTML=total;
			if(total==21)
			{
				alert("TEBRİKLER KAZANDIN!!!");
			}
		}
		if(total>21)
		{
			alert("KAYBETTİN ELİN 21'i GEÇTİ");
			var pc_result=(Math.floor(Math.random()*(25-16+1)+16));
			document.getElementById("pc_total").innerHTML=pc_result;
		}
	}
	
	
	var sil = deck.splice(random_card, 1);
	document.getElementById("cekilen").innerHTML=deck;
	
	
}

function refresh(){
	location.reload(true);
}

var pc_total=0;

function pass(){
	
	
	{
		
		
		var pc_result=(Math.floor(Math.random()*(25-16+1)+16));
		
		document.getElementById("pc_total").innerHTML=pc_result;
		if(total>pc_result || pc_result>21 && total<22)
		{
			alert("KAZANDIN!!!");
		}
		if(pc_result>total && pc_result<22)
		{
			alert("BİLGİSAYAR KAZANDI!!!");
		}
	}
}
/*####################################################*/