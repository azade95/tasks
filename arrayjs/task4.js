 //Verilmis adlar siyahisindaki adi 'A' herfi ile baslayanlarin sayini tapan alqoritm

 let names=["Aqil", "Cemil","Ferid","Anar","Arzu"] 
 let counter=0;

 for (let i = 0; i < names.length; i++) {
    if (names[i][0]=="A") {
        counter++;
    }
    
 }

 console.log(counter);