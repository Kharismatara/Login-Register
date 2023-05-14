const Button = (props) => {
  // destruturing
  const { children = "....", classname = "bg-yellow-700" } = props;
  return (
    <button className={`h-10 px-6 font-semibold rounded-md ${classname} text-white`} type="submit">
      {/* {props.text} */}

      {/* //props khusus */}
      {children}
    </button>
  );
};

export default Button;
