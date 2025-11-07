import { ArrowRight } from "lucide-react";

export default function Community() {
  return (
    <div className="min-h-screen bg-[#1E1E1E] pt-20 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Community</h1>
          <p className="text-[#A9A9A9] text-lg">Engage in discussions and share experiences</p>
        </div>

        <div className="bg-[#2A2A2A] rounded-lg border border-[#3A3A3A] p-12 text-center">
          <div className="text-6xl mb-4">💬</div>
          <h2 className="text-2xl font-bold text-white mb-4">Community Forum Coming Soon</h2>
          <p className="text-[#A9A9A9] text-lg mb-8 max-w-2xl mx-auto">
            Join conversations, share advice, ask questions, and connect with alumni across different industries and graduation years.
          </p>
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#6464F1] to-[#7C7CFF] text-white font-semibold rounded-lg hover:from-[#7474F1] hover:to-[#8C8CFF] transition-all duration-200 group">
            Join Community
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}
