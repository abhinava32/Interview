const Employees = require('../Models/employees');

module.exports.Delete = async (req, res) => {
    try{
        const details = await Employees.findOneAndDelete({"employee_id":req.params.id});
        return res.status(200).json({
            message: `deleted record of ${details.first_name}`
        });
    }
    catch(error){
        console.log("error fetching the data");
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }
}