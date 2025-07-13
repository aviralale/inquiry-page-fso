import { Quote, Star } from "lucide-react";
export default function InquiryFounderSection() {
  return (
    <>
      <div className="bg-white/40 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-lg mt-8 max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="relative">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden ring-4 ring-white/50 shadow-2xl">
              <img
                src="/bhavik-siddhpura-min.JPG"
                alt="Bhavik Siddhpura - Founder & CEO"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-violet-400 to-purple-500 rounded-full flex items-center justify-center">
              <Star className="w-4 h-4 text-white fill-current" />
            </div>
          </div>

          <div className="flex-1 text-center md:text-left">
            <Quote className="w-8 h-8 text-violet-400 mx-auto md:mx-0 mb-4" />
            <blockquote className="text-lg md:text-xl text-slate-700 italic mb-4 leading-relaxed">
              "Every student deserves a chance to chase their dreams. At FSO,
              we're your partners shaping a brighter future."
            </blockquote>
            <div className="space-y-1">
              <div className="text-xl font-bold text-slate-800">
                Bhavik Siddhpura
              </div>
              <div className="text-sm text-violet-600 font-medium">
                Founder & CEO, FSO
              </div>
              <div className="text-xs text-slate-500">
                Transforming Lives Through Education
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
