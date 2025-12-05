import React from 'react';
import { LucideIcon } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string;
  badge?: string;
  badgeColor?: string;
  icon: LucideIcon;
  iconBg?: string;
}

export const MetricCard: React.FC<MetricCardProps> = ({ 
  title, 
  value, 
  badge, 
  badgeColor = "text-slate-400", 
  icon: Icon, 
  iconBg = "bg-slate-800 text-slate-400" 
}) => {
  return (
    <div className="bg-[#111827] rounded-xl p-6 border border-white/5 shadow-lg flex flex-col justify-between h-40 group hover:border-white/10 transition-all">
      <div className="flex justify-between items-start">
        <span className="text-slate-400 font-medium text-sm tracking-wide">{title}</span>
        <div className={`p-2.5 rounded-lg ${iconBg} transition-opacity`}>
          <Icon className="w-5 h-5" />
        </div>
      </div>
      
      <div className="flex items-end gap-3 mt-4">
        <span className="text-4xl font-bold text-white font-mono tracking-tight">{value}</span>
        {badge && (
          <span className={`text-sm font-semibold mb-1.5 ${badgeColor}`}>
            {badge}
          </span>
        )}
      </div>
    </div>
  );
};
