import { IntrospectAndCompose, RemoteGraphQLDataSource } from '@apollo/gateway';
import { Module } from '@nestjs/common';
import { GraphQLModule, registerEnumType } from '@nestjs/graphql';
import { ApolloGatewayDriver, ApolloGatewayDriverConfig } from '@nestjs/apollo';
import { PrismaClient } from '@prisma/client';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloGatewayDriverConfig>({
      driver: ApolloGatewayDriver,
      server: {
        context: ({ req }) => {
          const authorization = req.headers.authorization || '';
          return {
            headers: {
              authorization,
            },
            req,
          };
        },
      },
      gateway: {
        buildService: ({ name, url }) => {
          return new RemoteGraphQLDataSource({
            url,
            willSendRequest({
              request,
              context,
            }: {
              request: any;
              context: any;
            }) {
              if (context && context.headers) {
                const headers = context.headers;

                Object.entries(headers).forEach(([name, value]) => {
                  request.http.headers.set(name, value);
                });
              }
            },
          });
        },
        supergraphSdl: new IntrospectAndCompose({
          subgraphs: [
            {
              name: 'users',
              url: 'http://localhost:3001/graphql',
            },
            // {
            //   name: 'products',
            //   url: 'http://localhost:3002/graphql',
            // },
            // {
            //   name: 'catalog',
            //   url: 'http://localhost:3003/graphql',
            // },
            // {
            //   name: 'communications',
            //   url: 'http://localhost:3004/graphql',
            // },
          ],
        }),
        debug: true,
      },
    }),
  ],
  providers: [PrismaClient],
})
export class AppModule {}
