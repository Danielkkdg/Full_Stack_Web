function contar(){
    var ntext=document.getElementById('num')
    var r=document.getElementById('slc')
    if (ntext.value.length==0){
        window.alert('[ERRO]')
    }else{
        var n=Number(ntext.value)
        let c=1
        r.innerHTML=''
        //esse codigo acima serve para limpar os item da select
        while(c<=10){
            let item=document.createElement('option')
            //opition e uma forma de colocar valor nas select
            item.text=`${n} x ${c} = ${n*c}`
            item.value=`r${c}`
            item.style.padding='5px'
            r.appendChild(item)
            //appendchild ta acresentando item para select
            c++

        }
    }
    
    
    
}