
var emp = [
    {
       name : 'Debraj',
       salary : 15000 
    },
    {
        name : 'Subhraneel',
        salary : 25000
    },
    {
        name : 'Gourav',
        salary : 35000
    },
    {
        name : 'Tanmay',
        salary : 45000
    }
] // Creating object as emp and stored two attributes as Emplyoee Name & Salary

console.log(emp)

for( i = 0; i < emp.length; i++){
    if(emp[i].salary>25000){
        emp[i].salary = emp[i].salary + 5000
    }
} // increasing salary by 5000 if employee's salary greater than 25000

console.log(emp)

//--------------------------------END of Salary----------------------------------------

