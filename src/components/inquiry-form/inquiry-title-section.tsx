export default function InquiryTitleSection() {
  return (
    <div className="flex flex-col items-center">
      <div className="inline-flex items-center gap-4 px-4 py-2 mb-6">
        <img
          src="/FSO Logo.png"
          className="h-24 drop-shadow-2xl"
          alt="FSO Logo"
        />
      </div>

      <h1 className="text-5xl text-center md:text-7xl font-bold bg-gradient-to-r from-violet-600 via-rose-500 to-cyan-500 bg-clip-text text-transparent mb-6 leading-tight">
        Dream. Study. Achieve.
      </h1>

      <p className="text-xl text-center text-slate-600 max-w-3xl mx-auto mb-8 leading-relaxed">
        Turn your academic dreams into reality with our expert guidance. We've
        helped thousands of students gain admission to world-class universities
        across the globe.
      </p>
    </div>
  );
}
