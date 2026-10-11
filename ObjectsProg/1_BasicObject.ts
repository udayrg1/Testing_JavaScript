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
        epincode: 501301,
        estate: "Telangana"

    }
}

console.log(empinfo)