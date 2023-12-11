import mongoose from "mongoose";
import { ObjectId } from "mongodb";

const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  _id: {
    type: ObjectId,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  isCompleted: {
    type: Boolean,
    required: true,
  },
});

const TodoModel = mongoose.models.todos || mongoose.model("todos", TodoSchema);

export default TodoModel;
