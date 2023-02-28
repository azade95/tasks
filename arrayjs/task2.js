// Verilmis ededler siyahisinda reqemlerinin sayi 2-den boyuk olan ededlerin cemini tapan alqoritm

let numbers=[2, 6, 90,76,32,875,9948];
let sum=0;

for (let i = 0; i < numbers.length; i++) {
   if (numbers[i]>99) {
    sum+=numbers[i]
   }
    
}

console.log(sum);