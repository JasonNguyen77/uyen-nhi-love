const heartsContainer = document.getElementById("hearts");
const nameEl = document.getElementById("name");
const music = document.getElementById("bgm");

/* Mở quà */
function openGift(){
  nameEl.classList.remove("hidden");
  music.play();
}

/* Tạo trái tim bay */
function createHeart(){
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "💗";

  heart.style.left = Math.random()*100 + "vw";
  heart.style.animationDuration = (3 + Math.random()*4) + "s";
  heart.style.fontSize = (16 + Math.random()*20) + "px";

  heartsContainer.appendChild(heart);

  setTimeout(()=>{
    heart.remove();
  },7000);
}

setInterval(createHeart, 300);
