function verificar(){
    var data= new Date()
    var ano=  data.getFullYear()
    var anodous= window.document.getElementById('txtano')
    var res= window.document.getElementById('res')
    var img=document.createElement('img')
    //acima criei uma variavel img
    img.setAttribute('id','foto')
    //criei um id pra essa vareavel chamada foto
    if(anodous.value.length  == 0 || anodous.value > ano){
        window.alert('[ERRO] no ano desejado...')
    }else{
        var sexo=window.document.getElementsByName('sex')
        var idade= ano- Number(anodous.value)
        var genero=' '
        if(sexo[0].checked){
            var genero='Homen'
            if(idade>=0 && idade<18){
                //Criança
                img.setAttribute('src','img/cm.jpg')
            }else if(idade<40){
                //jovem
                img.setAttribute('src','img/jm.png')
            }else{
                //idoso
                img.setAttribute('src','img/im.jpg')
            }
        }else if(sexo[1].checked){
            var genero='Mulher'
            if(idade>=0 && idade<18){
                //Criança
                img.setAttribute('src','img/cf.jpg')
            }else if(idade<40){
                //jovem
                img.setAttribute('src','img/jf.jpg')
            }else{
                //idoso
                img.setAttribute('src','img/if.jpg')
            }
        }res.innerHTML=`Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
    
}