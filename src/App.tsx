/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Map as MapIcon, Code2, Plane, Palette, Gift, User, Gamepad2, Info } from 'lucide-react';

interface QuestionItem {
  id: number;
  question: string;
  answer: string | string[];
  icon: React.ReactNode;
}

const questions: QuestionItem[] = [
  {
    id: 1,
    question: "Why make maps in Roblox Studio?",
    icon: <Code2 className="w-6 h-6" />,
    answer: [
      "I use an exploiter/hacker on my account Otherwise, the game progress will be copied, and the maps will be stolen to open the file in Roblox Studio. But Sorry it's... (Account Other)",
      "And I am learn roblox studio and my plugin! (pro plugin addon)"
    ]
  },
  {
    id: 2,
    question: "Why travel of Roblox or real life?",
    icon: <Plane className="w-6 h-6" />,
    answer: "Really not... I am currently focusing on Roblox animations rather than real-life travel. I'll let you know if I have questions. I'm working on an animation set in a Roblox city called Verison, but I'm trying to make the maps look like real life. My development progress is going well to Neither city real in roblox!"
  },
  {
    id: 3,
    question: "Free commission for What?",
    icon: <Gift className="w-6 h-6" />,
    answer: [
      "New events Only } Countries (first day)",
      "After end events and getting close commission (everyday to end)"
    ]
  },
  {
    id: 4,
    question: "Character Style in Nationality",
    icon: <Palette className="w-6 h-6" />,
    answer: "I just got a new style for my outfit in before visiting other countries"
  }
];

export default function App() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-linear-to-br from-[#FFB347] via-[#FFD700] to-[#FDB931] selection:bg-orange-200 scroll-smooth">
      {/* Hero Section */}
      <header className="pt-24 pb-16 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg mb-4 tracking-tight">
            Welcome to Geiniame RR34
          </h1>
          <div className="h-1 w-24 bg-white/50 mx-auto rounded-full" />
        </motion.div>
      </header>

      <main className="max-w-4xl mx-auto px-6 pb-24 space-y-16">
        {/* Questions Section */}
        <section id="questions" className="space-y-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-md">
              <Code2 className="text-white w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold text-white drop-shadow-sm">Questions</h2>
          </div>

          <div className="grid gap-4">
            {questions.map((q) => (
              <motion.div
                key={q.id}
                layout
                className={`bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden transition-all duration-300 ${
                  selectedId === q.id ? 'ring-2 ring-white/40' : 'hover:bg-white/15'
                }`}
              >
                <button
                  onClick={() => setSelectedId(selectedId === q.id ? null : q.id)}
                  className="w-full p-6 flex items-center justify-between text-left group"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-white/80 group-hover:text-white transition-colors">
                      {q.icon}
                    </div>
                    <span className="text-xl font-semibold text-white tracking-wide">
                      {q.question}
                    </span>
                  </div>
                  <motion.div
                    animate={{ rotate: selectedId === q.id ? 180 : 0 }}
                    className="text-white/60"
                  >
                    <ChevronDown className="w-6 h-6" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {selectedId === q.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-2 text-white/90 leading-relaxed space-y-4 border-t border-white/10 mt-2">
                        {Array.isArray(q.answer) ? (
                          q.answer.map((ans, idx) => (
                            <p key={idx} className="flex gap-2">
                              <span className="text-white/40 font-mono">A{idx > 0 ? idx : ''}:</span>
                              {ans}
                            </p>
                          ))
                        ) : (
                          <p className="flex gap-2">
                            <span className="text-white/40 font-mono">A:</span>
                            {q.answer}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Information Section */}
        <section id="information" className="space-y-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-md">
              <Info className="text-white w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold text-white drop-shadow-sm">Information</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Real Info Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 space-y-6"
            >
              <div className="flex items-center gap-3 mb-2">
                <User className="text-white w-6 h-6" />
                <h3 className="text-2xl font-bold text-white">Real Information</h3>
              </div>
              <div className="space-y-4 text-white/90">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="opacity-60">Age</span>
                  <span className="font-semibold">25 years old (July 19)</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="opacity-60">Gender</span>
                  <span className="font-semibold">Male</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="opacity-60">Sexuality</span>
                  <span className="font-semibold">Straight</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="opacity-60">Location</span>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-right">Asia</span>
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/6/66/Flag_of_Malaysia.svg" 
                      alt="Malaysia Flag" 
                      className="w-6 h-4 rounded-sm object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* OC Info Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 space-y-6"
            >
              <div className="flex items-center gap-3 mb-2">
                <Gamepad2 className="text-white w-6 h-6" />
                <h3 className="text-2xl font-bold text-white">Character Roleplay</h3>
              </div>
              <div className="space-y-4 text-white/90">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="opacity-60">Age (OC)</span>
                  <span className="font-semibold">35 years old</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="opacity-60">Gender</span>
                  <span className="font-semibold">Female</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="opacity-60">Sexuality</span>
                  <span className="font-semibold text-right">Transgender & Bisexual</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="opacity-60">Fav Colors</span>
                  <span className="font-semibold">Light Blue & Orange</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="opacity-60">Species</span>
                  <span className="font-semibold">German Shepherd</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="opacity-60">Height</span>
                  <span className="font-semibold">240CM (7'11)</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="opacity-60">Hobbies</span>
                  <span className="font-semibold">Basketball & Badminton</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Socials Section */}
        <section id="socials" className="text-center space-y-6">
          <h2 className="text-2xl font-bold text-white drop-shadow-sm">You Would like from Soical media?</h2>
          <div className="flex justify-center gap-4">
            {[
              { name: 'Roblox', url: 'https://www.roblox.com/users/10645161604/profile' },
              { name: 'Discord', url: 'https://discord.com/invite/zAQPbEnNsY' },
              { name: 'Twitter', url: 'https://x.com/GezriReal3029' }
            ].map((platform) => (
              <motion.a
                key={platform.name}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white font-semibold hover:bg-white/20 transition-all"
              >
                {platform.name}
              </motion.a>
            ))}
          </div>
        </section>
      </main>

      <footer className="py-12 px-6 text-center text-white/40 text-sm border-t border-white/10">
        <p>© 2026 Website by Gezri. All rights reserved.</p>
      </footer>
    </div>
  );
}
