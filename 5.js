/* 
        Дан произвольный массив. Необходимо вывести количество элементов массива, 
        затем перебрать его и вывести в консоль каждый элемент массива.
*/


let nums = [10, 20, 30, 45, 100];
document.write("Кол-во элементов: ", nums.length + "<br>");
var result = nums.map(function (num, index, arr) {
  return document.write(num + " ");
});
