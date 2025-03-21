const runQuery = require("../Constant/constant");

async function joinLab(req,res){
    console.log(req, "request");
    try {
        const insertQuery = `insert into lab_join values ('${req.body.student_name}', '${req.body.email}','${req.body.roll_number}','${req.body.first_lab_name}','${req.body.second_lab_name}','${req.body.third_lab_name}');`;
        const response = await runQuery(insertQuery);
        if(response.rowsAffected>0)
        {
            res.status(200).json({message: "Request submitted successfully"});
        }
        else{
            res.status(400).json({message: "oops! request not submitted"});
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

async function changeLab(req,res){
    try {
        const insertQuery = `insert into lab_change_request values ('${req.body.student_name}', '${req.body.email}','${req.body.current_lab_name}','${req.body.requested_lab_name}','${req.body.lab_change_reason}');`;
        const response = await runQuery(insertQuery);
        if(response.rowsAffected>0)
        {
            res.status(200).json({message: "Request submitted successfully"});
        }
        else{
            res.status(400).json({message: "oops! request not submitted"});
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {joinLab, changeLab};