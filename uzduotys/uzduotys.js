function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min)
}


//1. Palyginti du skaičius a ir b. Išvesti į konsolę, kuris didesnis arba jie lygūs. (4 taškai)

let a = (rand(1, 20));
let b = (rand(1, 20));

function palyginimas() {
    if(a >= b) {
        return a;
       
    } else {
        return b;
       
    }

}
console.log(b)
console.log(a)
console.log(palyginimas());

//2. Naudojant for ciklą, išvesti į konsolę skaičius nuo 1 iki 10. (5 taškai)


for(let i = 1; i <= 10; i++) {
    
    console.log(i)

}

//3. Naudojant for ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10. (5 taškai)


/*for(let i = 0; i <= 10; i++) {
    let i = number;
   if(number % 2) {

   }
    
}
*/

//4. Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje.

for (let s = rand(1, 10); s <= 5; s++) {
    console.log(s);
}

//5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5.

let ciklas = rand(1, 10);
let saugiklis = 100;



while(ciklas <= 5) {
    if(!(saugiklis--)) break;
    ciklas = ciklas;

}
console.log(ciklas)


//6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti didžiausią masyvo reikšmę, NENAUDOJANT sort() bei Math.max() funkcijų.

const masyvas = [...Array(10)];

