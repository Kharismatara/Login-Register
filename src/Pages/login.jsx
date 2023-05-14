import AuthLayouts from "../Components/Layouts/AuthLayouts";
import FromLogin from "../Components/Fragments/FromLogin";
import { Link } from "react-router-dom";
const LogiPage = () => {
  return (
    <AuthLayouts title="Login" type="login">
      <FromLogin />
    </AuthLayouts>
  );
};
export default LogiPage;
