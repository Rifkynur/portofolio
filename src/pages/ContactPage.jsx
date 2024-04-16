import Title from "../util/Title";
import { useEffect } from "react";
function ContactPage() {
  useEffect(() => {
    document.title = "Contact";
  });
  return (
    <div className="main-content ">
      <Title title="Contact Me" />
      <form
        action="https://formsubmit.co/ythrifky619@gmail.com"
        method="POST"
        className="flex flex-col gap-3 shadow-[2px_2px_10px_#000] w-[80%] mx-auto mt-6 bg-secondary p-5 pb-10 rounded-lg dark:bg-slate-700 dark:shadow-[2px_2px_10px_#00e5fb]"
      >
        <h3 className="text-xs text-center font-bold md:text-lg">Contact Form</h3>
        <input type="email" name="email" placeholder="Email" className="p-2 text-xs rounded-md outline-none md:text-lg dark:bg-slate-600" required autoComplete="off" />
        <input type="text" name="subject" placeholder="Subject" className=" p-2 text-xs rounded-md outline-none md:text-lg dark:bg-slate-600" required autoComplete="off" />
        <input type="hidden" name="_next" value="http://localhost:5173/" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />
        <textarea name="message" cols="20" rows="4" placeholder="Masukan Pesan Anda" className="p-2 text-xs rounded-md outline-none resize-none md:text-lg dark:bg-slate-600" required></textarea>
        <button type="submit" className="text-xs px-4 py-2 bottom-1 right-1 font-bold text-white rounded-md bg-light dark:bg-dark md:text-lg dark:text-slate-900">
          Kirim
        </button>
      </form>
    </div>
  );
}
export default ContactPage;
