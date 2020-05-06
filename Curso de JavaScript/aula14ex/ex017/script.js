function gerarTabuada(){
    var selectOut = document.querySelector('select#tabuada')
    var inputValue = document.querySelector('input#numtext')
    var n = Number(inputValue.value)
    

    if(inputValue.value.length == 0 ){
        alert('[ERRO] Digite um valor valido ')
    }else{
        var optiont = document.createElement('option')
        
        selectOut.innerHTML = ''
        for(var c = 1; c <= 10; ++c){
            var optiont = document.createElement('option')  
            optiont.value = `tab${c}` // Utilizar sempre quando tiver interação com PHP --> Corresponde a o Id no JavaScript
            optiont.text = `${n} x ${c} = ${n*c}`
            selectOut.appendChild(optiont)
        }
    }
}