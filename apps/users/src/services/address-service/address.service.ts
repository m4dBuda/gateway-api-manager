import { Injectable } from '@nestjs/common';
import { address } from '@prisma/client';

@Injectable()
export class AddressService {
  constructor(private readonly $address: address) {}
}
