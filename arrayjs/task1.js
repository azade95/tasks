// Verilmis ededler siyahisindaki 3-e bolunen ededlerin ededi oratsini tapan alqoritm

let numbers=[23,87,45,34,16,78];
let sum=0;
let counter=0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i]%3==0) {
        sum+=numbers[i]
       counter++;
    }
   
    
}

console.log(sum/counter);