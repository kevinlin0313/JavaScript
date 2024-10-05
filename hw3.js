"use strict";
let output=' ';
let x=1;
for(let i=1;i<6;i++)
{
        output +=`<table>
                  <tr><td colspan="8">第${i+1}張卡片<input type="checkbox" id=""></td></tr>`;
                  for(let j=1,count=0;j<64;j++)
                  {
                          if((j&x)!=0){
                                if(c%8==0)
                                       output +='<tr>'; 
                                output +='<td>'+j+'</td>';
                                if(c%8==7)
                                       output +='</tr>';
                                count++;
                          }
                                  
                          
                  }
        x=x*2;
        output +='/<table>';
}
document.write(output);