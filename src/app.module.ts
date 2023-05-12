import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SharedModule } from './shared/shared.module';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [SharedModule, TodoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
