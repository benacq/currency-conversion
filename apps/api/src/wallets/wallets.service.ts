import { Injectable } from '@nestjs/common';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { UpdateWalletDto } from './dto/update-wallet.dto';
import { WalletsRepository } from './wallets.repository';
import { WalletEntity } from './entities/wallet.entity';


@Injectable()
export class WalletsService {
  constructor(private walletRepo: WalletsRepository) { }

  create(createWalletDto: CreateWalletDto) {
    return this.walletRepo.create(createWalletDto);
  }

  findAll() {
    // const money: Money = new GHS(345.43)
    
    return this.walletRepo.findAll();
  }

  async findOne(id: string){
    const wallet = await this.walletRepo.findOne(id);
    return wallet;
  }

  update(id: string, updateWalletDto: UpdateWalletDto) {
    return this.walletRepo.update(id, updateWalletDto);
  }

  remove(id: string) {
    return this.walletRepo.remove(id);
  }
}
