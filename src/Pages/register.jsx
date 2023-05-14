import AuthLayouts from "../Components/Layouts/AuthLayouts";
import FromRegsiter from "../Components/Fragments/FromRegister";
import { Link } from "react-router-dom";
const RegisPage = () => {
  return (
    <AuthLayouts title="Register">
      <FromRegsiter />
      <p className="my-3 text-center">
        Don't have an account ?{" "}
        <Link to="/login" className="font-bold text-blue-500">
          Register
        </Link>
      </p>
    </AuthLayouts>
  );
};
export default RegisPage;
