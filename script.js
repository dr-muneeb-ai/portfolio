/* =====================================
   CUBIC GENESIS PORTFOLIO
   PREMIUM SCRIPT
   PART 1
===================================== */

// ---------- Theme Toggle ----------

const html = document.documentElement;

const themeBtn = document.querySelector(".theme-toggle");

if(themeBtn){

themeBtn.addEventListener("click",()=>{

const current=html.getAttribute("data-theme");

const next=current==="dark"?"light":"dark";

html.setAttribute("data-theme",next);

localStorage.setItem("theme",next);

});

}

const savedTheme=localStorage.getItem("theme");

if(savedTheme){

html.setAttribute("data-theme",savedTheme);

}



// ---------- Loading Screen ----------

window.addEventListener("load",()=>{

const loader=document.querySelector(".loader");

if(loader){

loader.style.opacity="0";

setTimeout(()=>{

loader.remove();

},600);

}

});



// ---------- Scroll Progress ----------

const progress=document.createElement("div");

progress.className="progress-bar";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

const height=

document.documentElement.scrollHeight-

window.innerHeight;

const percent=(window.scrollY/height)*100;

progress.style.width=percent+"%";

});



// ---------- Mouse Glow ----------

const glow=document.createElement("div");

glow.className="cursor-glow";

document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

});



// ---------- Navbar Shadow ----------

const nav=document.querySelector(".nav");

window.addEventListener("scroll",()=>{

if(window.scrollY>60){

nav.classList.add("visible");

}

else{

nav.classList.remove("visible");

}

});

/* =====================================
   CUBIC GENESIS PORTFOLIO
   PREMIUM SCRIPT
   PART 2
===================================== */

// ---------- Typing Effect ----------

const typing = document.querySelector(".hero-sub");

const words = [

"Full Stack Developer",

"Python Developer",

"AI Engineer",

"UI/UX Designer",

"Cyber Security Learner"

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect(){

if(!typing) return;

let current = words[wordIndex];

if(!deleting){

typing.textContent =
current.substring(0,charIndex++);

if(charIndex > current.length){

deleting = true;

setTimeout(typeEffect,1200);

return;

}

}else{

typing.textContent =
current.substring(0,charIndex--);

if(charIndex < 0){

deleting = false;

wordIndex++;

if(wordIndex>=words.length){

wordIndex=0;

}

}

}

setTimeout(typeEffect,deleting?40:90);

}

typeEffect();



// ---------- Reveal Animation ----------

const reveals = document.querySelectorAll(

".reveal,.sk-card,.proj-card,.exp-card,.edu-card,.cert-card"

);

const revealObserver =

new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("visible");

}

});

},{

threshold:0.15

});

reveals.forEach(item=>{

revealObserver.observe(item);

});



// ---------- Smooth Scroll ----------

document.querySelectorAll(

'a[href^="#"]'

).forEach(link=>{

link.addEventListener("click",e=>{

e.preventDefault();

const target=

document.querySelector(

link.getAttribute("href")

);

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});



// ---------- Mobile Menu ----------

const hamburger =

document.querySelector(".hamburger");

const drawer =

document.querySelector(".drawer");

const closeBtn =

document.querySelector(".drawer-x");

if(hamburger && drawer){

hamburger.onclick=()=>{

drawer.classList.add("open");

};

}

if(closeBtn){

closeBtn.onclick=()=>{

drawer.classList.remove("open");

};

}

document.querySelectorAll(".drawer a")

.forEach(link=>{

link.onclick=()=>{

drawer.classList.remove("open");

};

});


/* =====================================
   CUBIC GENESIS PORTFOLIO
   PREMIUM SCRIPT
   PART 3
===================================== */

// ---------- Floating Particles ----------

const hero = document.querySelector(".hero");

if(hero){

for(let i=0;i<35;i++){

const p=document.createElement("span");

p.className="particle";

p.style.left=Math.random()*100+"%";

p.style.top=Math.random()*100+"%";

p.style.animationDuration=

(6+Math.random()*8)+"s";

p.style.animationDelay=

Math.random()*5+"s";

hero.appendChild(p);

}

}



// ---------- Counter Animation ----------

const counters=

document.querySelectorAll(".kpi-n");

const counterObserver=

new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(!entry.isIntersecting) return;

const counter=entry.target;

const target=

parseInt(counter.innerText);

let value=0;

const speed=Math.ceil(target/60);

const update=()=>{

value+=speed;

if(value>=target){

counter.innerText=target+"+";

}

else{

counter.innerText=value+"+";

requestAnimationFrame(update);

}

};

update();

counterObserver.unobserve(counter);

});

});

counters.forEach(counter=>{

counterObserver.observe(counter);

});



// ---------- Hero Parallax ----------

window.addEventListener("mousemove",(e)=>{

const x=(e.clientX/window.innerWidth-.5)*20;

const y=(e.clientY/window.innerHeight-.5)*20;

const avatar=

document.querySelector(".avatar-wrap");

if(avatar){

avatar.style.transform=

`translate(${x}px,${y}px)`;

}

});



// ---------- 3D Project Cards ----------

document.querySelectorAll(".proj-card")

.forEach(card=>{

card.addEventListener("mousemove",e=>{

const rect=

card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rx=(y-rect.height/2)/10;

const ry=(rect.width/2-x)/10;

card.style.transform=

`perspective(900px)

rotateX(${rx}deg)

rotateY(${ry}deg)

translateY(-10px)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform=

"perspective(900px) rotateX(0) rotateY(0)";

});

});

/* =====================================
   CUBIC GENESIS PORTFOLIO
   PREMIUM SCRIPT
   PART 4
===================================== */

// ---------- Scroll To Top ----------

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.className = "top-btn";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.classList.add("show");

}else{

topBtn.classList.remove("show");

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};



// ---------- Active Navigation ----------

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-120;

if(window.scrollY>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});



// ---------- Contact Form ----------

const form=document.querySelector("#contact-form");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

const inputs=form.querySelectorAll(

"input,textarea"

);

let valid=true;

inputs.forEach(input=>{

if(input.value.trim()===""){

valid=false;

input.style.borderColor="#ff2e4d";

}else{

input.style.borderColor="";

}

});

if(valid){

alert("Message Sent Successfully!");

form.reset();

}

});

}



// ---------- Fade In ----------

document.body.style.opacity="0";

window.addEventListener("load",()=>{

document.body.style.transition="opacity .8s";

document.body.style.opacity="1";

});



// ---------- Console Message ----------

console.log(

"%cCubic Genesis Portfolio",

"color:#ff2e4d;font-size:22px;font-weight:bold;"

);

console.log(

"%cDesigned by Muneeb",

"color:white;font-size:14px;"

);

