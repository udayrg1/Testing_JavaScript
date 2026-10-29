let a: number = 83;
let b: number = 17;
let c: number = 44;

if (a>c) {
    console.log("C is less than A");
    if (b<a) {
        console.log("A is more than B");
        if (b<c) {
            console.log("B is less than C");
        }
    }
}
