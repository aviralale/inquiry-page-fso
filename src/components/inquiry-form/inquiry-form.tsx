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
import axios from "axios";

interface FormData {
  full_name: string;
  email_address: string;
  phone_number: string;
  country_of_interest: string;
  city_of_interest: string;
  goals: string;
}

export default function InquiryForm() {
  const [formData, setFormData] = useState<FormData>({
    full_name: "",
    email_address: "",
    phone_number: "",
    country_of_interest: "",
    city_of_interest: "",
    goals: "",
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

  const cityOptions: { [key: string]: string[] } = {
    "🇺🇸 United States": [
      "New York City",
      "San Francisco",
      "Washington D.C.",
      "Chicago",
      "Los Angeles",
      "Boston",
      "Nashville",
      "Phoenix",
      "Miami",
      "Denver",
      "Philadelphia",
      "Austin",
    ],
    "🇬🇧 United Kingdom": [
      "London",
      "Oxford",
      "Cambridge",
      "🏴󠁧󠁢󠁳󠁣󠁴Edinburgh",
      "Manchester",
      "Liverpool",
      "Birmingham",
      "Brighton",
      "Bristol",
      "Bath",
      "Coventry",
      "Glasgow",
    ],
    "🇨🇦 Canada": [
      "Toronto",
      "Vancouver",
      "Montreal",
      "Ottawa",
      "Calgary",
      "Halifax",
      "Winnipeg",
      "Quebec City",
      "Victoria",
      "Kingston",
      "Edmonton",
      "Saskatoon",
    ],
    "🇦🇺 Australia": [
      "Sydney",
      "Melbourne",
      "Brisbane",
      "Canberra",
      "Perth",
      "Adelaide",
      "Gold Coast",
      "Hobart",
      "Darwin",
      "Newcastle",
      "Wollongong",
      "Cairns",
    ],
    "🇳🇿 New Zealand": [
      "Auckland",
      "Wellington",
      "Christchurch",
      "Hamilton",
      "Tauranga",
      "Dunedin",
      "Napier",
      "Palmerston North",
      "Rotorua",
      "Nelson",
    ],
    "🇨🇿 Czech Republic": [
      "Prague",
      "Brno",
      "Ostrava",
      "Plzen",
      "Olomouc",
      "Liberec",
      "Hradec Kralove",
      "Ceske Budejovice",
      "Pardubice",
      "Usti nad Labem",
    ],
    "🇯🇵 Japan": [
      "Tokyo",
      "Osaka",
      "Kyoto",
      "Nagoya",
      "Yokohama",
      "Nara",
      "Hiroshima",
      "Fukuoka",
      "Sendai",
      "Sapporo",
      "Kobe",
      "Okayama",
    ],
    "🇰🇷 South Korea": [
      "Seoul",
      "Busan",
      "Incheon",
      "Daegu",
      "Daejeon",
      "Gwangju",
      "Ulsan",
      "Suwon",
      "Jeonju",
      "Jeju City",
    ],
    "🇮🇪 Ireland": [
      "Dublin",
      "Cork",
      "Galway",
      "Limerick",
      "Waterford",
      "Kilkenny",
      "Derry",
      "Sligo",
      "Athlone",
      "Tralee",
    ],
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => {
      const newData = { ...prev, [field]: value };
      // Reset city when country changes
      if (field === "country_of_interest") {
        newData.city_of_interest = "";
      }
      return newData;
    });
  };

  const handleSubmit = async () => {
    if (!isFormValid) return;

    setIsSubmitting(true);
    try {
      await axios.post("http://127.0.0.1:8000/api/inquiries/", formData);
      console.log(formData);
      setIsSubmitted(true);
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        full_name: "",
        email_address: "",
        phone_number: "",
        country_of_interest: "",
        city_of_interest: "",
        goals: "",
      });
    }, 5000);
  };

  const isFormValid =
    formData.full_name &&
    formData.email_address &&
    formData.country_of_interest &&
    formData.city_of_interest;

  const availableCities = formData.country_of_interest
    ? cityOptions[formData.country_of_interest] || []
    : [];

  return (
    <section className="sticky top-8">
      <Card className="backdrop-blur-xl border-0 shadow-2xl shadow-violet-100/50 rounded-3xl overflow-hidden px-8">
        <CardHeader className="text-center bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-sm">
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

        <CardContent className="p-2">
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
            <div className="space-y-6">
              {/* Full Name */}
              <div className="space-y-2">
                <Label
                  htmlFor="full_name"
                  className="text-slate-700 font-semibold flex items-center"
                >
                  Full Name *
                </Label>
                <Input
                  id="full_name"
                  type="text"
                  value={formData.full_name}
                  onChange={(e) =>
                    handleInputChange("full_name", e.target.value)
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
                    htmlFor="email_address"
                    className="text-slate-700 font-semibold"
                  >
                    Email Address *
                  </Label>
                  <Input
                    id="email_address"
                    type="email"
                    value={formData.email_address}
                    onChange={(e) =>
                      handleInputChange("email_address", e.target.value)
                    }
                    className="border-slate-200 focus:border-rose-400 focus:ring-rose-200 rounded-xl h-12 bg-white/70 backdrop-blur-sm"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="phone_number"
                    className="text-slate-700 font-semibold"
                  >
                    Phone Number *
                  </Label>
                  <Input
                    id="phone_number"
                    type="tel"
                    value={formData.phone_number}
                    onChange={(e) =>
                      handleInputChange("phone_number", e.target.value)
                    }
                    className="border-slate-200 focus:border-cyan-400 focus:ring-cyan-200 rounded-xl h-12 bg-white/70 backdrop-blur-sm"
                    placeholder="+91-9876543210"
                    required
                  />
                </div>
              </div>

              {/* Country and City Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-slate-700 font-semibold">
                    Country of Interest *
                  </Label>
                  <Select
                    value={formData.country_of_interest}
                    onValueChange={(value) =>
                      handleInputChange("country_of_interest", value)
                    }
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

                <div className="space-y-2">
                  <Label className="text-slate-700 font-semibold">
                    City of Interest *
                  </Label>
                  <Select
                    value={formData.city_of_interest}
                    onValueChange={(value) =>
                      handleInputChange("city_of_interest", value)
                    }
                    disabled={!formData.country_of_interest}
                  >
                    <SelectTrigger className="w-full border-slate-200 focus:border-emerald-400 focus:ring-emerald-200 rounded-xl h-12 bg-white/70 backdrop-blur-sm disabled:opacity-50">
                      <SelectValue
                        placeholder={
                          formData.country_of_interest
                            ? "Select your preferred city"
                            : "Select country first"
                        }
                      />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl bg-white/95 backdrop-blur-md">
                      {availableCities.map((city) => (
                        <SelectItem
                          key={city}
                          value={city}
                          className="rounded-lg"
                        >
                          {city}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Goals */}
              <div className="space-y-2">
                <Label htmlFor="goals" className="text-slate-700 font-semibold">
                  Tell Us About Your Goals
                </Label>
                <Textarea
                  id="goals"
                  value={formData.goals}
                  onChange={(e) => handleInputChange("goals", e.target.value)}
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
                  <Lock className="w-4 h-4 mr-1" /> Your information is secure
                  and confidential
                </p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </section>
  );
}
