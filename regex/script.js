//Bir neçə finKod saxladığınız array olsun. Layihəni açdıqda user-dən finKod daxil edilsin. Əgər həmin finKod-un formatı
//  yalnış olarsa, regex-də yoxlasın və alert (wrong format) çıxarıb yenidən daxil edilməsini istəsin, əgər format düzgün 
//  olarsa ancaq həmin array-də olmazsa o zaman alert çıxarıb(finCode not found) yenidən istəsin. Əgər finKod-un formatı 
//  düzgün olarsa və həmin array-də olarsa o zaman user found alert-ı çıxarıb həmin finKodun indeksini ekrana yazdırıb 
//  layihəni dayandırsın. 
let fin = window.prompt("Please enter your fin:");
let re = /[A-Z0-9]{7}/;
let answer = re.test(fin);
let arr = ["YHT34R5", "TGF21L6", "D1GE98M"];

if (answer == false) {
    fin = prompt("Wrong format! Enter your fin again:");
    answer = re.test(fin);
}


else if (answer == true) {
    for (let i = 0; i < arr.length; i++) {
        if (fin == arr[i]) {
            window.alert("User found:" + i);
            break;

        }

        else {

            fin = prompt("User not found! Enter your fin again:");

        }

    }
}





