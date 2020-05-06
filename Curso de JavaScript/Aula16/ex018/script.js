var nInput = document.getElementById('numtext')
var selectOut = document.getElementById('tabela')
var res = document.getElementById('res')
var nQuant=[]
var fim = 'off'

function inLista(n, l){
    if(l.indexOf(n) != -1){
        return true
    }else{
        return false
    }
}
function adcionar(){
    
    var num = Number(nInput.value)
    
    if(num > 100 || num <= 0){
        alert('Digite um valor entre 1 e 100' + `${num}`)
    }else if(inLista(num, nQuant)){
            alert('Numero ja Inserido Insira outro numero')
            return
    }else if(!inLista(num, nQuant)){
        nQuant.push(num)
        var opcoes = document.createElement('option')
        opcoes.value = `tab${nQuant.indexOf(num)}`
        opcoes.text = `Adcionado numero ${num}`
        selectOut.appendChild(opcoes)
        
    }    
        
    nInput.value = ''
    nInput.focus()
}
function finalizar(){
    var soma = 0
    if(nQuant[0] == null){
        alert('Insira valores para poder finalizar')
        return
    }
    for(var n in nQuant){
        for(var i in nQuant){
            if(nQuant[n] == nQuant[i] && n != i){
                nQuant.splice(nQuant[i], 1)
            }
        }
        soma += nQuant[n]
    }
    /*for(var k in nQuant){
        soma += nQuant[k]
    }*/

    nQuant.sort();
    res.innerHTML = `Quantidade de Itens Cadastrados ${selectOut.length}</br>`
    res.innerHTML += `O maior valor encontrado foi ${nQuant[nQuant.length-1]}</br>`
    res.innerHTML += `O menor valor encontrado foi ${nQuant[0]}</br>`
    res.innerHTML += `A soma de todos os valores é ${soma} --- ${nQuant}</br>`
    res.innerHTML += `A média dos valores digitados é ${soma/(nQuant.length)}</br>`

    selectOut.innerHTML = ''
    
    nInput.value = ''
    nInput.focus()
        
}