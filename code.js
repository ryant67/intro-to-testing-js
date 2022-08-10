// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

/* ---------------------------------------------------------------------------------------------- */

function sayHello(input) {
    if(input === true) {
        return "Hello, World!";
    }else if(input === false) {
        return "Goodbye, World?";
    }else{
        return ("Hello, " + input + "!");
    }
}

/* ---------------------------------------------------------------------------------------------- */

function isFive(number) {
    return number === 5;
}

/* ---------------------------------------------------------------------------------------------- */

function isEven(number) {
    return (parseInt(number) % 2 === 0);
}

/* ---------------------------------------------------------------------------------------------- */

function isVowel(char) {
    return (char === "a" || char === "e" || char === "i" || char === "o" || char === "u" || char === "A" || char === "E" || char === "I" ||
    char === "O" || char === "U");
}

/* ---------------------------------------------------------------------------------------------- */

function isAdd(a, b) {
    return (Number(a) + Number(b));
}
