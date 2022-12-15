import { baseApi } from "src/store/api";

const transformResponse = (baseQueryReturnValue: any[]) => {
  return baseQueryReturnValue.map((country) => ({
    cca3: country.cca3,
    capital: country.capital || [],
    names: {
      eng: { common: country.name.common, official: country.name.official },
      ...country.name.nativeName,
    },
    currencies: country.currencies,
    flags: country.flags,
    languages: country.languages,
  }));
};

// Use REACT_APP_COUNTRY_API_URL environment variable to set the base URL
const extendedApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getCountries: build.query<CountrySummary[], void>({
      query: () => ({
        url: "https://restcountries.com/v3.1/all",
        method: "GET",
      }),
      transformResponse,
    }),
    getCountry: build.query<Country[], string>({
      query: (alphaCode) => ({
        url: `https://restcountries.com/v3.1/alpha/${alphaCode}`,
        method: "GET",
      }),
      transformResponse,
    }),
  }),
});

export const { useGetCountriesQuery, useGetCountryQuery } = extendedApi;
