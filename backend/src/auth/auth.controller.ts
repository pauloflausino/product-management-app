/* Auth controller */
// auth/auth.controller.ts
import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() body: { username: string; password: string }) {
    const user = await this.authService.validateUser(body.username, body.password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return this.authService.login(user);
  }
}

// ... (código anterior permanece o mesmo)

// Aplicar proteção com JWT:
// Em qualquer controller: use @UseGuards(AuthGuard('jwt')) e @Request() para acessar o user.

// Exemplo:
// @UseGuards(AuthGuard('jwt'))
// @Get('secure')
// getSecureData(@Request() req) {
//   return req.user;
// }

// ✅ Projeto agora tem autenticação completa com JWT.
