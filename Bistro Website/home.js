var i=0;
var timg=document.getElementById('main');
var spcl=document.getElementById('spp');

function sys(){
    if(i%2===0){
        timg.src="1.jpg";
        spcl.innerHTML="TAST OF GOODNESS";
    }
    else{
        timg.src="2.jpg";
        spcl.innerHTML="Best Time-out";
    }
    i++;
}
setInterval(sys,2000);

const very=document.getElementById('very');
window.onscroll=function(){
    scrollFunction()
};
function scrollFunction(){
    const scrollHeight=document.documentElement.scrollHeight-document.documentElement.clientHeight;
    if((document.body.scrollTop>scrollHeight*0.3)||(document.documentElement.scrollTop>scrollHeight*0.3)){
        very.style.display="block";
    }
    else{
        very.style.display="none";
    }
}

very.addEventListener('click',function(){
    window.scrollTo({top:0,behavior:"smooth"});
});

function toggleMenu(){
    const navMenu = document.getElementById('navlist');
    navMenu.style.display="block";
}