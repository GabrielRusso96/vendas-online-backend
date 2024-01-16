import { UserEntity } from '../entities/user.entity';
import { UserType } from '../enum/user-type.enum';

export const userEntityMock: UserEntity = {
  id: 123456,
  name: 'Teste Mock',
  cpf: '123456',
  phone: '123456',
  email: 'teste@teste.com',
  password: 'SenhaMock',
  typeUser: UserType.User,
  createdAt: new Date(),
  updatedAt: new Date(),
};
