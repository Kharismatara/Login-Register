import InputFrom from "../Elements/Input/Index";
import Button from "../Elements/Button/Button";

const FromRegsiter = () => {
  return (
    <form action="">
      <InputFrom label="Full Name " type="text" placeholder="Inset your name here " name="fullname" />
      <InputFrom label="Email" type="email" placeholder="taram@gmail.com" name="email" />
      <InputFrom label="Password " type="password " placeholder="*******" name="password" />
      <InputFrom label=" Confirm Password " type="password " placeholder="*******" name="confirmpassword" />

      <Button classname="bg-blue-600 w-full">Register</Button>
    </form>
  );
};

export default FromRegsiter;
