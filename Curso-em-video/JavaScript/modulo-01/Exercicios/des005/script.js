function contar(){
    var cumb=document.getElementById('cumbustivel').value
    var litrostext=document.getElementById('litros')
    var res=document.getElementById('resp')
    var lt=Number(litrostext.value)
    var g=6.57
    var a=6
    res.innerHTML=''
    res.style.padding='10px'

    if(cumb === 'G' || cumb === 'g' ){
        if(litrostext.value.length ==0){
            window.alert('[Voce não digitou os lts...]')
        }else{
            res.innerHTML=`Voce pediu ${lt} litros de Gasolina comun custou <strong>R$ ${g*lt}</strong>`
        }  
    }else if(cumb == 'a' || cumb == 'A'){
        if(litrostext.value.length==0){
            window.alert('[Voce não digitou os lts...]')
        }else{
            res.innerHTML=`Voce pediu ${lt} litros de Etanoll custou <strong>R$ ${lt*a}</strong>`
        }
    }else{
        window.alert('[Prencha os dados..]')
    }
}