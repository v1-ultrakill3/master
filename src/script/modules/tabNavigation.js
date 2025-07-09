 


export default function initTab(){
  const animais=document.querySelectorAll("[data-tab='animais']>li")
  const description = document.querySelectorAll("[data-tab='description']>section")

  animais.forEach((itemli, indice)=>{

    itemli.addEventListener('click',()=>{
       ativarTab(indice);

    })

  })
  function ativarTab(indice){
    
    description.forEach((itemSection)=>{
      itemSection.classList.remove("ativo");

      
    })
    description[indice].classList.add("ativo");

  }
   description[0].classList.add("ativo")
}
/* navegaçao por tabs: é quando temos um item ou objeto se relacionando entre si , fazendo conexão com os conteúdos  
 OBS:o conteudo tem que esta organizado na mesma ordem 
*/
