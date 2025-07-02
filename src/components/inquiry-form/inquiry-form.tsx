import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CheckCircle,
  Globe,
  GraduationCap,
  Lock,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
interface FormData {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  academicLevel: string;
  message: string;
}
export default function InquiryForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    academicLevel: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const countries = [
    "🇺🇸 United States",
    "🇬🇧 United Kingdom",
    "🇨🇦 Canada",
    "🇦🇺 Australia",
    "🇳🇿 New Zealand",
    "🇨🇿 Czech Republic",
    "🇯🇵 Japan",
    "🇰🇷 South Korea",
    "🇮🇪 Ireland",
  ];

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    if (!isFormValid) return;

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        country: "",
        academicLevel: "",
        message: "",
      });
    }, 7000);
  };

  const isFormValid = formData.fullName && formData.email && formData.country;
  return (
    <section className="sticky top-8">
      <Card className="backdrop-blur-xl  border-0 shadow-2xl shadow-violet-100/50 rounded-3xl overflow-hidden">
        <CardHeader className="text-center space-y-4 pb-8 bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-sm">
          <div className="mx-auto w-16 h-16 bg-gradient-to-br from-violet-500 to-rose-500 rounded-2xl flex items-center justify-center shadow-lg">
            <Globe className="w-8 h-8 text-white" />
          </div>
          <CardTitle className="text-3xl font-bold bg-gradient-to-r from-violet-600 to-rose-500 bg-clip-text text-transparent">
            Start Your Journey
          </CardTitle>
          <p className="text-slate-600 font-medium">
            Get personalized guidance from our expert counselors
          </p>
        </CardHeader>

        <CardContent className="p-8">
          {isSubmitted ? (
            <div className="text-center py-12 space-y-6">
              <div className="mx-auto w-20 h-20 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full flex items-center justify-center shadow-lg">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-slate-800">
                  Thank You!
                </h3>
                <p className="text-slate-600 max-w-sm mx-auto">
                  Your inquiry has been submitted successfully. Our expert
                  counselor will contact you within 24 hours!
                </p>
              </div>
              <div className="bg-gradient-to-r from-violet-50 to-rose-50 rounded-xl p-4 border border-violet-100">
                <p className="text-sm text-slate-600">
                  📧 Check your email for a confirmation and our welcome guide
                </p>
              </div>
            </div>
          ) : (
            <form className="space-y-6">
              {/* Full Name */}
              <div className="space-y-2">
                <Label
                  htmlFor="fullName"
                  className="text-slate-700 font-semibold flex items-center"
                >
                  Full Name *
                </Label>
                <Input
                  id="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={(e) =>
                    handleInputChange("fullName", e.target.value)
                  }
                  className="border-slate-200 focus:border-violet-400 focus:ring-violet-200 rounded-xl h-12 bg-white/70 backdrop-blur-sm"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              {/* Email and Phone Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="text-slate-700 font-semibold"
                  >
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="border-slate-200 focus:border-rose-400 focus:ring-rose-200 rounded-xl h-12 bg-white/70 backdrop-blur-sm"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="phone"
                    className="text-slate-700 font-semibold"
                  >
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="border-slate-200 focus:border-cyan-400 focus:ring-cyan-200 rounded-xl h-12 bg-white/70 backdrop-blur-sm"
                    placeholder="+91-9876543210"
                    required
                  />
                </div>
              </div>

              {/* Country of Interest */}
              <div className="space-y-2">
                <Label className="text-slate-700 font-semibold">
                  Country of Interest *
                </Label>
                <Select
                  value={formData.country}
                  onValueChange={(value) => handleInputChange("country", value)}
                >
                  <SelectTrigger className="w-full border-slate-200 focus:border-violet-400 focus:ring-violet-200 rounded-xl h-12 bg-white/70 backdrop-blur-sm">
                    <SelectValue placeholder="Select your preferred destination" />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl bg-white/95 backdrop-blur-md">
                    {countries.map((country) => (
                      <SelectItem
                        key={country}
                        value={country}
                        className="rounded-lg"
                      >
                        {country}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label
                  htmlFor="message"
                  className="text-slate-700 font-semibold"
                >
                  Tell Us About Your Goals
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  className="border-slate-200 focus:border-violet-400 focus:ring-violet-200 rounded-xl min-h-24 bg-white/70 backdrop-blur-sm resize-none"
                  placeholder="Share your study abroad goals, preferred programs, career aspirations, or any specific questions you have..."
                  rows={4}
                />
              </div>

              {/* Submit Button */}
              <Button
                onClick={handleSubmit}
                disabled={!isFormValid || isSubmitting}
                className="w-full h-14 bg-gradient-to-r from-violet-500 via-rose-500 to-cyan-500 hover:from-violet-600 hover:via-rose-600 hover:to-cyan-600 text-white font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Submitting Your Journey...</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-3">
                    <GraduationCap className="w-5 h-5" />
                    <span>Begin My Study Abroad Journey</span>
                    <Sparkles className="w-4 h-4" />
                  </div>
                )}
              </Button>

              <div className="text-center space-y-2">
                <p className="text-xs text-slate-500">* Required fields</p>
                <p className="text-xs text-slate-400 flex justify-center items-center">
                  <Lock className="w-4 h-4" /> Your information is secure and
                  confidential
                </p>
              </div>
            </form>
          )}
        </CardContent>
      </Card>
    </section>
  );
}
