import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Todo extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true, default: false })
  completed: boolean;
}

export const todoSchema = SchemaFactory.createForClass(Todo);
