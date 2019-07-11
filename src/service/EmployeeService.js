const { Employee } = require('../models');
exports.createEmployee = async ({ name, department, gender, address, phone}) => {

    return Employee.create({
        name,
        department,
        gender,
        address,
        phone

    })

}
exports.getEmployees = async() => {

    return Employee.findAll({ where: {
        // id:id
    }});

}

exports.updateEmployees = async(newPhone, employeeId) => {
    try{
        return Employee.update(   
            { phone: newPhone },
            { where: {id: employeeId} })
            .then( function(){});
    }
    catch(err){
        console.log('error updating employee');
    }
}

exports.getOneEmployees = async(empid) => {

    return Employee.findOne({ where: {
        id:empid
    }});

}