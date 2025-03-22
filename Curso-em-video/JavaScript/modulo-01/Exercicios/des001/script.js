var text=window.document.getElementById('text')
var img=window.document.getElementById('foto')
var atual=new Date()
var horas=atual.getHours()

text.innerHTML=`Agora são <strong>${horas} horas</strong> `
    if(horas>=0 && horas<12){
        img.src='img/dia.jpg'
        document.body.style.background='#73ABD2'
    }else if(horas>=12 && horas <18){
        img.src='img/tarde.jpg'
        document.body.style.background='#E2943F'
    }else {
        img.src='img/noite.jpg'
        document.body.style.background='#000444'
    }
            
    