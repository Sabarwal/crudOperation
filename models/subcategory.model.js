import mongoose from "mongoose";
const { Schema } = mongoose;
const schema = new Schema({
  name: {
    type: String,
  },
  categoryId: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },
});

const SubCategory = mongoose.model("SubCategory", schema);
export default SubCategory;
