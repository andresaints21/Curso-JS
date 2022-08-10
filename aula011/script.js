function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res') // somente para variar usar query
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked){
            genero = 'Masculino'
            if(idade >= 0 && idade <10){
                // Criança
                img.setAttribute('src', 'img/h_crianca.png')
            }else if(idade <21){
                //Jovem
                img.setAttribute('src', 'img/h_jovem.png')
            }else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'img/h_adulto.png')
            }else{
                //Idoso
                img.setAttribute('src', 'img/h_velho.png')
            }
        } else if (fsex[1].checked){
            genero = 'Feminino'
            if(idade >= 0 && idade <10){
                // Criança
                img.setAttribute('src', 'img/m_crianca.png')
            }else if(idade <21){
                //Jovem
                img.setAttribute('src', 'img/m_jovem.png')
            }else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'img/m_adulta.png')
            }else{
                //Idoso
                img.setAttribute('src', 'img/m_velha.png')
            }
        }
        res.style.textAlign = 'Center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)

    }
}


