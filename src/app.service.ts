import { Injectable } from '@nestjs/common';
const si = require('systeminformation');
const Gpio = require('onoff').Gpio;
var LED = new Gpio(3, 'out');

@Injectable()
export class AppService {
  async getHello() {
    let data = await si.cpu()
    return data
  }


  async turnOn(){
    
    if (LED.readSync() === 0) { //check the pin state, if the state is 0 (or off)
      LED.writeSync(1); //set pin state to 1 (turn LED on)
    } else {
      LED.writeSync(0); //set pin state to 0 (turn LED off)
    }
    return {
      status:'200',
      message:'Success',
      led_status:LED.readSync()
    }
  }

  async off(){
    var LED = new Gpio(3, 'out');
  
    LED.writeSync(0); //set pin state to 0 (turn LED off)
   
    return {
      status:'200',
      message:'Success',
      led_status:LED.readSync()
    }
  }

}
