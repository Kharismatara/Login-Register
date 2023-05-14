import AuthLayouts from "../Components/Layouts/AuthLayouts";
import FromRegsiter from "../Components/Fragments/FromRegister";
import { Link } from "react-router-dom";
const RegisPage = () => {
  return (
    <AuthLayouts title="Register" type="register">
      <FromRegsiter />
    </AuthLayouts>
  );
};
export default RegisPage;
