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

console.log("Before updating the designation")
console.log(empinfo)

empinfo.empdesignation = "QA Automation Manager"

console.log("After updating the designation") //here we have updated employee designation
console.log(empinfo)

empinfo.empaddress.emplocation = "Rampally"

console.log("After updating the location") //here we have updated employee designation
console.log(empinfo)