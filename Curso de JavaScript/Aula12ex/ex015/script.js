function verificar(){   
    var data = new Date()
    var ano = data.getFullYear()
    var formAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')


    if(formAno.value.length == 0 || formAno.value > ano){
        window.alert("[Erro]----------- Verifique os dados e tente novamente")
    }else{
        var formSex = document.getElementsByName('radsex')
        var idade = ano - Number(formAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(formSex[0].checked ){
            genero = 'Homem'
            
            if(idade >= 0 && idade < 10){
                //Menino
                img.setAttribute('src', 'criançamenino.png')
                
            }else if(idade < 21){
                //Jovem Masculino
                img.setAttribute('src', 'homemjovem.png')
            }else if(idade < 40){
                //Homem
                img.setAttribute('src', 'homem.png')
            }else if(idade < 60){
                //Homem maduro
                img.setAttribute('src', 'homemmeiaidade.png')
            }else{
                //Idoso
                img.setAttribute('src', 'homemidoso.png')
            }
    
        }else if(formSex[1].checked){
            genero = 'Mulher'
            
            if(idade >= 0 && idade < 10){
                //Menina
                img.setAttribute('src', 'criançamenina.png')
            }else if(idade < 21){
                //Jovem Feminina
                img.setAttribute('src', 'mulherjovem.png')
            }else if(idade < 40){
                //Mulher
                img.setAttribute('src', 'mulher.png')
            }else if(idade < 60){
                //Mulher madura
                img.setAttribute('src', 'mulhermeiaidade.png')
            }else{
                //Idosa
                img.setAttribute('src', 'mulheridosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com idade ${idade} anos`
        res.appendChild(img)
    }


}