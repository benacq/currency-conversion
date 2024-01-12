import { Module } from '@nestjs/common';
import { WalletsService } from './wallets.service';
import { WalletsController } from './wallets.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { WalletsRepository } from './wallets.repository';

@Module({
  controllers: [WalletsController],
  providers: [WalletsService, WalletsRepository],
  imports: [PrismaModule]
})
export class WalletsModule {}
