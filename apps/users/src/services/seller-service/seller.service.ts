import { Injectable } from '@nestjs/common';
import { PrismaClient, seller } from '@prisma/client';

@Injectable()
export class SellerService {
  constructor(private readonly $prisma: PrismaClient) {}

  public async getSellers(): Promise<seller[]> {
    return this.$prisma.seller.findMany();
  }

  public async getSeller(id: string): Promise<seller> {
    return this.$prisma.seller.findFirst({
      where: {
        id,
      },
      include: {
        address: true,
      },
    });
  }

  public async createSeller(data: seller): Promise<seller> {
    return this.$prisma.seller.create({
      data: data,
    });
  }

  public async updateSeller(data: seller, id: string): Promise<seller> {
    return this.$prisma.seller.update({
      data: data,
      where: {
        id,
      },
    });
  }

  public async inactivateSeller(id: string): Promise<seller> {
    return this.$prisma.seller.update({
      data: {
        active: false,
        updated_at: new Date(),
      },
      where: {
        id,
      },
    });
  }
}
