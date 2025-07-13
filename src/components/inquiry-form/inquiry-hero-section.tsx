import { useEffect, useState } from "react";

export default function InquiryHeroSection() {
  const [animatedNumbers, setAnimatedNumbers] = useState({
    students: 0,
    coursePrice: 0,
    universities: 0,
    scholarships: 0,
  });

  useEffect(() => {
    const targets = {
      students: 45000,
      coursePrice: 8,
      universities: 850,
      scholarships: 50,
    };
    const duration = 2000;
    const fps = 60;
    const totalFrames = Math.floor((duration / 1000) * fps);
    let currentFrame = 0;

    const timer = setInterval(() => {
      currentFrame++;
      const progress = currentFrame / totalFrames;
      // Use easing function for smoother animation (optional)
      const easedProgress = easeOutCubic(progress);

      setAnimatedNumbers({
        students: Math.floor(targets.students * easedProgress),
        coursePrice: Math.floor(targets.coursePrice * easedProgress),
        universities: Math.floor(targets.universities * easedProgress),
        scholarships: Math.floor(targets.scholarships * easedProgress),
      });

      // Ensure exact target values on the last frame
      if (currentFrame >= totalFrames) {
        setAnimatedNumbers(targets);
        clearInterval(timer);
      }
    }, 1000 / fps);

    return () => clearInterval(timer);
  }, []);

  // Optional easing function for smoother animation
  function easeOutCubic(t: number) {
    return 1 - Math.pow(1 - t, 3);
  }

  return (
    <div>
      {/* Stats Section */}
      <div className="grid grid-cols-2 sm:mb-6 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        <div className="bg-white/40 backdrop-blur-md rounded-2xl p-6 border border-white/20">
          <div className="text-3xl font-bold text-violet-600 mb-2">
            {animatedNumbers.students.toLocaleString()}+
          </div>
          <div className="text-sm text-slate-600 font-medium">
            Student Success Stories
          </div>
        </div>
        <div className="bg-white/40 backdrop-blur-md rounded-2xl p-6 border border-white/20">
          <div className="text-3xl font-bold text-cyan-500 mb-2">
            {animatedNumbers.universities}+
          </div>
          <div className="text-sm text-slate-600 font-medium">
            Partner Universities
          </div>
        </div>
        <div className="bg-white/40 backdrop-blur-md rounded-2xl p-6 border border-white/20">
          <div className="text-3xl font-bold text-emerald-500 mb-2">
            {animatedNumbers.scholarships}%
          </div>
          <div className="text-sm text-slate-600 font-medium">
            Scholarships Available
          </div>
        </div>
        <div className="bg-white/40 backdrop-blur-md rounded-2xl p-6 border border-white/20">
          <div className="text-3xl font-bold text-rose-500 mb-2">
            ₹{animatedNumbers.coursePrice} Lakhs
          </div>
          <div className="text-sm text-slate-600 font-medium">
            Starting Course Price
          </div>
        </div>
      </div>
    </div>
  );
}
