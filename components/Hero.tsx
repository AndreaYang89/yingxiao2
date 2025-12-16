import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-48 pb-32 overflow-hidden flex flex-col justify-center items-center text-center px-6">
      
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 mb-8 backdrop-blur-sm">
          <Sparkles size={14} className="text-blue-400" />
          <span className="text-xs font-semibold text-blue-300 tracking-wider uppercase">Nexus OS v1.0 Private Beta</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-[1.1]">
          不要只管理资产 <br />
          <span className="gradient-text">要驾驭智能</span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
          全球首个 <span className="text-white font-medium">AI Native</span> 财富管理基础设施。<br className="hidden md:block" />
          赋能 EAM 与家族办公室的“第二大脑”。
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <button className="group relative px-8 py-4 rounded-full bg-white text-black font-semibold text-lg hover:bg-slate-200 transition-all flex items-center space-x-2">
            <span>申请内测资格</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 rounded-full ring-2 ring-white/50 animate-pulse"></div>
          </button>
          
          <button className="px-8 py-4 rounded-full glass text-white font-medium text-lg hover:bg-white/10 transition-all flex items-center space-x-2">
            <span>与 Nexus AI 对话</span>
            <span className="text-xs bg-white/20 px-2 py-0.5 rounded text-white/70">Demo</span>
          </button>
        </div>
      </motion.div>

      {/* Hero Graphic / Abstract UI Representation */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="mt-24 w-full max-w-5xl"
      >
        <div className="relative rounded-2xl border border-white/10 bg-[#0f1115]/50 backdrop-blur-xl aspect-[16/9] shadow-2xl overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 via-transparent to-purple-500/5"></div>
          
          {/* Simulated UI Header */}
          <div className="absolute top-0 left-0 right-0 h-10 border-b border-white/5 flex items-center px-4 space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
          </div>

          {/* Abstract Data Visualization */}
          <div className="absolute inset-0 flex items-center justify-center pt-10">
             <div className="grid grid-cols-3 gap-8 p-12 w-full h-full opacity-60">
                <div className="bg-white/5 rounded-lg animate-pulse" style={{animationDuration: '3s'}}></div>
                <div className="bg-white/5 rounded-lg animate-pulse" style={{animationDuration: '4s'}}></div>
                <div className="bg-white/5 rounded-lg animate-pulse" style={{animationDuration: '2.5s'}}></div>
             </div>
             <div className="absolute inset-0 bg-gradient-to-t from-[#030305] to-transparent h-40 bottom-0"></div>
             <div className="absolute text-center bottom-12">
                <span className="text-sm font-mono text-blue-400">SYSTEM STATUS: ONLINE // AGENTS ACTIVE</span>
             </div>
          </div>
        </div>
      </motion.div>

    </section>
  );
};

export default Hero;