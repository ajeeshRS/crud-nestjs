import { Injectable } from '@nestjs/common';
import { Todo } from './schemas/app.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(Todo.name) private readonly todoModel: Model<Todo>,
  ) {}

  async createTodo(createTodo: {
    title: string;
    completed?: boolean;
  }): Promise<Todo> {
    const newTodo = await this.todoModel.create(createTodo);
    return newTodo;
  }

  async getAllTodos(): Promise<Todo[]> {
    const todos = await this.todoModel.find();
    return todos;
  }

  async getTodoById(id: string): Promise<Todo> {
    const todo = await this.todoModel.findById(id);
    return todo;
  }

  async updateTodo(
    id: string,
    updateTodoData: {
      name?: string;
      completed?: boolean;
    },
  ): Promise<Todo> {
    console.log(updateTodoData)
    
    const updatedTodo = await this.todoModel.findByIdAndUpdate(
      id,
      updateTodoData,
    );
    return updatedTodo;
  }

  async deleteTodo(id: string): Promise<Todo> {
    const deletedTodo = await this.todoModel.findByIdAndDelete(id);
    return deletedTodo;
  }
}
