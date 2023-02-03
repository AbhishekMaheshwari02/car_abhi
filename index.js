	/* Get the documentElement (<html>) to display the page in fullscreen */
	var elem = document.documentElement;
	
	/* View in fullscreen */
	function openFullscreen() {
	  if (elem.requestFullscreen) {
		elem.requestFullscreen();
	  } else if (elem.webkitRequestFullscreen) { /* Safari */
		elem.webkitRequestFullscreen();
	  } else if (elem.msRequestFullscreen) { /* IE11 */
		elem.msRequestFullscreen();
	  }
	}
	
	/* Close fullscreen */
	function closeFullscreen() {
	  if (document.exitFullscreen) {
		document.exitFullscreen();
	  } else if (document.webkitExitFullscreen) { /* Safari */
		document.webkitExitFullscreen();
	  } else if (document.msExitFullscreen) { /* IE11 */
		document.msExitFullscreen();
	  }
	}
	
	function show(){
		var btn1=document.getElementById('demo').classList.toggle('hidden')
		var btn2=document.getElementById('play').classList.toggle('hidden')
		var btn3=document.getElementById('controls-carousel').classList.toggle('hidden')
		openFullscreen();
	}

//  ===================== OBSTACLES ========================



// =========== COLPASE OF COINS ============
// coin variables
var cl 
var cr 
var ct 
var cb 
// car(vehicle) variables
var vl 
var vr 
var vt 
var vb 



function carPosition(){
	var element = document.getElementById('car');
var position = element.getBoundingClientRect();
 vl = Math.round(position.left);
 vr = Math.round(position.right);
 vt = Math.round(position.top);
 vb = Math.round(position.bottom);
document.getElementById('vall').innerHTML=vl;
document.getElementById('valr').innerHTML=vr;
document.getElementById('valt').innerHTML=vt;
document.getElementById('valb').innerHTML=vb;
}
function coinPosition(){
	var element = document.getElementById('coin');
var position = element.getBoundingClientRect();
 cl = Math.round(position.left);
 cr = Math.round(position.right);
 ct = Math.round(position.top);
 cb = Math.round(position.bottom);
document.getElementById('cvall').innerHTML=cl;
document.getElementById('cvalr').innerHTML=cr;
document.getElementById('cvalt').innerHTML=ct;
document.getElementById('cvalb').innerHTML=cb;
}
let stay=setInterval(()=>{
	carPosition();
    coinPosition();

if (((cr<=vr) & (ct>=vt)) & (cl>=vl))
{
  var sc=document.getElementById('score').value;
  sc++;
  playGetCoin();
 document.getElementById('score').value=sc;
  l=50
 t=30
 w=5

};

},500)
console.log(ps)
// crash check

// score value 0
function set_zero(){
	document.getElementById('score').value=0;
}


// ========== play audio =========

function playGetCoin(){
    var getCoin=document.getElementById('audio');
    getCoin.play();
}
function carEngin(){
    var carengin=document.getElementById('engin');
    carengin.play();
}
function carEnginMute(){
    var carengin1=document.getElementById('engin');
    carengin1.pause();
}
function carRunning(){
    var car1=document.getElementById('running');
    car1.play();
}
function carRunningMute(){
    var car2=document.getElementById('running');
    car2.pause();
}










//  ===================== OBSTACLES ========================

let dl=50
var dt=30
var dw=10

function dobs(){
   
	if (dt>=90){
	document.getElementById('dcoin').setAttribute('style','width:'+dw+'%; left:'+dl+'%;top:'+dt+'%;');

	dl=50;
	dt=50;
	dw=5;
	}
	else{
	document.getElementById('dcoin').setAttribute('style','width:'+dw+'%; left:'+dl+'%;top:'+dt+'%;');
	// w=w+4;
	dt=dt+1;
	// l=l-8   
	}
}

var dsetTime=setInterval(()=>{
	dobs()
},50);


// =========== COLPASE OF COINS ============
// coin variables
var dcl 
var dcr 
var dct 
var dcb 
// car(vehicle) variables
var dvl 
var dvr 
var dvt 
var dvb 



function dcarPosition(){
	var delement = document.getElementById('car');
var dposition = delement.getBoundingClientRect();
 dvl = Math.round(dposition.left);
 dvr = Math.round(dposition.right);
 dvt = Math.round(dposition.top);
 dvb = Math.round(dposition.bottom);
// document.getElementById('vall').innerHTML=vl;
// document.getElementById('valr').innerHTML=vr;
// document.getElementById('valt').innerHTML=vt;
// document.getElementById('valb').innerHTML=vb;
}
function dcoinPosition(){
	var delement = document.getElementById('dcoin');
var dposition = delement.getBoundingClientRect();
 dcl = Math.round(dposition.left);
 dcr = Math.round(dposition.right);
 dct = Math.round(dposition.top);
 dcb = Math.round(dposition.bottom);
// document.getElementById('cvall').innerHTML=cl;
// document.getElementById('cvalr').innerHTML=cr;
// document.getElementById('cvalt').innerHTML=ct;
// document.getElementById('cvalb').innerHTML=cb;
}
let dstay=setInterval(()=>{
	dcarPosition();
    dcoinPosition();

if (((dcr<=dvr) & (dct>=dvt)) & (dcl>=dvl))
{
//   var sc=document.getElementById('score').value;
//   sc++;
  playGetCoin();
  
//  document.getElementById('score').value=sc;
  dl=50
 dt=30
 dw=5

};

},500)
// console.log(ps)
// crash check

// score value 0
// function set_zero(){
// 	var ele=document.getElementById('socre').value;
// 	ele=0;
// }
