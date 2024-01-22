import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SMTPMailService } from './mail/smtp-mail.service';
import { MailService } from './mail/mail.service';
import { postmarkMailService } from './mail/postmark-mail.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [{
    provide: MailService,
    useClass: postmarkMailService
  }],
})
export class AppModule {}
