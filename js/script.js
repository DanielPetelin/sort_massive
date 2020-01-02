//создаём массив с именами
var names = ['Вася', 'Петя', 'Витя', 'Олег', 'Катя', 'Алексей'];

//создаём функцию, которая будет сортировать массив.
function sortName(names) {
    names.sort();
    return names;
};

//выводим результат в консоль.
console.log(sortName(names));