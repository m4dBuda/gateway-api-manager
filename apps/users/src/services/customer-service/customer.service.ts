import { Injectable } from '@nestjs/common';
import { PrismaClient, customer } from '@prisma/client';

@Injectable()
export class CustomerService {
  constructor(private readonly $prisma: PrismaClient) {}

  public async getCustomers(): Promise<customer[]> {
    return this.$prisma.customer.findMany();
  }

  public async getCustomer(id: string): Promise<customer> {
    return this.$prisma.customer.findFirst({
      where: {
        id,
      },
      include: {
        address: true,
      },
    });
  }

  public async createCustomer(data: customer): Promise<customer> {
    return this.$prisma.customer.create({
      data: data,
    });
  }

  public async updateCustomer(data: customer, id: string): Promise<customer> {
    return this.$prisma.customer.update({
      data: data,
      where: {
        id,
      },
    });
  }

  public async inactivateCustomer(id: string): Promise<customer> {
    return this.$prisma.customer.update({
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
