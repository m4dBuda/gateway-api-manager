import { Module } from '@nestjs/common';
import { registerEnumType } from '@nestjs/graphql';
import { customer_status, seller_status } from '@prisma/client';
import { AxiosAdapter } from './adapters/axios.adapter';

@Module({
  imports: [],
  providers: [AxiosAdapter],
  exports: [AxiosAdapter],
})
export class SharedModule {
  constructor() {
    registerEnumType(customer_status, {
      name: 'CustomerStatusEnum',
      description: 'Estes são os status suportados',
      valuesMap: {
        PENDING_PAYMENT_METHOD: {
          description:
            'Status que representa a não possibilidade de finalizar compras in-app, pois não há método de pagamento associado à este usuário.',
        },
        APPROVED: {
          description: 'Status que representa uma conta sem pendências',
        },
        BLOCKED: {
          description:
            'Status que representa um usuário bloqueado da plataforma.',
        },
        WAITING: {
          description:
            'Status que representa o aguardo de alguma ação por parte da equipe de suporte ao cliente.',
        },
      },
    });

    registerEnumType(seller_status, {
      name: 'SellerStatusEnumFidelity',
      description: 'Estes são os status suportados',
      valuesMap: {
        PENDING_DOCUMENTS: {
          description:
            'Status que representa a pendência do envio de documentos por parte da empresa.',
        },
        APPROVED: {
          description: 'Status que representa uma conta sem pendências',
        },
        BLOCKED: {
          description:
            'Status que representa uma empresa bloqueado da plataforma.',
        },
        WAITING: {
          description:
            'Status que representa o aguardo de alguma ação por parte da equipe de suporte ao cliente.',
        },
      },
    });
  }
}
