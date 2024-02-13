function ContactPage() {
  return (
    <div className="main-content ">
      <h2 className="text-sm font-bold after:block after:w-20 after:h-[2px] after:bg-gradient-to-r after:from-sky-500 after:to-lime-400 md:text-xl md:after:w-28">Contact Me</h2>
      <form action="" className="flex flex-col gap-3 w-[80%] mx-auto mt-4 bg-slate-300 p-5 pb-10 rounded-lg dark:bg-slate-700">
        <h3 className="text-xs font-bold md:text-lg">Contact Form</h3>
        <input type="text" name="" placeholder="Username" className="p-2 text-xs rounded-md outline-none md:text-lg dark:bg-slate-600" />
        <input type="email" name="" placeholder="Email" className="p-2 text-xs rounded-md outline-none md:text-lg dark:bg-slate-600" />
        <textarea name="" id="" cols="20" rows="4" placeholder="Masukan Pesan Anda" className="p-2 text-xs rounded-md outline-none md:text-lg dark:bg-slate-600"></textarea>
        <button className="text-xs px-4 py-2 bg-green-500 bottom-1 right-1 font-bold text-white rounded-md bg-gradient-to-r from-blue-700 to-green-700 md:text-lg">Kirim</button>
      </form>
    </div>
  );
}
export default ContactPage;
