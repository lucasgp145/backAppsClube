import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { AppsModule } from './modules/apps/apps.module';
import { GamesModule } from './modules/games/games.module';
import { KidsModule } from './modules/kids/kids.module';

@Module({
  imports: [UserModule, AppsModule, GamesModule, KidsModule],
})
export class AppModule {}
