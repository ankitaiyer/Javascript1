
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
function filter(fn, list){
    var new_list = [];
    // loop though list, not fib_list
    for (var i =0; i < list.length; i++) {
        // Don't call isEven here, call the fn
        if(fn(list[i])) {
            // append to the new_list
            new_list.push(list[i]);
        }
    }
    console.log(("Even Fib numbers are: " + new_list));
    // return the new_list
    return new_list;
}

//A function that adds up all the even fib numbers
function sum(list) {
    var mySum = 0;

    // use list, not fib_list
    for (var i=0; i < list.length; i++) {
        mySum = mySum + list[i];
    }
    return mySum;
}

console.log("Sum of even fib numbers is " + sum(filter(isEven,fib_set(60))));
