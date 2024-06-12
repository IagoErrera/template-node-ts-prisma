import { container } from 'tsyringe';

import mailConfig from '@config/mail';

import SESMailProvider from './implementations/SESMailProvider';
import IMailProvider from './models/IMailProvider';

const providers = {
  ses: container.resolve(SESMailProvider),
};

container.registerInstance<IMailProvider>('MailProvider', providers[mailConfig.driver]);
