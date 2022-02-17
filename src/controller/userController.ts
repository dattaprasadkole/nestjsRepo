import { Controller, Get, HttpCode } from '@nestjs/common'

@Controller("/users")
export class UserController {
  @Get()
  @HttpCode(201)
  getAllUser() {
    return ['datta', 'sonu', 'shravni']
  }
}