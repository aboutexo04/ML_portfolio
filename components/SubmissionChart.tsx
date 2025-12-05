import React from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Submission } from '../types';

interface SubmissionChartProps {
  data: Submission[];
}

export const SubmissionChart: React.FC<SubmissionChartProps> = ({ data }) => {
  // Process data for the chart: filter out failed, sort by date ascending
  const chartData = data
    .filter(item => item.record !== null)
    .sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime())
    .map(item => ({
      name: new Date(item.created_at).toLocaleDateString('en-US', { month: '2-digit', day: 'numeric' }),
      date: new Date(item.created_at).toLocaleString(),
      Public: parseFloat(item.record!.public_result.RMSE.value),
      Private: parseFloat(item.record!.private_result.RMSE.value),
      description: item.description
    }));

  return (
    <div className="w-full h-80">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorPublic" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#60A5FA" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#60A5FA" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorPrivate" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#34D399" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#34D399" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1F2937" />
          <XAxis 
            dataKey="name" 
            stroke="#4B5563" 
            fontSize={11} 
            tickLine={false} 
            axisLine={false} 
            tickMargin={10}
          />
          <YAxis 
            stroke="#4B5563" 
            fontSize={11} 
            tickLine={false} 
            axisLine={false} 
            domain={['auto', 'auto']}
            tickFormatter={(value) => `${value.toLocaleString()}`}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#1F2937', 
              borderRadius: '12px', 
              border: '1px solid rgba(255,255,255,0.1)', 
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.5)' 
            }}
            itemStyle={{ fontSize: '12px', fontWeight: 500 }}
            labelStyle={{ color: '#9CA3AF', marginBottom: '8px', fontSize: '12px' }}
          />
          <Legend iconType="circle" wrapperStyle={{ paddingTop: '20px', fontSize: '12px' }} />
          <Line 
            type="monotone" 
            dataKey="Public" 
            stroke="#60A5FA" 
            strokeWidth={3} 
            dot={{ r: 0, fill: '#60A5FA' }} 
            activeDot={{ r: 6, fill: '#60A5FA', strokeWidth: 0 }}
            animationDuration={1500}
          />
          <Line 
            type="monotone" 
            dataKey="Private" 
            stroke="#34D399" 
            strokeWidth={3} 
            dot={{ r: 0, fill: '#34D399' }} 
            activeDot={{ r: 6, fill: '#34D399', strokeWidth: 0 }}
            animationDuration={1500}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
