/* accordion list :é uma lista  de itens empilhada verticalmente , que ao ser clicada , revela ou oculta um conteudo associado a cada elemento desta lista 

#usa-se o evento de click em cada item que vai ser relacionado ao seu conteúdo.
*/
export default function initAccordion(){
     const accordionList = document.querySelectorAll("[data-accordion='accordion'] dt");
        


     accordionList.forEach(itemDt => {
         itemDt.addEventListener("mousemove", ()=>itemDt.style.cursor="pointer");
         itemDt.addEventListener("click", accordion);
     })

     function accordion(){
          this.classList.toggle('ativo')
          this.nextElementSibling.classList.toggle('ativo');
          /* metodo nextelementsibling : retorna o conteudo html do proximo irmao  */

     }
     accordionList[0].classList.toggle('ativo');
        accordionList[0].nextElementSibling.classList.toggle('ativo');


}