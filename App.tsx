import React, { useState } from 'react';
import { SUBMISSION_HISTORY, USER_PROFILE, COMPETITION_INFO } from './constants';
import { MetricCard } from './components/MetricCard';
import { SubmissionChart } from './components/SubmissionChart';
import { SubmissionTable } from './components/SubmissionTable';
import { Trophy, TrendingUp, Activity, LayoutDashboard, List, Medal } from 'lucide-react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'history'>('dashboard');

  // Data Processing (Data in constants.ts is already pre-filtered for success/valid entries as requested)
  const sortedSubmissions = [...SUBMISSION_HISTORY].sort((a, b) => 
    new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
  );

  // 1. Best Score (RMSE - Lower is better)
  const bestPublicScore = SUBMISSION_HISTORY.length > 0 
    ? Math.min(...SUBMISSION_HISTORY.map(s => parseFloat(s.record!.public_result.RMSE.value)))
    : 0;

  // 2. Baseline Score (First submission)
  const baselineScore = sortedSubmissions.length > 0 
    ? parseFloat(sortedSubmissions[0].record!.public_result.RMSE.value) 
    : 0;

  // 3. Improvement Calculation (Decrease in RMSE is improvement)
  const improvementRate = baselineScore > 0 
    ? ((baselineScore - bestPublicScore) / baselineScore * 100).toFixed(1)
    : '0.0';

  // 4. Total Submissions (Count of successful attempts)
  const totalSubmissions = SUBMISSION_HISTORY.length;

  return (
    <div className="min-h-screen bg-[#0B0F19] font-sans text-slate-200 selection:bg-blue-500/30">
      
      {/* 1. Navigation Bar */}
      <nav className="border-b border-white/10 bg-[#111827]">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-7xl">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-600 to-blue-600 flex items-center justify-center shadow-lg">
              <Medal className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-white text-lg leading-tight">{USER_PROFILE.name}</span>
              <span className="text-xs text-slate-400 font-medium">AI Researcher / Data Scientist</span>
            </div>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={() => setActiveTab('dashboard')}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all flex items-center gap-2 ${
                activeTab === 'dashboard' 
                  ? 'text-white bg-white/10' 
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <LayoutDashboard size={16} />
              Dashboard
            </button>
            <button 
              onClick={() => setActiveTab('history')}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all flex items-center gap-2 ${
                activeTab === 'history' 
                  ? 'text-white bg-white/10' 
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <List size={16} />
              History
            </button>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12 max-w-7xl">
        
        {activeTab === 'dashboard' ? (
          <>
            {/* 2. Header Section */}
            <section className="mb-12">
              <div className="flex items-center gap-2 mb-3 text-blue-400 font-bold text-sm tracking-wider uppercase">
                <LayoutDashboard size={16} />
                <span>Competition Portfolio</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                {COMPETITION_INFO.title}
              </h1>
              <p className="text-slate-400 text-lg max-w-3xl leading-relaxed">
                Starting from a basic Random Forest baseline, we achieved a <span className="text-blue-400 font-bold">{improvementRate}% performance improvement</span> (RMSE {baselineScore.toFixed(0)} → {bestPublicScore.toFixed(0)}) 
                by introducing LightGBM/XGBoost ensemble strategies and advanced feature engineering techniques tailored for Seoul apartment transaction data.
              </p>
            </section>

            {/* 3. Key Metrics Cards */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <MetricCard 
                title="Best Public RMSE Score" 
                value={bestPublicScore.toFixed(4)} 
                badge="Top 5% Rank"
                badgeColor="text-emerald-400"
                icon={Trophy} 
                iconBg="bg-emerald-500/10 text-emerald-500"
              />
              <MetricCard 
                title="Total Performance Improvement" 
                value={`+${improvementRate}%`} 
                badge="vs Baseline"
                badgeColor="text-blue-400"
                icon={TrendingUp} 
                iconBg="bg-blue-500/10 text-blue-500"
              />
              <MetricCard 
                title="Total Submissions" 
                value={totalSubmissions.toString()} 
                badge="Successful Attempts"
                badgeColor="text-purple-400"
                icon={Activity} 
                iconBg="bg-purple-500/10 text-purple-500"
              />
            </section>

            {/* 4. Charts Section */}
            <section className="mb-8 bg-[#111827] rounded-2xl border border-white/5 p-6 md:p-8">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-bold text-white">Performance Trajectory</h3>
                <div className="flex gap-4 text-sm">
                  <div className="flex items-center gap-2 text-slate-400">
                    <span className="w-3 h-3 rounded-full bg-blue-500"></span> Public
                  </div>
                  <div className="flex items-center gap-2 text-slate-400">
                    <span className="w-3 h-3 rounded-full bg-emerald-500"></span> Private
                  </div>
                </div>
              </div>
              <SubmissionChart data={SUBMISSION_HISTORY} />
            </section>
          </>
        ) : (
          /* 5. Detailed Table (History View) */
          <section className="bg-[#111827] rounded-2xl border border-white/5 overflow-hidden">
            <div className="p-6 border-b border-white/5 flex justify-between items-center">
              <h3 className="text-lg font-bold text-white">Detailed Submission History</h3>
              <span className="text-sm text-slate-400">Total: {totalSubmissions} records</span>
            </div>
            <SubmissionTable submissions={SUBMISSION_HISTORY} />
          </section>
        )}

      </main>
    </div>
  );
};

export default App;
