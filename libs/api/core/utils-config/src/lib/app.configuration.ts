import { Inject } from '@nestjs/common';
import { registerAs, ConfigType } from '@nestjs/config';

export const appConfiguration = registerAs('app', () => {
  return {
    protocal: process.env.APP_PROTOCOL || 'http',
    host: process.env.APP_HOST || 'localhost',
    port: Number(process.env.AP_PORT) || 3000,
    get domain() {
      return `${this.protocal}://${this.host}:${this.port}`;
    },
  };
});

export type AppConfiguration = ConfigType<typeof appConfiguration>;

export const InjectAppConfig = () => Inject(appConfiguration.KEY);
