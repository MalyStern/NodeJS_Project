import helpRequestRepo from "../repositories/helpRequestRepo";
//import baseService from "./baseService";

class helpRequestService extends BaseService{
    constructor(repo){
        super(repo);
    }

    async update(id, data){
        try{
            return await this.repo.update(id, data);
        }
        catch(errors){
            console.log(errors);
            throw new Error("unable to update request.");
        }
    }
}
export default new helpRequestService(helpRequestRepo);