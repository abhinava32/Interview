const Employees = require('../Models/employees');

module.exports.Update = async (req, res) => {
    try{
        const details = await Employees.findOneAndUpdate({"employee_id":req.params.id}, req.body);
        return res.status(200).json({
            message: `Updated data of ${details.first_name}`
        });
    }
    catch(error){
        console.log("error fetching the data");
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }
}