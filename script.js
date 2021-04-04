document.querySelector(".next").addEventListener("click",nextcarousel)
document.querySelector(".prev").addEventListener("click",prevcarousel)
document.querySelector(".menu").addEventListener("click",function(){
    document.querySelector(".menuopen").style.display="block"
})
document.querySelector(".close").addEventListener("click",function(){
    document.querySelector(".menuopen").style.display="none"
})
const slidesarr=document.querySelectorAll(".eachslide")
var i=0;
function nextcarousel()
{
    slidesarr[i].classList.remove("active")
    if(i==2)
    i=-1
    slidesarr[++i].classList.add("active")
    if(screen.width>800)
    document.querySelector(".heroimage").style.background="urL(images/desktop-image-hero-"+(i+1)+".jpg)";
    else
    document.querySelector(".heroimage").style.background="urL(images/mobile-image-hero-"+(i+1)+".jpg)";
}
function prevcarousel()
{
    slidesarr[i].classList.remove("active")
    if(i==0)
    i=3
    slidesarr[--i].classList.add("active")
    if(screen.width>800)
    document.querySelector(".heroimage").style.background="urL(images/desktop-image-hero-"+(i+1)+".jpg)";
    else
    document.querySelector(".heroimage").style.background="urL(images/mobile-image-hero-"+(i+1)+".jpg)";
}
