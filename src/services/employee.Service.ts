import { Injectable } from "@nestjs/common";
import { EmployeeRequestDto } from "src/dto/employee.request.dto";

@Injectable()
export class EmployeeService {
  private readonly employees: EmployeeRequestDto[] = [];

  create(employee: EmployeeRequestDto) {
    this.employees.push(employee);
    return employee;
  }

  findAll(): EmployeeRequestDto[] {
    return this.employees;
  }

}