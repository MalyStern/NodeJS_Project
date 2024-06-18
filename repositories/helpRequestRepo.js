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
export default new helpRequestRepo(helpRequest);


const pipelineInitial = [
    {
      '$lookup': {
        'from': 'Status', 
        'localField': 'status', 
        'foreignField': '_id', 
        'as': 'status'
      }
    }, {
      '$lookup': {
        'from': 'Volunteers', 
        'localField': 'volunteer_id', 
        'foreignField': '_id', 
        'as': 'volunteer_details'
      }
    }, {
      '$lookup': {
        'from': 'Locations', 
        'localField': 'location', 
        'foreignField': 'code', 
        'as': 'location'
      }
    }, {
      '$unwind': {
        'path': '$location'
      }
    }, {
      '$unwind': {
        'path': '$status'
      }
    }, {
      '$unwind': {
        'path': '$volunteer_details'
      }
    }, {
      '$addFields': {
        'location_descreption': '$location.location', 
        'status_descreption': '$status.status_mode', 
        'volunteer_name': '$volunteer_details.name'
      }
    }, {
      '$project': {
        'volunteer_details': 0, 
        'status': 0, 
        'location': 0, 
        'priority_code': 0, 
        'volunteer_id': 0
      }
    }
  ]
  