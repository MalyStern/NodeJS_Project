import baseController from "./baseController.js";
import VolunteerService from "../services/VolunteerService.js";

class VolunteerController extends baseController{
    constructor(service)
    {
        super(service);
        this.name = "volunteers"
    }

    async add(req, res, next)
    {
       try{
            let response = this.service.add(req.body);
            return response.status(200).json(response);
       } 
       catch(err){
        next(err);
       }
    }

}

export default new VolunteerController(VolunteerService);