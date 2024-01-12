import { Injectable } from '@nestjs/common';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { UpdateWalletDto } from './dto/update-wallet.dto';
import { WalletsRepository } from './wallets.repository';

@Injectable()
export class WalletsService {
  constructor(private walletRepo: WalletsRepository) { }

  create(createWalletDto: CreateWalletDto) {
    return this.walletRepo.create(createWalletDto);
  }

  findAll() {
    return this.walletRepo.findAll();
  }

  findOne(id: number) {
    return this.walletRepo.findOne(id);
  }

  update(id: number, updateWalletDto: UpdateWalletDto) {
    return this.walletRepo.update(id, updateWalletDto);
  }

  remove(id: number) {
    return this.walletRepo.remove(id);
  }
}
