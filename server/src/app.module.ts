import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vehicle } from './vehicle.entity';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        host: 'localhost',
        port: 5433,
        username: 'digihey',
        password: 'digihey**!',
        database: 'digihey',
        entities: [Vehicle],

        synchronize: true,
        ssl: false,
      }),
    }),
    TypeOrmModule.forFeature([Vehicle]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
