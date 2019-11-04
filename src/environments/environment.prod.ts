export const environment = {
  production: true,
  rapid_api: {
    key: "81c29f4051msh1004bb8307e4948p17f135jsn8ffa2e7c4bb0",
    email: {
      host: "pozzad-email-validator.p.rapidapi.com",
      endpoint: "https://pozzad-email-validator.p.rapidapi.com/emailvalidator/validateEmail/"
    },
    post_office: {
      host: "pincode.p.rapidapi.com",
      endpoint: "https://pincode.p.rapidapi.com/"
    },
    railways_station: {
      host: "rstations.p.rapidapi.com",
      endpoint: "https://rstations.p.rapidapi.com/"
    }
  },
  openweather_api: {
    key: "ac4bf024b73edcba91d2143dc028cb09",
    endpoint: "https://api.openweathermap.org/data/2.5/weather",
    icons_url: "https://openweathermap.org/img/wn/",
    icons_suffix: "@2x.png"
  }
};
