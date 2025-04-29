import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class AuthDto {
  @IsEmail({}, { message: 'Invalid email address' }) // validate email format
  @IsNotEmpty()
  email: string; // email address of the user

  @IsString()
  @IsNotEmpty()
  password: string; // password of the user
}
 