import React from "react";
import { useGetCountryQuery } from "src/features/country/store/countryService";

interface CountryDetailLayoutProps {
  alphaCode: string;
}

const LabelCell = ({ children }: { children: React.ReactNode }) => (
  <th scope="row" className="py-4 px-6 font-bold tracking-wider whitespace-nowrap">
    {children}
  </th>
);

const ValueCell = ({ children }: { children: React.ReactNode }) => (
  <td className="py-4 px-6 text-slate-200">{children}</td>
);

export const CountryDetailLayout = ({ alphaCode }: CountryDetailLayoutProps) => {
  const { data, isLoading } = useGetCountryQuery(alphaCode);
  const country = data?.[0];

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (!country) {
    return <div>Country not found</div>;
  }
  const flagUrl = country.flags?.svg || country.flags?.png || "";
  return (
    <div className="text-slate-300 flex justify-center items-center">
      <div className="overflow-hidden shadow-md rounded-lg">
        <table className="min-w-[50vw] w-full text-sm text-left text-slate-500 text-slate-400">
          <tbody>
            <tr className="border-b bg-slate-800 border-slate-700 hover:bg-slate-600">
              <LabelCell>Common Name</LabelCell>
              <ValueCell>{country.names?.eng?.common}</ValueCell>
            </tr>
            <tr className="border-b bg-slate-800 border-slate-700 hover:bg-slate-600">
              <LabelCell>Official Name</LabelCell>
              <ValueCell>{country.names?.eng?.official}</ValueCell>
            </tr>
            <tr className="border-b bg-slate-800 border-slate-700 hover:bg-slate-600">
              <LabelCell>Currency</LabelCell>
              <ValueCell>
                {Object.entries(country.currencies || {}).map(([key, value]) => (
                  <p key={key}>
                    {value.name} - {value.symbol}
                  </p>
                ))}
              </ValueCell>
            </tr>
            <tr className="border-b bg-slate-800 border-slate-700 hover:bg-slate-600">
              <LabelCell>Languages</LabelCell>
              <ValueCell>{Object.values(country.languages || {}).join(" | ")}</ValueCell>
            </tr>
            <tr className="border-b bg-slate-800 border-slate-700 hover:bg-slate-600">
              <LabelCell>Flag</LabelCell>
              <ValueCell>
                {flagUrl && (
                  <img
                    src={flagUrl}
                    className="h-10 border border-slate-400 p-0.5 rounded-md"
                    alt={country.names?.eng?.common || ""}
                  />
                )}
              </ValueCell>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
