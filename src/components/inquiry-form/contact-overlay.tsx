import { Mail, Phone, MessageCircle, X } from "lucide-react";
import { useState } from "react";

export default function ContactOverlay() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed right-8 bottom-8 transform -translate-y-1/2 z-50">
      {/* Main Contact Button */}
      <div className="relative">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-16 h-16 rounded-full bg-gradient-to-br from-violet-600 to-rose-500 shadow-lg border border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
        >
          {isExpanded ? (
            <X className="  w-6 h-6" />
          ) : (
            <Phone className="  w-6 h-6" />
          )}
        </button>
      </div>

      {/* Contact Options */}
      {isExpanded && (
        <div className="absolute bottom-20 right-0 w-64 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl overflow-hidden">
          <a
            href="tel:+91-6359933777"
            className="flex items-center p-4 hover:bg-violet-600/50 transition-all duration-300 border-b border-white/10"
          >
            <Phone className="w-6 h-6  " />
            <div className="ml-4">
              <div className="  font-medium text-sm">Call Us</div>
              <div className=" /70 text-xs">+91-6359933777</div>
            </div>
          </a>

          <a
            href="mailto:visa@firststepoverseas.com"
            className="flex items-center p-4 hover:bg-rose-500/50 transition-all duration-300 border-b border-white/10"
          >
            <Mail className="w-6 h-6  " />
            <div className="ml-4">
              <div className="  font-medium text-sm">Email Us</div>
              <div className=" /70 text-xs">visa@firststepoverseas.com</div>
            </div>
          </a>

          <a
            href="#"
            className="flex items-center p-4 hover:bg-emerald-500/50 transition-all duration-300"
          >
            <MessageCircle className="w-6 h-6 " />
            <div className="ml-4">
              <div className=" font-medium text-sm">Live Chat</div>
              <div className=" text-xs">Chat with us now</div>
            </div>
          </a>
        </div>
      )}

      {/* Background overlay */}
      {isExpanded && (
        <div
          className="fixed inset-0 bg-black/10 -z-10"
          onClick={() => setIsExpanded(false)}
        />
      )}
    </div>
  );
}
