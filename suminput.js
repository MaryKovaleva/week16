function SumInput() {
let functionContainer = document.getElementById('SumInput');
let s = 0;
let array = []; 
let sum = 0;
for(let i=0; i < 3; i++) {
array[i] = prompt('Введите число', +i); 
if(array[i] === null) { 
alert('Отмена');
return;
}

if (array[i] === '') { 
alert('Вы не ввели число');
array[i] = prompt('Введите любое число'); 
}

if (array[i] !== Number) { 
alert ('Это не число,это что-то другое');
array[i] = prompt('Введите любое число'); 
}
sum += array[i];
array.sort();
functionContainer.innerHTML = array;
console.log(result); 
}
}

