import mongoose from "mongoose";
const Schema = mongoose.Schema;

const helpRequestSchema = new Schema({
    _id: Schema.Types.ObjectId,
    location : Number,
    problem : String,
    phone_number : String,
    status: Number,
    num_of_stuck_people : Number,
    priority_code: Number,
    volunteer_id: Number
})

const helpRequest = mongoose.model('helpRequest', helpRequestSchema, 'HelpRequest');

export default helpRequest;


