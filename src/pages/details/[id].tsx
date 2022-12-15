import { useNavigate, useParams } from "react-router-dom";
import { withAuthentication } from "src/features/auth/components/withAuthentication";
import { CountryDetailLayout } from "src/features/country/components/CountryDetailLayout";

const DetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  if (!id) {
    navigate("/404");
    return null;
  }
  return <CountryDetailLayout alphaCode={id} />;
};

export default withAuthentication("authenticated", DetailPage);
