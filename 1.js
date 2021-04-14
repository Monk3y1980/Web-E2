
/* 
Напишите программу, которая работала бы следующим образом: 
в prompt вводится значение. С помощью унарного плюса (арифметический оператор) необходимо преобразовать его в число, затем проверить с помощью typeof, принадлежит ли оно к множеству Number.
Если это число, то вывести в консоль чётное оно или нечётное.
Если передано не число, выведите: «Упс, кажется, вы ошиблись».
*NaN, хоть и относится к типу Number, числом не является. Добавьте отдельную 
проверку для этого значения.
*/
let userInpurt = Number(window.prompt('Введите число', ''));

if (typeof (userInpurt) === 'number' && userInpurt % 2 === 0 && userInpurt !== 0) {
  document.write(userInpurt, ' ', 'четное число');
}
else if (typeof (userInpurt) === 'number' && userInpurt % 2 !== 0 && userInpurt !== 0) {
  document.write(userInpurt, ' ', 'нечетное число');
}
else if (userInpurt === 0 || typeof (userInpurt) === 'string') {
  document.write(userInpurt, ' ', 'не число');
} else {
  document.write('Упс, кажется, вы ошиблись')
}
