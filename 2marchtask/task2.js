//Verilmiş iki ədədlər siyahısından birincisinin ikincisinin içində olub olmadığını tapan alqoritm.Yəni birinci array-dəki ədədlərin hamısı   2ci array-də də varsa true çıxır output-a , hər hansısa biri yoxdursa false

let nums1=[12,9,76,8,95,43,28,38];
let nums2=[9,43,12,28];
let counter=0;

for (let i = 0; i < nums2.length; i++) {
    
    for (let j = 0; j < nums1.length; j++) {
        if (nums2[i]==nums1[j]) {
           counter++;
          
        }

       
        
    }

}

if (counter==nums2.length) {
    console.log(true);
    
}

else{
console.log(false);
}


