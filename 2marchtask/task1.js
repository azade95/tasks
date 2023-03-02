// Verilmiş ədədlər siyahısını artan sıra ilə düzülmüş ədədlər halına gətirən alqoritm.

let nums=[23,16,54,30,11,98,67,45,17];

for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
       if (nums[i]<nums[j]){
        let n=nums[i]
        nums[i]=nums[j]
        nums[j]=n
       }
        
    }
    
}

console.log(nums);


// nums.sort(function(a, b){return a - b});
// console.log(nums);