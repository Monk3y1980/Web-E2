/* 
Записать в переменную случайное целое число в диапазоне [0; 100]. Используйте объект Math.
*/

let randomNumber = Math.floor((Math.random() * 100) + 1); // +1 чотбы не генерировать 0
document.write(randomNumber);