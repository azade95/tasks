//3. Verilmiş artan sıra ilə düzülmüş ədədlər siyahısındaki n ədədinin yerləşdiyi indexi tapan alqoritm (binary search)
 
let arr=[1,3,4,6,9,13,17,19]
let target= 9;

for (let i = 0; i < arr.length; i++) {
    if(target<arr[i/2]){
        for (let j = 0; j < arr.length/2; j++) {
            if (target==arr[j]) {
                console.log(j);
                break;
            }
            
        }
    }
     else if (target==arr[i/2]) {
        console.log(i/2);
        break;
     }
 else{
    if (target>arr[i/2]) {
        for (let k = 0; k < arr.length/2; k++) {
            if (target=arr[k]){
                console.log(k);
                break;
            }
        }
        
    }
 }
    
}