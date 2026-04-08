const toggle = document.getElementById("themeToggle")

toggle.addEventListener("change", () => {

if(toggle.checked){
document.body.style.background="#fff"
document.body.style.color="#000"
}
else{
document.body.style.background="#000"
document.body.style.color="#fff"
}

})
const scrollBtn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};

scrollBtn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};
const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove",(e)=>{

glow.style.left = e.clientX + "px";
glow.style.top = e.clientY + "px";

});

const ctx = document.getElementById('placementChart');

new Chart(ctx, {
type: 'bar',
data: {
labels: ['IEM', 'HIT', 'Heritage', 'Techno'],
datasets: [{
label: 'Placement %',
data: [92, 85, 88, 80],
backgroundColor: [
'#2b6df5',
'#4f8cff',
'#7aa8ff',
'#a3c2ff'
],
borderRadius: 8
}]
},
options: {
plugins: {
legend: { display:false }
},
scales: {
y: {
beginAtZero:true,
grid:{color:'#222'}
},
x:{
grid:{display:false}
}
}
}
});


//msg
(function(){
emailjs.init("ZKUCouqCa72Znwl6T");
})();
document.querySelector("form").addEventListener("submit", function(e){

e.preventDefault();

emailjs.sendForm(
"service_g8zorro",
"template_6qwcwtf",
this
).then(function(){

alert("Message Sent Successfully!");

}, function(error){

alert("Failed to send message");

});

});

//article page js 
const elements = document.querySelectorAll("p, h2");

window.addEventListener("scroll", () => {

elements.forEach(el => {

const position = el.getBoundingClientRect().top;
const screen = window.innerHeight;

if(position < screen - 100){
el.style.opacity = "1";
el.style.transform = "translateY(0)";
}
});
});

//scroll
window.addEventListener("scroll", () => {

const scrollTop = window.scrollY;
const docHeight = document.body.scrollHeight - window.innerHeight;

const progress = (scrollTop / docHeight) * 100;

document.querySelector(".scroll-progress").style.height = progress + "%";

});

