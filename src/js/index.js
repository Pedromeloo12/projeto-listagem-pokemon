const botaoAlterarTema = document.getElementById("bt-alterar-tema") 

const body = document.querySelector("body") 

const imagemTrocarTema = document.querySelector(".bt-sun")  

botaoAlterarTema.addEventListener("click", () => {    

    const ModoEscuroAtivo = body.classList.contains("modo-escuro") 

    if(ModoEscuroAtivo) {  
        body.classList.remove("modo-escuro") 

        imagemTrocarTema.setAttribute("src", "./img/sun.png") 
    } else {
        body.classList.add("modo-escuro")     

        imagemTrocarTema.setAttribute("src", "./img/moon.png")  

    }})