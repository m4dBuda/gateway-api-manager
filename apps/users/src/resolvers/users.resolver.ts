import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { UserService } from '../services/users.service';

@Resolver()
export class UsersResolver {
  constructor(private readonly $users: UserService) {}
}
