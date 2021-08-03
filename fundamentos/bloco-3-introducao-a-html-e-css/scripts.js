

// let player = {
//      name : {
//          first: 'Marta',
//          last: 'Silva'
//      },
//      age : 34,
//      medals : {golden : 2, silver : 3}, 
//      bestInTheWorld : [2006, 2007, 2008, 2009, 2010, 2018]
    
// };
//     console.log(player.name + " " + player.lastName + " com idade de " + player.age + " anos. ");

//     console.log("A jogadora " + player.name.first + " " + player.name.last + " foi eleita a melhor do mundo nos anos de:"  + player.bestInTheWorld );

//     console.log("A jogadora " + player.name.first + " " + player.name.last + " foi eleita a melhor do mundo por" + " " + player.bestInTheWorld.length + " vezes.");

//     console.log("Ajogadora possuii" + " " + player.medals.golden + "medalhas de ouro e " + player.medals.silver + " medalhas de prata. ");

//     let cars = ['Saab', 'Volvo', 'BMW'];

//     for (let index in cars) {
//     console.log(index, cars[index]);
// };

// let names = {
//     person1: 'João',
//     person2: 'Maria',
//     person3: 'Jorge' 
//   };
//   for(index in names){
//       console.log("olá" + " " + names[index]);
//   }


// let car = {
//     model: 'A3 Sedan',
//     manufacturer: 'Audi',
//     year: 2020
//   };

//   for(index in car){
//       console.log(index, car[index]);
//   }



// function verificaPalindromo(palavra){
//     for(index in palavra){

//         if (palavra[index] != palavra[(palavra.length -1) - index]){
           
//             return false;
            
//         }
//     }
//     return true;
// }
// console.log(verificaPalindromo('bomimkob'));
// console.log(verificaPalindromo('arara'));

function indiceDoMenor (numeros){
    let indiceMenor = 0;
        for(let index in numeros){
        if(numeros[indiceMenor] > numeros[index]){
            indiceMenor = index;
        }
        
}
return indiceMenor;
}
console.log(indiceDoMenor([2, 4, 6, 7, 10, 0, -3]));


