///////////////////////////////////////
Lecture: Hoisting
calculateAge(1965);
function calculateAge(year) {
    console.log(2019 - year);
}

// retirement(1956);
var retirement = function(year) {
    console.log(65 - (2019 - year));
}



//variables

var age = 23;
console.log(age)

function foo () {
    var age = 65;
    console.log(age);
}

foo();
console.log(age);











///////////////////////////////////////
// Lecture: Scoping


// First scoping example


// var a = 'Hello!';
// first();

// function first() {
//     var b = 'Hi!';
//     second();

//     function second() {
//         var c = 'Hey!';
//         console.log(a + b + c);
//     }
// }




// Example to show the differece between execution stack and scope chain


var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    // console.log(a + b + c + d);
    console.log(a+d);

}




///////////////////////////////////////
// Lecture: The this keyword









