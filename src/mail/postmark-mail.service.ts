import { Injectable } from "@nestjs/common";
import { MailService } from "./mail.service";

@Injectable()
export class postmarkMailService implements MailService {
    sendMail(): string {
        return "Postmark Mail!";
    }
    sendEmail(): string {
        return "Postmark Mail!";
    }
}