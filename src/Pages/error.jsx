import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  return (
    <div className="flex justify-center min-h-screen items-center flex-col">
      <h1 className="text-3XL font-bold">OOPS </h1>
      <p className="text-xl my-0.5">Sorry, an unexpected ha accured </p>
      <p className="text-lg">{error.statusText || error.message}</p>
    </div>
  );
}
export default ErrorPage;
