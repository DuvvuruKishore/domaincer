import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
    jobrole: {
      type: String,
      required: true,
    },
    skills: {
      type: String,
      required: true,
    },
    salary: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
    },
    lastdate: {
      type: String,
      required: true,
    },
  });
  
  
export default mongoose.model("recriterposts",productSchema);