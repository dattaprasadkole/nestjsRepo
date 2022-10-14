import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { get } from 'http'
import { EmployeeRequestDto } from 'src/dto/employee.request.dto';
import { EmployeeService } from 'src/services/employee.Service';

@Controller("/employee")
export class EmployeeController {
  constructor( readonly  employeeService : EmployeeService) {}

  @Get()
  getAllEmployees() {
    console.log("Returing the employee details");
    return this.employeeService.findAll();
  }

  // @Get(':id')
  // getEmployee(@Param("id") id: number) {
  //   console.log(id);
  //   return this.employee[id];
  // }

  @Post()
  async create(@Body() employeeDto : EmployeeRequestDto) {
    console.log("Adding the employee details");
    return this.employeeService.create(employeeDto);
  }
}