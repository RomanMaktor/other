function start(arrInput) {
    // если arrInput пусто - выходим
    if (typeof (arrInput) == "undefined") {
        return 0;
    }

    // читаем значение arrInput и преобразуем по разделителю "," в массив 
    var arr = arrInput.value.split(",");

    var n = arr.length; // определяем кол-во элементов массива  
    var res = 0;  // результат (наибольшая разность)
    var dif = 0;  // разность чисел

    // цикл по элементам массива, кроме последнего
    for (var i = 0; i < n - 1; i++) {

        dif = arr[i] - arr[i + 1];  // вычитаем от текущего элемента массива - следующий
        dif = Math.abs(dif);  // модуль числа
        
        // если разность чисел dif больше res, то перезаписываем res
        if (dif > res) {  
            res = dif;  
        }
    }
    console.log(res);  // вывод результата в консоль (браузера)

    return res;  // возвращаем результат вычислений функции
}