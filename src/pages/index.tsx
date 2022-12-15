import { withAuthentication } from "src/features/auth/components/withAuthentication";
import { CountryListingLayout } from "src/features/country/components/CountryListingLayout";

export default withAuthentication("authenticated", CountryListingLayout);
