const Employees = require('../Models/employees');
function generateSixDigitRandomNumber() {
    const min = 100000; // Minimum 6-digit number
    const max = 999999; // Maximum 6-digit number
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports.addEmployee = async (req, res) => {
    const id = generateSixDigitRandomNumber();  
    req.body.employee_id = id; 
    try{
        await Employees.create(req.body);
        return res.status(200).json({
            message: "Employee details added successfully!"
        })
        
    }
    catch(error){
        console.log("error in creating employee!!",error);
        return res.status(500).json({
            message: "Employee addition failed!"
        });
    }
}
