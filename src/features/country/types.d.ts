interface CountryName {
  common: string;
  official: string;
}

interface CountrySummary {
  cca3: string;
  capital?: string[];
  names?: Record<string, CountryName>;
  languages?: Record<string, string>;
}

interface Country extends CountrySummary {
  currencies?: Record<string, { name: string; symbol: string }>;
  flags?: Record<"png" | "svg", string>;
}
