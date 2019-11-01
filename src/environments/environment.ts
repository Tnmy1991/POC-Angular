// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  rapid_api: {
    key: "81c29f4051msh1004bb8307e4948p17f135jsn8ffa2e7c4bb0",
    email: {
      host: "pozzad-email-validator.p.rapidapi.com",
      endpoint: "https://pozzad-email-validator.p.rapidapi.com/emailvalidator/validateEmail/"
    },
    post_office: {
      host: "pincode.p.rapidapi.com",
      endpoint: "https://pincode.p.rapidapi.com/"
    }
  },
  openweather_api: {
    key: "ac4bf024b73edcba91d2143dc028cb09",
    endpoint: "https://api.openweathermap.org/data/2.5/weather",
    icons_url: "https://openweathermap.org/img/wn/",
    icons_suffix: "@2x.png"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
