function carregar() { 
    var msg = window.document.getElementById('msg')
    var foto = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours( )
    var hora = 21
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {

        foto.innerHTML = ('<img src = "manha.png">')

    } else if( hora >= 12 && hora < 18) {

        foto.innerHTML = ('<img src = "tarde.png">')

    } else {

        foto.innerHTML = ('<img src = "noite.png">')
    }

}



