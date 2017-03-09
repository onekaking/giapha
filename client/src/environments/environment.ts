// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
const providers: any[] = [
  { provide: 'environment', useValue: 'Production' },
  { provide: 'version', useValue: '0.1.0' },
  { provide: 'baseUrl', useValue: 'http://localhost:1337' },
  { provide: 'defaultLanguage', useValue: 'en' }
];

export const ENV_PROVIDERS = providers;

export const environment = {
  production: false
};
