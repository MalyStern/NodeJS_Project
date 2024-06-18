
export default function buildPipeline(smallPipe)
{
const pipeline = [
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
    },     {
      '$lookup': {
        'from': 'Priority', 
        'localField': 'priority_code', 
        'foreignField': '_id', 
        'as': 'priority'
      }
    },{
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
    },{
      '$unwind':{
        'path': '$priority',
        'preserveNullAndEmptyArrays': true
      }
    }, {
      '$addFields': {
        'location_descreption': '$location.location', 
        'status_descreption': '$status.status_mode', 
        'volunteer_name': '$volunteer_details.name',
        'priority_descreption': '$priority.priority'
      }
    },{
      '$project': {
        'volunteer_details': 0, 
        'status': 0, 
        'location': 0, 
        'priority_code': 0, 
        'volunteer_id': 0,
        'priority': 0
      }
    }
  ]
  
  for(let i of smallPipe){
    pipeline.splice(pipeline.length-1, 0, i); 
  }
  
  return pipeline;

}