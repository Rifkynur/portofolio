import Title from "../util/Title";
import { useEffect,useState } from "react";

function ContactPage() {
  useEffect(() => {
    document.title = "Contact";
  });

  const [form, setForm] = useState({
    name: '',
    message: '',
  });

   const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const phone = '6281908746609'; // nomor tujuan
    const text = `Halo, saya ${form.name}, ingin bertanya: ${form.message}`;
    const waLink = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

    window.open(waLink, '_blank');
  };
  return (
    <div className="main-content w-full ">
      <Title title="Contact Me" />
      <form onSubmit={handleSubmit}
        className="flex flex-col gap-3 shadow-[2px_2px_10px_#000] w-[80%] mx-auto mt-6 bg-secondary p-5 pb-10 rounded-lg dark:bg-slate-700 dark:shadow-[2px_2px_10px_#0079FF] max-w-[800px]"
      >
        <h3 className="text-xs text-center font-bold md:text-lg">Contact Form</h3>
        {/* <input type="email" name="email" placeholder="Email" className="p-2 text-xs rounded-md outline-none md:text-lg dark:bg-slate-600" required autoComplete="off" /> */}
        <input type="text" name="name" placeholder="Name" className=" p-2 text-xs rounded-md outline-none md:text-lg dark:bg-slate-600" required autoComplete="off" onChange={handleChange}/>
        <textarea name="message" cols="20" rows="4" placeholder="Masukan Pesan Anda" className="p-2 text-xs rounded-md outline-none resize-none md:text-lg dark:bg-slate-600" required onChange={handleChange}></textarea>
        <button type="submit" className="text-xs px-4 py-2 bottom-1 right-1 font-bold text-white rounded-md bg-light dark:bg-dark md:text-lg dark:text-slate-900">
          Kirim
        </button>
      </form>
    </div>
  );
}
export default ContactPage;
