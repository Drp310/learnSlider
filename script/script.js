let a = document.querySelector('.pictures');
let next_button = document.querySelector('.next')
let prew_button = document.querySelector('.prew')
let position = 0
let input = document.querySelector('input')
let  thumb = document.querySelector('.thumb')
let bar = document.querySelector('.bar')
next_button.addEventListener('click',()=>{
    position = (position - 256)%1024;
    a.style.left = position + 'px';
    

})
prew_button.addEventListener('click',()=>{
    position = (position + 256)%1024;
    if(position>0){
        position=0;
    }
    a.style.left = position + 'px';

})
// input.addEventListener('input',()=>{
//      if(input.value>30 && input.value<70){
//          input.value = 50;
//      }
//      if(input.value>70){
//          input.value=100;
//      }  
//      if(input.value<=30){
//          input.value=0;
//      }
//  })
let value = input.value
input.oninput = () => {
    let value = input.value
    thumb.style.left = value + '%'
    bar.style.width = value + '%'
    

   
}
input.onchange = () => {
     if(input.value>30 && input.value<70){
         input.value = 50;
         thumb.style.left = input.value + '%'
         bar.style.width = '50%'
         a.style.left = '-256px'

     }
     if(input.value>70){
        input.value =100;
         thumb.style.left = input.value + '%'
         a.style.left = '-512px'
         bar.style.width = '100%'
     }  
     if(input.value<=30){
        bar.style.width = '0%'
        input.value = 0;
         thumb.style.left = input.value + '%'
         a.style.left = '0px'
     }
}