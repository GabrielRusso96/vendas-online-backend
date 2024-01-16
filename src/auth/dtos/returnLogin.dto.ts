import { ReturnUserDto } from '../user/dtos/returnUser.dto';

export interface Returnlogin {
  user: ReturnUserDto;
  accessToken: string;
}
