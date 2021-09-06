let c= document.getElementById("my_canvas");
let ctx=c.getContext("2d");
let img=new Image();
img.onload=function()=>{
    ctx.drawImage(img,0,0,500,500);






};
img.src = 'https://www.tutorialspoint.com/images/seaborn-4.jpg?v=2';