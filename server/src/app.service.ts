/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vehicle } from './vehicle.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Vehicle)
    private readonly vehicleRepository: Repository<Vehicle>,
  ) {}

  /**
  * @param {query}
  */
  async getVehicle(page = 1, query?: string): Promise<any> {
    let filter = '';
    const offset = ((page * 100) - 100)

    if (query !== undefined) {
      filter = query.replace(/\s/gm, '%');
    }
  
    const total = await this.vehicleRepository.query(
      `SELECT * FROM vehicle WHERE (make || ' ' || model || ' ' || year) LIKE '%${filter.toUpperCase()}%'`
    );

    const pages = Math.round(total.length / 100);

    const vehicle = await this.vehicleRepository.query(
      `SELECT * FROM vehicle WHERE (make || ' ' || model || ' ' || year) LIKE '%${filter.toUpperCase()}%' LIMIT 100 OFFSET ${offset}`
    );

    return { vehicle, pages };
  }

  /**
  * @param {data}
  */
  async storeVehicle(data: {
    make: string;
    model: string;
    year: number;
  }): Promise<boolean> {
    return this.vehicleRepository.query(
      `INSERT INTO vehicle (make, model, year) VALUES ('${data.make.toUpperCase()}', '${data.model.toUpperCase()}', ${data.year})`
    ).catch(() => { return false }).then(() => { return true });
  }

  /**
  * @param {id}
  */
  async deleteVehicle(id: number): Promise<boolean>{
    return await this.vehicleRepository.query(`DELETE FROM vehicle WHERE id = ${id}`).catch(() => { return false }).then(() => { return true })
  }
}
