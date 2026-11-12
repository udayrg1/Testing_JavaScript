//Create a JavaScript program for a fitness app that suggests workout routines based on the user's fitness level and goals. 
// Ask the user to input their fitness level (beginner, intermediate, advanced) 
// and their fitness goals (weight loss, muscle gain, overall fitness). 

const fitness_level: string = "intermediate";
const fitness_goal: string = "muscle gain";

if(fitness_level === "beginner"){
    if(fitness_goal === "weight loss"){
        console.log("Start with 20 minutes of brisk walking, 10 squats, 10 wall pushups and 10 minutes of cycling.");
    } else if(fitness_goal === "muscle gain"){
        console.log("Start with 2 sets of 10 squats, 10 knee pushups, 10 dumbbell curls and 10 glute bridges. Exercise 2-3 days per week.");
    } else if(fitness_goal === "overall fitness"){
        console.log("Try 15 minutes of walking, 10 squats, 10 pushups and 10 minutes of stretching.");
    } else {
        console.log("Please enter a valid fitness goal: weight loss, muscle gain or overall fitness.");
    }
} else if(fitness_level === "intermediate"){
    if(fitness_goal === "weight loss"){
        console.log("Try 30 minutes of jogging, 3 sets of 15 squats, 15 pushups and 20 mountain climbers.");
    } else if(fitness_goal === "muscle gain"){
        console.log("Try 3 sets of 12 pushups, 15 squats, 12 dumbbell curls and 12 lunges. Follow a progressive strength-training routine.");
    } else if(fitness_goal === "overall fitness"){
        console.log("Try 30 minutes of cardio, 3 sets of 15 squats, 15 pushups and 20 minutes of flexibility exercises.");
    } else {
        console.log("Please enter a valid fitness goal: weight loss, muscle gain or overall fitness.");
    }
} else if(fitness_level === "advanced"){
    if(fitness_goal === "weight loss"){
        console.log("Try interval running, 4 sets of 20 squats, 15 burpees and 20 mountain climbers.");
    } else if(fitness_goal === "muscle gain"){
        console.log("Follow a structured strength-training routine with 4 sets of compound exercises, progressive overload and adequate recovery.");
    } else if(fitness_goal === "overall fitness"){
        console.log("Combine 30 minutes of cardio, strength training, core exercises and mobility workouts.");
    } else {
        console.log("Please enter a valid fitness goal: weight loss, muscle gain or overall fitness.");
    }
} else {
    console.log("Please enter beginner, intermediate or advanced.");
}