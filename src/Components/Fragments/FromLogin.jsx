import InputFrom from "../Elements/Input/Index";
import Button from "../Elements/Button/Button";

const FromLogin = () => {
  return (
    <form action="">
      <InputFrom label="Email" type="email" placeholder="taram@gmail.com" name="email" />
      <InputFrom label="Password " type="password " placeholder="*******" name="password" />

      <Button classname="bg-blue-600 w-full">Login</Button>
    </form>
  );
};

export default FromLogin;
