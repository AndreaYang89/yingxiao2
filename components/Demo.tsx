import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Cpu } from 'lucide-react';

const Demo: React.FC = () => {
  const [step, setStep] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && step === 0) {
          startSimulation();
        }
      },
      { threshold: 0.5 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    
    return () => {
      mountedRef.current = false;
      observer.disconnect();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const startSimulation = async () => {
    const safeSetStep = (s: number) => {
      if (mountedRef.current) setStep(s);
    };

    // Sequence of chat
    await new Promise(r => setTimeout(r, 1000));
    safeSetStep(1); // User types
    
    await new Promise(r => setTimeout(r, 2000));
    safeSetStep(2); // AI Thinking
    
    await new Promise(r => setTimeout(r, 2500));
    safeSetStep(3); // AI Responds
  };

  return (
    <section className="py-32 px-6 bg-[#05080f]">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16">
        
        {/* Text Side */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            复杂推理，<br />
            <span className="text-blue-400">瞬间完成。</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-8">
            Nexus 不仅仅是检索信息，它在思考。通过 Chain-of-Thought (思维链) 推理，它能结合客户的具体画像、持仓结构与宏观数据，给出可执行的专业建议。
          </p>
          <ul className="space-y-4">
            {['Context Awareness (上下文感知)', 'Actionable Insights (可执行洞察)', 'Hyper-Personalization (超个性化)'].map((item, i) => (
              <li key={i} className="flex items-center text-slate-300">
                <div className="w-2 h-2 rounded-full bg-blue-500 mr-3"></div>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Demo Interface */}
        <div ref={containerRef} className="w-full md:w-1/2">
          <div className="rounded-2xl border border-white/10 bg-[#0b0f17] shadow-2xl overflow-hidden h-[500px] flex flex-col relative">
            {/* Header */}
            <div className="p-4 border-b border-white/5 bg-[#0f1115] flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Cpu size={16} className="text-purple-500" />
                <span className="text-sm font-semibold text-slate-200">Nexus Intelligence</span>
              </div>
              <div className="flex space-x-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
              </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 p-6 space-y-6 overflow-hidden flex flex-col justify-end">
              <AnimatePresence>
                {step >= 1 && (
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex justify-end"
                  >
                    <div className="bg-blue-600 text-white p-4 rounded-2xl rounded-tr-sm max-w-[85%]">
                      <p className="text-sm">美联储加息对客户 A 的科技股持仓有什么影响？</p>
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex justify-start"
                  >
                     <div className="bg-white/5 text-purple-300 p-3 rounded-2xl rounded-tl-sm border border-purple-500/20 flex items-center space-x-3">
                        <Cpu size={14} className="animate-spin-slow" />
                        <span className="text-xs font-mono">Analyzing Portfolio... Retrieving FOMC Data...</span>
                     </div>
                  </motion.div>
                )}

                {step >= 3 && (
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex justify-start"
                  >
                    <div className="bg-white/5 text-slate-200 p-5 rounded-2xl rounded-tl-sm border border-white/10 max-w-[95%]">
                      <div className="flex items-center space-x-2 mb-3">
                         <div className="w-5 h-5 rounded bg-purple-500/20 flex items-center justify-center">
                            <Cpu size={12} className="text-purple-400" />
                         </div>
                         <span className="text-xs font-bold text-slate-400 uppercase">Nexus Analysis</span>
                      </div>
                      <p className="text-sm leading-relaxed mb-3">
                        <strong className="text-white">警报等级：中等 (Medium Impact)</strong>
                      </p>
                      <p className="text-sm leading-relaxed text-slate-300 mb-3">
                        客户 A 持仓中 <span className="text-white font-medium">45% 为高估值成长型科技股 (SaaS & AI)</span>。加息会导致贴现率上升，直接压缩估值模型。
                      </p>
                      <p className="text-sm leading-relaxed text-slate-300">
                        <strong>建议操作：</strong> 建议将 15% 仓位轮动至现金流充沛的防御性板块，或配置 <span className="text-blue-400 cursor-pointer hover:underline">Nexus 精选的结构化票据 (FCN)</span> 以增强下行保护。已为您生成致客户 A 的《市场波动解读与调仓建议书》。
                      </p>
                      <div className="mt-4 flex gap-2">
                        <button className="text-xs border border-white/10 px-3 py-1.5 rounded hover:bg-white/5 transition-colors">查看建议书 PDF</button>
                        <button className="text-xs border border-white/10 px-3 py-1.5 rounded hover:bg-white/5 transition-colors">执行模拟调仓</button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Input Placeholder */}
            <div className="p-4 border-t border-white/5 bg-[#0b0f17]">
              <div className="flex items-center space-x-4 bg-white/5 rounded-full px-4 py-3">
                <div className="w-full text-slate-500 text-sm">Ask Nexus anything...</div>
                <button className="text-blue-500"><Send size={18} /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;