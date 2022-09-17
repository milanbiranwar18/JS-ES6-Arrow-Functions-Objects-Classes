console.log("Wellcome to the JS ES6 Arrow Functions, Objects, Classes Program");
/*
//UC1
const IS_ABSENT = 0;

let empCheck = Math.floor(Math.random()*10)%2;
console.log(Math.random())
console.log(Math.random()*10)
console.log(Math.floor(Math.random()*10))

if (empCheck==IS_ABSENT)
{
    console.log("Employee is Absent");
    return;
}
else{
    console.log("Employee is Present");
}





//UC2

const IS_PART_TIME =1;
const IS_FULL_TIME =2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
let empHrs = 0;
empCheck = Math.floor(Math.random()*10)%3;
switch(empCheck)
{
    case IS_PART_TIME:
        empHrs=PART_TIME_HOURS;
        break;
        case IS_FULL_TIME:
            empHrs=FULL_TIME_HOURS;
        break;
        default:
            empHrs=0;

}
let empWage = empHrs*WAGE_PER_HOUR;
console.log("Emp Wage : " + empWage);




//UC3
function getWorkingHours(empCheck)
{
    switch(empCheck)
    {
        case IS_PART_TIME:
        return PART_TIME_HOURS;
        
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        
        default:
            return 0;
    }
}

const IS_PART_TIME =1;
const IS_FULL_TIME =2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
let empHrs = 0;

empCheck = Math.floor(Math.random()*10)%3;
empHrs = getWorkingHours(empCheck);
let empWage = empHrs*WAGE_PER_HOUR;
console.log("Emp Wage: " + empWage);



//UC4
function getWorkingHours(empCheck)
{
    switch(empCheck)
    {
        case IS_PART_TIME:
        return PART_TIME_HOURS;
        
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        
        default:
            return 0;
    }
}

const IS_PART_TIME =1;
const IS_FULL_TIME =2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const MAX_HRS_IN_MONTH = 100;
const Num_OF_WORKING_DAYS = 10;
let totalEmpHrs = 0;
let totalWorkingDays = 0;


while(totalEmpHrs<=MAX_HRS_IN_MONTH && totalWorkingDays<Num_OF_WORKING_DAYS)
{
    totalWorkingDays++;
    empCheck=Math.floor(Math.random()*10)%3;
    totalEmpHrs += getWorkingHours(empCheck);
}

empCheck = Math.floor(Math.random()*10)%3;
empHrs = getWorkingHours(empCheck);
let empWage = totalEmpHrs*WAGE_PER_HOUR;
console.log("UC5 - total days : " + totalWorkingDays + " Total Hrs : " + totalEmpHrs +  "  EmpWage : " + empWage);



//UC5
function getWorkingHours(empCheck)
{
    switch(empCheck)
    {
        case IS_PART_TIME:
        return PART_TIME_HOURS;
        
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        
        default:
            return 0;
    }
}

function calacDailyAage(empHrs)
{
    return empHrs* WAGE_PER_HOUR;
}

const IS_PART_TIME =1;
const IS_FULL_TIME =2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const MAX_HRS_IN_MONTH = 160;
const Num_OF_WORKING_DAYS = 20;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array()


while(totalEmpHrs<=MAX_HRS_IN_MONTH && totalWorkingDays<Num_OF_WORKING_DAYS)
{
    totalWorkingDays++;
    empCheck=Math.floor(Math.random()*10)%3;
    totalEmpHrs += getWorkingHours(empCheck);
}

empCheck = Math.floor(Math.random()*10)%3;
empHrs = getWorkingHours(empCheck);
let empWage = totalEmpHrs*WAGE_PER_HOUR;
console.log("UC5 - total days : " + totalWorkingDays + " Total Hrs : " + totalEmpHrs +  "  EmpWage : " + empWage);

*/


/*
//UC6
function getWorkingHours(empCheck)
{
    switch(empCheck)
    {
        case IS_PART_TIME:
        return PART_TIME_HOURS;
        
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        
        default:
            return 0;
    }
}

function calacDailyWage(empHrs)
{
    return empHrs* WAGE_PER_HOUR;
}

const IS_PART_TIME =1;
const IS_FULL_TIME =2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const MAX_HRS_IN_MONTH = 160;
const Num_OF_WORKING_DAYS = 20;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();


while(totalEmpHrs<=MAX_HRS_IN_MONTH && totalWorkingDays<Num_OF_WORKING_DAYS)
{
    totalWorkingDays++;
    empCheck=Math.floor(Math.random()*10)%3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs+=empHrs;
    empDailyWageArr.push(calacDailyWage(empCheck));
}

let empWage = calacDailyAage(totalEmpHrs);
console.log("UC6 - Total days : " + totalWorkingDays + " Total Hrs : " + totalEmpHrs +  "  Emp Wage : " + empWage);

*/


//UC7
function getWorkingHours(empCheck)
{
    switch(empCheck)
    {
        case IS_PART_TIME:
        return PART_TIME_HOURS;
        
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        
        default:
            return 0;
    }
}

function calacDailyWage(empHrs)
{
    return empHrs* WAGE_PER_HOUR;
}

const IS_PART_TIME =1;
const IS_FULL_TIME =2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const MAX_HRS_IN_MONTH = 160;
const Num_OF_WORKING_DAYS = 20;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();
let empDailyWageMap = new Map();



while(totalEmpHrs<=MAX_HRS_IN_MONTH && totalWorkingDays<Num_OF_WORKING_DAYS)
{
    totalWorkingDays++;
    empCheck=Math.floor(Math.random()*10)%3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs+=empHrs;
    empDailyWageArr.push(calacDailyWage(empCheck));
    empDailyWageMap.set(totalWorkingDays,calacDailyWage(empHrs));
}

console.log(empDailyWageMap);
function totalWages(totalWage,dailyWage)
{
    return totalWage + dailyWage;
}


console.log("UC7 - Emp Wage totalHrs : " + Array.from(empDailyWageMap.values()).reduce(totalWages,0));

