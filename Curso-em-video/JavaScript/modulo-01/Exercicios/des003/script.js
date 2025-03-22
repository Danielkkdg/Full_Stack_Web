function contar(){
    var i=document.getElementById('inicio')
    var f=document.getElementById('fim')
    var p=document.getElementById('passo')
    var res=document.getElementById('resp')
    if(i.value.length==0 || f.value.length==0 || p.value.length==0 ){
        window.alert('ERRO')
    }else{
        res.innerHTML='Contando: <br>'
        var ii=Number(i.value)
        var ff=Number(f.value)
        var pp=Number(p.value)
        if(pp==0){
            res.innerHTML=' Se o passo estiver igual a 0 vai valer por 1  <br> '
            pp=1
            
        }
        if(ii<ff){
            for(ii;ii<=ff;ii+=pp){
                res.innerHTML += `${ii} \u{1f449}`
            }
            
        }else{
            for(ii;ii>=ff;ii-=pp){
                res.innerHTML += `${ii} \u{1f449}`
            }
            
        }
    
    }
    
}

