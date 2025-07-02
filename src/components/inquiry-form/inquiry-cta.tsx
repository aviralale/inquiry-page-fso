import { CheckCircle } from "lucide-react";

export default function InquiryCTA() {
  return (
    <div className="mt-16 text-center">
      <div className="bg-gradient-to-r from-violet-500/10 via-rose-500/10 to-cyan-500/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
        <h3 className="text-2xl font-bold text-slate-800 mb-4">
          Ready to Make Your Dreams Come True?
        </h3>
        <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
          Join thousands of successful students who trusted us with their study
          abroad journey. Your future starts with a single step.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-600">
          <span className="flex items-center">
            <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
            Free Consultation
          </span>
          <span className="flex items-center">
            <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
            No Hidden Fees
          </span>
          <span className="flex items-center">
            <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
            Expert Guidance
          </span>
          <span className="flex items-center">
            <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
            24/7 Support
          </span>
        </div>
      </div>
    </div>
  );
}
