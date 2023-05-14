const AuthLayouts = (props) => {
  const { children, title } = props;
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="flex gap-x-5">
        <div className="w-full max-w-xs">
          <h1 className="text-3xl font-bold mb-8 text-blue-600">{title}</h1>
          <p className="font-medium text-slate-500 mb-3">welcome, palse enter you detail</p>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayouts;
