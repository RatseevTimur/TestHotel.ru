//Задачи по программированию\\

//Задача №1\\
function task1 () {
    let сities = ["Москва", "Ростов-на-Дону", "Краснодар", "Город зелёного цвета"]

    function citiesString(сities) {
    return сities.join(", ") + ".";
    }

    alert(citiesString(сities));
}
/////////////////////////////////


//Задача №2\\
function task2 (){
    let float = prompt('Давайте окргулим ваше число до кратного 5')

    function multiple5() {
        return Math.round(float/5)*5;
    }

    alert(multiple5());
}
///////////////////////////////////

//Задача №3\\
function task3 (){
    let int = prompt('Сколько компьютеров вам нужно?')

    const selectionEndings = (n = 1) => [`ов`,`а`,``]
    [+n === 1 ? 2 : Math.round(2 / ( + ('' + n).substr(-1) || 10)) * !(('' + n).substr(-2, 1) == 1)];

    alert("Хорошо, мы вышлем вам " + int + " компьютер" + selectionEndings(int));
}
///////////////////////////////////


//Задача №4\\
function task4 (){
    let number = prompt('Проверим число на простоту');

    let simplicity = "Простое";
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            simplicity = "Непростое";
            break;
        }
    }
    alert(simplicity);
}
///////////////////////////////////

//Задача №5\\
function task5 (){
    let rawArray1 = [7, 17, 1, 9, 1, 17, 56, 56, 23]
    let rawArray2 = [56, 17, 17, 1, 23, 34, 23, 1, 8, 1]
    
    let array1 = rawArray1.filter(function(item, pos) {
            return rawArray1.indexOf(item) !== pos;
        })
    let array2 = rawArray2.filter(function(item, pos) {
            return rawArray2.indexOf(item) !== pos;
        })

    intersect = function(array1, array2) {
        return array1.filter(function(n) {
        return array2.indexOf(n) !== -1;
        });
    };

    alert( "Первый массив: [" + rawArray1 + "]")
    alert( "Второй массив: [" + rawArray2 + "]")

    alert( "Результат: [ " + intersect(array1,array2) + "]")
}