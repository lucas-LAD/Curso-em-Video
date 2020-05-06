function contar(){
    var n1In = window.document.querySelector('input#numbox')
    var n2In = window.document.querySelector('input#numbox1')
    var n3In = window.document.querySelector('input#numbox2')
    var n1 = Number(n1In.value)
    var n2 = Number(n2In.value)
    var n3 = Number(n3In.value)

    var res = document.querySelector('div#res')
    res.innerHTML = ""  
    
    if(n1In.value.length == 0 || n2In.value.length == 0 || n3In.value.length == 0){
        window.alert('[Erro] Dados não Inseridos')
    }else{
        if(n3 == 0){
            window.alert(`Passo invalido será adotado 1`)
            
            for(var n1for = n1; n1for <= n2; n1for += 1){
                res.innerHTML += `    &#128073 ${n1for}`
            }
        }else if(n2 <= n1 && n3 > 0 && n1 > 0 && n2 > 0){
            for(var n1for = n1; n1for >= n2; n1for -= n3){
                res.innerHTML += `    &#128073 ${n1for}`
            }
        }else if((n2 >= n1 && n3 < 0) || (n2 < n1 && n3 > 0 && n2 < 0 && n1 < 0) ){
            window.alert(`>-------> Passo invalido >-------> Tente Novamente`)
            
        }else if(n1 >= n2 && n3 < 0){
            for(var n1for = n1; n1for >= n2; n1for += n3){
                res.innerHTML += `    &#128073 ${n1for}`
            }
        }
        else{
            for(var n1for = n1; n1for <= n2; n1for += n3){
                res.innerHTML += `    &#128073 ${n1for}`
            }
        }
     
    }
       
}