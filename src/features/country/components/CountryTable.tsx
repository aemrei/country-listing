import { Link } from "react-router-dom";
import React from "react";

interface TableCellProps {
  onClick?: () => void;
  children?: React.ReactNode;
  className?: string;
}

const TableCell = ({ onClick, children, className = "", ...props }: TableCellProps) => (
  <td onClick={onClick} className={`px-4 py-2 ${className}`} {...props}>
    {children}
  </td>
);

interface CountryTableProps {
  countries: CountrySummary[];
  setSelectedCountry: (country: CountrySummary | null) => void;
}

export const CountryTable = ({ countries, setSelectedCountry }: CountryTableProps) => {
  return (
    <div className="min-h-full text-slate-300 flex-col flex justify-center items-center">
      <div className="overflow-x-auto relative shadow-md rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 text-gray-400">
          <thead className="text-xs uppercase bg-gray-700 text-gray-300">
            <tr>
              <th scope="col" className="py-3 px-6">
                Code
              </th>
              <th scope="col" className="py-3 px-6">
                Name
              </th>
              <th scope="col" className="py-3 px-6">
                Capital
              </th>
              <th scope="col" className="py-3 px-6" />
            </tr>
          </thead>
          <tbody>
            {countries.map((country) => (
              <tr
                key={country.cca3}
                className="border-b bg-gray-800 border-gray-700 hover:bg-gray-600"
              >
                <TableCell>{country.cca3}</TableCell>
                <TableCell
                  className="cursor-pointer text-sky-500"
                  onClick={() => setSelectedCountry(country)}
                >
                  {country.names?.eng?.common}
                </TableCell>
                <TableCell>{(country.capital || []).join(", ")}</TableCell>
                <TableCell>
                  <Link
                    to={`/details/${country.cca3}`}
                    className="inline-block w-8 text-center"
                  >
                    👁
                  </Link>
                </TableCell>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
