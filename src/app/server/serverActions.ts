"use server";
import mongoose from "mongoose";
import { ObjectId } from "mongodb";
import TodoModel from "../models/Todo";
import { Todo } from "../types/Todo";

export const fetchTodos = async () => {
  const client = await mongoose.connect(process.env.DATABASE_URL!);
  const todos: Todo[] = await TodoModel.find(
    {},
    { _id: { $toString: "$_id" }, text: 1, isCompleted: 1 }
  ).lean();
  await client.disconnect();
  return todos;
};

export const addTodo = async (text: string) => {
  const client = await mongoose.connect(process.env.DATABASE_URL!);
  const todo = new TodoModel({ _id: new ObjectId(), text, isCompleted: false });
  await todo.save();
  await client.disconnect();
  return { message: "success" };
};

export const editTodo = async ({ _id, text, isCompleted }: Todo) => {
  const client = await mongoose.connect(process.env.DATABASE_URL!);
  await TodoModel.findByIdAndUpdate(_id, { text, isCompleted });
  await client.disconnect();
};

export const deleteTodo = async (id: string) => {
  const client = await mongoose.connect(process.env.DATABASE_URL!);
  await TodoModel.findByIdAndDelete(id);
  await client.disconnect();
};
