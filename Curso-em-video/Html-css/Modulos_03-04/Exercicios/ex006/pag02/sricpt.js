        var m1text=document.getElementById('m1')
        var m2text=document.getElementById('m2')
        var rm=document.getElementById('resm')

        var f1text=document.getElementById('f1')
        var f2text=document.getElementById('f2')
        var rf=document.getElementById('resf')

        var q1text=document.getElementById('q1')
        var q2text=document.getElementById('q2')
        var rq=document.getElementById('resq')

        var b1text=document.getElementById('b1')
        var b2text=document.getElementById('b2')
        var rb=document.getElementById('resb')
        var totalexat=document.getElementById('totalexatas')

        var p1text=document.getElementById('p1')
        var p2text=document.getElementById('p2')
        var rp=document.getElementById('resp')

        var h1text=document.getElementById('h1')
        var h2text=document.getElementById('h2')
        var rh=document.getElementById('resh')

        var totalhumanas=document.getElementById('totalhumanas')


        
        function resultado(){

            if([m1text,m2text,f1text,f2text,q1text,q2text,b1text,b2text,p1text,p2text,h1text,h2text].some(input => input.value.length===0)  ){
                window.alert('ERRO')
            }else{
                var m1=Number(m1text.value)
                var m2=Number(m2text.value)
                let m = (m1+m2)/2

                rm.innerHTML= m

            
                var f1=Number(f1text.value)
                var f2=Number(f2text.value)

                let f=(f1+f2)/2

                rf.innerHTML=f

                var q1=Number(q1text.value)
                var q2=Number(q2text.value)
                let q= (q1+q2)/2
                rq.innerHTML=q

                

                var b1=Number(b1text.value)
                var b2=Number(b2text.value)
                let b= (b1+b2)/2
                rb.innerHTML=b            

                totalexat.innerHTML=(m+f+q+b)/4


                var p1=Number(p1text.value)
                var p2=Number(p2text.value)
                let p= (p1+p2)/2
                rp.innerHTML= p
                var h1=Number(h1text.value)
                var h2=Number(h2text.value)
                let h= (h1+h2)/2
                rh.innerHTML=h

                totalhumanas.innerHTML=(p+h)/2

            }

            
        }