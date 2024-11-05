// 1. click a button and show the content with 60px fontSize and bgColor red and bordeRadius 50%    


var b=document.getElementById("para");
var a=document.getElementById("btn");
a.style.backgroundColor="lightcoral";
a.style.borderRadius="20px";
a.style.padding="10px"
a.onclick=function(){
    b.textContent="hello brother how are you!"
    b.style.fontSize="60px";
    b.style.backgroundColor="red";
    b.style.borderRadius="50%";
}
// 2. click the button and display three images on clicking the button ft img should be of border radius 30px , second img should be border radius 100px , third img should be of borderradius 50%

var d=document.getElementById("imagecontainer");
var e=document.getElementById("imagecontainer1");
var f=document.getElementById("imagecontainer2");

var c=document.getElementById("btn1");
c.style.backgroundColor="yellow";
c.style.padding="10px"
c.style.borderRadius="20px";
c.onclick=function(){
    d.innerHTML=`<img src="https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630" width="300px" style="border-radius:30px"/> `
     e.innerHTML=`<img src="https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-autumn-nature-with-trees-of-yellow-leaves-free-image.jpeg?w=600&quality=80" width="300px" style="border-radius:100px"/> `
    f.innerHTML=`<img src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" width="300px" style="border-radius:50%"/> `
}



