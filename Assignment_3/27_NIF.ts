//7.Write a JavaScript program that takes three numbers as input (e.g., 7, 2, 10) and prints them in descending order.

const a: number = 7, b: number = 2, c:number = 10;

if (a >= b) { //7 >= 2

    if (b >= c) { //2 >= 10
        console.log(a, b, c);

    } else if (a >= c) {//10 >= 7
        console.log(a, c, b);

    } else {
        console.log(c, a, b);
    }

} else {

    if (a >= c) {//10 >= 7
        console.log(b, a, c);

    } else if (b >= c) {//2 >= 10
        console.log(b, c, a);

    } else {
        console.log(c, b, a);
    }
}