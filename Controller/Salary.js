const Employees = require('../Models/employees');

module.exports.Salary = async (req, res) => {
    try{
        const details = await Employees.find({}).sort("salary");
        return res.status(200).json({
            message: "received data",
            data: details
        });
    }
    catch(error){
        console.log("error fetching the data");
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
}