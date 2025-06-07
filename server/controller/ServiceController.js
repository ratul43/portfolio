
import ServiceModel from "../model/ServiceModel.js";

export const ServiceControl = async (req, res)=>{
    let data = await ServiceModel.find()
    return res.status(200).json(data)
}
export default ServiceControl;