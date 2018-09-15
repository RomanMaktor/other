// первоначальная инициализация переменных
// var arrayVectors= [[1,2,3], [4,5,6], [7,8,9]]
var arrayVectors= [[1,2,5,7,5,4,3,5,7,5], [4,5,2,7,59,4,3,5,7,5], [3,8,2,7,5,4,3,59,7,53], [3,8,2,7,5,4,3,5,7,5], [3,8,2,79,5,4,3,5,7,5], [3,89,2,755,5,4,3,5,7,5], [3,8,2,7,5,4,3,5,7,5], [3,8,2,7,5,4,3,5,7,5], [3,8,2,7,5,4,3,5,7,5], [3,8,2,7,5,4,3,5,7,5]] 

var n1 = arrayVectors.length-1;    // определяем кол-во векторов  
var n2 = arrayVectors[0].length-1; // определяем кол-во координат (берем из нулевого вектора)
var id = null;

// рекурсия по векторам
var scalarVector2 = function (arr, i, n) {
    if (n>0) {
        return arr[n][i] * scalarVector2 (arr, i, n-1);
    }
    return arr[n][i];
}

// рекурсия по координатам
var getScalarSum = function (arr,id) {
    if (id>=0) {
        return scalarVector2(arr,id,n1) + getScalarSum(arr,id-1);
    }
    return 0;
}

var res = getScalarSum(arrayVectors,n2)
console.log(res);