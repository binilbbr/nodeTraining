const employeeService = require('../service/EmployeeService');



exports.get = async (req, res, next) => {
  const employees = await employeeService.getEmployees();

  res.json(employees);

};



exports.create = async (req, res, next) => {

    const employee = await employeeService.createEmployee(req.body);

    res.json(employee);

};

exports.update = async (req, res, next) => {
  console.log(req.body.phone);
    const output = await employeeService.updateEmployees(req.body.phone, 1);
    res.json(output);
}

exports.getOneEmployee = async (req, res, next) => {
  console.log("Inside controller, id; " + req.params.id);
  const employe = await employeeService.getOneEmployees(req.params.id);// can cause error
  // console.log("Inside controller, id; " + req.params.id);

  res.json(employe);

};