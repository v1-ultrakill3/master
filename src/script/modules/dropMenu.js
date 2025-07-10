export default function initDropMenu(){

    const dropMenu = document.querySelectorAll("[data-dropMenu='menuDrop']")
    const clickfora =document.querySelector('body');


    dropMenu.forEach(itemLi =>{
        ["click","touchstart"].forEach(itemEvents =>{
            itemLi.addEventListener(itemEvents,clickDrop);

        })
    })

    function clickDrop(event){
        event.preventDefault();
        this.classList.toggle('ativo');



        clickfora.addEventListener("mousedown",()=>{
            this.classList.remove('ativo');
        })

    }


}