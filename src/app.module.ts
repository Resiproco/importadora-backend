import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { RoleModule } from './modules/role/role.module';
import { EmailModule } from './email/email.module';
import { UserModule } from './modules/user/user.module';
import { DatabaseModule } from './database/database.module';
import { CompanyModule } from './modules/company/company.module';
import { TransactionModule } from './modules/transaction/transaction.module';
import { MulterModule } from '@nestjs/platform-express';
import { EventEmitterModule } from '@nestjs/event-emitter';

@Module({
  imports: [
    ConfigModule.forRoot(),
    EventEmitterModule.forRoot(),
    DatabaseModule,
    MulterModule.register(),
    UserModule,
    RoleModule,
    CompanyModule,
    AuthModule,
    EmailModule,
    TransactionModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
