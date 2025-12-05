import React from 'react';
import { Submission } from '../types';
import { CheckCircle2, XCircle, Clock, AlertCircle } from 'lucide-react';

interface SubmissionTableProps {
  submissions: Submission[];
}

export const SubmissionTable: React.FC<SubmissionTableProps> = ({ submissions }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left">
        <thead className="bg-[#0F1623] text-slate-400 font-medium text-xs uppercase tracking-wider">
          <tr>
            <th className="px-6 py-4">Model Description</th>
            <th className="px-6 py-4">RMSE Score</th>
            <th className="px-6 py-4">Submission Date</th>
            <th className="px-6 py-4 text-center">Selected</th>
            <th className="px-6 py-4 text-center">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/5 bg-[#111827]">
          {submissions.map((sub) => (
            <tr key={sub.id} className="hover:bg-white/5 transition-colors group">
              <td className="px-6 py-4">
                <div className="font-medium text-white group-hover:text-purple-400 transition-colors">{sub.description}</div>
                <div className="text-xs text-slate-500 mt-1 font-mono">ID: {sub.id}</div>
              </td>
              <td className="px-6 py-4">
                {sub.record ? (
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-3">
                      <span className="text-slate-500 text-[10px] uppercase w-12 tracking-wider">Public</span>
                      <span className="font-mono text-blue-400 font-medium">{Number(sub.record.public_result.RMSE.value).toFixed(4)}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-slate-500 text-[10px] uppercase w-12 tracking-wider">Private</span>
                      <span className="font-mono text-emerald-400 font-bold">{Number(sub.record.private_result.RMSE.value).toFixed(4)}</span>
                    </div>
                  </div>
                ) : (
                  <span className="text-slate-600 italic flex items-center gap-2">
                    <AlertCircle size={14} /> Evaluation Failed
                  </span>
                )}
              </td>
              <td className="px-6 py-4 text-slate-400 text-xs">
                {new Date(sub.created_at).toLocaleString('en-US', {
                  year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
                })}
              </td>
              <td className="px-6 py-4 text-center">
                {sub.final ? (
                  <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-purple-500/10 text-purple-400 ring-1 ring-purple-500/30">
                    <CheckCircle2 size={18} />
                  </div>
                ) : (
                  <span className="text-slate-700">-</span>
                )}
              </td>
              <td className="px-6 py-4 text-center">
                {sub.phase === 'Finished' && (
                  <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Complete
                  </span>
                )}
                {sub.phase === 'Failed' && (
                  <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-red-500/10 text-red-400 border border-red-500/20">
                    Failed
                  </span>
                )}
                {sub.phase === 'Evaluating' && (
                  <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">
                    Processing
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
