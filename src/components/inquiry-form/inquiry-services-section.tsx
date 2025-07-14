import {
  Users,
  Award,
  MapPin,
  BookOpen,
  Building2,
  Plane,
  Heart,
  TrendingUp,
} from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: Heart,
      title: "Personalised Guidance",
      description: "We tailor our support to your goals, needs, and finances.",
      color: "from-violet-50 to-purple-50",
      borderColor: "border-violet-100",
      iconColor: "text-violet-500",
    },
    {
      icon: BookOpen,
      title: "IELTS Coaching",
      description: "Learn from certified and experienced IELTS trainers.",
      color: "from-blue-50 to-indigo-50",
      borderColor: "border-blue-100",
      iconColor: "text-blue-500",
    },
    {
      icon: Building2,
      title: "Financing Help",
      description: "We help you explore and access education funding.",
      color: "from-emerald-50 to-green-50",
      borderColor: "border-emerald-100",
      iconColor: "text-emerald-500",
    },
    {
      icon: Plane,
      title: "Visa Assurance",
      description: "98% visa success rate—your passport story starts here.",
      color: "from-cyan-50 to-blue-50",
      borderColor: "border-cyan-100",
      iconColor: "text-cyan-500",
    },
    {
      icon: Award,
      title: "Scholarships",
      description: "Get access to exclusive scholarships abroad.",
      color: "from-amber-50 to-yellow-50",
      borderColor: "border-amber-100",
      iconColor: "text-amber-500",
    },
    {
      icon: Users,
      title: "Interview Prep",
      description: "Sharpen your confidence and timing for success.",
      color: "from-rose-50 to-pink-50",
      borderColor: "border-rose-100",
      iconColor: "text-rose-500",
    },
    {
      icon: TrendingUp,
      title: "Job Guidance",
      description: "Find the right job while studying abroad.",
      color: "from-purple-50 to-violet-50",
      borderColor: "border-purple-100",
      iconColor: "text-purple-500",
    },
    {
      icon: MapPin,
      title: "Pre/Post Departure",
      description: "From airport pickup to job help—we’ve got you.",
      color: "from-teal-50 to-cyan-50",
      borderColor: "border-teal-100",
      iconColor: "text-teal-500",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-3xl p-8 border border-white/80 shadow-2xl">
        <div className="flex items-center mb-8">
          <div className="w-12 h-12 bg-gradient-to-br from-violet-400 to-purple-500 rounded-2xl flex items-center justify-center mr-4">
            <Award className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-800">Our Services</h3>
            <p className="text-slate-600 text-sm mt-1">
              Comprehensive support for your study abroad journey
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className={`flex items-start space-x-4 p-6 rounded-xl bg-gradient-to-r ${service.color} border ${service.borderColor} hover:shadow-lg transition-all duration-300 hover:scale-[1.02]`}
              >
                <IconComponent
                  className={`w-6 h-6 ${service.iconColor} mt-1 flex-shrink-0`}
                />
                <div className="flex-1">
                  <h4 className="font-semibold text-slate-800 mb-2 text-lg">
                    {service.title}
                  </h4>
                  <p className="text-sm hidden sm:block text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
