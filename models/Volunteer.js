import mongoose from "mongoose";

const Schema = mongoose.Schema;

const VolunteerSchema = new Schema({
    _id : Number,
    name : String,
    last_name : String,
    phone_number : String,
    specializations : Array
});

const Volunteer = mongoose.model("Volunteer", VolunteerSchema, 'Volunteers');


export default Volunteer;