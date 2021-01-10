<h2>Code</h2>
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
//create an array with names
var names = ['Vasya', 'Peter', 'Vitya', 'Oleg', 'Kate', 'Alexei'];
//let's create an array with numeric values
var numbers = [12, 653, 213, 65, 34, 912, 54];

//create a function that will sort the array
function sortName(massive) {
    massive.sort();
    return massive;
};

//print the result to the console
console.log(sortName(names));
//print the result to the console
console.log(sortName(numbers));
//now we are convinced that everything works for us correctly
```
