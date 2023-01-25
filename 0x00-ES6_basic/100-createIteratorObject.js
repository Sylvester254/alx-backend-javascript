export default function createIteratorObject(report) {
    const departments = Object.keys(report.allEmployees);
    let departmentIndex = 0;
    let employeeIndex = 0;
  
    return {
      [Symbol.iterator]: function() {
        return this;
      },
      next: function() {
        if (departmentIndex === departments.length) {
          return {done: true};
        }
  
        const currentDepartment = report.allEmployees[departments[departmentIndex]];
  
        if (employeeIndex === currentDepartment.length) {
          departmentIndex++;
          employeeIndex = 0;
          return this.next();
        }
  
        const employee = currentDepartment[employeeIndex];
        employeeIndex++;
  
        return {value: employee, done: false};
      }
    };
  }
  