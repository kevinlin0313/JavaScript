"use strict";
const GameWidth=800,GameHeight=600;
const BrickWidth=100,BrickHeight=30;
const BrickRow=3,BrickColumn=6,BrickGap=30,BrickXStart=25,BrickYStart=50;
const BallWidth=30;
const StickWidth=150,StickHeight=30;
const COLORS=["red","orange","yellow","green","blue"]

let container=document.getElementById("container");
container.style.width=GameWidth+"px";
container.style.height=GameHeight+"px";

let point=0;


class Component {
 constructor(){
    this.coor={x:400,y:300};
    this.node=document.createElement('div');
    container.appendChild(this.node);
 }
 setXY(x,y){
  this.coor.x=x;
  this.coor.y=y;
  this.node.style.left=x+"px";
  this.node.style.top=y+"px";
 }
}
class Brick extends Component {
 constructor(){
  super();
  this.level=Math.floor(Math.random()*5)+1;
  this.node.className='Brick';
  this.node.style.display="flex";
  //this.node.sytle.width=BrickWidth+"px";
  //this.node.sytle.height=BrickHeight+"px";
  this.node.style.backgroundColor=COLORS[this.level-1];
 }
  check() {
	  this.node.style.backgroundColor=COLORS[this.level-1];
	  if(this.level==0)
	  {
		  this.node.style.display="none";
	  }
 }
}

  let brick00=new Brick();
  brick00.setXY(
      BrickXStart+(BrickWidth+BrickGap)*0,
   BrickYStart+(BrickHeight+BrickGap)*0
  );
  let brick01=new Brick();
  brick01.setXY(
      BrickXStart+(BrickWidth+BrickGap)*1,
   BrickYStart+(BrickHeight+BrickGap)*0
  );
  let brick02=new Brick();
  brick02.setXY(
      BrickXStart+(BrickWidth+BrickGap)*2,
   BrickYStart+(BrickHeight+BrickGap)*0
  );
  let brick03=new Brick();
  brick03.setXY(
      BrickXStart+(BrickWidth+BrickGap)*3,
   BrickYStart+(BrickHeight+BrickGap)*0
  );
  let brick04=new Brick();
  brick04.setXY(
      BrickXStart+(BrickWidth+BrickGap)*4,
   BrickYStart+(BrickHeight+BrickGap)*0
  );
  let brick05=new Brick();
  brick05.setXY(
      BrickXStart+(BrickWidth+BrickGap)*5,
   BrickYStart+(BrickHeight+BrickGap)*0
  );
  
  let brick10=new Brick();
  brick10.setXY(
      BrickXStart+(BrickWidth+BrickGap)*0,
   BrickYStart+(BrickHeight+BrickGap)*1
  );
  let brick11=new Brick();
  brick11.setXY(
      BrickXStart+(BrickWidth+BrickGap)*1,
   BrickYStart+(BrickHeight+BrickGap)*1
  );
  let brick12=new Brick();
  brick12.setXY(
      BrickXStart+(BrickWidth+BrickGap)*2,
   BrickYStart+(BrickHeight+BrickGap)*1
  );
  let brick13=new Brick();
  brick13.setXY(
      BrickXStart+(BrickWidth+BrickGap)*3,
   BrickYStart+(BrickHeight+BrickGap)*1
  );
  let brick14=new Brick();
  brick14.setXY(
      BrickXStart+(BrickWidth+BrickGap)*4,
   BrickYStart+(BrickHeight+BrickGap)*1
  );
  let brick15=new Brick();
  brick15.setXY(
      BrickXStart+(BrickWidth+BrickGap)*5,
   BrickYStart+(BrickHeight+BrickGap)*1
  );
  
  let brick20=new Brick();
  brick20.setXY(
      BrickXStart+(BrickWidth+BrickGap)*0,
   BrickYStart+(BrickHeight+BrickGap)*2
  );
  let brick21=new Brick();
  brick21.setXY(
      BrickXStart+(BrickWidth+BrickGap)*1,
   BrickYStart+(BrickHeight+BrickGap)*2
  );
  let brick22=new Brick();
  brick22.setXY(
      BrickXStart+(BrickWidth+BrickGap)*2,
   BrickYStart+(BrickHeight+BrickGap)*2
  );
  let brick23=new Brick();
  brick23.setXY(
      BrickXStart+(BrickWidth+BrickGap)*3,
   BrickYStart+(BrickHeight+BrickGap)*2
  );
  let brick24=new Brick();
  brick24.setXY(
      BrickXStart+(BrickWidth+BrickGap)*4,
   BrickYStart+(BrickHeight+BrickGap)*2
  );
  let brick25=new Brick();
  brick25.setXY(
      BrickXStart+(BrickWidth+BrickGap)*5,
   BrickYStart+(BrickHeight+BrickGap)*2
  );

