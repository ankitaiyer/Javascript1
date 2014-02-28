//A function that retuns any items in the array tha are duplicated
function find_duplicates(list) {
    console.log("Converted to string list s: " + list.toString())
    duplicates = [];
    for (i = 0; i < list.length; i++) {
        for (j = i + 1 ; j < list.length; j++) {
                if (list[i] === list[j]) {
                if (duplicates.lastIndexOf(list[i]) == -1) {
                    duplicates.push(list[i]);
                console.log("duplicate is : " + duplicates);
                }
            }
        }
    }
    return duplicates;
}

function convertArrayToString(list) {
    list.forEach(convertElementToString);
    console.log(list);
    return list;

}

function convertElementToString(element){
     if (typeof(element) !== 'string') {
        element = element.toString();
        return element;
     }
}
var votesToGoEatCake = [true, true, true, true];
// Should return in no particular order:
// [true]

var classroomIds = [47, 12, 19, 22, 26, 99, 30, 50, 324, 003, 44, 33, 346, 354, 44, 235, 45, 34, 44, 590, 09, 099, 0, 1, 3, 33, 999, 9];
// Should return in no particular order:
// [44, 33]

var randomJunkIFound = ["katie", "true", true, 19, "gargoyles", "!", 2 + 3, "2 + 3", 19, "19", 19 === "19", 6, false, false];
// Should return in no particular order:
// [19, false]

// console.log("*********************************");
// console.log("The original list is : " + randomJunkIFound);
// console.log(find_duplicates(randomJunkIFound));
// console.log("*********************************");

console.log("The original list is : " + classroomIds);
console.log("Final list is : " + find_duplicates(classroomIds));
console.log("*********************************");

// console.log("The original list is : " + votesToGoEatCake);
// console.log(find_duplicates(votesToGoEatCake));
// console.log("*********************************");