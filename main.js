let c= document.getElementById("my_canvas");
let ctx=c.getContext("2d");
let loadimg=(src,callback)=>{
    img.onload=()=>callback(img);
    img.src=src;
};

loadimg("/mar.png",(img)=>{
    ctx.drawImage(img,0,0,500,500);
});






};
img.src = "/mar.png";
