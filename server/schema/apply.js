import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
      },
     
    email: {
      type: String,
      required: true,
    },
    jobrole: {
      type: String,
      required: true,
    }
  });
  
  
export default mongoose.model("appliedjobs",productSchema);