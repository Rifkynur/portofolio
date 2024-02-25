import Title from "../util/Title";
import { useEffect } from "react";
function ContactPage() {
  useEffect(() => {
    document.title = "Contact";
  });
  return (
    <div className="main-content ">
      <Title title="Contact Me" />
      <form action="" className="flex flex-col gap-3 shadow-[2px_2px_10px_#000] w-[80%] mx-auto mt-6 bg-secondary p-5 pb-10 rounded-lg dark:bg-slate-700 dark:shadow-[2px_2px_10px_#00e5fb]">
        <h3 className="text-xs font-bold md:text-lg">Contact Form</h3>
        <input type="email" name="" placeholder="Email" className="p-2 text-xs rounded-md outline-none md:text-lg dark:bg-slate-600" required />
        <input type="text" name="" placeholder="Subject" className=" p-2 text-xs rounded-md outline-none md:text-lg dark:bg-slate-600" required />
        <textarea name="" id="" cols="20" rows="4" placeholder="Masukan Pesan Anda" className="p-2 text-xs rounded-md outline-none md:text-lg dark:bg-slate-600" required></textarea>
        <button className="text-xs px-4 py-2 bottom-1 right-1 font-bold text-white rounded-md bg-light dark:bg-dark md:text-lg dark:text-slate-900">Kirim</button>
      </form>
    </div>
  );
}
export default ContactPage;
