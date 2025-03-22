let email=document.querySelector('#email')
let senha=document.querySelector('#senha')
let res=document.querySelector('#res')

let contas = [ ]
let dados=[]




function criar(){
    if(email.value.length == 0 || senha.value.length == 0 ){
        window.alert('[Erro]')
    }else{
        contas.push(email.value, senha.value)
        for (let pos in contas){
            res.innerHTML+=contas[0]
        }
            

        }
        
}



function login(){
    if(email.value.length == 0 || senha.value.length == 0 ){
        window.alert('[Erro]')
    }

}