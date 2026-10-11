//rough data

interface empdata                       
{
    empid: number,
    empname: string,
    empsalary: number,
    empdesignation: string,
    empstatus: boolean,
    empaddress: 
    {
        empstreet: string,
        emplocation: string,
        epincode: number,
        estate: string

    }

}


//converting into fair data

let empinfo: empdata = 
{
    empid: 846973,
    empname: "Uday",
    empsalary: 1100000,
    empdesignation: "Automation Lead",
    empstatus: true,
    empaddress: 
    {
        empstreet: "Road No 2",
        emplocation: "Hyderabad",
        epincode: 500300,
        estate: "Telangana"

    }
}

//to know the typeof element

console.log(typeof empinfo.empdesignation)                  //string
console.log(typeof empinfo.empaddress.epincode)             //number

//to know whether the element is in the object or not

console.log("empstreet" in empinfo.empaddress)                //true
console.log("earea" in empinfo.empaddress)                  //false

