import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Todo } from './schemas/app.schema';

@Controller('todos')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  createTodo(@Body() createTodo: { title: string; completed: boolean }) {
    return this.appService.createTodo(createTodo);
  }

  @Get()
  getAllTodos(): Promise<Todo[]> {
    return this.appService.getAllTodos();
  }

  @Get(':id')
  getTodoById(@Param('id') id: string): Promise<Todo> {
    return this.appService.getTodoById(id);
  }

  @Patch(':id')
  updateTodo(
    @Param('id') id: string,
    @Body() updateTodoData: { title?: string; completed?: boolean },
  ): Promise<Todo> {
    return this.appService.updateTodo(id, updateTodoData);
  }

  @Delete(':id')
  deleteTodo(@Param('id') id: string): Promise<Todo> {
    return this.appService.deleteTodo(id);
  }
}
