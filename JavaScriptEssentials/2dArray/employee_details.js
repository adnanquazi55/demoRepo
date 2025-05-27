const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000 },
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000 },
];

function displayEmployees() {
    const totalEmployees = employees.map((e, index) =>
        `<p>${e.id}: ${e.name}-${e.department} - ${e.age} - ${e.salary}</p>`).join('');

    document.getElementById('employeesDetails').innerHTML = totalEmployees;
}

function calculateTotalSalaries() {
    const totalEmpSalaries = employees.reduce((add, emp) => add + emp.salary, 0);
    document.getElementById('employeesDetails').innerHTML = "Total salary of employees" + totalEmpSalaries;
}

function displayHREmployees() {
    const hrEmp = employees.filter((e) => e.department === "HR");

    const hrEmpDisplay = hrEmp.map((e, index) => `<p>${e.id} - ${e.name}`).join('');

    document.getElementById('employeesDetails').innerHTML = `HR Employee ${hrEmpDisplay}`;


}

function findEmployeeById(employeeId) {
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if (foundEmployee) {
    document.getElementById('employeesDetails').innerHTML =`<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
    }
    else{
      document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this ID';
     }
 }