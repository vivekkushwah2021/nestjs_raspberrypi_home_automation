import { Injectable } from '@nestjs/common';
const si = require('systeminformation');

@Injectable()
export class AppService {
  async getHello() {
    let data = await si.cpu()
    return data
  }
}
