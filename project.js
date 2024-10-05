"use strict";
let cover=document.getElementById('cover');
let setting=document.getElementById('setting');
let game=document.getElementById('game');
let roads=document.getElementById("roads");
let player=document.getElementById("player");
let select1=document.querySelector("#select1");
select1.addEventListener("change", selectDifficulty1);
let select2=document.querySelector("#select2");
select2.addEventListener("change", selectDifficulty2);
let select3=document.querySelector("#select3");
select3.addEventListener("change", selectColor);

let point=0;
let minutes=1;
let seconds=0;
let lastDirection=0;
let Direction=0;
let lastLength=0;
let lastWidth=0;
var x=600;
var y=300;
var outs=0;
var left=0;
var timeneed=true;
var speed=1;
var w=20;
var color=1;

document.getElementById('minutes').textContent=minutes;
document.getElementById('seconds').textContent=seconds;
document.getElementById('point').textContent=point;

setting.style.display="none";
game.style.display="none";

function set()
{
	cover.style.display="none";
	setting.style.display="flex";
}

function back()
{
	cover.style.display="flex";
	setting.style.display="none";
}

function version1()
{
	cover.style.display="none";
	game.style.display="flex";
	setTimeout(startgame,0);
}

function version2()
{
	timeneed=false;
	var times=document.getElementById('time');
	time.style.display="none";
	cover.style.display="none";
	game.style.display="flex";
	setTimeout(startgame,0);
}

function selectDifficulty1(){
	let switchValue = this.value;
	switch (switchValue) {
    case "1":
		w=40;
		break;
    case "2":
		w=20;
		break;
    case "3":
		w=10;
		break;
    }
}

function selectDifficulty2(){
	let switchValue = this.value;
	switch (switchValue) {
    case "1":
		speed=0.5;
		break;
    case "2":
		speed=1;
		break;
    case "3":
		speed=2;
		break;
  }
}

function selectColor(){
	let switchValue = this.value;
	switch (switchValue) {
    case "1":
		color=1;
		break;
    case "2":
		color=2;
		break;
    case "3":
		color=3;
		break;
	case "4":
		color=4;
		break;
    case "5":
		color=5;
		break;
  }
}

function settime()
{
	minutes=document.getElementById("m").value;
	document.getElementById('minutes').textContent=minutes;
}

class Road {
	constructor(){
		this.coor={x:0,y:300}
		this.node=document.createElement('div');
		roads.appendChild(this.node);
		this.node.className='Road';
		this.node.style.display="flex";
		if(color==1)
			this.node.style.backgroundColor="red";
		if(color==2)
			this.node.style.backgroundColor="green";
		if(color==3)
			this.node.style.backgroundColor="yellow";
		if(color==4)
			this.node.style.backgroundColor="blue";
		if(color==5)
			this.node.style.backgroundColor="purple";
	 }
	 
	setStart(lastx,lasty,lastlength,lastwidth,lastdirection,direction){
		if(lastdirection==0)
		{
			if(direction==0)//right
			{
				x=lastx+lastlength;
			}
			if(direction==1)//up
			{
				x=lastx+lastlength-this.width;
				y=lasty-this.length;
			}
			if(direction==2)//down
			{
				x=lastx+lastlength-this.width;
				y=lasty+lastwidth;
			}
		}
		else if(lastdirection==1)
		{
			if(direction==0)
			{
				x=lastx+lastwidth;
			}
			if(direction==1)
			{
				y=lasty-this.length;
			}
			if(direction==3)
			{
				x=lastx-this.length;
			}
		}
		else if(lastdirection==2)
		{
			if(direction==0)
			{
				x=lastx+lastwidth;
				y=lasty+lastlength-this.width;
			}
			if(direction==2)
			{
				y=lasty+lastlength;
			}
			if(direction==3)
			{
				x=lastx-this.length;
			}
		}
		else if(lastdirection==3)
		{
			if(direction==1)
			{
				y=lasty-this.length;
			}
			if(direction==2)
			{
				y=lasty+lastwidth;
			}
			if(direction==3)
			{
				x=lastx-this.length;
			}
		}
		this.coor.x=x;
		this.coor.y=y;
		this.node.style.left=x+"px";
		this.node.style.top=y+"px";
	}
	
	setLength(){
		this.length=Math.floor(Math.random()*20)+50;
	}
	
	setWidth(){
		this.width=Math.floor(Math.random()*w)+25;
	}
	
	draw(width,length,direction){
		if(direction==0||direction==3)
		{	
			this.node.style.width=this.length+"px";
			this.node.style.height=this.width+"px";
		}
		else
		{	
			this.node.style.width=this.width+"px";
			this.node.style.height=this.length+"px"
		}
	}
	
