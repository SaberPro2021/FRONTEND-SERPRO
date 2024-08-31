// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  urlQuestionApi: window["env"]["apiUrl"] || "default",
  qtyRamdomQuestions: 10,
  msgGralApp: 'Bienvenido a SaberPro (dev)',
  msgHeader: '',
  maxTestsDrawProfile: 10
};
