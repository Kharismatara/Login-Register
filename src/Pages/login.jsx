import AuthLayouts from "../Components/Layouts/AuthLayouts";
import FromLogin from "../Components/Fragments/FromLogin";
import { Link } from "react-router-dom";
const LogiPage = () => {
  return (
    <AuthLayouts title="Login">
      <FromLogin />
      <p className="my-3 text-center">
        Don't have an account ?{" "}
        <Link to="/register" className="font-bold text-blue-500">
          Sign Up
        </Link>
      </p>
    </AuthLayouts>
  );
};
export default LogiPage;
