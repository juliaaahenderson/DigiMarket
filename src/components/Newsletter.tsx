'use client';

import React, { useState } from 'react';
import { Mail, CheckCircle2 } from 'lucide-react';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section className="py-12 bg-white border-t border-[#E8E2D8]">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="bg-gradient-to-r from-[#183C3A] to-[#162321] text-white p-8 sm:p-12 rounded-3xl shadow-xl border border-[#D5A84C]/30 relative overflow-hidden">
          
          <div className="relative z-10 max-w-xl mx-auto space-y-4">
            <div className="w-12 h-12 bg-[#D97757] rounded-2xl mx-auto flex items-center justify-center text-white shadow-md">
              <Mail className="w-6 h-6" />
            </div>

            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold tracking-tight">
              Get the best digital deals first.
            </h2>

            <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
              New product launches, flash promo codes, and developer resource drops — delivered straight to your inbox. No spam ever.
            </p>

            {subscribed ? (
              <div className="bg-emerald-500/20 border border-emerald-400 text-emerald-200 p-4 rounded-xl flex items-center justify-center gap-2 text-sm font-bold animate-fade-in">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                Thank you! You are now subscribed to VIP deal alerts.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-2 pt-2">
                <input
                  type="email"
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  className="w-full bg-white text-[#162321] placeholder-gray-400 px-4 py-3 rounded-xl text-sm outline-hidden font-medium border border-[#E8E2D8] focus:border-[#D5A84C]"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-[#D97757] hover:bg-[#c46445] text-white font-heading font-extrabold px-6 py-3 rounded-xl text-sm transition-colors whitespace-nowrap shadow-md"
                >
                  Subscribe Now
                </button>
              </form>
            )}

            <div className="text-[11px] text-white/50 pt-2">
              🔒 We respect your privacy. Unsubscribe anytime with 1-click.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
