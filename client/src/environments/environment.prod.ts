const providers: any[] = [
  { provide: 'environment', useValue: 'Production' },
  { provide: 'version', useValue: '0.1.0' },
  { provide: 'baseUrl', useValue: 'http://localhost:1337' },
  { provide: 'defaultLanguage', useValue: 'en' }
];

export const ENV_PROVIDERS = providers;

export const environment = {
  production: true
};
