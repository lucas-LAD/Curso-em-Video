let valores = [0, 30 , 90 ,75]
valores.sort()
valores.push(456)




for(let pos in valores){
    console.log(`Valor na posição ${pos} é ${valores[pos]} e o tamanho é = ${valores.length}`)
}
let hj = valores.indexOf(4)
console.log(hj)


