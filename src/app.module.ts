import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeController } from './controller/employeeController';
import { UserController } from './controller/userController';
import { EmployeeService } from './services/employee.Service';

@Module({
  imports: [],
  controllers: [AppController,UserController, EmployeeController],
  providers: [AppService,EmployeeService],
})
export class AppModule {}
