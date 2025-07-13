import { Mail, Phone } from "lucide-react";

export default function ContactOverlay() {
  return (
    <ul className="z-30 fixed flex flex-col items-center right-8 rounded-full border border-white top-1/2 backdrop:blur-3xl bg-gradient-to-b from-violet-600/80 to-rose-500/80">
      <a
        className="flex justify-center items-center w-16 py-8 transition-all hover:bg-violet-600 rounded-t-full"
        href="tel:+91-6359933777"
      >
        <Phone className="text-white" />
      </a>
      <hr className="border border-white w-full" />
      <a
        className="flex justify-center items-center w-16 py-8 hover:bg-rose-500 rounded-b-full  transition-all"
        href="mailto:visa@firststepoverseas.com"
      >
        <Mail className="text-white" />
      </a>
    </ul>
  );
}
