var wid;
var hgt = 50;
var hgt = document.getElementById('');

let c = document.getElementById("bCodeDisplay");
let ctx = c.getContext("2d");
let imgData = ctx.createImageData(100,hgt);

for(let i = 0; i < imgData.length; i++){
  let s = (Math.floor(Math.random()*2+1)-1)*255;
  imgData.data[i+0] = s;
  imgData.data[i+1] = s;
  imgData.data[i+2] = s;
  imgData.data[i+3] = 255;
}

ctx.putImageData(imgData,10,10);
