var fib_list = [];
//A function that retuns a list of Fib numbers that go upto max
function fib_set(max) {
    if (max > 1) {
        fib_list = [1];
        var current_fib = 1;
        while (current_fib < max) {
            fib_list.push(current_fib);
            //console.log("Ater adding to fib_set " + fib_list);
            current_fib = fib_list[(fib_list.length-1)] + fib_list[(fib_list.length-2)];
            //console.log("Current Fib is:" + current_fib);
        }
        console.log("Fib Numbers till " + max + " are: " + fib_list);
        return fib_list;
    }
    else {
        return [1, 1];
    }
}

//A function that tells if number is even.
function isEven(number) {
    return number % 2 === 0;
}

//A function returns ONLY even numbers from the given list

function listEvenFib(list){
    for (var i =0; i < fib_list.length; i++) {
        if(isEven(fib_list[i])) {
            fib_list_even.push(fib_list[i]);
        }
    }
    console.log(("Even Fib numbers are: " + fib_list_even));
    return fib_list_even;
}

//A function that adds up all the even fib numbers

function sumEvenNumbers(list) {
    for (var i=0; i < fib_list_even.length; i++) {
        sum = sum + fib_list_even[i];
    }
    return sum;
}

var max = 2;
sum = 0;
fib_list_even = [];
//console.log(findEvenOrOdd(45));
// console.log("Fib Numbers till " + max + " are: " + fib_set(max));
// console.log(("Even Fib numbers are: " + listEvenFib(fib_set(max))));
console.log("Sum of even fib numbers is " + sumEvenNumbers(listEvenFib(fib_set(max))));