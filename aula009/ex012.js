var agora = new Date()
var hora = agora.getDate()
console.log(`Agora são exatamente ${hora} hora.`)
if(hora < 13){
    console.log('Bom dia!')
}else if(hora >= 13){
    console.log('Boa tarde')
}else{
    console.log('Boa noite!')
}