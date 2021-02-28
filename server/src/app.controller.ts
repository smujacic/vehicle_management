/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post, ValidationPipe, Delete } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
  ) {}

  @Get('vehicle/:page?/:query?')
  async getVehicle(@Param('page') page: number, @Param('query') query?: string): Promise<any> {
    return await this.appService.getVehicle(page, query);
  }

  @Post('vehicle')
  async storeVehicle(@Body(new ValidationPipe()) data: {
    make: string;
    model: string;
    year: number;
  }): Promise<boolean> {
    console.log(data)
    return await this.appService.storeVehicle(data)
  }

  @Delete('vehicle/:id/delete')
  async deleteVehicle(@Param('id') id: number): Promise<any> {
    console.log(id)
    return await this.appService.deleteVehicle(id);
  }
}
