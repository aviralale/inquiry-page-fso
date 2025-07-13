import type React from "react";

import { Globe, GraduationCap, Sparkles } from "lucide-react";
import InquiryHeroSection from "@/components/inquiry-form/inquiry-hero-section";
import InquiryServicesSection from "@/components/inquiry-form/inquiry-services-section";
import InquiryForm from "@/components/inquiry-form/inquiry-form";
import InquiryTitleSection from "@/components/inquiry-form/inquiry-title-section";
import ContactOverlay from "@/components/inquiry-form/contact-overlay";

const StudyAbroadForm: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-rose-50 to-cyan-50 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated Gradient Orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-violet-200/30 to-rose-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-cyan-200/30 to-blue-200/30 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-amber-200/20 to-orange-200/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Floating Icons */}
        <div
          className="absolute top-32 right-32 animate-bounce"
          style={{ animationDelay: "0.5s" }}
        >
          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
            <GraduationCap className="w-6 h-6 text-violet-400" />
          </div>
        </div>
        <div
          className="absolute bottom-32 left-32 animate-bounce"
          style={{ animationDelay: "1.5s" }}
        >
          <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
            <Globe className="w-5 h-5 text-rose-400" />
          </div>
        </div>
        <div
          className="absolute top-1/3 left-16 animate-bounce"
          style={{ animationDelay: "2.5s" }}
        >
          <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-cyan-400" />
          </div>
        </div>
      </div>

      <div className="relative flex flex-col-reverse z-10 max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Form Section */}
          <InquiryForm />
          {/* Services Section */}
          <div className="block sm:hidden">
            <InquiryHeroSection />
          </div>
          <InquiryServicesSection />
        </div>
        <div className="hidden sm:block">
          <InquiryHeroSection />
        </div>
        <InquiryTitleSection />
      </div>
      <ContactOverlay />
    </div>
  );
};

export default StudyAbroadForm;
