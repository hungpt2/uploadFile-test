import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';

const { Schema } = mongoose;
const fileSchema = new Schema({
  fileName: {
    type: String,
    required: [true, 'File must have name']
  },
  fileSize: {
    type: Number,
    required: [true, 'File must have size']
  },
  date: {
    type: Date,
  },
  user: {
    type: String,
  }
});
fileSchema.plugin(mongoosePaginate);
export default mongoose.model('File', fileSchema);
