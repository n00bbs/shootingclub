import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { entities } from './entities';
import { ConfigModule } from '@nestjs/config';
import { HttpLoggerMiddleware, TypeOrmLoggerContainer } from './logger';
import { RouterModule } from '@nestjs/core';
import { MembersModule } from './modules/members/members.module';
import { DepartmentsModule } from './modules/departments/departments.module';
import { UserAuthModule } from './modules/userAuth/userAuth.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';

const appModules = [
  MembersModule,
  DepartmentsModule,
  UserAuthModule,
  DashboardModule,
];

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: process.env.ENV_FILE_PATH || '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      name: 'default',
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.POSTGRES_PORT, 10) || 5432,
      username: process.env.POSTGRES_USERNAME,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      entities: entities,
      logging: 'all',
      logger: TypeOrmLoggerContainer.ForConnection('default', 'all'),
      applicationName: 'shootingclub-api',
      synchronize: true,
    }),
    ...appModules,
    RouterModule.register([
      {
        path: 'api/',
        children: appModules,
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: import('@nestjs/common').MiddlewareConsumer) {
    consumer.apply(HttpLoggerMiddleware).forRoutes('*');
  }
}
