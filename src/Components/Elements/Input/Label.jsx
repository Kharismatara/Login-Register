const Label = (props) => {
  const { htmlFor, children } = props;

  //Anda dapat memanfaatkan prop "children" atau nama prop khusus untuk mengirim dan menampilkan konten di dalam komponen ReactJS.
  return (
    <label htmlFor={htmlFor} className="block text-slate-700 text-sm font-bold mb-2">
      {children}
    </label>
  );
};

export default Label;
