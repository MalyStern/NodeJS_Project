import mongoose from 'mongoose';
mongoose.set("strictQuery", false);
export default async function connect() {
    await mongoose.connect("mongodb+srv://MalyLeibowitz:Maly5509@maly.6os3ywm.mongodb.net/?retryWrites=true&w=majority&appName=Maly");
};