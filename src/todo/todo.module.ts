import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { SharedModule } from 'src/shared/shared.module';

@Module({
  imports:[SharedModule],
  controllers: [TodoController],
  providers: [TodoService]
})
export class TodoModule {}
