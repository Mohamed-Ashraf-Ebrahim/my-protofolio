let home=document.getElementById('home')
let edu=document.getElementById('education')
let con=document.getElementById('Contact')
let y=document.getElementById('y')
let x=document.getElementById('x')
let z=document.getElementById('z')
y.onclick=function(){
    home.classList.add('hide')
   console.log('y')
edu.style.display="block"
home.style.display="none"
 con.style.display="none"
 y.style.color=" rgb(43, 186, 222);"


}
x.onclick=function(){
    home.classList.add('hide')
   console.log('x')
   edu.style.display="none"
   home.style.display=""
   con.style.display="none"


}
z.onclick=function(){
    home.classList.add('hide')
   console.log('z')
   edu.style.display="none"
   home.style.display="none"
   con.style.display="block"
 
  
}
let bb=document.getElementById('ss')
onscroll=function(){
    if(scrollY >50){
        bb.style.display='block'
    }
    else{
        bb.style.display='none'   
    }
}
bb.onclick=function(){
    scroll({
        left:0,
        top:0,
        behavior:"smooth"
    });   
}
