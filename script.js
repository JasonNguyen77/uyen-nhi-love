setInterval(()=>{
  const heart=document.createElement("div");
  heart.innerHTML="❤";
  heart.style.position="absolute";
  heart.style.left=Math.random()*100+"vw";
  heart.style.bottom="0";
  heart.style.color="#ff6b9a";
  heart.style.animation="up 5s linear";
  document.body.appendChild(heart);

  setTimeout(()=>heart.remove(),5000);
},300);

const style=document.createElement('style');
style.innerHTML=`
@keyframes up{
  from{transform:translateY(0);}
  to{transform:translateY(-110vh);opacity:0;}
}`;
document.head.appendChild(style);
