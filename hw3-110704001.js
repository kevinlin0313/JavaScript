"use strict";
let output=' ';
let x=1;
for(let i=0; i<3; i++)
{
	if((i+1)%3==1) output+='<nav><div class="t1">';
       	output +=`<table>
                  <tr><td colspan="8">第${i+1}張卡片<input type="checkbox" id=""></td></tr>`;
                  for(let j=1,count=0; j<64; j++)
                  {
                          if((j&x)!=0){
                                if(count%8==0) output +='<tr>';
                                output +='<td>'+j+'</td>';
                                if(count%8==7) output +='</tr>';
                                count++;
				
                          }     
                  }
        x=x*2;
        output +='</table>';
	if((i+1)%3==0) output+='</div></nav>';
}
for(let i=3; i<6; i++)
{
	if((i+1)%3==1) output+='<nav><div class="t2">';
       	output +=`<table>
                  <tr><td colspan="8">第${i+1}張卡片<input type="checkbox" id=""></td></tr>`;
                  for(let j=1,count=0; j<64; j++)
                  {
                          if((j&x)!=0){
                                if(count%8==0) output +='<tr>';
                                output +='<td>'+j+'</td>';
                                if(count%8==7) output +='</tr>';
                                count++;
				
                          }     
                  }
        x=x*2;
        output +='</table>';
	if((i+1)%3==0) output+='</div></nav>';
}
document.write(output);