import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello() {
    try {
      let res = await this.appService.getHello()
      return res
    } catch (error) {
      return error
    }
  }



}
