let nums: number[] = [10, 20, 30, 40]

nums.push(50);          //add at the end -> [10,20,30,40,50]
nums.unshift(5);        //add at the start -> [5,10,20,30,40,50]
nums[nums.length] = 60; //add at the end using index -> [5,10,20,30,40,50,60]
nums.splice(2,0,15)     /*2 is the index, 0 is the delete count and 15 is the 
                        value to be insetred at index 2*/
console.log(nums)
