//rough data

interface husband                       
{
    hname : string,
    hage : number,
    hhobbies : string,
    hDOB : string
}


interface wife                       
{
    wname : string,
    wage : number,
    whobbies : string,
    wDOB : string
}


let husbdata : husband = 

{
    hname : "Uday",
    hage : 29,
    hhobbies : "Cycling",
    hDOB : "23-Jan-1997"
}

let wifedata : wife = 

{
    wname : "Priyanka",
    wage : 32,
    whobbies : "Playing Games",
    wDOB : "20-Nov-1994"
}

let wifehusband = {...husbdata, ...wifedata}

console.log(wifehusband)
