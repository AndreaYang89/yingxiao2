import React from 'react';
import { TrendingUp, Globe, Briefcase, Layers } from 'lucide-react';

const AssetCategory: React.FC<{
  title: string;
  items: string[];
  icon: React.ReactNode;
}> = ({ title, items, icon }) => (
  <div className="group relative overflow-hidden rounded-2xl bg-[#0f1115] border border-white/5 p-8 hover:border-white/20 transition-all duration-300">
     <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-110">
        <div className="text-white">{icon}</div>
     </div>
    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
        {title}
    </h3>
    <ul className="space-y-3">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
          <span className="mr-2 text-blue-500">▹</span>
          {item}
        </li>
      ))}
    </ul>
    <div className="mt-6 pt-6 border-t border-white/5">
        <span className="text-xs font-mono text-purple-400 bg-purple-500/10 px-2 py-1 rounded">AI SELECTED</span>
    </div>
  </div>
);

const Assets: React.FC = () => {
  return (
    <section id="assets" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The Global <span className="gradient-text">Shelf</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            AI 是核心，资产是基石。Nexus 链接全球顶级流动性，为您提供经由 AI 深度尽调的稀缺资产。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AssetCategory 
            title="Private Equity"
            icon={<Briefcase size={40} />}
            items={[
                "Sequoia Capital (红杉全球基金)",
                "Blackstone (黑石房地产信托)",
                "KKR Global Tech Growth",
                "独角兽企业 Pre-IPO 稀缺份额"
            ]}
          />
          <AssetCategory 
            title="Hedge Funds"
            icon={<TrendingUp size={40} />}
            items={[
                "Millennium (千禧年)",
                "Bridgewater Pure Alpha (桥水)",
                "Two Sigma (量化绝对收益)",
                "Point72 Multi-Strategy"
            ]}
          />
           <AssetCategory 
            title="Structured Products"
            icon={<Layers size={40} />}
            items={[
                "AI 辅助定制 FCN / Snowball",
                "高盛/摩根大通 挂钩票据",
                "跨境收益互换 (TRS)",
                "动态保本策略"
            ]}
          />
           <AssetCategory 
            title="Real Assets"
            icon={<Globe size={40} />}
            items={[
                "全球顶级商业地产 REITS",
                "艺术品与收藏品基金",
                "新加坡家族办公室直投项目",
                "绿色能源基础设施"
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Assets;