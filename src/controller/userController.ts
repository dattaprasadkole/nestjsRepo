import { Controller, Get, HttpCode } from '@nestjs/common'

@Controller("/users")
export class UserController {
  @Get()
  @HttpCode(201)
  getAllUser() {
    console.log("Returning the user list")
    return ['datta', 'sonu', 'shravni']
  }
}