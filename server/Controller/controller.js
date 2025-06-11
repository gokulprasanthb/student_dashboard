const runQuery = require("../Constant/constant");

async function joinLab(req,res){
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
    console.log(req.body, "change");
    
    try {
        const insertQuery = `insert into lab_change_request values ('${req.body.student_name}', '${req.body.email}','${req.body.current_lab}','${req.body.requested_lab}','${req.body.reason}');`;
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

async function labJoinRequests(req,res){
    try {   
        const query = `select * from lab_join`; 
        const response = await runQuery(query);
        const requestData = response.recordset;
        res.status(200).send(requestData);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

async function labChangeRequests(req,res){
    try {   
        const query = `select * from lab_change_request`; 
        const response = await runQuery(query);
        const requestData = response.recordset;
        res.status(200).send(requestData);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

module.exports = {joinLab, changeLab, labJoinRequests, labChangeRequests};

//student_name, email, current_lab_name, requested_lab_name, lab_change_reason
