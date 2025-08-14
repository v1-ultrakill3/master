export default function initSlide(){

    let slideAtivo=0;
    const slides=document.querySelector('[data-slides="slides"]');
    const dots=document.querySelectorAll('[data-dots="dots"] div');
    const prevButton=document.querySelector('.arrow.preview');
    const nextButton=document.querySelector('.arrow.next');

   prevButton.addEventListener('click',()=> mudarSlide(-1));
   nextButton.addEventListener('click',()=> mudarSlide(1));

   function updateSlide(){
    slides.style.transform=`translateX(-${slideAtivo*100}%)`
    dots.forEach((itemDot, indice)=>{
        itemDot.classList.toggle('ativo', indice === slideAtivo);
    })
   }


   function mudarSlide(direction){
    const total=document.querySelectorAll('[data-slides="slides"] div').length;
    slideAtivo=(slideAtivo+ direction+total)% total;
    updateSlide();


   }
   

   /* auto-slide */
   setInterval(()=>{
    const total=document.querySelectorAll('[data-slides="slides"] div').length;
    slideAtivo=(slideAtivo+1+total)% total;
    updateSlide();


   },3000)


}


