const Employees = require('../Models/employees');

module.exports.Search = async (req, res) => {
    console.log(req.params);
    try{
        const details = await Employees.findOne({"employee_id": req.params.id});
        return res.status(200).json({
            message: "received data",
            data: details
        });
    }
    catch(error){
        console.log("error fetching the data");
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }
}