	nextDirection(direction){
		if(direction==0)
		{
			if(x<200)
			{
				do{
					this.direction=Math.floor(Math.random()*4);
				}while(this.direction==3);
			}
			else if(x>1000)
			{
				do{
					this.direction=Math.floor(Math.random()*4);
				}while(this.direction==3||this.direction==0);
			}
			if(y<150)
			{
				do{
					this.direction=Math.floor(Math.random()*4);
				}while(this.direction==3||this.direction==1);
			}
			else if(y>600)
			{
				do{
					this.direction=Math.floor(Math.random()*4);
				}while(this.direction==3||this.direction==2);
			}
			if(x>200&&x<1000&&y>150&&y<600)
			{
				do{
					this.direction=Math.floor(Math.random()*4);
				}while(this.direction==3);
			}
		}
		else if(direction==1)
		{
			if(x<200)
			{
				do{
					this.direction=Math.floor(Math.random()*4);
				}while(this.direction==2||this.direction==3);
			}
			else if(x>1000)
			{
				do{
					this.direction=Math.floor(Math.random()*4);
				}while(this.direction==2||this.direction==0);
			}
			if(y<150)
			{
				do{
					this.direction=Math.floor(Math.random()*4);
				}while(this.direction==2||this.direction==1);
			}
			else if(y>600)
			{
				do{
					this.direction=Math.floor(Math.random()*4);
				}while(this.direction==2);
			}
			if(x>200&&x<1000&&y>150&&y<600)
			{
				do{
					this.direction=Math.floor(Math.random()*4);
				}while(this.direction==2);
			}
		}
		else if(direction==2)
		{	
			if(x<200)
			{
				do{
					this.direction=Math.floor(Math.random()*4);
				}while(this.direction==1||this.direction==3);
			}
			else if(x>1000)
			{
				do{
					this.direction=Math.floor(Math.random()*4);
				}while(this.direction==1||this.direction==0);
			}
			if(y<150)
			{
				do{
					this.direction=Math.floor(Math.random()*4);
				}while(this.direction==1);
			}
			else if(y>600)
			{
				do{
					this.direction=Math.floor(Math.random()*4);
				}while(this.direction==1||this.direction==2);
			}
			if(x>200&&x<1000&&y>150&&y<600)
			{
				do{
					this.direction=Math.floor(Math.random()*4);
				}while(this.direction==1);
			}
		}
		else if(direction==3)
		{
			if(x<200)
			{
				do{
					this.direction=Math.floor(Math.random()*4);
				}while(this.direction==0||this.direction==3);
			}
			else if(x>1000)
			{
				do{
					this.direction=Math.floor(Math.random()*4);
				}while(this.direction==0);
			}
			if(y<150)
			{
				do{
					this.direction=Math.floor(Math.random()*4);
				}while(this.direction==0||this.direction==1);
			}
			else if(y>600)
			{
				do{
					this.direction=Math.floor(Math.random()*4);
				}while(this.direction==0||this.direction==2);
			}
			if(x>200&&x<1000&&y>150&&y<600)
			{
				do{
					this.direction=Math.floor(Math.random()*4);
				}while(this.direction==0);
			}
		}
	}
}

class Ball {
	constructor(){
		this.coor={bx:0,by:300};
		this.node=document.createElement('div');
		player.appendChild(this.node);
		this.node.className='Ball';
		this.node.style.top=300+"px";
		this.node.style.left=600+"px";
	}
	
	setXY(bx,by) {
		this.coor.x=bx;
		this.coor.y=by;
		this.node.style.left=bx+"px";
		this.node.style.top=by+"px";
	}
}

function startgame(){
	for(let i=0;i<100;i++)
	{
		{	
			let road=new Road();
			road.setLength();
			road.setWidth();
			road.setStart(x,y,lastLength,lastWidth,lastDirection,Direction);
			road.draw(road.length,road.width,Direction)
			lastLength=road.length;
			lastWidth=road.width;
			lastDirection=Direction;
			road.nextDirection(Direction);
			Direction=road.direction;
		}
	}
}

let ball=new Ball();
function startmove()
{  
	container.addEventListener("mousemove",function(e){
	e=e||event;
	ball.setXY((e.clientX-300),(e.clientY-50));
	});
	roads.addEventListener("mouseenter", function( event ) {
		outs--;
	}, false);
	roads.addEventListener("mouseleave", function( event ) {
		outs++;
	}, false);
	
	if(timeneed)
	{
		setInterval(function() {
			if(seconds==0)
			{
				minutes-=1;
				seconds=59;
			}
			else{
				seconds-=1;
			}
			document.getElementById('minutes').textContent=minutes;
			document.getElementById('seconds').textContent=seconds;
			if(minutes==0&&seconds==0)
				alert("Timeout! you win!");
		}, 1000);
				
	}
	
	setInterval(function() {
		point+=1;
		document.getElementById('point').textContent=point;
	},100);
	
	var detect=setTimeout(detective,100);
	
	setInterval(function() {
		let road=new Road();
		road.setLength();
		road.setWidth();
		road.setStart(x,y,lastLength,lastWidth,lastDirection,Direction);
		road.draw(road.length,road.width,Direction)
		lastLength=road.length;
		lastWidth=road.width;
		lastDirection=Direction;
		road.nextDirection(Direction);
		Direction=road.direction;
	},(1000/speed));
	
	setInterval(function(){
		var divs=roads.getElementsByTagName('div');
		if(divs.length>50)
			roads.removeChild(divs[0]);
		},(1000/speed));
}

function detective(){
	setInterval(
	function(){
		if(outs==0)
			alert("out");
	},100);
}