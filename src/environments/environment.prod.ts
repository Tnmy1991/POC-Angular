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
    indian_railways: {
      host: "indianrailways.p.rapidapi.com",
      endpoint: "https://indianrailways.p.rapidapi.com/"
    },
    numbers: {
      host: "numbersapi.p.rapidapi.com",
      endpoint: "https://numbersapi.p.rapidapi.com/"
    },
    wiki: {
      host: "wikisynonyms.p.rapidapi.com",
      endpoint: "https://wikisynonyms.p.rapidapi.com/"
    },
    url_shortener: {
      host: "url-shortener-service.p.rapidapi.com",
      endpoint: "https://url-shortener-service.p.rapidapi.com/shorten"
    }
  },
  openweather_api: {
    key: "ac4bf024b73edcba91d2143dc028cb09",
    current_condition: "https://api.openweathermap.org/data/2.5/weather",
    forecast_5days: "https://api.openweathermap.org/data/2.5/forecast",
    icons_url: "https://openweathermap.org/img/wn/",
    icons_suffix: "@2x.png"
  }
};
