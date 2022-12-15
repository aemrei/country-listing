import { useGetCountriesQuery } from "src/features/country/store/countryService";
import { CountryTable } from "src/features/country/components/CountryTable";
import { useState } from "react";
import { CountryNamePopup } from "src/features/country/components/CountryNamePopup";

export const CountryListingLayout = () => {
  const { data: countries, isLoading } = useGetCountriesQuery();
  const [selectedCountry, setSelectedCountry] = useState<CountrySummary | null>(null);

  return (
    <div className="min-h-screen text-slate-300 flex-col flex justify-center items-center">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <CountryTable
          countries={countries || []}
          setSelectedCountry={setSelectedCountry}
        />
      )}
      <CountryNamePopup
        selected={selectedCountry}
        onClose={() => setSelectedCountry(null)}
      />
    </div>
  );
};
