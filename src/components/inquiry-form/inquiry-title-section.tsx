export default function InquiryTitleSection() {
  return (
    <div className="flex flex-col items-center">
      <div className="inline-flex items-center py-2">
        <img
          src="/FSO Logo.png"
          className="h-24 drop-shadow-2xl"
          alt="FSO Logo"
        />
      </div>

      <h1 className="text-3xl text-center md:text-7xl font-bold bg-gradient-to-r from-violet-600 via-rose-500 to-cyan-500 bg-clip-text text-transparent mb-2 leading-tight">
        Dream. Study. Achieve.
      </h1>

      <p className="text-center text-slate-600 max-w-3xl mx-auto mb-8 leading-relaxed">
        Make your academic dreams come true with our expert guidance—trusted by
        thousands to get into top global universities.
      </p>
    </div>
  );
}
