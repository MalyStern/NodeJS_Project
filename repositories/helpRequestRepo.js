import connect from './db.js'
import helpRequest from '../models/helpRequest.js'
import buildPipeline from '../global/RequestPipeline.js'
import { byParams, byId } from '../global/filters.js'

class helpRequestRepo {
    constructor(model) {
        this.model = model;
        connect();
    }

    async getAll(filters) {
        const smallPipe = byParams(filters);
        const pipeline = buildPipeline(smallPipe);
        let allRequests = await this.model.aggregate(pipeline).exec();
        return allRequests;
    }

    async getById(id) {
        try {
            const smallPipe = byId(id);
            const pipeline = buildPipeline(smallPipe);
            let request = await this.model.aggregate(pipeline).exec();
            return request;
        }
        catch(errors){
            console.log(errors.message);
            throw new Error('An error occurred while retrieving the request. Please try again later');
        }
    }

    async update(id, data){
        try{
            let request = await this.model.findByIdAndUpdate(id, data, {new : true});
            return request;
        }
        catch(errors){
            console.log(errors.message);
            throw new Error("An error occurred while trying to update the request's status. Please try again later.");
        }
    }
}
export default new helpRequestRepo(Request);