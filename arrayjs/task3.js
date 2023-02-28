//Vermilmis ededler siyahisindaki en boyuk eded ve en kicik ededin ededi ortasini tapan alqoritm

let numbers=[58,19,8,84,67,77,23,90];
let min=numbers[0];
let max=numbers[0];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i]<min) {
    min=numbers[i]
    
  }

 
  
      if (numbers[i]>max) {
          max=numbers[i]
        }
  
 
}
console.log((max+min)/2);

