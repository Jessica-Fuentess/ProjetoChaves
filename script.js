function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let anoNasc = document.getElementById("ano")
    let resultado = document.querySelector("#resultado")

    if (anoNasc.value.length == 0|| anoNasc.value > ano){
        window.alert ("[ERRO] Verifique os dados preenchidos e tente novamente!!")
    } else {
        let genero = document.getElementsByName ("genero")
        let idade = ano - Number(anoNasc.value)
        let gen = ""
        let imagem = document.querySelector ("img")    
        if (genero[1].checked){
            gen = "Homem"
            if (idade <= 35){
                imagem.src = "imagens/chaves.png"
                resultado.innerHTML = `Você tem ${idade} anos, é ${gen} e você seria o personagem Chaves`
            } else if (idade <= 45){
                imagem.src = "imagens/quico.png"
                resultado.innerHTML = `Você tem ${idade} anos, é ${gen} e você seria o personagem Quico`
            } else if (idade <= 60){
                imagem.src = "imagens/seumadruga.png"
                resultado.innerHTML = `Você tem ${idade} anos, é ${gen} e você seria o personagem Seu Madruga`
            } else {
                imagem.src = "imagens/jaiminho.png"
                resultado.innerHTML = `Você tem ${idade} anos, é ${gen} e você seria o personagem Sr. Jaiminho`
            }
        } else {
            gen = "Mulher"
            if (idade <= 35){
                imagem.src = "imagens/chiquinha.png"
                resultado.innerHTML = `Você tem ${idade} anos, é ${gen} e você seria a personagem Chiquinha`
            } else if (idade <= 45){
                imagem.src = "imagens/pops.png"
                resultado.innerHTML = `Você tem ${idade} anos, é ${gen} e você seria a personagem Pops`
            } else if (idade <= 60){
                imagem.src = "imagens/donaflorinda.png"
                resultado.innerHTML = `Você tem ${idade} anos, é ${gen} e você seria a personagem Dona Florinda`
            } else {
                imagem.src = "imagens/donaclotilde.png"
                resultado.innerHTML = `Você tem ${idade} anos, é ${gen} e você seria a personagem Dona Clotilde`
            }
        }
        resultado.style.textAlign = "center"
        resultado.appendChild(imagem)
    }
}