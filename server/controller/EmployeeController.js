import EmployeeModel from './../model/EmployeeModel.js';

export const EmployeeControl = async(req, res)=>{
    try{
        
        let data = await EmployeeModel.find()
        return res.status(200).json(data)
    }
    catch(err){
        return {status:"fail", message:err.message}
    }
}
export default EmployeeControl;