import {
  BookOpen,
  Clock,
  Heart,
  IndianRupee,
  MapPin,
  Shield,
  Users,
} from "lucide-react";

export default function InquiryServicesSectionOne() {
  return (
    <div className="bg-white/50 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-lg">
      <div className="flex items-center mb-6">
        <Heart className="w-6 h-6 text-rose-500 mr-3" />
        <h3 className="text-xl font-bold text-slate-800">Why Choose FSO?</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex items-center p-3 rounded-lg bg-gradient-to-r from-emerald-50 to-green-50">
          <Clock className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
          <span className="text-slate-700 font-medium">
            Offer letter in less than <strong>48 hours</strong>
          </span>
        </div>
        <div className="flex items-center p-3 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50">
          <Users className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
          <span className="text-slate-700 font-medium">
            Dedicated Counselor for Each Student
          </span>
        </div>
        <div className="flex items-center p-3 rounded-lg bg-gradient-to-r from-violet-50 to-purple-50">
          <IndianRupee className="w-5 h-5 text-violet-500 mr-3 flex-shrink-0" />
          <span className="text-slate-700 font-medium">
            Scholarships worth <strong>₹10,00,000</strong>
          </span>
        </div>
        <div className="flex items-center p-3 rounded-lg bg-gradient-to-r from-rose-50 to-pink-50">
          <Shield className="w-5 h-5 text-rose-500 mr-3 flex-shrink-0" />
          <span className="text-slate-700 font-medium">
            <strong>98%</strong> Visa Success Rate
          </span>
        </div>
        <div className="flex items-center p-3 rounded-lg bg-gradient-to-r from-amber-50 to-yellow-50">
          <MapPin className="w-5 h-5 text-amber-500 mr-3 flex-shrink-0" />
          <span className="text-slate-700 font-medium">
            Free Pre-Departure Orientation
          </span>
        </div>
        <div className="flex items-center p-3 rounded-lg bg-gradient-to-r from-teal-50 to-cyan-50">
          <BookOpen className="w-5 h-5 text-teal-500 mr-3 flex-shrink-0" />
          <span className="text-slate-700 font-medium">
            British Council & IDP Certified Trainers
          </span>
        </div>
      </div>
    </div>
  );
}
