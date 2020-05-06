let amigo = {nome: 'jose',
sexo: 'm',
peso: 87.8,
engordar(p = 1){
    console.log(`Engordou`)
    this.peso += p
}
}
amigo.engordar()
console.log(amigo)