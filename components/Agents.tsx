import React from 'react';
import { motion } from 'framer-motion';
import { Target, ShieldCheck, BrainCircuit } from 'lucide-react';

const AgentCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  role: string;
  description: string;
  tags: string[];
  delay: number;
  color: string;
}> = ({ icon, title, role, description, tags, delay, color }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.6 }}
    className="relative group p-8 rounded-2xl border border-white/5 bg-[#0b0f17] hover:bg-[#111620] transition-all duration-500 hover:border-white/10"
  >
    <div className={`absolute inset-0 bg-gradient-to-b ${color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`} />
    
    <div className="relative z-10">
      <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
        <div className="text-slate-200">{icon}</div>
      </div>
      
      <h3 className="text-2xl font-bold text-white mb-1">{title}</h3>
      <p className="text-sm font-mono text-blue-400 mb-4 uppercase tracking-wider">{role}</p>
      
      <p className="text-slate-400 leading-relaxed mb-8 min-h-[80px]">
        {description}
      </p>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag, i) => (
          <span key={i} className="text-xs font-medium px-2 py-1 rounded bg-white/5 border border-white/5 text-slate-300 group-hover:border-white/20 transition-colors">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const Agents: React.FC = () => {
  return (
    <section id="agents" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meet Your <span className="gradient-text">Agentic Workforce</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            这不是功能列表，这是一支不知疲倦的精英团队。Nexus 部署了三个专职 AI 智能体，全天候为您的资产管理业务服务。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AgentCard 
            icon={<Target size={28} />}
            title="Agent 1 - The Hunter"
            role="增长引擎"
            description="利用大数据和 Knowledge Graph 进行预测性获客。它能在客户意识到需求之前，通过行为模式分析生成高转化率的邀约名单。"
            tags={['Predictive Leads', 'Knowledge Graph', 'Behavioral Analytics']}
            delay={0.1}
            color="from-blue-600 to-transparent"
          />
          <AgentCard 
            icon={<ShieldCheck size={28} />}
            title="Agent 2 - The Guardian"
            role="风控卫士"
            description="24/7 监控全球舆情，利用 NLP 情感分析。当市场发生剧烈波动时，毫秒级生成针对特定客户持仓的安抚话术与调仓建议。"
            tags={['Sentiment Analysis', 'Real-time Monitoring', 'Auto-Rebalancing']}
            delay={0.2}
            color="from-purple-600 to-transparent"
          />
          <AgentCard 
            icon={<BrainCircuit size={28} />}
            title="Agent 3 - The Expert"
            role="投研大脑"
            description="基于 RAG 技术，深度连接诺亚投研库。像一位拥有 20 年经验的首席经济学家，实时回答关于信托架构、税务筹划与宏观经济的复杂问题。"
            tags={['RAG Technology', 'Tax Efficiency', 'Macro Research']}
            delay={0.3}
            color="from-pink-600 to-transparent"
          />
        </div>
      </div>
    </section>
  );
};

export default Agents;