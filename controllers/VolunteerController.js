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
            let response = await this.service.add(req.body);
            return res.status(200).json(response);
       } 
       catch(err){
          next(err);
       }
    }

}

export default new VolunteerController(VolunteerService);