import baseController from "./baseController.js";
import helpRequestService from "../services/helpRequestService.js";

class helpRequestController extends baseController{
    constructor(service){
        super(service);
        this.name = "helpRequest";
    }

    async update(req, res, next) {
        const { id } = req.params;
        try {
            const response = await this.service.update(id, req.body);
            return res.status(200).json(response);
        }
        catch (e) {
            next(e);
        }
    }
}

export default new helpRequestController(helpRequestService);