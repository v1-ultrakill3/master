export default initToolTip();{

    const tag_ancora = document.querySelectorAll('[data-toolTip]');

    tag_ancora.forEach(itemAncora =>{
        itemAncora.addEventListener('mouseenter', placa_titulo );
        itemAncora.addEventListener('mousemover', placa_movimento);
        itemAncora.addEventListener('mouseLeave', placa_sair);
    })

    function placa_titulo(e){
        const elemento = e.currentTarget;  //metodo que referencia o elemento que recebeu o evento
        const elementotexto = elemento.getAttribute('arial-label');

    //validaçao caso o texto nao apareça 
    if(!elementotexto){ 
        return;

    }
    if(elementotexto){
     const toolTip = document.createElement('div');
     toolTip.className = "tool_tip";
     toolTip.innerText = elementotexto;
     
     document.body.appendChild(toolTip);
     elemento.varGuardar = toolTip;

    }
}
    function placa_movimento(e){
        const toolTip =e.currentTarget.varGuardar;

        if(toolTip){
            toolTip.Style.top = `${e.pageY +10}px`;
            toolTip.Style.left =`${e.pagex =10}px`;
        }
    }
    function placa_sair(e){
        const toolTip =e.currentTarget.varGuardar;

        if(toolTip){
           toolTip.remove();
           delete e.currentTarget.varGuardar;
        }
    }



    }
