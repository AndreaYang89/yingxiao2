import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const Infrastructure: React.FC = () => {
  return (
    <section id="infrastructure" className="py-32 px-6 border-t border-white/5 bg-[#030305]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
        
        {/* Left Content */}
        <div className="flex-1">
            <h2 className="text-4xl font-bold mb-8">
                Ecosystem & <br/>
                <span className="text-white">Compliance</span>
            </h2>
            <p className="text-lg text-slate-400 mb-10">
                繁琐的中后台运营，从此 Zero-touch (零接触)。Nexus 的 AI 引擎自动处理合规审查、交易执行与佣金结算，让您专注于客户关系。
            </p>

            <div className="grid grid-cols-1 gap-6">
                {[
                    { title: "Omni-bus Account Structure", desc: "综合账户体系，即开即用，支持多币种、多市场无缝切换。" },
                    { title: "Commission Automation", desc: "智能合约级别的佣金自动结算，透明、精准、实时到账。" },
                    { title: "White-label APP", desc: "全套白标解决方案，赋予您的品牌顶级的数字化体验。" }
                ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                        <CheckCircle2 className="text-green-500 shrink-0 mt-1" size={24} />
                        <div>
                            <h4 className="text-xl font-semibold text-white mb-1">{item.title}</h4>
                            <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* Right Visual - Abstract Infrastructure Diagram */}
        <div className="flex-1 w-full flex justify-center">
            <div className="relative w-full max-w-md aspect-square">
                <div className="absolute inset-0 border-2 border-dashed border-white/10 rounded-full animate-[spin_10s_linear_infinite]"></div>
                <div className="absolute inset-4 border border-white/5 rounded-full bg-[#0b0f17] flex items-center justify-center">
                    <div className="text-center">
                         <div className="text-4xl font-bold text-white mb-2">100%</div>
                         <div className="text-sm text-slate-500 uppercase tracking-widest">Automated</div>
                    </div>
                </div>
                
                {/* Orbiting Elements */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#030305] px-4 py-2 border border-white/10 rounded-full text-xs text-slate-300 font-mono">KYC / AML</div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-[#030305] px-4 py-2 border border-white/10 rounded-full text-xs text-slate-300 font-mono">Reporting</div>
                <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#030305] px-4 py-2 border border-white/10 rounded-full text-xs text-slate-300 font-mono -rotate-90">Custody</div>
                <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 bg-[#030305] px-4 py-2 border border-white/10 rounded-full text-xs text-slate-300 font-mono rotate-90">Trading</div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Infrastructure;