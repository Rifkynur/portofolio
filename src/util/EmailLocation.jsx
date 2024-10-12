const EmailLocation = ({ title, desc }) => {
  return (
    <div className="text-xs md:ms-2">
      <h4 className="font-bold md:text-lg lg:text-xl text-slate-900 dark:text-white">{title}</h4>
      <p className="text-[10px] text-slate-600 lg:text-base dark:text-slate-400">{desc}</p>
    </div>
  );
};

export default EmailLocation;
