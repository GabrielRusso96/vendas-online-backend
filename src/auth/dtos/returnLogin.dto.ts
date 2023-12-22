import { ReturnUserDto } from 'src/user/dtos/returnUser.dto';

export interface Returnlogin {
  user: ReturnUserDto;
  accessToken: string;
}
