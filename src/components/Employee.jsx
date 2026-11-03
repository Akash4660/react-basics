
import { useState } from "react";
function Empl({empName, basicSalary}){
    const [salary, setSalary] = useState(basicSalary);
    const salaryDetails = calculateSalary(salary);
        // Increase salary function
    const increaseSalary = () => {
        setSalary(previousSalary => previousSalary + 10000);
    };
    console.log("basicSalary:", basicSalary);
    console.log("Salary Details:", salary);

 return(
    <>
    <div>
        <h2>Employee Details</h2>
        <p>Employee Name: {empName}</p>
        <p>Basic Salary: {salary}</p>
        <p>HRA: {salaryDetails.hra}</p>
        <p>DA: {salaryDetails.da}</p>
        <h2>
        Total Salary: {salaryDetails.totalSalary}
        </h2>    
             <button onClick={increaseSalary}>
                Increase Salary
            </button>
    </div>
    <hr/>
    </>   
 );
}
function calculateSalary(basicSalary){
    const hra = basicSalary * 0.20;
    const da = basicSalary * 0.10;
    const totalSalary = basicSalary + hra + da;
    return {
        hra,da,totalSalary
    };
}
export default Empl;