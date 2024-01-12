import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { WalletsModule } from './wallets/wallets.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    // ServeStaticModule.forRoot({
    //   rootPath: join(__dirname, '../..', 'ui', 'dist'),
    // }),
    PrismaModule,
    WalletsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