class Stick extends Component {
 constructor(){
  super();
  this.node.className='Stick';
  this.node.style.top=GameHeight-StickHeight+"px";
  this.setXY((GameWidth-StickWidth)/2);
 }
 setXY(x) {
  this.coor.x=x;
  if(x>GameWidth-StickWidth){
   x=GameWidth-StickWidth;
  }
  this.node.style.left=x+"px";
 }
}
let stick=new Stick();
container.addEventListener("mousemove",function(e){
 e=e||event;
 console.log(e.offsetX);
 stick.setXY(e.offsetX);
});
class Ball extends Component {
 constructor(){
  super();
  this.node.className='Ball';
  this.offset={x:2,y:3};
 }
 move() {
  let nx=this.coor.x+this.offset.x;
  let ny=this.coor.y+this.offset.y;
  if (nx<0) {nx=0;this.offset.x=2};
  if (ny<0) {ny=0;this.offset.y=3};
        if (nx>GameWidth-BallWidth) {
            nx=GameWidth-BallWidth;
   this.offset.x=-2;
  }
  if (ny>GameHeight-BallWidth-StickHeight &&
	  nx>stick.coor.x && nx<stick.coor.x+StickWidth)
    {
     ny=GameHeight-BallWidth-StickHeight;
              this.offset.y=-3;
   }     
   else if(ny>GameHeight-BallWidth){
              ny=GameHeight-BallWidth;
     this.offset.y=0;
     this.offset.x=0;
     alert("Game Over");
     document.location.reload();
   }
  /*for(let a=BrickRow-1;a>=0;a--){
   for(let b=BrickColumn;b>=0;b--){
    if(nx>BrickXStart+(BrickWidth+BrickGap)*b && 
       nx<BrickXStart+(BrickWidth+BrickGap)*b+BrickWidth &&
       ny>BrickYStart+(BrickHeight+BrickGap)*a &&
       ny<BrickYStart+(BrickHeight+BrickGap)*a+BrickHeight
       ){
        this.offset.y=3;
		point++;
		console.log(point);
		brick.level-=1;
		brick.check();
       }*/
	 if(nx>BrickXStart+(BrickWidth+BrickGap)*5 &&
		nx<BrickXStart+(BrickWidth+BrickGap)*5+BrickWidth &&
		ny>BrickYStart+(BrickHeight+BrickGap)*2 &&
		ny<BrickYStart+(BrickHeight+BrickGap)*2+BrickHeight&&
		brick25.node.style.display!="none")
		{
			this.offset.y=3;
			point++;
			brick25.level-=1;
			brick25.check();
		}
	if(nx>BrickXStart+(BrickWidth+BrickGap)*4 &&
		nx<BrickXStart+(BrickWidth+BrickGap)*4+BrickWidth &&
		ny>BrickYStart+(BrickHeight+BrickGap)*2 &&
		ny<BrickYStart+(BrickHeight+BrickGap)*2+BrickHeight&&
		brick24.node.style.display!="none")
		{
			this.offset.y=3;
			point++;
			brick24.level-=1;
			brick24.check();
		}
	if(nx>BrickXStart+(BrickWidth+BrickGap)*3 &&
		nx<BrickXStart+(BrickWidth+BrickGap)*3+BrickWidth &&
		ny>BrickYStart+(BrickHeight+BrickGap)*2 &&
		ny<BrickYStart+(BrickHeight+BrickGap)*2+BrickHeight&&
		brick23.node.style.display!="none")
		{
			this.offset.y=3;
			point++;
			brick23.level-=1;
			brick23.check();
		}
	if(nx>BrickXStart+(BrickWidth+BrickGap)*2 &&
		nx<BrickXStart+(BrickWidth+BrickGap)*2+BrickWidth &&
		ny>BrickYStart+(BrickHeight+BrickGap)*2 &&
		ny<BrickYStart+(BrickHeight+BrickGap)*2+BrickHeight&&
		brick22.node.style.display!="none")
		{
			this.offset.y=3;
			point++;
			brick22.level-=1;
			brick22.check();
		}
	if(nx>BrickXStart+(BrickWidth+BrickGap)*1 &&
		nx<BrickXStart+(BrickWidth+BrickGap)*1+BrickWidth &&
		ny>BrickYStart+(BrickHeight+BrickGap)*2 &&
		ny<BrickYStart+(BrickHeight+BrickGap)*2+BrickHeight&&
		brick21.node.style.display!="none")
		{
			this.offset.y=3;
			point++;
			brick21.level-=1;
			brick21.check();
		}
	if(nx>BrickXStart+(BrickWidth+BrickGap)*0 &&
		nx<BrickXStart+(BrickWidth+BrickGap)*0+BrickWidth &&
		ny>BrickYStart+(BrickHeight+BrickGap)*2 &&
		ny<BrickYStart+(BrickHeight+BrickGap)*2+BrickHeight&&
		brick20.node.style.display!="none")
		{
			this.offset.y=3;
			point++;
			brick20.level-=1;
			brick20.check();
		}
		
	if(nx>BrickXStart+(BrickWidth+BrickGap)*5 &&
		nx<BrickXStart+(BrickWidth+BrickGap)*5+BrickWidth &&
		ny>BrickYStart+(BrickHeight+BrickGap)*1 &&
		ny<BrickYStart+(BrickHeight+BrickGap)*1+BrickHeight&&
		brick15.node.style.display!="none")
		{
			this.offset.y=3;
			point++;
			brick15.level-=1;
			brick15.check();
		}
	if(nx>BrickXStart+(BrickWidth+BrickGap)*4 &&
		nx<BrickXStart+(BrickWidth+BrickGap)*4+BrickWidth &&
		ny>BrickYStart+(BrickHeight+BrickGap)*1 &&
		ny<BrickYStart+(BrickHeight+BrickGap)*1+BrickHeight&&
		brick14.node.style.display!="none")
		{
			this.offset.y=3;
			point++;
			brick14.level-=1;
			brick14.check();
		}
	if(nx>BrickXStart+(BrickWidth+BrickGap)*3 &&
		nx<BrickXStart+(BrickWidth+BrickGap)*3+BrickWidth &&
		ny>BrickYStart+(BrickHeight+BrickGap)*1 &&
		ny<BrickYStart+(BrickHeight+BrickGap)*1+BrickHeight&&
		brick13.node.style.display!="none")
		{
			this.offset.y=3;
			point++;
			brick13.level-=1;
			brick13.check();
		}
	if(nx>BrickXStart+(BrickWidth+BrickGap)*2 &&
		nx<BrickXStart+(BrickWidth+BrickGap)*2+BrickWidth &&
		ny>BrickYStart+(BrickHeight+BrickGap)*1 &&
		ny<BrickYStart+(BrickHeight+BrickGap)*1+BrickHeight&&
		brick12.node.style.display!="none")
		{
			this.offset.y=3;
			point++;
			brick12.level-=1;
			brick12.check();
		}
	if(nx>BrickXStart+(BrickWidth+BrickGap)*1 &&
		nx<BrickXStart+(BrickWidth+BrickGap)*1+BrickWidth &&
		ny>BrickYStart+(BrickHeight+BrickGap)*1 &&
		ny<BrickYStart+(BrickHeight+BrickGap)*1+BrickHeight&&
		brick11.node.style.display!="none")
		{
			this.offset.y=3;
			point++;
			brick11.level-=1;
			brick11.check();
		}
	if(nx>BrickXStart+(BrickWidth+BrickGap)*0 &&
		nx<BrickXStart+(BrickWidth+BrickGap)*0+BrickWidth &&
		ny>BrickYStart+(BrickHeight+BrickGap)*1 &&
		ny<BrickYStart+(BrickHeight+BrickGap)*1+BrickHeight&&
		brick10.node.style.display!="none")
		{
			this.offset.y=3;
			point++;
			brick10.level-=1;
			brick10.check();
		}
		
	if(nx>BrickXStart+(BrickWidth+BrickGap)*5 &&
		nx<BrickXStart+(BrickWidth+BrickGap)*5+BrickWidth &&
		ny>BrickYStart+(BrickHeight+BrickGap)*0 &&
		ny<BrickYStart+(BrickHeight+BrickGap)*0+BrickHeight&&
		brick05.node.style.display!="none")
		{
			this.offset.y=3;
			point++;
			brick05.level-=1;
			brick05.check();
		}
	if(nx>BrickXStart+(BrickWidth+BrickGap)*4 &&
		nx<BrickXStart+(BrickWidth+BrickGap)*4+BrickWidth &&
		ny>BrickYStart+(BrickHeight+BrickGap)*0&&
		ny<BrickYStart+(BrickHeight+BrickGap)*0+BrickHeight&&
		brick04.node.style.display!="none")
		{
			this.offset.y=3;
			point++;
			brick04.level-=1;
			brick04.check();
		}
	if(nx>BrickXStart+(BrickWidth+BrickGap)*3 &&
		nx<BrickXStart+(BrickWidth+BrickGap)*3+BrickWidth &&
		ny>BrickYStart+(BrickHeight+BrickGap)*0 &&
		ny<BrickYStart+(BrickHeight+BrickGap)*0+BrickHeight&&
		brick03.node.style.display!="none")
		{
			this.offset.y=3;
			point++;
			brick03.level-=1;
			brick03.check();
		}
	if(nx>BrickXStart+(BrickWidth+BrickGap)*2 &&
		nx<BrickXStart+(BrickWidth+BrickGap)*2+BrickWidth &&
		ny>BrickYStart+(BrickHeight+BrickGap)*0 &&
		ny<BrickYStart+(BrickHeight+BrickGap)*0+BrickHeight&&
		brick02.node.style.display!="none")
		{
			this.offset.y=3;
			point++;
			brick02.level-=1;
			brick02.check();
		}
	if(nx>BrickXStart+(BrickWidth+BrickGap)*1 &&
		nx<BrickXStart+(BrickWidth+BrickGap)*1+BrickWidth &&
		ny>BrickYStart+(BrickHeight+BrickGap)*0 &&
		ny<BrickYStart+(BrickHeight+BrickGap)*0+BrickHeight&&
		brick01.node.style.display!="none")
		{
			this.offset.y=3;
			point++;
			brick01.level-=1;
			brick01.check();
		}
	if(nx>BrickXStart+(BrickWidth+BrickGap)*0 &&
		nx<BrickXStart+(BrickWidth+BrickGap)*0+BrickWidth &&
		ny>BrickYStart+(BrickHeight+BrickGap)*0 &&
		ny<BrickYStart+(BrickHeight+BrickGap)*0+BrickHeight&&
		brick00.node.style.display!="none")
		{
			this.offset.y=3;
			point++;
			brick00.level-=1;
			brick00.check();
		}
	document.getElementById('point').textContent=point;	
    console.log(point);
  
  super.setXY(nx,ny); 

 }
}
let ball=new Ball();
setInterval(function(){ball.move();},30);