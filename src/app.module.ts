import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContatosModule } from './contatos/contatos.module';
import { AtividadesModule } from './atividades/atividades.module';
// ... outras importações


@Module({
  imports: [
    ContatosModule,
    AtividadesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
