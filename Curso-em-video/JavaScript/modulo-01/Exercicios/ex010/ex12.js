let test=[3,2,0,6,7,9]

/*
for(let pos=0;pos<test.length;pos++){
    console.log(`posicão ${pos} tem o numero ${test[pos]}`)
}
*/
test.sort()
for(let pos in test){
    console.log(`posicão ${pos} tem o numero ${test[pos]}`)
    
}
//Acima estar um tipo de for mais resumido para array

let pesquisa=test.indexOf(3)
console.log('o numero 3 estar  na posição '+ pesquisa)
let pes=test.indexOf(10)
console.log('o numero 3 estar  na posição '+ pes)

//o codigo acima serve para achar o numero desejado para pesquisar no array se o valor for igual a -1 ele não tem no seu array n foi encotrado
 