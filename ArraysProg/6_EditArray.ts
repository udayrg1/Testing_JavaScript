let gemstones : string[] = ["Ruby","Emerald","Sapphire","Garnet","Opal","Amber","Zircon"]
// indexs are                 0           1             2          3       4        5  
// No of elements             1           2             3          4       5        6

console.log(gemstones)

gemstones.unshift("Onyx")  //to add element at the starting of an Array
console.log(gemstones)

gemstones.push("Topaz") //to add element at the end of an Array
console.log(gemstones)

gemstones.shift() //to remove first element of an Array
gemstones.pop() //to remove last element of an Array
console.log(gemstones)