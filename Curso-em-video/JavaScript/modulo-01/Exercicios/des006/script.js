let numtxt=document.getElementById('numtxt')
let lis=document.getElementById('list')
let res=document.querySelector('div#res')
let valores = []

function vernum(n){

    if (Number(n) >=1 && Number(n) <=100){
        return true
    }else{
        return false
    }
}

function verlist(n,l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }

}




function adicionar(){
    if(vernum(numtxt.value) && !verlist (numtxt.value ,valores) ){
        valores.push(Number(numtxt.value))
        let item = document.createElement('option')
        item.text=(`Numero ${numtxt.value}`)
        lis.appendChild(item)
        res.innerHTML=''
        


    }else{
        window.alert('[ERRO]')
    }
    numtxt.value=''
    // acima serve para apagar oq tinha sido digitado
    numtxt.focus()
    // o comando acima serve para piscar indicando que ja pode digitar dnv
    
}


function resultado(){
    if(valores.length == 0){
        window.alert('[ERRO]')
    }else {
        let maior = valores[0]
        let menor = valores[0]
        let soma=0 
        for (let pos in valores){
            if(valores[pos] > maior){
                maior=valores[pos]
            }
            if(valores[pos] < menor){
                menor=valores[pos]
            }
            soma+=valores[pos]
        }
        let media= soma/valores.length
        
        
        

        res.innerHTML=`<p>Foram adicionados ${valores.length} numeros...</p>`
        res.innerHTML+=`<p> O maior numero e ${maior} ... </p>`
        res.innerHTML+=`<p> O menor numero e ${menor} ...</p>`
        res.innerHTML+=`<p> A soma dos valores deu ${soma} ...</p>`
        res.innerHTML+=`<p> A media dos valores e ${media} ...</p>`
    }

}