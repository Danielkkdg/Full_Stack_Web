function parimpa(n){
    if (n%2==0){
        return 'par'
    }else{
        return 'impar'
    }
}
let res=parimpa(28)
console.log(res)

function somar(n1=0,n2=0,n=0){
    //nesse caso o =0 server para indicar msm que não tenha os paramentros desejados ele seja igual a zero para não da erro, caso n tenha 2 paramentros
    return n1+n2
}
console.log(somar(2,8))
//paramentros e oq estar dentro da funçao no caso acima e o 2 

//tem como fazer uma função dentro de uma vareavel