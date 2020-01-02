<h1>Sort()</h1>
<p>Кто хочет посмореть на код, то он ниже</p>
<h2>Код</h2>
<h3>HTML</h3>

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>sort</title>
</head>
<body>
    <script src="./js/script.js"></script>
</body>
</html>
```
<h3>JavaScript</h3>

```
//создаём массив с именами
var names = ['Вася', 'Петя', 'Витя', 'Олег', 'Катя', 'Алексей'];
//создадим массив с численными значениями.
var numbers = [12, 653, 213, 65, 34, 912, 54];

//создаём функцию, которая будет сортировать массив.
function sortName(massive) {
    massive.sort();
    return massive;
};

//выводим результат в консоль.
console.log(sortName(names));
//выводим результат в консоль.
console.log(sortName(numbers));
//теперь мы убедились, что у нас всё работает правильно.
```
