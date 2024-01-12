import { Injectable } from '@nestjs/common';
import { CreateTransactionDto, CreateTransactionDtoUntagged } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TransactionsService {
  constructor(private prisma: PrismaService) { }

  create(createTransactionDto: CreateTransactionDtoUntagged) {
    console.log(createTransactionDto)
    return this.prisma.transaction.create({ data: createTransactionDto }).catch((err)=>{
      throw err;
    })
  }

  findAll() {
    return this.prisma.transaction.findMany()
  }

  findOne(id: string) {
    return this.prisma.transaction.findUnique({ where: { id } })
  }

  async update(id: string, updateTransactionDto: UpdateTransactionDto) {
    try {
      return await this.prisma.wallet.update({
        where: { id },
        data: updateTransactionDto
      });
    } catch (err) {
      console.log(err);
    }
  }

  remove(id: string) {
    return `This action removes a #${id} transaction`;
  }
}
