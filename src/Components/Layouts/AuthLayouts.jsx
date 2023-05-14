import { Link } from "react-router-dom";
const AuthLayouts = (props) => {
  const { children, title, type } = props;
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="flex gap-x-5">
        <div className="w-full max-w-xs">
          <h1 className="text-3xl font-bold mb-8 text-blue-600">{title}</h1>
          <p className="font-medium text-slate-500 mb-3">welcome, palse enter you detail</p>
          {children}
          <p className="my-3 text-center">
            {type === "login" ? "Don't have an account?" : "Already have account"}

            {type === "login" && (
              <Link to="/register" className="font-bold text-blue-500">
                Register
              </Link>
            )}
            {type === "register" && (
              <Link to="/login" className="font-bold text-blue-500">
                Login
              </Link>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthLayouts;
