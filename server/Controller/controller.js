const runQuery = require("../Constant/constant");

async function getSpecialLabList(req,res){
    try {   
        const id = req.params.id;
        const query = `select lab_name from lab_list where lab_id = ${id};`; 
        const response = await runQuery(query);
        const specialLabData = response.recordset[0];
        res.status(200).send(specialLabData);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

async function getEventList(req,res){
    try {   
        const id = req.params.id;
        const query = `select event_name from event_list where event_id = ${id};`; 
        const response = await runQuery(query);
        const eventListData = response.recordset[0];
        res.status(200).send(eventListData);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

async function getStudentList(req,res){
    try {   
        const id = req.params.id;
        const query = `select roll_number, student_name, email, department_name from student_list where student_list_id = ${id};`; 
        const response = await runQuery(query);
        const studentData = response.recordset[0];
        res.status(200).send(studentData);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

module.exports = {getSpecialLabList, getEventList, getStudentList};